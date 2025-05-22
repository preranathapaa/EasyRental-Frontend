import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { authUrl } from '../constants/api_urls'


export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl: `${authUrl}`}),
    
    
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (q) => ({
                url: "/signin",
                body: q,
                method: "POST"
            }),
           
        }),

        signuUser: builder.mutation({
            query: (q) => ({
                url: "/signup",
                body: q,
                method: "POST"

            }),
            
        }),
    })
})

export const {
    useLoginUserMutation,
    useSignuUserMutation
   

} = userApi;