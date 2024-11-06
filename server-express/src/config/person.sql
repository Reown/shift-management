CREATE TABLE person (
  id serial PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE person_info (
  id serial PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  dob VARCHAR(255) NOT NULL,
  joindate DATE NOT NULL ,
  person_id INT,
  CONSTRAINT fk_person_info FOREIGN KEY (person_id)
    REFERENCES person(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE person_auth (
  id serial PRIMARY KEY,
  password varchar(255) NOT NULL,
  person_id INT,
  CONSTRAINT fk_person_auth FOREIGN KEY (person_id)
    REFERENCES person(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TYPE role AS ENUM ('admin', 'manager', 'user');

CREATE TABLE person_role (
  id serial PRIMARY KEY,
  role role NOT NULL,
  person_id INT,
  CONSTRAINT fk_person_role FOREIGN KEY (person_id)
    REFERENCES person(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
