import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AdminHome, Auth, Home, Profile } from "../pages";
import { AdminLayout, AuthLayout, Layout } from "../layouts";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Default Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile/:uid" element={<Profile />} />
        </Route>

        {/* Auth Layout */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Auth />} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
