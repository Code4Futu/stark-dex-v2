import { BiMenuAltRight } from "react-icons/bi";
import ModalWallet from "./modal-wallet";
import useModal from "./useModal";
import icons from "../../assets/icons";
import route from "../../routes/route";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import MobileLogo from "../../components/MobileLogo";
const Header = (props: any) => {
  const { isShowing, toggle: toggleConnectWallet } = useModal();
  const navigation = useNavigate();

  const mockupMarquee = () => {
    const marqueeArray = [];
    for (let i = 0; i < 15; i++) {
      marqueeArray.push(
        <div className="flex items-center justify-center gap-[5px]">
          <div className="text-white">#1</div>
          <div className="text-[#24C3BC]">Lorem</div>
        </div>
      );
    }
    return marqueeArray;
  };
  return (
    <>
      <div className="bg-transparents px-auto fixed top-0 z-[9999] mx-auto flex h-[80px] w-screen items-center justify-between px-6 backdrop-blur xl:mx-0 xl:h-[120px] xl:px-[85px]">
        <ModalWallet isShowing={isShowing} hide={toggleConnectWallet} />

        <div className="max-[500px]:hidden">
          <Logo />
        </div>
        <div className="h-12 w-12 rounded-full min-[500px]:hidden">
          <MobileLogo />
        </div>
        <div className="hidden gap-10 text-xl font-bold	lg:flex">
          <div
            className="cursor-pointer text-center text-white opacity-70"
            onClick={() => navigation(route.home)}
          >
            Home
          </div>
          <div
            className="cursor-pointer text-center text-white opacity-70"
            onClick={() => navigation(route.home)}
          >
            Exchange
          </div>
          <div
            className="cursor-pointer text-center text-white opacity-70"
            onClick={() => navigation(route.home)}
          >
            Launchpad
          </div>
          <div
            className="cursor-pointer text-center text-white opacity-70"
            onClick={() => navigation(route.home)}
          >
            Marketplace
          </div>
          <div
            className="cursor-pointer text-center text-white opacity-70"
            onClick={() => navigation(route.home)}
          >
            Documentation
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleConnectWallet}
            className="grid h-11 place-items-center bg-transparent px-4 max-[320px]:hidden"
          >
            <p className="rounded-md border-[1px] border-[#7ABDF7] px-[11px] pb-[9px] pt-[7px] font-semibold text-white">
              Connect Wallet
            </p>
          </button>
          <div
            className="block h-10 w-10 rounded focus:bg-slate-100 xl:hidden"
            onClick={() => props.toggle()}
          >
            <BiMenuAltRight style={{ fontSize: 44, color: "white" }} />
          </div>
        </div>
      </div>
      <div className="fixed top-[80px] z-[9999] flex h-[49px] w-full items-center justify-center bg-[#1A1F2F] xl:top-[120px]">
        <div className="marquee">
          <div className="track">
            <div className="flex gap-6">
              <div className="flex items-center gap-[5px]">
                <img
                  src={icons.trending_logo}
                  alt=""
                  className="h-[11px] w-5"
                />
                <div className="text-sm font-bold text-white">Trending</div>
              </div>
              <div className="flex items-center gap-[15px] text-[11px] font-bold text-white">
                {mockupMarquee().map((item, idx) => item)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
