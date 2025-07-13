# Script de Transformação: Subscriptions → Users

## Descrição
Este script transforma dados de inscrições (subscriptions) em registros de usuários compatíveis com o schema do modelo User.js, com consolidação automática por CPF.

## Problema Resolvido
- **Antes**: Múltiplas inscrições do mesmo usuário geravam múltiplos registros de usuário
- **Depois**: Múltiplas inscrições do mesmo CPF são consolidadas em um único usuário com múltiplas atividades no array `congresspersonData`

## Exemplo
### Entrada (2 subscriptions com mesmo CPF):
```json
[
  { "personalInfo": { "cpf": "12599230616", "fullName": "Verônica Gil" }, "selectedItems": { "workshops": [...] } },
  { "personalInfo": { "cpf": "12599230616", "fullName": "Verônica Gil" }, "selectedItems": { "journey": {...} } }
]
```

### Saída (1 user consolidado):
```json
{
  "cpf": "12599230616",
  "name": "Verônica Gil de Mendonça",
  "congresspersonData": [
    {
      "activity": "WORKSHOP",
      "activityName": "RM Pelve para Ginecologistas",
      "attendedAt": "2025-06-27T18:14:02.788Z",
      "paymentStatus": "CONFIRMED"
    },
    {
      "activity": "CONGRESS",
      "activityName": "JMR/CIM 2025",
      "attendedAt": "2025-06-27T18:14:05.261Z",
      "paymentStatus": "CONFIRMED"
    }
  ]
}
```

## Arquivos
- **Script principal**: `scripts/transform-subscriptions-to-users-consolidated.js`
- **Entrada**: `docs/json/jornada.subscriptions.json`
- **Saída**: `docs/json/jornada.users.json`

## Como usar
```bash
node scripts/transform-subscriptions-to-users-consolidated.js
```

## Funcionalidades
✅ **Consolidação por CPF**: Agrupa múltiplas inscrições do mesmo usuário
✅ **Preenchimento inteligente**: Combina dados mais completos de múltiplas inscrições
✅ **Mapeamento de atividades**: Detecta automaticamente o tipo de atividade
✅ **Controle de presença**: Inclui campo `attendedAt` para rastrear check-ins
✅ **Status de pagamento**: Inclui campo `paymentStatus` para cada atividade
✅ **Validação de dados**: Remove duplicatas e valida campos obrigatórios
✅ **Estatísticas detalhadas**: Relatório completo da transformação

## Estatísticas da Última Execução
- **350 subscriptions** → **320 users únicos**
- **Consolidação**: 1.09 inscrições por usuário
- **Usuários com múltiplas atividades**: 5
- **Presenças registradas**: 206 atividades com check-in (63.4% de taxa de presença)
- **Ausências**: 119 atividades sem check-in
- **Taxa de completude**: 97.8% com telefone, 43.8% com CRM

## Mapeamento de Campos
| Subscription | User | Observações |
|-------------|------|-------------|
| `personalInfo.fullName` | `name` | Campo obrigatório |
| `personalInfo.email` | `email` | Campo obrigatório |
| `personalInfo.cpf` | `cpf` | Chave de consolidação |
| `personalInfo.phone` | `phone` | Limpeza automática |
| `personalInfo.crm` | `crm` | Apenas números |
| `personalInfo.address.*` | `address`, `city`, etc. | Endereço completo |
| `selectedItems.*` | `congresspersonData[].activity` | Detecção automática |
| `selectedItems.*.attendedAt` | `congresspersonData[].attendedAt` | Data/hora do check-in |
| `asaasData.status` | `congresspersonData[].paymentStatus` | Status do pagamento (RECEIVED→CONFIRMED) |

## Tipos de Atividade
- `journey` → `CONGRESS`
- `workshops` → `WORKSHOP`
- `courses` → `COURSE`
- `dayUse` → `DAYUSE`

## Status de Pagamento Encontrados (após normalização)
- `CONFIRMED`: 260 atividades (74.3%) - inclui RECEIVED normalizados
- `FREE`: 34 atividades (9.7%)
- `PENDING`: 23 atividades (6.6%)
- `OVERDUE`: 5 atividades (1.4%)
- `REFUNDED`: 2 atividades (0.6%)
- `REFUND_REQUESTED`: 1 atividade (0.3%)
