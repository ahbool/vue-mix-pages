const fs = require('fs')
const url = require('url')
const path = require('path')
const http = require('http')
const querystring = require('querystring')
const config = require('../build/config')

const API_DIR = './api'

/*创建服务*/
http.createServer((req, res) => {
    let getData = ''
    let postData = ''

    getData = querystring.parse(url.parse(req.url).query)

    req.on('data', (chunk) => {
        postData += chunk
    })

    req.on('end', () => {
        //拿到接口post数据
        postData = querystring.parse(postData)
        handleResponseData(req, res, getData, postData)
    })
}).listen(config.mockPort, () => {
    console.log(`mock服务器运行在 http://localhost:${config.mockPort}`)
})


/*获取mock数据*/
function handleResponseData(req, res, getData, postData){

    //url路径(不包含host)
    let pathName = url.parse(req.url).pathname

    //获取文件名
    let fileName = pathName.substr(pathName.lastIndexOf('/') + 1)

    //本地路径
    let localFile = path.join(__dirname, API_DIR, fileName)

    //接口对应的本地mock文件
    let jsFile = localFile + '.js'
    let jsonFile = localFile + '.json'

    /*
      如果"api接口名.js"存在，输出js文件执行结果
    */
    if(fs.existsSync(jsFile)){
        delete require.cache[jsFile]
        let jsFileModule = require(jsFile)
        let data = jsFileModule(getData, postData)

        httpResponse({
            response: res,
            httpState: 200,
            httpMsg: JSON.stringify(data)
        })

        return
    }

    /*
      如果"api接口名.json"存在，直接输出json内容，否则输出404
    */
    fs.readFile(jsonFile, 'utf8', (err, data) => {
        if(err) {
            httpResponse({
                response: res,
                httpState: 404
            })
        } else {
            httpResponse({
                response: res,
                httpState: 200,
                httpMsg: data.toString()
            })
        }
    })
}

/*输出mcok数据*/
function httpResponse({response, httpState, httpMsg}){
    if(httpState === 404){
        response.writeHead(404)
        response.write('404 Not Found')
    } else {
        response.writeHead(httpState, {
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json'
        })
        response.write(httpMsg)
    }

    response.end()
}
