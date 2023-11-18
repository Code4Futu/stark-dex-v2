import { useState } from "react";

const useModalChart = () => {
  const [isShowChart, setIsShowChart] = useState(false);

  function toggleModalChart() {
    setIsShowChart(!isShowChart);
  }

  return {
    isShowChart,
    toggleModalChart,
  };
};

export default useModalChart;
