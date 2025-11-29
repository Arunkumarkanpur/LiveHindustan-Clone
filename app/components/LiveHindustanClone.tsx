"use client";
import React from "react";

import Header from './Header';
import HeroCarousel from './HeroCarousel';
import ArticleCard from './ArticleCard';
import SearchBox from './SearchBox';
import Footer from './Footer';


export default function LiveHindustanClone() {
  const topStories = [
    {
      title: "Main news: New turn in economic policies",
      excerpt: "The government today took several important decisions which will impact economic activities.",
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Sports Update: Team National wins",
      excerpt: "Nadia gave a decisive performance and gave the team the lead.",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Entertainment: Film Festival Success Story",
      excerpt: "The new film received praise from critics.",
      img: "https://images.unsplash.com/photo-1502767089025-6572583495b9?auto=format&fit=crop&w=1200&q=60",
    },
  ];

  const articles = new Array(8).fill(0).map((_, i) => ({
    id: i + 1,
    title: `News Headline ${i + 1}`,
    excerpt:
      "A small summary will be written here so that readers can get a glimpse.",
    img: `https://picsum.photos/seed/article${i}/600/400`,
  }));

  const trending = [
    "Index 1: In discussion",
    "Index 2: Increased rapidly",
    "Video: Today's Highlight",
    "Editorial: Analysis",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT SECTION */}
          <div className="lg:col-span-2">
            <HeroCarousel stories={topStories} />

            {/* Top news */}
            <section className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {articles.slice(0, 4).map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            </section>

            {/* More news */}
            <section className="mt-6">
              <h3 className="text-xl font-semibold mb-3">More news</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {articles.slice(4).map((a) => (
                 <ArticleCard key={a.id} article={a} compact />
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <SearchBox />

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-3">popular</h4>
                <ul className="space-y-2 text-sm">
                  {trending.map((t, i) => (
                    <li key={i} className="hover:text-blue-600 cursor-pointer">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-3">India Update</h4>
                <p className="text-sm">
                  Important information at national and state level.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom local news */}
        <section className="mt-8 bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">School/Local News (Category)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {new Array(3).fill(0).map((_, i) => (
              <div key={i} className="p-3 border rounded">
                <img
                  src={`https://picsum.photos/seed/local${i}/400/250`}
                  alt="local"
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h4 className="font-medium">local news {i + 1}</h4>
                <p className="text-sm">
                  Brief description, summary of regional developments.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
