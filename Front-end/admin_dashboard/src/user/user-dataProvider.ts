import { RaRecord, Identifier } from "react-admin";
import EntityDataProvider from "../entityDataProvider";

const userDataProvider: EntityDataProvider = {
    getList: async function <T extends RaRecord>(): Promise<{ data: T[]; total: number; }> {
        const data = await fetch(`http://localhost:3001/users`,{
            headers:{"Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImVtYWlsIjoibHVuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6Im1hbmRlaGEiLCJpYXQiOjE3NDM1NzIxNTd9.JpyM5NwKgmProMRDBQ-E1hhHskSbrpsPPX5IEU6yTuc"}
        });
        const jsonData = await data.json();
        const users = {
            data: jsonData,
            total: 200
        }

        return users;
    },
    getOne: function <T extends RaRecord>(resource: string, params: { id: Identifier; }): Promise<{ data: T; }> {
        throw new Error("Function not implemented.");
    },
    create: function <T extends RaRecord>(resource: string, params: { data: Partial<T>; }): Promise<{ data: T; }> {
        throw new Error("Function not implemented.");
    },
    update: function <T extends RaRecord>(resource: string, params: { id: Identifier; data: Partial<T>; }): Promise<{ data: T; }> {
        throw new Error("Function not implemented.");
    },
    delete: function <T extends RaRecord>(resource: string, params: { id: Identifier; }): Promise<{ data: T; }> {
        throw new Error("Function not implemented.");
    }
}

export default userDataProvider;