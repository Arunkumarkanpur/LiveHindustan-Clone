export default function HeroCarousel({
  stories,
}: {
  stories: { img: string; title: string; excerpt: string }[];
}) {
  if (!stories || stories.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Main big story */}
        <div className="md:col-span-2">
          <a className="block h-64 md:h-80 relative">
            <img
              src={stories[0].img}
              alt="top"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient from-black/60 to-transparent p-4">
              <h2 className="text-white text-xl font-bold">
                {stories[0].title}
              </h2>
              <p className="text-white text-sm">{stories[0].excerpt}</p>
            </div>
          </a>
        </div>

        {/* Side small stories */}
        <div className="hidden md:block border-l">
          <div className="divide-y h-full">
            {stories.slice(1).map((s, i) => (
              <a
                key={i}
                className="block p-3 hover:bg-slate-50 cursor-pointer"
              >
                <div className="text-sm font-medium">{s.title}</div>
                <div className="text-xs text-slate-500">{s.excerpt}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
