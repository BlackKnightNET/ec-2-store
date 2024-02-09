import { Color } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/colors`;

interface Query {
    subcategoryId?: string;
}
const getColors = async (query: Query): Promise <Color[]> =>{
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            subcategoryId: query.subcategoryId,
        },
    });
    const res = await fetch(url, { cache: "no-store" });

    return res.json();

};
export default getColors; 