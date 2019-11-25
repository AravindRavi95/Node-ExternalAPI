const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')

const http = require('http')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get("/request", (req,res) =>{
    apiCallFromRequest.callApi(function(response){
        //console.log(JSON.stringify(response));
        res.write(JSON.stringify(response));
        res.end();
    });
})

app.get("/node", (req,res) =>{
    apiCallFromNode.callApi(function(response){
        res.write(response);
        res.end();
    });
})

// http.createServer((req, res) => {
//         if(req.url === "/request"){
//             apiCallFromRequest.callApi(function(response){
//                 //console.log(JSON.stringify(response));
//                 res.write(JSON.stringify(response));
//                 res.end();
//             });
//         }
//         else if(req.url === "/node"){
//             apiCallFromNode.callApi(function(response){
//                 res.write(response);
//                 res.end();
//             });
//         }
        
//         // res.end();
// }).listen(3000);

// console.log("service running on 3000 port....");