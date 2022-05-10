import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import LoadingAnimation from "../components/Loading";
import { useUserQuery } from "../types/generated-queries";

function Dashboard() {
  const user = useUserQuery();

  useEffect(() => {
    if (user.loading) {
      return;
    }

    if (!user.data?.authenticatedItem?.isAdmin) {
      Router.push({
        pathname: "/",
      }).catch(() => {});
    }
  }, [user.data?.authenticatedItem?.isAdmin, user.loading]);

  if (user.loading) return <LoadingAnimation />;

  return (
    <div>
      <Head>
        <title>Disecto | Dashboard</title>
      </Head>
      {!user.data?.authenticatedItem?.isAdmin && (
        <div className="flex items-center justify-center text-4xl">
          You do not have permission to access this resource
        </div>
      )}
      {user.data?.authenticatedItem?.isAdmin && (
        <div className="flex items-center justify-center text-4xl">This is the admin dashboard</div>
      )}
    </div>
  );
}

export default Dashboard;
