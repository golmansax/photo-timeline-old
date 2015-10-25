import cloudinary from 'cloudinary';
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from './config';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export function uploadImage(imagePath) {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(imagePath, (res) => {
      resolve(res);
    });
  });
}
