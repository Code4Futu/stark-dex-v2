import { useState } from "react";
import InputCustom from "../../components/input";

const CreateFairlauchPage = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const checkStep = (num: number) => {
    if (num === 4 && step === num) return "!text-[#24c3bc]";
    if (num !== step && num < step) return "!text-[#24c3bc]";
  };
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="flex flex-col gap-3 rounded bg-[#1A1F29] py-6 text-white">
        <p className="font ml-6 text-[24px] font-bold ">CREATE A FAIRLAUNCH</p>
        <div className=" h-[1px] bg-gray-300/50" />
        <section className="step-wizard">
          <ul className="step-wizard-list">
            <li className={`step-wizard-item ${step == 1 && "current-item"}`}>
              <span className={`progress-count ${checkStep(1)}`}>1</span>
              <span className="progress-label">Approve your Token</span>
            </li>
            <li className={`step-wizard-item ${step == 2 && "current-item"}`}>
              <span className={`progress-count ${checkStep(2)}`}>2</span>
              <span className="progress-label">Input fairlaunch info</span>
            </li>
            <li className={`step-wizard-item ${step == 3 && "current-item"}`}>
              <span className={`progress-count ${checkStep(3)}`}>3</span>
              <span className="progress-label">Fairlaunch Info</span>
            </li>
            <li className={`step-wizard-item ${step == 4 && "current-item"}`}>
              <span className={`progress-count`}>4</span>
              <span className="progress-label">Submit</span>
            </li>
          </ul>
        </section>

        {/**Step 1 */}
        {step == 1 && (
          <div className="flex flex-col gap-4 px-6 text-white">
            <p>Step 1: Approve your Token</p>
            <p className="text-xl font-bold">
              Enter your token address to get started
            </p>
            <div className="flex min-w-[300px] flex-col">
              <div className="flex w-full justify-end gap-3">
                <p>Fee: 10,000 SFN</p>
              </div>

              <InputCustom placeholder="Ex: 0x78107c610B1fa1aA44238239EdEF6BF8e1Cb734d" />
            </div>

            <div
              onClick={() => handleNext()}
              className="mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24c3bc] px-6 shadow-md hover:shadow-blue-600/70"
            >
              <p className="text-lg font-bold text-white">Create</p>
            </div>
          </div>
        )}

        {/**Step 2 */}
        {step == 2 && (
          <div className="flex-col px-6 text-white">
            <p>Step 2: Input presale info</p>
            <div className="min-w-[300px] flex-1">
              <p className="text-xl font-bold">
                Enter sale information for your presale
              </p>

              <div className="mt-6 flex flex-wrap gap-6">
                <InputCustom title="Presale Rate" placeholder="Ex: 10,000" />
                <InputCustom title="Listing Rate" placeholder="Ex: 10,000" />
              </div>

              <div className="mt-3 flex flex-wrap gap-6">
                {/* <div className="min-w-[200px] flex-1">
                  <p>Soft Cap</p>
                  <div className="mt-2 grid h-10 place-items-center rounded bg-slate-600/50 px-6">
                    <input
                      className="w-full bg-transparent outline-none"
                      placeholder="Ex: 50"
                    />
                  </div>
                </div> */}
                <InputCustom title="Soft Cap" placeholder="Ex: 10,000" />
                <InputCustom title="Hard Cap" placeholder="Ex: 10,000" />
                <InputCustom title="Minimum Buy" placeholder="Ex: 10,000" />
                <InputCustom title="Maximun Buy" placeholder="Ex: 10,000" />
              </div>

              <div className="mt-6 flex flex-wrap gap-6">
                <InputCustom title="Liquidity (%)" placeholder="Ex: 10,000" />
                <InputCustom
                  title="Liquidity Lockup (days)"
                  placeholder="Ex: 10,000"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-6">
                <InputCustom title="Start time (UTC)" type="datetime-local" />
                <InputCustom title="End Time (UTC)" type="datetime-local" />
              </div>
              <div className="mt-6 flex flex-wrap gap-6">
                <InputCustom title="Presale Type" placeholder="Ex: 10,000" />

                {/* <InputCustom title="Presale Type" placeholder="" /> */}
                <InputCustom title="Curentcy Pair" placeholder="Ex: 10,000" />
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <div
                onClick={() => handlePrev()}
                className="mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24c3bc] px-6 shadow-md hover:shadow-blue-600/70"
              >
                <p className="text-lg font-bold text-white">Back</p>
              </div>
              <div
                onClick={() => handleNext()}
                className="mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24c3bc] px-6 shadow-md hover:shadow-blue-600/70"
              >
                <p className="text-lg font-bold text-white">Next</p>
              </div>
            </div>
          </div>
        )}

        {/**Step 3 */}
        {step == 3 && (
          <div className="flex-col px-6">
            <p className="text-gray-500">Step 3: Input project details</p>
            <div className="min-w-[300px] flex-1">
              <p className="text-xl font-bold">
                Show your Brand, description, links and more!
              </p>

              <p className="mt-6 text-[24px] font-bold text-[#24c3bc] text-blue-400">
                Socials
              </p>
              <div className="mt-3 flex flex-wrap gap-6">
                <InputCustom title="Logo URL" placeholder="Ex: 10,000" />
                <InputCustom title="Website" placeholder="Ex: 10,000" />
              </div>

              <div className="mt-6 flex flex-wrap gap-6">
                <InputCustom title="Telegram" placeholder="Ex: 10,000" />
                <InputCustom title="Twitter" placeholder="Ex: 10,000" />
              </div>

              <div className="mt-6 flex flex-wrap gap-6">
                <InputCustom title="Discord" placeholder="Ex: 10,000" />
                <InputCustom title="Youtube" placeholder="Ex: 10,000" />
              </div>
            </div>

            <div className="mt-6 min-w-[300px] flex-1 ">
              <p>Project Description</p>
              <div className="mt-2 grid place-items-center rounded border border-gray-300/50">
                <textarea
                  className="w-full bg-transparent px-6 py-3 outline-none"
                  placeholder="Ex: This is a great project .."
                />
              </div>
            </div>

            <p className="mt-6 text-[24px] font-bold text-[#24c3bc]">
              Additional links
            </p>

            <div className="mt-3 flex flex-wrap gap-6">
              <InputCustom title="Github" placeholder="Ex: 10,000" />
              <InputCustom title="Whitepaper" placeholder="Ex: 10,000" />
              <InputCustom title="Contact" placeholder="Ex: 10,000" />
            </div>

            <div className="flex justify-center gap-4">
              <div
                onClick={() => handlePrev()}
                className="mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24c3bc] px-6 shadow-md hover:shadow-blue-600/70"
              >
                <p className="text-lg font-bold text-white">Back</p>
              </div>
              <div
                onClick={() => handleNext()}
                className="mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24c3bc] px-6 shadow-md hover:shadow-blue-600/70"
              >
                <p className="text-lg font-bold text-white">Next</p>
              </div>
            </div>
          </div>
        )}

        {/**Step 1 */}
        {step == 4 && (
          <div className="flex  flex-col px-6">
            <p className="text-center text-xl ">
              Congratulations on your successful creation
            </p>

            <div className="flex justify-center gap-4">
              <div
                onClick={() => handlePrev()}
                className="mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24c3bc] px-6 shadow-md hover:shadow-blue-600/70"
              >
                <p className="text-lg font-bold text-white">Back</p>
              </div>
              <div
                onClick={() => handleNext()}
                className="mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24c3bc] px-6 shadow-md hover:shadow-blue-600/70"
              >
                <p className="text-lg font-bold text-white">Submit</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateFairlauchPage;
