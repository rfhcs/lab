export async function getAllImages() {
  const response = await fetch("https://api.imagekit.io/v1/files?type=file", {
    headers: {
      // This is your PRIVATE key — server-side only, never expose to client
      Authorization: `Basic ${Buffer.from(process.env.IMAGEKIT_PRIVATE_KEY + ":").toString("base64")}`,
    },
    next: { revalidate: 3600 }, // Cache for 1 hour, re-fetch in background
  });

  const files = await response.json();
  return files.map((file: any) => ({
    path: file.filePath,
    name: file.name,
  }));
}
