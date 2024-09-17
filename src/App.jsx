import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/Header.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<p>124</p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
