import api from "./api";

// Get Public Portfolio
export async function getPortfolio(username) {

    const response = await api.get(`/portfolio/${username}`);

    return response.data;

}