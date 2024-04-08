const Cars = require("./../models/carModel");

exports.getAllCars = async (req, res, next) => {
  try {
    const cars = await Cars.find();
    res.status(200).json({
      status: "success",
      cars,
      length: cars.length,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
