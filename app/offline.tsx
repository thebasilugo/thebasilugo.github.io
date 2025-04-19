import Link from "next/link"
import { WifiOff } from "lucide-react"

export default function OfflineFallback() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <WifiOff className="mx-auto h-16 w-16 text-yellow-500 mb-6" aria-hidden="true" />
        <h1 className="text-2xl font-bold mb-4">You're Offline</h1>
        <p className="mb-6">
          It looks like you don't have an internet connection right now. Some features may be limited until you're back
          online.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Don't worry though! You can still browse previously visited pages.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}
