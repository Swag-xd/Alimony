
import styles from "./recipient.module.css"

export default function Recipient ({values, onChange}){

        return(
            <>
            <section className={styles.recipientForm}>
                <h1 className={styles.recipientHeading}>Recipient's Status</h1>
                <div className={styles.formInputs}>

                     <label className={styles.nameInput}>
                         <span>Name</span>
                             <div className={styles.labelGap}>
                             <input type="text" 
                             name="recipientName"
                             value={values.recipientName}
                             onChange={onChange} />
                         </div>
                     </label>
                     <br />
 
                     <label>
                         <span>Age*</span>
                         <div className={styles.labelGap}>
                             <input type="number" 
                             name="recipientAge"
                             min ="18"
                             value={values.recipientAge}
                             onChange={onChange}
                             required/>
                         </div>
                     </label>
                     <br />
 
                     <label>
                         <span>Income*</span>
                         <div className={styles.labelGap}>
                             <input type="number" 
                             name="recipientIncome"
                             min="0"
                             value={values.recipientIncome}
                             onChange={onChange}
                             required/> 
                         </div>
                        
                     </label>
                     <br />
 
 
                     <div className={styles.optionInputs}>
                        <label>
                            <span>Education*</span>
                            <div className={styles.educationGroup}>
                                {["UG", "PG"].map((level) => (
                                 <label key = {level}>
                                     <input
                                     type="radio"
                                     name="recipientEducation"
                                     value={level}
                                     checked={values.recipientEducation === level}
                                     onChange={onChange}
                                     required
                                     />
                                     {level.charAt(0).toUpperCase() + level.slice(1)}
                                 </label>
                                ))}
                                 
                            </div>
                        </label>
                        <br/>
 
                        <label>
                            <span>Employment Type*</span>
                            <div className={styles.employmentGroup}>
                                {[
                                    {v:"unemployed", t:"Unemployed"},
                                    {v:"selfemployed", t: "Self Employed"},
                                    {v:"fulltime", t:"Full Time"}
                                ].map(({v,t}) => (
                                 <label key = {v}>
                                     <input
                                     type="radio" 
                                     name="recipientEmployment"
                                     value={v}
                                     checked={values.recipientEmployment === v}
                                     onChange={onChange}
                                     required
                                     />
                                     {t}
                                 </label>
                                ))}
                            </div>
                             
                        </label>
                         <br />
 
                        <label>
                            <span>Health Condition*</span>
                            <div className={styles.healthGroup}>
                               {["bad", "good"].map((h) => (
                                <label key={h}>
                                    <input
                                    type="radio"
                                    name="recipientHealth"
                                    value={h}
                                    checked={values.recipientHealth === h}
                                    onChange={onChange}
                                    required
                                    />
                                    {h.charAt(0).toUpperCase() + h.slice(1)}
                                </label>
                                ))}
                            </div>
                             
                        </label>
                    </div>

                    <br/>
                    
                </div>

            </section>
            </>
        )
    }
