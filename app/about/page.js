"use client";
import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-gradient-to-b from-purple-50 via-purple-100 to-purple-50 min-h-screen py-12 px-4 sm:px-8 md:px-16">
      <section className="max-w-4xl mx-auto flex flex-col gap-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-800 text-center">
          About BitLinks
        </h1>
        <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
          BitLinks is a modern, privacy-focused URL shortener designed to make sharing your long, complicated URLs fast, easy, and secure — without tracking your data.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-purple-700">Why BitLinks?</h2>
            <p className="text-gray-600">
              Most URL shorteners require login, track your data, or serve intrusive ads. BitLinks is built for simplicity and privacy: no logins, no ads, just fast URL shortening.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-purple-700">Our Mission</h2>
            <p className="text-gray-600">
              We believe sharing links should be quick, secure, and hassle-free. Our mission is to empower everyone to shorten and share URLs without compromising privacy.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-purple-700">Built for Developers & Creators</h2>
            <p className="text-gray-600">
              Whether you’re a developer, blogger, or just sharing links with friends, BitLinks helps you keep your URLs clean and easy to manage.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-purple-700">Open Source</h2>
            <p className="text-gray-600">
              BitLinks is fully open source! Check out our code, suggest improvements, or contribute directly to help make BitLinks better for everyone.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-700 text-lg">
            Ready to get started?
          </p>
          <Link href="/shorten">
            <button className="mt-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition active:scale-95">
              Shorten Your First Link
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
