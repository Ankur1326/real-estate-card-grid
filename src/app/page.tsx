'use client'
import EarningsCard from "@/components/EarningsCard";
import InvestmentCard from "@/components/InvestmentCard";
import MembersCard from "@/components/MembersCard";
import ProjectsCard from "@/components/ProjectsCard";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-5xl">
        {/* Projects Card */}
        <div className="sm:row-span-2 w-full h-full">
          <ProjectsCard />
        </div>

        {/* Investment Card*/}
        <div className="w-full h-full">
          <InvestmentCard />
        </div>

        {/* Earnings Card */}
        <div className="sm:col-span-2 md:col-span-1 sm:row-span-2 w-full h-full md:mt-0">
          <EarningsCard />
        </div>

        {/* Members Card*/}
        <div className="w-full h-full">
          <MembersCard />
        </div>

      </div>
    </div>
  );
}
export default Home;