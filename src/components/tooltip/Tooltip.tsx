import "./tooltip.css"

interface Props {
    /** The text to display when clicking the tooltip. */
    text:string
}


export default function Tooltip({text}:Props) {
    return <div>
        <button className="tooltip-icon" popoverTarget="foobar">ℹ️</button>
        
        <div id="foobar" popover="hint">
        {text}
        </div>
    </div>
}