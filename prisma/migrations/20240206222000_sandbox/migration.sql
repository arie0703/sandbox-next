-- CreateTable
CREATE TABLE "Profiles" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nickname" STRING NOT NULL,
    "iconPattern" STRING NOT NULL,
    "residence" STRING NOT NULL,
    "comment" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profiles_pkey" PRIMARY KEY ("id")
);
