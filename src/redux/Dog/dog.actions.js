import { GET_BREEDS, GET_BREED_IMAGES, GET_RANDOM_IMAGE, GET_SUBBREEDS_IMAGES } from './dog.types';
import CONFIG from '../../configuration';
import { CallApi } from '../../shared/services/api.service';

/**
 * @description get breed list
 * @returns breedsList
 */
export const getBreeds = () => {
    return dispatch => {
        CallApi("GET", CONFIG.breedList, "")
            .then((response) => {
                if (response.status === "success") {
                    return dispatch({
                        type: GET_BREEDS,
                        breedsList: response.message
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
}

/**
 * @description get random dog image
 * @returns images
 */
export const getRandomImage = () => {
    return dispatch => {
        CallApi("GET", CONFIG.random, "")
            .then((response) => {
                if (response.status === "success") {
                    return dispatch({
                        type: GET_RANDOM_IMAGE,
                        images: [response.message]
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
};

/**
 * @description get dogs subBreed image 
 * @param {*} breeds 
 * @param {*} subBreeds 
 * @returns images
 */
export const getSubBreed = (breeds, subBreeds) => {
    return dispatch => {
        let url = CONFIG.subBreed;
        url = url.replace("{breed-name}", breeds);
        url = url.replace("{sub-vreed-name}", subBreeds);
        CallApi("GET", url, "")
            .then((response) => {
                if (response.status === "success") {
                    return dispatch({
                        type: GET_SUBBREEDS_IMAGES,
                        images: response.message
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
};

/**
 * @description get dog breed images
 * @param {*} breeds 
 * @returns images
 */
export const getBreedImage = (breeds) => {
    return dispatch => {
        let url = CONFIG.breed;
        url = url.replace("{breed-name}", breeds);
        CallApi("GET", url, "")
            .then((response) => {
                if (response.status === "success") {
                    return dispatch({
                        type: GET_BREED_IMAGES,
                        images: response.message
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
};