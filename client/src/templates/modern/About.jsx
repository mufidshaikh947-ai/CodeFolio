function About({ profile }) {

    const cards = [

        {

            title: "Location",

            value: profile?.location || "Not Specified"

        },

        {

            title: "Availability",

            value: profile?.availability || "Available"

        },

        {

            title: "Role",

            value: profile?.title || "Software Developer"

        },

        {

            title: "Email",

            value: profile?.portfolioEmail || profile?.email || "Not Available"

        }

    ];

    return (

<section className="py-16 lg:py-20">            <div className="mx-auto max-w-7xl px-8">

                <div className="mb-20">

                    <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">

                        ABOUT

                    </p>

                    <h2 className="mt-4 text-5xl font-black text-white">

                        About Me

                    </h2>

                </div>

                <div className="grid gap-20 lg:grid-cols-[1.4fr_1fr]">

                    {/* Left */}

                    <div>

                        <p className="text-xl leading-10 text-slate-300">

                            {

                                profile?.about ||

                                "Passionate software developer focused on building scalable applications with clean architecture, intuitive user experiences and modern technologies."

                            }

                        </p>

                    </div>

                    {/* Right */}

                    <div className="grid gap-6">

                        {

                            cards.map((card) => (

                                <div

                                    key={card.title}

                                    className="
                                        rounded-3xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-8
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-cyan-400/40
                                    "

                                >

                                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">

                                        {card.title}

                                    </p>

                                    <h3 className="mt-4 text-2xl font-bold text-white">

                                        {card.value}

                                    </h3>

                                </div>

                            ))

                        }

                    </div>

                </div>

            </div>

        </section>

    );

}

export default About;