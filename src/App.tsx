import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";
import ErrorPage from "pages/error/ErrorPage";
import Layout from "layout/Layout";
import Loading from "components/common/loading/Loading";
import store from "store/store";

function App() {
  const Homepage = React.lazy(() => import("pages/homePage/HomePage"));
  const MealDetail = React.lazy(() => import("pages/mealDetail/MealDetail"));
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<ErrorPage />}>
          <Layout></Layout>
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading />}>
              <Homepage />
            </Suspense>
          ),
        },
        {
          path: "/meal-detail/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <MealDetail />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
