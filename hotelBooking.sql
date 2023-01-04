create database HotelManagement;
use HotelManagement;

create table Hotel
(
    hname varchar(100),
    hotel_id int primary key,
    hotel_address varchar(200)
);
 
create table Customer
(
    cust_id int primary key,
    fname varchar(30),
    lname varchar(30),
    phno bigint,
    email varchar(50),
    address varchar(200),
    password varchar(30)
);

create table Rooms
(
   hotel_id int,
   type varchar(10),
   totalrooms int,
   available_rooms int,
   price_per_room decimal,
   room_no int primary key,
   foreign key(hotel_id) references Hotel(hotel_id);
);

create table Bookings
(
    cust_id int,
    hotel_id int,
    no_of_rooms int,
    foreign key(cust_id) references Customer(cust_id),
    foreign key(hotel_id) references Hotel(hotel_id)
);

create table Rooms_alloted
(
    cust_id int,
    alloted_roomNo int,
    hotel_id int,
    foreign key(cust_id) references Customer(cust_id),
    foreign key(hotel_id) references Hotel(hotel_id),
    foreign key(alloted_roomNo) references Rooms(room_no)
);