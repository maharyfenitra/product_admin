import { useGenericMutation } from "../lib/useGenericMutation"

export const useDeleteProductMutation = (id: number) => {
    return useGenericMutation(`/products/${id}`, "DELETE")
}