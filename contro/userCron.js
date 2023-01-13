const mongoose=require('mongoose')
const config=require('../config/db')
const userContro=require('../model/user')

const add = async (req, res) => {
    try {
      const resp = await userContro.create(req.body);
      res.status(200).json({
        response: resp,
        message: "data inserted..",
      });
    } catch (error) {
      res.status(400).json({
        response: null,
        message: "data not inserted..",
      });
    }
  };
  module.exports={
    add
  }