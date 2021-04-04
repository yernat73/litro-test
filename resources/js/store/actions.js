import axios from "axios";

export default {
    
    

    async getCarBrands({ commit }){
        await axios.get('/api/car/brands')
        .then( response => {
            commit("SET_CAR_BRANDS", response.data)
        });
    },

    async getCarBrandModes({ commit }, id){
        await axios.get(`/api/car/modes/${id}`)
        .then( response => {
            commit("SET_CAR_BRAND_MODES", response.data)
        })
    },

    async validateCar({ commit }, formData){
        await axios.post('/api/car/validate', formData)
        .then( response => {
            commit("PUSH_CAR", formData)
            commit("SET_CAR_VALIDATION_ERRORS", [])
            commit("SHOW_CAR_VALIDATION_SUCCESS")
        })
        .catch( error => {
            commit("SET_CAR_VALIDATION_ERRORS", error.response.data.errors)
        })
    },


    async getUsers({ commit }){
        await axios.get('/api/users')
        .then( response => {
            commit("SET_USERS", response.data)
        });
    },

    async registerUser({ commit }, formData){
        await axios.post('/api/user/registration', formData)
        .then( response => {
            commit("SET_CAR_VALIDATION_ERRORS", [])
            commit("SET_USER_REGISTRATION_ERRORS", [])
            commit("SHOW_USER_REGISTRATION_SUCCESS")
        })
        .catch( error => {
            commit("SET_USER_REGISTRATION_ERRORS", error.response.data.errors)
        })
    }

}