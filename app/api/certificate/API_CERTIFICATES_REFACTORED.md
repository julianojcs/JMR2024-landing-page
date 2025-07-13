# API de Certificados - Documentação Atualizada

## 🚀 **API REFATORADA E ATUALIZADA**

A API de certificados foi completamente refatorada para suportar o novo sistema de múltiplos papéis por usuário e integração com o modelo `CertificateTemplates`.

## 📋 **Endpoints Disponíveis**

### **POST /api/certificate**
Emite um novo certificado para um usuário.

**Body:**
```json
{
  "cpf": "12345678901",
  "email": "usuario@exemplo.com",
  "userType": "CONGRESSPERSON",
  "certType": "CONGRESS",
  "eventId": "507f1f77bcf86cd799439011",
  "participationIndex": 0
}
```

**Resposta de Sucesso:**
```json
{
  "success": true,
  "certificate": {
    "code": "CERT-ABC123",
    "name": "Dr. João Silva",
    "userType": "CONGRESSPERSON",
    "certType": "CONGRESS",
    "issuedAt": "2025-06-25T21:30:00.000Z",
    "userId": "507f1f77bcf86cd799439011",
    "eventId": "507f1f77bcf86cd799439011",
    "participationData": {
      "congresspersonDataIndex": 0
    }
  }
}
```

### **GET /api/certificate?action=types**
Lista todos os tipos de certificados disponíveis.

**Resposta:**
```json
{
  "success": true,
  "eventId": "all",
  "userType": "all",
  "availableTypes": {
    "CONGRESSPERSON": ["CONGRESS", "SEMINAR", "COURSE", "WORKSHOP", "DAYUSE"],
    "PROFESSIONAL": ["SPEAKER", "MODERATOR", "DEBATER", "CHAIR-OF-THE-BOARD"],
    "PAPER-PRESENTER": ["PRESENTATION", "AWARDED"]
  }
}
```

### **GET /api/certificate?action=types&eventId={eventId}**
Lista tipos de certificados disponíveis para um evento específico (baseado nos templates).

### **GET /api/certificate?action=types&userType={userType}**
Lista tipos de certificados para um userType específico.

### **GET /api/certificate?userId={userId}**
Lista todos os certificados de um usuário.

### **GET /api/certificate?userId={userId}&eventId={eventId}**
Lista certificados de um usuário para um evento específico.

### **GET /api/certificate?code={code}**
Busca um certificado específico pelo código.

**Resposta:**
```json
{
  "success": true,
  "certificate": {
    "code": "CERT-ABC123",
    "userType": "CONGRESSPERSON",
    "certType": "CONGRESS",
    "issuedAt": "2025-06-25T21:30:00.000Z",
    "user": {
      "name": "Dr. João Silva",
      "email": "joao@exemplo.com"
    },
    "template": {
      "title": "Certificado de Participação - Congresso",
      "description": "Certificado para participantes do congresso médico"
    }
  }
}
```

### **GET /api/certificate?code={code}&action=processed**
Busca um certificado com dados processados (texto final do certificado).

**Resposta:**
```json
{
  "success": true,
  "certificate": {
    "code": "CERT-ABC123",
    "userType": "CONGRESSPERSON",
    "certType": "CONGRESS",
    "issuedAt": "2025-06-25T21:30:00.000Z",
    "user": {
      "name": "Dr. João Silva",
      "email": "joao@exemplo.com"
    },
    "processedText": "Certificamos que Dr. João Silva participou como congressista da XI Jornada Mineira de Radiologia...",
    "processedLines": [
      "Certificamos que",
      "Dr. João Silva",
      "participou como congressista da XI Jornada Mineira de Radiologia..."
    ],
    "template": {
      "title": "Certificado de Participação - Congresso",
      "description": "Certificado para participantes do congresso médico"
    }
  }
}
```

### **GET /api/certificate?action=stats**
Retorna estatísticas gerais do sistema.

**Resposta:**
```json
{
  "success": true,
  "certificateStats": [
    {
      "_id": { "userType": "CONGRESSPERSON", "certType": "CONGRESS" },
      "count": 25
    }
  ],
  "templateStats": [
    {
      "_id": "CONGRESSPERSON",
      "templates": ["CONGRESS", "SEMINAR", "WORKSHOP"],
      "count": 3
    }
  ],
  "totalCertificates": 44,
  "totalTemplates": 12
}
```

## 🔧 **Tipos Suportados**

### **UserTypes:**
- `CONGRESSPERSON` - Participantes do congresso
- `PROFESSIONAL` - Profissionais (palestrantes, moderadores, etc.)
- `PAPER-PRESENTER` - Apresentadores de trabalhos
- `SYSTEM-USER` - Usuários do sistema (sem certificados específicos)

### **CertTypes por UserType:**

**CONGRESSPERSON:**
- `CONGRESS` - Participação no congresso completo
- `SEMINAR` - Participação em seminários
- `COURSE` - Participação em cursos
- `WORKSHOP` - Participação em workshops
- `DAYUSE` - Participação em dias específicos

**PROFESSIONAL:**
- `SPEAKER` - Palestrante
- `MODERATOR` - Moderador
- `DEBATER` - Debatedor
- `CHAIR-OF-THE-BOARD` - Presidente de mesa

**PAPER-PRESENTER:**
- `PRESENTATION` - Apresentação de trabalho
- `AWARDED` - Trabalho premiado

## 🔒 **Validações**

### **Automáticas:**
1. **UserType/CertType válidos** - Validação contra enums do modelo
2. **Dados de participação** - Verifica se o usuário tem dados válidos para o tipo de certificado
3. **Índice de participação** - Para usuários com múltiplas participações do mesmo tipo
4. **Duplicatas** - Impede criação de certificados duplicados para a mesma participação

### **Campos Obrigatórios:**
- `cpf` - CPF do usuário (será normalizado)
- `email` - Email do usuário (será convertido para minúsculo)
- `userType` - Tipo de usuário (deve estar nos enums válidos)
- `certType` - Tipo de certificado (deve ser válido para o userType)
- `eventId` - ID do evento

### **Campos Opcionais:**
- `participationIndex` - Índice da participação específica (necessário para usuários com múltiplas participações do mesmo tipo)

## 🚀 **Novos Recursos**

### **1. Múltiplas Participações:**
- Suporte a usuários com múltiplos papéis
- Índices específicos para cada participação
- Validação automática de elegibilidade

### **2. Templates Dinâmicos:**
- Integração com `CertificateTemplates`
- Busca de tipos baseada em templates disponíveis
- Processamento avançado de texto com variáveis

### **3. Dados Processados:**
- Endpoint para obter texto final do certificado
- Substituição automática de variáveis
- Formatação específica por tipo de certificado

### **4. Melhor Rastreabilidade:**
- Dados de participação específica em cada certificado
- Metadados detalhados
- Histórico completo de emissão

## 📊 **Monitoramento**

### **Estatísticas Disponíveis:**
- Total de certificados por tipo
- Total de templates disponíveis
- Distribuição por userType
- Estatísticas de uso por evento

### **Logs:**
- Todas as operações são logadas
- Erros detalhados para debugging
- Rastreamento de validações

---

**🎉 API completamente refatorada e pronta para produção!**

**Versão:** 2.0 (Refatorada)
**Data:** 25 de junho de 2025
**Compatibilidade:** 100% com novos modelos User, Certificate e CertificateTemplates
