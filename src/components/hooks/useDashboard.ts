import { useState } from "react";
import { useGetAllProductsQuery } from "./useGetAllProductsQuery";
import { useCreateProductMutation } from "./useCreateProductMutation";
import type { ProductType } from "./type";

export const useDashboard = () => {
  const { mutateAsync } = useCreateProductMutation();
  const { data: products, isLoading, refetch } = useGetAllProductsQuery();

  // Init product state
  const [formData, setFormData] = useState<ProductType>({
    name: "",
    price: 0,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  // Create New Product
  const createNewProduct = async () => {
    await mutateAsync(formData)
      .then(() => {
        alert("Produit enregistrer");
        console.log(formData);
        refetch();
        setFormData({
          name: "",
          price: 0,
          description: "",
        });
      })
      .catch((err) => {
        alert(err?.message || "Y a eurreur ");
      });
  };

  return {
    products,
    isLoading,
    formData,
    handleChange,
    createNewProduct,
    refetch
  };
};
