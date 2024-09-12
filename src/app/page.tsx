import Link from "next/link";

const Home = () => {
  return (
    <div
      className="h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/home_background.jpg')` }}
    >
      <div className="flex flex-col h-full justify-center items-center">
        <div className="flex flex-col justify-around items-center text-center h-full w-full">
          <div className="bg-white bg-opacity-30 w-full py-4">
            <h1
              className="text-5xl xl:text-9xl text-white tracking-widest"
              style={{ textShadow: `2px 2px 3px black` }}
            >
              ImageGuessr
            </h1>
          </div>
          <div className="">
            <Link
              href="/play"
              className="bg-secondary hover:bg-yellow-300 text-white font-bold py-4 px-10 rounded-lg"
            >
              Play
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
