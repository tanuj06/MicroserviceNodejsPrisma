const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const CookieParser = require('cookie-parser');
require('dotenv').config();

//default middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//cookie middleware
app.use(CookieParser())


const app = express();

const htmlPath = path.join(__dirname, 'index.html')

app.get('/', (req, res)=>
{
    fs.readFile(htmlPath, 'utf8', (err,data)=>{
        if(err)
        {
                console.log(err);
                res.status(500).send('Internal Server Error');
        }
        else{
            res.send(data);
        }
    })
    
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });

