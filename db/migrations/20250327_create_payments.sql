CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  customer_id VARCHAR(50) NOT NULL,
  value DECIMAL(10,2) NOT NULL,
  description TEXT,
  due_date DATE NOT NULL,
  asaas_payment_id VARCHAR(50) UNIQUE,
  status VARCHAR(20) DEFAULT 'PENDING',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payments_customer_id ON payments(customer_id);
CREATE INDEX idx_payments_status ON payments(status);