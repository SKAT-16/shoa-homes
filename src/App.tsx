import AppRouter from "./routes/AppRouter";
import Header from "./components/_common/header";
import Footer from "./components/_common/footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/shoa-homes">
      <div className="bg-blue-gray-50 font-poppins">
        <Header />
        <main className="container mx-auto px-12">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
