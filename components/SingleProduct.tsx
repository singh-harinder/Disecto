import Head from "next/head";
import formatMoney from "../lib/formatMoney";
import { useProductQuery } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";
import LoadingAnimation from "./Loading";

function SingleProduct({ id }: { id: string }) {
  const { data, loading, error } = useProductQuery({
    variables: { id },
  });

  if (loading) return <LoadingAnimation />;
  if (error) return <DisplayError error={error} />;

  return (
    // Main grid
    <div className="absolute left-0 grid h-full w-full grid-cols-1 lg:grid-cols-5">
      <Head>
        <title>Disecto | {data?.Product?.title}</title>
      </Head>
      <div className="col-span-1">
        <div className="justify-center p-4 xs:flex">
          <img
            src={data?.Product?.photo?.image?.publicUrlTransformed || ""}
            alt={data?.Product?.photo?.altText || ""}
          />
        </div>
        <div className="ml-2 flex justify-center font-semibold">Category: {data?.Product?.category}</div>
      </div>

      {/* two side flex containers product title and description with buttons */}
      <div className="col-span-4 flex flex-col">
        {/* title div */}
        <div>
          <div className="flex justify-center p-2 text-xl font-semibold">
            <span className="-rotate-1 -skew-x-6 justify-center bg-black p-2 text-4xl text-white">
              {data?.Product?.title}
            </span>
          </div>

          {/* price tag */}
          <div className="flex justify-center pb-3">
            <span className="ml-2 mr-2 h-16 rotate-3 bg-red-600 p-5 text-xl text-white md:text-4xl">
              {formatMoney(data?.Product?.price || 0)}
            </span>
          </div>

          {/* BUttons */}
        </div>

        {/* description div */}
        <div>
          <p className="text-xl font-bold">Description</p>
          <p className="ml-10 p-4">{data?.Product?.description}</p>
          <div className="mb-2 mt-10 text-xl font-bold">Reviews: {data?.Product?.reviews.length}</div>
          <div>
            {data?.Product?.reviews.map((review) => (
              <div key={review.id} className="ml-10 mt-10 w-full border-8 border-red-500">
                <p className="text-xl font-semibold italic">{review.title}</p>
                <p className="font-extralight italic">by: {review.user?.name}</p>
                <p className="ml-10 mt-4">{review.detailed_review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
