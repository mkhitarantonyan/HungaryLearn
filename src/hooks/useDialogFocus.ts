import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter((element) => {
    if (element.hidden || element.getAttribute('aria-hidden') === 'true') return false;
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && style.visibility !== 'hidden';
  });
}

/**
 * Gives a modal dialog predictable keyboard behavior and makes the page behind
 * it unavailable to assistive technology for as long as the dialog is open.
 */
export function useDialogFocus(
  isOpen: boolean,
  onClose: (() => void) | null,
  dialogRef: RefObject<HTMLElement | null>,
  overlayRef: RefObject<HTMLElement | null>,
) {
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    const overlay = overlayRef.current;
    if (!dialog || !overlay) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const inertedElements = new Map<HTMLElement, boolean>();
    let branch: HTMLElement | null = overlay;

    while (branch?.parentElement) {
      const parentElement: HTMLElement = branch.parentElement;
      Array.from(parentElement.children).forEach((sibling) => {
        if (sibling !== branch && sibling instanceof HTMLElement && !inertedElements.has(sibling)) {
          inertedElements.set(sibling, sibling.inert);
          sibling.inert = true;
        }
      });
      if (parentElement === document.body) break;
      branch = parentElement;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusFrame = window.requestAnimationFrame(() => {
      const preferredTarget = dialog.querySelector<HTMLElement>('[data-dialog-autofocus]');
      (preferredTarget ?? dialog).focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onCloseRef.current) {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = getFocusableElements(dialog);
      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (!dialog.contains(active)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && (active === first || active === dialog)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.body.style.overflow = previousOverflow;
      inertedElements.forEach((wasInert, element) => {
        element.inert = wasInert;
      });
      const restoreFocus = () => {
        if (document.querySelector('[role="dialog"][aria-modal="true"]')) return;
        const returnTarget = previouslyFocused?.isConnected && previouslyFocused.getClientRects().length > 0
          ? previouslyFocused
          : document.querySelector<HTMLElement>('[data-dialog-return-focus]');
        returnTarget?.focus();
      };
      restoreFocus();
      window.setTimeout(() => {
        const activeElement = document.activeElement;
        if (activeElement && activeElement !== document.body && activeElement.isConnected) return;
        restoreFocus();
      }, 50);
    };
  }, [dialogRef, isOpen, overlayRef]);
}
