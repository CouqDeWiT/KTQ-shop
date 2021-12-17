const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51K7MqtLxgqhGphg23v376kLn62suv9cy2rgPv4iemVV4urEQu1fkMuyverTF14iw7EaKx76I7kgIc2nATLJE6siM00wTmeLKoM"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create",async (request, response)  =>{
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