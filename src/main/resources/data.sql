DROP TABLE IF EXISTS todoItems;

CREATE TABLE todoItems (
  id INT PRIMARY KEY,
  TASK   VARCHAR(250) NOT NULL,
  COMPLETED VARCHAR(250) NOT NULL
);

INSERT INTO todoItems (ID, TASK, COMPLETED) VALUES
  (1, 'Test', true);