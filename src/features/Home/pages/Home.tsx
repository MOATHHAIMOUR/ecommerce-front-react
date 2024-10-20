import Container from "src/core/components/container";
import CarouselSlider from "../components/carouselSlider";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <Container>
      <CarouselSlider />
      <ProductList />
    </Container>
  );
}
