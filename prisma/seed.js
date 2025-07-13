import { PrismaClient } from '@prisma/client'
import { fakerPT_BR } from '@faker-js/faker'
import { lectures, categories, speakers } from './data.js'

const prisma = new PrismaClient()

async function main() {
  // Reset all tables and restart IDs
  await prisma.$executeRaw`TRUNCATE TABLE "speakers" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "lectures" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "speaker_lectures" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "speaker_categories" RESTART IDENTITY CASCADE`;

  // Create categories
  const createdCategories = await Promise.all(
    categories.map(category =>
      prisma.category.create({
        data: { name: category.name, is_fixed: category.isFixed, is_new: false }
      })
    )
  )

  // Create lectures
  const createdLectures = await Promise.all(
    lectures.map(lecture =>
      prisma.lecture.create({
        data: {
          name: lecture.name,
          is_fixed: lecture.isFixed,
          is_new: false,
        }
      })
    )
  )

    // Create speakers from data.js
    const createdSpeakers = await Promise.all(
      speakers.map(speaker =>
        prisma.speaker.create({
          data: {
            full_name: speaker.full_name,
            badge_name: speaker.badge_name || speaker.full_name.split(' ')[0],
            email: speaker.email,
            phone: speaker.phone,
            cpf: speaker.cpf,
            city: speaker.city,
            state: speaker.state,
            curriculum: speaker.curriculum,
            category: speaker.categories,
            lectures: speaker.lectures,
            photo_path: speaker.photo_path,
            year: 2025
          }
        })
      )
    );

  // Create speakers
  const speakers = Array.from({ length: 10 }).map(() => {
    // Get random unique categories
    const randomCategories = fakerPT_BR.helpers.arrayElements(
      createdCategories,
      fakerPT_BR.number.int({ min: 1, max: 2 })
    );

    // Get random unique lectures
    const randomLectures = fakerPT_BR.helpers.arrayElements(
      createdLectures,
      fakerPT_BR.number.int({ min: 1, max: 6 })
    );
    return {
      full_name: fakerPT_BR.person.fullName(),
      badge_name: fakerPT_BR.person.firstName(),
      email: fakerPT_BR.internet.email().toLowerCase(),
      phone: fakerPT_BR.phone.number('(##)#####-####'),
      cpf: fakerPT_BR.string.numeric(11),
      city: fakerPT_BR.location.city(),
      state: fakerPT_BR.location.state().substring(0, 2).toUpperCase(),
      curriculum: fakerPT_BR.lorem.paragraphs(2),
      photo_path: 'https://res.cloudinary.com/dixe3b2i5/image/upload/v1740370431/default-avatar_gabqax.png',
      year: 2025,
      // Create random relationships with lectures and categories
      lectures: {
        create: randomLectures.map(lecture => ({
          lecture: {
            connect: { id: lecture.id }
          },
          created_at: new Date()
        }))
      },
      categories: {
        create: randomCategories.map(category => ({
          category: {
            connect: { id: category.id }
          },
          created_at: new Date()
        }))
      }
    }
  });

  // Create speakers with their relationships
  for (const speakerData of speakers) {
    await prisma.speaker.create({
      data: speakerData
    })
  }

  // Create speakers from data.js
  const createdDataSpeakers = await Promise.all(
    speakers.map(async (speaker) => {
      return prisma.speaker.create({
        data: {
          full_name: speaker.full_name,
          badge_name: speaker.badge_name || speaker.full_name.split(' ')[0],
          email: speaker.email,
          phone: speaker.phone,
          cpf: speaker.cpf,
          city: speaker.city,
          state: speaker.state,
          curriculum: speaker.curriculum,
          photo_path: speaker.photo_path,
          year: 2025,
          categories: {
            create: speaker.categories
          },
          lectures: {
            create: speaker.lectures
          }
        }
      });
    })
  );

  console.log('Seed completed successfully!')
  console.log(`Added:`)
  console.log(`- ${createdSpeakers.length + createdDataSpeakers} users`)
  console.log(`- ${createdCategories.length} categories`)
  console.log(`- ${createdLectures.length} lectures`)
  console.log(`- ${speakers.length} speakers`)
  console.log(`- ${speakers.length} speakers`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })