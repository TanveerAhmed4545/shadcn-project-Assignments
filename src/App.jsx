import "./App.css";
import Banner from "./components/Banner/Banner";
import BlogSection from "./components/BlogSection/BlogSection";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Banner />
      </header>
      <main className="max-w-5xl mx-auto px-4">
        <BlogSection />
      </main>
    </>
  );
}

export default App;
