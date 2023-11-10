import icons from "../../assets/icons";
import { BiCopy } from "react-icons/bi";

const ComingSoonPage = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <img className="h-20 w-20" src={icons.offical_logo} />

      <p className="text-[50px] font-bold text-blue-400 sm:text-[150px]">
        Coming Soon
      </p>

      <p className="mt-10 text-center sm:text-xl">
        In the meantime, if you have any suggestions for us, please send them
        via email.
      </p>

      <div className="mt-3 min-w-[300px] flex-1">
        <div className="mt-2 flex  h-10 items-center justify-center gap-2 rounded border border-gray-300/50 bg-white px-6">
          <p>support@starksport.finance</p>
          <BiCopy />
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
