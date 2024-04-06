import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="min-h-screen min-w-screen relative">
      <img
        src={"/background.jpg"}
        className="absolute -z-10 opacity-20 w-screen h-screen object-cover"
        alt="background image"
      ></img>
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
