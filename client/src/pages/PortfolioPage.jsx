import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import { getPortfolio } from "../services/portfolioService";

import templateMap from "../templates/templateMap";
import SEO from "../components/common/SEO";

import { subscribePortfolioUpdates } from "../utils/livePreview";

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

    return (

        <>

            <SEO

                title={`${portfolio.profile?.name || "Portfolio"} | ${portfolio.profile?.title || "Developer"}`}

                description={

                    portfolio.profile?.headline ||

                    "Professional developer portfolio."

                }

                keywords={

                    portfolio.skills

                        ?.map(skill => skill.name)

                        .join(", ") ||

                    "Portfolio"

                }

               image={
    portfolio.assets?.profileImage
        ? `${import.meta.env.VITE_API_URL}/${portfolio.assets.profileImage}`
        : ""
}

                url={window.location.href}

            />

            <Template portfolio={portfolio} />

        </>

    );

}

export default PortfolioPage;