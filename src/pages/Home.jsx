import HomeHeader from "../components/Header/HomeHeader";
import Hero from "../components/Home/Hero";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="max-w-7xl mx-auto md:px-0">
        <Hero />
      </main>
    </>
  );
}
