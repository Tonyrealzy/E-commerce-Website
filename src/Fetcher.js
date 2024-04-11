const BASE_URL = 'http://localhost:3001';

const Fetcher = async (url) => {
    let responseObject = { errorMessage: '', data: [] };

    try {
        const response = await fetch(BASE_URL + url);
        if (!response.ok) {
            throw new Error(`Error ${response.status} occured while fetching response!`);
        }
        const responseData = await response.json();
        responseObject.data = responseData;
    }
    catch(error) {
        responseObject.errorMessage = error.message;
    }

    return responseObject;
}

export const getCategories = () => {
    return Fetcher("/categories");
}

export const getProductsById = (id) => {
    return Fetcher("/products/?catId=" + id);
}