import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { sendMessage } from "../../services/contactService";

function ContactSection({ profile, socialLinks }) {

    const {

        register,
        handleSubmit,
        reset,

        formState: { errors, isSubmitting }

    } = useForm();

    async function onSubmit(data) {

        try {

            const response = await sendMessage(

                profile.username,

                data

            );

            toast.success(response.message);

            reset();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to send message."

            );

        }

    }

    return (

        <section>

            <div className="mx-auto max-w-7xl">

                <div className="mb-14">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">

                        CONTACT

                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">

                        Let's Build Something Great

                    </h2>

                </div>

                <div className="grid gap-10 lg:grid-cols-2">

                    <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-700 dark:bg-slate-900">

                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">

                            Contact Information

                        </h3>

                        <div className="mt-8 space-y-6">

                            {profile.location && (

                                <div>

                                    <p className="text-sm uppercase tracking-widest text-slate-500">

                                        Location

                                    </p>

                                    <p className="mt-2 text-lg text-slate-700 dark:text-slate-300">

                                        {profile.location}

                                    </p>

                                </div>

                            )}

                            {profile.portfolioEmail && (

                                <div>

                                    <p className="text-sm uppercase tracking-widest text-slate-500">

                                        Email

                                    </p>

                                    <p className="mt-2 text-lg text-slate-700 dark:text-slate-300">

                                        {profile.portfolioEmail}

                                    </p>

                                </div>

                            )}

                            {profile.phone && (

                                <div>

                                    <p className="text-sm uppercase tracking-widest text-slate-500">

                                        Phone

                                    </p>

                                    <p className="mt-2 text-lg text-slate-700 dark:text-slate-300">

                                        {profile.phone}

                                    </p>

                                </div>

                            )}

                            <div className="flex flex-wrap gap-4 pt-6">

                                {socialLinks.github && (

                                    <a
                                        href={socialLinks.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-xl border border-slate-300 px-5 py-3 font-medium transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
                                    >
                                        GitHub
                                    </a>

                                )}

                                {socialLinks.linkedin && (

                                    <a
                                        href={socialLinks.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-xl border border-slate-300 px-5 py-3 font-medium transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
                                    >
                                        LinkedIn
                                    </a>

                                )}

                                {socialLinks.website && (

                                    <a
                                        href={socialLinks.website}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-xl border border-slate-300 px-5 py-3 font-medium transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
                                    >
                                        Website
                                    </a>

                                )}

                            </div>

                        </div>

                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                    >

                        <div className="space-y-6">

                            <input
                                type="text"
                                placeholder="Your Name"
                                {...register("name", {
                                    required: true
                                })}
                                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                {...register("email", {
                                    required: true
                                })}
                                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                {...register("subject", {
                                    required: true
                                })}
                                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500"
                            />

                            <textarea
                                rows={6}
                                placeholder="Write your message..."
                                {...register("message", {
                                    required: true
                                })}
                                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-500"
                            />

                            {(errors.name ||
                                errors.email ||
                                errors.subject ||
                                errors.message) && (

                                <p className="text-sm text-red-600">

                                    Please fill all required fields.

                                </p>

                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
                            >

                                {isSubmitting
                                    ? "Sending..."
                                    : "Send Message"}

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </section>

    );

}

export default ContactSection;