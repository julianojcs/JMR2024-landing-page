CREATE TABLE payment_callbacks (
  id SERIAL PRIMARY KEY,
  payment_id VARCHAR(50) NOT NULL UNIQUE,
  customer_id VARCHAR(50) NOT NULL,
  status VARCHAR(20) NOT NULL,
  value DECIMAL(10,2) NOT NULL,
  net_value DECIMAL(10,2),
  description TEXT,
  billing_type VARCHAR(20),
  due_date DATE,
  payment_date TIMESTAMP,
  invoice_url TEXT,
  bank_slip_url TEXT,
  raw_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payment_callbacks_customer_id ON payment_callbacks(customer_id);
CREATE INDEX idx_payment_callbacks_status ON payment_callbacks(status);