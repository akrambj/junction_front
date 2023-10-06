import Effect from "../../components/home/Effect";
import icon01 from "../../assets/imgs/icon01.svg";
import icon02 from "../../assets/imgs/icon02.svg";
import icon03 from "../../assets/imgs/icon03.png";
import icon04 from "../../assets/imgs/icon04.svg";

const Effects = () => {
  return (
    <section className="py-5">
      <div className="w-[95%] mx-auto">
        <h2 className="text-center text-[#0077B6] text-2xl font-bold">
          FleetWizard Effect:
        </h2>
        <p className="py-2 text-sm text-center lg:text-xl lg:w-[80%] lg:mx-auto">
          Certainly, here are four points about the effects of using FleetWizard
          for UAV (Unmanned Aerial Vehicle) location tracking and information
          management.
        </p>
        <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:flex-wrap lg:flex-nowrap">
          <Effect
            title={"Enhanced Mission Planning:"}
            image={icon01}
            texts={
              "Users can use FleetWizard to plan missions effectively by considering UAV locations, battery status, and flight history."
            }
          />
          <Effect
            title={"Optimized Resource Allocation:"}
            image={icon02}
            texts={
              "By knowing the exact location of each UAV, FleetWizard helps optimize resource allocation, ensuring that UAVs are deploy- ed efficiently to maximize their utility."
            }
          />
          <Effect
            title={"Data Management:"}
            image={icon03}
            texts={
              "FleetWizard facilitates data management by storing and organizing information  related to each UAV, including flight logs, maintenance records, and performance metrics."
            }
          />
          <Effect
            title={"Real-Time UAV Tracking:"}
            image={icon04}
            texts={
              "FleetWizard allows for real-time tracking of UAVs, providing users with precise location information. This feature enhances situational awareness and aids in mission planning"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Effects;
