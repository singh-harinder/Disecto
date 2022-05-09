import Product from "./Product";
import { useAllProductsQuery } from "../types/generated-queries";
import LoadingAnimation from "./Loading";
import DisplayError from "./ErrorMessage";

function Products({ page }: { page: number }) {
  const { data, error, loading } = useAllProductsQuery({});

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <DisplayError error={error} />;
  }

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-2">
        {data?.allProducts?.map((product) => (
          <Product key={product?.id} product={product!} />
        ))}
      </div>
    </div>
  );
}

export default Products;
