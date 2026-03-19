import "./open-design.css";

/**
 * About:
 * This is the experimental component to design a tooltip with a pointy arrow.
 *
 * Approaches:
 * - Native CSS shape with clip path.
 * - Have a pre-stylized SVG with boder and shadown that can be positioned and rotated to each edge.
 */
export default function OpenDesign() {
  return (
    <div className="open-design">
      <div className="window soft-shadow">Im the best tooltip 🥇</div>
      <div className="arrow">{/* empty on purpose */}</div>
    </div>
  );
}
