import Container from "src/core/components/container";
import ProductList from "../features/Home/components/ProductList";
import CarouselSlider from "src/features/Home/components/CarouselSlider";
import MainLayout from "@layouts/MainLayout";

export default function Home() {
  return (
    <Container>
      <CarouselSlider />
      <ProductList />
    </Container>
  );
}
