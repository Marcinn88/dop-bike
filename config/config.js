const path = require("node:path");

const getUploadsPath = () => {
return path.join(
    __dirname,
   "..", 
    "tmp"
);
};

const getImagesPath = () => {
    return path.join(__dirname,"..", "public", "avatars");
}


module.exports = {
UPLOADS_PATH: getUploadsPath(),
IMAGES_PATH: getImagesPath()
}
