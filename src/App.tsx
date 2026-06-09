import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { Layout } from "./components/site/Layout";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Studio from "./pages/Studio";
import Team from "./pages/Team";
import News from "./pages/News";
import Community from "./pages/Community";
import Careers from "./pages/Careers";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Investors from "./pages/Investors";
import PressKit from "./pages/PressKit";
import BehindTheMoon from "./pages/BehindTheMoon";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster theme="dark" position="bottom-right" />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/community" element={<Community />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/press" element={<PressKit />} />
          <Route path="/behind-the-moon" element={<BehindTheMoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
