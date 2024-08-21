import {
  faDollar,
  faLightbulb,
  faList,
  faMap,
  faPeopleArrows,
  faPerson,
  faPhone,
  faPlus,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4 mx-4 min-h-screen">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <div className="text-lg text-gray-300">
        Our consulting services provide the tools and knowledge you need to
        thrive.
      </div>
      <Link
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-base font-semibold hover:bg-yellow-600 transition duration-300"
        href="/#contact"
      >
        Start your journey with us and see your business flourish!
      </Link>
      <div className="mt-4 border  rounded-md p-4 pb-10 bg-white text-black">
        <ul className="flex flex-col gap-3">
          <p className="text-xl py-6 font-semibold">Service Menu</p>
          <li className="flex items-center text-left text-sm">
            <FontAwesomeIcon width="16" className="mr-4" icon={faLightbulb} />
            Assess the viability of your street food business idea.
          </li>
          <li className="flex items-center text-left text-sm">
            <FontAwesomeIcon width="16" className="mr-4" icon={faMap} />
            Develop a detailed business plan including market analysis, business
            model, and financial projections.
          </li>
          <li className="flex items-center text-left text-sm">
            <FontAwesomeIcon width="16" className="mr-4" icon={faPerson} />
            Brand Development
          </li>{" "}
          <li className="flex items-center text-left text-sm">
            <FontAwesomeIcon width="16" className="mr-4" icon={faList} /> Menu
            Development{" "}
          </li>{" "}
          <li className="flex items-center text-left text-sm">
            <FontAwesomeIcon width="16" className="mr-4" icon={faPlus} />{" "}
            Operational Set up (Equipment, Events, H+S Compliance){" "}
          </li>
          <li className="flex items-center text-left text-sm">
            <FontAwesomeIcon width="16" className="mr-4" icon={faDollar} />
            Financial Management
          </li>
          <li className="flex items-center text-left text-sm">
            <FontAwesomeIcon width="16" className="mr-4" icon={faStore} />
            Marketing Strategy{" "}
          </li>{" "}
          <li className="flex items-center text-left text-sm">
            <FontAwesomeIcon
              width="16"
              className="mr-4"
              icon={faPeopleArrows}
            />{" "}
            Staff Growth{" "}
          </li>{" "}
          <li className="flex items-center text-left text-sm">
            <FontAwesomeIcon width="16" className="mr-4" icon={faPhone} />
            Ongoing Support & Consultation
          </li>
        </ul>
      </div>
    </div>
  );
}
