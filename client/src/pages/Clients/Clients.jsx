import {
    Star,
    Quote,
    Smartphone,
    Globe,
    Code2,
    Megaphone,
    ArrowUpRight,
} from "lucide-react";

// First client app screenshot
import cuetApp from "../../assets/cuet-app.png";

const clients = [
    {
        name: "Syed Mohammad",
        company: "CUET Coaching Platform",
        service: "Mobile App Development",
        description:
            "We developed a complete coaching and learning application for CUET aspirants with courses, study material, exam preparation content and a user-friendly interface.",
        image: cuetApp,
        rating: 5,
        project: "CUET Coaching App",
        icon: Smartphone,
        color: "bg-blue-50",
    },

    {
        name: "Client Name",
        company: "Digital Business Platform",
        service: "Website Development",
        description:
            "A modern and responsive website designed to create a strong digital presence and help the business connect with more customers.",
        rating: 5,
        project: "Business Website",
        icon: Globe,
        color: "bg-purple-50",
    },

    {
        name: "Client Name",
        company: "Technology Startup",
        service: "Web Application Development",
        description:
            "We created a scalable and user-friendly web solution focused on improving workflow, performance and overall user experience.",
        rating: 5,
        project: "Web Application",
        icon: Code2,
        color: "bg-orange-50",
    },

    {
        name: "Client Name",
        company: "Growing Brand",
        service: "Digital Marketing",
        description:
            "Our digital marketing solutions helped improve online visibility, brand awareness and customer engagement across digital platforms.",
        rating: 5,
        project: "Digital Marketing",
        icon: Megaphone,
        color: "bg-green-50",
    },

    {
        name: "Client Name",
        company: "Creative Business",
        service: "Website & Social Media",
        description:
            "A complete digital solution including website development, creative content and social media support for business growth.",
        rating: 5,
        project: "Complete Digital Solution",
        icon: Globe,
        color: "bg-pink-50",
    },
];

const Clients = () => {
    return (
        <main className="min-h-screen bg-[#f7f7f8] py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-5 py-2 mb-5">
                        <span className="w-2 h-2 rounded-full bg-purple-600"></span>

                        <span className="text-sm font-bold tracking-[0.2em] text-purple-600">
                            OUR CLIENTS
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Trusted by businesses
                        <span className="block text-purple-600">
                            building for the future.
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 leading-8">
                        From mobile applications and websites to digital marketing
                        and creative solutions, we help businesses transform their
                        ideas into powerful digital experiences.
                    </p>
                </div>

                {/* Client Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {clients.map((client, index) => {
                        const Icon = client.icon;

                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                {/* Top */}
                                <div className="flex items-start justify-between mb-6">

                                    <div
                                        className={`w-14 h-14 rounded-2xl ${client.color} flex items-center justify-center`}
                                    >
                                        <Icon className="w-7 h-7 text-purple-600" />
                                    </div>

                                    <div className="flex items-center gap-1">
                                        {[...Array(client.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>

                                </div>

                                {/* First Client App Image */}
                                {client.image ? (
                                    <div className="mb-6 overflow-hidden rounded-2xl bg-gray-100 border border-gray-200">

                                        <div className="h-[330px] flex justify-center bg-gray-100">
                                            <img
                                                src={client.image}
                                                alt={client.project}
                                                className="h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                    </div>
                                ) : (

                                    /* Other Client Placeholder */
                                    <div
                                        className={`mb-6 h-48 rounded-2xl ${client.color} flex flex-col items-center justify-center border border-gray-100`}
                                    >
                                        <Icon className="w-12 h-12 text-purple-500 mb-3" />

                                        <p className="text-sm font-semibold text-gray-500">
                                            Project Preview
                                        </p>
                                    </div>
                                )}

                                {/* Project Type */}
                                <p className="text-sm font-bold tracking-widest uppercase text-purple-600">
                                    {client.service}
                                </p>

                                {/* Client Name */}
                                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                                    {client.name}
                                </h2>

                                {/* Company */}
                                <p className="mt-1 font-medium text-gray-500">
                                    {client.company}
                                </p>

                                {/* Description */}
                                <p className="mt-5 leading-7 text-gray-600">
                                    {client.description}
                                </p>

                                {/* Bottom */}
                                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">

                                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                                        <Quote className="w-5 h-5 text-purple-500" />

                                        <span>Client Project</span>
                                    </div>

                                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-purple-600 group-hover:rotate-45">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* Bottom CTA */}
                <div className="mt-20 rounded-3xl bg-[#171616] text-white p-10 md:p-14 text-center">

                    <p className="text-purple-400 font-semibold tracking-[0.2em] text-sm">
                        LET'S WORK TOGETHER
                    </p>

                    <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                        Have a project in mind?
                    </h2>

                    <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg">
                        Let's build something amazing together and take your
                        business to the next level.
                    </p>

                    <a
                        href="/contact"
                        className="inline-flex mt-8 items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-purple-600 transition hover:scale-105"
                    >
                        Start Your Project
                        <ArrowUpRight className="w-5 h-5" />
                    </a>

                </div>

            </div>
        </main>
    );
};

export default Clients;