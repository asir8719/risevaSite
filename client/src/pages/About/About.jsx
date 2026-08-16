const About = () => {
  return (
    <section className="bg-[#18233d] min-h-[430px] flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Small Heading */}
        <p className="text-[#08b8d4] font-semibold text-sm tracking-wide mb-5">
          ABOUT US
        </p>

        {/* Main Heading */}
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
          Building the Future,{" "}
          <span className="text-[#08b8d4]">
            One
            <br />
            Line at a Time
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl leading-8 max-w-4xl mx-auto">
          Riseva is a founder-led custom software development startup on a
          mission to help businesses transform their ideas into powerful
          digital solutions.
        </p>

      </div>
    </section>
  );
};

export default About;