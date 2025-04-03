import { DataProvider, fetchUtils } from "react-admin";

const apiUrl = "http://localhost:3001";
const httpClient = fetchUtils.fetchJson;


const dataProvider: DataProvider = {
  getList: async (resource) => {
    const options: fetchUtils.Options = {
      headers: new Headers({
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")? localStorage.getItem("authToken") : ""}`,
      }),
    };
    const url = `${apiUrl}/${resource}`;
    const { json } = await httpClient(url, options);
    return { data: json, total: json.length };
  },

  getOne: async (resource, params) => {
    const options: fetchUtils.Options = {
      headers: new Headers({
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")? localStorage.getItem("authToken") : ""}`,
      }),
    };
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, options);
    return { data: json };
  },

  create: async (resource, params) => {
    if(resource == 'users'){
      
      const {json} = await httpClient(`${apiUrl}/users/admins`, {
        method: "POST",
        body: JSON.stringify(params.data),
      });

      return { data: json.finalCreatedUser };
    }
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  update: async (resource, params) => {
    const requestHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("authToken")? localStorage.getItem("authToken") : ""}`,
    });
    params.data.id = params.id;
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
      headers: requestHeaders
    });
    return { data: json };
  },

  delete: async (resource, params) => {
    const requestHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("authToken")? localStorage.getItem("authToken") : ""}`,
    });
    await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
      headers: requestHeaders
    });
    return { data: params.previousData };
  },
};

export default dataProvider;
