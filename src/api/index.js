import axios from 'axios'
import Cookies from 'js-cookie';
var username = Cookies.get('username')
var name = Cookies.get('firstname')+' '+Cookies.get('lastname')
var referID = Cookies.get('referID')
const api = axios.create({
    baseURL: 'http://192.168.43.191:8080/api',
})

//console.log("COSOSOSSO"+name)

export const insertMovie = payload => api.post(`/createvaccine`, payload)
export const getAllMovies = () => api.get(`/vaccines`)
export const updateMovieById = (id, payload) => api.put(`/updatevac/${id}`, payload)
export const deleteMovieById = id => api.delete(`/vaccine/${id}`)
export const getMovieById = id => api.get(`/vaccine/${id}`)

export const getAllRecord = username => api.post(`/records`,{ params: { username: username }})
export const getRecordByName = name => api.get(`/records/${name}`)
export const insertRecord = payload => api.post(`/record`, payload)


export const UserRegistration = payload => api.post(`/register`, payload)
export const UsernameValidation = payload => api.post(`/validateUsername`, payload)
export const getAllUsers = payload => api.get(`/registers`)

export const getAppointment = name => api.post(`/appointment`,{ params: { patname: Cookies.get('firstname')+' '+Cookies.get('lastname') }})
export const getAppointmentById = (id ,date)=> api.get(`/appointmentid/${id}`)
export const addAppointment = payload => api.post(`/addappointment`, payload)
export const editAppointment = (id,payload) => api.put(`/appointment/${id}`, payload)
export const deleteAppointmentById = (id,date) => api.delete(`/appt/${id}`)

//export const UserLogin = payload => api.post(`/login`, payload)
export const getNews = () => api.get(`/news`)

export const addQrcode = payload => api.post(`/addqrcode`, payload)
export const getQrcode = () => api.get(`/getqrcode`)

export const addMember = payload => api.post(`/addmember`, payload)
export const getMember = (referID) => api.get(`/members`,{ params: { referID: Cookies.get('referID') }})

const apis = {
   // url,
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
    getAllRecord,
    getRecordByName,
    insertRecord,
    UserRegistration,
    UsernameValidation,
    getAllUsers,
    editAppointment,
    addAppointment,
    getAppointment,
    getAppointmentById,
    deleteAppointmentById,
    getNews,
    addQrcode,
    getQrcode,
    addMember,
    getMember
  //  UserLogin
}

export default apis