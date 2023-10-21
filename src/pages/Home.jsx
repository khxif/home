import { Link } from "react-router-dom";
import HomeHeader from "../components/Header/HomeHeader";
import HomeFooter from "../components/Footer/HomeFooter";
import Hero from "../components/Home/Hero";
import ProductCard from "../components/Home/ProductCard";
import { logos, productCategories } from "../utils/constants";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import ProductsGrid from "../components/Home/ProductsGrid";
import HomeCategories from "../components/Home/HomeCategories";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const offer = true;
  return (
    <>
      <HomeHeader />
      <main className="mx-auto max-w-7xl px-2 md:px-0">
        <Hero />
        <section
          className="md:py flex h-max flex-col items-center space-x-6 space-y-6 
        py-6 md:flex-row md:space-y-0"
        >
          <div
            className="card flex h-fit w-auto flex-col items-center rounded-none border border-[#DA3E31] 
          px-6 py-4 md:w-96 md:p-6"
          >
            {offer && (
              <div className="absolute left-12 top-24 flex h-14 w-14 items-center justify-center rounded-full bg-[#CDD454]">
                <h4 className="text-sm font-bold">-50%</h4>
              </div>
            )}
            <span className="flex space-x-3 text-4xl font-bold text-[#DA3E31]">
              <h1 className="flex items-center">
                F
                <img src="/ThunderIcon.svg" />
                ash
              </h1>
              <h1 className="font-normal">Sale</h1>
            </span>
            <div>
              <img src="/lamp1.png" alt="product" />
            </div>

            <div className="flex w-[95%] items-center justify-center space-x-4 bg-black/75 p-4 text-white">
              <div className="flex flex-col items-center space-y-1">
                <span className="countdown text-base font-bold">
                  <span style={{ "--value": 15 }}></span>
                </span>
                <p className="text-xs">Days</p>
              </div>
              <h1 className="font-light ">:</h1>
              <div className="flex flex-col items-center space-y-1">
                <span className="countdown text-base font-bold">
                  <span style={{ "--value": 10 }}></span>
                </span>
                <p className="text-xs">Hrs</p>
              </div>
              <h1 className="font-light ">:</h1>
              <div className="flex flex-col items-center space-y-1">
                <span className="countdown text-base font-bold">
                  <span style={{ "--value": 24 }}></span>
                </span>
                <p className="text-xs">Mins</p>
              </div>
              <h1 className="font-light ">:</h1>
              <div className="flex flex-col items-center space-y-1">
                <span className="countdown text-base font-bold">
                  <span style={{ "--value": 48 }}></span>
                </span>
                <p className="text-xs font-light">Secs</p>
              </div>
            </div>

            <div className="py-4 md:py-6">colors</div>

            <p className="text-lg font-normal text-[#5D5F5F]">
              Bucklo Wrop Wooden Table
            </p>

            <span className="flex items-center justify-center space-x-4 py-4">
              <h1 className="text-xl font-bold leading-10 text-[#DA3E31]">
                $19.99
              </h1>
              <h1 className="text-lg leading-10 text-[#B6B8B8]">$54.20</h1>
            </span>

            <div>
              {/* Progress */}
              progress
            </div>
          </div>
          <div className="md:flex-1">
            <h1 className="pb-4 text-center text-2xl font-bold md:text-3xl">
              Latest Products
            </h1>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>

        <section
          className="mb-2 grid w-full grid-cols-1 flex-col items-center justify-center gap-4 py-6 md:grid-cols-2
         md:justify-between md:gap-10 "
        >
          <div
            className="relative flex h-96 items-center justify-center overflow-hidden 
            bg-[#FDF2E8] p-6 text-center  md:max-w-[690px]"
          >
            <img
              src="/lamp5.png"
              alt="product"
              className="absolute -left-14 w-48 object-contain sm:-left-6 md:w-96 md:static"
            />
            <div className="z-30 mx-auto">
              <h4 className="text-sm uppercase text-[#E9672B] md:text-base">
                2020’s NEW COLLECTION
              </h4>
              <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Comfortable Chair
              </h1>
              <Link to="/">
                <button className="orange-btn mt-6">Explore Now</button>
              </Link>
            </div>
            <img
              src="lamp2.png"
              alt="product"
              className="absolute -right-28 w-56 object-contain sm:-right-12  md:w-auto md:static"
            />
          </div>

          <div
            className="relative flex h-96 items-center justify-center overflow-hidden 
            bg-[#F4F4F5] p-6 text-center  md:max-w-[690px]"
          >
            <img
              src="/lamp5.png"
              alt="product"
              className="absolute -left-14 w-48 object-contain sm:-left-6 md:w-96 md:static"
            />
            <div className="z-30 mx-auto">
              <h4 className="text-sm uppercase text-[#E9672B] md:text-base">
                2020’s NEW COLLECTION
              </h4>
              <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Vega Table Lamp
              </h1>
              <Link to="/">
                <button className="orange-btn mt-6">Explore Now</button>
              </Link>
            </div>
            <img
              src="lamp2.png"
              alt="product"
              className="absolute -right-28 w-56 object-contain sm:-right-12  md:w-auto md:static"
            />
          </div>
        </section>

        <section className="mt-2 flex flex-col items-center justify-center py-6 text-center">
          <h1 className="py-2 text-2xl font-bold md:text-3xl">
            Our Feature Products
          </h1>

          <div className="w-full space-x-4 overflow-x-scroll py-4 scrollbar-hide">
            {productCategories.map((category) => (
              <Link key={category} to="/">
                <span
                  className={twMerge(
                    "rounded-full px-6 py-2 text-xs transition-all duration-200 md:text-sm ",
                    selectedCategory === category
                      ? "bg-[#E9672B] font-semibold  text-white"
                      : "bg-[#FBF8F5] text-[#E9672B] hover:brightness-110",
                  )}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </span>
              </Link>
            ))}
          </div>
          <ProductsGrid />

          <div className="w-full md:px-10">
            <Link
              to="/sales"
              className="flex w-full items-center justify-center bg-[#e8f0ef] p-2 text-center sm:p-4"
            >
              <h4 className="py-2 text-base font-normal text-[#103D37] md:text-lg">
                Join newsletter and get 15% discount
              </h4>
            </Link>
          </div>

          <div className="flex flex-col space-y-4 py-4 md:py-6">
            <h1 className="py-2 text-2xl font-bold md:text-3xl">
              Top Trending Products
            </h1>
            <ProductsGrid />
          </div>

          <div className="flex flex-col space-y-4 py-4 md:py-6">
            <h1 className="py-2 text-2xl font-bold md:text-3xl">New Arrival</h1>
            <ProductsGrid />
          </div>
        </section>

        <HomeCategories />

        <section>
          <h4 className="border-gray-400 py-3 text-center text-lg underline">
            <a href="#">Follow us on instagram</a>
          </h4>
          <div className="flex items-center justify-center gap-3 overflow-x-scroll py-4 scrollbar-hide">
            <img src="/AboutImage1.png" className="h-64 w-64" />
            <img src="/AboutImage2.png" className="h-64 w-64" />
            <img src="/AboutImage3.png" className="h-64 w-64" />
            <img src="/AboutImage2.png" className="h-64 w-64" />
            <img src="/AboutImage3.png" className="h-64 w-64" />
          </div>
          <div className="flex items-center overflow-y-scroll py-8 scrollbar-hide md:space-x-4">
            {logos.map((src) => (
              <div key={src.id}>
                <img src={src.src} alt="logos" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <HomeFooter />
    </>
  );
}
