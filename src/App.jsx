import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import Guest from "./pages/Guest";
import CekMember from "./pages/CekMember";
import GuestLayout from "./layouts/GuestLayout";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Users = React.lazy(() => import("./pages/Users"));
const About = React.lazy(() => import("./components/About"));
const ProdukList = React.lazy(() => import("./components/ProdukList"));
const TestimoniList = React.lazy(() => import("./components/TestimoniList"));
const Hero = React.lazy(() => import("./components/Hero"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="%" element={<ErrorPage />} />
          <Route path="^" element={<ErrorPage />} />
          <Route path="&" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Guest />} />
          <Route path="/guest/member" element={<CekMember />} />
          <Route path="/about" element={<About />} />
          <Route path="/produklist" element={<ProdukList />} />
          <Route path="/testimoni" element={<TestimoniList />} />
          <Route path="/hero" element={<Hero />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
