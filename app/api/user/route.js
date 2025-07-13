import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '@/models/mongo/User.js';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jornada';
console.log('Conectando ao MongoDB em:', MONGODB_URI);

// Função para conectar ao MongoDB
async function connectToMongoDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
  }
}

// POST /api/user - Buscar usuário por CPF e email
export async function POST(request) {
  try {
    const { cpf, email, action } = await request.json();

    if (!cpf || !email) {
      return NextResponse.json(
        { error: 'CPF e email são obrigatórios.' },
        { status: 400 }
      );
    }

    // Conectar ao MongoDB
    await connectToMongoDB();

    if (action === 'find') {
      // Buscar usuário por CPF e email
      const user = await User.findByCpfAndEmail(cpf.replace(/\D/g, ''), email);

      if (!user) {
        return NextResponse.json(
          { error: 'Usuário não encontrado com o CPF e email informados.' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        user: {
          ...user.toObject(), // Converte o documento Mongoose para um objeto simples
        //  _id: user._id,
        //   name: user.name,
        //   email: user.email,
        //   cpf: user.cpf,
        //   city: user.city,
        //   state: user.state,
        //   roles: user.roles
        }
      });
    }

    return NextResponse.json(
      { error: 'Ação não especificada ou inválida.' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Erro ao buscar usuário:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Erro interno do servidor.',
        details: error.message
      },
      { status: 500 }
    );
  }
}

// GET /api/user - Listar usuários ou obter informações específicas
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');
    const role = searchParams.get('role');
    const action = searchParams.get('action');

    // Conectar ao MongoDB
    await connectToMongoDB();

    if (userId) {
      // Buscar usuário específico por ID
      const user = await User.findById(userId);

      if (!user) {
        return NextResponse.json(
          { error: 'Usuário não encontrado.' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          cpf: user.cpf,
          city: user.city,
          state: user.state,
          roles: user.roles,
          isActive: user.isActive
        }
      });
    }

    if (role) {
      // Buscar usuários por papel/role
      const users = await User.findByRole(role);

      return NextResponse.json({
        success: true,
        role,
        count: users.length,
        users: users.map(user => ({
          _id: user._id,
          name: user.name,
          email: user.email,
          roles: user.roles
        }))
      });
    }

    if (action === 'stats') {
      // Estatísticas de usuários
      const stats = await User.aggregate([
        { $match: { isActive: true } },
        { $unwind: '$roles' },
        { $group: { _id: '$roles', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]);

      const totalUsers = await User.countDocuments({ isActive: true });

      return NextResponse.json({
        success: true,
        totalUsers,
        roleStats: stats
      });
    }

    // Listar todos os usuários (paginado)
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 50;
    const skip = (page - 1) * limit;

    const users = await User.find({ isActive: true })
      .select('_id name email roles isActive')
      .skip(skip)
      .limit(limit)
      .sort({ name: 1 });

    const total = await User.countDocuments({ isActive: true });

    return NextResponse.json({
      success: true,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      users
    });

  } catch (error) {
    console.error('Erro ao processar requisição GET:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Erro interno do servidor.',
        details: error.message
      },
      { status: 500 }
    );
  }
}
