import { Order } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/order`;

const getOrders = async (externalid : string): Promise<Order[]> => {
  const res = await fetch(`${URL}/user/${externalid}`, { cache: "no-store" });
  return res.json();
};

export default getOrders;
