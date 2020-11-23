export const preload = src => new Promise((resolve, reject) => {
  const img = new Image()
  img.onload = resolve
  img.onerror = reject
  img.src = src
})

export const preloadAll = srcs => Promise.all(srcs.map(preload))
