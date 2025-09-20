/*
  Warnings:

  - You are about to drop the column `org_version` on the `vocabulary` table. All the data in the column will be lost.
  - Added the required column `translation` to the `vocabulary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."vocabulary" DROP COLUMN "org_version",
ADD COLUMN     "translation" TEXT NOT NULL;
