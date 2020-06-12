import { client } from './config'

export const Plan = (token) => client.get("api/package",{headers:{
    "Authorization":token
}})
