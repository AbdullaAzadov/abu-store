import style from "./IconButton.module.css";

export default function IconButton({
    children,
    size = "m",
    bgColor = "light",
}) {
    return <span className={`${size} ${bgColor}`}>{children}</span>;
}
