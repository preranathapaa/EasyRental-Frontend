import { configureStore } from "@reduxjs/toolkit";
import { vehicleApi } from "./vehicles/vehiclesApi";


export const store = configureStore({
    reducer: {
        [vehicleApi.reducerPath]: vehicleApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(vehicleApi.middleware),
})