import { client } from "./config";

export const Plan = () => client.get("api/package");
export const insertPlan = (data, token) =>
  client.post("api/package", data, {
    headers: {
      Authorization: token,
    },
  });

export const getPlan = (packageId, token) =>
  client.get(`api/package/${packageId}`, {
    headers: {
      Authorization: token,
    },
  });
export const updatePlan = (packageId, body, token) =>
  client.put(`api/package/${packageId}`, body, {
    headers: {
      Authorization: token,
    },
  });

export const deletePlan = (packageId, token) =>
  client.delete(`api/package/${packageId}`, {
    headers: {
      Authorization: token,
    },
  });
