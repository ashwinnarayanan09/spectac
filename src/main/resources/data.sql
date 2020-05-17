drop table positions;

create table positions(
   id INT ,
   name varchar(100),
   city VARCHAR(100),
   country VARCHAR(100),
   PRIMARY KEY ( id )
);

insert into positions (id,name,city,country) values (1,'Java','Stockholm','Sweden');
insert into positions (id,name,city,country) values (2,'dotnet','Stockholm','Sweden');