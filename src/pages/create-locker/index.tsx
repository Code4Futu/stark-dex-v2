import InputCustom from "../../components/input";

const CreateLockerPage = () => {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="flex flex-col gap-3 rounded bg-[#1A1F29] py-6 text-white">
        <p className="ml-6 text-[24px] font-bold ">Create Your Lock</p>
        <div className=" h-[1px] bg-gray-500/50" />

        <div className="flex flex-col px-6">
          {/* <div className="min-w-[300px] flex-1">
            <p>Token or LP Token address</p>
            <div className="mt-2 grid h-10 place-items-center rounded bg-slate-600/50 px-6">
              <input
                className="w-full bg-transparent outline-none"
                placeholder="Ex: 10000"
              />
            </div>
          </div> */}
          <InputCustom
            title="Token or LP Token address"
            placeholder="Ex: 10000"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <InputCustom title="Lock Title" placeholder="Ex: My Lock" />
            <InputCustom title="Amount" placeholder="Ex: 10000" />
          </div>

          {/* <div className="mt-6 min-w-[300px] flex-1">
            <p>Lock Until (UTC)</p>
            <div className="mt-2 grid h-10 place-items-center rounded bg-slate-600/50 px-6">
              <input
                className="w-full bg-transparent outline-none"
                placeholder="Ex: 10000"
                type="datetime-local"
              />
            </div>
          </div> */}
          <div className="mt-6">
            <InputCustom title="Lock Until (UTC)" type="datetime-local" />
          </div>

          <div className="flex justify-center gap-4">
            <div className="mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24c3bc] px-6 shadow-md hover:shadow-blue-600/70">
              <p className="text-lg font-bold text-white">Create Lock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLockerPage;
