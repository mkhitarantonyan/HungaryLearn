/**
 * Мержит два массива слайдов, устраняя гонку при параллельном редактировании.
 * Используется для объединения прогресса с разных устройств/вкладок.
 * 
 * @param existing - текущий массив слайдов на сервере
 * @param incoming - новый массив слайдов от клиента
 * @returns объединённый массив без дубликатов
 */
export function mergeCompletedSlides(
  existing: string[],
  incoming: string[]
): string[] {
  return Array.from(new Set([...existing, ...incoming]));
}