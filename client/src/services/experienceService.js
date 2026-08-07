import api from "./api";

// Get all experiences
export async function getExperiences() {
    const response = await api.get("/experiences");
    return response.data;
}

// Create experience
export async function createExperience(data) {
    const response = await api.post("/experiences", data);
    return response.data;
}

// Update experience
export async function updateExperience(id, data) {
    const response = await api.put(`/experiences/${id}`, data);
    return response.data;
}

// Delete experience
export async function deleteExperience(id) {
    const response = await api.delete(`/experiences/${id}`);
    return response.data;
}