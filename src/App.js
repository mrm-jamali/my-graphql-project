// import Blogs from "./components/Blogs/Blogs";
// import Header from "./components/layout/Header";
// import Header from "./components/layout/Header";
import Layout from "./components/layout";
import HomePage from "./components/home/HomePage";
import { Routes,Route } from "react-router-dom";
import AuthorPage from "./components/Authors/AuthorPage";
// import BlogPage from "./components/Blogs/BlogPage";
import BlogPage from "./components/Blogs/BlogPage";


function App() {
  return (
    <>
      <Layout>
        <Routes>
           <Route  path="/" element={<HomePage/>} />
       <Route path="/blogs/:slug" element={<BlogPage/>} />
      <Route path="/authors/:slug" element={<AuthorPage/>} />
        </Routes>
      
      </Layout>
    </>
  );
}

export default App;
