import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col justify-center items-start text-left gap-4">
      <h1 className="text-2xl font-bold">Our Services</h1>
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
      <div className="mt-4 border rounded-md p-2">
        <ul className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Service Menu</p>
          <li className='flex text-sm'><FontAwesomeIcon icon={faLightbulb}/>Assess the viability of your street food business idea.</li>
          <li>
            Develop a detailed business plan including market analysis, business
            model, and financial projections.
          </li>
          <li>Brand Development</li> <li> Menu Development </li>{" "}
          <li> Operational Set up (Equipment, Events, H+S Compliance) </li>
          <li>Financial Management</li>
          <li>Marketing Strategy </li> <li> Staff Growth </li>{" "}
          <li>Ongoing Support & Consultation</li>
        </ul>
      </div>
    </div>
  );
}
