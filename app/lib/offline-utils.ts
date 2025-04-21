// Utility functions for offline functionality

// Check if the browser is online
export const isOnline = (): boolean => {
  return typeof navigator !== "undefined" && typeof navigator.onLine === "boolean" ? navigator.onLine : true
}

// Save data to localStorage for offline use (simpler than IndexedDB for basic needs)
export const saveToLocalStorage = (key: string, data: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error("Error saving to localStorage:", error)
  }
}

// Get data from localStorage
export const getFromLocalStorage = (key: string): any => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error("Error getting from localStorage:", error)
    return null
  }
}

// Queue contact form submissions for when back online
export const queueContactForm = (formData: any): void => {
  try {
    const queue = getFromLocalStorage("contactFormQueue") || []
    queue.push({
      ...formData,
      timestamp: new Date().toISOString(),
    })
    saveToLocalStorage("contactFormQueue", queue)
  } catch (error) {
    console.error("Error queuing contact form:", error)
  }
}

// Get queued contact form submissions
export const getQueuedContactForms = (): any[] => {
  return getFromLocalStorage("contactFormQueue") || []
}

// Clear queued contact form submissions
export const clearQueuedContactForms = (): void => {
  saveToLocalStorage("contactFormQueue", [])
}
