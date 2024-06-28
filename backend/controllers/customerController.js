const customers = require("../models/customerSchema");

const getCustomers = async (req, res) => {
  try {
    const getDataCust = await customers.find();
    res.json(getDataCust);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const getIDCust = await customers.findById(req.params.id);
    if (!getIDCust) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json(getIDCust);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const postCustomers = async (req, res) => {
  const { username, email, address, creditCard, paket, harga } = req.body;

  if (!username || !email || !address || !creditCard) {
    return res.status(400).json("ISI DATANYA!!!");
  }

  try {
    const sudahOrder = await customers.findOne({ username: username });
    if (sudahOrder) {
      return res.status(400).json("ANDA SUDAH MEMESAN!!");
    } else {
      const addOrder = new customers({
        username,
        email,
        address,
        creditCard,
        paket,
        harga,
      });
      await addOrder.save();
      res.status(201).json(addOrder);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const updateDataCust = await customers.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    if (updateDataCust.matchedCount === 0) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(updateDataCust);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const deleteDataCust = await customers.findByIdAndDelete(req.params.id);
    if (!deleteDataCust) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(deleteDataCust);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getDailyOrderStats = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const orders = await customers.aggregate([
      {
        $match: {
          createdAt: {
            $gte: today
          }
        }
      },
      {
        $group: {
          _id: { $hour: "$createdAt" },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCustomers,
  getCustomerById,
  postCustomers,
  updateCustomer,
  deleteCustomer,
  getDailyOrderStats 
};
