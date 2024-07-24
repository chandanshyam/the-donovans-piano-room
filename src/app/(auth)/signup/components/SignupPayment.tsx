import { PayPalScriptProvider, PayPalButtons, PayPalNumberField, PayPalExpiryField, PayPalCardFieldsProvider, PayPalCVVField, usePayPalCardFields, PayPalCardFieldsForm } from "@paypal/react-paypal-js";
import Button1 from "@/components/atoms/Button1";
import { useState } from "react";
import Button2 from "@/components/atoms/Button2";
export default function SignupPayment() {
    const [displayCardFields, setDisplayCardFields] = useState(false)
  return (
    <div className='w-[24vw] 3xl:w-[26vw]'>
        <PayPalScriptProvider options={{clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ? process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID : "", components: ["buttons", "card-fields"], enableFunding: "venmo"}}>
            {!displayCardFields && (<>
                <Button1 style={{padding: "14px", marginBottom: "5%"}} text="Check out with credit card" onClick={()=>{setDisplayCardFields(true)}}></Button1>
                <PayPalButtons style={{shape: "pill"}}></PayPalButtons>
            </>)}

            {displayCardFields && 
                <PayPalCardFieldsProvider createOrder={async()=>{console.log("11");return ""}} onApprove={async()=>''} onError={async()=>''}>
                {/* <PayPalCardFieldsForm> */}

                    <PayPalNumberField />
                    <PayPalExpiryField />
                    <PayPalCVVField />
                    <SubmitPayment/>
                    <Button2 style={{marginTop: "4%"}} text="Cancel" onClick={()=>setDisplayCardFields(false)}></Button2>
                    
                {/* </PayPalCardFieldsForm> */}
                </PayPalCardFieldsProvider>
            }
            {/* <PayPalButtons style={{shape: "pill"}}></PayPalButtons> */}
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
    return <Button1 text="Check out" onClick={submitHandler} />;
};
