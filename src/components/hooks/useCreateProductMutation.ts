import { useGenericMutation } from "../lib/useGenericMutation"

export const useCreateProductMutation = () => {
    return useGenericMutation("/products")
}