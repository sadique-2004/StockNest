import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BsSoundwave } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { RiCoinLine } from "react-icons/ri";
import { LuCoins } from "react-icons/lu";

const topics = [
  {
    title: "Account Opening",
    links: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
    icon: <CiCirclePlus className="me-2" />,
  },
  {
    title: "Your StockNest Account",
    links: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
    icon: <CgProfile className="me-2" />,
  },
  {
    title: "Kite",
    links: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
    icon: <BsSoundwave className="me-2" />,
  },
  {
    title: "Funds",
    links: [ "Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    icon: <CiWallet className="me-2" />,
  },
  {
    title: "Console",
    links: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
    icon: <LuCoins className="me-2" />,
  },
  {
    title: "Coin",
    links: [
      "Understanding mutual funds and Coin",
      "Coin app",
      "Coin web",
      "Transactions and reports",
      "National Pension Scheme (NPS)",
    ],
    icon: <RiCoinLine className="me-2" />,
  },
];

const CreateTicket = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-primary">Create a Ticket</h2>
      <p className="mb-4 lead">
        To create a ticket, select a relevant topic below:
      </p>

      <div className="row">
        {topics.map((section, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title d-flex align-items-center text-primary mb-3">
                  {section.icon}
                  {section.title}
                </h5>
                <ul className="list-unstyled">
                  {section.links.map((link, idx) => (
                    <li key={idx} className="mb-2">
                      <a
                        href="#"
                        className="text-dark text-decoration-none d-flex align-items-center"
                      >
                        <FaAngleRight className="me-2" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTicket;
