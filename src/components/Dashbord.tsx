import type { ProductType } from "./hooks/type";
import { useDashboard } from "./hooks/useDashboard";
import { ProductPanel } from "./ProductPanel";

export const Dashboard = () => {
  const {
    isLoading,
    products,
    formData,
    handleChange,
    createNewProduct,
    refetch,
  } = useDashboard();

  if (isLoading) return <p>Chargement...</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Créer un nouveau produit:</h2>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          await createNewProduct();
        }}
        style={{
          border: "1px solid #ccc",
          padding: "16px",
          borderRadius: "4px",
          marginBottom: "24px",
        }}
      >
        <div style={{ marginBottom: "12px" , padding: "17px"}}>
          <label>Nom :</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </div>

        <div style={{ marginBottom: "12px", padding: "17px" }}>
          <label>Prix :</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </div>

        <div style={{ marginBottom: "12px" , padding: "17px"}}>
          <label>Description :</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </div>

        <button type="submit">Ajouter</button>
      </form>

      <h2>Liste des produits:</h2>
      {products && products.length > 0 ? (
        <ul>
          {products.map((product: ProductType, index: number) => (
            <li key={index}>
              <ProductPanel product={product} callBack={refetch} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun produit trouvé.</p>
      )}
    </div>
  );
};
