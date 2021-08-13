const { event, model } = require("../../utils/dbClient");

function getAllEvents(req, res) {
  event
    .findMany()
    .then((events) => res.json({ events }))
    .catch((error) => res.json({ error: error.message }));
}

const getModelsforSpecificEvent = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const fullData = await event.findMany({
      where: { model: { id } },
      include: {
        model: true,
      },
    });

    const eventName = fullData[0].name;

    const models = fullData.map((model) => model.model);

    res.json({ event: `${eventName}`, models });
  } catch (error) {
    res.json({
      error: `Event with ID ${id} doesn't exict, no models can be found`,
    });
  }
};

module.exports = { getAllEvents, getModelsforSpecificEvent };
