import Playground from "@/components/Playground";

const Play = () => {
  return (
    <main className="min-h-screen min-w-screen relative">
      <img
        src={"/background.jpg"}
        className="absolute -z-10 opacity-20 w-screen h-screen object-cover"
        alt="background image"
      ></img>
      <Playground />
    </main>
  );
};

export default Play;
