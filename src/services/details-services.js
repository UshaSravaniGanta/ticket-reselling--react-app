import details from '../data/details.json';

const DETAILS_API = 'http://localhost:4000/api/details';

export const findDetails = async () => {
    // const response = await axios.get(DETAILS_API);
    // const details = response;
    // await console.log(JSON.stringify(details) + " in services");
    return details;
}

export const createReview = async (review) => {
    console.log(review)
    // const response = await axios.post(DETAILS_API, review)
    // return response.data;
}
