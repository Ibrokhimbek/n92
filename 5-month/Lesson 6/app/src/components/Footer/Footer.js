import React from "react";
import language from "../../localization/localization";

const Footer = ({ lang }) => {
  return (
    <footer style={{ marginTop: "20px" }} className="my-5">
      {language[lang].footer.text}
    </footer>
  );
};

export default Footer;
