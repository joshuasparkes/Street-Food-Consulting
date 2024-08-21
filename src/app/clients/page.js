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
            <div className="md:text-lg lg:text-lg text-sm">
              Over our time in street food the last 5 years Danny has been an
              integral connection to our success. With a savvy business mind and
              excessive knowledge about street food, he’s successfully created
              multiple brands from the ground up. Having him at the end of a
              phone has helped keep our business running smoothly. With helpful
              advice on logistics to staffing issues to just day to day running
              and motivation Danny has been an essential part of our business
              growth.
            </div>
            <p className="font-signature md:text-4xl text-2xl mt-4 mb-6">
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
        <div className="order-2 h-full items-start justify-start mt-20 flex flex-col md:flex-col md:order-2">
          <div className="text-left">
            <div className="flex mb-10 items-center gap-4">
              <Image
                width={100}
                height={100}
                src="/cajunlogo.webp"
                alt="Client 1"
                className="w-20 h-20 shadow-white shadow-sm rounded-md object-cover"
              />
              <p className="text-4xl mx-4 font-semibold">Cajun Soul </p>
            </div>
            <div className="md:text-lg lg:text-lg text-sm">
              I hooked up with SC when I first had the idea to start a
              streetfood business as I was aware that their experience within
              this sector was second to none. A year later and the business is
              flourishing and profitable. We have done multiple big events and
              also have various residencies.
            </div>
            <p className="font-signature md:text-4xl text-2xl mt-4 mb-6">
              Charlie, Cajun Soul
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              width={200}
              height={200}
              src="/cajunimage.png"
              alt="Client 1"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
