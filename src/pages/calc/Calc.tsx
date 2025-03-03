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
        <div className="flex flex-col border border-black w-[400px] gap-5">
            <p className="w-full text-center bg-zinc-100 font-bold text-lg">IMC calculation</p>
            <Form label="weight" state={weight} funcState={setWeight}/>
            <Form label="height" state={height} funcState={setHeight}/>
            <button className="bg-indigo-300 text-white mx-2 p-1 rounded-lg cursor-pointer" onClick={calculate}>Calculate</button>
            <p className="bg-zinc-100 p-1">Result: {imc.toFixed(2)}</p>
            <Table imc={imc} />
        </div>
    )
}