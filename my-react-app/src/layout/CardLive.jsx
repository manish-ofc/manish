import poloImgTop from '/src/assets/all5.jpg';   // gambar atas
import poloImg from '/src/assets/all4.jpg';      // gambar utama (tengah)
import poloImgBottom from '/src/assets/all3.jpg';// gambar bawah
import shirtImg from '/src/assets/all2.jpg';     // gambar kanan
// import DecorationElements from '../ui/DecorationElement'; // Impor komponen DecorationElements

export default function HeroCollection() {
  return (
    <section className="w-full flex flex-col md:flex-row justify-center items-center gap-0 py-20 px-4 relative overflow-hidden bg-white h-screen">
      {/* === Blok Polo === */}
      {/* <DecorationElements /> */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="grid grid-cols-2 gap-4 w-full">
          <img
            src={poloImgTop}
            alt="Polo Top"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={poloImg}
            alt="Polo Main"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={poloImgBottom}
            alt="Polo Bottom"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={shirtImg}
            alt="Shirt Collection"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Garis Pemisah */}
      <div className="hidden md:block w-px bg-white h-full"></div>

      {/* === Blok Shirt === */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="grid grid-cols-2 gap-4 w-full">
          <img
            src={poloImg}
            alt="Polo Collection"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={poloImgTop}
            alt="Polo Top"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={shirtImg}
            alt="Shirt Collection"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={poloImgBottom}
            alt="Polo Bottom"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
