export function getFaviconSrcFromHostname (hostname: string) {
  return `https://www.google.com/s2/favicons?domain=${hostname}`
}

export function getHostFromURL (str: string) {
  const url = new URL(str)
  return url?.hostname || 'blog'
}
