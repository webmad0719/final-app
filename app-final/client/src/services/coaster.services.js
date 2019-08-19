import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getCoasters = () => this.service.get('getAllCoasters')
    getOneCoaster = id => this.service.get(`getOneCoaster/${id}`)
    postCoaster = theNewCoaster => this.service.post(`postCoaster`, theNewCoaster)

}