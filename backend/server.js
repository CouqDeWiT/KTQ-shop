const express =require('express');
const cors = require('cors');
const{v4:uuidv4} = require('uuid');
const functions = require("firebase-functions");
const { useDispatch } = require('react-redux');
const stripe=require('stripe')('sk_test_51K7kqoIcuazq9BbEJQ3WZ47tLGOhrpPViTqSMavf19a8sKytYbqFa2OgbWQfp7NztJoLNRiOEDp3dAsbYlk9jEtj00qfh72RIV');

const app =express();
app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.send('welcome');
})
app.listen(9000,() => {
    console.log('listening on port 9000')
})

app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
    });

// - Listen command
exports.api = functions.https.onRequest(app);



const PORT = process.env.PORT || 8080;  
app.listen(PORT, console.log(`Server started on port ${PORT}`));