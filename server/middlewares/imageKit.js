var ImageKit = require("imagekit");
const FormData = require('form-data');
const axios = require('axios');

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});
const uploadImagekit = async (req, res, next) => {
    try {
        if (req.files) {
            const files = req.files
            const parsefieldimages = files.map((el) => {
                if (el.mimetype !== 'image/jpeg' &&
                    el.mimetype !== 'image/jpg' &&
                    el.mimetype !== 'image/png') {
                    throw {
                        name: `${el.originalname}'s format is not JPEG/JPG/PNG`,
                    };
                }
                if (el.size > 255000) {
                    throw {
                        name: `${el.originalname} size is too big! Max size is 255 KB`,
                    };
                }

                let parsedFile = el.buffer.toString('base64');
                let form = new FormData();

                form.append('file', parsedFile);
                form.append('fileName', el.originalname);
                form.append('folder', '/F_jobs_portal_build');
                return form;
            })
            let imageUrls = [];

            for (const form of parsefieldimages) {
                const response = await axios.post(
                    'https://upload.imagekit.io/api/v1/files/upload',
                    form,
                    {
                        headers: form.getHeaders(),
                        auth: { username: process.env.IMAGEKIT_PRIVATE_KEY },
                    }
                );

                if (!response) {
                    throw { name: 'imageKit error' };
                }

                imageUrls.push(response.data.url);
            }

            req.body.imageUrls = imageUrls;
            next()
        } else {
            throw { name: "EMPTY_FILE_UPLOAD" }
        }
    } catch (error) {
        next(error);
    }
};

// const listimageKit = async (req, res, next) => {
//   // imagekit.getFileDetails("vldqjlthtc3", function (error, result) {
//   //   if (error) console.log(error);
//   //   else console.log(result);
//   //   res.response = result;
//   imagekit.listFiles(
//     {
//       searchQuery: 'name="4__GSxIGyoY.jpg"',
//     },
//     function (error, result) {
//       if (error) console.log(error, "ini error");
//       console.log(result, "ini response");
//       res.response = result;

//       next();
//     }
//   );
// };

module.exports = uploadImagekit

