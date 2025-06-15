import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import "./TooltipExample.css";


const portalRoot = document.getElementById("portal-root");

const isHTMLElement = (target: EventTarget | null): target is HTMLElement => {
    return target instanceof HTMLElement;
}

interface Position{
    top: number;
    left: number;   
}

interface Tooltip{
    visible: boolean;
    position: Position;
    content: string;
}

interface TooltipProps {
    children: ReactNode;
    position: Position;
}

const emptyTooltipState: Tooltip = {
    visible: false,
    position: { top: 0, left: 0 },
    content: "",
};

const Tooltip = ({ children, position }: TooltipProps) => {
    return createPortal(<div className="tooltip" style={{ top: position.top, left: position.left }}>
        {children}
        </div>,
        portalRoot as HTMLElement,
    )
}

const TooltipExample = () => {
    const [tooltip, setTooltip] = useState<Tooltip>(emptyTooltipState);

    const showTooltip = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (isHTMLElement(event.target)) {
            const {top, left} = event.target.getBoundingClientRect();
            setTooltip({
                visible:true,
                position:{
                    top:top +50,
                    left: left - 25,
                },
                content:"Tooltip content here"
            })
        }   
    }

    const hideTooltip = () => {
        setTooltip(emptyTooltipState);
    }
    return <>
        <button onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>Hover me</button>
        {tooltip.visible && (
            <Tooltip position={tooltip.position}>
                {tooltip.content}
            </Tooltip>
        )}
    </>
}

export default TooltipExample;