import { useState } from 'react'
import { Component } from "react";
import styles from "./faq.module.css"

const faqs = [

    {
        question: "What is this calculator for?",
        answer: "This tool helps estimate potential alimony based on legal and lifestyle factors in India. It is meant for educational use only."
    },

    {
        question: "Is this legally binding?",
        answer: "No. This is just a simulation. Actual alimony is decided by courts and specific legal proceedings."
    },
    {
        question: "How is alimony calculated here?",
        answer: "Alimony is calculated using the payor's income and property, and then a percentage is adjusted based on factors like employment, health, children, marriage duration, lifestyle, and qualification."
    },
    {
        question: "What is base alimony?",
        answer: "Base alimony = Payor’s income + a percentage based on property. All further adjustments apply on this base."
    },
    {
        question: "What is income gap?",
        answer: "The difference between the payor’s and recipient’s income, used in certain logic-based calculations."
    },
]

export default function Faq() {


    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <>
            <div className={styles.faqBox}>
                <h2 className={styles.faqHeading}> Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div className={styles.questions} onClick={() => toggle(index)}>
                            {faq.question}
                        </div>
                        {openIndex === index && (
                            <div className={styles.answer}> {faq.answer} </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}
