/**
 * @author SURUCHI KAUR SIHRA
 * @description config url for APIs
 * @file Api Config File
 */

var SERVER = {
    DOG: "https://dog.ceo/api",
};

var BASE_URL = SERVER.DOG;

const CONFIG = {
    random: `${BASE_URL}/breeds/image/random`,
    breedList: `${BASE_URL}/breeds/list/all`,
    breed: `${BASE_URL}/breed/{breed-name}/images`,
    subBreed: `${BASE_URL}/breed/{breed-name}/{sub-vreed-name}/images`
};

export default CONFIG;