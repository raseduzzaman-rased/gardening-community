import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Component/Layout/MainLayout.jsx";
import Home from "./Component/Pages/Home.jsx";
import BrowseTips from "./Component/Pages/BrowseTips.jsx";
import ExploreGardeners from "./Component/Pages/ExploreGardeners.jsx";
import Login from "./Component/Pages/Login.jsx";
import MyTips from "./Component/Pages/MyTips.jsx";
import AboutUs from "./Component/Pages/AboutUs.jsx";
import PrivacyPolicy from "./Component/Pages/PrivacyPolicy.jsx";
import TermsAndService from "./Component/Pages/TermsAndService.jsx";
import TermsAndConditions from "./Component/Pages/TermsAndConditions.jsx";
import VisionMissionDetails from "./Component/Pages/VisionMissionDetails.jsx";
import GardeningTips from "./Component/Pages/GardeningTips.jsx";
import SignUp from "./Component/Pages/SignUp.jsx";
import ShareGardenTip from "./Component/Pages/ShareGardenTip.jsx";
import TipsDetails from "./Component/Pages/TipsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/gardeners"),
        Component: Home,
      },
      {
        path: "/browse-tips",
        Component: BrowseTips,
      },
      {
        path: "/explore-gardeners",
        Component: ExploreGardeners,
      },
      {
        path: "/my-tips",
        Component: MyTips,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/SignUp",
        Component: SignUp,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "/terms-and-service",
        Component: TermsAndService,
      },
      {
        path: "/terms-and-condition",
        Component: TermsAndConditions,
      },
      {
        path: "/vision-mission-details",
        Component: VisionMissionDetails,
      },
      {
        path: "/gardening-tips",
        Component: GardeningTips,
      },
      {
        path: "/share-garden-tip",
        Component: ShareGardenTip,
      },
      {
        path: "/tips-details/:id",
        Component: TipsDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
