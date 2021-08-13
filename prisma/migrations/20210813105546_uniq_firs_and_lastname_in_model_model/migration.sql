/*
  Warnings:

  - A unique constraint covering the columns `[firstName,lastName]` on the table `Model` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Model.firstName_lastName_unique" ON "Model"("firstName", "lastName");
