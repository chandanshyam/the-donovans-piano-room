import { PayPalScriptProvider, PayPalButtons, PayPalNumberField, PayPalExpiryField, PayPalCardFieldsProvider, PayPalCVVField, usePayPalCardFields, PayPalCardFieldsForm, PayPalCardFieldsComponentOptions, CardFieldStyle } from "@paypal/react-paypal-js";
import Button1 from "@/components/atoms/Button1";
import { useState } from "react";
import Button2 from "@/components/atoms/Button2";
import SignupHeader from "./SignupHeader";
import { useSetAtom } from "jotai";
import { singupStepAtom } from "@/utils/stores";
export default function SignupPayment() {
    const [displayCardFields, setDisplayCardFields] = useState(false)
    const setSingupStep = useSetAtom(singupStepAtom)
    const fieldStyle = {
        'input': {
            "border": "2px solid #391F0F",
            "borderRadius": "15px",
        }, ".invalid": {
            "color": "black",
            "border": "none"
        },
        ":focus": {
            "border": "none"
        }
    }
  return (
    <div className='w-[24vw] 3xl:w-[26vw]'>
        <SignupHeader navName='Membership' navLink='' stepNum={4} stepName='Add your payment method' onClickNav={()=>setSingupStep(3)} />
        <PayPalScriptProvider options={{clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, components: ["buttons", "card-fields"], enableFunding: "venmo"}}>
            {!displayCardFields && (<>
                <Button1 style={{padding: "15px", marginBottom: "5%"}} text="Check out with credit card" onClick={()=>{setDisplayCardFields(true)}}></Button1>
                <PayPalButtons style={{shape: "pill"}}></PayPalButtons>
            </>)}

            {displayCardFields && 
                <PayPalCardFieldsProvider createOrder={async()=>{console.log("11");return ""}} onApprove={async()=>''} onError={async()=>''}>
                {/* <PayPalCardFieldsForm> */}
                    <label className="relative w-full">
                        <span className="absolute top-[16px] left-[15px] z-50 text-[#391F0F] font-medium w-[24vw]">Card number</span>
                        <PayPalNumberField style={fieldStyle} placeholder="" />
                    </label>
                    <label className="relative w-full">
                        <span className="absolute top-[16px] left-[15px] z-50 text-[#391F0F] font-medium w-[24vw]">Expiration date</span>
                        <PayPalExpiryField style={fieldStyle} placeholder="" />
                    </label>
                    <label className="relative w-full">
                        <span className="absolute top-[16px] left-[15px] z-50 text-[#391F0F] font-medium w-[24vw]">CVV</span>
                        <PayPalCVVField style={fieldStyle} placeholder="" />
                    </label>
                    <SubmitPayment/>
                    <Button2 style={{marginTop: "4%"}} text="Cancel" onClick={()=>setDisplayCardFields(false)}></Button2>
                    
                {/* </PayPalCardFieldsForm> */}
                </PayPalCardFieldsProvider>
            }
        </PayPalScriptProvider>
    </div>
  )
}

const SubmitPayment = () => {
    const {cardFieldsForm} = usePayPalCardFields();

    function submitHandler() {
        cardFieldsForm?.submit()
        .then(() => {
            // submit successful
        })
        .catch(() => {
            // submission error
        });
    }
    return <Button1 text="Check out" onClick={submitHandler} style={{marginTop: ".5%"}} />;
};
