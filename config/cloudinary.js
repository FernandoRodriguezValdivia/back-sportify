const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: 'dj3hlonqp', 
    api_key: '164167778883217', 
    api_secret: '1NTwP3gVrVovFkLO7d_Ozb0pUW8' 
}); 
module.exports = cloudinary;
