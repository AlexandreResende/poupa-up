
create database expressapp;
use expressapp;

create table incomes(
  id int auto_increment primary key,
  valueSpent float not null,
  descriptionText text not null,
  dataType text not null
);
