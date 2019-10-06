DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
CREATE EXTENSION "uuid-ossp";

CREATE TABLE videos (
	id varchar(100) PRIMARY KEY,
	duration INT,
	n_bonuses INT DEFAULT 0,
	created_at INT DEFAULT ceil(extract(epoch from now()))
);

CREATE TABLE tokens (
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	video_id varchar(100) NOT NULL references videos(id),
	created_at INT DEFAULT ceil(extract(epoch from now()))
);