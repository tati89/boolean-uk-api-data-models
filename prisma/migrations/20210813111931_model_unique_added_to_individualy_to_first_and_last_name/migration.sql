/*
  Warnings:

  - A unique constraint covering the columns `[firstName]` on the table `Model` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[lastName]` on the table `Model` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Model.firstName_lastName_id_unique";

-- CreateIndex
CREATE UNIQUE INDEX "Model.firstName_unique" ON "Model"("firstName");

-- CreateIndex
CREATE UNIQUE INDEX "Model.lastName_unique" ON "Model"("lastName");
