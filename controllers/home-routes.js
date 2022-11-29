const router = require('express').Router();
const { Post } = require ('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        
    })
})