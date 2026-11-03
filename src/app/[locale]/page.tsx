import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
