import { fetchAdvice } from "../services/DataServices.js";
import { useState } from "react";

const AdviceCard = () => {
    const [advice, setAdvice] = useState("Click For Advice")
    const [adviceId, setAdviceId] = useState("")

    const getAdvice = async () => {
        const data = await fetchAdvice();
        setAdviceId(data.slip.id);
        setAdvice(`"${data.slip.advice}"`);
        console.log(data.slip);
    }

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-[hsl(217,19%,24%)] max-w-[335px] md:max-w-[45%] md:min-w-[540px] w-[540px] rounded-[15px]">
                    <h1 className="text-center text-[hsl(150,100%,66%)] mt-8">A D V I C E #{adviceId}</h1>
                    <h1 className="text-center text-[hsl(193,38%,86%)] px-10 mt-7 text-[28px] font-extrabold">{advice}</h1>
                    <div className="flex justify-center relative top-6">
                        <img className="md:hidden" src="/assets/images/pattern-divider-mobile.svg" alt="Divider Mobile" />
                        <img className="hidden md:block" src="/assets/images/pattern-divider-desktop.svg" alt="Divider Desktop" />
                    </div>

                    <div className="flex mt-6 justify-center relative top-[30px]">
                        <button onClick={getAdvice} className="bg-[hsl(150,100%,66%)] aspect-square p-4 rounded-full shadow-lg hover:shadow-[0_0_25px_2px_hsl(150,100%,66%)]">
                            <img src="/assets/images/icon-dice.svg" alt="dice" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdviceCard;
