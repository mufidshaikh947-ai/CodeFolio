import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Textarea from "../components/common/Textarea";
import Select from "../components/common/Select";

import PageContainer from "../components/ui/PageContainer";
import PageHeader from "../components/ui/PageHeader";
import SectionCard from "../components/ui/SectionCard";
import SectionHeader from "../components/ui/SectionHeader";
import FormGrid from "../components/ui/FormGrid";
import FileUpload from "../components/ui/FileUpload";
import FilePreview from "../components/ui/FilePreview";
import FormActions from "../components/ui/FormActions";
import LoadingState from "../components/ui/LoadingState";
import StatusBadge from "../components/ui/StatusBadge";

import { notifyPortfolioUpdate } from "../utils/livePreview";
import {
    getProfile,
    updateProfile
} from "../services/userService";

import {
    uploadProfileImage,
    uploadResume
} from "../services/uploadService";

const API_URL = import.meta.env.VITE_API_URL;

function ProfilePage() {

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    const [profileImage, setProfileImage] = useState("");
    const [resume, setResume] = useState("");
    const [isPro, setIsPro] = useState(false);

    const [uploadingImage, setUploadingImage] = useState(false);
    const [uploadingResume, setUploadingResume] = useState(false);

    const [selectedImageName, setSelectedImageName] = useState("");
    const [selectedResumeName, setSelectedResumeName] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    useEffect(() => {

        async function loadProfile() {

            try {

                const response = await getProfile();

                reset({
                    ...response.profile,
                    ...response.socialLinks,
                    ...response.settings
                });

                setProfileImage(response.assets.profileImage || "");
                setResume(response.assets.resume || "");
                setIsPro(response.profile.isPro || false);

            }

            catch {

                toast.error("Failed to load profile.");

            }

            finally {

                setFetching(false);

            }

        }

        loadProfile();

    }, [reset]);

    async function handleProfileImageUpload(event) {

        const file = event.target.files[0];

        if (!file) return;

        setSelectedImageName(file.name);
        setUploadingImage(true);

        try {

            const response = await uploadProfileImage(file);

            setProfileImage(response.profileImage);

            toast.success("Profile image uploaded.");
notifyPortfolioUpdate();
        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to upload image."

            );

        }

        finally {

            setUploadingImage(false);

        }

    }

    async function handleResumeUpload(event) {

        const file = event.target.files[0];

        if (!file) return;

        setSelectedResumeName(file.name);
        setUploadingResume(true);

        try {

            const response = await uploadResume(file);

            setResume(response.resume);

            toast.success("Resume uploaded.");
notifyPortfolioUpdate();
        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to upload resume."

            );

        }

        finally {

            setUploadingResume(false);

        }

    }

    async function onSubmit(data) {

        setLoading(true);

        try {

            await updateProfile({

                ...data,

                profileImage,

                resume

            });

            const response = await getProfile();

            reset({

                ...response.profile,

                ...response.socialLinks,

                ...response.settings

            });

            setProfileImage(response.assets.profileImage || "");
            setResume(response.assets.resume || "");
            setIsPro(response.profile.isPro || false);

            toast.success("Profile updated successfully.");
notifyPortfolioUpdate();
        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to update profile."

            );

        }

        finally {

            setLoading(false);

        }

    }

    if (fetching) {

        return <LoadingState text="Loading Profile..." />;

    }

    return (

        <PageContainer>

            <PageHeader

                title="Profile Settings"

                description="Manage your personal information, public profile, social links and portfolio preferences."

                action={
                    isPro && (
                        <StatusBadge color="amber">PRO</StatusBadge>
                    )
                }

            />

            <form

                onSubmit={handleSubmit(onSubmit)}

    className="mt-6 space-y-6"

            >

                {/* Basic Information */}

                <SectionCard>

                    <SectionHeader

                        title="Basic Information"

                        subtitle="This information appears on your public portfolio."

                    />

                    <FormGrid>

                        <Input

                            label="Full Name"

                            placeholder="John Doe"

                            register={register("name", {

                                required: "Name is required"

                            })}

                            error={errors.name}

                        />

                        <Input

                            label="Username"

                            placeholder="johndoe"

                            register={register("username", {

                                required: "Username is required"

                            })}

                            error={errors.username}

                        />

                        <Input

                            label="Professional Title"

                            placeholder="Full Stack Developer"

                            register={register("title")}

                            error={errors.title}

                          

                        />

                        <Input

                            label="Headline"

                            placeholder="Building modern web applications"

                            register={register("headline")}

                            error={errors.headline}

                            className="md:col-span-2"

                        />

                    </FormGrid>

                </SectionCard>

                {/* Professional Summary */}

                <SectionCard>

                    <SectionHeader

                        title="Professional Summary"

                        subtitle="Introduce yourself to recruiters, clients and visitors."

                    />

                    <Textarea

                        label="About Me"

                        rows={6}

                        placeholder="Introduce yourself, your expertise, interests and the type of work you enjoy."

                        register={register("about")}

                        error={errors.about}

                    />

                </SectionCard>

                {/* Contact Information */}

                <SectionCard>

                    <SectionHeader

                        title="Contact Information"

                        subtitle="These details help recruiters and clients contact you."

                    />

                    <FormGrid>

                        <Input

                            label="Phone Number"

                            placeholder="+91 9876543210"

                            register={register("phone")}

                            error={errors.phone}

                        />

                        <Input

                            label="Portfolio Email"

                            type="email"

                            placeholder="john@example.com"

                            register={register("portfolioEmail")}

                            error={errors.portfolioEmail}

                        />

                        <Input

                            label="Location"

                            placeholder="Mumbai, India"

                            register={register("location")}

                            error={errors.location}

                        />

                        <Input

                            label="Availability"

                            placeholder="Available for Full-Time"

                            register={register("availability")}

                            error={errors.availability}

                        />

                    </FormGrid>

                </SectionCard>

                {/* Social & Coding Profiles */}

                <SectionCard>

                    <SectionHeader

                        title="Social & Coding Profiles"

                        subtitle="Add the links that showcase your professional presence."

                    />

                    <FormGrid>

                        <Input

                            label="GitHub"

                            placeholder="https://github.com/username"

                            register={register("github")}

                            error={errors.github}

                        />

                        <Input

                            label="LinkedIn"

                            placeholder="https://linkedin.com/in/username"

                            register={register("linkedin")}

                            error={errors.linkedin}

                        />

                        <Input

                            label="Personal Website"

                            placeholder="https://yourwebsite.com"

                            register={register("website")}

                            error={errors.website}

                        />

                        <Input

                            label="Twitter / X"

                            placeholder="https://x.com/username"

                            register={register("twitter")}

                            error={errors.twitter}

                        />

                        <Input

                            label="LeetCode"

                            placeholder="https://leetcode.com/u/username"

                            register={register("leetcode")}

                            error={errors.leetcode}

                        />

                        <Input

                            label="CodeChef"

                            placeholder="https://codechef.com/users/username"

                            register={register("codechef")}

                            error={errors.codechef}

                        />

                    </FormGrid>

                </SectionCard>

                {/* Portfolio Settings */}

                <SectionCard>

                    <SectionHeader

                        title="Portfolio Settings"

                        subtitle="Customize how your public portfolio is displayed."

                    />

                    <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-500">

                        Select the default appearance and template that visitors will see when they open your public portfolio.

                    </p>

                    <FormGrid>

                        <Select

                            label="Portfolio Theme"

                            register={register("theme")}

                            options={[

                                {

                                    value: "light",

                                    label: "Light"

                                },

                                {

                                    value: "dark",

                                    label: "Dark"

                                }

                            ]}

                        />

                        <div>

                            <Select

                                label="Portfolio Template"

                                register={register("templateId")}

                                options={[

                                    {

                                        value: "minimal",

                                        label: "Minimal"

                                    },

                                    {

                                        value: "modern",

                                        label: isPro ? "Modern" : "Modern (PRO)",

                                        disabled: !isPro

                                    }

                                ]}

                            />

                            {!isPro && (

                                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-500">

                                    <StatusBadge color="amber">PRO</StatusBadge>

                                    <span>Upgrade to unlock the Modern template.</span>

                                </div>

                            )}

                        </div>

                    </FormGrid>

                </SectionCard>

                {/* Portfolio Assets */}

                <div className="grid gap-6 lg:grid-cols-2">

                    <SectionCard className="flex h-full flex-col">

                        <SectionHeader

                            title="Profile Picture"

                            subtitle="Upload a professional profile photograph."

                        />

                        <FileUpload

                            label="Choose Profile Image"

                            accept="image/*"

                            onChange={handleProfileImageUpload}

                            uploading={uploadingImage}

                            fileName={selectedImageName}

                            helperText="Supported: JPG, PNG, WEBP"

                        />

<div className="mt-6 flex justify-center">
                            <FilePreview

                                type="image"

                                src={

                                    profileImage

                                        ? `${API_URL}/${profileImage}`

                                        : ""

                                }

                                alt="Profile"

                            />

                        </div>

                    </SectionCard>

                    <SectionCard className="flex h-full flex-col">

                        <SectionHeader

                            title="Resume"

                            subtitle="Upload your latest resume in PDF format."

                        />

                        <FileUpload

                            label="Choose Resume"

                            accept=".pdf"

                            onChange={handleResumeUpload}

                            uploading={uploadingResume}

                            fileName={selectedResumeName}

                            helperText="PDF format only"

                        />

                        <div className="mt-4">

                            <FilePreview

                                type="file"

                                src={

                                    resume

                                        ? `${API_URL}/${resume}`

                                        : ""

                                }

                            />

                        </div>

                    </SectionCard>

                </div>

                {/* Save */}

                <FormActions>

                    <Button

                        type="submit"

                        size="lg"

                        loading={loading}

                        disabled={

                            loading ||

                            uploadingImage ||

                            uploadingResume

                        }

                    >

                        {

                            loading

                                ? "Saving Changes..."

                                : uploadingImage

                                ? "Uploading Image..."

                                : uploadingResume

                                ? "Uploading Resume..."

                                : "Save Changes"

                        }

                    </Button>

                </FormActions>

            </form>

        </PageContainer>

    );

}

export default ProfilePage;
