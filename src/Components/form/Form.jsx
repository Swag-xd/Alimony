import { Component } from "react";
import styles from "./form.module.css"
import Payor from "../payor/Payor";
import Recipient from "../recipient/Recipient";
import Mutual from "../mutual/Mutual";
import Result from "../result/Result";

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            payorName: "",
            payorAge: "",
            payorIncome: "",
            payorProperty: "",
            payorEmployment: "",
            payorHealth: "",

            recipientName: "",
            recipientAge: "",
            recipientIncome: "",
            recipientEducation: "",
            recipientEmployment: "",
            recipientHealth: "",

            marriageDuration: "",
            children: "",
            lifestyle: "",

            alimonyResult: null,
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const income = Number(this.state.payorIncome || 0)
        const recipientIncome = Number(this.state.recipientIncome || 0)
        const children = Number(this.state.children || 0)
        const duration = Number(this.state.marriageDuration || 0)
        const lifestyle = this.state.lifestyle
        const payorProperty = this.state.payorProperty
        const payorEmployment = this.state.payorEmployment
        const recipientEmployment =  this.state.recipientEmployment
        const payorHealth = this.state.payorHealth
        const recipientHealth = this.state.recipientHealth
        const recipientEducation = this.state.recipientEducation
        
            //Property -  fixed value
        const proprtyMap = {
            low: 0,
            mid: 3000000,
            high: 7500000,
        }

        const propertyValue = proprtyMap[payorProperty] || 0

            // base alimony

        const baseAlimony = income + propertyValue

            // total % from employment type

        let percent = 0

        if (payorEmployment === "fulltime" && recipientEmployment === "unemployed") {
            percent = 0.25 * (income + propertyValue) / baseAlimony;
        }
        else if (payorEmployment === "fulltime" && recipientEmployment === "selfemployed") {
            percent = 0.15 * (income + propertyValue) / baseAlimony;
        }
        else if (payorEmployment === "fulltime" && recipientEmployment === "fulltime") {
            percent = 0.05 * (income + propertyValue) / baseAlimony;
        }
        else if (payorEmployment === "selfemployed" && recipientEmployment === "unemployed") {
            percent = 0.22 * (income + propertyValue) / baseAlimony;
        }
        else if (payorEmployment === "selfemployed" && recipientEmployment === "selfemployed") {
            percent = 0.13 * (income + propertyValue) / baseAlimony;
        }
        else if (payorEmployment === "selfemployed" && recipientEmployment === "fulltime") {
            percent = 0.05 * (income + propertyValue) / baseAlimony;
        }

            //health %
        if (payorHealth === "bad" && recipientHealth === "good"){
            percent -=  0.05
        }
        else if (payorHealth === "good" && recipientHealth === "bad"){
            percent += 0.05
        }

            //Children adjustment

        percent += children * 0.05

            //marriage duration

        if(duration <= 3) {
            percent += 0.03
        }
        else if (duration > 3 && duration <= 7){
            percent += 0.03
        }
        else if (duration > 7){
            percent += 0.07
        }

            //Life style adjsutment

        if(lifestyle === "normal"){
            percent -= 0.03
        }
        else if (lifestyle === "moderate"){
            percent += 0
        }
        else if (lifestyle === "high"){
            percent += 0.05
        }

            //Recipient Education
        if(recipientEducation === "UG"){
            percent += 0.03
        }
        else if(recipientEducation === "PG"){
            percent -= 0.03
        }

            //final alimony
        const rawAlimony = baseAlimony * percent
        const finalAlimony = Math.min(Math.max(0, rawAlimony), 20000)
        this.setState({ alimonyResult: Math.round(finalAlimony) })
    }


    render() {
        return (
            <>
                <form className={styles.mainScreen} onSubmit={this.handleSubmit}>
                    <div className={styles.formInputs}>
                        <Payor values={this.state} onChange={this.handleChange} />
                        <Recipient values={this.state} onChange={this.handleChange} />
                        <Mutual values={this.state} onChange={this.handleChange} />

                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Submit All
                    </button>
                    
                    <Result amount={this.state.alimonyResult}/>

                </form>
            </>
        )
    }
}
