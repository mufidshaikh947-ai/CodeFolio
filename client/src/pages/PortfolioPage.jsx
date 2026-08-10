import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import { getPortfolio } from "../services/portfolioService";

import templateMap from "../templates/templateMap";
import SEO from "../components/common/SEO";

import { subscribePortfolioUpdates } from "../utils/livePreview";

function createMetaDescription(profile) {

    const description =
        profile?.about ||
        "Developer portfolio showcasing projects, skills and experience.";

    const normalizedDescription = description.replace(/\s+/g, " ").trim();

    if (normalizedDescription.length <= 160) {

        return normalizedDescription;

    }

    return `${normalizedDescription.slice(0, 157).trimEnd()}...`;

}

function PortfolioPage() {

    const { username } = useParams();
const API_URL = import.meta.env.VITE_API_URL;

    const [portfolio, setPortfolio] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadPortfolio = useCallback(async (showLoader = true) => {

        try {

            if (showLoader) {

                setLoading(true);

            }

            setError("");

            const response = await getPortfolio(username);

            setPortfolio(response.portfolio);

        }

        catch (error) {

            setError(

                error.response?.data?.message ||

                "Portfolio not found."

            );

        }

        finally {

            if (showLoader) {

                setLoading(false);

            }

        }

    }, [username]);

    useEffect(() => {

        loadPortfolio();

    }, [loadPortfolio]);

    useEffect(() => {

        const unsubscribe = subscribePortfolioUpdates(() => {

            loadPortfolio(false);

        });

        return unsubscribe;

    }, [loadPortfolio]);

    if (loading) {

        return (

            <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">

                <h2 className="text-2xl font-semibold">

                    Loading Portfolio...

                </h2>

            </div>

        );

    }

    if (error) {

        return (

            <div className="flex min-h-screen items-center justify-center bg-slate-950">

                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-8 py-6">

                    <h2 className="text-2xl font-semibold text-red-400">

                        {error}

                    </h2>

                </div>

            </div>

        );

    }

    const selectedTemplate =

        portfolio?.settings?.templateId ?? "minimal";

    const Template =

        templateMap[selectedTemplate] ??

        templateMap.minimal;

    const profile = portfolio.profile;
    const siteUrl = window.location.origin;
    const canonicalUrl = `${siteUrl}/${encodeURIComponent(username)}`;
    const title = `${profile?.name || "Developer"} | ${
        profile?.title?.trim() || "Developer Portfolio"
    }`;
    const description = createMetaDescription(profile);
    const image = portfolio.assets?.profileImage
    ? `${API_URL}/${portfolio.assets.profileImage}`
    : `${siteUrl}/og-image.png`;

    return (

        <>

            <SEO

                title={title}

                description={description}

                keywords={

                    portfolio.skills

                        ?.map(skill => skill.name)

                        .join(", ") ||

                    "Portfolio"

                }

                image={image}

                url={canonicalUrl}

            />

            <Template portfolio={portfolio} />

        </>

    );

}

export default PortfolioPage;
