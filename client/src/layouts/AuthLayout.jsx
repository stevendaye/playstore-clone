import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <p>Auth Header</p>
      <Outlet></Outlet>
      <p>Auth Header</p>
    </div>
  );
};

export default AuthLayout;
