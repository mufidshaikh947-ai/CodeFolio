import "./HomePage.css";

function HomePage() {
    return (
        <main>

            {/* ================= NAVBAR ================= */}

            <nav>

                <div>

                    <h2>CodeFolio</h2>

                    <div>

                        <a href="#features">Features</a>

                        <a href="#templates">Templates</a>

                        <a href="#how">How it Works</a>

                        <a href="/login">Login</a>

                        <a href="/register">
                            Get Started
                        </a>

                    </div>

                </div>

            </nav>

            {/* ================= HERO ================= */}

            <section>

                <div>

                    <span>
                        No-Code Portfolio Builder
                    </span>

                    <h1>

                        Build Your Developer Portfolio
                        in Minutes.

                    </h1>

                    <p>

                        Create beautiful developer portfolios,
                        showcase projects, skills and experience,
                        choose stunning templates,
                        and publish with your own public link.

                    </p>

                    <div>

                        <a href="/register">
                            Create Portfolio
                        </a>

                        <a href="#templates">
                            View Templates
                        </a>

                    </div>

                </div>

                <div>

                    {/* Portfolio Mockup */}

                </div>

            </section>

            {/* ================= STATS ================= */}

            <section>

                <div>

                    <h3>2+</h3>

                    <p>Professional Templates</p>

                </div>

                <div>

                    <h3>100%</h3>

                    <p>Responsive</p>

                </div>

                <div>

                    <h3>Free</h3>

                    <p>For Developers</p>

                </div>

                <div>

                    <h3>SEO</h3>

                    <p>Ready</p>

                </div>

            </section>

            {/* ================= FEATURES ================= */}

            <section id="features">

                <h2>

                    Everything you need
                    to build your developer brand.

                </h2>

                <div>

                    {/* 6 Feature Cards */}

                </div>

            </section>

            {/* ================= HOW ================= */}

            <section id="how">

                <h2>

                    Build Your Portfolio
                    in Four Steps

                </h2>

                <div>

                    Step 1

                    Step 2

                    Step 3

                    Step 4

                </div>

            </section>

            {/* ================= TEMPLATES ================= */}

            <section id="templates">

                <h2>

                    Beautiful Portfolio Templates

                </h2>

                <div>

                    Template 1

                    Template 2

                </div>

            </section>

            {/* ================= CTA ================= */}

            <section>

                <h2>

                    Ready to launch
                    your portfolio?

                </h2>

                <p>

                    Join developers building beautiful portfolios
                    without writing frontend code.

                </p>

                <a href="/register">

                    Create Portfolio

                </a>

            </section>

            {/* ================= FOOTER ================= */}

            <footer>

                <h3>

                    CodeFolio

                </h3>

                <p>

                    Build. Showcase. Get Hired.

                </p>

            </footer>

        </main>
    );
}

export default HomePage;