export const PostAPI = (endPoint, datas, method) => {
    let baseURL = 'http://localhost:8000/api/';
     return new Promise((resolve, reject) => {
        fetch(baseURL + endPoint, {
            method: method,
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(datas)
        })
        .then(response => response.json())
        .then(resJson => { resolve(resJson) })
        .catch(err => reject(err))
     });
}