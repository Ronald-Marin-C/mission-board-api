-- CreateTable
CREATE TABLE "Mission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "hourlyRate" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN'
);
