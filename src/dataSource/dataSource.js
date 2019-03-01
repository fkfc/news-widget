import request from 'superagent';

export default function get(requestUrl, getQueries = {}) {
  return new Promise(
    (resolve, reject) => request.get(requestUrl)
      .query(getQueries)
      .end((error, response) => {
        if (response && response.status === 200) {
          resolve(response);
        } else {
          reject(error);
        }
      }),
  );
}
