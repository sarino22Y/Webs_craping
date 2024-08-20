import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betwee gap-4 p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to scraping
      </h1>

      <Section />

    </main>
  );
}
