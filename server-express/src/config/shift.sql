CREATE TABLE shift (
  id SERIAL PRIMARY KEY,
  shift_name VARCHAR(50),
  start_time TIME,
  end_time TIME,
  hours_of_work INT
);

INSERT INTO shift (shift_name, start_time, end_time, hours_of_work)
VALUES 
  ('Morning Shift', '08:00', '11:00', 3),
  ('Midday Shift', '11:00', '15:00', 4),
  ('Afternoon Shift', '15:00', '19:00', 4),
  ('Evening Shift', '19:00', '22:00', 3);