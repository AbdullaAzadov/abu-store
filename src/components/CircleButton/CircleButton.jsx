import styles from "./CircleButton.module.css";

export default function CircleButton({ children, className, onClick }) {
    return (
        <button className={`${styles.btn} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}
