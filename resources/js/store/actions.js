import axios from "axios";

export default {
    async register({ commit }, data){
        await axios.post('/api/register', data).then( response => {
            console.log("REGISTERED")
        });
    },
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
        })
        .catch( error => {
            commit("SET_CAR_VALIDATION_ERRORS", error.response.data.errors)
        })
    },

    async registerUser({ commit }, formData){
        await axios.post('/api/user/registration', formData)
        .then( response => {
            commit("CLEAR_CARS")
        })
        .catch( error => {
            commit("SET_USER_REGISTRATION_ERRORS", error.response.data.errors)
        })
    }

}