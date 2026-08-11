import { API_BASE_URL } from "../../constants/api";


function formatDate(date) {

    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric"
    });

}

function Certificates({ certificates }) {


    return (

        <section className="py-24">

            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

                <div className="mb-16 text-center">

                    <p className="font-mono text-base tracking-wide text-slate-500">

                        Professional Achievements

                    </p>

                    <h2 className="mt-3 text-6xl font-bold tracking-tight text-slate-900">

                        Certificates

                    </h2>

                </div>

                {

                    certificates?.length > 0 ? (

                        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

                            {

                                certificates.map((certificate) => (

                                    <article

                                        key={certificate._id}

                                        className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"

                                    >

                                        {

                                            certificate.certificateImage ? (

                                                <img
    src={`${API_BASE_URL}/${certificate.certificateImage}`}
    alt={certificate.title}
    className="h-64 w-full object-cover"
/>

                                            ) : (

                                                <div className="flex h-64 items-center justify-center bg-slate-100">

                                                    <span className="text-slate-400">

                                                        No Image

                                                    </span>

                                                </div>

                                            )

                                        }

                                        <div className="p-8">

                                            <h3 className="text-2xl font-bold text-slate-900">

                                                {certificate.title}

                                            </h3>

                                            <p className="mt-3 text-lg font-medium text-blue-600">

                                                {certificate.issuer}

                                            </p>

                                            <p className="mt-2 text-sm text-slate-500">

                                                {formatDate(certificate.issueDate)}

                                            </p>

                                            {

                                                certificate.description && (

                                                    <p className="mt-6 leading-8 text-slate-600">

                                                        {certificate.description}

                                                    </p>

                                                )

                                            }

                                            {

                                                certificate.skills?.length > 0 && (

                                                    <div className="mt-6 flex flex-wrap gap-2">

                                                        {

                                                            certificate.skills.map((skill, index) => (

                                                                <span

                                                                    key={index}

                                                                    className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700"

                                                                >

                                                                    {skill}

                                                                </span>

                                                            ))

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

                                                        className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-black"

                                                    >

                                                        View Credential

                                                    </a>

                                                )

                                            }

                                        </div>

                                    </article>

                                ))

                            }

                        </div>

                    ) : (

                        <div className="rounded-[36px] border border-slate-200 py-20 text-center">

                            <p className="text-xl text-slate-500">

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