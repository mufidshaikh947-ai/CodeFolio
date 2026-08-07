import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Input from "../components/common/Input";
import Textarea from "../components/common/Textarea";
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
    getEducation,
    createEducation,
    deleteEducation
} from "../services/educationService";

function EducationPage() {

    const [educationList, setEducationList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    async function loadEducation() {

        try {

            const response = await getEducation();

            setEducationList(response.educations);

        }

        catch {

            toast.error("Failed to load education.");

        }

        finally {

            setFetching(false);

        }

    }

    useEffect(() => {

        loadEducation();

    }, []);

    async function onSubmit(data) {

        setLoading(true);

        try {

            const response = await createEducation(data);

            toast.success(response.message);

            notifyPortfolioUpdate();

            reset();

            loadEducation();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to add education."

            );

        }

        finally {

            setLoading(false);

        }

    }

    async function handleDelete(id) {

        if (!window.confirm("Delete this education record?")) return;

        try {

            const response = await deleteEducation(id);

            toast.success(response.message);

            notifyPortfolioUpdate();

            loadEducation();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Delete failed."

            );

        }

    }

    if (fetching) {

        return <LoadingState text="Loading Education..." />;

    }

    const sortedEducation = [...educationList].sort((a, b) => {

        const orderA = Number(a.displayOrder ?? 9999);
        const orderB = Number(b.displayOrder ?? 9999);

        if (orderA !== orderB) {

            return orderA - orderB;

        }

        return (b.startYear || "").localeCompare(a.startYear || "");

    });

    return (

        <PageContainer>

            <PageHeader
                title="Education Management"
                description="Manage your academic qualifications displayed on your public portfolio."
            />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
            >

                <SectionCard>

                    <SectionHeader
                        title="Add Education"
                        subtitle="Add your academic qualifications."
                    />

                    <FormGrid>

                        <Input
                            label="Degree / Course"
                            placeholder="Diploma in Computer Engineering"
                            register={register("degree", {
                                required: "Degree is required"
                            })}
                            error={errors.degree}
                        />

                        <Input
                            label="Institution"
                            placeholder="ABC Institute"
                            register={register("institution", {
                                required: "Institution is required"
                            })}
                            error={errors.institution}
                        />

                        <Input
                            label="Field of Study"
                            placeholder="Computer Engineering"
                            register={register("fieldOfStudy")}
                            error={errors.fieldOfStudy}
                        />

                        <Input
                            label="Grade / CGPA"
                            placeholder="9.15 CGPA"
                            register={register("grade")}
                            error={errors.grade}
                        />

                        <Input
                            label="Start Year"
                            type="number"
                            min="1900"
                            max="2100"
                            placeholder="2023"
                            register={register("startYear", {
                                required: "Start year is required",
                                setValueAs: value =>
                                    value ? `${value}-01-01` : ""
                            })}
                            error={errors.startYear}
                        />

                        <Input
                            label="End Year"
                            type="number"
                            min="1900"
                            max="2100"
                            placeholder="2026"
                            register={register("endYear", {
                                setValueAs: value =>
                                    value ? `${value}-01-01` : ""
                            })}
                            error={errors.endYear}
                        />

                        <Input
                            label="Relevant Coursework"
                            placeholder="DSA, DBMS, OOP, Web Development"
                            register={register("relevantCoursework")}
                            error={errors.relevantCoursework}
                        />

                        <Input
                            label="Display Order"
                            type="number"
                            placeholder="1"
                            register={register("displayOrder")}
                            error={errors.displayOrder}
                        />

                    </FormGrid>

                    <div className="mt-6">

                        <Textarea
                            label="Description"
                            rows={5}
                            placeholder="Additional information about your education..."
                            register={register("description")}
                            error={errors.description}
                        />

                    </div>

                    <FormActions>

                        <Button
                            type="submit"
                            loading={loading}
                            disabled={loading}
                            size="lg"
                        >

                            {loading
                                ? "Adding Education..."
                                : "Add Education"}

                        </Button>

                    </FormActions>

                </SectionCard>

            </form>

            <SectionCard>

                <SectionHeader
                    title="Education Library"
                    subtitle="Review and manage your education records."
                />

                {sortedEducation.length === 0 ? (

                    <EmptyState
                        title="No Education Added"
                        description="Add your first education record to build your academic profile."
                    />

                ) : (

                    <div className="space-y-5">

                        {sortedEducation.map((education) => (

                            <div
                                key={education._id}
                                className="flex flex-col gap-6 rounded-xl border border-slate-200 p-5 transition-all duration-200 hover:border-slate-300"
                            >

                                <div>

                                    <h2 className="text-2xl font-bold text-slate-800">

                                        {education.degree}

                                    </h2>

                                    <p className="mt-1 text-lg text-slate-600">

                                        {education.institution}

                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">

                                        <StatusBadge color="blue">

                                            {education.fieldOfStudy || "Field"}

                                        </StatusBadge>

                                        <StatusBadge color="green">

                                            {education.grade || "Grade"}

                                        </StatusBadge>

                                        <StatusBadge color="gray">

                                            {education.startYear} - {education.currentlyStudying ? "Present" : education.endYear}

                                        </StatusBadge>

                                        <StatusBadge color="gray">

                                            Order {education.displayOrder ?? 0}

                                        </StatusBadge>

                                    </div>

                                    {education.description && (

                                        <p className="mt-5 text-slate-600 leading-7">

                                            {education.description}

                                        </p>

                                    )}

                                    {education.relevantCoursework && (

                                        <div className="mt-6">

                                            <h4 className="mb-3 text-sm font-semibold text-slate-900">

                                                Relevant Coursework

                                            </h4>

                                            <div className="flex flex-wrap gap-2">

                                                {(Array.isArray(education.relevantCoursework)
                                                    ? education.relevantCoursework
                                                    : String(education.relevantCoursework).split(","))
                                                    .map(course => course.trim())
                                                    .filter(Boolean)
                                                    .map((course, index) => (

                                                        <StatusBadge
                                                            key={index}
                                                            color="gray"
                                                        >

                                                            {course}

                                                        </StatusBadge>

                                                    ))}

                                            </div>

                                        </div>

                                    )}

                                </div>

                                <Button
                                    type="button"
                                    variant="danger"
                                    className="self-start lg:self-end"
                                    onClick={() => handleDelete(education._id)}
                                >

                                    Delete Education

                                </Button>

                            </div>

                        ))}

                    </div>

                )}

            </SectionCard>

        </PageContainer>

    );

}

export default EducationPage;