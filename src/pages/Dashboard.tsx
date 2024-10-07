import { FC } from "react";
import { useGetApiProducts } from "../api/endpoints/products/products.ts";
import { useAuthStore } from "../authStore.ts";

const Dashboard: FC = () => {
  const { data: productsData, isLoading, error } = useGetApiProducts();
  const { logout } = useAuthStore();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <h1>Top Sales Products</h1>
      <ul>{productsData?.map((product) => <li key={product.id}>{product.title}</li>)}</ul>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Dashboard;
