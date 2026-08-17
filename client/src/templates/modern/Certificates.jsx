import { getAssetUrl } from "../../utils/assetUrl";

function formatDate(date) {

    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric"
    });

}

function Certificates({ certificates }) {

    return (

<section className="py-16 lg:py-20">            <div className="mx-auto max-w-7xl px-4 sm:px-8">

                {/* Heading */}

                <div className="mb-20 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">

                        ACHIEVEMENTS

                    </p>

                    <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">

                        Certificates

                    </h2>

                </div>

                {

                    certificates?.length > 0 ? (

                        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                            {

                                certificates.map((certificate) => (

                                    <div

                                        key={certificate._id}

                                        className="
                                            overflow-hidden
                                            rounded-[32px]
                                            border
                                            border-white/10
                                            bg-white/5
                                            backdrop-blur-xl
                                            transition-all
                                            duration-500
                                            hover:-translate-y-2
                                            hover:border-cyan-400/30
                                        "

                                    >

                                        {

                                            certificate.certificateImage ? (

                                                <img

src={getAssetUrl(certificate.certificateImage)}
                                                    alt={certificate.title}

                                                    className="
                                                        h-60
                                                        w-full
                                                        object-cover
                                                        transition-all
                                                        duration-500
                                                        hover:scale-105
                                                    "

                                                />

                                            ) : (

                                                <div

                                                    className="
                                                        flex
                                                        h-60
                                                        items-center
                                                        justify-center
                                                        bg-slate-900
                                                        text-slate-500
                                                    "

                                                >

                                                    No Preview

                                                </div>

                                            )

                                        }

                                        <div className="p-8">

                                            <h3 className="text-2xl font-bold text-white">

                                                {certificate.title}

                                            </h3>

                                            <p className="mt-3 text-cyan-300">

                                                {certificate.issuer}

                                            </p>

                                            <p className="mt-2 text-sm text-slate-400">

                                                {formatDate(certificate.issueDate)}

                                            </p>

                                            {

                                                certificate.description && (

                                                    <p className="mt-6 leading-8 text-slate-300">

                                                        {certificate.description}

                                                    </p>

                                                )

                                            }

                                            {

                                                certificate.skills?.length > 0 && (

                                                    <div className="mt-8 flex flex-wrap gap-2">

                                                        {

                                                            certificate.skills.map(

                                                                (skill, index) => (

                                                                    <span

                                                                        key={index}

                                                                        className="
                                                                            rounded-full
                                                                            border
                                                                            border-white/10
                                                                            bg-white/5
                                                                            px-3
                                                                            py-1
                                                                            text-sm
                                                                            text-slate-300
                                                                        "

                                                                    >

                                                                        {skill}

                                                                    </span>

                                                                )

                                                            )

                                                        }

                                                    </div>

                                                )

                                            }

                                            {

                                                certificate.credentialUrl && (

                                                    <a

                                                        href={certificate.credentialUrl}

                                                        target="_blank"

                                                        rel="noreferrer"

                                                        className="
                                                            mt-8
                                                            inline-flex
                                                            rounded-full
                                                            bg-gradient-to-r
                                                            from-cyan-400
                                                            via-sky-500
                                                            to-violet-500
                                                            px-6
                                                            py-3
                                                            font-semibold
                                                            text-slate-950
                                                            transition-all
                                                            duration-300
                                                            hover:scale-105
                                                        "

                                                    >

                                                        View Credential

                                                    </a>

                                                )

                                            }

                                        </div>

                                    </div>

                                ))

                            }

                        </div>

                    ) : (

                        <div className="rounded-3xl border border-white/10 bg-white/5 py-20 text-center">

                            <p className="text-xl text-slate-400">

                                No certificates added yet.

                            </p>

                        </div>

                    )

                }

            </div>

        </section>

    );

}

export default Certificates;
