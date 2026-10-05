type LinkCardProps = {
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-3xl border border-white/60 bg-white/40 px-14 py-4 text-center text-[15px] font-medium shadow-[0_8px_24px_-12px_rgba(120,70,40,0.25)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_12px_28px_-12px_rgba(120,70,40,0.3)]"
    >
      {title}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums text-foreground/45">
        {count}회
      </span>
    </a>
  );
}
