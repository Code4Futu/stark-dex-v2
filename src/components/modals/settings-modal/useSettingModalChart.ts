import { useState } from "react";

const useSettingModalChart = () => {
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);

  function toggleSettingModalChart() {
    setIsSettingModalOpen(!isSettingModalOpen);
  }

  return {
    isSettingModalOpen,
    toggleSettingModalChart,
  };
};

export default useSettingModalChart;
