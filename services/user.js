import { client } from './config'

export const userRegister = params => client.post("api/user/register", params)
export const verifyMail = params => client.post("api/user/verified", params)
export const login = params => client.post("api/user/login", params)