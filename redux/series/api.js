import baseAPI from "../baseApi";
import { gql } from "graphql-request";
export const seriesAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getEpisodeDetails: build.query({
      query: (id) => ({
        body: gql`
          query {
            episode(id: ${id}) {
              id,
              name,
              air_date,
              episode,
            }
          }
        `,
      }),
      transformResponse: (response) => response.upcomingMovies.results,
    }),
  }),
  overrideExisting: false,
});

export const { useGetEpisodeDetailsQuery } = seriesAPI;
