import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function usePage() {
  let location = useLocation();

  useEffect(() => {
    console.log("location", location.pathname);
  });
}

export { usePage };
