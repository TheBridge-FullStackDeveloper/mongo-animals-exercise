db.collection.find({ type: "Bird" });
db.collection.find({ found_in_countries: "Australia" });
db.collection.find({ conservation_status: "Critically Endangered" });
db.collection.find({ diet: "Herbivore", habitat: "Forest" });
db.collection.find([
  {
    $addFields: {
      "physical_characteristics.weight": {
        $toDouble: {
          $replaceAll: {
            input: "$physical_characteristics.weight",
            find: " kg",
            // Make sure to include the space before kg if it's there.
            replacement: "",
          },
        },
      },
    },
  },
  {
    $match: {
      "physical_characteristics.weight": {
        $gt: 400,
      },
    },
  },
]);
db.collection.find([
  {
    $addFields: {
      "physical_characteristics.height": {
        $toDouble: {
          $replaceAll: {
            input: "$physical_characteristics.height",
            find: " m",
            // Make sure to include the space before kg if it's there.
            replacement: "",
          },
        },
      },
    },
  },
  {
    $match: {
      "physical_characteristics.height": {
        $lt: 1,
      },
    },
  },
]);
db.collection.find({ found_in_countries: "China" });
db.collection.find({ diet: "Omnivore", conservation_status: "Endangered" });
db.collection.find({ common_name: { $regex: "^Lion" } });
db.collection.find([
  {
    $addFields: {
      "physical_characteristics.length": {
        $toDouble: {
          $replaceAll: {
            input: "$physical_characteristics.length",
            find: " m",
            // Make sure to include the space before kg if it's there.
            replacement: "",
          },
        },
      },
    },
  },
  {
    $match: {
      "physical_characteristics.length": {
        $gt: 2,
      },
    },
  },
]);
db.collection.find({ "found_in_countries.": { $regex: "Africa" } });
db.collection.find({ scientific_name: { $regex: "^A" } });
db.collection.find([
  {
    $match: {
      diet: "Carnivore",
    },
  },
  {
    $addFields: {
      "physical_characteristics.weight": {
        $toDouble: {
          $replaceAll: {
            input: "$physical_characteristics.weight",
            find: " kg",
            // Make sure to include the space before kg if it's there.
            replacement: "",
          },
        },
      },
    },
  },
  {
    $match: {
      "physical_characteristics.weight": {
        $lt: 50,
      },
    },
  },
]);
db.collection.find({ conservation_status: "Vulnerable", habitat: "Desert" });
db.collection.find({ common_name: { $regex: "Tiger" } });
