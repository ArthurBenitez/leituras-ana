CREATE DATABASE bibliofile;
USE bibliofile;

CREATE TABLE leituras (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255),
  autor VARCHAR(255),
  genero VARCHAR(100),
  paginas INT,
  tempo INT,
  nota INT,
  resenha TEXT,
  data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
