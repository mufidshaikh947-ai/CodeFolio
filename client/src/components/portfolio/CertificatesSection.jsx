function formatDate(date) {
const API_URL = import.meta.env.VITE_API_URL;
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short"
    });

}

function CertificatesSection({ certificates }) {

    return (

        <section>

            <div className="mx-auto max-w-7xl">

                <div className="mb-14">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">

                        CERTIFICATES

                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">

                        Certifications & Achievements

                    </h2>

                </div>

                {certificates.length === 0 ? (

                    <div className="rounded-3xl border border-dashed border-slate-300 p-16 text-center">

                        <p className="text-slate-500">

                            No certificates added yet.

                        </p>

                    </div>

                ) : (

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {certificates.map((certificate) => (

                            <article
                                key={certificate._id}
                                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
                            >

                                {certificate.certificateImage ? (

                                    <img
                                        src={`${API_URL}/${certificate.certificateImage}`}
                                        alt={certificate.title}
                                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                ) : (

                                    <div className="flex h-56 items-center justify-center bg-slate-100 text-slate-400 dark:bg-slate-800">

                                        No Preview

                                    </div>

                                )}

                                <div className="p-7">

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">

                                        {certificate.title}

                                    </h3>

                                    <p className="mt-2 font-medium text-blue-600">

                                        {certificate.issuer}

                                    </p>

                                    <p className="mt-3 text-sm text-slate-500">

                                        {formatDate(certificate.issueDate)}

                                    </p>

                                    {certificate.description && (

                                        <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">

                                            {certificate.description}

                                        </p>

                                    )}

                                    {certificate.skills?.length > 0 && (

                                        <div className="mt-6 flex flex-wrap gap-2">

                                            {certificate.skills.map((skill) => (

                                                <span
                                                    key={skill}
                                                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                                >

                                                    {skill}

                                                </span>

                                            ))}

                                        </div>

                                    )}

                                    {certificate.credentialUrl && (

                                        <a
                                            href={certificate.credentialUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-8 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                                        >

                                            View Credential

                                        </a>

                                    )}

                                </div>

                            </article>

                        ))}

                    </div>

                )}

            </div>

        </section>

    );

}

export default CertificatesSection;