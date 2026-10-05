import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col gap-10 px-6 py-16 sm:py-24">
      <Profile {...profile} />
      <LinkList links={links} />
    </main>
  );
}
