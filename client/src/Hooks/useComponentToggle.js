import  { useEffect } from "react";
import useToggle from "./useToggle";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOutsideAlerter(ref) {
    const [toggle, setToggle] = useToggle(false)

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return [toggle, setToggle]
}