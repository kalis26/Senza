import Footer from "@/components/footer";
import ImageSlider from "@/components/imageslider";
import Navigation from "@/components/navigation";
import NewProducts from "@/components/newproducts";

export default function Home() {
  return (
    <div>
      <Navigation />
      <ImageSlider />
      <NewProducts />
      <Footer />
    </div>
  );
}
