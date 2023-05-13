import axios from "axios"


const BASE_URL ="http://localhost:3002/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTkzMzE1OTMzMDJkYWM5ZWQ3MGE5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzcwMzcwNSwiZXhwIjoxNjgzOTYyOTA1fQ.Uxr06WBvTbkBgu1J2DDTu8bAULTJl2zrsAvo-J3Fpg8"
export const publicRequest = axios.create({
    baseURL:BASE_URL,
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`
}})