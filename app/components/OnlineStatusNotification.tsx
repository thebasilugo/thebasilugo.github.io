"use client"

import { useOnlineStatus } from "@/app/hooks/use-online-status"
import { Wifi, WifiOff } from "lucide-react"
import { useEffect, useState } from "react"

export default function OnlineStatusNotification() {
  const isOnline = useOnlineStatus()
  const [visible, setVisible] = useState(false)
  const [wasOffline, setWasOffline] = useState(false)

  useEffect(() => {
    if (!isOnline) {
      setVisible(true)
      setWasOffline(true)
    } else if (wasOffline) {
      // Show "back online" message briefly
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
        setWasOffline(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isOnline, wasOffline])

  if (!visible) return null

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 ${
        isOnline ? "bg-green-600 text-white" : "bg-yellow-600 text-white"
      }`}
      role="status"
      aria-live="polite"
    >
      {isOnline ? (
        <>
          <Wifi size={18} aria-hidden="true" />
          <span>You&apos;re back online!</span>
        </>
      ) : (
        <>
          <WifiOff size={18} aria-hidden="true" />
          <span>You&apos;re offline. Some features may be limited.</span>
        </>
      )}
    </div>
  )
}
