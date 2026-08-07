import api from "./api";

// Get all education records
export async function getEducation() {

    const response = await api.get("/educations");

    return response.data;

}

// Create education
export async function createEducation(data) {

    const response = await api.post("/educations", data);

    return response.data;

}

// Update education
export async function updateEducation(id, data) {

    const response = await api.put(`/educations/${id}`, data);

    return response.data;

}

// Delete education
export async function deleteEducation(id) {

    const response = await api.delete(`/educations/${id}`);

    return response.data;

}