import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './layout.jsx'
import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./components/home";
import About from "./components/About.jsx"; // Import About component
import Contact from "./components/Contact.jsx"
import User from "./components/User.jsx";
import Github, { gitinfo } from './components/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout></Layout>,
//     children: [
//       {
//         path: "",
//         element: <Home></Home>,
//       },
//       {
//         path: "about",
//         element: <About></About>,
//       },
//       {
//         path: "contact",
//         element: <Contact></Contact>,
//       },
//     ],
//   },
// ]);

// step 2
const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={gitinfo} path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  //   <Header></Header>
  //   <Home></Home>
  //   <Footer></Footer>
  // </BrowserRouter>
  <RouterProvider router={router}/> // step 1
);
