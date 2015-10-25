import request from 'superagent';

export const post = ({ url, data, formData }) => {
  return new Promise((resolve, reject) => {
    const myRequest = request.post(url);

    if (data) { myRequest.type('form').send(data); }
    if (formData) { myRequest.send(formData); }

    myRequest.end((err, res) => {
      if (err) {
        const { error } = res;
        error.message = res.body.error || error.message;
        reject(error);
      } else {
        resolve(res.body);
      }
    });
  });
};
