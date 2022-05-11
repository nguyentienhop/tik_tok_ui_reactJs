import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Following from "./pages/Following";
import DefaultLayout from "./components/Layout/defaultLayout";
import Upload from "./pages/Upload";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
         
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="/following"
            element={
              <DefaultLayout>
                <Following />
              </DefaultLayout>
            }
          />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
