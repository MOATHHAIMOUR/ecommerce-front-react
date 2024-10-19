import { NavLink } from "react-router-dom";

type customLink = {
  to: string;
  title: string;
  svg?: React.ReactNode;
  textColor?: string;
};

export default function CustomLink({ to, title, svg, textColor }: customLink) {
  console.log(textColor);
  return (
    <li>
      <NavLink to={to} className="flex items-center gap-2">
        <>
          <span>{svg}</span>
          <p style={{ color: textColor }} className={`text-[15px] font-bold`}>
            {title}
          </p>
        </>
      </NavLink>
    </li>
  );
}
