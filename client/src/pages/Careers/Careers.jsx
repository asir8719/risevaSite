import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Megaphone,
  MonitorSmartphone,
  Video,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const openings = [
  {
    title: "Web Developer",
    type: "Full Time",
    icon: <Code2 size={24} />,
    description:
      "Build fast, responsive and scalable websites for modern businesses.",
  },
  {
    title: "App Developer",
    type: "Full Time",
    icon: <MonitorSmartphone size={24} />,
    description:
      "Create powerful and user-friendly mobile applications and digital products.",
  },
  {
    title: "Social Media Executive",
    type: "Full Time",
    icon: <Megaphone size={24} />,
    description:
      "Plan engaging content and help brands build a strong digital presence.",
  },
  {
    title: "Video Editor",
    type: "Full Time",
    icon: <Video size={24} />,
    description:
      "Create engaging videos, reels, advertisements and promotional content.",
  },
];

const Careers = () => {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#171616] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm mb-6">
              <BriefcaseBusiness size={16} className="text-purple-400" />
              JOIN OUR TEAM
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Build your career.
              <span className="block text-purple-400">
                Create something meaningful.
              </span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-gray-300 leading-8 max-w-2xl">
              At Riseva, we build innovative digital solutions for businesses.
              Join our growing team and work on websites, mobile apps, digital
              marketing, social media and creative projects.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-widest font-semibold text-purple-600 mb-3">
              WHY RISEVA
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Grow with a team that creates the future.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Learn & Grow
              </h3>

              <p className="text-gray-600 leading-7">
                Work on diverse projects and continuously improve your skills
                with new technologies and creative challenges.
              </p>
            </div>

            <div className="border border-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Creative Freedom
              </h3>

              <p className="text-gray-600 leading-7">
                Share your ideas, experiment with new approaches and help shape
                innovative digital experiences.
              </p>
            </div>

            <div className="border border-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Real Impact
              </h3>

              <p className="text-gray-600 leading-7">
                Your work helps businesses grow through powerful technology,
                creative content and digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-widest font-semibold text-purple-600 mb-3">
                OPEN POSITIONS
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                Find your next opportunity.
              </h2>
            </div>

            <p className="text-gray-600 max-w-md">
              Don't see the perfect role? We are always looking for talented
              people to join our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openings.map((job) => (
              <div
                key={job.title}
                className="group bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-900 text-white flex items-center justify-center mb-7">
                  {job.icon}
                </div>

                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-bold">
                    {job.title}
                  </h3>

                  <span className="text-sm bg-purple-50 text-purple-600 px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>

                <p className="text-gray-600 leading-7 mb-7">
                  {job.description}
                </p>

                <NavLink
                  to="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-gray-900 group-hover:gap-4 transition-all"
                >
                  Apply now
                  <ArrowRight size={18} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#171616] text-white rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-purple-400 font-medium mb-3">
                DON'T SEE YOUR ROLE?
              </p>

              <h2 className="text-3xl md:text-5xl font-bold">
                Send us your profile anyway.
              </h2>

              <p className="text-gray-400 mt-4 max-w-2xl">
                We are always interested in meeting talented developers,
                designers, marketers and creative professionals.
              </p>
            </div>

            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 transition whitespace-nowrap"
            >
              Get in touch
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;