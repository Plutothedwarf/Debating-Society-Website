import Papa from 'papaparse';

// Simple in-memory cache for the session
const cache = {};

/**
 * Fetches a CSV from a URL, parses it, and returns a promise resolving to an array of objects.
 * Caches the result in memory so subsequent calls for the same URL return immediately.
 */
export function fetchAndParseCSV(url) {
  if (cache[url]) {
    return Promise.resolve(cache[url]);
  }

  return new Promise((resolve, reject) => {
    Papa.parse(url, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors && results.errors.length > 0) {
          console.error("CSV Parse Errors:", results.errors);
        }
        // Cache the parsed data
        cache[url] = results.data;
        resolve(results.data);
      },
      error: (error) => {
        console.error("CSV Fetch Error:", error);
        reject(error);
      }
    });
  });
}
