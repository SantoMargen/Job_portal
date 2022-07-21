const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: 'da3j8jobd',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});


const uploadImage = async (req, res, next) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
        use_filename: true,
        unique_filename: true,
    };

    try {
        // Upload the image
        if (req.file) {

            const { originalname, mimetype, buffer, size } = req.file
            const result = await cloudinary.uploader.upload(req.file, options);
            console.log(result);
            // return result.public_id;
        }
        next()
    } catch (error) {
        next(error)
    }
};
module.exports = uploadImage