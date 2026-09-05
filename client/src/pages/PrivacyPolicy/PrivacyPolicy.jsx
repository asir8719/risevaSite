const PrivacyPolicy = () => {
    return (
        <main className="min-h-screen bg-[#f5f5f5] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-10 lg:p-14">

                <p className="text-purple-600 font-semibold tracking-[0.2em] text-sm uppercase mb-4">
                    Riseva
                </p>

                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                    Privacy Policy
                </h1>

                <div className="space-y-8 text-gray-600 leading-7">

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Introduction
                        </h2>
                        <p>
                            At Riseva, we respect your privacy and are committed to
                            protecting your personal information. This Privacy Policy
                            explains how we collect, use, and protect your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Information We Collect
                        </h2>
                        <p>
                            We may collect information such as your name, email address,
                            phone number, and other details that you voluntarily provide
                            when contacting us or using our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            How We Use Your Information
                        </h2>
                        <p>
                            We use your information to communicate with you, provide our
                            services, improve our website, and respond to your queries.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Data Protection
                        </h2>
                        <p>
                            We take appropriate security measures to protect your personal
                            information from unauthorized access or misuse.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Contact Us
                        </h2>
                        <p>
                            If you have any questions regarding our Privacy Policy, please
                            contact us at{" "}
                            <a
                                href="mailto:riseva.tech5587@gmail.com"
                                className="text-purple-600 font-medium hover:underline"
                            >
                                riseva.tech5587@gmail.com
                            </a>
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;