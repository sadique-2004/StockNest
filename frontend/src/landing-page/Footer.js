import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div
      className=" "
      style={{
        backgroundColor: "#f8f9fa",
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingTop: "2%",
        paddingBottom: "2%",
      }}
    >
      <div className="row mb-4">
        <div className="col-12 col-md-6 col-lg-3 mb-4 mt-2">
          <a className="navbar-brand" href="#">
            <img
              src="Media/Assets/logo.png"
              alt="Logo"
              className="mb-3 img-fluid"
              style={{ width: "40%" }}
            />
          </a>

          <p className="small">
            © 2010 - 2025, STOCK NEST Broking Ltd. <br /> All rights reserved.
          </p>
          <div>
            <FaXTwitter />
            <IoLogoFacebook className="mx-2" size={25} />
            <IoLogoInstagram className="mx-2" size={25} />
            <FaLinkedinIn className="mx-2" size={25} />
          </div>
          <hr className="my-3 px-2" />
          <div>
            <FaYoutube size={25} />
            <FaWhatsapp className="mx-2" size={25} />
            <FaTelegram className="mx-2" size={25} />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4 mt-2">
          <ul className="list-unstyled">
            <li className="fw-bold mb-2">Company</li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Referral programme
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                STOCKNEST.tech
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Open source
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Press & media
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                STOCK NEST Cares (CSR)
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4 mt-2">
          <ul className="list-unstyled">
            <li className="fw-bold mb-2">Support</li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Support portal
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                S-Connect blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                List of charges
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Downloads & resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Videos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Market overview
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                How to file a complaint?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Status of your complaints
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4 mt-2">
          <ul className="list-unstyled">
            <li className="fw-bold mb-2">Account</li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Open an account
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-dark text-decoration-none d-block py-1 hover-link"
              >
                Fund transfer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="small">
        <p>
          STOCK NEST Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services through
          STOCK NEST Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
          Commodity Trading through STOCK NEST Commodities Pvt. Ltd. MCX: 46025;
          NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address:
          STOCK NEST Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp.
          Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
          Karnataka, India. For any complaints pertaining to securities broking
          please write to complaints@STOCKNEST.com, for DP related to
          dp@STOCKNEST.com. Please ensure you carefully read the Risk Disclosure
          Document as prescribed by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of STOCK NEST and offering such services, please
          create a ticket here.
        </p>
      </div>
      <div className="small d-flex flex-wrap  justify-content-center mt-4 text-center gap-3">
        <p className="mb-0 me-3">NSE</p>
        <p className="mb-0 me-3">BSE</p>
        <p className="mb-0 me-3">MCX</p>
        <p className="mb-0 me-3">Terms & conditions</p>
        <p className="mb-0 me-3">Policies & procedures</p>
        <p className="mb-0 me-3">Privacy policy</p>
        <p className="mb-0 me-3">Disclosure</p>
        <p className="mb-0 me-3">Forinvestor's attention</p>
        <p className="mb-0 me-3">Investor charter</p>
      </div>
    </div>
  );
}

export default Footer;
