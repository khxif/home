import Header from "../components/Header/Header";
import { logos } from "../utils/constants";
import AboutImage1 from "/AboutImage1.png";
import AboutImage2 from "/AboutImage2.png";
import AboutImage3 from "/AboutImage3.png";
import AirplaneOutlined from "/AirplaneOutlined.svg";
import DollarOutlined from "/DollarOutlined.svg";
import PhoneOutlined from "/DollarOutlined.svg";
import GiftOutlined from "/GiftOutlined.svg";

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-7xl px-4 md:px-0 mx-auto py2 md:py-4">
        <section className="flex flex-col-reverse md:flex-row md:space-x-20">
          <div className="my-8 md:my-0">
            <img src={AboutImage1} alt="Image" />
          </div>

          <div className="md:py-8 text-center md:text-start">
            <h4 className="text-[#E9672B] text-base">ABOUT US</h4>
            <h1 className="font-bold text-3xl leading-10 md:w-96 my-1">
              Just Stay Home & Enjoy Your Shopping Time
            </h1>
            <div className="text-sm space-y-4 my-3 md:w-[570px]">
              <p>
                The Expression Agenda is our global human rights strategy.
                Through it, we target the best means of protecting rights and
                freedoms on the ground, while enhancing international
                instruments that protect freedom of expression and the right to
                information around the world.
              </p>
              <p>
                Our annual report on the state of freedom of expression tracks
                global trends across major issues of freedom of expression and
                information, and how they are experienced in various countries.
              </p>
            </div>

            <div className="grid grid-cols-2 space-y-5 justify-between py-3">
              <span className="flex items-center space-x-2">
                <img src={AirplaneOutlined} />
                <span>
                  <h4 className="text-sm font-normal">Free World Delivery</h4>
                  <p className="text-sm font-normal text-[#5D5F5F]">
                    Orders over $200
                  </p>
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <img src={DollarOutlined} />
                <span>
                  <h4 className="text-sm font-normal">Money Back Guarantee</h4>
                  <p className="text-sm font-normal text-[#5D5F5F]">
                    Within 30 days
                  </p>
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <img src={PhoneOutlined} />
                <span>
                  <h4 className="text-sm font-normal">Online Support</h4>
                  <p className="text-sm font-normal text-[#5D5F5F]">
                    Free support system 24/7
                  </p>
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <img src={GiftOutlined} />
                <span>
                  <h4 className="text-sm font-normal">Member Gift</h4>
                  <p className="text-sm font-normal text-[#5D5F5F]">
                    Coupon at weekend
                  </p>
                </span>
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center max-w-7xl mx-auto space-y-3 py-4 md:w-[478px]">
          <h1 className="font-bold text-3xl leading-10 text-center">
            Makes Everything So Much Eastier It’s Even More With Melor
          </h1>
          <p className="text-sm md:w-[570px] text-center text-[#5D5F5F]">
            We believe that when we take care of our home, it takes care of us.
            That’s why we make premium quality sheets, towels, robes, rugs and
            all things soft and wonderful.
          </p>
        </section>

        <section className="flex w-full justify-around space-x-4 px-4 md:px-10 md:py-10">
          <div>
            <img src={AboutImage2} alt="About Image" />
          </div>
          <div className="flex items-center">
            <img src={AboutImage3} alt="About Image" />
          </div>
        </section>

        <section
          className="text-[#5D5F5F] space-y-5 py-6 mx-auto text-sm font-normal md:w-[930px]
         flex flex-col justify-center items-center text-center"
        >
          <p>
            Sed vulputate elit vitae magna lacinia, vel bibendum neque faucibus.
            Aliquam sed volutpat turpis. Phasellus nisl arcu, pretium eu
            faucibus sed, aliquet in lacus. Pellentesque sed lacus et ipsum
            rutrum dignissim.
          </p>
          <p>
            Praesent ultrices posuere eros ac tristique. Lorem ipsum dolor sit
            amet isse potenti. Vesquam ante aliquet lacusemper elit. Cras neque
            nulla, convallis non commodo et, euismod nonsese. At vero eos et
            accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium.
          </p>
          <p>
            Sed vulputate elit vitae magna lacinia, vel bibendum neque faucibus.
            Aliquam sed volutpat turpis. Phasellus nisl arcu, pretium eu
            faucibus sed, aliquet in lacus. Pellentesque sed lacus et ipsum
            rutrum dignissim. Praesent ultrices posuere eros ac tristique.
          </p>
        </section>

        <section className="grid px-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-7 py-8 md:space-x-4">
          {
            logos.map((src) => (
              <div key={src.id}>
                <img src={src.src} alt="logos" />
              </div>
            ))
          }
        </section>
      </main>
    </>
  );
}
