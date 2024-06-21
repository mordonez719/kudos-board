-- AlterTable
ALTER TABLE "Board" ALTER COLUMN "author" SET DEFAULT 'anonymous';

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "upvotes" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "author" SET DEFAULT 'anonymous';
