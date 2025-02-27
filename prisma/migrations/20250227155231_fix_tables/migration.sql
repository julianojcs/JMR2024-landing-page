-- CreateTable
CREATE TABLE "speakers" (
    "id" SERIAL NOT NULL,
    "full_name" VARCHAR(150) NOT NULL,
    "badge_name" VARCHAR(25) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "city" TEXT,
    "state" TEXT,
    "category" TEXT NOT NULL,
    "curriculum" TEXT NOT NULL,
    "lecture_name" TEXT,
    "photo_path" TEXT,
    "year" INTEGER NOT NULL DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "speakers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "speakers2" (
    "id" SERIAL NOT NULL,
    "full_name" VARCHAR(150) NOT NULL,
    "badge_name" VARCHAR(25) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "city" TEXT,
    "state" TEXT,
    "curriculum" TEXT NOT NULL,
    "photo_path" TEXT,
    "year" INTEGER NOT NULL DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "speakers2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lectures" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200),
    "is_fixed" BOOLEAN NOT NULL DEFAULT false,
    "is_new" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lectures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "is_fixed" BOOLEAN NOT NULL DEFAULT false,
    "is_new" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "speaker2_lectures" (
    "speakerId" INTEGER NOT NULL,
    "lectureId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "speaker2_lectures_pkey" PRIMARY KEY ("speakerId","lectureId")
);

-- CreateTable
CREATE TABLE "speaker2_categories" (
    "speakerId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "speaker2_categories_pkey" PRIMARY KEY ("speakerId","categoryId")
);

-- AddForeignKey
ALTER TABLE "speaker2_lectures" ADD CONSTRAINT "speaker2_lectures_speakerId_fkey" FOREIGN KEY ("speakerId") REFERENCES "speakers2"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "speaker2_lectures" ADD CONSTRAINT "speaker2_lectures_lectureId_fkey" FOREIGN KEY ("lectureId") REFERENCES "lectures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "speaker2_categories" ADD CONSTRAINT "speaker2_categories_speakerId_fkey" FOREIGN KEY ("speakerId") REFERENCES "speakers2"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "speaker2_categories" ADD CONSTRAINT "speaker2_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
