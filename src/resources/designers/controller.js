const { designer } = require("../../utils/dbClient");

const getAllDesigners = async (req, res) => {
  try {
    const designers = await designer.findMany();
    res.json({ data: designers });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getById = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const data = await designer.findUnique({
      where: {
        id: id,
      },
    });
    res.json({ data: data });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const addDesigner = async (req, res) => {
  const newDesigner = req.body;

  try {
    const added = await designer.create({
      data: {
        ...newDesigner,
      },
    });
    res.json({ created: added });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updateDesigner = async (req, res) => {
  const id = Number(req.params.id);
  const updateInfo = req.body;

  try {
    const exict = await designer.findUnique({
      where: {
        id,
      },
    });

    const updated = await designer.update({
      where: {
        id,
      },
      data: {
        ...exict,
        ...updateInfo,
      },
    });
    res.json({ updated });
  } catch (error) {
    res.json({ error: `ID ${id} not found..` });
  }
};

async function deleteDesigner(req, res) {
  const id = Number(req.params.id);

  try {
    const deleted = await designer.delete({
      where: {
        id,
      },
    });
    res.json({ deleted });
  } catch (error) {
    res.json({ error: `ID ${id} not in a system` });
  }
}

module.exports = {
  getAllDesigners,
  getById,
  addDesigner,
  updateDesigner,
  deleteDesigner,
};
