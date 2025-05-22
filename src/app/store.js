import { configureStore } from "@reduxjs/toolkit";
import { vehicleApi } from "./vehicles/vehiclesApi";
import { userApi } from "./auth/userApi";
import userReducer from "./auth/usersSlice";


export const store = configureStore({
    reducer: {

        user: userReducer,
        [vehicleApi.reducerPath]: vehicleApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        vehicleApi.middleware,
        userApi.middleware
    ]),
})