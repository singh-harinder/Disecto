import Products from "../../components/Products";

type ProductPageProps = {
  query: {
    page?: string;
  };
};

function ProductsPage({ query }: ProductPageProps) {
  return (
    <>
      <Products page={Number(query.page) || 1} />
    </>
  );
}

export default ProductsPage;
