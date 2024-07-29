import Image from "next/image";

export default function Clients() {
  return (
    <div>
      <div className="grid justify-start items-start grid-cols-1 gap-4">
        <div className="order-1 h-full items-start justify-start flex flex-col md:flex-col md:order-1">
          <div className="text-left">
            <div className="flex mb-10 items-center gap-4">
              <Image
                width={100}
                height={100}
                src="/striplogo.jpg"
                alt="Client 1"
                className="w-20 h-20 shadow-white shadow-sm rounded-md object-cover"
              />
              <p className="text-4xl mx-4 font-semibold">
                Stripclub Streetfood
              </p>
            </div>
            <p className="text-lg">
              Over our time in street food the last 5 years Danny has been an
              integral connection to our success. With a savvy business mind and
              excessive knowledge about street food, he’s successfully created
              multiple brands from the ground up. Having him at the end of a
              phone has helped keep our business running smoothly. With helpful
              advice on logistics to staffing issues to just day to day running
              and motivation Danny has been an essential part of our business
              growth.
            </p>
            <p className="font-signature text-4xl mt-4 mb-6">
              Tom, Stripclub Streetfood
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              width={200}
              height={200}
              src="/stripimage.webp"
              alt="Client 1"
              className="w-full h-auto"
            />
          </div>
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
