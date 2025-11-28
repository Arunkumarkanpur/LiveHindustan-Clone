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
      title: "मुख्य खबर: आर्थिक नीतियों में नया मोड़",
      excerpt: "सरकार ने आज कई अहम फैसले किए जो आर्थिक गतिविधियों पर असर डालेंगे।",
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "खेल अपडेट: टीम नेशनल ने जीत दर्ज की",
      excerpt: "नडिया ने निर्णायक प्रदर्शन करते हुए टीम को बढ़त दिलाई।",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "मनोरंजन: फिल्म समारोह में सफलता की कहानी",
      excerpt: "नयी फिल्म ने आलोचकों से तारीफें बटोरीं।",
      img: "https://images.unsplash.com/photo-1502767089025-6572583495b9?auto=format&fit=crop&w=1200&q=60",
    },
  ];

  const articles = new Array(8).fill(0).map((_, i) => ({
    id: i + 1,
    title: `खबर शीर्षक ${i + 1}`,
    excerpt:
      "यहां छोटे से छोटे सार लिखा जाएगा ताकि पढ़ने वालों को एक झलक मिल सके।",
    img: `https://picsum.photos/seed/article${i}/600/400`,
  }));

  const trending = [
    "इंडेक्स 1: चर्चा में",
    "इंडेक्स 2: तेजी से बढ़ा",
    "वीडियो: आज का हाइलाइट",
    "संपादकीय: विश्लेषण",
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
              <h2 className="text-2xl font-semibold mb-4">ताज़ा खबरें</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {articles.slice(0, 4).map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            </section>

            {/* More news */}
            <section className="mt-6">
              <h3 className="text-xl font-semibold mb-3">अधिक खबरें</h3>
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
                <h4 className="font-semibold mb-3">लोकप्रिय</h4>
                <ul className="space-y-2 text-sm">
                  {trending.map((t, i) => (
                    <li key={i} className="hover:text-blue-600 cursor-pointer">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-3">इंडिया अपडेट</h4>
                <p className="text-sm">
                  राष्ट्रीय और राज्य स्तर की प्रमुख सूचनाएं।
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom local news */}
        <section className="mt-8 bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">स्कूल/लोकल न्यूज़ (श्रेणी)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {new Array(3).fill(0).map((_, i) => (
              <div key={i} className="p-3 border rounded">
                <img
                  src={`https://picsum.photos/seed/local${i}/400/250`}
                  alt="local"
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h4 className="font-medium">लोकल खबर {i + 1}</h4>
                <p className="text-sm">
                  संक्षिप्त विवरण, क्षेत्रीय घटनाक्रम का सारांश।
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
