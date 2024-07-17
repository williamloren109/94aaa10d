import axios from "axios";

const BASE_URL = "https://aircall-backend.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchCalls = async () => {
  const response = await api.get("/activities");
  return response.data;
};

export const archiveCall = async (id) => {
  await api
    .patch(`/activities/${id}`, { is_archived: true })
    .then((response) => {
      alert("Call archived");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const unarchiveCall = async (id) => {
  await api
    .patch(`/activities/${id}`, { is_archived: false })
    .then((response) => {
      alert("Call unarchived");
    });
};

export const resetCalls = async () => {
  await api.patch("/reset");
};

export const archiveAll = async (unarchivedCalls) => {
  await Promise.all(
    unarchivedCalls.map((call) =>
      api.patch(`/activities/${call.id}`, { is_archived: true })
    )
  ).then(() => {
    alert("All calls have been archived.");
  });
};

export const unarchiveAll = async (archivedCalls) => {
  await Promise.all(
    archivedCalls.map((call) =>
      api.patch(`/activities/${call.id}`, { is_archived: false })
    )
  ).then(() => {
    alert("All calls have been unarchived.");
  });
};
