import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function DataImc() {
    const [weight, setWeight] = useState<any>('');
    const [height, setHeight] = useState<any>('');
    const [imc, setImc] = useState<any>('');
    const [name, setName] = useState<any>('');
    const [date, setDate] = useState<any>('');

    const router = useRouter()

    const {p_weight, p_height, p_imc} = router.query

    useEffect(() => {
        setWeight(p_weight),
        setHeight(p_height),
        setImc(p_imc),
        setDate('2024-12-17')
    })

    return (
        <div>
            <div>
                <div className='form'>
                    <label>Name</label>
                    <input className="input" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='form'>
                    <label>Weight</label>
                    <input className="input" value={weight} readOnly></input>
                </div>
                <div className='form'>
                    <label>Height</label>
                    <input className="input" value={height} readOnly></input>
                </div>
                <div className='form'>
                    <label>IMC</label>
                    <input className="input" value={imc} readOnly></input>
                </div>
                <div className='form'>
                    <label>Date</label>
                    <input className="input" value={date} readOnly></input>
                </div>
                <div className='form'>
                    <button className="bg-indigo-300 text-white mx-2 p-1 rounded-lg cursor-pointer">to record</button>
                </div>
            </div>
            <div className="grid">
                <div className="gridRowTitle bg-indigo-300 text-white">
                    <div className="gridTitle">Name</div>
                    <div className="gridTitle">Weight</div>
                    <div className="gridTitle">Height</div>
                    <div className="gridTitle">IMC</div>
                    <div className="gridTitle">Date</div>
                </div>
                <div className="gridRowDate">
                    <div className="gridRows">
                        <div className="gridRow">Name 01</div>
                        <div className="gridRow">Weight 01</div>
                        <div className="gridRow">Height 01</div>
                        <div className="gridRow">IMC 01 </div>
                        <div className="gridRow">Date 01</div>
                    </div>
                </div>
            </div>
        </div>
    )
}