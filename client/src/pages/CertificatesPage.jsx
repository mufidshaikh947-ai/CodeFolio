import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Input from "../components/common/Input";
import Button from "../components/common/Button";

import PageContainer from "../components/ui/PageContainer";
import PageHeader from "../components/ui/PageHeader";
import SectionCard from "../components/ui/SectionCard";
import SectionHeader from "../components/ui/SectionHeader";
import FormGrid from "../components/ui/FormGrid";
import FileUpload from "../components/ui/FileUpload";
import LoadingState from "../components/ui/LoadingState";
import EmptyState from "../components/ui/EmptyState";
import StatusBadge from "../components/ui/StatusBadge";
import FormActions from "../components/ui/FormActions";
import { notifyPortfolioUpdate } from "../utils/livePreview";

import {
    getCertificates,
    createCertificate,
    deleteCertificate
} from "../services/certificateService";

function CertificatesPage() {

    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    const {

        register,
        handleSubmit,
        reset,
        watch,

        formState: { errors }

    } = useForm();

    const certificateImage = watch("certificateImage");

    async function loadCertificates() {

        try {

            const response = await getCertificates();

            setCertificates(response.certificates);

        }

        catch (error) {

            toast.error("Failed to load certificates.");

        }

        finally {

            setFetching(false);

        }

    }

    useEffect(() => {

        loadCertificates();

    }, []);

    async function onSubmit(data) {

        setLoading(true);

        try {

            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("issuer", data.issuer);
            formData.append("issueDate", data.issueDate);
            formData.append("credentialId", data.credentialId);
            formData.append("credentialUrl", data.credentialUrl);
            formData.append("skills", data.skills);
            formData.append("displayOrder", data.displayOrder || 0);

            if (certificateImage && certificateImage.length > 0) {

                formData.append(
                    "certificateImage",
                    certificateImage[0]
                );

            }

            const response = await createCertificate(formData);

            toast.success(response.message);
notifyPortfolioUpdate();

            reset();

            loadCertificates();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Failed to add certificate."

            );

        }

        finally {

            setLoading(false);

        }

    }

    async function handleDelete(id) {

        if (!window.confirm("Delete this certificate?")) return;

        try {

            const response = await deleteCertificate(id);

            toast.success(response.message);
notifyPortfolioUpdate();

            loadCertificates();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Delete failed."

            );

        }

    }

    if (fetching) {

        return <LoadingState text="Loading Certificates..." />;

    }
const sortedCertificates = [...certificates].sort((a, b) => {

    const orderA = Number(a.displayOrder ?? 9999);

    const orderB = Number(b.displayOrder ?? 9999);

    if (orderA !== orderB) {

        return orderA - orderB;

    }

    return (b.issueDate || "").localeCompare(a.issueDate || "");

});
    return (

<PageContainer>
            <PageHeader
    title="Certificate Management"
    description="Manage the certifications displayed on your public portfolio."
/>

            <form
                onSubmit={handleSubmit(onSubmit)}
className="space-y-6"            >
                <SectionCard>

    <SectionHeader
        title="Add Certificate"
        subtitle="Add professional certifications and credentials."
    />
<FormGrid>
                    <Input
                        label="Certificate Title"
                        placeholder="Full Stack Web Development"
                        register={register("title", {
                            required: "Certificate title is required"
                        })}
                        error={errors.title}
                    />

                    <Input
                        label="Issued By"
                        placeholder="Coursera"
                        register={register("issuer", {
                            required: "Issuer is required"
                        })}
                        error={errors.issuer}
                    />

                    <Input
                        label="Issue Date"
                        type="date"
                        register={register("issueDate")}
                        error={errors.issueDate}
                    />

                    <Input
                        label="Credential ID"
                        placeholder="ABC123XYZ"
                        register={register("credentialId")}
                        error={errors.credentialId}
                    />

                    <Input
                        label="Credential URL"
                        placeholder="https://..."
                        register={register("credentialUrl")}
                        error={errors.credentialUrl}
                    />

                    <Input
                        label="Skills"
                        placeholder="React, Node.js, MongoDB"
                        register={register("skills")}
                        error={errors.skills}
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

                    <div className="mt-8">

    <FileUpload

        label="Certificate Image"

        accept="image/*"

        fileName={
            certificateImage?.length > 0
                ? certificateImage[0].name
                : ""
        }

        helperText="JPG, PNG or WEBP"

        onChange={() => {}}

    />

</div>

                </div>

                
                <FormActions>

    <Button
        type="submit"
        loading={loading}
        disabled={loading}
        size="lg"
    >

        {loading
            ? "Adding Certificate..."
            : "Add Certificate"}

    </Button>

</FormActions>

</SectionCard>
            </form>

<SectionCard>

    <SectionHeader
        title="Certificates Library"
        subtitle="Review and manage your certificates."
    />
                {certificates.length === 0 ? (

                    <EmptyState
    title="No Certificates Added"
    description="Add your first certificate to strengthen your portfolio."
/>

                ) : (

                    sortedCertificates.map((certificate) => (

                        <div
                            key={certificate._id}
className="flex flex-col gap-6 rounded-xl border border-slate-200 p-5 transition-all duration-200 hover:border-slate-300"                        >

                            <div className="flex items-start justify-between">

                                <div>

                                    <h2 className="text-2xl font-bold text-slate-800">

                                        {certificate.title}

                                    </h2>

                                    <p className="mt-1 text-lg text-slate-600">

                                        {certificate.issuer}

                                    </p>

                                  <div className="mt-4 flex flex-wrap gap-2">

    <StatusBadge color="blue">

        {certificate.issuer}

    </StatusBadge>

    <StatusBadge color="green">

        {certificate.issueDate || "-"}

    </StatusBadge>

    <StatusBadge color="gray">

        ID: {certificate.credentialId || "-"}

    </StatusBadge>

    <StatusBadge color="gray">

        Order {certificate.displayOrder ?? 0}

    </StatusBadge>

</div>
                        {certificate.skills && (

    <div className="mt-5 flex flex-wrap gap-2">

        {(Array.isArray(certificate.skills)
            ? certificate.skills
            : String(certificate.skills || "").split(","))
            .map((skill) => skill.trim())
            .filter(Boolean)
            .map((skill, index) => (

                <StatusBadge
                    key={index}
                    color="gray"
                >

                    {skill}

                </StatusBadge>

            ))}

    </div>

)}
                                    {certificate.credentialUrl && (

                                        <div className="mt-5">

    <a

        href={certificate.credentialUrl}

        target="_blank"

        rel="noreferrer"

        className="text-sm font-semibold text-blue-600 hover:underline"

    >

        View Credential

    </a>

</div>

                                    )}

                                </div>

                                <Button

    type="button"

    variant="danger"

    onClick={() => handleDelete(certificate._id)}

>

    Delete Certificate

</Button>

                            </div>

                        </div>

                    ))

                )}

</SectionCard>
</PageContainer>
    );

}

export default CertificatesPage;
            