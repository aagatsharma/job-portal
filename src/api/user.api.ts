import { api } from ".";

export const userEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchMe: builder.query<undefined, undefined>({
      query: () => ({
        url: "users/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchMeQuery } = userEndpoint;
