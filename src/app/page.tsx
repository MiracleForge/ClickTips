import Image from "next/image";
import Banner from "../../public/assets/images/SonnenLogo.png";
import Caroussel from "@/components/caroussel/Caroussel";
import { slides } from '../../public/assets/data/caroussel.json';
export default function Home() {


  return (
    <main className="w-full h-screen">
        <section className="bg-red-600 mt-6">
          <Caroussel/>          

        </section>
        
    </main>
  );
}
