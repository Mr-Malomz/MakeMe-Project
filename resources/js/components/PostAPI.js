export const PostAPI = (endPoint, datas, method) => {
    let baseURL = 'http://localhost:8000/api/';
     return new Promise((resolve, reject) => {
        fetch(baseURL + endPoint, {
            method: method,
            body: JSON.stringify(datas)
        })
        .then(response => response.json())
        .then(resJson => { resolve(resJson) })
        .catch(err => reject(err))
     });
}