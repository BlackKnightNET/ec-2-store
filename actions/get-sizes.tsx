import { Size } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

interface Query {
    subcategoryId?: string;
}
const getSizes = async (query: Query): Promise<Size[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            subcategoryId: query.subcategoryId,
        },
    });
    const res = await fetch(url, { cache: "no-store" });

    return res.json();
};

export default getSizes;