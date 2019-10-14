export const GetAPI = (endPoint) => {
    let baseURL = 'http://localhost:8000/api/';
    return new Promise((resolve, reject) => {
        fetch(baseURL + endPoint)
            .then(response => response.json())
            .then(resJson => {
                resolve(resJson)
            })
            .catch(err => reject(err))
    });
};
