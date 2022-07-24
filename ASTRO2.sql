create database astro;

use astro;

create table contacto(
idcontacto int,
nombre varchar(100) not null,
apellido varchar(100),
fechanac date,
email varchar(100) not null,
motivo varchar(200)
);

select*from contacto;