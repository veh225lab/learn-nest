-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "bio" TEXT,
    "userId" INTEGER,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
