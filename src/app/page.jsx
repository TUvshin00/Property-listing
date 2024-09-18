import Hero from "@/components/part/Hero";
import HomePage from "../components/Page/HomePage";
export default function Home() {
  return (
    <main className="flex flex-col gap-[50px] p-5">
      <HomePage />
      <Hero />
    </main>
  );
}
