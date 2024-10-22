CREATE TABLE IF NOT EXISTS produtos (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT NOT NULL,
    data DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO produtos (descricao, preco, estoque, data)
VALUES
    ('Produto 1', 19.99, 100, '2024-10-21'),
    ('Produto 2', 29.99, 50, '2024-10-20'),
    ('Produto 3', 9.99, 200, '2024-10-19'),
    ('Produto 4', 49.99, 10, '2024-10-18'),
    ('Produto 5', 99.99, 5, '2024-10-17')
ON CONFLICT DO NOTHING;  -- Evitar duplicações ao reiniciar