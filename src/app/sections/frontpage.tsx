


import Image from "next/image";
import Heroimage from "@/Assets/heroimage.png";
import VitaminIcon from "@/Assets/vitamin.png";
import WeightIcon from "@/Assets/weight.png";
import FunctionalFoodIcon from "@/Assets/functionalfood.png";
import React from "react";

const Frontpage = () => {
  return (
    <section className="min-h-screen w-full bg-[#E2F5FB] flex flex-col px-8 py-12 pt-32">
      {/* Header Section */}
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#17414F] mb-6">
          Essential Vitamins
        </h1>
      </div>

      <div className="flex justify-center items-center">
        {/* Main Content and Features */}
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row lg:items-start gap-12 my-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left lg:w-1/3 flex flex-col justify-start mb-8">
            <p className="text-[#727272] font-semibold">Online Medical Supplies</p>
            <h2 className="text-2xl lg:text-4xl font-bold text-[#17414F] my-4">
              Get Your Vitamins & Minerals
            </h2>
            <button className="px-6 py-3 bg-[#17414F] text-white rounded-3xl hover:bg-[#14565F]">
              Explore
            </button>
          </div>

          {/* Middle Section - Hero Image */}
          <div className="relative w-full lg:w-1/3 flex flex-col items-center justify-center mb-8 lg:mb-0 order-1 lg:order-none">
            {/* Background Square with Curved Corners */}
            <div className="relative w-64 h-64 bg-[#FADFB8] rounded-tl-[25%] rounded-br-[25%] flex justify-center items-center">
              {/* Hero Image */}
              <Image
                src={Heroimage}
                alt="Probiotics bottle"
                className="object-contain w-full h-auto max-w-xs animate-float"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="flex flex-col lg:w-1/3 justify-start gap-8">
            {/* Vitamins */}
            <div className="flex items-center gap-3">
              <Image src={VitaminIcon} alt="Vitamins" width={64} height={64} />
              <div>
                <h4 className="text-xl font-bold text-[#17414F] mt-4">Vitamins</h4>
                <p className="text-sm text-[#17414F]">
                  Increased Vitamins and minerals in your diet
                </p>
              </div>
            </div>
            {/* Weight Loss */}
            <div className="flex items-center gap-3">
              <Image src={WeightIcon} alt="Weight Loss" width={64} height={64} />
              <div>
                <h4 className="text-xl font-bold text-[#17414F] mt-4">Weight Loss</h4>
                <p className="text-sm text-[#17414F]">
                  Find scientifically proven solutions
                </p>
              </div>
            </div>
            {/* Functional Foods */}
            <div className="flex items-center gap-3">
              <Image src={FunctionalFoodIcon} alt="Functional Foods" width={64} height={64} />
              <div>
                <h4 className="text-xl font-bold text-[#17414F]">Functional Foods</h4>
                <p className="text-sm text-[#17414F]">
                  From protein powders to baby formula
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frontpage;
