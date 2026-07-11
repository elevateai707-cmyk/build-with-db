export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const entry = {
      id: Date.now().toString(),
      email,
      createdAt: new Date().toISOString(),
    };

    console.log("[Newsletter] New subscriber:", entry);

    // Append to local data store
    const fs = await import("fs/promises");
    const path = await import("path");
    const dataDir = "/tmp/data";
    const dataFile = path.join(dataDir, "subscribers.json");

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
      console.error("[Newsletter] File write error:", fileErr);
    }

    return Response.json({
      success: true,
      message: "You're in! Check your inbox for the next build log.",
    });
  } catch (err) {
    console.error("[Newsletter] Error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
