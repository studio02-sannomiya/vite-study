import styles from "./MyButton.module.css";

export default function MyButton({
    primary = false,
    backgroundColor = null,
    size = 'medium',
    label = 'Button',
    ...props
}) {
    const mode = primary ? styles.primary : styles.secondary;

    return (
        <button
            type="button"
            className={[styles.button, styles[size], mode].join(' ')}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label}
        </button>
    )
}
