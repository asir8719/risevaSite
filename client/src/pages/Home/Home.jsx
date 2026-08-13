import { MdArrowDownward } from "react-icons/md";
import imghero1 from "../../assets/imghero1.webp";
import dataTransferAbstract from "../../assets/data-transfer-abstract.webp";
import { Button } from "@/components/ui/Button";

const Home = () => {
  return (
    <div>
      <div>
        <img src={imghero1} alt="imghero1" />
      </div>
      <div className="bg-purple-500">
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
    </div>
  );
};

export default Home;
