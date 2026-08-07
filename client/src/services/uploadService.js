import api from "./api";

export const uploadProfileImage = async (file) => {

    const formData = new FormData();

    formData.append("profileImage", file);

    const response = await api.post(
        "/upload/profile-image",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
};

export const uploadResume = async (file) => {

    const formData = new FormData();

    formData.append("resume", file);

    const response = await api.post(
        "/upload/resume",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
};