import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <div className="h-8/10 bg-yellow-50 flex justify-center">
          <div className="bg-slate-600 w-1/10"></div>
          <div className="bg-[url(./assets/lod.webp)] w-8/10 bg-contain bg-no-repeat"></div>
          <div className="bg-slate-600 w-1/10"></div>
        </div>
        <div className="min-h-15 h-1/10 bg-indigo-300"></div>
      </div>
    </>
  );
}

export default App;
