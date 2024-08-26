INSERT INTO deparment(name)
VALUES ('Costumer Service'),
       ('Engineering'),
       ('Artist'),
       ('Education'),
       ('Finance'),
       ('Health Care'),
       ('Business'),
       ('Agriculture');

INSERT INTO role(title, salary, department_id)
VALUES (1, 'Cook Manager', 30000),
       (1, 'Food Preparation', 25000),
       (1, 'Cashier', 20000),
       (2, 'Construction Worker', 35000);

INSERT INTO employee(role_id, first_name, last_name, manager_id)
VALUES (1, 'Nicholas', 'Diaz', ),
       (2, 'Carmen', 'Molina', ),
       (3, 'Luis', 'Guel', ),
       (4, 'Hilario', 'Guel', );