import ItemLaunchpad from "./item-launchpad";
import { AiOutlineSearch } from "react-icons/ai";
import { Select } from "antd";
import icons from "../../assets/icons";
import { projects, fakeProjects } from "../../mock";
import Pagination from "../../components/pagination";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const LaunchpadPage = () => {
  return (
    <div className="">
      <p className="text-[30px] font-bold text-white">Launchpad List</p>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex w-full flex-wrap items-center gap-4">
          <div className="flex h-10 flex-1 items-center gap-6 rounded-md border !border-gray-300/90 bg-[#1A1F2F] pl-3 pr-8 shadow-sm ">
            <AiOutlineSearch style={{ color: "white" }} />
            <input
              placeholder="Search by token address"
              className="flex-1 bg-[#1A1F2F] text-sm text-white outline-none"
              type="text"
            />
          </div>

          <Select
            defaultValue="1"
            style={{ width: 180 }}
            options={[
              { value: "1", label: "All Pools" },
              { value: "2", label: "Presale" },
              { value: "3", label: "Tiered Whitelist" },
              { value: "4", label: "Fairlaunch" },
            ]}
          />
          <Select
            defaultValue="1"
            style={{ width: 120 }}
            options={[
              { value: "1", label: "All Status" },
              { value: "2", label: "Upcoming" },
              { value: "3", label: "Live" },
              { value: "4", label: "Ended" },
              { value: "5", label: "Filled" },
              { value: "6", label: "Finalized" },
              { value: "7", label: "Failed" },
              { value: "8", label: "Cancelled" },
            ]}
          />
          <Select
            defaultValue="1"
            style={{ width: 120 }}
            options={[
              { value: "1", label: "All Badges" },
              { value: "2", label: "Audit" },
              { value: "3", label: "KYC" },
            ]}
          />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {/* {fakeProjects.map((item) => (
          <ItemLaunchpad data={item} />
        ))} */}
        {projects.map((item) => (
          <ItemLaunchpad data={item} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default LaunchpadPage;
