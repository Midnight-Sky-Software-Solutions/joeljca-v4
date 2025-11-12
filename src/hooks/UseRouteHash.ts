import { useEffect, useState } from "preact/hooks";

export default function useRouteHash() {
  const [hash, setHash] = useState('');

  useEffect(() => {
    const updatehash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", updatehash);

    return () => window.removeEventListener("hashchange", updatehash);
  });

  return hash;
}