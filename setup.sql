-- Terminate all connections to mydb
SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'mydb'
  AND pid <> pg_backend_pid();

-- Drop database if exists
DROP DATABASE IF EXISTS mydb;

-- Create database
CREATE DATABASE mydb;
