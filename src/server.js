const express =require('express');
const cors = require('cors');
const{v4:uuidv4} = require('uuid');
const stripe=require('stripe')('sk_test_51K7kqoIcuazq9BbEJQ3WZ47tLGOhrpPViTqSMavf19a8sKytYbqFa2OgbWQfp7NztJoLNRiOEDp3dAsbYlk9jEtj00qfh72RIV');

const app =express();
app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.send('welcome');
})
app.listen(8080,() => {
    console.log('listening on port 9000')
})
  
const PORT = process.env.PORT || 8080;  
app.listen(PORT, console.log(`Server started on port ${PORT}`));