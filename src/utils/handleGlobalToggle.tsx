import React from "react";

const handleGlobalToggle = (
  setFunction: React.Dispatch<React.SetStateAction<boolean>>,
  value: boolean
): void => {
  setFunction(!value);
};

export default handleGlobalToggle;
