import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers: any) => headers,
    credentials: "include",
  }),
  endpoints: () => ({}),
  tagTypes: ["user"],
});