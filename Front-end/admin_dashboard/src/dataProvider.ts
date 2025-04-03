import { DataProvider, fetchUtils } from "react-admin";

const apiUrl = "http://localhost:3001";
const httpClient = fetchUtils.fetchJson;

const options: fetchUtils.Options = {
  headers: new Headers({
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("authToken") || ""}`,
  }),
};
const dataProvider: DataProvider = {
  getList: async (resource) => {
    const url = `${apiUrl}/${resource}`;
    const { json } = await httpClient(url, options);
    return { data: json, total: json.length };
  },

  getOne: async (resource, params) => {
    console.log("ato",options.headers?.values);
    
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, options);
    return { data: json };
  },

  create: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  update: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  delete: async (resource, params) => {
    await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    });
    return { data: params.previousData };
  },
};

export default dataProvider;
