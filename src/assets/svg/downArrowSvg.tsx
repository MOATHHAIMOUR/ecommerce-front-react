type svgProperties = {
  width?: string;
  height?: string;
  color?: string;
};

export default function DownArrowSvg({
  width = "25px",
  height = "25px",
  color = "#FFFFFF",
}: svgProperties) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
          fill={color}
        />
      </svg>
    </>
  );
}
