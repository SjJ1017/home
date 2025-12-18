// Helper function to get the correct asset path based on environment
export const getAssetPath = (path: string): string => {
  // Don't modify absolute URLs (starting with http:// or https://)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Use BASE_URL from vite config which is set to /home/ in production
  const base = import.meta.env.BASE_URL;
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
