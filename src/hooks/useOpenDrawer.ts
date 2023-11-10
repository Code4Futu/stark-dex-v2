import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const useOpenDrawer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [openDrawer, setOpenDrawer] = useState(false);
  const [resizeDrawer, setResizeDrawer] = useState(false);

  const resizeToggle = () => {
    setResizeDrawer(!resizeDrawer);
  };

  const toggle = () => {
    if (isMobile) setOpenDrawer(!openDrawer);
  };

  return { openDrawer, toggle, resizeDrawer, resizeToggle };
};

export { useOpenDrawer };
