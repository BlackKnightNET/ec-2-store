
import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  productId?:string,
  categoryId?: string;
  subcategoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  isOffered?: boolean;
  isUndercost?: boolean;
  searchValue?: string;
  description?: string; 
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      productId: query.productId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      subcategoryId: query.subcategoryId,
      searchValue: query.searchValue,
      isFeatured: query.isFeatured,
      isOffered: query.isOffered,
      isUndercost: query.isUndercost,
      description: query.description, 
    },
  });

  const res = await fetch(url, { cache: "no-store" });

  return res.json();
};

export default  getProducts;

