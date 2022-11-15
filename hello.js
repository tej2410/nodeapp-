const express = require('express')
const app= express()



app.get('/', (req,res)=>{
    res.send("I'm inside docker image !")
});

app.listen(1000, ()=>{
console.log("port is listening on 1000")

})