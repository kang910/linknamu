import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatar: string;
};

export default function Profile({ name, bio, avatar }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src={avatar}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        unoptimized
        priority
        className="h-28 w-28 rounded-full object-cover ring-2 ring-black/10 dark:ring-white/20"
      />
      <h1 className="mt-4 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-black/60 dark:text-white/60">{bio}</p>
    </section>
  );
}
