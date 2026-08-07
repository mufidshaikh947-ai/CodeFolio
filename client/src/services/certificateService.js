import api from "./api";

// Get all certificates
export async function getCertificates() {

    const response = await api.get("/certificates");

    return response.data;

}

// Create certificate
export async function createCertificate(data) {

    const response = await api.post("/certificates", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });

    return response.data;

}

// Update certificate
export async function updateCertificate(id, data) {

    const response = await api.put(`/certificates/${id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });

    return response.data;

}

// Delete certificate
export async function deleteCertificate(id) {

    const response = await api.delete(`/certificates/${id}`);

    return response.data;

}