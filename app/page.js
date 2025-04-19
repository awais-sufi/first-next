import CTA from "@/component/CTA";
import Footer from "@/component/Footer";
import Hero from "@/component/hero";
import Navbar from "@/component/navbar";
import Title from "@/component/Title";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#F7FAFC]">
        {/* Navbar and Hero section with grayish background */}
        <div className="w-[60%] mx-auto">
          <Navbar />
          <Hero />
        </div>
        {/* White background section with padding - container style */}
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-[60%] mx-auto">
            <Title />
            <CTA />
          </div>
        </div>
        {/* Footer section */}
        <div className="bg-[#F7FAFC] px-4 sm:px-6 lg:px-8">
          <div className="w-[60%] mx-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
