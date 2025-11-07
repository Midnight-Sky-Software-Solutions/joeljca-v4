import { useEffect } from "react";

export default function FontHack() {

  useEffect(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://use.typekit.net/bcn7uzq.css';
      document.head.appendChild(link);
  
      return () => {
        document.head.removeChild(link); // Clean up on unmount
      };
    }, []);

  return (
    <>
    </>
  );
}