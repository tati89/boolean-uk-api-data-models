const { PrismaClient } = require("@prisma/client");

const dbClient = new PrismaClient();

const {
  designers,
  models,
  outfits,
  events,
  guests,
} = require("../src/utils/mockData");

async function seed() {
  console.log("seed load");

  for (const designer of designers) {
    await dbClient.designer.create({
      data: designer,
    });
  }

  for (const model of models) {
    await dbClient.model.create({
      data: model,
    });
  }

  for (const guest of guests) {
    await dbClient.guest.create({
      data: guest,
    });
  }

  for (const outfit of outfits) {
    await dbClient.outfit.create({
      data: outfit,
    });
  }
  for (const event of events) {
    await dbClient.event.create({
      data: event,
    });
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await dbClient.$disconnect();
  });
