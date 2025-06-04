import { useEffect } from "react";

const AddBanner = () => {
  console.log("ADD BANNER");
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);
  return (
    <ins
      style={{ display: "block" }}
      className="adsbygoogle"
      data-ad-client="ca-pub-2135760514395742"
      data-ad-slot="3967562913"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AddBanner;
