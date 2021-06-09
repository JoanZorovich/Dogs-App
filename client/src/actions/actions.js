import axios from 'axios';

export const GET_ALL_BREEDS = 'GET_ALL_BREEDS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const GET_BREED_DETAIL = 'GET_BREED_DETAIL';
export const SEARCH_BREED = 'SEARCH_BREED';
export const FILTERED_BREED = 'FILTERED_BREED';
export const A_Z = 'A_Z';
export const Z_A = 'Z_A';
export const MAX_MIN = 'MAX_MIN';
export const MIN_MAX = 'MIN_MAX';


export function getTemperaments(){
    return async function (dispatch) {
    try{
        const request= await axios.get(`http://localhost:3001/temperament`)
        dispatch({type: GET_TEMPERAMENTS, payload: request.data})
    }catch(err){console.log(err)}
    } 
}

export function getAllBreeds(){
    return async function (dispatch) {
    try{
        const request= await axios.get(`http://localhost:3001/dogs`)
        dispatch({type: GET_ALL_BREEDS, payload: request.data})
    }catch(err){console.log(err)}
    } 
}


export function searchBreedName(name){
    return async function (dispatch) {
    try{
        const request= await axios.get(`http://localhost:3001/dogs?name=${name}`)
        dispatch({type: SEARCH_BREED, payload: request.data})
    }catch(err){console.log(err)}
    } 
}


export function getBreedDetail(id){
    return async function (dispatch) {
        try{
            const request= await axios.get(`http://localhost:3001/dogs/${id}`)
            dispatch({type: GET_BREED_DETAIL, payload: request.data})
        }catch(err){console.log(err)}
    }
}


export function filteredBreed(payload) {
    console.log(payload)
    return {
        type: FILTERED_BREED,
        payload
    }
}

export function orderAZ(order) {
    return {
        type: order
    }
}

export function orderWeight(order) {
    return {
        type: order
    }
}