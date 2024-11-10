CREATE TABLE schedule (
  id SERIAL PRIMARY KEY,
  shift_id INT,
  day_id INT,
  person_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_schedule_shift FOREIGN KEY (shift_id)
    REFERENCES shift(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_schedule_day FOREIGN KEY (day_id)
    REFERENCES day(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_schedule_person FOREIGN KEY (person_id)
    REFERENCES person(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  UNIQUE (shift_id, day_id, person_id)
);
