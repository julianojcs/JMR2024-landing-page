import { PrismaClient } from '@prisma/client'
import { fakerPT_BR } from '@faker-js/faker'

const prisma = new PrismaClient()

const categories = ['Palestrante', 'Debatedor', 'Moderador', 'Convidado', 'Ouvinte']

async function main() {
  await prisma.speaker.deleteMany()

  const speakers = Array.from({ length: 10 }).map(() => ({
    full_name: fakerPT_BR.person.fullName(),
    badge_name: fakerPT_BR.person.firstName(),
    email: fakerPT_BR.internet.email().toLowerCase(),
    phone: fakerPT_BR.phone.number('(##)#####-####'),
    cpf: fakerPT_BR.string.numeric(11),
    city: fakerPT_BR.location.city(),
    state: fakerPT_BR.location.state().substring(0, 2).toUpperCase(),
    category: fakerPT_BR.helpers.arrayElement(categories),
    curriculum: fakerPT_BR.lorem.paragraphs(2),
    lecture_name: fakerPT_BR.helpers.arrayElement([
      'Avanços em Radiologia Diagnóstica',
      'Inteligência Artificial na Medicina',
      'Novos Métodos de Imageamento',
      'Radiologia Intervencionista',
      'Diagnóstico por Imagem em Pediatria'
    ]),
    photo_path: 'https://res.cloudinary.com/dixe3b2i5/image/upload/v1740370431/default-avatar_gabqax.png',
    year: 2025,
    created_at: new Date(),
    updated_at: new Date()
  }))

  for (const speaker of speakers) {
    await prisma.speaker.create({
      data: speaker
    })
  }

  console.log('Seed completed! Added', speakers.length, 'speakers')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })