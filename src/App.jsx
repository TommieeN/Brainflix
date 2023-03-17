import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import UploadPage from "./Pages/Upload/UploadPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/videos" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage/>} />
        <Route path="*" element ={<Navigate to="/"/> } />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
