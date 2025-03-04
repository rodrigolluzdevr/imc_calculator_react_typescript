import { useState } from "react"
import Form from "@/components/Form"
import TableImc from "@/components/Tableimc"

export default function CalcImc() {
    const [weight, setWeight] = useState<string>('')
    const [height, setHeight] = useState<string>('')

    return (
        <div>
            <p>IMC calculation</p>
            <Form label="weight" state={weight} funcState={setWeight}/>
            <Form label="height" state={height} funcState={setHeight}/>
            <button>Calculate</button>
            <TableImc />
        </div>
    )
}