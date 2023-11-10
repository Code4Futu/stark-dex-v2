import { useConnectors } from "@starknet-react/core/dist/hooks";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import icons from "../../assets/icons";

interface ModalWalletProps {
  isShowing: boolean;
  hide: () => void;
}

declare const window: any;

const ModalWallet: React.FC<ModalWalletProps> = ({ isShowing, hide }) => {
  const { available, connectors, connect, refresh } = useConnectors();
  useEffect(() => {
    const interval = setInterval(refresh, 5000);
    return () => clearInterval(interval);
  }, [refresh]);

  const handleClose = () => {
    hide();
  };

  const handleConnect = (connector: any) => {
    const isWalletConnected = available.find(
      (availableConnector) => availableConnector.id() === connector.id()
    );

    isWalletConnected
      ? connect(connector)
      : alert(`Please install ${connector.id()} wallet!`);

    handleClose();
  };

  const handleConnectOkx = async () => {
    if (typeof window.okxwallet !== "undefined") {
      console.log("OKX is installed!");
    }

    try {
      const wallets = await window.okxwallet.requestWallets(true);
      if (wallets && wallets.length > 0) {
        const address = wallets[0].address[0].address;
        // setWalletAddress(address);
        console.log(address);
      } else {
        console.error("No wallets found");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className="fixed left-0 right-0 top-0 z-50 h-screen w-screen bg-black/70 backdrop-blur-lg"
            onClick={handleClose}
          />
          <div
            className="fixed left-[50%] top-[50%] z-50 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div
              className="relative z-50 mx-auto w-fit  min-w-[400px] overflow-hidden rounded-xl border border-gray-600 bg-white"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div className="flex w-full justify-between rounded-t-xl border-b border-gray-300/50 bg-white px-5 py-6">
                <div className="flex items-center gap-2">
                  <p className="text-primary text-[20px] font-bold">
                    Connect Wallet
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-gray-800 hover:bg-gray-700"
                >
                  <img src={icons.ic_close} alt="arrow" className="h-5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-10 px-5 pb-7 pt-7">
                <img
                  src={icons.images.wallet_argentx_logo}
                  alt="wallet_logo_argentx"
                  className="h-20 cursor-pointer rounded-lg"
                  onClick={() => handleConnect(connectors[1])}
                />
                <img
                  src={icons.images.wallet_braavos_logo}
                  alt="wallet_logo_braavos"
                  className="h-20 cursor-pointer rounded-lg"
                  onClick={() => handleConnect(connectors[2])}
                />
                <img
                  src={icons.images.wallet_okx_logo}
                  alt="wallet_logo_braavos"
                  className="h-20 cursor-pointer rounded-lg"
                  onClick={() => handleConnectOkx()}
                />
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default ModalWallet;
