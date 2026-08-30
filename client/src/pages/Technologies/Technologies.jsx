import { useMemo, useState } from "react";
import {
  FiGlobe,
  FiSmartphone,
  FiVideo,
  FiTrendingUp,
  FiCpu,
  FiCloud,
  FiSearch,
  FiArrowRight,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";

const technologyData = [
  {
    id: 1,
    title: "Web Development",
    category: "Web",
    icon: <FiGlobe />,
    description:
      "We build fast, responsive and scalable websites that help businesses establish a strong digital presence.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    features: [
      "Responsive Design",
      "SEO Friendly",
      "High Performance",
      "Secure Architecture",
    ],
  },
  {
    id: 2,
    title: "App Development",
    category: "App",
    icon: <FiSmartphone />,
    description:
      "Powerful mobile applications designed to deliver smooth experiences across Android and iOS.",
    technologies: [
      "React Native",
      "Flutter",
      "Firebase",
      "Node.js",
      "REST API",
    ],
    features: [
      "Android & iOS",
      "Push Notifications",
      "API Integration",
      "Scalable Backend",
    ],
  },
  {
    id: 3,
    title: "Video Editing",
    category: "Creative",
    icon: <FiVideo />,
    description:
      "Creative video solutions for brands, social media, advertisements, reels and promotional campaigns.",
    technologies: [
      "Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut",
    ],
    features: [
      "Social Media Reels",
      "Brand Videos",
      "Promotional Videos",
      "Motion Graphics",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing",
    category: "Marketing",
    icon: <FiTrendingUp />,
    description:
      "Data-driven marketing strategies designed to increase visibility, engagement, leads and conversions.",
    technologies: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Analytics",
      "Social Media",
    ],
    features: [
      "Lead Generation",
      "SEO Optimization",
      "Paid Advertising",
      "Social Media Growth",
    ],
  },
  {
    id: 5,
    title: "AI & Automation",
    category: "AI",
    icon: <FiCpu />,
    description:
      "Smart AI-powered solutions that automate repetitive tasks and help businesses work more efficiently.",
    technologies: [
      "Python",
      "OpenAI",
      "Machine Learning",
      "APIs",
      "Automation",
    ],
    features: [
      "AI Integration",
      "Business Automation",
      "AI Chatbots",
      "Data Processing",
    ],
  },
  {
    id: 6,
    title: "Cloud & DevOps",
    category: "Cloud",
    icon: <FiCloud />,
    description:
      "Reliable cloud infrastructure and deployment solutions for modern digital products.",
    technologies: [
      "AWS",
      "Docker",
      "GitHub",
      "Linux",
      "CI/CD",
    ],
    features: [
      "Cloud Deployment",
      "Docker Containers",
      "CI/CD Pipelines",
      "Server Management",
    ],
  },
];

const categories = [
  "All",
  "Web",
  "App",
  "Creative",
  "Marketing",
  "AI",
  "Cloud",
];

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState(null);

  const filteredTechnologies = useMemo(() => {
    return technologyData.filter((item) => {
      const categoryMatch =
        activeCategory === "All" || item.category === activeCategory;

      const searchMatch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.technologies.some((tech) =>
          tech.toLowerCase().includes(search.toLowerCase())
        );

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                            bg-gray-100 text-gray-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Our Technology Stack
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Technology that
              <span className="block text-gray-500">
                moves your business
              </span>
              forward.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-gray-600 max-w-2xl leading-8">
              From websites and mobile apps to AI, digital marketing and
              creative solutions — we use modern technology to turn ideas
              into impactful digital experiences.
            </p>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">

            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-3xl font-bold">6+</h3>
              <p className="text-gray-500 mt-1">Technology Areas</p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-gray-500 mt-1">Technologies</p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-gray-500 mt-1">Custom Solutions</p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-gray-500 mt-1">Digital Support</p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= TECHNOLOGIES ================= */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end
                          justify-between gap-8 mb-10">

            <div>
              <p className="text-sm uppercase tracking-widest
                            font-semibold text-gray-500 mb-3">
                What We Use
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                Explore our technologies
              </h2>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">

              <FiSearch
                className="absolute left-4 top-1/2
                           -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search technology..."
                className="w-full bg-white border border-gray-200
                           rounded-xl py-3.5 pl-11 pr-4
                           outline-none focus:border-gray-500
                           transition"
              />

            </div>

          </div>


          {/* Category Filters */}
          <div className="flex gap-3 overflow-x-auto pb-3 mb-10">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full whitespace-nowrap
                  text-sm font-medium transition
                  ${
                    activeCategory === category
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
                  }`}
              >
                {category}
              </button>
            ))}

          </div>


          {/* Cards */}
          {filteredTechnologies.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {filteredTechnologies.map((item) => (

                <div
                  key={item.id}
                  className="group bg-white border border-gray-200
                             rounded-3xl p-7
                             hover:-translate-y-2
                             hover:shadow-xl
                             transition-all duration-300"
                >

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gray-900
                                  text-white flex items-center justify-center
                                  text-2xl mb-7
                                  group-hover:scale-110
                                  transition">
                    {item.icon}
                  </div>

                  <div className="flex items-center justify-between mb-3">

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <span className="text-xs px-3 py-1 rounded-full
                                     bg-gray-100 text-gray-600">
                      {item.category}
                    </span>

                  </div>

                  <p className="text-gray-600 leading-7 mb-6">
                    {item.description}
                  </p>


                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-7">

                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg
                                   bg-gray-50 border border-gray-100
                                   text-sm text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>


                  {/* Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedTech(item)}
                    className="flex items-center gap-2
                               font-semibold text-gray-900
                               group-hover:gap-4 transition-all"
                  >
                    Explore solution
                    <FiArrowRight />
                  </button>

                </div>

              ))}

            </div>

          ) : (

            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-2">
                No technology found
              </h3>

              <p className="text-gray-500">
                Try another search or category.
              </p>
            </div>

          )}

        </div>

      </section>


      {/* ================= PROCESS ================= */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-14">

            <p className="text-sm uppercase tracking-widest
                          font-semibold text-gray-500 mb-3">
              Our Approach
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              We choose technology based on your goals.
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-3xl p-8">

              <span className="text-sm font-semibold text-gray-400">
                01
              </span>

              <h3 className="text-2xl font-bold mt-5 mb-3">
                Understand
              </h3>

              <p className="text-gray-600 leading-7">
                We understand your business, audience and requirements
                before selecting the right technology.
              </p>

            </div>


            <div className="border border-gray-200 rounded-3xl p-8">

              <span className="text-sm font-semibold text-gray-400">
                02
              </span>

              <h3 className="text-2xl font-bold mt-5 mb-3">
                Build
              </h3>

              <p className="text-gray-600 leading-7">
                Our team combines technology, creativity and design to
                create solutions that solve real business problems.
              </p>

            </div>


            <div className="border border-gray-200 rounded-3xl p-8">

              <span className="text-sm font-semibold text-gray-400">
                03
              </span>

              <h3 className="text-2xl font-bold mt-5 mb-3">
                Scale
              </h3>

              <p className="text-gray-600 leading-7">
                We build scalable systems that can grow with your
                business and future requirements.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gray-900 rounded-3xl
                          px-8 py-14 md:px-14
                          text-white
                          flex flex-col md:flex-row
                          items-start md:items-center
                          justify-between gap-8">

            <div className="max-w-2xl">

              <p className="text-gray-400 mb-3">
                Have an idea?
              </p>

              <h2 className="text-3xl md:text-5xl font-bold">
                Let's build something
                <span className="text-gray-400"> remarkable.</span>
              </h2>

              <p className="text-gray-400 mt-5 leading-7">
                Tell us about your project and we'll help you choose
                the right technology and strategy.
              </p>

            </div>

            <button
              type="button"
              className="bg-white text-gray-900
                         px-7 py-4 rounded-xl
                         font-semibold
                         flex items-center gap-3
                         hover:bg-gray-200 transition
                         whitespace-nowrap"
            >
              Start a project
              <FiArrowRight />
            </button>

          </div>

        </div>

      </section>


      {/* ================= DETAIL MODAL ================= */}
      {selectedTech && (

        <div
          className="fixed inset-0 z-50 bg-black/50
                     flex items-center justify-center p-5"
          onClick={() => setSelectedTech(null)}
        >

          <div
            className="bg-white w-full max-w-2xl
                       rounded-3xl p-7 md:p-10
                       max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="flex justify-between items-start gap-5">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl
                                bg-gray-900 text-white
                                flex items-center justify-center
                                text-2xl">
                  {selectedTech.icon}
                </div>

                <div>
                  <span className="text-sm text-gray-500">
                    {selectedTech.category}
                  </span>

                  <h3 className="text-2xl font-bold">
                    {selectedTech.title}
                  </h3>
                </div>

              </div>

              <button
                type="button"
                onClick={() => setSelectedTech(null)}
                className="w-10 h-10 rounded-full
                           bg-gray-100 flex items-center justify-center
                           hover:bg-gray-200 transition"
                aria-label="Close"
              >
                <FiX />
              </button>

            </div>


            <p className="text-gray-600 leading-7 mt-7">
              {selectedTech.description}
            </p>


            {/* Features */}
            <h4 className="font-bold text-xl mt-8 mb-4">
              What we deliver
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {selectedTech.features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3
                             bg-gray-50 rounded-xl p-4"
                >
                  <FiCheckCircle className="text-green-600 shrink-0" />
                  <span className="text-gray-700">
                    {feature}
                  </span>
                </div>

              ))}

            </div>


            {/* Stack */}
            <h4 className="font-bold text-xl mt-8 mb-4">
              Technology stack
            </h4>

            <div className="flex flex-wrap gap-2">

              {selectedTech.technologies.map((tech) => (

                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg
                             bg-gray-900 text-white text-sm"
                >
                  {tech}
                </span>

              ))}

            </div>


            <button
              type="button"
              onClick={() => setSelectedTech(null)}
              className="mt-8 w-full bg-gray-900 text-white
                         py-4 rounded-xl font-semibold
                         hover:bg-gray-800 transition"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </main>
  );
};

export default Technologies;