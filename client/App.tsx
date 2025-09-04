import { Routes, Route } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Show 404 page instead of redirect */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}