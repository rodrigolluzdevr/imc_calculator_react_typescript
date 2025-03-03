export default function Table() {
    return (
        <div className="mx-2 mb-2">
            <div className="flex">
                <div className="w-1/2 border text-center font-bold">Classification</div>
                <div className="w-1/2 border text-center font-bold">IMC</div>
            </div>
            <div className="flex">
                <div className="w-1/2 border">Less of weight</div>
                <div className="w-1/2 border">Less than 18,5</div>
            </div>
            <div className="flex">
                <div className="w-1/2 border">Normal weight</div>
                <div className="w-1/2 border">Between 18.5 and 24.9</div>
            </div>
            <div className="flex">
                <div className="w-1/2 border">Overweight</div>
                <div className="w-1/2 border">Between 25 and 29,9</div>
            </div>
            <div className="flex">
                <div className="w-1/2 border">Obesity Grade I</div>
                <div className="w-1/2 border">Between 30 and 34</div>
            </div>
            <div className="flex">
                <div className="w-1/2 border">Obesity Grade II</div>
                <div className="w-1/2 border">Between 35 and 39</div>
            </div>
            <div className="flex">
                <div className="w-1/2 border">Obesity Grade III</div>
                <div className="w-1/2 border">Greater than 40</div>
            </div>
        </div>
    )
}