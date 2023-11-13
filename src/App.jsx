import React, { useEffect } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { devtoolsDetect } from "devtools-detect";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Blog from "./Pages/Blog/Blog";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Pages/NotFount/NotFound";
import Photos from "./Pages/Photos/Photos";
import Videos from "./Pages/Videos/Videos";
import { SkeletonTheme } from "react-loading-skeleton";
import Clients from "./Pages/Clients/Clients";
import useQueryData from "./Hooks/useQueryData";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import useLangContext from "./Hooks/useLangContext";
const LazyAbout = React.lazy(() => import("./Pages/About/About"));
const LazyProjects = React.lazy(() => import("./Pages/Projects/Projects"));

const App = () => {
  const { lang } = useLangContext();
  let { data } = useQueryData(
    "https://tuwaiq.ezdhaar.com/api/contact/edit",
    "GET",
    "contactdetails"
  );

  const contactDetails = data?.data.data;

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      function ctrlShiftKey(e, keyCode) {
        return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
      }

      if (
        e.keyCode === 123 ||
        ctrlShiftKey(e, "I") ||
        ctrlShiftKey(e, "J") ||
        ctrlShiftKey(e, "C") ||
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
      ) {
        e.preventDefault();
      }
    };

    // stopInspect()

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout contactDetails={contactDetails} />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "about",
          element: (
            <React.Suspense>
              {" "}
              <LazyAbout />{" "}
            </React.Suspense>
          ),
        },
        { path: "products", element: <Products /> },
        {
          path: "projects",
          element: (
            <React.Suspense>
              {" "}
              <LazyProjects />{" "}
            </React.Suspense>
          ),
        },
        { path: "photos", element: <Photos /> },
        { path: "videos", element: <Videos /> },
        { path: "blog", element: <Blog /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "clients", element: <Clients /> },
        { path: "blogdetails/:id", element: <BlogDetails /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <SkeletonTheme baseColor="#C6A467" highlightColor="#B86C0C">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </>
  );
};

export default App;
