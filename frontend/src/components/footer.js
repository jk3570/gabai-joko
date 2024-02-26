import { Link } from "react-router-dom";
import "../css/footer.css";
import { FaFacebook, FaPhone, FaMailBulk } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer
        className="h-auto w-full flex flex-row gap-10
      max-md:flex-col
      max-md:px-2
      "
      >
        <div>
          <b>Location</b>
          <br />
          <p>
            Barangay 171, Congressional Rd.,
            <br />
            Caloocan, Metro Manila, Philippines 1105
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <b>Contacts</b>

          <div className="flex flex-col">
            <ul className="">
              <li className="flex flex-row gap-2">
                <div></div>
                <div>team.paragon.ucc.bscs@gmail.com</div>
              </li>

              <li className="flex flex-row gap-2">
                <div></div>
                <div>+63 939 419 5233</div>
              </li>
              <li className="flex flex-row gap-2">
                <div></div>

                <div>GabAI</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <b>Legal</b>

          <ul>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">User Agreement</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <b>Useful Links</b>
          <ul>
            <li>
              <a href="https://clients.ncr.dole.gov.ph/home/" target="_blank">
                Department of Labor and Deployment
              </a>
            </li>
            <li>
              <a
                href="https://www.foi.gov.ph/requests?agency=NLRCom"
                target="_blank"
              >
                National Labor Relations Commision
              </a>
            </li>
            <li>
              <a href="https://www.officialgazette.gov.ph" target="_blank">
                Official Gazette of the Philippines
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
