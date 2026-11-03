import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Stack from "@/components/Stack/Stack";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import LearningPath from "@/components/LearningPath/LearningPath";
import Footer from "@/components/Footer/Footer";

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
        <About />
        <Contact />
        <LearningPath />
      </main>
      <Footer />
    </>
  );
}
