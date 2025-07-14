
import styles from "./mutual.module.css"

export default function Mutual ({values, onChange}){


        return(
            <>
            <section className={styles.mutualForm}>
                <h1 className={styles.mutualHeading}>Mutual Status</h1>

                <div className={styles.formInputs}>

                    <label className={styles.nameInput}>
                        <span>Marriage Duration*</span>
                        <div className={styles.labelGap}>
                            <input type="number" 
                            name="marriageDuration"
                            value={values.marriageDuration}
                            onChange={onChange}
                            />
                        </div>
                       
                    </label>
                    <br />

                    <label>
                        <span>Children</span>
                        <div className={styles.labelGap}>
                            <input type="number" 
                            name="children"
                            min ="0"
                            value={values.children}
                            onChange={onChange}
                            />
                        </div>
                        
                    </label>
                    <br />

                    
                    <div className={styles.optionInputs}>
                        <label>
                            <span>Lifestyle before Divorce*</span>
                            <div className={styles.lifestyleGroup}>
                                {[
                                    { v: "low", t: "Normal" },
                                    { v: "mid", t: "Moderate" },
                                    { v: "high", t: "High" },
                                ].map(({ v, t }) => (
                                    <label key={v}>
                                        <input
                                            type="radio"
                                            name="lifestyle"
                                            value={v}
                                            checked={values.lifestyle === v}
                                            onChange={onChange}
                                            required
                                        />
                                         {t}
                                    </label>
                                ))}
                                
                            </div>
  
                       </label>
                    </div>
                    
                    <br />

                
                </div>

            </section>
            </>
        )
}