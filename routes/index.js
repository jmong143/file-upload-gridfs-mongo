var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});
router.post('/upload', function(req, res, next) {
  res.json({ title: 'Express' });
});
module.exports = router;
