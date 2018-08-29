
/*
    返回mock数据

    @param {object} getData  接口的GET数据
    @param {object} postData 接口的POST数据
 */
module.exports = (getData, postData) => {
    let data = {}

    if(postData.userId === 'xxx'){
        data = {
            code:1000,
            msg: '嗯...',
            data:{
                name:"aaa",
                age: 50
            },
            __data__: {
                get: getData,
                post: postData
            }
        }
    } else {
        data = {
            code:2000,
            msg: '啊...',
            data:{
                name:"bbb",
                age: 80
            },
            __data__: {
                get: getData,
                post: postData
            }
        }
    }

    return data
}

