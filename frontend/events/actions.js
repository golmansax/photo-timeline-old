import { childRef } from '_client/firebase_ref';

export const saveEvent = (id, data) => {
  return new Promise((resolve, reject) => {
    childRef(`events/${id}`).set(data, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

export const removeEvent = (id) => {
  return new Promise((resolve, reject) => {
    childRef(`events/${id}`).remove((error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
