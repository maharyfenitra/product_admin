import { useGenericQuery } from "../lib/useGenericQuery";

export const useGetAllProductsQuery = () => {
  return useGenericQuery(
    (data) => {
      const { data: dataResponse, ...rest } = data;

      return {
        data: dataResponse?.data || null,
        ...rest,
      };
    },
    "/products",
    "get-all-products"
  );
};
