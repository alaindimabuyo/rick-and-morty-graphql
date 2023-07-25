import baseAPI from "../baseApi";
import { gql } from "graphql-request";
export const characterApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getAllCharacters: build.query({
      query: () => ({
        body: gql`
          query {
            characters {
              results {
                id
                name
                status
                species
                type
                gender
                origin {
                  id
                  name
                  type
                  dimension
                }
                location {
                  id
                  name
                  type
                  dimension
                }
                image
              }
            }
          }
        `,
      }),
      transformResponse: (response) => response.characters.results,
    }),
    getChracterDetails: build.query({
      query: (id) => ({
        body: gql`
          query {
            character(id: ${id}) {
              id
              name
              status
              species
              type
              gender
              origin {
                id
                name
                type
                dimension
              }
              location {
                id
                name
                type
                dimension
              }
              image
            }
          }
        `,
      }),
      transformResponse: (response) => response.character,
    }),
  }),
  overrideExisting: false,
});

export const { useGetChracterDetailsQuery, useGetAllCharactersQuery } =
  characterApi;
