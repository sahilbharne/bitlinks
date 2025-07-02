"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    if (!url || !shortUrl) {
      alert("Please enter both the original URL and the short URL.");
      return;
    }

    fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url,
        shorturl: shortUrl,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setGenerated(`${window.location.origin}/${shortUrl}`);
          setUrl("");
          setShortUrl("");
        }
        console.log(result);
        alert(result.message);
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="mx-auto max-w-md w-full p-6 sm:p-8 md:p-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-xl my-12 flex flex-col gap-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-800 text-center">
        🔗 Shorten Your URLs
      </h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your original URL"
          className="px-4 py-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
        />
        <input
          type="text"
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
          placeholder="Enter your preferred short URL"
          className="px-4 py-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
        />
        <button
          onClick={generate}
          className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
        >
          Generate Short Link
        </button>
      </div>

      {generated && (
        <div className="flex flex-col gap-2 items-center mt-4">
          <span className="text-lg font-semibold text-purple-900">Your Short Link:</span>
          <code className="break-words text-center">
            <Link
              target="_blank"
              href={generated}
              className="text-purple-700 underline hover:text-purple-900"
            >
              {generated}
            </Link>
          </code>
        </div>
      )}
    </div>
  );
};

export default Shorten;
