import TruckSvg from "@assets/svg/TrukSvg";
import CustomLink from "./CustomLink";
export default function TopNavigation() {
  return (
    <div className="flex h-[50px] flex-col justify-center gap-5">
      {/* Start nav links */}
      <nav className="flex items-center justify-between">
        <ul className="flex justify-start">
          <p>Need help? Call us: (+98) 0234 456 789</p>
        </ul>
        <ul className="flex justify-start gap-12">
          <CustomLink to="/track" title="Track your order" svg={<TruckSvg />} />
        </ul>
      </nav>
      {/* End nav Links */}
    </div>
  );
}
