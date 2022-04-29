import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import { githubApi } from "../API/githubApi"

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [githubApi.reducerPath]: githubApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
})
setupListeners(store.dispatch)
