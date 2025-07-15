import { Component } from "react";
import Icon from "../../assets/CalculatorIcon.jpg"
import styles from "./header.module.css"

export default class Header extends Component {
    render() {
        return (
            <>
                <div className={styles.heading}>

                    <div className={styles.Icon}>
                        <img src={Icon} alt="logo" />
                    </div>
                    
                    <div className={styles.headingName}>
                        <h1 className={styles.Name}>Alimony Calculator</h1>
                    </div>
                    


                </div>
            </>
        )
    }
}