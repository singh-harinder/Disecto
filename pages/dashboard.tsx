import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { useUserQuery } from "../types/generated-queries";

function Dashboard() {
  const user = useUserQuery();

  useEffect(() => {
    if (user.data?.authenticatedItem?.isAdmin === (false || undefined)) {
      Router.push({
        pathname: "/",
      }).catch(() => {});
    }
  });

  return (
    <div>
      <Head>
        <title>Disecto | Dashboard</title>
      </Head>
      {user.data?.authenticatedItem?.isAdmin === (false || undefined) && (
        <div className="flex items-center justify-center text-4xl">
          You do not have permission to access this resource
        </div>
      )}
      {user.data?.authenticatedItem?.isAdmin === true && (
        <div className="flex items-center justify-center text-4xl">This is the admin dashboard</div>
      )}
    </div>
  );
}

export default Dashboard;
