import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Input from "../components/common/Input";
import Select from "../components/common/Select";
import Button from "../components/common/Button";

import PageContainer from "../components/ui/PageContainer";
import PageHeader from "../components/ui/PageHeader";
import SectionCard from "../components/ui/SectionCard";
import SectionHeader from "../components/ui/SectionHeader";
import FormGrid from "../components/ui/FormGrid";
import EmptyState from "../components/ui/EmptyState";
import LoadingState from "../components/ui/LoadingState";
import StatusBadge from "../components/ui/StatusBadge";
import FormActions from "../components/ui/FormActions";
import { notifyPortfolioUpdate } from "../utils/livePreview";
import {
    getSkills,
    createSkill,
    deleteSkill
} from "../services/skillService";

function SkillsPage() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    async function loadSkills() {
        try {
            const response = await getSkills();
            setSkills(response.skills);
        } catch {
            toast.error("Failed to load skills.");
        } finally {
            setFetching(false);
        }
    }

    useEffect(() => {
        loadSkills();
    }, []);

    async function onSubmit(data) {
        setLoading(true);
        try {
            const response = await createSkill(data);
            toast.success(response.message);
            notifyPortfolioUpdate();
            reset();
            loadSkills();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed to add skill."
            );
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id) {
        if (!window.confirm("Delete this skill?")) return;
        try {
            const response = await deleteSkill(id);
            toast.success(response.message);
            notifyPortfolioUpdate();
            loadSkills();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Delete failed."
            );
        }
    }

    if (fetching) {
        return <LoadingState text="Loading Skills..." />;
    }

    const sortedSkills = [...skills].sort((a, b) => {
        const orderA = Number(a.displayOrder ?? 9999);
        const orderB = Number(b.displayOrder ?? 9999);
        if (orderA !== orderB) {
            return orderA - orderB;
        }
        const categoryCompare = (a.category || "").localeCompare(b.category || "");
        if (categoryCompare !== 0) {
            return categoryCompare;
        }
        return a.name.localeCompare(b.name);
    });

    return (
        <PageContainer>
            {/* Added outer padding wrapper to detach content from sidebar and screen edges */}
            <div className="flex w-full flex-col gap-8 p-4 sm:p-6 lg:p-8">
                <PageHeader
                    title="Skills Management"
                    description="Manage the technologies and tools that will be displayed on your public portfolio."
                />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <SectionCard>
                        {/* Added inner padding wrapper to stop form inputs from touching card edges */}
                        <div className="flex flex-col gap-6 p-6 sm:p-8">
                            <SectionHeader
                                title="Add Skill"
                                subtitle="Add a new technical skill to your portfolio."
                            />

                            <FormGrid>
                                <Input
                                    label="Skill Name"
                                    placeholder="React"
                                    register={register("name", {
                                        required: "Skill name is required"
                                    })}
                                    error={errors.name}
                                />

                                <Select
                                    label="Skill Level"
                                    register={register("level", {
                                        required: "Skill level is required"
                                    })}
                                    error={errors.level}
                                    options={[
                                        { value: "1", label: "1 - Beginner" },
                                        { value: "2", label: "2 - Basic" },
                                        { value: "3", label: "3 - Intermediate" },
                                        { value: "4", label: "4 - Advanced" },
                                        { value: "5", label: "5 - Expert" }
                                    ]}
                                />

                                <Select
                                    label="Category"
                                    register={register("category")}
                                    error={errors.category}
                                    options={[
                                        { value: "", label: "Select Category" },
                                        { value: "Frontend", label: "Frontend" },
                                        { value: "Backend", label: "Backend" },
                                        { value: "Database", label: "Database" },
                                        { value: "Programming Language", label: "Programming Language" },
                                        { value: "DevOps", label: "DevOps" },
                                        { value: "Tools", label: "Tools" },
                                        { value: "Other", label: "Other" }
                                    ]}
                                />

                                <Input
                                    label="Sort Order"
                                    type="number"
                                    placeholder="1 = shown first"
                                    register={register("displayOrder")}
                                    error={errors.displayOrder}
                                />
                            </FormGrid>

                            <FormActions>
                                <Button
                                    type="submit"
                                    loading={loading}
                                    disabled={loading}
                                    size="lg"
                                >
                                    {loading ? "Adding Skill..." : "Add Skill"}
                                </Button>
                            </FormActions>
                        </div>
                    </SectionCard>
                </form>

                <SectionCard>
                    {/* Added inner padding wrapper to stop library items from touching card edges */}
                    <div className="flex flex-col gap-6 p-6 sm:p-8">
                        <SectionHeader
                            title="Skills Library"
                            subtitle="Review and manage your portfolio skills."
                        />

                        {sortedSkills.length === 0 ? (
                            <EmptyState
                                title="No Skills Added"
                                description="Add your first skill to start building your portfolio."
                            />
                        ) : (
                            <div className="space-y-4">
                                {sortedSkills.map((skill) => (
                                    <div
                                        key={skill._id}
                                        className="flex flex-col gap-5 rounded-xl border border-slate-200 p-5 transition-all duration-200 hover:border-slate-300 lg:flex-row lg:items-center lg:justify-between"
                                    >
                                        <div className="min-w-0">
                                            <h3 className="text-lg font-semibold text-slate-900">
                                                {skill.name}
                                            </h3>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                <StatusBadge color="green">
                                                    {skill.category || "General"}
                                                </StatusBadge>
                                                <StatusBadge color="blue">
                                                    Level {skill.level}
                                                </StatusBadge>
                                                <StatusBadge color="gray">
                                                    Order {skill.displayOrder ?? 0}
                                                </StatusBadge>
                                            </div>
                                        </div>

                                        <Button
                                            type="button"
                                            variant="danger"
                                            onClick={() => handleDelete(skill._id)}
                                        >
                                            Delete Skill
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </SectionCard>
            </div>
        </PageContainer>
    );
}

export default SkillsPage;