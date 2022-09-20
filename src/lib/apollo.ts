import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl8846yho0xpj01ta2mgtfw93/master',
    cache: new InMemoryCache()
})