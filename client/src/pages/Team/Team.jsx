const teamMembers = [
    {
        name: "Ramsha Siddiqui",
        role: "Web & SEO or Video Editing",
    },
    {
        name: "Sayed Ahmad",
        role: "Web & App Developer",
    },
    {
        name: "Asir Khan",
        role: "Web & App Developer",
    },
    {
        name: "Subham Kumar",
        role: "AI Integrated Solutions",
    },
    {
        name: "Ayush Kumar",
        role: "Social Media Executive",
    },
];

const Team = () => {
    return (
        <main className="min-h-screen bg-[#f5f5f5] py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Attractive Heading */}
                <div className="text-center mb-20">

                    {/* OUR TEAM Badge */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></span>

                        <p className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-5 py-2 text-xs font-bold tracking-[0.3em] text-purple-600">
                            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
                            OUR TEAM
                        </p>

                        <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                        Meet the people
                        <span className="block mt-2 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            behind Riseva
                        </span>
                    </h1>

                    {/* Description */}
                    <div className="mt-7 max-w-2xl mx-auto">
                        <p className="text-gray-600 text-base md:text-lg leading-8">
                            A passionate team of{" "}
                            <span className="font-semibold text-gray-900">
                                developers, marketers and creative professionals
                            </span>{" "}
                            working together to transform ideas into powerful digital
                            solutions.
                        </p>
                    </div>

                    {/* Decorative Line */}
                    <div className="flex items-center justify-center gap-3 mt-8">
                        <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                        <span className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500"></span>
                        <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    </div>

                </div>

                {/* Team Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="group">

                            {/* Image Placeholder */}
                            <div className="h-[380px] rounded-[2rem] border border-gray-300 bg-gray-200 overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">

                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-gray-400 text-sm tracking-widest">
                                        TEAM PHOTO
                                    </span>
                                </div>

                            </div>

                            {/* Name */}
                            <h2 className="mt-6 text-2xl font-extrabold uppercase text-gray-900">
                                {member.name}
                            </h2>

                            {/* Role */}
                            <p className="mt-2 text-sm font-semibold tracking-[0.18em] uppercase text-[#b8860b]">
                                {member.role}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
};

export default Team;