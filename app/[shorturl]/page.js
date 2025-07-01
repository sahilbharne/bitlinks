import { redirect } from "next/navigation";
import clientPromise from "@/Lib/mongodb";

export default async function Page({ params }) {
  const shorturl = params.shorturl;

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl });
  if (doc) {
    redirect(doc.url);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }
}
