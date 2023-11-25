db.animals.find({ type: "Bird" });

db.animals.find({ found_in_countries: { $in: ["Australia"] } });

db.animals.find({ conservation_status: "Critically Endangered" });

db.animals.find({ $and: [{ diet: "Herbivore" }, { habitat: "Forest" }] });

db.animals.find();

db.animals.aggregate([
  {
    $addFields: {
      "physical_characteristics.weight": {
        $toDouble: {
          $replaceAll: {
            input: "$physical_characteristics.weight",
            find: " kg", // Make sure to include the space before kg if it's there.
            replacement: "",
          },
        },
      },
    },
    $match: {
      "physical_characteristics.weight": { $gt: 400 },
    },
  },
]);

db.animals.find({ "physical_characteristics.height": { $regex: "^0" } });

db.animals.find({ found_in_countries: { $in: ["China"] } });

db.animals.find({
  $and: [{ diet: "Omnivore" }, { conservation_status: "Endangered" }],
});

db.animals.find({ common_name: { $regex: "^Lion" } });

db.animals.aggregate([
  {
    $addFields: {
      "physical_characteristics.length": {
        $toDouble: {
          $replaceAll: {
            input: "$physical_characteristics.length",
            find: " m", // Make sure to include the space before m if it's there.
            replacement: "",
          },
        },
      },
    },
    $match: {
      "physical_characteristics.length": { $gt: 2 },
    },
  },
]);

db.animals.find({ found_in_countries: { $regex: "Africa$" } });

db.animals.find({ scientific_name: { $regex: "^A" } });

db.animals.aggregate([
  {
    $addFields: {
      "physical_characteristics.weight": {
        $toDouble: {
          $replaceAll: {
            input: "$physical_characteristics.weight",
            find: " kg", // Make sure to include the space before kg if it's there.
            replacement: "",
          },
        },
      },
    },
    $match: {
      "physical_characteristics.weight": { $lt: 50 },
    },
    $match: {
      diet: "Carnivore",
    },
  },
]);

db.animals.find({
  $and: [{ habitat: "Desert" }, { conservation_status: "Vulnerable" }],
});

db.animals.find({ common_name: { $regex: "Tiger" } });
