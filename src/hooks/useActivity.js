import { useContext } from "react";
import { ActivityContext } from "../context/context";

export const useActivity = () => {
  const context = useContext(ActivityContext);
  // console.log("See here", context);
  if (!context) throw new Error("useActivity must be used within a ActivityProvider");
  return context;
};
