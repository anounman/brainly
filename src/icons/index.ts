export interface IconPorops {
    size: "sm" | "md" | "lg";
    onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
}


export const iconStyleVariants = {
    "sm": "size-2",
    "md": "size-4",
    "lg": "size-6"
}