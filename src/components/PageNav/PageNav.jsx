import styles from "./PageNav.module.css";
import CircleButton from "../CircleButton/CircleButton";

export default function PageNav({ count, current, onPrev, onNext, onSet }) {
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <nav className={styles.nav}>
            <CircleButton
                onClick={() => {
                    onPrev();
                    scrollUp();
                }}
                className="active"
            >
                {"<"}
            </CircleButton>
            {Array.from({ length: count }, (_, i) => i + 1).map((page) => (
                <CircleButton
                    key={page}
                    onClick={() => {
                        onSet(page);
                        scrollUp();
                    }}
                    className={page === current ? "active" : ""}
                >
                    {page}
                </CircleButton>
            ))}
            <CircleButton
                className="active"
                onClick={() => {
                    onNext();
                    scrollUp();
                }}
            >
                {">"}
            </CircleButton>
        </nav>
    );

    // if (current > 3 && current < count - 2)
    //     return (
    //         <nav className={styles.nav}>
    //             <CircleButton className="active" onClick={onPrev}>
    //                 {"<"}
    //             </CircleButton>
    //             <CircleButton>{1}</CircleButton>
    //             {current - 3 > 1 && "..."}
    //             <CircleButton>{current - 2}</CircleButton>
    //             <CircleButton>{current - 1}</CircleButton>
    //             <CircleButton className="active">{current}</CircleButton>
    //             <CircleButton>{current + 1}</CircleButton>
    //             <CircleButton>{current + 2}</CircleButton>
    //             {current + 3 < count && "..."}
    //             <CircleButton>{count}</CircleButton>
    //             <CircleButton className="active" onClick={onNext}>
    //                 {">"}
    //             </CircleButton>
    //         </nav>
    //     );

    // if (current <= 3)
    //     return (
    //         <nav className={styles.nav}>
    //             <CircleButton className="active" onClick={onPrev}>
    //                 {"<"}
    //             </CircleButton>
    //             {Array.from({ length: current - 1 }, (_, i) => i + 1).map(
    //                 (page) => (
    //                     <CircleButton key={page}>{page}</CircleButton>
    //                 )
    //             )}
    //             <CircleButton className="active">{current}</CircleButton>
    //             <CircleButton>{current + 1}</CircleButton>
    //             <CircleButton>{current + 2}</CircleButton>
    //             {current + 3 < count && "..."}
    //             <CircleButton>{count - 2}</CircleButton>
    //             <CircleButton>{count - 1}</CircleButton>
    //             <CircleButton>{count}</CircleButton>
    //             <CircleButton className="active" onClick={onNext}>
    //                 {">"}
    //             </CircleButton>
    //         </nav>
    //     );

    // if (current > count - 3)
    //     return (
    //         <nav className={styles.nav}>
    //             <CircleButton className="active" onClick={onPrev}>
    //                 {"<"}
    //             </CircleButton>
    //             <CircleButton>{1}</CircleButton>
    //             <CircleButton>{2}</CircleButton>
    //             <CircleButton>{3}</CircleButton>
    //             {current - 3 > 1 && "..."}
    //             <CircleButton>{current - 2}</CircleButton>
    //             <CircleButton>{current - 1}</CircleButton>
    //             <CircleButton className="active">{current}</CircleButton>
    //             {Array.from(
    //                 { length: count - current },
    //                 (_, i) => i + 1 + current
    //             ).map((page) => (
    //                 <CircleButton key={page}>{page}</CircleButton>
    //             ))}
    //             <CircleButton className="active" onClick={onNext}>
    //                 {">"}
    //             </CircleButton>
    //         </nav>
    //    );
}
