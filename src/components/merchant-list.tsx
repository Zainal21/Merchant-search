import ReactHtmlParser from "react-html-parser";
import React from "react";
import Link from "next/link";

interface FoodListProps {
  backgroundImage: string;
  name: string;
  priceDisplay: string;
  lotLang: string;
}

export default function MerchantList(props: FoodListProps): React.JSX.Element {
  const backgroundImageStyle = {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="w-full max-w-md my-2  mx-2 bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="max-w-md mx-auto bg-white">
        <div className="h-[236px]" style={backgroundImageStyle}></div>
        <div className="p-4 sm:p-6">
          <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1 text-left">
            {props.name}
          </p>
          <div className="flex flex-row">
            {ReactHtmlParser(props.priceDisplay)}
          </div>
          <Link
            target="_blank"
            href={`https://www.google.com/maps?q=${props.lotLang}`}
            className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-black rounded-[14px] hover:bg-black/80  focus:outline-none focus:ring focus:ring-opacity-80 text-white"
          >
            View On Maps
          </Link>
        </div>
      </div>
    </div>
  );
}
