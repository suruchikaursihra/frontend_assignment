import { GET_BREEDS, GET_BREED_IMAGES, GET_RANDOM_IMAGE, GET_SUBBREEDS_IMAGES } from './dog.types';

/**
 * @description It uses the action it receives to determine this change and update store state
 */

const initialState = {
    images: [],
    breedsList: []
};

export default function DogReducer(state = initialState, action) {

    switch (action.type) {
        case GET_BREEDS:
            return {
                ...state,
                breedsList: action.breedsList
            };

        case GET_RANDOM_IMAGE:
            return {
                ...state,
                images: action.images
            };

        case GET_BREED_IMAGES:
            return {
                ...state,
                images: action.images
            };

        case GET_SUBBREEDS_IMAGES:
            return {
                ...state,
                images: action.images
            };

        default:
            return state;
    }
}