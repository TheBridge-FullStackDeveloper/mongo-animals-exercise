//1. Encuentra todos los animales con el tipo "Ave".
db.animals.find({type: 'Bird'})

//2. Lista todos los animales encontrados en "Australia".
db.animals.find({found_in_countries: 'Australia'})

//3. Recupera los animales con un estado_de_conservación de "En Peligro Crítico".
db.animals.find({conservation_status: 'Critically Endangered'})

//4. Selecciona los animales que son "Herbívoros" y tienen un hábitat de "Bosque".
db.animals.find({diet: 'Herbivore' , habitat: 'Forest'})

//5. Obtén todos los animales con un peso superior a 400 kg.

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
        "physical_characteristics.weight": {
          $gt: 400,
        },
      },
    },
  ]);

//6. Busca todos los animales con una altura inferior a 1 metro.
db.animals.find({ "physical_characteristics.height": { "$ne": 1 } })

//7. Consulta por animales que tienen "China" en su lista de países_donde_se_encuentran.
db.animals.find({found_in_countries: 'China'})

//8. Encuentra animales con una dieta de "Omnívoro" y un estado_de_conservación de "En Peligro".
db.animals.find({diet:'Omnivore' , conservation_status: 'Endangered'})

//9. Muestra todos los animales que tienen "León" en su nombre_común.
db.animals.find({ common_name: { $regex: "^Lion" } })

//10. Extrae todas las entradas que tienen una longitud mayor a 2 metros.
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
        "physical_characteristics.length": {
          $gt: 2,
        },
      },
    },
  ]);
  
//11. Filtra los animales que tienen una longevidad de más de 20 años.
//no se puede hacer
db.animals.find()

//12. Encuentra los animales que tienen "África" en su lista de países_donde_se_encuentran.
db.animals.find({ found_in_countries: { $regex: "Africa$" } });

//13. Lista todos los animales cuyo nombre_científico comienza con la letra "A".
db.animals.find({ "scientific_name": { "$regex": "^A" } })

//14. Busca animales que son "Carnívoros" y tienen un peso inferior a 50 kg.
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
        $and: [
          {
            diet: "Carnivore",
          },
          {
            "physical_characteristics.weight": {
              $lt: 50,
            },
          },
        ],
      },
    },
  ]);

//15. Recupera todos los animales que tienen un estado_de_conservación de "Vulnerable" y un hábitat de "Desierto".
db.animals.find({ habitat: 'Desert' ,  conservation_status: 'Vulnerable' }),

//16. Encuentra los animales cuyo nombre_común contiene la palabra "Tigre".
db.animals.find({common_name: { $regex: "^Tiger" } })