export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, type } = body;

    // Validate
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // For v1: log to server console and write to a local JSON file
    const entry = {
      id: Date.now().toString(),
      name,
      email,
      message,
      type: type || "General",
      createdAt: new Date().toISOString(),
    };

    console.log("[Contact] New submission:", entry);

    // Append to local data store (works on Vercel serverless too via /tmp)
    const fs = await import("fs/promises");
    const path = await import("path");
    const dataDir = "/tmp/data";
    const dataFile = path.join(dataDir, "contacts.json");

    try {
      await fs.mkdir(dataDir, { recursive: true });
      let entries = [];
      try {
        const existing = await fs.readFile(dataFile, "utf-8");
        entries = JSON.parse(existing);
      } catch {
        // File doesn't exist yet
      }
      entries.push(entry);
      await fs.writeFile(dataFile, JSON.stringify(entries, null, 2));
    } catch (fileErr) {
      console.error("[Contact] File write error:", fileErr);
      // Non-fatal — still return success for UX
    }

    return Response.json({
      success: true,
      message: "Message received! I'll get back to you soon.",
    });
  } catch (err) {
    console.error("[Contact] Error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
