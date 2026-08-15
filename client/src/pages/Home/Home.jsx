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
      <div>
        <img src={imghero1} alt="imghero1" />
      </div>
      <div className="bg-[#6366f1] sticky top-20 z-20">
        <section className="home-anchor-bar">
          <ul className="flex justify-center gap-8">
            <li>
              <a href="">CLIENTS <MdArrowDownward /></a>
            </li>
            <li>
              <a href="">CASE STUDIES <MdArrowDownward /></a>
            </li>
            <li>
              <a href="">ADVANTAGES <MdArrowDownward /></a>
            </li>
            <li>
              <a href="">AWARDS <MdArrowDownward /></a>
            </li>
            <li>
              <a href="">INSIGHTS <MdArrowDownward /></a>
            </li>
            <li>
              <a href="">TEAM <MdArrowDownward /></a>
            </li>
          </ul>
        </section>
      </div>
      <div
        className="w-full h-96 bg-no-repeat bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${dataTransferAbstract})` }}
      >
        <div className="flex text-white bg-white/10 backdrop-blur-xl border border-white/20 h-4/5 w-[97%] rounded-3xl py-16 px-24 gap-x-32">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-4xl font-bold">Build custom, AI-native solutions that deliver real business value
            </h1>
            <p className="text-xl font-light">From strategy to deployment, we help you design, develop, and scale AI-powered software that solves complex problems and drives measurable outcomes.
            </p>
          </div>
          <div className="flex items-center">
            <a href="">
              <Button variant="outline" size="lg">LEARN MORE</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="px-2.5 pt-15 pb-2.5">
        <div className="flex flex-col gap-y-8 pt-4 pb-15">
          <h2 className="text-4xl font-bold">Let's talk</h2>
          <div className="flex">
            <div className="max-w-md">
              <img src={contactImg} alt="conatctImg" />
            </div>
            <div className="pt-2.5 pr-5 pl-10 w-full">
              <div>
                <div className="flex gap-2.5">
                  <div className="flex flex-col items-center">
                    <div className="my-1">
                      <img src={purplecircleicon2} alt="purplecircleicon2" />
                    </div>
                    <div className="border-2 border-dashed border-[#999] h-full"></div>
                  </div>
                  <div className="w-full pt-2.5 pb-8">
                    <h3 className="mb-3.5 text-2xl font-bold">Hop on a discovery call</h3>
                    <p className="text-[#444] text-lg">Let's start by understanding your business. In our initial conversation, we'll explore your team setup, project goals, timeline, budget, and required expertise to see how we can align.</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className="flex flex-col items-center">
                    <div className="my-1">
                      <img src={purplecircleicon3} alt="purplecircleicon3" />
                    </div>
                    <div className="border-2 border-dashed border-[#999] h-full"></div>
                  </div>
                  <div className="w-full pt-2.5 pb-8">
                    <h3 className="mb-3.5 text-2xl font-bold">Identify the right solution together</h3>
                    <p className="text-[#444] text-lg">We'll shape the project plan, figure out the best way to collaborate, and select the perfect team to get things moving.</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className="flex flex-col items-center">
                    <div className="my-1">
                      <img src={purplecircleicon1} alt="purplecircleicon1" />
                    </div>
                  </div>
                  <div className="w-full pt-2.5 pb-8">
                    <h3 className="mb-3.5 text-2xl font-bold">Get started and accelerate fast</h3>
                    <p className="text-[#444] text-lg">Once we've got the plan in place, we'll dive in. You'll get regular updates, and we'll keep things flexible, adjusting as we go to tailor to your needs.</p>
                  </div>
                </div>
              </div>
              <div>
                <Button size="lg" className="bg-linear-to-l from-[#6366F1] to-[#393B8B] text-white">LET'S CONNECT</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
