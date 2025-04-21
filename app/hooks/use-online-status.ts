"use client"

import { useState, useEffect } from "react"

export function useOnlineStatus() {
  // Default to true to avoid hydration mismatch
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    // Update with actual online status once mounted
    setIsOnline(navigator.onLine)

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  return isOnline
}
