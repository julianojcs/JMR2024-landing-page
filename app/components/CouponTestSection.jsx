'use client';

import { useState, useEffect } from 'react';
import TerminalInterface from './TerminalInterface';
import styles from './CouponTestSection.module.css';

export default function CouponTestSection({ categories = [], products = [], dataLoading = false }) {
  // Estados para o teste de cupom
  const [testData, setTestData] = useState({
    code: '',
    orderValue: '100',
    category: '0',
    products: ['ALL'],
    year: new Date().getFullYear().toString()
  });

  const [testResults, setTestResults] = useState([]);
  const [testRunning, setTestRunning] = useState(false);

  // Handler para mudanças nos dados de teste
  const handleTestDataChange = (e) => {
    const { name, value } = e.target;
    setTestData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Executar teste de validação
  const runTest = async () => {
    if (!testData.code) return;

    setTestRunning(true);
    const timestamp = new Date().toLocaleTimeString();
    const command = `validate-coupon --code=${testData.code} --value=${testData.orderValue} --category=${testData.category} --year=${testData.year}`;

    try {
      const response = await fetch('/api/cupons/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: testData.code,
          orderValue: parseFloat(testData.orderValue),
          category: parseInt(testData.category),
          products: testData.products,
          year: parseInt(testData.year)
        }),
      });

      const result = await response.json();

      let output;
      if (result.valid) {
        const finalPrice = isNaN(Number(result.finalPrice)) ? result.finalPrice || '0.00' : Number(result.finalPrice).toFixed(2);
        const discountAmount = isNaN(Number(result.discountAmount)) ? result.discountAmount || '0.00' : Number(result.discountAmount).toFixed(2);
        output = `✅ CUPOM VÁLIDO\nCódigo: ${result.coupon.code}\nNome: ${result.coupon.name}\nDesconto: ${result.coupon.discount.type === 'PERCENTAGE' ? `${result.coupon.discount.value}%` : `R$ ${result.coupon.discount.value}`}\nValor Original: R$ ${testData.orderValue}\nValor Final: R$ ${finalPrice}\nDesconto Aplicado: R$ ${discountAmount}`;
      } else {
        output = `❌ CUPOM INVÁLIDO\nMotivo: ${result.message || 'Cupom não encontrado ou inválido'}`;
      }

      setTestResults(prev => [...prev, {
        timestamp,
        command,
        output,
        type: result.valid ? 'success' : 'error'
      }]);
    } catch (error) {
      setTestResults(prev => [...prev, {
        timestamp,
        command,
        output: `❌ ERRO DE CONEXÃO\nFalha ao conectar com o servidor: ${error.message}`,
        type: 'error'
      }]);
    } finally {
      setTestRunning(false);
    }
  };

  // Limpar resultados
  const clearResults = () => {
    setTestResults([]);
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.value === parseInt(categoryId));
    return category ? category.label : `Categoria ${categoryId}`;
  };

  const getProductName = (productCode) => {
    const product = products.find(prod => prod.value === productCode);
    return product ? product.label : productCode;
  };

  return (
    <TerminalInterface title="Coupon Validator v1.0">
      {/* Formulário de Teste */}
      <div className={styles.testForm}>
        <div className={styles.testFormGroup}>
          <label className={styles.testLabel}>Código do Cupom:</label>
          <input
            type="text"
            name="code"
            value={testData.code}
            onChange={handleTestDataChange}
            className={styles.testInput}
            placeholder="Digite o código do cupom"
          />
        </div>

        <div className={styles.testFormGroup}>
          <label className={styles.testLabel}>Valor do Pedido (R$):</label>
          <input
            type="number"
            name="orderValue"
            value={testData.orderValue}
            onChange={handleTestDataChange}
            className={styles.testInput}
            placeholder="100.00"
            step="0.01"
            min="0"
          />
        </div>

        <div className={styles.testFormGroup}>
          <label className={styles.testLabel}>Categoria:</label>
          <select
            name="category"
            value={testData.category}
            onChange={handleTestDataChange}
            className={styles.testSelect}
          >
            {categories.length > 0 ? (
              categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))
            ) : (
              <>
                <option value="0">Todas as Categorias</option>
                <option value="1">Médico Sócio</option>
                <option value="2">Médico Não Sócio</option>
                <option value="3">Residente/Especializando Sócio</option>
                <option value="4">Residente/Especializando Não Sócio</option>
                <option value="5">Estudante Medicina Sócio</option>
                <option value="6">Estudante Medicina Não Sócio</option>
                <option value="7">Demais Profissionais</option>
              </>
            )}
          </select>
        </div>

        <div className={styles.testFormGroup}>
          <label className={styles.testLabel}>Produto:</label>
          <select
            name="products"
            value={testData.products?.[0] || 'ALL'}
            onChange={(e) => handleTestDataChange({
              target: {
                name: 'products',
                value: [e.target.value]
              }
            })}
            className={styles.testSelect}
          >
            {products.length > 0 ? (
              products.map(product => (
                <option key={product.value} value={product.value}>
                  {product.label}
                </option>
              ))
            ) : (
              <>
                <option value="ALL">Todos os Produtos</option>
                <option value="CONGRESS">Congresso</option>
                <option value="WORKSHOP">Workshop</option>
                <option value="COURSE">Curso</option>
              </>
            )}
          </select>
        </div>

        <div className={styles.testFormGroup}>
          <label className={styles.testLabel}>Ano:</label>
          <select
            name="year"
            value={testData.year}
            onChange={handleTestDataChange}
            className={styles.testSelect}
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
          </select>
        </div>

        <div className={`${styles.testFormGroup} ${styles.fullWidth}`}>
          <div className={styles.testActions}>
            <button
              onClick={runTest}
              disabled={testRunning || !testData.code}
              className={styles.testButton}
            >
              {testRunning ? (
                <span className={styles.loadingDots}>Validando</span>
              ) : (
                'Validar Cupom'
              )}
            </button>

            <button
              onClick={clearResults}
              disabled={testRunning || testResults.length === 0}
              className={`${styles.testButton} ${styles.clearButton}`}
            >
              Limpar Terminal
            </button>
          </div>
        </div>
      </div>

      {/* Resultados dos Testes */}
      {testResults.length > 0 && (
        <div className={styles.testResults}>
          {testResults.map((result, index) => (
            <div key={index} className={`${styles.testResultItem} ${styles[result.type]}`}>
              <div className={styles.testTimestamp}>[{result.timestamp}]</div>
              <div className={styles.testCommand}>$ {result.command}</div>
              <div className={styles.testOutput}>{result.output}</div>
            </div>
          ))}
        </div>
      )}

      {/* Prompt do Terminal */}
      <div className={styles.terminalPrompt}>
        <span className={styles.promptSymbol}>$</span>
        <span className={styles.promptText}>
          {testRunning ? 'Executando validação...' : 'Pronto para validar cupons'}
        </span>
        {!testRunning && <span className={styles.cursor}>▋</span>}
      </div>
    </TerminalInterface>
  );
}
