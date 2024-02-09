import { Size } from "@/types";

import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes/search`;

interface Query {
    searchValue?: string;
}

const getSizesSearch = async (query: Query) : Promise<Size[]> => {

    const url = qs.stringifyUrl({
        url: URL,
        query: {
            searchValue: query.searchValue,
        }
    });

    const res = await fetch(url, { cache: "no-store" });
    return res.json();
}

export default getSizesSearch;