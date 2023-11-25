db.Animals_exercise.find({type: "Bird"});

db.Animals_exercise.find({found_in_countries : "Australia"});

db.Animals_exercise.find({conservation_status: "Critically Endangered"});

db.Animals_exercise.find ({$and: [{diet: "Herbivore"},{habitat:"Forest"}]});  

db.Animals_exercise.aggregate([
    {
        $addFields:
        {
            "physical_characteristics.weight": {
              $toDouble: {
                $replaceAll: {
                  input: "$physical_characteristics.weight",
                  find: " kg",
                  replacement: ""
                }
              }
            }
        },

        $match: 
        {
            "physical_characteristics.weight": {
              $gt: 400,
            },
          },
    }
    
  ])

db.Animals_exercise.find({"physical_characteristics.height": {$regex: "^0."}});

db.Animals_exercise.find({"found_in_countries.0":"China"});

db.Animals_exercise.find({$and: [{diet: "Omnivore"},{conservation_status:"Endangered"}]});

db.Animals_exercise.find({common_name: {$regex: "^Lion" }});
db.Animals_exercise.aggregate([
{
    $addFields: {
      "physical_characteristics.length": {
        $toDouble: {
          $replaceAll: {
            input:
              "$physical_characteristics.length",
            find: " m",
            replacement: ""
          }
        }
      }
    }
  },
  
  {
    $match:
      
      {
        "physical_characteristics.length": {
          $gt: 2.0,
        }
      }
  }
]);

//ejercico 11 no se puede hacer 

db.Animals_exercise.find({"found_in_countries.":{$regex: "Africa" }});

db.Animals_exercise.find({scientific_name:{$regex: "^A"}});

db.Animals_exercise.find([
    {
      $addFields: {
        "physical_characteristics.weight": {
          $toDouble: {
            $replaceAll: {
              input:
                "$physical_characteristics.weight",
              find: " kg",
              replacement: "",
            },
          },
        },
      },
    },
    {
      $match:
        
        {
          "physical_characteristics.weight": {
            $lt: 50,
          },
        },
    },
  ]);

  db.Animals_exercise.find ({$and:[{conservation_status:"Vulnerable"},{habitat:"Desert"}]});

  db.Animals_exercise.find({common_name: {$regex: "^Tiger" }});

















