import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="text-center py-11 mt-12 bg-[#F7FAFC]">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold"
          data-aos="fade-up"
        >
          The Modern Landing page for
        </h1>
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#03a9f4] py-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          React developers
        </h1>
        <p
          className="text-xl text-[#718096] max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          The easiest way to build a React landing page in seconds.
        </p>
        <div
          className="flex justify-center gap-4 py-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link
            href="/pricing"
            className="bg-[#03a9f4] hover:bg-[#03a9f4]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Download Your Free Theme
          </Link>
          <Link
            href="/docs"
            className="bg-white hover:bg-gray-100 text-[#2d3748] px-8 py-3 rounded-lg font-medium border border-gray-300 transition-colors"
          >
            Read the Docs
          </Link>
        </div>

        {/* Stats */}
        <div
          className="flex justify-center gap-12 mt-12 pt-8"
          data-aos="flip-up"
          data-aos-delay="400"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-[#03a9f4]">10K+</p>
            <p className="text-sm text-[#718096]">Downloads</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#03a9f4]">500+</p>
            <p className="text-sm text-[#718096]">GitHub Stars</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#03a9f4]">50+</p>
            <p className="text-sm text-[#718096]">Contributors</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
