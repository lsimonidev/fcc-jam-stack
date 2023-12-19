const axios = require("axios");
require('dotenv').config();

module.exports = async function() {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=br&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
        console.log(response.data.articles);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}