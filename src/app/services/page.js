import Image from "next/image";

export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image src="/logo.jpeg" alt="Logo" width={300} height={300} />
      <div className="text-3xl h-screen">
        Our consulting services provide the tools and knowledge you need to
        thrive.
      </div>
      <div className="text-3xl h-screen">
        Start your journey with us and see your business flourish!
      </div>
      <div className="text-2xl h-screen">
        <ul className="flex flex-col gap-4">
          <li>Assess the viability of your street food business idea.</li>
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
