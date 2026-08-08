import "./HomePage.css";

function HomePage() {
    return (
        <main>

            {/* ===================== NAVBAR ===================== */}

            <nav className="navbar">
                <div className="container">

                    <h2 className="logo">
                        CodeFolio
                    </h2>

                    <div className="nav-links">

                        <a href="#features">
                            Features
                        </a>

                        <a href="#how">
                            How it Works
                        </a>

                        <a href="/login">
                            Login
                        </a>

                        <a
                            href="/register"
                            className="btn-nav"
                        >
                            Get Started
                        </a>

                    </div>

                </div>
            </nav>

            {/* ===================== HERO ===================== */}

            <section className="hero">

                <div className="container hero-grid">

                    <div className="hero-content">

                        <span className="hero-badge">
                            No-Code Portfolio Builder
                        </span>

                        <h1>
                            Build Your Developer Portfolio
                            <br />
                            in Minutes.
                        </h1>

                        <p>
                            Create beautiful developer portfolios,
                            showcase your skills, projects,
                            education and experience, then
                            publish them with your own public
                            portfolio link.
                        </p>

                        <div className="hero-buttons">

                            <a
                                href="/register"
                                className="btn-primary"
                            >
                                Create Portfolio
                            </a>

                            <a
                                href="#features"
                                className="btn-secondary"
                            >
                                Explore Features
                            </a>

                        </div>

                    </div>

                    <div className="hero-preview">

                        <div className="browser">

                            <div className="browser-top"></div>

                            <div className="profile-circle"></div>

                            <div className="line line-long"></div>

                            <div className="line line-short"></div>

                            <div className="card-grid">

                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ===================== FEATURES ===================== */}

            <section
                id="features"
                className="features"
            >

                <div className="container">

                    <h2>
                        Everything You Need
                    </h2>

                    <p className="section-subtitle">
                        Build a complete developer portfolio
                        without writing frontend code.
                    </p>

                    <div className="feature-grid">

                        <div className="feature-card">

                            <div className="icon">
                                👤
                            </div>

                            <h3>
                                Profile Builder
                            </h3>

                            <p>
                                Bio, profile photo, resume,
                                contact information and social
                                links.
                            </p>

                        </div>

                        <div className="feature-card">

                            <div className="icon">
                                💼
                            </div>

                            <h3>
                                Projects
                            </h3>

                            <p>
                                Showcase GitHub repositories,
                                live demos, screenshots and
                                descriptions.
                            </p>

                        </div>

                        <div className="feature-card">

                            <div className="icon">
                                ⚡
                            </div>

                            <h3>
                                Skills
                            </h3>

                            <p>
                                Organize frontend, backend,
                                database and DevOps skills
                                professionally.
                            </p>

                        </div>

                        <div className="feature-card">

                            <div className="icon">
                                🏆
                            </div>

                            <h3>
                                Experience
                            </h3>

                            <p>
                                Add internships, jobs,
                                freelance work and
                                certifications.
                            </p>

                        </div>

                        <div className="feature-card">

                            <div className="icon">
                                🎨
                            </div>

                            <h3>
                                Templates
                            </h3>

                            <p>
                                Switch between beautiful
                                portfolio layouts instantly.
                            </p>

                        </div>

                        <div className="feature-card">

                            <div className="icon">
                                🚀
                            </div>

                            <h3>
                                SEO Ready
                            </h3>

                            <p>
                                Share a professional public
                                portfolio optimized for search
                                engines.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ===================== HOW ===================== */}

            <section
                id="how"
                className="how"
            >

                <div className="container">

                    <h2>
                        Build Your Portfolio
                        in Four Steps
                    </h2>

                    <p className="section-subtitle">
                        From registration to publishing in
                        just a few minutes.
                    </p>

                    <div className="steps">

                        <div className="step">

                            <span>1</span>

                            <h3>
                                Create Account
                            </h3>

                            <p>
                                Register and access your
                                dashboard.
                            </p>

                        </div>

                        <div className="step">

                            <span>2</span>

                            <h3>
                                Fill Portfolio
                            </h3>

                            <p>
                                Add projects, skills,
                                education and experience.
                            </p>

                        </div>

                        <div className="step">

                            <span>3</span>

                            <h3>
                                Select Template
                            </h3>

                            <p>
                                Choose your preferred
                                portfolio design.
                            </p>

                        </div>

                        <div className="step">

                            <span>4</span>

                            <h3>
                                Publish
                            </h3>

                            <p>
                                Share your personal public
                                portfolio link.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ===================== CTA ===================== */}

            <section className="cta">

                <div className="container">

                    <h2>
                        Ready to Launch Your Portfolio?
                    </h2>

                    <p>
                        Create your developer portfolio today
                        and start sharing your work with
                        recruiters and clients.
                    </p>

                    <a
                        href="/register"
                        className="btn-white"
                    >
                        Get Started Free
                    </a>

                </div>

            </section>

            {/* ===================== FOOTER ===================== */}

            <footer>

                <div className="container footer-top">

                    <div>

                        <h2 className="logo">
                            CodeFolio
                        </h2>

                        <p>
                            Build your developer portfolio
                            in minutes.
                        </p>

                    </div>

                    <div className="footer-links">

                        <a href="#features">
                            Features
                        </a>

                        <a href="#how">
                            How it Works
                        </a>

                        <a href="/login">
                            Login
                        </a>

                    </div>

                </div>

                <div className="footer-bottom">

                    © 2026 CodeFolio. All Rights Reserved.

                </div>

            </footer>

        </main>
    );
}

export default HomePage;