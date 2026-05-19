import poloImgTop from "/src/assets/all5.jpg";
import poloImg from "/src/assets/all4.jpg";
import poloImgBottom from "/src/assets/all3.jpg";
import shirtImg from "/src/assets/all2.jpg";

// import DecorationElements from "../ui/DecorationElement";

export default function HeroCollection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-20 md:flex-row md:gap-6">
      
      {/* Decoration */}
      {/* <DecorationElements /> */}

      {/* Left Collection */}
      <div className="relative flex w-full justify-center md:w-1/2">
        
        <div className="grid w-full grid-cols-2 gap-4">
          
          <img
            src={poloImgTop}
            alt="Polo Top"
            className="h-auto w-full rounded-lg object-cover"
          />

          <img
            src={poloImg}
            alt="Polo Main"
            className="h-auto w-full rounded-lg object-cover"
          />

          <img
            src={poloImgBottom}
            alt="Polo Bottom"
            className="h-auto w-full rounded-lg object-cover"
          />

          <img
            src={shirtImg}
            alt="Shirt Collection"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="hidden h-full w-px bg-gray-200 md:block"></div>

      {/* Right Collection */}
      <div className="relative mt-6 flex w-full justify-center md:mt-0 md:w-1/2">
        
        <div className="grid w-full grid-cols-2 gap-4">
          
          <img
            src={poloImg}
            alt="Polo Collection"
            className="h-auto w-full rounded-lg object-cover"
          />

          <img
            src={poloImgTop}
            alt="Polo Top"
            className="h-auto w-full rounded-lg object-cover"
          />

          <img
            src={shirtImg}
            alt="Shirt Collection"
            className="h-auto w-full rounded-lg object-cover"
          />

          <img
            src={poloImgBottom}
            alt="Polo Bottom"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}