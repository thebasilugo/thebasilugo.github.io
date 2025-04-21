"use client"

interface FeedbackModalProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

export default function FeedbackModal({ message, isVisible, onClose }: FeedbackModalProps) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <p>{message}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition">
          Close
        </button>
      </div>
    </div>
  )
}
