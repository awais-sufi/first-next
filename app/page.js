import Hero from "@/component/hero";
import Title from "@/component/Title";
import CTA from "@/component/CTA";

export default function Home() {
  return (
    <>
      {/* Navbar and Hero section with grayish background */}
      <div className="w-[60%] mx-auto">
        <Hero />
      </div>

      {/* White background section with padding - container style */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-[60%] mx-auto">
          <Title />
          <CTA />
        </div>
      </div>
    </>
  );
}
