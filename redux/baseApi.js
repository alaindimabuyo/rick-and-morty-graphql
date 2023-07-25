// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { request, gql, ClientError } from "graphql-request";
// Define the GraphQL endpoint
const API_ENDPOINT = "https://rickandmortyapi.com/graphql";

const graphqlBaseQuery =
  ({ baseUrl }) =>
  async ({ body }) => {
    try {
      const result = await request(baseUrl, body);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

const baseAPI = createApi({
  reducerPath: "rick-and-morty-query",
  baseQuery: graphqlBaseQuery({
    baseUrl: API_ENDPOINT,
  }),
  endpoints: (build) => ({}),
});

export default baseAPI;
