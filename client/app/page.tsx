import Header from "./components/Header";
import Hero from "./components/Hero";

const page = () => {
  return (
    <div className="text-brand-dark">
      <Header />
      <main className="border-x min-h-screen border-gray-300 container">
        <Hero/>
      </main>
    </div>
  );
};

export default page;
