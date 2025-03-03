import { useState } from "react"
import Form from "@/components/Form"
import Table from "@/components/Table"

export default function Calc() {
    const [weight, setWeight] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)
    const [imc, setImc] = useState<number>(0)

    function calculate() { 
        let res = weight / (height*height)
        setImc(res)
    }

    return (
        <div>
            <p>IMC calculation</p>
            <Form label="weight" state={weight} funcState={setWeight}/>
            <Form label="height" state={height} funcState={setHeight}/>
            <button onClick={calculate}>Calculate</button>
            <p>Result: {imc}</p>
            <Table />
        </div>
    )
}