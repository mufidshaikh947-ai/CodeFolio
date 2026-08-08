import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FolderOpen } from "lucide-react";

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
import FormActions from "../components/ui/FormActions";
import LoadingState from "../components/ui/LoadingState";
import EmptyState from "../components/ui/EmptyState";
import StatusBadge from "../components/ui/StatusBadge";
import { notifyPortfolioUpdate } from "../utils/livePreview";

import {
    getProjects,
    createProject,
    deleteProject
} from "../services/projectService";
const API_URL = import.meta.env.VITE_API_URL;

function ProjectsPage() {

    const [projects, setProjects] = useState([]);

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

    } = useForm({

        defaultValues: {

            featured: false

        }

    });

    const projectImage = watch("projectImage");

    async function loadProjects() {

        try {

            const response = await getProjects();

            setProjects(response.projects);

        }

        catch {

            toast.error("Failed to load projects.");

        }

        finally {

            setFetching(false);

        }

    }

    useEffect(() => {

        loadProjects();

    }, []);

    async function onSubmit(data) {

        setLoading(true);

        try {

            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("description", data.description);
            formData.append("technologies", data.technologies);
            formData.append("githubLink", data.githubLink);
            formData.append("liveLink", data.liveLink);
            formData.append("category", data.category || "");
            formData.append("status", data.status || "");
            formData.append("displayOrder", data.displayOrder || 0);
            formData.append("features", data.features || "");
            formData.append("featured", data.featured);

            if (projectImage?.length > 0) {

                formData.append(

                    "projectImage",

                    projectImage[0]

                );

            }

            const response = await createProject(formData);

            toast.success(response.message);

            reset({

                featured: false

            });
            notifyPortfolioUpdate();
            loadProjects();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to create project."

            );

        }

        finally {

            setLoading(false);

        }

    }

    async function handleDelete(id) {

        if (!window.confirm("Delete this project?")) return;

        try {

            const response = await deleteProject(id);

            toast.success(response.message);
            notifyPortfolioUpdate();
            loadProjects();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Delete failed."

            );

        }

    }

    if (fetching) {

    return <LoadingState text="Loading Projects..." />;

}

const sortedProjects = [...projects].sort((a, b) => {

    const orderA = Number(a.displayOrder ?? 9999);

    const orderB = Number(b.displayOrder ?? 9999);

    if (orderA !== orderB) {

        return orderA - orderB;

    }

    if (a.featured !== b.featured) {

        return Number(b.featured) - Number(a.featured);

    }

    return a.title.localeCompare(b.title);

});

return (

    <PageContainer>

            <PageHeader

                title="Project Management"

                description="Manage your portfolio projects, project details, technologies and external links displayed on your public portfolio."

            />

            <form

                onSubmit={handleSubmit(onSubmit)}

                className="space-y-6"

            >

                <SectionCard>

                    <SectionHeader

                        title="Add New Project"

                        subtitle="Fill in the details below to showcase your work."

                    />

                    <FormGrid>

                        <Input
                            label="Project Title"
                            placeholder="CodeFolio"
                            register={register("title", {
                                required: "Project title is required"
                            })}
                            error={errors.title}
                        />

                        <Select
                            label="Category"
                            register={register("category")}
                            error={errors.category}
                            options={[
                                {
                                    value: "",
                                    label: "Select Category"
                                },
                                {
                                    value: "Full Stack",
                                    label: "Full Stack"
                                },
                                {
                                    value: "Frontend",
                                    label: "Frontend"
                                },
                                {
                                    value: "Backend",
                                    label: "Backend"
                                },
                                {
                                    value: "Mobile",
                                    label: "Mobile"
                                },
                                {
                                    value: "Desktop",
                                    label: "Desktop"
                                },
                                {
                                    value: "API",
                                    label: "API"
                                },
                                {
                                    value: "Library",
                                    label: "Library"
                                },
                                {
                                    value: "Other",
                                    label: "Other"
                                }
                            ]}
                        />

                        <Input
                            label="Technologies"
                            placeholder="React, Node.js, MongoDB"
                            register={register("technologies")}
                            error={errors.technologies}
                        />

                        <Select
                            label="Project Status"
                            register={register("status")}
                            options={[
                                {
                                    value: "Completed",
                                    label: "Completed"
                                },
                                {
                                    value: "In Progress",
                                    label: "In Progress"
                                },
                                {
                                    value: "Planned",
                                    label: "Planned"
                                }
                            ]}
                        />

                        <Input
                            label="GitHub Repository"
                            placeholder="https://github.com/..."
                            register={register("githubLink")}
                            error={errors.githubLink}
                        />

                        <Input
                            label="Live Demo"
                            placeholder="https://..."
                            register={register("liveLink")}
                            error={errors.liveLink}
                        />

                        <Input
                            label="Sort Order"
                            type="number"
                            placeholder="1"
                            register={register("displayOrder")}
                            error={errors.displayOrder}
                        />

                        <Input
                            label="Project Features"
                            placeholder="Authentication, Dashboard, CRUD"
                            register={register("features")}
                            error={errors.features}
                        />

                    </FormGrid>

                    <div className="mt-8">

                        <Textarea

                            label="Project Description"

                            rows={7}

                            placeholder="Describe the project, challenges, implementation and outcomes..."

                            register={register("description")}

                            error={errors.description}

                        />

                    </div>

                </SectionCard>

                                <FormGrid>

                    <SectionCard>

                        <SectionHeader

                            title="Project Image"

                            subtitle="Upload a screenshot that best represents your project."

                        />

                        <FileUpload
    label="Choose Project Image"
    accept="image/*"
    register={register}
    name="projectImage"
    helperText="JPG, PNG or WEBP"
    fileName={
        projectImage?.length > 0
            ? projectImage[0].name
            : ""
    }
/>

                        {projectImage?.length > 0 && (

                            <img

                                src={URL.createObjectURL(projectImage[0])}

                                alt="Project Preview"

                                className="mt-6 h-56 w-full rounded-xl border border-slate-200 object-cover"

                            />

                        )}

                    </SectionCard>

                    <SectionCard>

                        <SectionHeader

                            title="Portfolio Options"

                            subtitle="Configure how this project appears on your public portfolio."

                        />

                        <label className="flex items-center justify-between rounded-xl border border-slate-200 p-5">

                            <div>

                                <h3 className="font-semibold text-slate-900">

                                    Featured Project

                                </h3>

                                <p className="mt-1 text-sm text-slate-500">

                                    Display this project at the top of your portfolio.

                                </p>

                            </div>

                            <input

                                type="checkbox"

                                {...register("featured")}

                                className="h-5 w-5 accent-blue-600"

                            />

                        </label>

                    </SectionCard>

                </FormGrid>

                <FormActions>

                    <Button

                        type="submit"

                        loading={loading}

                        disabled={loading}

                        size="lg"

                    >

                        {loading

                            ? "Creating Project..."

                            : "Add Project"}

                    </Button>

                </FormActions>

                <SectionCard>

                    <SectionHeader

                        title="Projects Library"

                        subtitle="Review and manage the projects displayed on your portfolio."

                    />

                    {projects.length === 0 ? (

                        <EmptyState

                            title="No Projects Yet"

                            description="Add your first project to start showcasing your work."

                        />

                    ) : (

                        <div className="space-y-5">

                           {sortedProjects.map((project) => (

                                    <div

                                        key={project._id}

                                        className="flex flex-col gap-6 rounded-xl border border-slate-200 p-5 transition-all duration-200 hover:border-slate-300 lg:flex-row"

                                    >

                                        <div className="h-52 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 lg:w-80 lg:flex-shrink-0">

                                            {project.image ? (

                                                <img

                                                    src={`${API_URL}/${project.image}`}
                                                    alt={project.title}

                                                    className="h-full w-full object-cover"

                                                />

                                            ) : (

                                                <div className="flex h-full items-center justify-center">

                                                    <FolderOpen

                                                        size={56}

                                                        className="text-slate-300"

                                                    />

                                                </div>

                                            )}

                                        </div>

                                        <div className="flex flex-1 flex-col">

                                            <div className="flex flex-wrap items-start justify-between gap-4">

                                                <div>

                                                    <h3 className="text-xl font-semibold text-slate-900">

                                                        {project.title}

                                                    </h3>

                                                    <p className="mt-2 text-sm leading-7 text-slate-600">

                                                        {project.description}

                                                    </p>

                                                </div>

                                                {project.featured && (

                                                    <StatusBadge color="yellow">

                                                        Featured

                                                    </StatusBadge>

                                                )}

                                            </div>

                                            <div className="mt-5 flex flex-wrap gap-2">

                                                <StatusBadge color="blue">

                                                    {project.category || "General"}

                                                </StatusBadge>

                                                <StatusBadge color="green">

                                                    {project.status || "Completed"}

                                                </StatusBadge>

                                                <StatusBadge color="gray">

                                                    Order {project.displayOrder ?? 0}

                                                </StatusBadge>

                                            </div>
                                            {project.technologies && (

    <div className="mt-5 flex flex-wrap gap-2">

        {(Array.isArray(project.technologies)
            ? project.technologies
            : String(project.technologies || "").split(","))
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

)}

                                            <FormActions className="mt-auto border-0 pt-6">

                                                {project.githubLink && (

    <Button
        type="button"
        onClick={() =>
            window.open(project.githubLink, "_blank")
        }
    >

        GitHub

    </Button>

)}

                                                {project.liveLink && (

                                                    <Button

                                                        type="button"

                                                        onClick={() =>
                                                            window.open(
                                                                project.liveLink,
                                                                "_blank"
                                                            )
                                                        }

                                                    >

                                                        Live Demo

                                                    </Button>

                                                )}

                                                <Button

                                                    type="button"

                                                    variant="danger"

                                                    onClick={() =>
                                                        handleDelete(project._id)
                                                    }

                                                >

                                                    Delete Project

                                                </Button>

                                            </FormActions>

                                        </div>

                                    </div>

                                ))}

                        </div>

                    )}

                </SectionCard>

            </form>

        </PageContainer>

    );

}

export default ProjectsPage;