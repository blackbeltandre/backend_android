let express = require('express');
let router = express.Router();

const website_route = require('../controller/index');

module.exports = function(router) {
router.get('/api/get_registrasi', website_route.get_registrasi);
router.get('/api/get_registrasi_by_id/:id', website_route.get_registrasi_by_id);
router.post('/api/insert_registrasi', website_route.insert_registrasi);
router.put('/api/update_registrasi_by_id/:id', website_route.update_registrasi_by_id);
//put method will used to update all field from table when execution or use patch for update only some fields
router.delete('/api/delete_registrasi_by_id/:id', website_route.delete_registrasi_by_id);


// TUGAS
// router.post('/api/insert_krs', website_route.insert_krs);
// router.get('/api/get_krs', website_route.get_krs);

}


// id uuid ,nama_mahasiswa,jurusan, semester,jumlah_sks,kd_makul,makul,dll