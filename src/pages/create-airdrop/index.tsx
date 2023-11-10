import { Button, Form, Select } from "antd";
import { useState } from "react";
import InputCustom from "../../components/input";
import { DonaInput } from "../../components/StarkInput";

type FieldType = {
  airdropTitle?: string;
  logoUrl?: string;
  website?: string;
  twitter?: string;
  telegram?: string;
  youtube?: string;
  discord?: string;
  projectDescription?: string;
  github?: string;
  contact?: string;
  whitepaper?: string;
  tokenAddress?: string;
};

const CreateAirdropPage = () => {
  const [step, setStep] = useState(1);

  const handleToNextStep = () => {
    setStep(step + 1);
  };

  const handleToPrevStep = () => {
    setStep(step - 1);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="mx-auto w-full max-w-[1200px] bg-[#1A1F29] text-white">
      <div className="flex flex-col gap-3 rounded py-6">
        <p className="font ml-6 text-[24px] font-bold ">Create a Airdrop</p>
        <div className="h-[1px] bg-gray-500/50" />
        <section className="step-wizard">
          <ul className="step-wizard-list">
            <li className={`step-wizard-item ${step == 1 && "current-item"}`}>
              <span
                className={`progress-count ${step !== 1 && "!text-[#24c3bc]"}`}
              >
                1
              </span>
              <span className="progress-label">Verify Token</span>
            </li>
            <li className={`step-wizard-item ${step == 2 && "current-item"}`}>
              <span
                className={`progress-count ${step !== 2 && "!text-[#24c3bc]"}`}
              >
                2
              </span>
              <span className="progress-label">Token Airdrop</span>
            </li>
          </ul>
        </section>

        {step == 1 && (
          <Form
            name="inputTokenAddress"
            colon={false}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="px-6">
              <Form.Item<FieldType>
                name="tokenAddress"
                label={`Token Address* (The coin you actually own)`}
                required
                rules={[
                  {
                    required: true,
                    message: "Please input your token address!",
                  },
                ]}
              >
                <DonaInput placeholder="Ex: 0x78107c610B1fa1aA44238239EdEF6BF8e1Cb734d" />
              </Form.Item>

              <div className="mt-6 min-w-[300px] flex-1 max-[400px]:min-w-[200px]">
                <Form.Item<FieldType>
                  name="category"
                  label={`Category`}
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please select your category!",
                    },
                  ]}
                >
                  <Select
                    className=""
                    defaultValue="1"
                    style={{ width: "100%" }}
                    options={[
                      { value: "1", label: "DEFI" },
                      { value: "2", label: "NFT" },
                      { value: "3", label: "MEMES" },
                      { value: "4", label: "GAMEFI" },
                      { value: "5", label: "METAVERSE" },
                      { value: "6", label: "WEB#" },
                    ]}
                  />
                </Form.Item>
              </div>

              <div className="flex justify-center gap-4">
                <div
                  className="mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24c3bc] px-6 shadow-md hover:shadow-blue-600/70"
                  onClick={handleToNextStep}
                >
                  <p className="text-lg font-bold text-white">Next</p>
                </div>
              </div>
            </div>
          </Form>
        )}
        {step === 2 && (
          <Form
            name="projectDetails"
            colon={false}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            scrollToFirstError
            autoComplete="off"
          >
            <div className="flex flex-col gap-4 px-6">
              <Form.Item<FieldType>
                name="airdropTitle"
                label={`Airdrop Title`}
                required
                rules={[
                  {
                    required: true,
                    message: "Please input your project name!",
                  },
                ]}
              >
                <DonaInput />
              </Form.Item>
              <div className="flex flex-col flex-wrap gap-2">
                <span className="font-[Rajdhani] text-xl font-normal text-[#24C3BC]">
                  SOCIALS
                </span>
                <div className="flex flex-wrap justify-between max-[400px]:flex-col">
                  <Form.Item<FieldType> name="logoUrl" label={`LOGO URL`}>
                    <DonaInput
                      placeholder="EX: 10,000"
                      className="max-lg:w-[200px] max-md:w-[250px] max-[600px]:w-[200px] max-[500px]:w-[150px] max-[400px]:w-[220px] lg:w-[300px] xl:w-[400px] min-[1525px]:w-[548px]"
                    />
                  </Form.Item>
                  <Form.Item<FieldType> name="website" label={`WEBSITE`}>
                    <DonaInput
                      prefix="https://"
                      className="max-lg:w-[200px] max-md:w-[250px] max-[600px]:w-[200px] max-[500px]:w-[150px] max-[400px]:w-[220px] lg:w-[300px] xl:w-[400px] min-[1525px]:w-[548px]"
                    />
                  </Form.Item>
                </div>
                <div className="flex flex-wrap justify-between max-[400px]:flex-col">
                  <Form.Item<FieldType> name="twitter" label={`TWITTER`}>
                    <DonaInput
                      prefix="@"
                      className="max-lg:w-[200px] max-md:w-[250px] max-[600px]:w-[200px] max-[500px]:w-[150px] max-[400px]:w-[220px] lg:w-[300px] xl:w-[400px] min-[1525px]:w-[548px]"
                    />
                  </Form.Item>
                  <Form.Item<FieldType> name="telegram" label={`TELEGRAM`}>
                    <DonaInput
                      prefix="https://"
                      className="max-lg:w-[200px] max-md:w-[250px] max-[600px]:w-[200px] max-[500px]:w-[150px] max-[400px]:w-[220px] lg:w-[300px] xl:w-[400px] min-[1525px]:w-[548px]"
                    />
                  </Form.Item>
                </div>
                <div className="flex flex-wrap justify-between max-[400px]:flex-col">
                  <Form.Item<FieldType> name="youtube" label={`YOUTUBE`}>
                    <DonaInput
                      prefix="https://"
                      className="max-lg:w-[200px] max-md:w-[250px] max-[600px]:w-[200px] max-[500px]:w-[150px] max-[400px]:w-[220px] lg:w-[300px] xl:w-[400px] min-[1525px]:w-[548px]"
                    />
                  </Form.Item>
                  <Form.Item<FieldType> name="discord" label={`DISCORD`}>
                    <DonaInput
                      prefix="https://"
                      className="max-lg:w-[200px] max-md:w-[250px] max-[600px]:w-[200px] max-[500px]:w-[150px] max-[400px]:w-[220px] lg:w-[300px] xl:w-[400px] min-[1525px]:w-[548px]"
                    />
                  </Form.Item>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Form.Item<FieldType>
                    name="projectDescription"
                    label={`PROJECT DESCRIPTION`}
                  >
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full rounded-lg border border-[#fff] bg-[#1A1F29] p-2.5 text-sm text-gray-900"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </Form.Item>
                </div>
                <span className="font-[Rajdhani] text-xl font-normal text-[#24C3BC]">
                  ADDITIONAL LINKS
                </span>
                <div className="flex flex-wrap justify-between">
                  <Form.Item<FieldType> name="github" label={`GITHUB`}>
                    <DonaInput
                      prefix="https://"
                      className="max-lg:w-[200px] max-md:w-[250px] max-[600px]:w-[200px] max-[500px]:w-[150px] max-[400px]:w-[220px] lg:w-[300px] xl:w-[200px] min-[1525px]:w-[300px]"
                    />
                  </Form.Item>
                  <Form.Item<FieldType> name="contact" label={`CONTACT`}>
                    <DonaInput
                      prefix="https://"
                      className="max-lg:w-[200px] max-md:w-[250px] max-[600px]:w-[200px] max-[500px]:w-[150px] max-[400px]:w-[220px] lg:w-[300px] xl:w-[200px] min-[1525px]:w-[300px]"
                    />
                  </Form.Item>
                  <Form.Item<FieldType> name="whitepaper" label={`whitepaper`}>
                    <DonaInput
                      prefix="https://"
                      className="max-lg:w-[200px] max-md:w-[250px] max-[600px]:w-[200px] max-[500px]:w-[150px] max-[400px]:w-[220px] lg:w-[300px] xl:w-[200px] min-[1525px]:w-[300px]"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <div
                  className="mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24c3bc] px-6 shadow-md hover:shadow-blue-600/70"
                  onClick={handleToPrevStep}
                >
                  <p className="text-lg font-bold text-white">Back</p>
                </div>
                <div
                  className="mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24c3bc] px-6 shadow-md hover:shadow-blue-600/70"
                  onClick={handleToNextStep}
                >
                  <p className="text-lg font-bold text-white">Create Airdrop</p>
                </div>
                {/* <Form.Item className="mb-0">
                  <button
                    type="submit"
                    className="mt-6 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24c3bc] px-6 shadow-md hover:shadow-blue-600/70"
                  >
                    <p className="text-lg font-bold text-white">
                      Create Airdrop
                    </p>
                  </button>
                </Form.Item> */}
              </div>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default CreateAirdropPage;
