import Image from "next/image";

export default function Home() {

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `(function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:5075527,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Image src="/logo.jpeg" alt="Logo" width={300} height={300} />
      <p className=" text-3xl">
        I started my streetfood business from scratch with no experience and
        without knowing anyone else in the trade who i could ask for advice. I
        made so many mistakes along the way and this is where i can help. Basically
        ive been there seen it done it. We work with clients to help get their
        ideas/dreams off the ground and to market with the least possible risk
        whilst making profit. We work close with event organisers, equipment,
        food & packaging suppliers and many of the top streetfood traders in the
        country. Sourcing the best yet most cost efficient items. 
      </p>
      {/* Perhaps a
        small simple flow chart of ‘Idea - Sales - Profit’ or something like
        this to make it seem like i can make it really simple. This is the
        reality flowchart: Idea - Market Research - Business Plan - Funding -
        Legals - Branding - Equipment - Suppliers - Hiring - Marketing - Launch
        Add in some of those questions i sent you. Free 30min consultation. */}
    </div>
  );
}