import Image from "next/image";

export default function Clients() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Row 1: Text then Image */}
        <div className="order-1 flex mt-10 md:order-1">
          <p className="text-3xl">
            Over our time in street food the last 5 years Danny
            has been an integral connection to our success. With a savvy
            business mind and excessive knowledge about street food, he’s
            successfully created multiple brands from the ground up. Having him
            at the end of a phone has helped keep our business running smoothly.
            With helpful advice on logistics to staffing issues to just day to
            day running and motivation Danny has been an essential part of our
            business growth. Tom, Stripclub Streetfood
          </p>
        </div>
        <div className="order-2 md:order-2">
          <Image
            width={500}
            height={50}
            src="https://images.pexels.com/photos/2553651/pexels-photo-2553651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Client 1"
          />
        </div>

        {/* Row 2: Image then Text */}
        {/* <div className="order-4 md:order-3">
          <Image
            width={500}
            height={50}
            src="https://images.pexels.com/photos/1755691/pexels-photo-1755691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Client 2"
          />
        </div>
        <div className="order-3 md:order-4">
          <p>Client 2 description...</p>
        </div> */}

        {/* Row 3: Text then Image */}
        {/* <div className="order-5 md:order-5">
          <p>Client 3 description...</p>
        </div>
        <div className="order-6 md:order-6">
          <Image
            width={500}
            height={50}
            src="https://images.pexels.com/photos/4551907/pexels-photo-4551907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Client 3"
          />
        </div> */}
      </div> 
    </div>
  );
}
