export default function FilmsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="h-[340px] bg-[#154646] rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}
