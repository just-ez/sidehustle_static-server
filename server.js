 const http = require('http')
 const fs = require('fs')
 const url = require('url');
 const os = require('os')

 http.createServer((req,res)=>{
   console.log(req.url);
   if (req.url=='/') {
       fs.readFile('./pages/index.html',(err,data)=>{
        res.writeHead(200,{'content-type': 'text/html'})
  
      res.write(data)
      res.end()
       })
   }
   else if (req.url == "/about") {
    fs.readFile('./pages/about.html',(err,data)=>{
        res.writeHead(200,{'content-type': 'text/html'})
        
         res.write(data)
         res.end()
          })
   }
   else if (req.url == "/sys") {
  
  let osinfo ={
    Hostname: os.hostname(),
    platform: os.platform(),
    architecture: os.arch(),
    numberofcpus: os.cpus(),
    NetworkInterface: os.networkInterfaces(),
    uptime: os.uptime()
  }
  let osinfo_str = JSON.stringify(osinfo);

console.log(osinfo)
    fs.appendFile('osinfo.json',osinfo_str,(err)=>{
        
    })

    fs.readFile('./pages/sys.html',(err,data)=>{
        res.writeHead(201,{'content-type': 'text/plain'})
         res.write(data)
         res.end()
          })
        
   }
   else if (req.url !== "/" || req.url !== "/about" ) {
    fs.readFile('./pages/404.html',(err,data)=>{
        res.writeHead(404,{'content-type': 'text/html'})
       
         res.write(data)
         res.end()
          })
   }
 }).listen(7000)