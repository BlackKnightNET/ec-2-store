import { Subcategory } from "@/types";
import qs from "query-string";



const URL = `${process.env.NEXT_PUBLIC_API_URL}/subcategories`;

interface Query {
  categoryId?: string;
}

const getSubcategories = async (query: Query): Promise<Subcategory[]> => {
  
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
    },
  });

  
    const res = await fetch(url, { cache: "no-store" });
    const subcategories = await res.json();
    
    return subcategories;

};

export default getSubcategories;
