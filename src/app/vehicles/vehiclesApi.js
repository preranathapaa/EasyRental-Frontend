
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../constants/api_urls'

export const vehicleApi = createApi({
    reducerPath: "vehicleApi",
    baseQuery: fetchBaseQuery({baseUrl: `${baseUrl}`}),
    endpoints: (builder) => ({
        getAllVehicles: builder.query({
            query: () => "/allvehicles"
        }),
        getVehiclesDetails: builder.query({
            query: (id) => `/singlevehicle/${id}`
        })
    })
})

export const {
    useGetAllVehiclesQuery,
    useGetVehiclesDetailsQuery

} = vehicleApi;