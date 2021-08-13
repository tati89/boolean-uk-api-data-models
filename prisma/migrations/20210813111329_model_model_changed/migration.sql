/*
  Warnings:

  - A unique constraint covering the columns `[firstName,lastName,id]` on the table `Model` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Model.firstName_lastName_unique";

-- CreateIndex
CREATE UNIQUE INDEX "Model.firstName_lastName_id_unique" ON "Model"("firstName", "lastName", "id");
