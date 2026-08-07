import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Input from "../components/common/Input";
import Textarea from "../components/common/Textarea";
import Select from "../components/common/Select";
import Button from "../components/common/Button";

import PageContainer from "../components/ui/PageContainer";
import PageHeader from "../components/ui/PageHeader";
import SectionCard from "../components/ui/SectionCard";
import SectionHeader from "../components/ui/SectionHeader";
import FormGrid from "../components/ui/FormGrid";
import LoadingState from "../components/ui/LoadingState";
import EmptyState from "../components/ui/EmptyState";
import StatusBadge from "../components/ui/StatusBadge";
import FormActions from "../components/ui/FormActions";
import { notifyPortfolioUpdate } from "../utils/livePreview";

import {
    getExperiences,
    createExperience,
    deleteExperience
} from "../services/experienceService";

function ExperiencePage() {

    const [experiences, setExperiences] = useState([]);

    const [loading, setLoading] = useState(false);

    const [fetching, setFetching] = useState(true);

    const {

    register,

    handleSubmit,

    reset,

    watch,

    formState: {

        errors

    }

} = useForm();

const currentlyWorking = watch("currentlyWorking");


    async function loadExperiences() {

        try {

            const response = await getExperiences();

            setExperiences(response.experiences);

        }

        catch {

            toast.error("Failed to load experiences.");

        }

        finally {

            setFetching(false);

        }

    }

    useEffect(() => {

        loadExperiences();

    }, []);

    async function onSubmit(data) {

        setLoading(true);

        try {

            const response = await createExperience(data);

            toast.success(response.message);
notifyPortfolioUpdate();

            reset();

            loadExperiences();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to add experience."

            );

        }

        finally {

            setLoading(false);

        }

    }

    async function handleDelete(id) {

        if (!window.confirm("Delete this experience?")) return;

        try {

            const response = await deleteExperience(id);

            toast.success(response.message);
notifyPortfolioUpdate();

            loadExperiences();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Delete failed."

            );

        }

    }

    if (fetching) {

        return <LoadingState text="Loading Experience..." />;

    }

    const sortedExperiences = [...experiences].sort((a, b) => {

    const orderA = Number(a.displayOrder ?? 9999);

    const orderB = Number(b.displayOrder ?? 9999);

    if (orderA !== orderB) {

        return orderA - orderB;

    }

    if (a.currentlyWorking !== b.currentlyWorking) {

        return b.currentlyWorking - a.currentlyWorking;

    }

    return (b.startDate || "").localeCompare(a.startDate || "");

});

    return (

        <PageContainer>

            <PageHeader

                title="Experience Management"

                description="Manage your internships, professional experience and work history displayed on your public portfolio."

            />

            <form

                onSubmit={handleSubmit(onSubmit)}

                className="space-y-6"

            >

                <SectionCard>

                    <SectionHeader

                        title="Add Experience"

                        subtitle="Add your internship, full-time role or freelance experience."

                    />

                    <FormGrid>

                        <Input

                            label="Company Name"

                            placeholder="Google"

                            register={register("company", {

                                required: "Company name is required"

                            })}

                            error={errors.company}

                        />

                        <Input

                            label="Position"

                            placeholder="Frontend Developer Intern"

                            register={register("position", {

                                required: "Position is required"

                            })}

                            error={errors.position}

                        />

                        <Select

                            label="Employment Type"

                            register={register("employmentType")}

                            options={[

                                {

                                    value: "",

                                    label: "Select Employment Type"

                                },

                                {

                                    value: "Internship",

                                    label: "Internship"

                                },

                                {

                                    value: "Full Time",

                                    label: "Full Time"

                                },

                                {

                                    value: "Part Time",

                                    label: "Part Time"

                                },

                                {

                                    value: "Freelance",

                                    label: "Freelance"

                                },

                                {

                                    value: "Contract",

                                    label: "Contract"

                                }

                            ]}

                        />

                        <Input

                            label="Location"

                            placeholder="Pune, India"

                            register={register("location")}

                            error={errors.location}

                        />

                       <Input
    label="Start Date"
    type="month"
    register={register("startDate", {
        required: "Start date is required"
    })}
    error={errors.startDate}
/>

                        <Input

    label="End Date"

    type="month"

    disabled={currentlyWorking}

    register={register("endDate")}

    error={errors.endDate}

/>

                        <Input

                            label="Technologies"

                            placeholder="React, Node.js, MongoDB"

                            register={register("technologies")}

                            error={errors.technologies}

                        />

                        <Input

                            label="Sort Order"

                            type="number"

                            placeholder="1"

                            register={register("displayOrder")}

                            error={errors.displayOrder}

                        />

                    </FormGrid>

                    <div className="mt-8">

                        <Textarea

                            label="Description"

                            rows={6}

                            placeholder="Describe your responsibilities and contributions..."

                            register={register("description")}

                            error={errors.description}

                        />

                    </div>

                    <div className="mt-6">

                        <Input

                            label="Achievements"

                            placeholder="Built Dashboard, Improved Performance, Led Authentication Module"

                            register={register("achievements")}

                            error={errors.achievements}

                        />

                    </div>

                    <div className="mt-8 rounded-xl border border-slate-200 p-5">

                        <label className="flex items-center gap-3">

                            <input

                                type="checkbox"

                                {...register("currentlyWorking")}

                                className="h-5 w-5 accent-blue-600"

                            />

                            <span className="font-medium text-slate-700">

                                I currently work here

                            </span>

                        </label>

                    </div>

                    <FormActions>

                        <Button

                            type="submit"

                            loading={loading}

                            disabled={loading}

                            size="lg"

                        >

                            {

                                loading

                                    ? "Adding Experience..."

                                    : "Add Experience"

                            }

                        </Button>

                    </FormActions>

                </SectionCard>

            </form>

                       <SectionCard>

                <SectionHeader

                    title="Experience Library"

                    subtitle="Review and manage the professional experience displayed on your portfolio."

                />

                {sortedExperiences.length === 0 ? (

                    <EmptyState

                        title="No Experience Added"

                        description="Add your first internship or job experience to strengthen your portfolio."

                    />

                ) : (

                    <div className="space-y-5">

                        {sortedExperiences.map((experience) => (

                            <div

                                key={experience._id}

                                className="flex flex-col gap-6 rounded-xl border border-slate-200 p-5 transition-all duration-200 hover:border-slate-300"

                            >

                                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                                    <div className="min-w-0 flex-1">

                                        <h3 className="text-xl font-semibold text-slate-900">

                                            {experience.position}

                                        </h3>

                                        <p className="mt-1 text-base font-medium text-slate-600">

                                            {experience.company}

                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2">

                                            {experience.employmentType && (

    <StatusBadge color="blue">

        {experience.employmentType}

    </StatusBadge>

)}

                                            {experience.location && (

    <StatusBadge color="green">

        {experience.location}

    </StatusBadge>

)}

                                            <StatusBadge color="gray">

                                                {experience.startDate || "-"}

                                                {" - "}

                                                {experience.currentlyWorking

                                                    ? "Present"

                                                    : experience.endDate || "-"}

                                            </StatusBadge>

                                            <StatusBadge color="gray">

                                                Order {experience.displayOrder ?? 0}

                                            </StatusBadge>

                                        </div>

                                        {experience.description && (

                                            <p className="mt-6 text-sm leading-7 text-slate-600">

                                                {experience.description}

                                            </p>

                                        )}

                                        {experience.technologies && (

                                            <div className="mt-6">

                                                <h4 className="mb-3 text-sm font-semibold text-slate-900">

                                                    Technologies

                                                </h4>

                                                <div className="flex flex-wrap gap-2">

                                                    {(Array.isArray(experience.technologies)
    ? experience.technologies
    : String(experience.technologies || "").split(","))
    .map((tech) => tech.trim())
    .filter(Boolean)
    .map((tech, index) => (

        <StatusBadge
            key={index}
            color="gray"
        >
            {tech}
        </StatusBadge>

))}

                                                </div>

                                            </div>

                                        )}

                                        {experience.achievements && (

    <div className="mt-6">

        <h4 className="mb-3 text-sm font-semibold text-slate-900">

            Achievements

        </h4>

        <div className="flex flex-wrap gap-2">

            {(Array.isArray(experience.achievements)
                ? experience.achievements
                : String(experience.achievements || "").split(","))
                .map((achievement) => achievement.trim())
                .filter(Boolean)
                .map((achievement, index) => (

                    <StatusBadge
                        key={index}
                        color="green"
                    >

                        {achievement}

                    </StatusBadge>

                ))}

        </div>

    </div>

)}

                                    </div>

                                    <Button

    type="button"

    variant="danger"

    className="lg:self-start"

    onClick={() => handleDelete(experience._id)
        
    }

>

                                        Delete Experience

                                    </Button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </SectionCard>

        </PageContainer>

    );

}

export default ExperiencePage;