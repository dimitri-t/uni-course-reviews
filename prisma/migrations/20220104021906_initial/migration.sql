-- CreateTable
CREATE TABLE "Courses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "courseName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "author" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "coursesId" INTEGER,
    CONSTRAINT "Review_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "Courses" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
