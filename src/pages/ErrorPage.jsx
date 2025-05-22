import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();

  let title = "Page Not Found";
  let message = "The page you are looking for doesn't exist.";
  let code = 404;

  if (location.pathname === "%") {
    code = 403;
    title = "Forbidden";
    message = "You don't have permission to access this page.";
  } else if (location.pathname === "^") {
    code = 401;
    title = "Unauthorized";
    message = "You need to login to view this page.";
  } else if (location.pathname === "&") {
    code = 400;
    title = "Bad Request";
    message = "Something went wrong with your request.";
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-red-500">{code}</h1>
      <h2 className="text-2xl mt-4 font-semibold text-gray-700">{title}</h2>
      <p className="text-gray-500 mt-2">{message}</p>
    </div>
  );
}
