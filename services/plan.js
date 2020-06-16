import { client } from './config'

export const Plan = () => client.get("api/package")
