
import http from '../common/http'

/**
 * 登录
 */
export const login = data => http.post("/api/aaa/test", data)


/**
 * 注册
 */
export const register = (data) => {
    let new_data = {
        userName: data.name,
        password: data.pwd
    }

    new_data.time = new Date()

    return http.get("/api/bbb/test", new_data)
}
