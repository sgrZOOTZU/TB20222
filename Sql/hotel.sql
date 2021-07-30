DROP DATABASE IF EXISTS HOTEL;


CREATE DATABASE HOTEL;


USE HOTEL;


#       TABLE : Station.


CREATE TABLE Station(
    num_station INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom_station Varchar(50) NOT NULL
);


#       TABLE : Hotel.


CREATE TABLE Hotel(
    capacite_hotel Varchar(50) NOT NULL,
    categorie_hotel Varchar(50) NOT NULL,
    nom_hotel Varchar(50) NOT NULL,
    adresse_hotel Varchar(50) NOT NULL,
    num_hotel INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    num_station INT NOT NULL,
   FOREIGN KEY (num_station) REFERENCES Station(num_station)
);


#       TABLE : Chambre.


CREATE TABLE Chambre(
    capacite_chambre VARCHAR(50) NOT NULL,
    degre_confort VARCHAR(50) NOT NULL,
    expositiion Varchar(50) NOT NULL,
    type_chambre Varchar(50) NOT NULL,
    num_chambre INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    num_hotel INT NOT NULL,
    FOREIGN KEY (num_hotel) REFERENCES Hotel(num_hotel)
);


#       TABLE : Clients.

    
CREATE TABLE Clients(
    adresse_client Varchar(50) NOT NULL,
    nom_client Varchar(50) NOT NULL,
    prenom_client Varchar(50) NOT NULL,
    num_client INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);


#       TABLE : Reservation.


CREATE TABLE Reservation(
    num_chambre INT NOT NULL,
    FOREIGN KEY (num_chambre) REFERENCES Chambre(num_chambre),
    num_client INT NOT NULL,
    FOREIGN KEY (num_client) REFERENCES Clients(num_client),
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    date_reservation DATE NOT NULL,
    montant_arrhes Varchar(50) NOT NULL,
    prix_total Varchar(50) NOT NULL
);

#       CREATE USER + MOT DE PASSE.
 
CREATE USER 'util1'@'%' IDENTIFIED BY 'util1'; 
CREATE USER 'util2'@'%' IDENTIFIED BY 'util2';
CREATE USER 'util3'@'%' IDENTIFIED BY 'util3';

#       AFFECT DES DROITS A UTIL 1.

GRANT ALL PRIVILEGES ON Hotel TO 'util1'@'%' IDENTIFIED BY '';

	#       AFFECT DES DROITS A UTIL 2.

	GRANT SELECT
	ON Hotel
	TO util2
	IDENTIFIED BY 'util2';
		#       AFFECT DES DROITS A UTIL 3.

		GRANT 
		ON Hotel.station
		TO util3
		IDENTIFIED BY 'util3';