# Society APIs - Documentação Completa

## Visão Geral

As APIs do modelo Society oferecem funcionalidades completas para gerenciamento de sociedades e seus afiliados, incluindo CRUD, busca avançada, gerenciamento de afiliados e importação/exportação CSV.

## Base URL
```
/api/societies
```

## Endpoints Disponíveis

### 1. CRUD Básico de Sociedades

#### **GET** `/api/societies`
Listar todas as sociedades

**Query Parameters:**
- `includeAffiliates` (boolean): Incluir dados dos afiliados (default: true)
- `shortName` (string): Buscar por nome abreviado específico
- `affiliateEmail` (string): Buscar sociedades por email do afiliado
- `affiliateCpf` (string): Buscar sociedades por CPF do afiliado

**Exemplos:**
```bash
GET /api/societies
GET /api/societies?includeAffiliates=false
GET /api/societies?shortName=SBR
GET /api/societies?affiliateEmail=joao@example.com
```

**Resposta:**
```json
{
  "success": true,
  "data": [...],
  "count": 5
}
```

#### **POST** `/api/societies`
Criar nova sociedade

**Body:**
```json
{
  "name": "Sociedade Brasileira de Medicina",
  "shortName": "SBM",
  "link": "https://sbm.org.br",
  "src": "/images/sbm-logo.png"
}
```

**Resposta:**
```json
{
  "success": true,
  "message": "Sociedade criada com sucesso.",
  "data": { ... }
}
```

#### **PUT** `/api/societies`
Atualizar sociedade

**Body:**
```json
{
  "id": "sociedade_id",
  "name": "Novo Nome",
  "link": "https://novo-link.com"
}
```

#### **DELETE** `/api/societies?id=sociedade_id`
Deletar sociedade

---

### 2. Sociedade Específica

#### **GET** `/api/societies/[id]`
Buscar sociedade por ID

**Query Parameters:**
- `includeAffiliates` (boolean): Incluir dados dos afiliados (default: true)

**Exemplo:**
```bash
GET /api/societies/64f1234567890abcdef12345?includeAffiliates=false
```

#### **PUT** `/api/societies/[id]`
Atualizar sociedade por ID

#### **DELETE** `/api/societies/[id]`
Deletar sociedade por ID

---

### 3. Busca Avançada

#### **POST** `/api/societies/search`
Buscar sociedades por critérios específicos

**Body:**
```json
{
  "type": "affiliate",
  "value": "joao@example.com",
  "includeAffiliates": true
}
```

**Tipos de busca disponíveis:**
- `name`: Buscar por nome da sociedade
- `shortName`: Buscar por nome abreviado
- `affiliateEmail`: Buscar por email do afiliado
- `affiliateCpf`: Buscar por CPF do afiliado
- `affiliate`: Buscar por email ou CPF (detecta automaticamente)
- `affiliateClean`: Buscar por afiliado sem retornar dados dos afiliados

#### **GET** `/api/societies/search`
Obter documentação de tipos de busca

---

### 4. Gerenciamento de Afiliados

#### **POST** `/api/societies/affiliates`
Gerenciar afiliados (add, remove, update, toggleStatus, bulkAdd, clear)

**Exemplos de uso:**

**Adicionar afiliado:**
```json
{
  "action": "add",
  "societyShortName": "SBR",
  "name": "Dr. João Silva",
  "email": "joao@sbr.org.br",
  "cpf": "12345678901",
  "isAffiliated": true
}
```

**Remover afiliado:**
```json
{
  "action": "remove",
  "societyShortName": "SBR",
  "emailOrCpf": "joao@sbr.org.br"
}
```

**Atualizar afiliado:**
```json
{
  "action": "update",
  "societyShortName": "SBR",
  "emailOrCpf": "joao@sbr.org.br",
  "updateData": {
    "name": "Dr. João Silva Atualizado",
    "isAffiliated": false
  }
}
```

**Alternar status:**
```json
{
  "action": "toggleStatus",
  "societyShortName": "SBR",
  "emailOrCpf": "joao@sbr.org.br"
}
```

**Adicionar múltiplos:**
```json
{
  "action": "bulkAdd",
  "societyShortName": "SBR",
  "affiliates": [
    {
      "name": "Dr. Pedro",
      "email": "pedro@sbr.org.br",
      "cpf": "11111111111"
    },
    {
      "name": "Dra. Ana",
      "email": "ana@sbr.org.br",
      "cpf": "22222222222"
    }
  ]
}
```

**Limpar todos:**
```json
{
  "action": "clear",
  "societyShortName": "SBR"
}
```

#### **GET** `/api/societies/affiliates`
Consultar afiliados

**Query Parameters:**
- `societyShortName` (string): Nome abreviado da sociedade
- `societyId` (string): ID da sociedade (alternativo ao shortName)
- `action` (string): Tipo de consulta

**Ações disponíveis:**
- `list`: Listar todos os afiliados (default)
- `active`: Listar apenas afiliados ativos
- `inactive`: Listar apenas afiliados inativos
- `stats`: Obter estatísticas dos afiliados
- `export`: Exportar para CSV

**Exemplos:**
```bash
GET /api/societies/affiliates?societyShortName=SBR&action=stats
GET /api/societies/affiliates?societyShortName=SBR&action=export&includeInactive=true
```

---

### 5. Importação/Exportação CSV

#### **POST** `/api/societies/import-csv`
Importar afiliados via CSV

**Body:**
```json
{
  "societyShortName": "SBR",
  "csvContent": "nome,email,cpf\nDr. João,joao@sbr.org.br,12345678901\nDra. Maria,maria@sbr.org.br,98765432109"
}
```

**Resposta:**
```json
{
  "success": true,
  "message": "Importação CSV concluída com sucesso.",
  "data": {
    "societyId": "...",
    "societyName": "...",
    "totalProcessed": 2,
    "added": 2,
    "skipped": 0,
    "errors": 0,
    "fieldOrder": {
      "email": "email",
      "cpf": "cpf", 
      "name": "nome"
    },
    "headerDetected": true
  }
}
```

#### **GET** `/api/societies/import-csv`
Obter exemplos e instruções para importação CSV

**Resposta:**
```json
{
  "success": true,
  "data": {
    "formats": { ... },
    "instructions": { ... },
    "endpoint": "/api/societies/import-csv",
    "method": "POST"
  }
}
```

---

## Formatos CSV Suportados

### 1. Com Cabeçalho (Ordem: nome, email, cpf)
```csv
nome,email,cpf
Dr. João Silva,joao@example.com,12345678901
Dra. Maria Santos,maria@example.com,98765432109
```

### 2. Com Cabeçalho (Ordem: email, cpf, nome)
```csv
email,cpf,nome
joao@example.com,12345678901,Dr. João Silva
maria@example.com,98765432109,Dra. Maria Santos
```

### 3. Sem Cabeçalho (Detectado automaticamente)
```csv
Dr. João Silva,joao@example.com,12345678901
Dra. Maria Santos,maria@example.com,98765432109
```

### Regras de Importação
- Pelo menos **email OU CPF** deve ser fornecido
- Emails devem estar em formato válido
- CPFs podem ter ou não formatação
- Sistema detecta automaticamente a ordem dos campos
- Afiliados duplicados são ignorados
- Suporta qualquer ordem dos campos (nome, email, cpf)

---

## Códigos de Status HTTP

- **200**: Sucesso
- **201**: Criado com sucesso
- **400**: Erro na requisição (dados inválidos)
- **404**: Recurso não encontrado
- **409**: Conflito (sociedade já existe)
- **500**: Erro interno do servidor

---

## Exemplos de Uso

### JavaScript/Fetch
```javascript
// Criar sociedade
const society = await fetch('/api/societies', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Sociedade Test',
    shortName: 'ST'
  })
});

// Importar CSV
const csvResult = await fetch('/api/societies/import-csv', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    societyShortName: 'ST',
    csvContent: 'nome,email,cpf\nJoão,joao@test.com,12345678901'
  })
});

// Buscar por afiliado
const societies = await fetch('/api/societies/search', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'affiliate',
    value: 'joao@test.com'
  })
});
```

### cURL
```bash
# Listar sociedades
curl -X GET "http://localhost:3000/api/societies"

# Criar sociedade
curl -X POST "http://localhost:3000/api/societies" \
  -H "Content-Type: application/json" \
  -d '{"name":"Sociedade Test","shortName":"ST"}'

# Importar CSV
curl -X POST "http://localhost:3000/api/societies/import-csv" \
  -H "Content-Type: application/json" \
  -d '{"societyShortName":"ST","csvContent":"nome,email,cpf\nJoão,joao@test.com,12345678901"}'
```

---

## Arquivos de Teste

- `society-api-tests.js`: Suite completa de testes das APIs
- Execute `SocietyAPIClient.runCompleteTests()` para testar todas as funcionalidades

## Validações

- **Nome e shortName**: Obrigatórios para criar sociedade
- **Email**: Formato válido obrigatório
- **CPF**: Apenas números, pode ter ou não formatação
- **Afiliados**: Pelo menos email ou CPF deve ser fornecido

Todas as APIs incluem tratamento de erros completo e retornam mensagens descritivas.
