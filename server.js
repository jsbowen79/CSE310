const express = require("express"); 
const cors = require("cors"); 
const app = express(); 
const PORT = 8080; 
const professionalRoute = require("./routes/index.js")


//Routes
app.use(cors()); 
app.use ("/", professionalRoute)
app.use("/professional", professionalRoute); 


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
}); 
