interface TableImcProps {
    imc: number;
}

export default function Table(props: TableImcProps) {
    return (
        <div className="mx-2 mb-2">
            <div className="flex">
                <div className="w-1/2 border text-center font-bold">Classification</div>
                <div className="w-1/2 border text-center font-bold">IMC</div>
            </div>
            <div className={"flex " + (props.imc < 18.5 ? "dest": "")}>
                <div className="w-1/2 border text-center">Less of weight</div>
                <div className="w-1/2 border text-center">Less than 18,5</div>
            </div>
            <div className={"flex " + (props.imc >= 18.5 && props.imc <= 24.9 ? "dest": "")}>
                <div className="w-1/2 border text-center">Normal weight</div>
                <div className="w-1/2 border text-center">Between 18.5 and 24,9</div>
            </div>
            <div className={"flex " + (props.imc >= 25 && props.imc <= 29.9 ? "dest": "")}>
                <div className="w-1/2 border text-center">Overweight</div>
                <div className="w-1/2 border text-center">Between 25 and 29,9</div>
            </div>
            <div className={"flex " + (props.imc >= 30 && props.imc <= 34.9 ? "dest": "")}>
                <div className="w-1/2 border text-center">Obesity Grade I</div>
                <div className="w-1/2 border text-center">Between 30 and 34,9</div>
            </div>
            <div className={"flex " + (props.imc >= 35 && props.imc <= 39.9 ? "dest": "")}>
                <div className="w-1/2 border text-center">Obesity Grade II</div>
                <div className="w-1/2 border text-center">Between 35 and 39,9</div>
            </div>
            <div className={"flex " + (props.imc >= 40 ? "dest": "")}>
                <div className="w-1/2 border text-center">Obesity Grade III</div>
                <div className="w-1/2 border text-center">Greater than 40</div>
            </div>
        </div>
    )
}