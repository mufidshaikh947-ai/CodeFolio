import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import {
    FaGithub,
    FaLinkedin,
    FaGlobe,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

import Input from "../../components/common/Input";
import Textarea from "../../components/common/Textarea";
import Button from "../../components/common/Button";

import { sendMessage } from "../../services/contactService";

function Contact({ profile, socialLinks }) {

    const {

        register,

        handleSubmit,

        reset,

        formState: {

            errors,

            isSubmitting

        }

    } = useForm();

    async function onSubmit(data) {

        try {

            await sendMessage(profile.username, data);

            toast.success("Message sent successfully.");

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

        <section id="contact"  className="py-16 lg:py-20">

            <div className="mx-auto max-w-7xl px-4 sm:px-8">

                <div className="mb-20 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">

                        CONTACT

                    </p>

                    <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">

                        Let's Work Together

                    </h2>

                </div>

                <div className="grid gap-12 lg:grid-cols-[420px_1fr]">

                    {/* Left */}

                    <div
                        className="
                            rounded-[32px]
                            border
                            border-white/10
                            bg-white/5
                            p-5 sm:p-10
                            backdrop-blur-xl
                        "
                    >

                        <h3 className="text-3xl font-bold text-white">

                            Get In Touch

                        </h3>

                        <p className="mt-6 leading-8 text-slate-400">

                            I'm always interested in discussing new
                            opportunities, freelance work and exciting
                            collaborations.

                        </p>

                        <div className="mt-10 space-y-8">

                            {

                                profile?.portfolioEmail && (

                                    <div className="flex gap-4">

                                        <FaEnvelope className="mt-1 text-cyan-400" />

                                        <div>

                                            <p className="text-sm uppercase tracking-wider text-slate-500">

                                                Email

                                            </p>

                                            <p className="text-white">

                                                {profile.portfolioEmail}

                                            </p>

                                        </div>

                                    </div>

                                )

                            }

                            {

                                profile?.location && (

                                    <div className="flex gap-4">

                                        <FaMapMarkerAlt className="mt-1 text-cyan-400" />

                                        <div>

                                            <p className="text-sm uppercase tracking-wider text-slate-500">

                                                Location

                                            </p>

                                            <p className="text-white">

                                                {profile.location}

                                            </p>

                                        </div>

                                    </div>

                                )

                            }

                        </div>

                        <div className="mt-12 flex gap-4">

                            {

                                socialLinks?.github && (

                                    <a
                                        href={socialLinks.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400 hover:text-cyan-400"
                                    >

                                        <FaGithub />

                                    </a>

                                )

                            }

                            {

                                socialLinks?.linkedin && (

                                    <a
                                        href={socialLinks.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400 hover:text-cyan-400"
                                    >

                                        <FaLinkedin />

                                    </a>

                                )

                            }

                            {

                                socialLinks?.website && (

                                    <a
                                        href={socialLinks.website}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400 hover:text-cyan-400"
                                    >

                                        <FaGlobe />

                                    </a>

                                )

                            }

                        </div>

                    </div>

                    {/* Right */}

                    <div
                        className="
                            rounded-[32px]
                            border
                            border-white/10
                            bg-white/5
                            p-5 sm:p-10
                            backdrop-blur-xl
                        "
                    >

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >

                            <Input
                                label="Name"
                                placeholder="Your Name"
                                register={register("name", {

                                    required: "Name is required"

                                })}
                                error={errors.name}
                            />

                            <Input
                                label="Email"
                                type="email"
                                placeholder="you@example.com"
                                register={register("email", {

                                    required: "Email is required"

                                })}
                                error={errors.email}
                            />

                            <Input
                                label="Subject"
                                placeholder="Subject"
                                register={register("subject", {

                                    required: "Subject is required"

                                })}
                                error={errors.subject}
                            />

                            <Textarea
                                label="Message"
                                rows={7}
                                placeholder="Write your message..."
                                register={register("message", {

                                    required: "Message is required"

                                })}
                                error={errors.message}
                            />

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                            >

                                {

                                    isSubmitting

                                        ? "Sending..."

                                        : "Send Message"

                                }

                            </Button>

                        </form>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Contact;
