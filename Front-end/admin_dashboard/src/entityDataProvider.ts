import { Identifier, RaRecord } from "react-admin";

export default interface EntityDataProvider {
  getList: <T extends RaRecord>(
   
  ) => Promise<{ data: T[]; total: number }>;

  getOne: <T extends RaRecord>(
    resource: string,
    params: { id: Identifier }
  ) => Promise<{ data: T }>;

  getMany?: <T extends RaRecord>(
    resource: string,
    params: { ids: Identifier[] }
  ) => Promise<{ data: T[] }>;

  getManyReference?: <T extends RaRecord>(
    resource: string,
    params: {
      target: string;
      id: Identifier;
      pagination: { page: number; perPage: number };
      sort: { field: string; order: "ASC" | "DESC" };
      filter: any;
    }
  ) => Promise<{ data: T[]; total: number }>;

  create: <T extends RaRecord>(
    resource: string,
    params: { data: Partial<T> }
  ) => Promise<{ data: T }>;

  update: <T extends RaRecord>(
    resource: string,
    params: { id: Identifier; data: Partial<T> }
  ) => Promise<{ data: T }>;

  updateMany?: <T extends RaRecord>(
    resource: string,
    params: { ids: Identifier[]; data: Partial<T> }
  ) => Promise<{ data: Identifier[] }>;

  delete: <T extends RaRecord>(
    resource: string,
    params: { id: Identifier }
  ) => Promise<{ data: T }>;

  deleteMany?: <T extends RaRecord>(
    resource: string,
    params: { ids: Identifier[] }
  ) => Promise<{ data: Identifier[] }>;
}