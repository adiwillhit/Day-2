const express = require("express");
// require the package 

// then call the funciton 
// and store the instance in the variable 

const app = express();

// now we wil start the server


// now lest get the get commmand

/// these all below are the api request which are we set 

app.get('/',(req,res)=>{
    // now we will send the response to the servere 

    res.send("hey therer the server is running ");
});


// lets create some more req 

app.get("/about",(req,res)=>{
    // now this fot he about page 

    res.send("this is the about page ");
})


app.listen(3000);