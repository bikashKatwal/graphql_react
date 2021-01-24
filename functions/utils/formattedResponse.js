module.exports = (statusCode, body)=>{
    return {
        statusCode:200,
        body:JSON.stringify(body)
    }
}