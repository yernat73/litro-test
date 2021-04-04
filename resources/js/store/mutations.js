import { startCase } from "lodash";

export default {
    
    SET_CAR_BRANDS(state, carBrands){
        state.carBrands = carBrands
    },

    SET_CAR_BRAND_MODES(state, carBrandModes){
        state.carBrandModes = carBrandModes
    },

    PUSH_CAR(state, formData){
        state.cars.push(formData)
    },
    CLEAR_CARS(state){
        state.cars = [];
    },

    SET_CAR_VALIDATION_ERRORS(state, errors){
        state.carValidationErrors = errors
    },

    SET_USER_REGISTRATION_ERRORS(state, errors){
        state.userRegistrationErrors = errors
    },
}