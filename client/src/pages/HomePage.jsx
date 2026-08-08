const styles = `

.homepage{

    min-height:100vh;

    background:#f8fafc;

    color:#0f172a;

    font-family:Inter,system-ui,-apple-system,sans-serif;

    overflow-x:hidden;

}

.homepage *{

    margin:0;

    padding:0;

    box-sizing:border-box;

}

.homepage a{

    text-decoration:none;

    color:inherit;

}

.homepage img{

    display:block;

    max-width:100%;

}

.homepage .container{

    width:min(1200px,92%);

    margin:auto;

}

/* ===========================================
   NAVBAR
=========================================== */

.homepage .navbar{

    position:sticky;

    top:0;

    z-index:1000;

    background:rgba(255,255,255,.92);

    backdrop-filter:blur(18px);

    border-bottom:1px solid #e2e8f0;

}

.homepage .navbar .container{

    height:82px;

    display:flex;

    justify-content:space-between;

    align-items:center;

}

.homepage .logo{

    font-size:2rem;

    font-weight:800;

    color:#2563eb;

}

.homepage .nav-links{

    display:flex;

    gap:34px;

    align-items:center;

}

.homepage .nav-links a{

    color:#475569;

    font-weight:600;

    transition:.25s;

}

.homepage .nav-links a:hover{

    color:#2563eb;

}

.homepage .btn-nav{

    padding:14px 28px;

    border-radius:14px;

    background:#2563eb;

    color:white !important;

}

.homepage .btn-nav:hover{

    background:#1d4ed8;

}

/* ===========================================
   HERO
=========================================== */

.homepage .hero{

    padding:90px 0;

    background:linear-gradient(
        180deg,
        #f8fbff 0%,
        #eef5ff 100%
    );

}

.homepage .hero-grid{

    display:grid;

    grid-template-columns:1.05fr .95fr;

    align-items:center;

    gap:70px;

}

.homepage .hero-badge{

    display:inline-block;

    padding:10px 20px;

    border-radius:999px;

    background:#dbeafe;

    color:#2563eb;

    font-size:.9rem;

    font-weight:700;

    margin-bottom:24px;

}

.homepage .hero-content h1{

    font-size:4rem;

    line-height:1.08;

    font-weight:800;

    margin-bottom:28px;

}

.homepage .hero-content p{

    color:#64748b;

    font-size:1.15rem;

    line-height:1.9;

    margin-bottom:42px;

}

.homepage .hero-buttons{

    display:flex;

    gap:18px;

}

.homepage .btn-primary{

    padding:18px 36px;

    border-radius:16px;

    background:#2563eb;

    color:white;

    font-weight:700;

    transition:.3s;

}

.homepage .btn-primary:hover{

    background:#1d4ed8;

    transform:translateY(-4px);

}

.homepage .btn-secondary{

    padding:18px 36px;

    border-radius:16px;

    border:2px solid #2563eb;

    color:#2563eb;

    font-weight:700;

    transition:.3s;

}

.homepage .btn-secondary:hover{

    background:#2563eb;

    color:white;

}

.homepage .hero-preview{

    display:flex;

    justify-content:center;

}

.homepage .browser{

    width:460px;

    background:white;

    border-radius:26px;

    padding:28px;

    box-shadow:0 30px 70px rgba(37,99,235,.15);

}

.homepage .browser-top{

    height:28px;

    border-radius:12px;

    background:#dbeafe;

    margin-bottom:28px;

}

.homepage .profile-circle{

    width:78px;

    height:78px;

    border-radius:50%;

    background:#2563eb;

    margin-bottom:26px;

}

.homepage .line{

    height:14px;

    border-radius:10px;

    background:#cbd5e1;

    margin-bottom:14px;

}

.homepage .line-long{

    width:100%;

}

.homepage .line-short{

    width:65%;

    margin-bottom:34px;

}

.homepage .card-grid{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:18px;

}

.homepage .card-grid div{

    height:110px;

    border-radius:16px;

    background:#eff6ff;

}
/* ===========================================
   COMMON SECTION
=========================================== */

.homepage section{

    padding:90px 0;

}

.homepage .section-subtitle{

    max-width:700px;

    margin:20px auto 70px;

    text-align:center;

    color:#64748b;

    font-size:1.05rem;

    line-height:1.8;

}

/* ===========================================
   FEATURES
=========================================== */

.homepage .features{

    background:#ffffff;

}

.homepage .features h2{

    text-align:center;

    font-size:2.8rem;

    font-weight:800;

}

.homepage .feature-grid{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:32px;

}

.homepage .feature-card{

    background:#f8fafc;

    border:1px solid #e2e8f0;

    border-radius:22px;

    padding:38px;

    transition:.3s;

}

.homepage .feature-card:hover{

    transform:translateY(-8px);

    box-shadow:0 20px 45px rgba(37,99,235,.12);

}

.homepage .icon{

    width:72px;

    height:72px;

    border-radius:18px;

    display:flex;

    justify-content:center;

    align-items:center;

    background:#dbeafe;

    font-size:30px;

    margin-bottom:24px;

}

.homepage .feature-card h3{

    font-size:1.4rem;

    margin-bottom:14px;

}

.homepage .feature-card p{

    color:#64748b;

    line-height:1.8;

}

/* ===========================================
   HOW IT WORKS
=========================================== */

.homepage .how{

    background:#f8fbff;

}

.homepage .how h2{

    text-align:center;

    font-size:2.8rem;

    font-weight:800;

}

.homepage .steps{

    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:30px;

}

.homepage .step{

    background:white;

    border:1px solid #e2e8f0;

    border-radius:22px;

    padding:40px 30px;

    text-align:center;

    transition:.3s;

}

.homepage .step:hover{

    transform:translateY(-8px);

    box-shadow:0 20px 45px rgba(37,99,235,.12);

}

.homepage .step span{

    width:74px;

    height:74px;

    margin:0 auto 24px;

    display:flex;

    justify-content:center;

    align-items:center;

    background:#2563eb;

    color:white;

    border-radius:50%;

    font-size:1.6rem;

    font-weight:700;

}

.homepage .step h3{

    font-size:1.35rem;

    margin-bottom:15px;

}

.homepage .step p{

    color:#64748b;

    line-height:1.8;

}

/* ===========================================
   CTA
=========================================== */

.homepage .cta{

    background:linear-gradient(
        135deg,
        #2563eb,
        #1d4ed8
    );

    color:white;

    text-align:center;

}

.homepage .cta h2{

    font-size:3rem;

    margin-bottom:24px;

}

.homepage .cta p{

    max-width:700px;

    margin:0 auto 42px;

    color:rgba(255,255,255,.9);

    font-size:1.1rem;

    line-height:1.8;

}

.homepage .btn-white{

    display:inline-block;

    padding:18px 42px;

    border-radius:16px;

    background:white;

    color:#2563eb;

    font-weight:700;

    transition:.3s;

}

.homepage .btn-white:hover{

    transform:translateY(-4px);

}
    /* ===========================================
   FOOTER
=========================================== */

.homepage footer{

    background:#ffffff;

    border-top:1px solid #e2e8f0;

}

.homepage .footer-top{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:70px 0;

}

.homepage .footer-top p{

    margin-top:14px;

    color:#64748b;

    line-height:1.8;

}

.homepage .footer-links{

    display:flex;

    gap:35px;

}

.homepage .footer-links a{

    font-weight:600;

    color:#475569;

    transition:.25s;

}

.homepage .footer-links a:hover{

    color:#2563eb;

}

.homepage .footer-bottom{

    border-top:1px solid #e2e8f0;

    text-align:center;

    padding:30px;

    color:#64748b;

}

/* ===========================================
   ANIMATIONS
=========================================== */

.homepage .browser{

    animation:float 5s ease-in-out infinite;

}

@keyframes float{

    0%{

        transform:translateY(0px);

    }

    50%{

        transform:translateY(-12px);

    }

    100%{

        transform:translateY(0px);

    }

}

/* ===========================================
   RESPONSIVE
=========================================== */

@media (max-width:1100px){

    .homepage .hero-grid{

        grid-template-columns:1fr;

        text-align:center;

        gap:60px;

    }

    .homepage .hero-buttons{

        justify-content:center;

    }

    .homepage .hero-preview{

        order:-1;

    }

    .homepage .feature-grid{

        grid-template-columns:repeat(2,1fr);

    }

    .homepage .steps{

        grid-template-columns:repeat(2,1fr);

    }

}

@media (max-width:768px){

    .homepage section{

        padding:70px 0;

    }

    .homepage .navbar .container{

        justify-content:center;

    }

    .homepage .nav-links{

        display:none;

    }

    .homepage .hero-content h1{

        font-size:2.8rem;

    }

    .homepage .feature-grid{

        grid-template-columns:1fr;

    }

    .homepage .steps{

        grid-template-columns:1fr;

    }

    .homepage .browser{

        width:100%;

        max-width:420px;

    }

    .homepage .footer-top{

        flex-direction:column;

        text-align:center;

        gap:35px;

    }

    .homepage .footer-links{

        justify-content:center;

        flex-wrap:wrap;

    }

}

@media (max-width:500px){

    .homepage .hero-content h1{

        font-size:2.2rem;

    }

    .homepage .hero-buttons{

        flex-direction:column;

    }

    .homepage .btn-primary,

    .homepage .btn-secondary,

    .homepage .btn-white{

        width:100%;

        text-align:center;

    }

    .homepage .browser{

        height:auto;

        padding:22px;

    }

    .homepage .card-grid div{

        height:90px;

    }

}
`;

function HomePage() {
    return (
    <>
        <style>{styles}</style>
<main className="homepage">
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
            </>
    );
}

export default HomePage;