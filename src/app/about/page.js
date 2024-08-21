import Image from "next/image";

export default function About() {
  return (
    <div className="flex w-full md:w-2/3 items-center flex-col justify-center gap-4 mx-4 min-h-screen">
      <h1 className='text-3xl font-bold'>About Streetfood Consulting</h1>
      <div className='border rounded-md p-6 flex flex-col gap-4'>
      <div className="md:text-base lg:text-base text-base text-left">
          I started my streetfood business from scratch with no experience and
          without knowing anyone else in the trade who i could ask for advice.
        </div>
        <div className="md:text-base lg:text-base text-base text-left">
        I made so many mistakes along the way and this is where i can help.
          Basically ive been there seen it done it.{" "}
        </div>
        <div className="md:text-base lg:text-base text-base text-left">
        We work with clients to help get their ideas/dreams off the ground and
          to market with the least possible risk whilst making profit.
        </div>{" "}
        <div className="md:text-base lg:text-base text-base text-left">
        We work close with event organisers, equipment, food & packaging
          suppliers and many of the top streetfood traders in the country.
        </div>
        <div className="md:text-base lg:text-base text-base text-left">
        Sourcing the best yet most cost efficient items.
        </div>
        </div>
    </div>
  );
}
