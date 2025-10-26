// import './App.css';

import Body from "./components/Body";
import Head from "./components/Head";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
