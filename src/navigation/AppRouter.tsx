import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipientsPage from "@/pages/RecipientsPage";
import CampaignsPage from "@/pages/CampaignsPage";
import ViewPage from "@/pages/ViewPage";
import NotFound from "@/pages/NotFound";
import { Layout } from "@/components/navigation/Layout";
import BuildPage from "@/pages/BuildPage";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <BuildPage />
            </Layout>
          }
        />
        <Route
          path="/recipients"
          element={
            <Layout>
              <RecipientsPage />
            </Layout>
          }
        />
        <Route
          path="/campaigns"
          element={
            <Layout>
              <CampaignsPage />
            </Layout>
          }
        />
        <Route path="/view/:id" element={<ViewPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
