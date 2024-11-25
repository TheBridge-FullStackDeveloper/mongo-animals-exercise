1.
db.animals.find({type: "Bird"})
2.
db.animals.find({found_in_countries: "Australia"})
3.
db.animals.find({conservation_status: "Critically Endangered"})
4.
//no hay
db.animals.find({ "$and": [{"diet": "Herbivore"}, {"habitat": "Forest"}]})
5.
db.animals.find({ "physical_characteristics.weight": {"$gt": 400}})
6.
db.animals.find({ "physical_characteristics.height": {"$lt": 100}})
7.
db.animals.find({found_in_countries: "China"})
8.
db.animals.find({ "$and": [{"diet": "Omnivore"}, {"conservation_status": "Endangered"}]})
9.
db.animals.find({ "common_name": {"$regex": ".*Lion.*"}})
10.
db.animals.find({ "physical_characteristics.length": {"$gt": 2}})
11.
db.animals.find({found_in_countries: "China"})
12.
db.animals.find({scientific_name: {"$regex": "(?i)^a"}})
13.
db.animals.find({ "$and": [{"diet": "Carnivore"}, {"physical_characteristics.weight": {"$lt": 50000}}]})
14.
db.animals.find({ "$and": [{conservation_status: "Vulnerable"}, {"habitat": "Desert"}]})
15.
db.animals.find({ "common_name": {"$regex": ".*Tiger.*"}})


