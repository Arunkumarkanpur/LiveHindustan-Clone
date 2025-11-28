export default function ArticleCard({
  article,
  compact = false,
}: {
  article: { img: string; title: string; excerpt: string };
  compact?: boolean;
}) {
  return (
    <article
      className={`bg-white p-3 rounded-lg shadow hover:shadow-md flex gap-3 ${
        compact ? "items-center" : "flex-col"
      }`}
    >
      <img
        src={article.img}
        alt={article.title}
        className={
          compact
            ? "w-28 h-20 object-cover rounded"
            : "w-full h-48 object-cover rounded"
        }
      />

      <div className={compact ? "flex-1" : ""}>
        <h4 className="font-semibold mt-2">{article.title}</h4>
        <p className="text-sm text-slate-600 mt-1">{article.excerpt}</p>
      </div>
    </article>
  );
}
