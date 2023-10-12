var os = require('os');
var path = require('path');
const connection = require('../config/config')    
var nodemailer = require('nodemailer');
var crypto = require("crypto")
var key = process.env.KEY_CRYPTO;
require('dotenv').config();
const host_email = process.env.HOST_EMAIL;
const ssl_email = process.env.SSL_EMAIL;
const port_email = process.env.PORT_EMAIL;
const username_email = process.env.USERNAME_EMAIL;
const password_email = process.env.PASSWORD_EMAIL;
const flag = process.env.FLAG_PENCAKER;
var ip = require('ip');
const DeviceDetector = require('node-device-detector');
const DeviceHelper = require('node-device-detector/helper');

exports.get_biodata=function(req,res){
  connection.query("select * from biodata",(error,biodata,fields)=>{
                        if (error) {
                              throw error
                        }
                        const biodatas = biodata.rows.map((item) => {
                          const arr = {};
                          arr.id = item.id;
                          arr.nama_lengkap = item.nama_lengkap;
                          arr.tempat_lahir = item.tempat_lahir;
                          arr.tanggal_lahir = item.tanggal_lahir;
                          arr.nik = item.nik;
                          arr.alamat = item.alamat;
                          arr.jurusan = item.jurusan;
                          const arrGifting = arr;
                          return arrGifting;
                      });
                      res.json({result:biodatas});
        
})
};
