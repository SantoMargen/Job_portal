const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const multerSingleImg = upload.single('logo');
const multerMultiImage = upload.array('images', 10);


module.exports = { multerSingleImg, multerMultiImage };