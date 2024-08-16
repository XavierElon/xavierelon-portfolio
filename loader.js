'use client'

export default function myImageLoader({ src, width, quality }) {
  // Check if the src is a local path or a remote URL
  if (src.startsWith('/')) {
    // Handle local images
    return `${src}?w=${width}&q=${quality || 75}`
  }

  // Default behavior for remote images
  return `https://images.pexels.com${src}?w=${width}&q=${quality || 75}`
}
