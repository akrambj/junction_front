import About from "../sections/home/About";
import Hero from "../sections/home/Hero";
import aboutDrone from "../assets/imgs/aboutDrone.svg";
import earth from "../assets/imgs/earth.svg";
import aboutClouds from "../assets/imgs/aboutClouds.svg";
import Effects from "../sections/home/Effects";
import Stream from "../components/map/Stream";

const Home = () => {
  return (
    <main className="w-full min-[100vh]">
      <Hero />
      <div className="flex flex-col items-center justify-center gap-5">
        <About
          anotherImage={aboutClouds}
          image={aboutDrone}
          title={"How Does it work?"}
          texts={
            "FleetWizard is a state-of-the-art Fleet System Management platform. It uses GPS tracking and real-time data to monitor vehicle locations, manage maintenance, and assess driver performance. With customizable dashboards and alerts, it streamlines operations, enhances productivity, and reduces costs, making fleet management simpler and more efficient."
          }
        />
        <About
          responsiveFlex="reverse"
          image={earth}
          title={"How Does it work?"}
          texts={
            "FleetWizard is a state-of-the-art Fleet System Management platform. It uses GPS tracking and real-time data to monitor vehicle locations, manage maintenance, and assess driver performance. With customizable dashboards and alerts, it streamlines operations, enhances productivity, and reduces costs, making fleet management simpler and more efficient."
          }
        />
        <Effects />
        <div className="bg-red-300">
          <Stream uavNumber={1} />
        </div>
      </div>
    </main>
  );
};

export default Home;
