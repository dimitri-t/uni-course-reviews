/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Test";

-- CreateTable
CREATE TABLE "Courses" (
    "courseCode" TEXT NOT NULL,
    "uniOrg" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "avgDifficulty" TEXT NOT NULL,
    "avgRating" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Courses_courseCode_key" ON "Courses"("courseCode");
