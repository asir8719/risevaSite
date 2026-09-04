import { Link } from "react-router-dom";
import { FaArrowRight, FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import imghero2 from "../../assets/scott-graham.jpg";
import dataTransferAbstract from "../../assets/data-transfer-abstract.webp";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from '@formspree/react';

const contactMethods = [
  {
    icon: FaPhoneAlt,
    label: "Call us",
    value: "+91 9608376930",
    href: "tel:+919608376930",
  },
  {
    icon: FaEnvelope,
    label: "Email us",
    value: "riseva.tech5587@gmail.com",
    href: "mailto:riseva.tech5587@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Visit us",
    value: "Delhi, IN",
    href: "https://maps.app.goo.gl/MbDYUHPCr6SY63Aq6",
  },
  {
    icon: FaClock,
    label: "Availability",
    value: "Mon–Fri • 9:00 AM–6:00 PM",
    href: "#availability",
  },
];

const reasons = [
  "Product strategy and discovery",
  "Custom web and AI product builds",
  "Dedicated engineering support",
  "Staff augmentation and training",
];

const Contact = () => {
  const [state, handleSubmit] = useForm("xnpqnbgk");

  if (state.succeeded) {
    return (
      <div className="bg-[#f5f7fb] px-4 py-16 text-slate-900 sm:px-6 md:px-10 md:py-24 xl:px-16">
        <div className="mx-auto max-w-[700px] rounded-[32px] border border-[#dfe7ff] bg-white p-6 text-center shadow-[0_10px_40px_rgba(99,102,241,0.08)] sm:p-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#6366f1]">
            Message sent
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Thanks for reaching out.</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Your message has been submitted successfully. We&apos;ll get back to you shortly.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#5f6ce6] to-[#4b57d0] px-5 py-3 text-sm font-semibold uppercase text-white shadow-[0_0_24px_rgba(95,108,230,0.45)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f7fb] text-slate-900">
      <div className="relative overflow-hidden bg-[#050b12]">
        <img
          src={imghero2}
          alt="Contact hero"
          className="block h-[70vh] w-full object-cover opacity-95 sm:h-[78vh] md:h-[100vh]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(84,104,255,0.08),transparent_25%),linear-gradient(90deg,rgba(1,4,8,0.9),rgba(1,4,8,0.35))]" />

        <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-10 xl:px-16">
          <div className="max-w-[1320px] text-white">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/2 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 shadow-[0_0_30px_rgba(110,127,255,0.08)] backdrop-blur-sm sm:px-5 sm:text-[11px]">
              <span className="h-2 w-2 rounded-full bg-[#7a7fe6] shadow-[0_0_12px_rgba(122,127,230,0.9)]" />
              Contact
            </div>

            <h1 className="mt-6 max-w-[1200px] text-[clamp(2.1rem,5vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:mt-8">
              Let&apos;s build the
              <span className="mt-2 block">next chapter of your business</span>
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-light text-white/80 sm:mt-8 sm:gap-3 sm:text-base md:text-[clamp(1.1rem,1.7vw,2rem)]">
              <span>Strategy</span>
              <span className="text-white/40">•</span>
              <span>Design</span>
              <span className="text-white/40">•</span>
              <span>Development</span>
              <span className="text-white/40">•</span>
              <span>Growth</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#5f6ce6] to-[#4b57d0] px-5 py-3 text-sm font-semibold uppercase text-white shadow-[0_0_24px_rgba(95,108,230,0.45)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Explore Services
                <span className="text-2xl leading-none">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-20 bg-[#6366f1]">
        <section className="home-anchor-bar">
          <ul className="flex justify-center gap-4 overflow-x-auto px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white sm:gap-8 sm:text-[13px]">
            <li className="shrink-0">
              <a href="#contact-form" className="flex items-center gap-1 whitespace-nowrap">Contact Form</a>
            </li>
            <li className="shrink-0">
              <a href="#details" className="flex items-center gap-1 whitespace-nowrap">Details</a>
            </li>
            <li className="shrink-0">
              <a href="#faq" className="flex items-center gap-1 whitespace-nowrap">FAQ</a>
            </li>
          </ul>
        </section>
      </div>

      <div
        className="flex min-h-[22rem] w-full items-center justify-center bg-cover bg-center px-4 py-10 sm:px-6 lg:h-96 lg:px-8"
        style={{ backgroundImage: `url(${dataTransferAbstract})` }}
      >
        <div className="flex w-full max-w-6xl flex-col gap-6 rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-10 xl:px-14">
          <div className="flex flex-col gap-y-4 md:max-w-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              Tell us what you&apos;re building — we&apos;ll help shape it.
            </h2>
            <p className="text-base font-light text-white/90 sm:text-lg lg:text-xl">
              Whether you need a digital product, a productized service, or a dedicated technical partner, we&apos;ll help define the right plan to move faster.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <a href="#contact-form">
              <Button className="cursor-pointer" variant="outline" size="lg">
                START A PROJECT
              </Button>
            </a>
          </div>
        </div>
      </div>

      <main className="px-4 py-12 sm:px-6 md:px-10 md:py-20 xl:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <section id="contact-form" className="rounded-[32px] border border-[#e8e8e8] bg-white p-5 shadow-[0_4px_24px_rgba(99,102,241,0.06)] sm:p-8 md:p-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#6366f1]">
                Inquiry form
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Send a quick message</h2>
              <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
                Share your goals, timeline, and the kind of support you need. We&apos;ll reach out with next steps.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Full name
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#6366f1] focus:bg-white"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Email address
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#6366f1] focus:bg-white"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Company
                  <input
                    type="text"
                    name="company"
                    placeholder="Company or brand"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#6366f1] focus:bg-white"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Budget range
                  <select name="budget" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#6366f1] focus:bg-white">
                    <option value="">Select a range</option>
                    <option>$5k - $15k</option>
                    <option>$15k - $50k</option>
                    <option>$50k - $150k</option>
                    <option>$150k+</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 md:col-span-2">
                  Project details
                  <textarea
                    rows="6"
                    name="details"
                    required
                    placeholder="Tell us about your goals, timeline, and what you need help with."
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#6366f1] focus:bg-white"
                  />
                  <ValidationError prefix="Details" field="details" errors={state.errors} />
                </label>

                <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-500">
                    Usually replies within 1 business day.
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={state.submitting}
                    className="w-full rounded-xl bg-gradient-to-r from-[#6366f1] to-[#393B8B] text-white shadow-[0_8px_28px_rgba(99,102,241,0.25)] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {state.submitting ? "Sending..." : "Send inquiry"}
                    <FaArrowRight className="ml-2" />
                  </Button>
                </div>

                {state.errors && state.errors.length > 0 && (
                  <p className="md:col-span-2 text-sm text-red-600">
                    Please fix the highlighted fields and try again.
                  </p>
                )}
              </form>
            </section>

            <aside id="details" className="space-y-4 sm:space-y-6">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group block rounded-[28px] border border-[#e8e8e8] bg-white p-4 shadow-[0_4px_24px_rgba(99,102,241,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.12)] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#393B8B] text-lg text-white shadow-[0_8px_22px_rgba(99,102,241,0.3)]">
                      <Icon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
                        {label}
                      </p>
                      <p className="mt-2 text-base font-semibold text-slate-900 group-hover:text-[#393B8B] sm:text-xl">
                        {value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}

              <div id="availability" className="rounded-[28px] border border-[#e8e8e8] bg-[#050b12] p-5 text-white shadow-[0_8px_30px_rgba(5,11,18,0.12)] sm:p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#9aa5ff]">
                  Why teams reach out
                </p>
                <ul className="mt-5 space-y-4 text-white/80">
                  {reasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#7a7fe6]" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <section id="faq" className="px-4 pb-12 sm:px-6 md:px-10 md:pb-20 xl:px-16">
        <div className="mx-auto max-w-[1320px] rounded-[32px] border border-[#e8e8e8] bg-white p-5 shadow-[0_4px_24px_rgba(99,102,241,0.06)] sm:p-8 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#6366f1]">
                Quick answers
              </p>
              <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
                Common questions before we start
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["How fast can we start?", "Most projects begin with a discovery call within a few days and move into implementation shortly after."],
              ["Do you work remotely?", "Yes. We work with clients across geographies and can collaborate with your in-house team or operate as a fully remote partner."],
              ["What kinds of projects fit?", "We usually support product builds, redesigns, e-commerce projects, internal tooling, and technical training engagements."],
              ["Can you support existing teams?", "Absolutely. We frequently plug into existing teams as product engineers, designers, consultants, or fractional technical leads."],
            ].map(([question, answer]) => (
              <article key={question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-bold text-slate-900">{question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-2.5 mb-2.5 overflow-hidden rounded-[32px] bg-[#050b12]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_30%)]" />
        <div className="relative flex flex-col items-start justify-between gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:px-16 md:py-20">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#9aa5ff]">
              Ready when you are
            </p>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Let&apos;s shape your next product move.
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold uppercase text-[#050b12] shadow-[0_0_24px_rgba(255,255,255,0.15)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            See what we do
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
