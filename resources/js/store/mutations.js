import { startCase } from "lodash";

export default {
    
    SET_CAR_BRANDS(state, carBrands){
        state.carBrands = carBrands
    },
    SET_CAR_BRAND_MODES(state, carBrandModes){
        state.carBrandModes = carBrandModes
    },
    PUSH_CAR(state, car){
        state.cars.push(car)
    },
    CLEAR_CARS(state){
        state.cars = [];
    },
    SET_CAR_VALIDATION_ERRORS(state, errors){
        state.carValidationErrors = errors
    },
    SHOW_CAR_VALIDATION_SUCCESS(state){
        state.carValidationSuccess = true

        setTimeout(() => {
            state.carValidationSuccess = false
        }, 3000)
    },




    SET_USERS(state, users){
        state.users = users
    },
    SET_USER_REGISTRATION_ERRORS(state, errors){
        state.userRegistrationErrors = errors
    },
    PUSH_USER(state, user){
        user.cars = state.cars
        state.cars = []
        state.users.push(user)
    },
    SHOW_USER_REGISTRATION_SUCCESS(state){
        state.userRegistrationSuccess = true
        setTimeout(() => {
            state.userRegistrationSuccess = false
        }, 3000)
    }
}