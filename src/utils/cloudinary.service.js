import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // Node.js file system module to manage files

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) throw new Error("Local file path is required");
    //upload file on cloudinary
    const uploadedFile = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("file uploaded on cloudinary", uploadedFile.url);

    return uploadedFile;
  } catch (error) {
    fs.unlinkSync(localFilePath); // delete the locally saved temporary file if upload fails
    return null;
  }
};

export { uploadOnCloudinary };
