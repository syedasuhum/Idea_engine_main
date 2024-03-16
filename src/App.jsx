import {
  Routes,
  Route,
  useNavigationType,
  NavigationType,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom"
import './App.css';
import HomePage from "./components/HomePage";
// import BetadayzerovercelappByHtm from "./pages/BetadayzerovercelappByHtm";
import DivlayOutAuthPage from "./components/DivlayOutAuthPage";
import { useEffect } from "react";
import Login from "./components/Login"
import Welcome_page from "./Mycomponents/Welcome_page"
import QnA_page from "./Mycomponents/QnA_page"


function App() {
  // // const action = useNavigationType();
  // const location = useLocation();
  // // const action = location.state?.action;
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";
  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  //Google Code
  //   const navigate = useNavigate();
  //   const getUser = async () => {
  //     try {
  //         const response = await axios.get("http://localhost:8080/login/sucess", { withCredentials: true });
  //         console.log("response",response)
  //     } catch (error) {
  //       navigate("*")
  //     }
  // }
  // useEffect(() => {
  //   getUser()
  // }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<BetadayzerovercelappByHtm />} /> */}
        <Route path="/signUp" element={<DivlayOutAuthPage />} />
        {/* sign up and login page to be rendered here 
      baaki landing page n all homepage wale component se render hore hai.
      */}
        <Route path="/login" element={<Login />} />
        <Route path="/welcome-page" element={<Welcome_page />} />
        <Route path="/qna-page" element={<QnA_page />} />
      </Routes>
    </Router>
  );
}

export default App;
