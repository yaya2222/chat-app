import fs from "fs"
import cloudinary from "../config/cloudinary";

async function convertImageToBase64(image: File) {
  const fileBuffer = await image.arrayBuffer();
  const mime = image.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(fileBuffer).toString('base64');
  const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
  return fileUri
}

export async function uploadToCloudinary(imageUrl: string) {
  let secure_url
  try {
    const data = await cloudinary.uploader.upload(imageUrl, { folder: process.env.CLOUDINARY_FOLDER })
    secure_url = data.secure_url
  } catch (error) {
    console.log({ error });
  } finally {
    
    fs.unlink(imageUrl, (err) => {
      if (err) {
        console.error(`Error deleting file: ${err}`);
      } else {
        console.log('File deleted successfully');
      }
    });
  }


  return secure_url
}