import React from 'react';

interface AppErrorBoundaryProps {
  children: React.ReactNode;
}

interface AppErrorBoundaryState {
  error: Error | null;
}

export class AppErrorBoundary extends React.Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error('[AppErrorBoundary]', error, info.componentStack);
  }

  private handleReload = (): void => {
    window.location.reload();
  };

  private handleBackToLessons = (): void => {
    window.location.href = '/lessons';
  };

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-white border border-[#D6DEE6] rounded-2xl p-8 shadow-xl text-center space-y-4">
            <h1 className="text-xl font-bold font-mono text-[#252B2F]">Произошла ошибка загрузки</h1>
            <p className="text-sm text-[#666E7E]">
              Приложение столкнулось с неожиданной ошибкой. Попробуйте перезагрузить страницу или вернуться к списку уроков.
            </p>
            {import.meta.env.DEV && (
              <pre className="text-left text-xs bg-[#EDF4FB] border border-[#D6DEE6] rounded-lg p-3 overflow-auto max-h-48 text-[#252B2F]">
                {this.state.error.stack}
              </pre>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                onClick={this.handleReload}
                className="px-5 py-2.5 rounded-xl bg-[#116EEE] text-white font-semibold text-sm cursor-pointer"
              >
                Перезагрузить страницу
              </button>
              <button
                type="button"
                onClick={this.handleBackToLessons}
                className="px-5 py-2.5 rounded-xl border border-[#116EEE] text-[#116EEE] font-semibold text-sm cursor-pointer"
              >
                Вернуться к урокам
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
