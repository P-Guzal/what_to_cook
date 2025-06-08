export default function getApiUrl() {
  try {
    return import.meta.env.VITE_API_URL;
  } catch (err) {
    console.log("Missing api url environment variable");
    return
  }
}
