import AppRouter from './routes/AppRouter';
import Header from './components/_common/header';
import Footer from './components/_common/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto p-4">
        <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
