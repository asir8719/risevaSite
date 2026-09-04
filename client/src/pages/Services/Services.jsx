import { MdArrowDownward } from "react-icons/md";
import { Link } from "react-router-dom";
import imghero2 from "../../assets/imghero2.webp";
import dataTransferAbstract from "../../assets/data-transfer-abstract.webp";
import scottGraham from "../../assets/scott-graham.jpg";
import { Button } from "@/components/ui/button";
import {
  deliverySteps,
  engagementModels,
  serviceCategories,
  services,
} from "../../data/services";

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#050b12]">
        <img
          src={imghero2}
          alt="Services hero"
          className="block h-[100vh] w-full object-cover opacity-95"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(84,104,255,0.08),transparent_25%),linear-gradient(90deg,rgba(1,4,8,0.9),rgba(1,4,8,0.35))]" />

        <div className="absolute inset-0 flex items-center px-6 md:px-10 xl:px-16">
          <div className="max-w-[1320px] text-white">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/2 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 shadow-[0_0_30px_rgba(110,127,255,0.08)] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#7a7fe6] shadow-[0_0_12px_rgba(122,127,230,0.9)]" />
              WHAT WE OFFER
            </div>

            <h1 className="mt-8 max-w-[1200px] text-[clamp(2rem,4vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
              Services Built for
              <span className="mt-2 block">Growth & Innovation</span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-[clamp(1.1rem,1.7vw,2rem)] font-light text-white/80">
              <span>Web Development</span>
              <span className="text-white/40">•</span>
              <span>Mobile Apps</span>
              <span className="text-white/40">•</span>
              <span>E-Commerce</span>
              <span className="text-white/40">•</span>
              <span>Developer Training</span>
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#5f6ce6] to-[#4b57d0] px-5 py-3 text-sm font-semibold uppercase text-white shadow-[0_0_24px_rgba(95,108,230,0.45)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get a Quote
              <span className="text-2xl leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky anchor bar */}
      <div className="sticky top-0 z-20 bg-[#6366f1]">
        <section className="home-anchor-bar">
          <ul className="flex justify-center gap-8 overflow-x-auto px-4">
            {serviceCategories.map((category) => (
              <li key={category.id}>
                <a href={`#${category.id}`}>
                  {category.label} <MdArrowDownward />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Feature banner */}
      <div
        className="flex min-h-[22rem] w-full items-center justify-center bg-cover bg-center px-4 py-10 sm:px-6 lg:h-96 lg:px-8"
        style={{ backgroundImage: `url(${dataTransferAbstract})` }}
      >
        <div className="flex w-full max-w-6xl flex-col gap-6 rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-10 xl:px-14">
          <div className="flex flex-col gap-y-4 md:max-w-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              Full-stack solutions from strategy to launch
            </h2>
            <p className="text-base font-light text-white/90 sm:text-lg lg:text-xl">
              Whether you need a new product, a platform upgrade, or a team of
              skilled developers — we deliver end-to-end services that drive
              measurable business outcomes.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Link to="/contact">
              <Button variant="outline" size="lg">
                START A PROJECT
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="px-6 py-20 md:px-10 xl:px-16">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="mt-4 max-w-2xl text-lg text-[#444]">
            From concept to deployment, we offer a complete range of digital
            services to help your business thrive in a connected world.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-36 rounded-3xl border border-[#e8e8e8] bg-white p-8 shadow-[0_4px_24px_rgba(99,102,241,0.06)] transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(99,102,241,0.12)]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#6366f1] to-[#393B8B] text-sm font-bold text-white">
                  {service.title.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-3 text-[#444] leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 px-3 py-1 text-sm font-medium text-[#393B8B]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery process */}
      <section className="bg-[#050b12] px-6 py-20 md:px-10 xl:px-16">
        <div className="mx-auto max-w-[1320px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#7a7fe6]">
            How we deliver
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white">
            From idea to production, step by step
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Every project follows a proven workflow — transparent, iterative, and
            built around your timeline.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {deliverySteps.map((item, index) => (
              <article
                key={item.step}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                {index < deliverySteps.length - 1 && (
                  <span className="absolute top-10 -right-3 hidden h-px w-6 bg-[#6366f1]/60 xl:block" />
                )}
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#6366f1] to-[#393B8B] text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="px-6 py-20 md:px-10 xl:px-16">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-4xl font-bold">Ways to work with us</h2>
          <p className="mt-4 max-w-2xl text-lg text-[#444]">
            Pick the engagement model that fits your stage — whether you need a
            one-time build, ongoing support, or hands-on training.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <article
                key={model.title}
                className="flex flex-col rounded-3xl border border-[#e8e8e8] p-8 shadow-[0_4px_24px_rgba(99,102,241,0.06)]"
              >
                <h3 className="text-2xl font-bold">{model.title}</h3>
                <p className="mt-4 flex-1 text-[#444] leading-relaxed">
                  {model.description}
                </p>
                <p className="mt-6 border-t border-[#eee] pt-5 text-sm font-medium text-[#6366f1]">
                  Best for: {model.bestFor}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-2.5 mb-2.5 overflow-hidden rounded-3xl bg-[#050b12]">
        <img
          src={scottGraham}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,18,0.95),rgba(99,102,241,0.35))]" />

        <div className="relative flex flex-col items-start justify-between gap-8 px-8 py-16 md:flex-row md:items-center md:px-16 md:py-20">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Not sure which service fits?
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Tell us what you&apos;re building — we&apos;ll recommend the
              right approach and send a no-obligation estimate within 48 hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-gradient-to-r from-[#5f6ce6] to-[#4b57d0] px-6 py-3.5 text-sm font-semibold uppercase text-white shadow-[0_0_24px_rgba(95,108,230,0.45)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Request a Quote
            <span className="text-2xl leading-none">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
