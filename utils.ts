// Helper function to get the correct asset path based on environment
export const getAssetPath = (path: string): string => {
  const base = (import.meta as any).env?.BASE_URL || '/';
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
