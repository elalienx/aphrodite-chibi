import "./tooltip.css"

interface Props {
    /** The text to display when clicking the tooltip. */
    text:string
}

export default function TooltipPopover({text}:Props){
    return <div id="help" className="tooltip-popover" popover="hint">
        {text}
    </div>
}