import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Container } from "react-bootstrap";
export const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Pro shop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
