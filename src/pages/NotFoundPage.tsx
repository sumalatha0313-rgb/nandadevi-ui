export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Site Not Found</h2>
        <p className="text-gray-500 mb-6">The event site you're looking for doesn't exist or is no longer available.</p>
        <a href="https://kailash.app" className="text-indigo-600 hover:text-indigo-800 font-medium">
          ← Go to kailash.app
        </a>
      </div>
    </div>
  );
}
