interface ErrorPageProps {
  message: string;
  onRetry: () => void;
}

export function ErrorPage({ message, onRetry }: ErrorPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Something went wrong</h2>
        <p className="text-gray-500 mb-6">{message}</p>
        <button
          onClick={onRetry}
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
