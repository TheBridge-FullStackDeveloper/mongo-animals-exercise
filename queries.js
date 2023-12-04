db.animales.find({ type: "Bird" });

db.animales.find({ found_in_countries: "Australia" });

db.animales.find({ conservation_status: "Vulnerable" });

db.animales.find({ diet: "Herbivore", habitat: "Forest" });

db.animales.find({ "physical_characteristics.weight": { $gt: "400 kg" } });

db.animales.find({ "physical_characteristics.height": { $lt: "1 m" } });

db.animales.find({ found_in_countries: "China" });

db.animales.find({ diet: "Omnivore", conservation_status: "Vulnerable" });

db.animales.find({ common_name: /Lion/ });

db.animales.find({ "physical_characteristics.length": { $gt: "2 m" } });

db.animales.find({ "physical_characteristics.length": { $gt: "2 m" } });

db.animales.find({ found_in_countries: "Africa" });

db.animales.find({ scientific_name: /^A/ });

db.animales.find({ diet: "Carnivore", "physical_characteristics.weight": { $lt: "50 kg" } });

db.animales.find({ conservation_status: "Vulnerable", habitat: "Desert" });

db.animales.find({ common_name: /Tigger/ });
