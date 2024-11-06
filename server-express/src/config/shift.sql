CREATE TABLE shift (
  id SERIAL PRIMARY KEY,
  shift_name VARCHAR(50),
  shift_time VARCHAR(15),
  hours_of_work INT
);

INSERT INTO shift (shift_name, shift_time, hours_of_work)
VALUES 
  ('Morning Shift', '08:00-11:00', 3),
  ('Midday Shift', '11:00-15:00', 4),
  ('Afternoon Shift', '15:00-19:00', 4),
  ('Evening Shift', '19:00-22:00', 3);