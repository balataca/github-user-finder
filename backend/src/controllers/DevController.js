const axios = require('axios');
const Dev = require('../models/Dev');
const parseArrayAsString = require('../utils/ParseStringAsArray');

const index = async (req, res) => {
  const devs = await Dev.find();

  return res.json(devs)
};

const store = async (req, res) => {
  const { github_username, techs, latitude, longitude } = req.body;

  let dev = await Dev.findOne({ github_username });

  if (!dev) {
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
  
    const { name = login, avatar_url, bio } = apiResponse.data;
    
    const techsArray = parseArrayAsString(techs);
  
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    };
  
    dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
    });
  }

  return res.send(dev);
};

const destroy = async (req, res) => {
  const { id } = req.params
  
  const dev = await Dev.findOneAndDelete({ _id: id })

  return res.send(dev)
};

module.exports = {
  index,
  store,
  destroy,
};