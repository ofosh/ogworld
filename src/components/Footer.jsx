import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <div className="w-full text-center py-4  bg-black text-white">
      Copyrights {today.getFullYear()} © Orgyworld. All rights reserved.
    </div>
  );
};

export default Footer;
