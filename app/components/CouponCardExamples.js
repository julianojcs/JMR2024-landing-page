// Exemplos de dados para testar diferentes estados do CouponCard
// Este arquivo pode ser usado para testes e demonstrações

export const couponExamples = {
  // Cupom ATIVO - funcionando normalmente
  active: {
    _id: "1",
    code: "ACTIVE2025",
    name: "Desconto de Verão Ativo",
    year: 2025,
    active: true,
    discount: {
      type: "PERCENTAGE",
      value: 15,
      maxAmount: 50
    },
    validity: {
      from: new Date("2025-01-01"),
      until: new Date("2025-12-31")
    },
    usage: {
      used: 25,
      limit: 100,
      limitPerUser: 1
    },
    restrictions: {
      minOrderValue: 100,
      applicableCategories: [1, 2],
      applicableProducts: ["PROD1", "PROD2"]
    }
  },

  // Cupom EXPIRADO - passou da data
  expired: {
    _id: "2",
    code: "EXPIRED2024",
    name: "Promoção de Natal Expirada",
    year: 2024,
    active: true,
    discount: {
      type: "FIXED",
      value: 25
    },
    validity: {
      from: new Date("2024-12-01"),
      until: new Date("2024-12-31")
    },
    usage: {
      used: 45,
      limit: 200,
      limitPerUser: 2
    },
    restrictions: {
      minOrderValue: 75,
      applicableCategories: [0], // todas as categorias
      applicableProducts: ["ALL"]
    }
  },

  // Cupom ESGOTADO - 100% das utilizações consumidas
  redeemed: {
    _id: "3",
    code: "SOLD100",
    name: "Oferta Flash Esgotada",
    year: 2025,
    active: true,
    discount: {
      type: "PERCENTAGE",
      value: 50,
      maxAmount: 100
    },
    validity: {
      from: new Date("2025-06-01"),
      until: new Date("2025-07-31")
    },
    usage: {
      used: 50,
      limit: 50, // completamente usado
      limitPerUser: 1
    },
    restrictions: {
      minOrderValue: 200,
      applicableCategories: [1],
      applicableProducts: ["PREMIUM"]
    }
  },

  // Cupom QUASE ESGOTADO - >90% das utilizações
  soldOut: {
    _id: "4",
    code: "ALMOST90",
    name: "Super Desconto Quase Esgotado",
    year: 2025,
    active: true,
    discount: {
      type: "PERCENTAGE",
      value: 30
    },
    validity: {
      from: new Date("2025-05-01"),
      until: new Date("2025-08-31")
    },
    usage: {
      used: 92,
      limit: 100, // 92% usado - trigger para sold_out
      limitPerUser: 3
    },
    restrictions: {
      minOrderValue: 50,
      applicableCategories: [2, 3],
      applicableProducts: ["BASIC", "STANDARD"]
    }
  },

  // Cupom INATIVO - desativado manualmente
  inactive: {
    _id: "5",
    code: "INACTIVE25",
    name: "Cupom Desativado Temporariamente",
    year: 2025,
    active: false, // desativado
    discount: {
      type: "FIXED",
      value: 40
    },
    validity: {
      from: new Date("2025-03-01"),
      until: new Date("2025-09-30")
    },
    usage: {
      used: 10,
      limit: 150,
      limitPerUser: 2
    },
    restrictions: {
      minOrderValue: 120,
      applicableCategories: [1, 2, 3],
      applicableProducts: ["VIP"]
    }
  },

  // Cupom PENDENTE - ainda não iniciou
  pending: {
    _id: "6",
    code: "FUTURE25",
    name: "Promoção Black Friday 2025",
    year: 2025,
    active: true,
    discount: {
      type: "PERCENTAGE",
      value: 70,
      maxAmount: 200
    },
    validity: {
      from: new Date("2025-11-25"), // data futura
      until: new Date("2025-11-30")
    },
    usage: {
      used: 0,
      limit: 500,
      limitPerUser: 1
    },
    restrictions: {
      minOrderValue: 300,
      applicableCategories: [0], // todas
      applicableProducts: ["ALL"]
    }
  }
};

// Dados mock para categorias e produtos
export const mockCategories = [
  { value: 0, label: "Todas as Categorias" },
  { value: 1, label: "Eletrônicos" },
  { value: 2, label: "Roupas" },
  { value: 3, label: "Casa e Jardim" },
  { value: 4, label: "Esportes" }
];

export const mockProducts = [
  { value: "ALL", label: "Todos os Produtos" },
  { value: "PROD1", label: "Smartphone Premium" },
  { value: "PROD2", label: "Notebook Gamer" },
  { value: "BASIC", label: "Plano Básico" },
  { value: "STANDARD", label: "Plano Standard" },
  { value: "PREMIUM", label: "Plano Premium" },
  { value: "VIP", label: "Plano VIP" }
];

// Função para gerar exemplos de teste
export const generateTestData = () => {
  return Object.values(couponExamples);
};

// Exemplo de uso do componente com diferentes estados
export const CouponCardExample = `
import React from 'react';
import CouponCard from './CouponCard';
import { couponExamples, mockCategories, mockProducts } from './CouponCardExamples';

function CouponShowcase() {
  const handleEdit = (cupom) => {
    console.log('Editando cupom:', cupom.code);
  };

  const handleDelete = (cupom) => {
    console.log('Excluindo cupom:', cupom.code);
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '20px',
      padding: '20px'
    }}>
      {Object.entries(couponExamples).map(([status, cupom]) => (
        <div key={cupom._id}>
          <h3>Estado: {status.toUpperCase()}</h3>
          <CouponCard
            cupom={cupom}
            onEdit={handleEdit}
            onDelete={handleDelete}
            categories={mockCategories}
            products={mockProducts}
          />
        </div>
      ))}
    </div>
  );
}

export default CouponShowcase;
`;

export default couponExamples;
