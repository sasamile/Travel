import hilinkLogo from "../assets/Imagenes/hilink-logo.svg";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <a href="/" className="mb-10">
            <img src={hilinkLogo} alt="" width={74} height={29} />
          </a>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columnas) => (
              <FooterCol title={columnas.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columnas.links.map((links, index) => (
                    <li key={index}>
                      <a href="/">{links}</a>
                    </li>
                  ))}
                </ul>
              </FooterCol>
            ))}

            <div className="flex flex-col gap-5">
              <FooterCol title={FOOTER_CONTACT_INFO.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {FOOTER_CONTACT_INFO.links.map((conts, index) => (
                    <li
                      key={index}
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <a href="/" className="whitespace-nowrap">
                        {conts.label} :
                      </a>
                      <a
                        href="/"
                        className="medium-14 whitespace-nowrap text-blue-70"
                      >
                        {" "}
                        {conts.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </FooterCol>
            </div>
            <div className="flex flex-col gap-5">
              <FooterCol title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((Sol) => (
                    <li key={Sol}>
                      <img src={Sol} alt="" width={24} height={24}/>
                    </li>
                  ))}
                </ul>
              </FooterCol>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20"/>
        <p className="regular-14 w-full text-center text-gray-30">2024 Hilink | All rights reserved</p>
      </div>
    </footer>
  );
};
interface FooterColProps {
  title: string;
  children: React.ReactNode;
}

function FooterCol({ title, children }: FooterColProps) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
}

export default Footer;
