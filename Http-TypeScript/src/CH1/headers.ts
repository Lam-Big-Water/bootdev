function getContentType(resp: Response): string {
    // Use the .get() method on the headers property to retrieve the Content-Type header
    const contentType = resp.headers.get('Content-Type');
    // Ensure a string is returned, defaulting to an empty string if null
    return contentType || '';
  }
  
  const response = new Response(null, {
    headers: { 'Content-Type': 'application/json' }
  });
  
  console.log(getContentType(response)); // Output: "application/json"