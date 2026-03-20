import "./open-design.css";

/**
 * About:
 * This is the experimental component to design a tooltip with a pointy arrow.
 *
 * Approaches:
 * - Native CSS shape with clip path.
 * - Have a pre-stylized SVG with boder and shadown that can be positioned and rotated to each edge.
 */
export default function TooltipPlus() {
  return (
    <div className="tool-tip-plus">
      <div className="window soft-shadow">Im the best tooltip in pug world 🥇</div>
      <div className="arrow ">{/* empty on purpose */}</div>
    </div>
  );
}
