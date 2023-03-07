import "./App.scss";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Upload from "./Pages/Upload/UploadPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/upload" element={<Upload/>} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
