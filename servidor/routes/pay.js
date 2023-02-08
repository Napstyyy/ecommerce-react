import Stripe from "stripe";//portal de pagos para conectarse a su api
const striper = Stripe('sk_test_51MWhnQLqSKdo0hycwt7WxpkMIdztbNpHbWNqsQecV2TV3g9dmQXvJaQLQDTKEMqU1mVsEPllIyoY9bylXdkjZYhh00bmJRQRC9'); //clave de acceso stripe para recibir el pago


//funcion que permite conectarse a la api y realizar los pagos
export const pay = async (req,res) => {
    let {amount, id} = req.body
    try {
        const payment = await striper.paymentIntents.create({
            amount,
            currency: 'COP',
            description: 'shop',
            payment_method: id,
            confirm: true
        })

        console.log('payment', payment);
        res.json({
            message: 'payment succesful',
            succes: true
        })
    } catch (error) {
        console.log('error', error);
        res.json({
            message:'payment failed',
            succes: false
        })
    }
}