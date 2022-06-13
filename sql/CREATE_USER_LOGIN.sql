create table USER_LOGIN (
	nome varchar(255) not null,
	cpf varchar(11) primary key,
	hash_senha varchar(64) not null
);