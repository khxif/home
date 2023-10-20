import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Specifications from "../components/Products/Specifications";
import Reviews from "../components/Products/Reviews";
import ColorSelector from "../components/Home/ColorSelector";
import ReactStars from "react-rating-stars-component";
import BreadCrumbs from "../components/Products/BreadCrumbs";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import TabButtons from "../components/Products/TabButtons";
import Quantity from "../components/Products/Quantity";
import { Heart } from "lucide-react";
import Description from "../components/Products/Description";
import RelatedProducts from "../components/Products/RelatedProducts";

export default function Product() {
  const params = useParams();
  console.log(params);

  const [activeImage, setActiveImage] = useState("/lamp1.png");
  console.log(activeImage);

  const handleImageClick = (e) => {
    const url = new URL(e.target.src);
    console.log(url.pathname);
    setActiveImage(url.pathname);
  };

  const [activeTab, setActiveTab] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Description");

  return (
    <>
      <Header />
      <BreadCrumbs />
      <main className="mx-auto my-4 max-w-7xl px-4 md:px-0">
        <section className="flex flex-col py-4 md:flex-row md:space-x-8">
          <div className="flex w-full justify-between">
            <div className="flex flex-col space-y-4">
              <div
                className={twMerge(
                  `flex h-[100px] w-[100px] cursor-pointer items-center justify-center border p-2`,
                  "border border-[#DE5212]",
                )}
              >
                <img
                  src={"/lamp1.png"}
                  alt="image"
                  onClick={handleImageClick}
                  className="h-24 object-contain"
                />
              </div>

              <div
                className={twMerge(
                  `flex h-[100px] w-[100px] cursor-pointer items-center justify-center border p-2`,
                  "border border-[#DE5212]",
                )}
              >
                <img
                  src={"/lamp2.png"}
                  alt="image"
                  onClick={handleImageClick}
                  className="h-24 object-center"
                />
              </div>

              <div
                className={twMerge(
                  `flex h-[100px] w-[100px] cursor-pointer items-center justify-center border p-2`,
                  "border border-[#DE5212]",
                )}
              >
                <img
                  src={"/lamp3.png"}
                  alt="image"
                  onClick={handleImageClick}
                  className="h-24 object-center"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img src={activeImage} alt="product" />
            </div>

            <span className="flex flex-col space-y-2">
              <img src="/FacebookIcon.svg" />
              <img src="/GoogleIcon.svg" />
              <img src="/InstagramIcon.svg" />
            </span>
          </div>

          <div
            className="flex w-full flex-col items-center justify-center py-6 md:flex-row md:justify-normal 
            md:space-x-10 md:py-0"
          >
            <div>
              <div className="space-y-2 md:w-96">
                <h1 className="text-2xl">Bucklo Wrop Wooden Chair</h1>
                <ReactStars
                  count={5}
                  size={20}
                  edit={false}
                  value={5}
                  activeColor="#E9672B"
                />
                <p className="text-sm text-[#5D5F5F]">
                  Est diam debitis an, error recusabo id pro, quo eripuit
                  civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata
                  mei. Et qui falli latine consequuntur. In appellantur
                  concludaturque pro. Est diam debitis an, error recusabo id
                  pro, quo eripuit civibus ut.
                </p>
                <span className="flex items-center justify-between py-2 text-xs text-[#5D5F5F]">
                  <p>IN STOCK</p>
                  <p>SKU: 102 05</p>
                </span>

                <div className="mt-6 flex flex-col items-start justify-start py-4">
                  <p className="text-base text-black">Color</p>
                  <ColorSelector className="justify-start py-2" />
                </div>

                <div className="space-y-3">
                  <p className="text-base text-black">Dimension</p>
                  <TabButtons
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center px-4 py-4 md:py-0">
              <Quantity quantity={quantity} setQuantity={setQuantity} />

              <span className="my-3 flex items-center space-x-4 py-4 ">
                <h1 className="text-3xl font-bold leading-10 text-[#DA3E31]">
                  $88.00
                </h1>
                <h1 className="text-xl font-light text-[#B6B8B8]">$126.00</h1>
                <span className="bg-[#CDD454] px-8 py-2 text-xs font-bold text-black">
                  30%
                </span>
              </span>

              <div className="w-full space-y-4 py-4">
                <div className="flex w-full items-center space-x-4">
                  <button className="orange-btn mt-0 w-[90%]">
                    Add to Cart
                  </button>
                  <button>
                    <Heart />
                  </button>
                </div>
                <button
                  className="btn-circle  ml-auto w-full bg-black text-white 
                hover:opacity-75 "
                >
                  Buy It Now!
                </button>
              </div>

              <span className="flex items-center space-x-2 py-4">
                <img src="/shoppingbags.svg" />
                <p className="text-sm text-[#5D5F5F]">
                  Other people want this. 138 people have this in their carts
                  right now.
                </p>
              </span>

              <span className="mr-auto flex space-x-1 py-2 text-sm">
                <p className="text-[#5D5F5F]">Want it delivered by</p>
                <p className="font-bold">Monday, 22 July ?</p>
              </span>

              <span className="mr-auto flex space-x-1 text-sm">
                <p className="text-[#5D5F5F]">Order within</p>
                <p className="font-bold">20 Hrs : 0 Min : 49 Sec</p>
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col space-x-4 py-4 md:flex-row md:py-8">
          <div
            className="flex flex-row justify-center space-x-6 border-b-[1px] md:w-52 md:flex-col md:justify-normal 
         md:space-x-0 md:space-y-6 md:border-b-0 md:border-r-[1px]"
          >
            <span
              onClick={() => setCategory("Description")}
              className={twMerge(
                "cursor-pointer pb-4 text-base text-[#5D5F5F] md:pb-0",
                category === "Description" &&
                  `border-b-2 border-b-orange-500 font-bold text-[#DE5212] md:border-b-0 md:border-r-2 md:border-r-orange-500`,
              )}
            >
              Description
            </span>
            <span
              onClick={() => setCategory("Specifications")}
              className={twMerge(
                "cursor-pointer pb-4 text-base text-[#5D5F5F] md:pb-0",
                category === "Specifications" &&
                  `border-b-2 border-b-orange-500 font-bold text-[#DE5212] md:border-b-0 md:border-r-2 md:border-r-orange-500`,
              )}
            >
              Specifications
            </span>
            <span
              onClick={() => setCategory("Reviews")}
              className={twMerge(
                "cursor-pointer pb-4 text-base text-[#5D5F5F] md:pb-0",
                category === "Reviews" &&
                  `border-b-2 border-b-orange-500 font-bold text-[#DE5212] md:border-b-0 md:border-r-2 md:border-r-orange-500`,
              )}
            >
              Reviews
            </span>
          </div>

          <div>
            {category === "Description" && <Description />}
            {category === "Specifications" && <Specifications />}
            {category === "Reviews" && <Reviews />}
          </div>
        </section>
      </main>
      <RelatedProducts />
    </>
  );
}
