import { Component } from "react";
import styles from "./footer.module.css"
import Linkedin from "../../assets/Linkedin.jpg"
import Github from "../../assets/Github.jpg"


export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className={styles.footer}>
                    <nav className={styles.footerPara}>
                        <p>© 2025 Alimony Calculator · Made in India 🇮🇳</p>
                        <p>This tool is for informational purposes only. Consult legal professionals for actual cases.</p>
                    </nav>

                    <div className={styles.S_Icons}>
                        <a href="https://www.linkedin.com/in/swagat-swain-6b99a3245/" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/Swag-xd" target="_blank" rel="noopener noreferrer">
                            <img src={Github} alt="GitHub" />
                        </a>
                    </div>

                </footer>
            </>
        )

    }
}