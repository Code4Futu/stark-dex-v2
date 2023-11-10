import { AiOutlineGlobal } from "react-icons/ai";
import icons from "../../assets/icons";
import { ImTelegram } from "react-icons/im";
import { BsDiscord } from "react-icons/bs";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import clg from "../../utils/console";
import { useParams } from "react-router-dom";
import { projects } from "../../mock";
import {
  convertToAbbreviation,
  formatNumberWithCommas,
  getDecimalDigits,
} from "../../utils/utils";

const TokenMockData = [
  {
    key: "Presale Address",
    value: "0x912db.............................999999",
  },
  { key: "Token Name", value: "Asenal Fan Token" },
  { key: "Token Symbol", value: "ARS" },
  { key: "Token Decimals", value: "4" },
  {
    key: "Token Address",
    value: "0x912db.............................999999",
  },
  { key: "Total Supply", value: "300,000,000 ARS" },
  { key: "Total For Presalee", value: "300,000 ARS" },
  { key: "Total For Liquidity", value: "300,000,00 ARS" },
  { key: "Soft Cap", value: "10,000 STRK" },
  { key: "Hard Cap", value: 0 },
  { key: "Presale Start Time", value: "2023.05.22 17:00 (UTC)" },
  { key: "Presale End Time", value: "2023.05.23 17:00 (UTC)" },
  { key: "Listing On", value: "Starksportswap" },
  { key: "Liquidity Percent	", value: "51%" },
  { key: "Liquidity Lockup Time", value: "180 days affter pool ends" },
  { key: "TGE", value: "100%" },
];

const labelCard = ({ color = "", label = "" }) => {
  return (
    <div className="flex gap-3">
      <div className={`h-[82px] max-w-[139.5px] p-6 bg-[${color}]`}></div>
      <div className="text-[13px] font-normal text-white">{label}</div>
    </div>
  );
};

const tokenChartDemo = {
  series: [25, 20, 5, 3, 2, 20, 15, 10],
  options: {
    labels: ["Presale", "Liquidity", "Unlocked", "Marketing", "E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    stroke: {
      show: false,
    },
    fill: {
      colors: [
        "#032E96",
        "#16FAF8",
        "#1AD9E2",
        "#1FB6CB",
        "#2394B4",
        "#2175A5",
        "#175EA0",
        "#0D459B",
      ],
    },
    dataLabels: {
      enabled: false,
    },
  },
};

const DetailLaunchpadPage = () => {
  const [valueBuy, setvalueBuy] = useState(0);
  const [dataProject, setdataProject] = useState<any>({});
  const { address } = useParams();
  const [fakeData, setFakeData] = useState(TokenMockData);

  useEffect(() => {
    const project = projects.find((item) => item.id.toString() == address);
    setdataProject(project);

    let tokenNameObject = TokenMockData.find(
      (item) => item.key === "Token Name"
    );

    if (tokenNameObject) {
      tokenNameObject.value = project!.name;
    }

    tokenNameObject = TokenMockData.find((item) => item.key === "Token Symbol");
    if (tokenNameObject) {
      tokenNameObject.value = project!.name;
    }

    tokenNameObject = TokenMockData.find((item) => item.key === "Total Supply");
    if (tokenNameObject) {
      tokenNameObject.value =
        "420,690,000,000,000 " + convertToAbbreviation(project!.name);
    }

    tokenNameObject = TokenMockData.find(
      (item) => item.key === "Tokens For Presale"
    );
    if (tokenNameObject) {
      tokenNameObject.value =
        "138,403,079,352,546  " + convertToAbbreviation(project!.name);
    }

    tokenNameObject = TokenMockData.find(
      (item) => item.key === "Tokens For Liquidity"
    );
    if (tokenNameObject) {
      tokenNameObject.value =
        "69,173,859,060,402.49 " + convertToAbbreviation(project!.name);
    }

    tokenNameObject = TokenMockData.find((item) => item.key === "Soft Cap");
    if (tokenNameObject) {
      tokenNameObject.value =
        formatNumberWithCommas(project!.soft_cap) + " STRK";
    }

    tokenNameObject = TokenMockData.find((item) => item.key === "Hard Cap");
    if (tokenNameObject && project!.hard_cap > 0) {
      tokenNameObject.value =
        formatNumberWithCommas(project!.hard_cap) + " STRK";
    }

    setFakeData(TokenMockData);
  }, [address]);

  const checkStatus = () => {
    switch (dataProject.type) {
      case "Fairlaunch":
        if (dataProject.soft_cap <= dataProject.progress) return true;
        return false;

      case "Presale":
        if (dataProject.hard_cap <= dataProject.progress) return true;
        return false;

      default:
        return false;
    }
  };

  return (
    <div className="mb-10 flex max-w-[1200px] flex-col gap-8">
      <div className="flex max-w-[1200px] flex-col gap-8 xl:flex-row">
        <div className="flex w-full flex-col gap-6">
          <div className="w-full rounded-[10px] bg-[#1A1F2F] p-6 text-white md:px-12 md:pb-12 md:pt-6 xl:h-[1100px]">
            <div className="flex w-full justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <img
                    className="h-[54px] w-[54px] rounded-full"
                    src={dataProject.avatar}
                  />
                  <div className="absolute bottom-0 right-0">
                    <img
                      className="h-6 w-6 rounded-full"
                      src={icons.offical_logo}
                    />
                  </div>
                </div>
                <div className="ml-4 flex flex-col gap-[11px]">
                  <p className="whitespace-nowrap text-sm font-extrabold uppercase md:text-[19px]">
                    {dataProject.name}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <div className="flex gap-1">
                      <div className="social-button">
                        <img
                          src={icons.social.telegramIcon}
                          className="h-[15px] w-[15px]"
                          alt=""
                        />
                      </div>
                      <div className="social-button">
                        <img
                          src={icons.social.discordIcon}
                          className="h-[15px] w-[15px]"
                          alt=""
                        />
                      </div>

                      <div className="social-button">
                        <img
                          src={icons.social.twitterIcon}
                          className="h-[15px] w-[15px]"
                          alt=""
                        />
                      </div>

                      <div className="social-button">
                        <img
                          src={icons.social.mediumIcon}
                          className="h-[15px] w-[15px]"
                          alt=""
                        />
                      </div>

                      <div className="social-button">
                        <img
                          src={icons.social.browserIcon}
                          className="h-[15px] w-[15px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="lg:[flex] flex min-[600px]:hidden md:flex min-[900px]:hidden">
                      <div className="hover:shadow-[#24C3BC]-600/70 grid h-6 w-fit cursor-pointer place-items-center self-center rounded bg-[#24C3BC] px-2 shadow-md">
                        <p className="text-xs font-medium uppercase text-white">
                          Upcoming
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg-[hidden] hidden min-[600px]:flex md:hidden min-[900px]:flex">
                <div className="hover:shadow-[#24C3BC]-600/70 grid h-10 w-fit cursor-pointer place-items-center self-center rounded bg-[#24C3BC] px-6 shadow-md">
                  <p className="text-xs font-bold uppercase text-white">
                    Upcoming
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-justify text-[14px] tracking-wider">
                {dataProject.description}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-5">
              {fakeData.map((item) => {
                if (item.key === "Soft Cap" || item.key === "TGE") return <></>;
                if (item.key === "Hard Cap" && item.value == 0) return <></>;
                if (item.key === "Token Address")
                  return (
                    <div className="flex min-h-[40px] items-center justify-between gap-2  ">
                      <p className="text-xs text-gray-400 sm:text-base">
                        {item.key}
                      </p>
                      <div className="flex flex-col items-end">
                        <p className="text-xs text-[#24C3BC] sm:text-base">
                          {item.value}
                        </p>
                        <p className="text-[10px] font-normal text-[#F60B0B]">
                          (Do not send SFN to the token address!)
                        </p>
                      </div>
                    </div>
                  );

                return (
                  <div className="flex min-h-[40px] items-center justify-between gap-2  ">
                    <p className="text-xs text-gray-400 sm:text-base">
                      {item.key}
                    </p>
                    <p
                      className={`text-xs sm:text-base ${
                        item.key === "Presale Address" ||
                        item.key === "Listing On"
                          ? "text-[#24C3BC]"
                          : ""
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex min-h-[270px] flex-col gap-3 rounded bg-[#1A1F2F] py-3 text-white xl:min-h-[320px] xl:justify-center">
            <div className="px-6">
              <Chart
                options={tokenChartDemo.options}
                series={tokenChartDemo.series}
                type="pie"
                width={380}
                style={{
                  color: "white",
                  width: "fit-content",
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col gap-6 xl:max-w-[400px]">
          <div className="flex w-full flex-col items-center gap-4 rounded bg-[#1A1F2F] p-6 text-white xl:h-[1100px]">
            <p>Sale End In</p>
            <div className="flex items-center gap-1">
              <div className="grid h-8 w-8 place-items-center rounded bg-[#24C3BC] text-lg font-bold min-[330px]:h-12 min-[330px]:w-12">
                2
              </div>
              <p className="font-bold">:</p>
              <div className="grid h-8 w-8 place-items-center rounded bg-[#24C3BC] text-lg font-bold min-[330px]:h-12 min-[330px]:w-12">
                34
              </div>
              <p className="font-bold">:</p>
              <div className="grid h-8 w-8 place-items-center rounded bg-[#24C3BC] text-lg font-bold min-[330px]:h-12 min-[330px]:w-12">
                32
              </div>
              <p className="font-bold">:</p>
              <div className="grid h-8 w-8 place-items-center rounded bg-[#24C3BC] text-lg font-bold min-[330px]:h-12 min-[330px]:w-12">
                33
              </div>
            </div>

            <div className="mt-4 w-full">
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Progress:</p>
                {dataProject.type === "Fairlaunch" && (
                  <p className="text-sm">
                    {getDecimalDigits(
                      (dataProject.progress / dataProject.soft_cap) * 100,
                      2
                    )}
                    %
                  </p>
                )}
                {dataProject.type === "Presale" && (
                  <p className="text-sm">
                    {(dataProject.progress / dataProject.hard_cap) * 100} %
                  </p>
                )}
              </div>

              <div className="relative mt-2 h-3">
                <div className="absolute h-3 w-full rounded-lg bg-gray-700"></div>
                <div
                  className="absolute h-3 max-w-full rounded-lg bg-green-400"
                  style={{
                    width: `${
                      (dataProject.progress /
                        (dataProject.type == "Fairlaunch"
                          ? dataProject.soft_cap
                          : dataProject.hard_cap)) *
                      100
                    }%`,
                  }}
                ></div>
              </div>

              <div className="mt-1 flex justify-between">
                <p className="text-sm font-semibold">
                  {formatNumberWithCommas(dataProject.progress)} STRK
                </p>
                <p className="text-sm font-semibold">
                  {dataProject.type == "Fairlaunch"
                    ? formatNumberWithCommas(dataProject.soft_cap)
                    : formatNumberWithCommas(dataProject.hard_cap)}
                  &nbsp;STRK
                </p>
              </div>
            </div>

            <div className="mt-4 w-full">
              <div className="flex justify-between rounded bg-transparent">
                <p className="text-sm">Total commited</p>
                <p className="text-sm font-bold">
                  {formatNumberWithCommas(500000)} SFN
                </p>
              </div>
            </div>

            <div className="mt-4 w-full">
              <div className="flex justify-between rounded bg-transparent">
                <p className="text-sm">Funds to raise</p>
                <p className="text-sm font-bold">
                  {formatNumberWithCommas(100000)} SFN
                </p>
              </div>
            </div>

            <div className="mt-4 w-full">
              <div className="flex justify-between rounded bg-transparent">
                <p className="text-sm">ASR Price</p>
                <p className="text-sm font-bold">
                  {formatNumberWithCommas(2)}$ ({formatNumberWithCommas(4)} SFN)
                </p>
              </div>
            </div>

            <div className="mt-4 w-full">
              <div className="flex justify-between rounded bg-transparent">
                <p className="text-sm">Minimum commit</p>
                <p className="text-sm font-bold">
                  {formatNumberWithCommas(10)} SFN
                </p>
              </div>
            </div>

            <div className="mt-4 w-full">
              <div className="flex justify-between rounded bg-transparent">
                <p className="text-sm">Maximum commit</p>
                <p className="text-sm font-bold">
                  {formatNumberWithCommas(50000)} SFN
                </p>
              </div>
            </div>

            <div className="mt-4 w-full">
              <div className="flex justify-between rounded bg-transparent">
                <p className="text-sm">Total participants</p>
                <p className="text-sm font-bold">
                  {formatNumberWithCommas(30000)}
                </p>
              </div>
            </div>

            <div className="mt-8 flex w-full flex-col gap-3">
              <div className="flex justify-between">
                <p className="text-sm font-bold">Amounts</p>
                <p className="text-sm font-bold">
                  {formatNumberWithCommas(70000)} SFN
                </p>
              </div>
              <div className="flex h-12 w-full flex-row items-center justify-between gap-5 rounded border border-gray-500/50 px-5">
                <input
                  value={valueBuy}
                  placeholder="0"
                  type="number"
                  className="max-w-[150px] bg-transparent text-xl font-bold outline-none md:max-w-[200px]"
                  onChange={(e: any) => {
                    clg(e);
                    setvalueBuy(parseInt(e.target.value) || 0);
                    clg(valueBuy);
                  }}
                />
                <button onClick={() => setvalueBuy(100)}>
                  <p className="rounded px-2 py-1 text-base font-bold text-[#24C3BC] hover:bg-gray-300/50">
                    Max
                  </p>
                </button>
              </div>
              <div className="flex">
                <p className="text-sm font-bold">You received: 100,000 ARS</p>
              </div>
            </div>

            {(100 <= valueBuy && valueBuy <= 1000) || valueBuy == 0 ? (
              <></>
            ) : (
              <p className="text-xs text-red-600">
                Value exceeds the threshold min/max
              </p>
            )}

            <div className="hover:bg-primary-600 flex h-10 max-w-[108px] cursor-pointer place-items-center items-center rounded bg-[#24C3BC] px-6 py-3 shadow-md transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] md:w-full md:max-w-none md:justify-center">
              <p className="text-base font-bold text-white">Commit</p>
            </div>

            <div className="flex w-full flex-col items-center gap-4">
              <div className="flex w-full flex-col gap-3 rounded bg-transparent text-sm text-white">
                <div className="flex h-10 flex-wrap items-center justify-between">
                  <p>You commited</p>
                  <p>{formatNumberWithCommas(50000)} SFN</p>
                </div>
                <div className="flex  h-10 flex-wrap items-center justify-between">
                  <p>You will receive</p>
                  <p>{formatNumberWithCommas(2500)} ASR</p>
                </div>
                <div className="flex  h-10 flex-wrap items-center justify-between">
                  <p>Your remaining SFN</p>
                  <p>{formatNumberWithCommas(40000)} STRK</p>
                </div>
              </div>
              <div className="hover:bg-primary-600 flex h-10 max-w-[108px] cursor-pointer place-items-center items-center rounded bg-[#24C3BC] px-6 py-3 shadow-md transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] md:w-full md:max-w-none md:justify-center">
                <p className="text-base font-bold text-white">Commit</p>
              </div>
            </div>
            <div className="flex justify-center text-sm font-medium">
              <p className="text-center">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded bg-[#1A1F2F] p-6 text-white">
            <p className="font-bold">Owner Zone</p>
            <div className="flex h-[56px] w-full flex-row items-center justify-between gap-5 rounded-[10px] bg-[#43495C] px-5">
              <input
                value={"Lorem imsum"}
                placeholder="Lorem imsum"
                className="max-w-[306px] bg-transparent text-sm font-normal outline-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold">Sale Type</p>
              <div className="flex justify-between">
                <div className="mr-4 flex items-center">
                  <input
                    id="red-radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    className="h-3 w-3 text-red-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-red-600"
                  />
                  <label
                    htmlFor="red-radio"
                    className="ml-2 text-xs font-medium text-[#24C3BC]"
                  >
                    Public
                  </label>
                </div>
                <div className="mr-4 flex items-center">
                  <input
                    id="red-radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    className="h-3 w-3 text-red-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-red-600"
                  />
                  <label
                    htmlFor="red-radio"
                    className="ml-2 text-xs font-medium text-[#24C3BC]"
                  >
                    White list
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold">Sale Type</p>
              <div className="flex w-full flex-col gap-3">
                <div className="hover:bg-primary-600 flex h-7 cursor-pointer place-items-center items-center justify-center rounded bg-[#24C3BC] shadow-md transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                  <p className="text-xs font-bold text-white">Finalize</p>
                </div>
                <div className="hover:bg-primary-600 flex h-7 cursor-pointer place-items-center items-center justify-center rounded bg-[#767878] shadow-md transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                  <p className="text-xs font-bold text-white">Cancel pool</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 rounded bg-[#1A1F2F] p-6 text-white">
        <p className="text-base font-bold">Lock records</p>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col font-normal">
            <div className="items-start text-base">Amount</div>
            <div className="items-start text-sm">200,000 ARS</div>
          </div>
          <div className="flex flex-col font-normal">
            <div className="items-start text-base">Unlock time(UTC)</div>
            <div className="flex items-start gap-6 text-sm">
              <div>2023.02.08</div>
              <div>00:00</div>
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-sm font-bold text-[#16FAF8]">View</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLaunchpadPage;
