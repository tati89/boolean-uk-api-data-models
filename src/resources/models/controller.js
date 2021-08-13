const { model, outfit } = require("../../utils/dbClient");

const getAllModels = async (req, res) => {
  try {
    const models = await model.findMany();
    res.json({ models });
  } catch (error) {
    res.json({ error: error.message });
  }
};

async function getModelsByAgency(req, res) {
  const agency = req.params.agency;
  try {
    const models = await model.findMany({
      where: {
        agency,
      },
    });
    const result = models.length
      ? models
      : `Agency ${agency} not in the system.`;

    res.json({ msg: result });
  } catch (error) {
    res.json({ error: error.message });
  }
}

const addAModel = async (req, res) => {
  const { firstName, lastName, agency } = req.body;

  try {
    const exist = await model.findUnique({
      where: {
        lastName,
      },
    });

    if (exist) {
      res.json({ msg: "Model already exict in DB" });
    } else {
      const newModel = await model.create({
        data: {
          firstName,
          lastName,
          agency,
        },
      });
      res.json({ created: newModel });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

async function updateModel(req, res) {
  const id = parseInt(req.params.id);
  const updateInfo = req.body;

  try {
    const exist = await model.findUnique({
      where: {
        id,
      },
    });
    const updated = await model.update({
      where: {
        id,
      },
      data: {
        ...exist,
        ...updateInfo,
      },
    });
    res.json({ updated });
  } catch (error) {
    res.json({ error: `ID ${id} doesn't exict` });
  }
}

const removeModel = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const removed = await model.delete({
      where: {
        id,
      },
    });
    res.json({ removed });
  } catch (error) {
    res.json(`No ID ${id} found..`);
  }
};

async function getModelOutfits(req, res) {
  const id = parseInt(req.params.id);

  try {
    const outfits = await outfit.findMany({
      where: { model: { id } },
      select: {
        description: true,
        season: true,
      },
    });
    const result = outfits.length
      ? outfits
      : `Model ${id} doen't have any outfits `;
    res.json({ outfits: result });
  } catch (error) {
    res.json({ error: error.message });
  }
}
module.exports = {
  getAllModels,
  getModelsByAgency,
  addAModel,
  updateModel,
  removeModel,
  getModelOutfits,
};
