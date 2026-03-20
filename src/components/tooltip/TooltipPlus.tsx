import "./tooltip-plus.css";

interface Props {
  direction?: "top" | "left" | "right" | "bottom";
}

export default function TooltipPlus({ direction = "top" }: Props) {
  return (
    <div className={`tool-tip-plus ${direction}`}>
      <div className="window soft-shadow">Im the best tooltip in pug world 🥇</div>
      <div className="arrow ">{/* empty on purpose */}</div>
    </div>
  );
}
