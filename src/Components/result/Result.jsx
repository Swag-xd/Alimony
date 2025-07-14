
import styles from "./result.module.css"

export default function Result({ amount }) {
    const display = amount === null ? "" : `₹${amount.toLocaleString("en-IN")}`;


    return (
        <>
            <div className={styles.result}>
                <div className={styles.resultSection}>
                    <h2 className={styles.alimonyHeading}>
                        Total Alimony Per Month = {display}
                        
                    </h2>

                </div>
            </div>
        </>
    )
}
