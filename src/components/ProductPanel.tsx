import { useDeleteProductMutation } from "./hooks/useDeleteProductMutation";
import type { ProductType } from "./hooks/type";

export const ProductPanel = ({
  product,
  callBack,
}: {
  product: ProductType;
  callBack: () => void;
}) => {
  const { mutateAsync } = useDeleteProductMutation(Number(product.id));

  const handleDelete = async () => {
    await mutateAsync({})
      .then(() => {
        callBack();
        alert("Produit supprimé");
      })
      .catch(() => {
        alert("Erreur lors de la suppression du produit");
      });
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "8px",
        borderRadius: "4px",
      }}
    >
      <strong>{product.name}</strong> – ${product.price}
      <br />
      <span style={{ fontSize: "0.9em", color: "#555" }}>
        {product.description}
      </span>
      <br />
      <button onClick={async () => handleDelete()}>Effacer Produit</button>
    </div>
  );
};
