console.log('Cities Index Ready...');
const API = 'http://localhost:3001';

const getAllCities = () => {
    fetch(`${API}/api/v1/cities`, {
        method: 'GET'
    })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)''
        })
};