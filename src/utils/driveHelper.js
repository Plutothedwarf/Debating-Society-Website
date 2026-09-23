/**
 * Extracts a Google Drive File ID from standard share links
 * Supports:
 * - https://drive.google.com/file/d/FILE_ID/view
 * - https://drive.google.com/open?id=FILE_ID
 */
export function extractDriveId(url) {
  if (!url || typeof url !== 'string') return null;

  try {
    const parsed = new URL(url);
    
    // Format: /open?id=FILE_ID or /uc?id=FILE_ID
    const idParam = parsed.searchParams.get('id');
    if (idParam) return idParam;

    // Format: /file/d/FILE_ID/view
    const pathParts = parsed.pathname.split('/');
    const dIndex = pathParts.indexOf('d');
    if (dIndex !== -1 && pathParts.length > dIndex + 1) {
      return pathParts[dIndex + 1];
    }
  } catch (err) {
    // Malformed URL
    return null;
  }

  return null;
}

/**
 * Returns a high-res thumbnail URL for a given Google Drive file link.
 * If the link is malformed or not a drive link, returns null.
 */
export function getDriveThumbnailUrl(url, size = 'w1000') {
  const id = extractDriveId(url);
  if (!id) return null;
  return `https://drive.google.com/thumbnail?id=${id}&sz=${size}`;
}
