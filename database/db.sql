CREATE TABLE public.alumno (
	id serial NOT NULL,
	nombre varchar(50) NOT NULL,
	rut varchar(50) NOT NULL,
	curso varchar(50) NOT NULL,
	nivel int4 NOT NULL,
	CONSTRAINT alumno_pk PRIMARY KEY (id)
);

