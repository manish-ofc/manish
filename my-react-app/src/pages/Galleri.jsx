import Navbar from '../layout/Navbar';
import CardLive from '../layout/CardLive';
import Footer from '../layout/Footer';
import GallerySlider from '../layout/GallerySlider'; // Impor komponen GalleriLive

export default function Galleri() {
  return (
    <>
      <Navbar />
      <CardLive />
      <GallerySlider />
      <Footer />
    </>
  );
}
