import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { BlogPage } from "./pages/BlogPage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { Error404Page } from "./pages/Error404Page";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={<MainPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
