import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"

const githubApiHeaders = {
  "Github-Api-Key": process.env.REACT_APP_GITHUB_TOKEN,
  "Github-url": process.env.REACT_APP_GITHUB_URL,
}

const baseUrl = "https://api.github.com/"

const createRequest = (url) => ({
  url,
  headers: githubApiHeaders,
})

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getRepos: builder.query({
      query: (uid, page) =>
        `user/${uid}/repos?per_page=20&page=${page}`,
    }),
    getUserDetails: builder.query({
      query: (uid) => `user/${uid}`,
    }),
    getStars: builder.query({
      query: (uid) => `user/${uid}/starred`,
    }),
    getRepoNo: builder.query({
      query: (uid) => `user/${uid}/repos`,
    }),
  }),
})

export const {
  useGetReposQuery,
  useGetUserDetailsQuery,
  useGetStarsQuery,
  useGetRepoNoQuery,
  useGetfollowersQuery,
} = githubApi
