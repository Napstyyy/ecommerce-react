import React from 'react';
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY="pk_test_51MWhnQLqSKdo0hycXMn83xWYDKpUKKwiKqHtT8xNluaapDbsRHvDv3kQlWaou0BSO067jUaKzfsxEToeyib5IQzP00nfO7QvR7" //se coloca la llave publica

const stripeTestPromise = loadStripe(PUBLIC_KEY); //se crea una variable en la que se almacena la key

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}> {/*se llama al elemento al formulario de del pago  */}
                <PaymentForm/>
        </Elements>
    )
}