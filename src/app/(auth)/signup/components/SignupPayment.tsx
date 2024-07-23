import { PayPalScriptProvider, PayPalButtons, PayPalNumberField, PayPalExpiryField, PayPalCardFieldsProvider, PayPalCVVField, usePayPalCardFields, PayPalCardFieldsForm } from "@paypal/react-paypal-js";
import "../../../../styles/hide-input-number-arrows.css"
import Button1 from "@/components/atoms/Button1";
export default function SignupPayment() {
  return (
    <div className='w-[24vw] 3xl:w-[26vw]'>
        <PayPalScriptProvider options={{clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ? process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID : "", components: ["buttons", "card-fields"], enableFunding: "venmo"}}>
            <PayPalCardFieldsProvider createOrder={async()=>{console.log("11");return ""}} onApprove={async()=>''} onError={async()=>''}>
                {/* <PayPalCardFieldsForm> */}

                <PayPalNumberField />
                
                <PayPalExpiryField />
                <PayPalCVVField />
                <SubmitPayment/>
                {/* </PayPalCardFieldsForm> */}
            </PayPalCardFieldsProvider>
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
