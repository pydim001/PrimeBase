const express = require('express');

const app = express();

app.use(express.json());
app.use((req: any, res: any, next: any) =>{
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
    if('OPTIONS' == req.method){
        res.send(200);
    }else{
        next();
    }
});

app.post('/signup', (req: any, res: any) => {
    res.send(req.body);
  })

app.get('/', (req: any, res: any) => {
    res.send("Server 4201 is running!!!")
})

app.get('/signup', (req: any, res: any) => {
    res.send({"username": "yessir", "password": "sheesh"})
})

app.listen(4201, function(){
    console.log("Server 4201 is running!!!")
})