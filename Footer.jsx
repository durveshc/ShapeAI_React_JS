import React from "react";
function Footer() {
  var currYear = new Date().getFullYear();
  return <footer>Copyright @{currYear}</footer>;
}
export default Footer;
