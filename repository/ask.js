import {http} from "../utils/http";
import useSWR from "swr";

const url = {
    contacts: () => '/product/api/v5/customer-service'
}

const hooks = {
    useGetContacts() {
        return useSWR(url.contacts(), http.fetcher)
    },
}

const api = {
    async getContacts() {
        return await http.fetcher(url.contacts)
    },
}

export const askRepository = {
    url,
    hooks,
    api
}