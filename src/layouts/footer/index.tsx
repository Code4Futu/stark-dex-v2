import React from "react";
import icons from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import route from "../../routes/route";
import Logo from "../../pages/Logo";
const Footer = (props: any) => {
  const navigation = useNavigate();
  return (
    <div
      style={{ background: "rgba(15, 11, 34, 0.50)" }}
      className="px-auto fix bottom-0 mx-auto w-screen items-center px-6 md:mx-0 md:px-[85px] lg:max-h-[451px]"
    >
      <div className="flex flex-col gap-6 py-12">
        <div className="flex flex-col gap-6 md:justify-between lg:flex-row lg:gap-0">
          <div className="flex flex-col gap-5 md:max-w-[650px]">
            <Logo />
            <div className="flex items-start font-['Roboto'] text-base font-medium text-white md:text-[18px]">
              An all-in-one Incubation Hub empowers investors and allows quality
              project creators the ability to provide token or NFT sales.
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-6 md:flex-row md:gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-start font-['Roboto'] text-base font-bold text-white md:text-[20px]">
                LAUNCHPAD
              </div>
              <div className="flex flex-col items-start gap-4 font-['Roboto'] text-sm font-light text-white opacity-70 md:text-[18px]">
                <div>Apply for Launchpad</div>
                <div>Launchpad List</div>
                <div>How to join</div>
                <div>Features</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start font-['Roboto'] text-base font-bold text-white md:text-[20px]">
                SUPPORT
              </div>
              <div className="flex flex-col items-start gap-4 font-['Roboto'] text-sm font-light text-white opacity-70 md:text-[18px]">
                <div>FAQ</div>
                <div>Tokenomics</div>
                <div>Audits</div>
                <div>Starksport NFT</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start font-['Roboto'] text-base font-bold text-white md:text-[20px]">
                ACCESS
              </div>
              <div className="flex flex-col items-start gap-4 font-['Roboto'] text-sm font-light text-white opacity-70 md:text-[18px]">
                <div>Exchange</div>
                <div>Launchpad</div>
                <div>Earnings</div>
                <div>Docs</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex">
            <div className="flex flex-wrap gap-1">
              <div className="flex gap-1">
                <div className="social-button">
                  <img
                    src={icons.social.telegramIcon}
                    className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
                    alt=""
                  />
                </div>
                <div className="social-button">
                  <img
                    src={icons.social.discordIcon}
                    className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
                    alt=""
                  />
                </div>

                <div className="social-button">
                  <img
                    src={icons.social.twitterIcon}
                    className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
                    alt=""
                  />
                </div>

                <div className="social-button">
                  <img
                    src={icons.social.mediumIcon}
                    className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
                    alt=""
                  />
                </div>

                <div className="social-button">
                  <img
                    src={icons.social.browserIcon}
                    className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 font-['Roboto'] text-sm font-medium text-white opacity-70 md:text-xl">
            <div>Contact: support@starksport.finance</div>
            <div className="flex items-center justify-center">
              <p>2023 © Copyright Starksport. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
