import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const githubApiHeaders = {
  "Github-Api-Key":
    process.env.REACT_APP_GITHUB_TOKEN,
  "Github-url":
    process.env.REACT_APP_GITHUB_URL,
};
