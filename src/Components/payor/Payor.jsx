
import styles from "./payor.module.css"

export default function Payor({ values, onChange }) {

        return(
        <>
            <section className={styles.payorForm}>
                <h1 className={styles.payorHeading}>Payor's Status</h1>
                <div className={styles.formInputs}>

                    <label className={styles.nameInput}>
                        <span>Name</span>
                            <div className={styles.labelGap}>
                            <input type="text" 
                            name="payorName"
                            onChange={onChange}
                            value={values.payorName} 
                            />
                        </div>
                    </label>
                    <br />

                    <label>
                        <span>Age*</span>
                        <div className={styles.labelGap}>
                            <input type="number" 
                            name="payorAge"
                            min ="18"
                            value={values.payorAge}
                            onChange={onChange}
                            required/>
                        </div>
                    </label>
                    <br />

                    <label>
                        <span>Income*</span>
                        <div className={styles.labelGap}>
                            <input type="number" 
                            name="payorIncome"
                            min="0"
                            value={values.payorIncome}
                            onChange={onChange}
                            required/> 
                        </div>
                       
                    </label>
                    <br />

                    <div className={styles.optionInputs}>
                        <label>
                            <span>Property*</span>
                            <div className={styles.propertyGroup}>
                                {["low", "mid", "high"].map((level) => (
                                    <label key={level}>
                                        <input
                                        type="radio"
                                        name="payorProperty"
                                        value={level}
                                        checked={values.payorProperty === level}
                                        onChange={onChange}
                                        required
                                        />
                                        {level.charAt(0).toUpperCase() + level.slice(1)}
                                    </label>
                                ))}
                            </div>
                        </label>

                        <label>
                            <span>Employment Type*</span>
                            <div className={styles.employmentGroup}>
                                {[
                                { v: "selfemployed", t: "Self Employed" },
                                { v: "fulltime", t: "Full Time" },
                                ].map(({ v, t }) => (
                                <label key={v}>
                                    <input
                                    type="radio"
                                    name="payorEmployment"
                                    value={v}
                                    checked={values.payorEmployment === v}
                                    onChange={onChange}
                                    required
                                    />
                                    {t}
                                </label>
                                ))}
                            </div>
                        </label>

                        <label>
                            <span>Health Condition*</span>
                            <div className={styles.healthGroup}>
                                {["bad", "good"].map((h) => (
                                    <label key={h}>
                                        <input
                                        type="radio"
                                        name="payorHealth"
                                        value={h}
                                        checked={values.payorHealth === h}
                                        onChange={onChange}
                                        required
                                        />
                                        {h.charAt(0).toUpperCase() + h.slice(1)}
                                    </label>
                                ))}
                            </div>
                        </label>
                    </div>
                </div>
            </section>
        </>
    )
}
