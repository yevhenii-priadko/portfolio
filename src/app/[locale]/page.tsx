import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Stack from "@/components/Stack/Stack";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Stack />
      </main>
    </>
  );
}
