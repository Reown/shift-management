CREATE TABLE day (
  id SERIAL PRIMARY KEY,
  full_date DATE,
  year INT,
  month_number INT,
  month VARCHAR(15),
  day_number_in_week INT,
  day_of_week VARCHAR(10),
  is_holiday BOOLEAN,
  is_weekend BOOLEAN
);

WITH RECURSIVE DateGenerator AS (
  SELECT DATE '2025-01-01'::timestamp AS full_date
  UNION ALL
  SELECT (full_date + INTERVAL '1 day')::timestamp
  FROM DateGenerator
  WHERE full_date < DATE '2030-12-31'::timestamp
)
INSERT INTO day (
  full_date, 
  year, 
  month_number, 
  month, 
  day_number_in_week, 
  day_of_week, 
  is_holiday, 
  is_weekend
)
SELECT 
  full_date::date,
  EXTRACT(YEAR FROM full_date) AS year,
  EXTRACT(MONTH FROM full_date) AS month_number,
  TO_CHAR(full_date, 'Month') AS month,
  EXTRACT(DOW FROM full_date) AS day_number_in_week,
  TO_CHAR(full_date, 'Day') AS day_of_week,
  FALSE AS is_holiday,
  CASE WHEN EXTRACT(DOW FROM full_date) IN (0, 6) THEN TRUE ELSE FALSE END AS is_weekend
FROM DateGenerator;
