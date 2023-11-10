import { Select } from "antd";
import InputCustom from "../../components/input";

const CreateTokenPage = () => {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="flex flex-col gap-4 rounded bg-[#1A1F29] py-6">
        <p className="font ml-6 text-[24px] font-bold text-white">
          Create Standard Token
        </p>
        <div className="flex flex-col gap-6 px-8 text-white">
          <div>
            <p>Token Type</p>
            <Select
              className="mt-3"
              defaultValue="1"
              style={{ width: 180, color: "white" }}
              options={[
                { value: "1", label: "Standard token" },
                { value: "2", label: "Custom Coin" },
                { value: "3", label: "..." },
              ]}
            />
            <p className="mt-2 text-xs text-red-500">*Fee 10,000 SFN</p>
          </div>

          <div className="flex flex-wrap gap-6">
            <InputCustom title="Name" placeholder="Ex: Starksport" />
            <InputCustom title="Symbol" placeholder="Ex: Starksport" />
          </div>
          <div className="flex flex-wrap gap-6">
            <InputCustom title="Decimals" placeholder="Ex: 18" />
            <InputCustom title="Total supply" placeholder="Ex: 100,000,000" />
          </div>

          <div className="hover:shadow-[#24C3BC]-600/70 mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24C3BC] px-6 shadow-md">
            <p className="text-lg font-bold text-white">Create Token</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTokenPage;
