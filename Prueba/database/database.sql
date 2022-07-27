CREATE TABLE departamento (id INT NOT NULL AUTO_INCREMENT, nombre VARCHAR(100), presupuesto DOUBLE, PRIMARY KEY(id));
CREATE TABLE empleado (id INT NOT NULL AUTO_INCREMENT, nit VARCHAR(9), nombre VARCHAR(100), apellido1 VARCHAR(100), apellido2 VARCHAR(100), id_departamento INT, PRIMARY KEY(id), FOREIGN KEY(id_departamento) REFERENCES departamento(id));
