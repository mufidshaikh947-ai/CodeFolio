import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Button from "../components/common/Button";
import Input from "../components/common/Input";
import PageContainer from "../components/ui/PageContainer";
import PageHeader from "../components/ui/PageHeader";
import SectionCard from "../components/ui/SectionCard";
import SectionHeader from "../components/ui/SectionHeader";
import FormActions from "../components/ui/FormActions";
import LoadingState from "../components/ui/LoadingState";
import StatusBadge from "../components/ui/StatusBadge";

import { getProfile, updateProfile } from "../services/userService";
import { notifyPortfolioUpdate } from "../utils/livePreview";

function PremiumPage() {

    const [fetching, setFetching] = useState(true);
    const [saving, setSaving] = useState(false);

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    useEffect(() => {

        async function loadPremiumSettings() {

            try {

                const response = await getProfile();

                reset({
                    customDomain: response.profile.customDomain || ""
                });

            }

            catch {

                toast.error("Failed to load premium settings.");

            }

            finally {

                setFetching(false);

            }

        }

        loadPremiumSettings();

    }, [reset]);

    async function onSubmit(data) {

        setSaving(true);

        try {

            const response = await updateProfile({
                customDomain: data.customDomain.trim()
            });

            reset({
                customDomain: response.profile.customDomain || ""
            });

            toast.success("Custom domain saved successfully.");
            notifyPortfolioUpdate();

        }

        catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to save custom domain."
            );

        }

        finally {

            setSaving(false);

        }

    }

    if (fetching) {

        return <LoadingState text="Loading Premium Settings..." />;

    }

    return (

        <PageContainer>

            <PageHeader
                title="Premium"
                description="Manage premium portfolio settings and simulated custom domain connections."
                action={<StatusBadge color="amber">PREMIUM</StatusBadge>}
            />

            <form onSubmit={handleSubmit(onSubmit)}>

                <SectionCard>

                    <SectionHeader
                        title="Custom Domain"
                        subtitle="Save the domain you want to display on your portfolio. This is a simulated connection and does not configure DNS, SSL or hosting."
                    />

                    <Input
                        label="Custom Domain"
                        placeholder="portfolio.example.com"
                        register={register("customDomain")}
                    />

                    <FormActions>

                        <Button
                            type="submit"
                            size="lg"
                            loading={saving}
                        >
                            Save Domain
                        </Button>

                    </FormActions>

                </SectionCard>

            </form>

        </PageContainer>

    );

}

export default PremiumPage;
