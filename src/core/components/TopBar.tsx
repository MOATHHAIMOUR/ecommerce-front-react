import TruckSvg from "@assets/svg/TrukSvg";
import CustomLink from "./CustomLink";
import Container from "./container";
export default function TopNavigation() {
  return (
    <Container>
      <nav className="flex h-[50px] w-full items-center justify-between">
        <ul className="flex justify-start">
          <p>Need help? Call us: (+98) 0234 456 789</p>
        </ul>
        <ul className="flex justify-start gap-12">
          <CustomLink to="/track" title="Track your order" svg={<TruckSvg />} />
        </ul>
      </nav>
    </Container>
  );
}
