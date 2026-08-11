// import api from "./api";

// export const getProjects = async () => {
//   const response = await api.get("/projects");
//   return response.data;
// };

// export const createProject = async (formData) => {
//   const response = await api.post("/projects", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   return response.data;
// };

// export const deleteProject = async (id) => {
//   const response = await api.delete(`/projects/${id}`);
//   return response.data;
// };

import api from "./api";

export const getProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

export const createProject = async (formData) => {
  const response = await api.post("/projects", formData);

  return response.data;
};

export const updateProject = async (id, formData) => {
  const response = await api.put(`/projects/${id}`, formData);

  return response.data;
};

export const deleteProject = async (id) => {
  const response = await api.delete(`/projects/${id}`);
  return response.data;
};