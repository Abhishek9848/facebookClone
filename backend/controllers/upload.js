const fs = require('fs')
const cloudinary = require('cloudinary').v2;
// Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});
exports.uploadImage = async (req, res, next) => {
    try {
        console.log("entered here")
        const { path } = req.body
        let files = Object.values(req.files).flat();
        let images = []
        for (const file of files) {
            const url = await uploadToCloudinary(file, path)
            images.push(url)
            removeTmp(file.tempFilePath)
        }
        res.json(images)
    } catch (error) {
        next(error)
    }
}

const uploadToCloudinary = async (file, path) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file.tempFilePath, { folder: path, public_id: file.name.split('.')[0] }, (err, res) => {
            if (err) {
                removeTmp(file.tempFilePath)
                reject({ message: 'Upload image failed' })
            }
            if (res) {
                console.log("response -->>" , res)
                resolve({
                    url: res.secure_url
                })
            }
        })
    })
}


const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
        console.log(`${path} was deleted`);
    })
}