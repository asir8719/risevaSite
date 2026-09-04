import { MdArrowDownward } from "react-icons/md";
import imghero1 from "../../assets/imghero1.webp";
import dataTransferAbstract from "../../assets/data-transfer-abstract.webp";
import contactImg from "../../assets/home-contact-img.webp";
import purplecircleicon1 from "../../assets/purple-circle-icon-1.svg";
import purplecircleicon2 from "../../assets/purple-circle-icon-2.svg";
import purplecircleicon3 from "../../assets/purple-circle-icon-3.svg";
import { Button } from "@/components/ui/Button";

const Home = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-[#050b12]">
        <img src={imghero1} alt="imghero1" className="block h-[72vh] w-full object-cover opacity-95 sm:h-[80vh] md:h-[100vh]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(84,104,255,0.08),transparent_25%),linear-gradient(90deg,rgba(1,4,8,0.9),rgba(1,4,8,0.35))]" />

        <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-10 xl:px-16">
          <div className="max-w-[1320px] text-white">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/2 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 shadow-[0_0_30px_rgba(110,127,255,0.08)] backdrop-blur-sm sm:text-[11px]">
              <span className="h-2 w-2 rounded-full bg-[#7a7fe6] shadow-[0_0_12px_rgba(122,127,230,0.9)]" />
              WEB DEVELOPMENT & TRAINING
            </div>

            <h1 className="mt-6 max-w-[1200px] text-[clamp(2.1rem,5vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:mt-8">
              We Build Digital Products
              <span className="mt-2 block">& Future-Ready Developers</span>
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-light text-white/80 sm:gap-3 sm:text-base md:text-[clamp(1.1rem,1.7vw,2rem)]">
              <span>Websites</span>
              <span className="text-white/40">•</span>
              <span>Web Applications</span>
              <span className="text-white/40">•</span>
              <span>E-Commerce</span>
              <span className="text-white/40">•</span>
              <span>Developer Training</span>
            </div>

            <button className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#5f6ce6] to-[#4b57d0] px-5 py-3 text-sm font-semibold uppercase shadow-[0_0_24px_rgba(95,108,230,0.45)] transition-transform duration-200 hover:-translate-y-0.5 sm:mt-10">
              Let&apos;s Connect
              <span className="text-2xl leading-none">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-20 bg-[#6366f1]">
        <section className="home-anchor-bar">
          <ul className="flex snap-x gap-4 overflow-x-auto px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white sm:justify-center sm:gap-8 sm:overflow-visible sm:px-6 sm:text-xs lg:text-sm">
            <li className="shrink-0">
              <a href="" className="flex items-center gap-1 whitespace-nowrap">CLIENTS <MdArrowDownward /></a>
            </li>
            <li className="shrink-0">
              <a href="" className="flex items-center gap-1 whitespace-nowrap">CASE STUDIES <MdArrowDownward /></a>
            </li>
            <li className="shrink-0">
              <a href="" className="flex items-center gap-1 whitespace-nowrap">ADVANTAGES <MdArrowDownward /></a>
            </li>
            <li className="shrink-0">
              <a href="" className="flex items-center gap-1 whitespace-nowrap">AWARDS <MdArrowDownward /></a>
            </li>
            <li className="shrink-0">
              <a href="" className="flex items-center gap-1 whitespace-nowrap">INSIGHTS <MdArrowDownward /></a>
            </li>
            <li className="shrink-0">
              <a href="" className="flex items-center gap-1 whitespace-nowrap">TEAM <MdArrowDownward /></a>
            </li>
          </ul>
        </section>
      </div>

      <div
        className="flex min-h-[22rem] w-full items-center justify-center bg-cover bg-center px-4 py-8 sm:px-6 lg:h-96 lg:px-8"
        style={{ backgroundImage: `url(${dataTransferAbstract})` }}
      >
        <div className="flex w-full max-w-6xl flex-col gap-6 rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-10 xl:px-14">
          <div className="flex flex-col gap-y-4 md:max-w-3xl">
            <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Build custom, AI-native solutions that deliver real business value</h1>
            <p className="text-base font-light text-white/90 sm:text-lg lg:text-xl">From strategy to deployment, we help you design, develop, and scale AI-powered software that solves complex problems and drives measurable outcomes.</p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <a href="">
              <Button variant="outline" size="lg">LEARN MORE</Button>
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl pb-12 pt-4">
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Let&apos;s talk</h2>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="w-full max-w-md self-center lg:self-start">
              <img src={contactImg} alt="conatctImg" className="w-full rounded-2xl object-cover" />
            </div>
            <div className="w-full lg:pl-4">
              <div>
                <div className="flex gap-2.5">
                  <div className="flex flex-col items-center">
                    <div className="my-1">
                      <img src={purplecircleicon2} alt="purplecircleicon2" className="w-9" />
                    </div>
                    <div className="h-full border-2 border-dashed border-[#999]"></div>
                  </div>
                  <div className="w-full pb-8 pt-2.5">
                    <h3 className="mb-3.5 text-xl font-bold sm:text-2xl">Hop on a discovery call</h3>
                    <p className="text-base text-[#444] sm:text-lg">Let&apos;s start by understanding your business. In our initial conversation, we&apos;ll explore your team setup, project goals, timeline, budget, and required expertise to see how we can align.</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className="flex flex-col items-center">
                    <div className="my-1">
                      <img src={purplecircleicon3} alt="purplecircleicon3" className="w-9" />
                    </div>
                    <div className="h-full border-2 border-dashed border-[#999]"></div>
                  </div>
                  <div className="w-full pb-8 pt-2.5">
                    <h3 className="mb-3.5 text-xl font-bold sm:text-2xl">Identify the right solution together</h3>
                    <p className="text-base text-[#444] sm:text-lg">We&apos;ll shape the project plan, figure out the best way to collaborate, and select the perfect team to get things moving.</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className="flex flex-col items-center">
                    <div className="my-1">
                      <img src={purplecircleicon1} alt="purplecircleicon1" className="w-9" />
                    </div>
                  </div>
                  <div className="w-full pb-8 pt-2.5">
                    <h3 className="mb-3.5 text-xl font-bold sm:text-2xl">Get started and accelerate fast</h3>
                    <p className="text-base text-[#444] sm:text-lg">Once we&apos;ve got the plan in place, we&apos;ll dive in. You&apos;ll get regular updates, and we&apos;ll keep things flexible, adjusting as we go to tailor to your needs.</p>
                  </div>
                </div>
              </div>
              <div>
                <Button size="lg" className="bg-linear-to-l from-[#6366F1] to-[#393B8B] text-white">LET&apos;S CONNECT</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
