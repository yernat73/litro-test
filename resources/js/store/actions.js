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
    }

}