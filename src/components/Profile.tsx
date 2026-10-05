import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatar: string;
};

export default function Profile({ name, bio, avatar }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white/60 p-1.5 shadow-[0_12px_32px_-8px_rgba(120,70,40,0.35)] ring-1 ring-white/70 dark:bg-white/10 dark:ring-white/10">
        <Image
          src={avatar}
          alt={`${name} 프로필 사진`}
          width={112}
          height={112}
          unoptimized
          priority
          className="h-28 w-28 rounded-full object-cover shadow-inner"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-balance text-[15px] leading-relaxed text-foreground/60">
        {bio}
      </p>
    </section>
  );
}
