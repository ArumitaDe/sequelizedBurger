create database burgers_db;
use burgers_db;


create table `burgers` 
( 
`id` int(10) not null auto_increment primary key,
`burger_name` varchar(45), 
`devoured` boolean,
`date` timestamp
);