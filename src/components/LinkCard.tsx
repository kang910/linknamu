type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-3xl border border-white/60 bg-white/40 px-6 py-4 text-center text-[15px] font-medium shadow-[0_8px_24px_-12px_rgba(120,70,40,0.25)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_12px_28px_-12px_rgba(120,70,40,0.3)]"
    >
      {title}
    </a>
  );
}
