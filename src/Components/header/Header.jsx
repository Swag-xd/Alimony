import { Component } from "react";
import styles from "./header.module.css"

export default class Header extends Component{
    render(){
        return(
            <>
            <div className={styles.heading}>
                <h1 className={styles.headingName}>Alimony Calculator</h1>
            </div>
            </>
        )
    }
}