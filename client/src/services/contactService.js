import api from "./api";

// Get all messages
export async function getMessages() {

    const response = await api.get("/contact");

    return response.data;

}

// Mark message as read
export async function markAsRead(id) {

    const response = await api.patch(`/contact/${id}/read`);

    return response.data;

}

// Mark message as replied
export async function markAsReplied(id) {

    const response = await api.patch(`/contact/${id}/replied`);

    return response.data;

}

// Delete message
export async function deleteMessage(id) {

    const response = await api.delete(`/contact/${id}`);

    return response.data;

}
// Send message from public portfolio
export async function sendMessage(username, data) {

    const response = await api.post(`/contact/${username}`, data);

    return response.data;

}