import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Input from "../../components/common/Input";
import Textarea from "../../components/common/Textarea";
import Button from "../../components/common/Button";

import { sendMessage } from "../../services/contactService";

function Contact({ profile, socialLinks }) {

    const {

        register,

        handleSubmit,

        reset,

        formState: { errors, isSubmitting }

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

        <section id="contact" className="py-24">

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mb-16 text-center">

                    <p className="font-mono text-base tracking-wide text-slate-500">

                        Get In Touch

                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">

                        Contact

                    </h2>

                </div>

                <div className="grid gap-16 lg:grid-cols-[380px_1fr]">

                    {/* Left */}

                    <div className="rounded-[36px] border border-slate-200 p-5 shadow-sm sm:p-10">

                        <h3 className="text-3xl font-bold text-slate-900">

                            Let's Connect

                        </h3>

                        <p className="mt-6 leading-8 text-slate-600">

                            Feel free to reach out regarding freelance work,

                            internships, collaborations or any exciting

                            opportunity.

                        </p>

                        <div className="mt-10 space-y-6">

                            {profile.portfolioEmail && (

                                <div>

                                    <p className="text-sm uppercase tracking-widest text-slate-400">

                                        Email

                                    </p>

                                    <p className="mt-2 break-all text-lg text-slate-700">

                                        {profile.portfolioEmail}

                                    </p>

                                </div>

                            )}

                            {profile.location && (

                                <div>

                                    <p className="text-sm uppercase tracking-widest text-slate-400">

                                        Location

                                    </p>

                                    <p className="mt-2 text-lg text-slate-700">

                                        {profile.location}

                                    </p>

                                </div>

                            )}

                            {socialLinks.github && (

                                <a

                                    href={socialLinks.github}

                                    target="_blank"

                                    rel="noreferrer"

                                    className="block font-medium text-blue-600 hover:underline"

                                >

                                    GitHub

                                </a>

                            )}

                            {socialLinks.linkedin && (

                                <a

                                    href={socialLinks.linkedin}

                                    target="_blank"

                                    rel="noreferrer"

                                    className="block font-medium text-blue-600 hover:underline"

                                >

                                    LinkedIn

                                </a>

                            )}

                            {socialLinks.website && (

                                <a

                                    href={socialLinks.website}

                                    target="_blank"

                                    rel="noreferrer"

                                    className="block font-medium text-blue-600 hover:underline"

                                >

                                    Website

                                </a>

                            )}

                        </div>

                    </div>

                    {/* Right */}

                    <div className="rounded-[36px] border border-slate-200 p-5 shadow-sm sm:p-10">

                        <form

                            onSubmit={handleSubmit(onSubmit)}

                            className="space-y-6"

                        >

                            <Input

                                label="Name"

                                required

                                placeholder="Your Name"

                                register={register("name", {

                                    required: "Name is required"

                                })}

                                error={errors.name}

                            />

                            <Input

                                label="Email"

                                type="email"

                                required

                                placeholder="you@example.com"

                                register={register("email", {

                                    required: "Email is required"

                                })}

                                error={errors.email}

                            />

                            <Input

                                label="Subject"

                                required

                                placeholder="Subject"

                                register={register("subject", {

                                    required: "Subject is required"

                                })}

                                error={errors.subject}

                            />

                            <Textarea

                                label="Message"

                                rows={7}

                                required

                                placeholder="Write your message..."

                                register={register("message", {

                                    required: "Message is required"

                                })}

                                error={errors.message}

                            />

                            <Button

                                type="submit"

                                fullWidth

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
