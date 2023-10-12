# backend_android
To get data via curl :
curl -v GET http://localhost:3000/biodata/get_biodata    
To get data via browser :
http://localhost:3000/biodata/get_biodata  


To create DB via cmd/terminal :
psql -U postgres example
\c
create database example;
CREATE TABLE IF NOT EXISTS public.biodata
(
    id uuid,
    nama_lengkap character varying(225) COLLATE pg_catalog."default",
    tempat_lahir character varying(225) COLLATE pg_catalog."default",
    tanggal_lahir date,
    nik character varying(17) COLLATE pg_catalog."default",
    alamat text COLLATE pg_catalog."default",
    jurusan character varying(30) COLLATE pg_catalog."default"
);
