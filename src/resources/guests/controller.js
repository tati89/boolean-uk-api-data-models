const { guset, outfit } = require("../../utils/dbClient");

const getAllGuests = async (req, res) => {
  try {
    const guests = await guest.findMany();
    res.json({ guests });
  } catch (error) {
    res.json({ error: error.message });
  }
};

async function getById(req, res) {
  const id = parseInt(req.params.id);

  try {
    const foundGuest = await guest.findUnique({
      where: {
        id,
      },
    });
    const result = foundGuest ? foundGuest : `ID ${id} not found..`;
    res.json({ foundGuest: result });
  } catch (error) {
    res.json({ error: error.message });
  }
}

const findPurchases = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const found = await guest.findUnique({
      where: {
        id,
      },
      include: {
        purchases: true,
      },
    });
    const result = found ? found : `ID ${id} not found..`;
    res.json({ purchases: result });
  } catch (error) {
    res.json({ error: error.message });
  }
};

async function totalSpent(req, res) {
  const id = Number(req.params.id);

  try {
    const prices = await outfit.findMany({
      where: {
        guestId: id,
      },
      select: {
        price: true,
      },
    });
    console.log(prices);
    let total = 0;
    for (const price of prices) {
      total += price.price;
    }
    const result = total ? total : `No purchases found related to ID ${id}`;
    res.json({ Total_spent: result });
  } catch (error) {
    res.json({ error: error.message });
  }
}

module.exports = { getAllGuests, getById, findPurchases, totalSpent };
