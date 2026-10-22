async function getData(url) {
  try {
    const response = await fetch(url);
    // Check if the HTTP status is 200-299
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    // This logs the specific technical error instead of just a generic string
    console.error("Failed to fetch data:", error.message);
  }
}
