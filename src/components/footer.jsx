import FooterAbout from "./footer-about";
import FooterContact from "./footer-contact";
import FooterPayement from "./footer-payement";
import FooterSocial from "./footer-social";

export default function Footer() {
  return (
    <div className="flex justify-between">
        <FooterAbout/>
        <FooterContact/>
        <FooterPayement/>
        <FooterSocial/>
    </div>
  )
}
