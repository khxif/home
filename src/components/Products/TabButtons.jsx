import { twJoin } from "tailwind-merge";

// eslint-disable-next-line react/prop-types
export default function TabButtons({ activeTab, setActiveTab }) {
  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setActiveTab("Tab1")}
        className={twJoin(
          "rounded-full border border-[#BABABA66] px-6 py-3 text-sm text-black",
          activeTab === "Tab1" && "outline outline-1 outline-black",
        )}
      >
        40x60 cm
      </button>
      <button
        onClick={() => setActiveTab("Tab2")}
        className={twJoin(
          "rounded-full border border-[#BABABA66] px-6 py-3 text-sm text-black",
          activeTab === "Tab2" && "outline outline-1 outline-black",
        )}
      >
        60x80 cm
      </button>
      <button
        onClick={() => setActiveTab("Tab3")}
        className={twJoin(
          "rounded-full border border-[#BABABA66] px-6 py-3 text-sm text-black",
          activeTab === "Tab3" && "outline outline-1 outline-black",
        )}
      >
        80x120 cm
      </button>
    </div>
  );
}
