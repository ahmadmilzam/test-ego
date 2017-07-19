const fs =  require('fs')

getdata = {
  fromjson(req,res) {
    var url = ''
    if (!req.body.url) {
      url = './json/main.json'
    }else {
      url = `./json/${req.body.url}`
    }
    console.log(url);
    const data = fs.readFileSync(url)
    res.send(data)
  }
}

module.exports = getdata
