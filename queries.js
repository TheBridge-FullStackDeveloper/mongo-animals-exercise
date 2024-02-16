// 1
db.animals.find({ type: "Bird" });

// 2
db.animals.find({ found_in_countries: "Australia" });

// 3
db.animals.find({ conservation_status: "Critically Endangered" });

// 4
db.animals.find({
    $and: [{ diet: "Herbivore" }, { habitat: "Forest" }],
  });

// 5
db.animals.aggregate([
  {
    $addFields: {
      "physical_characteristics.weight": {
        $toDouble: {
          $replaceAll: {
            input: "$physical_characteristics.weight",
            find: " kg",
            replacement: "",
          },
        },
      },
    },
  },
  {
    $match: {
      "physical_characteristics.weight": { $gt: 400 },
    },
  },
]);

// 6
db.animals.find({ "physical_characteristics.height": { $regex: "^0" } });

// 7
db.animals.find({ found_in_countries: "China" });

// 8
db.animals.find({
  $and: [{ diet: "Omnivore" }, { conservation_status: "Endangered" }],
});

// 9
db.animals.find({ common_name: { $regex: "Lion" } });

// 10
db.animals.aggregate([
  {
    $addFields: {
      "physical_characteristics.length": {
        $toDouble: {
          $replaceAll: {
            input: "$physical_characteristics.length",
            find: " m",
            replacement: "",
          },
        },
      },
    },
  },

  {
    $match: {
      "physical_characteristics.length": { $gt: 2 },
    },
  },
]);

// 11
db.animals.find({ found_in_countries: { $regex: "Africa" } });

// 12
db.animals.find({ scientific_name: { $regex: "^A" } });

// 13
db.animals.aggregate([
    {
      $addFields: {
        "physical_characteristics.weight": {
          $toDouble: {
            $replaceAll: {
              input: "$physical_characteristics.weight",
              find: " kg",
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

// 14
db.animals.find({
    $and: [{ habitat: "Desert" }, { conservation_status: "Vulnerable" }],
  });

// 15
db.animals.find({ common_name: { $regex: "Tiger" } });