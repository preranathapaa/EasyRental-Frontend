
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
        }),

        rentVehicle: builder.mutation({
            query: ({data, token}) => ({
                url: "/rentvehicle",
                body: data,
                headers:{
                    Authorization: token,
                     "Content-Type": "application/json",
                },
                method: "POST"
            })
        })



    })
})

export const {
    useGetAllVehiclesQuery,
    useGetVehiclesDetailsQuery,
    useRentVehicleMutation

} = vehicleApi;