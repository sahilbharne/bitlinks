import clientPromise from "@/Lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input
    if (!body.url || !body.shorturl) {
      return Response.json({
        success: false,
        error: true,
        message: "Missing URL or short URL."
      });
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if short URL already exists
    const existing = await collection.findOne({ shorturl: body.shorturl });
    if (existing) {
      return Response.json({
        success: false,
        error: true,
        message: "Short URL already exists."
      });
    }

    // Insert new document
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl
    });

    return Response.json({
      success: true,
      error: false,
      message: "URL generated successfully."
    });

  } catch (error) {
    console.error("API error:", error);
    return Response.json({
      success: false,
      error: true,
      message: "Internal server error."
    });
  }
}
