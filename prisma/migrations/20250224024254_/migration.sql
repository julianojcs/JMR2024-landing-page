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
