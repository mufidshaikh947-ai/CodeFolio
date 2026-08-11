import { API_BASE_URL } from "../../constants/api";

function Projects({ projects }) {
    console.log("========== PROJECTS ==========");
    console.log("API_BASE_URL:", API_BASE_URL);
    console.log("Projects:", projects);

    return (
        <section className="py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-8">

                {/* Header */}
                <div className="mb-20 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">
                        PORTFOLIO
                    </p>

                    <h2 className="mt-4 text-5xl font-black text-white">
                        Featured Projects
                    </h2>
                </div>

                {projects?.length > 0 ? (
                    <div className="space-y-14">

                        {projects.map((project) => {
                            console.log("Project Object:", project);

                            const imageUrl = project.image
                                ? `${API_BASE_URL}/${project.image}`
                                : "https://placehold.co/700x500?text=Project";

                            console.log(
                                "Project Image URL:",
                                imageUrl
                            );

                            const technologies = Array.isArray(
                                project.technologies
                            )
                                ? project.technologies
                                : [];

                            return (
                                <div
                                    key={project._id}
                                    className="
                                        overflow-hidden
                                        rounded-[36px]
                                        border
                                        border-white/10
                                        bg-white/5
                                        backdrop-blur-xl
                                        transition-all
                                        duration-500
                                        hover:-translate-y-2
                                        hover:border-cyan-400/30
                                    "
                                >

                                    <div className="grid lg:grid-cols-[430px_1fr]">

                                        {/* Project Image */}
                                        <div className="p-8">

                                            <img
                                                src={imageUrl}
                                                alt={project.title}
                                                className="
                                                    h-[300px]
                                                    w-full
                                                    rounded-3xl
                                                    object-cover
                                                    transition-all
                                                    duration-500
                                                    hover:scale-[1.03]
                                                "
                                                onLoad={() => {
                                                    console.log(
                                                        "IMAGE LOADED:",
                                                        imageUrl
                                                    );
                                                }}
                                                onError={(event) => {
                                                    console.error(
                                                        "IMAGE FAILED:",
                                                        imageUrl
                                                    );
                                                }}
                                            />

                                        </div>

                                        {/* Project Details */}
                                        <div className="flex flex-col justify-between p-10">

                                            <div>

                                                <div className="flex items-center gap-4">

                                                    <h3 className="text-4xl font-bold text-white">
                                                        {project.title}
                                                    </h3>

                                                    {project.featured && (
                                                        <span
                                                            className="
                                                                rounded-full
                                                                bg-cyan-500/20
                                                                px-4
                                                                py-2
                                                                text-sm
                                                                font-semibold
                                                                text-cyan-300
                                                            "
                                                        >
                                                            Featured
                                                        </span>
                                                    )}

                                                </div>

                                                <p className="mt-8 text-lg leading-9 text-slate-300">
                                                    {project.description}
                                                </p>

                                                {/* Technologies */}
                                                {technologies.length > 0 && (
                                                    <div className="mt-10 flex flex-wrap gap-3">

                                                        {technologies.map(
                                                            (tech, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="
                                                                        rounded-full
                                                                        border
                                                                        border-white/10
                                                                        bg-white/5
                                                                        px-4
                                                                        py-2
                                                                        text-sm
                                                                        text-slate-200
                                                                    "
                                                                >
                                                                    {tech}
                                                                </span>
                                                            )
                                                        )}

                                                    </div>
                                                )}

                                            </div>

                                            {/* Links */}
                                            <div className="mt-12 flex flex-wrap gap-5">

                                                {project.githubLink && (
                                                    <a
                                                        href={project.githubLink}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="
                                                            rounded-full
                                                            border
                                                            border-white/10
                                                            px-8
                                                            py-4
                                                            font-semibold
                                                            text-white
                                                            transition-all
                                                            hover:border-cyan-400
                                                        "
                                                    >
                                                        GitHub
                                                    </a>
                                                )}

                                                {project.liveLink && (
                                                    <a
                                                        href={project.liveLink}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="
                                                            rounded-full
                                                            bg-gradient-to-r
                                                            from-cyan-400
                                                            via-sky-500
                                                            to-violet-500
                                                            px-8
                                                            py-4
                                                            font-semibold
                                                            text-slate-950
                                                            transition-all
                                                            hover:scale-105
                                                        "
                                                    >
                                                        Live Demo
                                                    </a>
                                                )}

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            );
                        })}

                    </div>
                ) : (
                    <div className="rounded-3xl border border-white/10 bg-white/5 py-20 text-center">

                        <p className="text-xl text-slate-400">
                            No projects available.
                        </p>

                    </div>
                )}

            </div>
        </section>
    );
}

export default Projects;