
//Encuentra todos los animales con el tipo "Ave".
db.animals.find({ type: "Ave" });

//Lista todos los animales encontrados en "Australia".
db.animals.find({ "found_in_countries": "Australia" });
//{found_in_countries: 'Australia'}

//Recupera los animales con un estado_de_conservación de "En Peligro Crítico".
db.animals.find({ "conservation_status": "Endangered" }).forEach(printResult);

//{conservation_status: 'Endangered'}


//Selecciona los animales que son "Herbívoros" y tienen un hábitat de "Bosque".
//{ "diet": "Herbivore", "habitat": "Forest" }


//Obtén todos los animales con un peso superior a 400 kg.
//{ "physical_characteristics.weight": { "$regex": "^[4-9]\\d{2}\\." } }


//Busca todos los animales con una altura inferior a 1 metro.
//{ "physical_characteristics.height": { "$regex": "^0\\.\\d+ m" } }

//Consulta por animales que tienen "China" en su lista de países_donde_se_encuentran.
//{ "found_in_countries": "China" }

//Muestra todos los animales que tienen "León" en su nombre_común.
//{ "common_name": { "$regex": "Lion", "$options": "i" } }


//Filtra los animales que tienen una longevidad de más de 20 años.
//

//Encuentra los animales que tienen "África" en su lista de países_donde_se_encuentran.
//{"found_in_countries": "South Africa"}



//Lista todos los animales cuyo nombre_científico comienza con la letra "A".
//{"scientific_name": { "$regex": "^A", "$options": "i" }}

//Busca animales que son "Carnívoros" y tienen un peso inferior a 50 kg.
/*{
    "diet": "Carnivore",
    "physical_characteristics.weight": { "$lt": "50 kg" }
  }*/


  //Recupera todos los animales que tienen un estado_de_conservación de "Vulnerable" y un hábitat de "Desierto".
  /*{
  "habitat": "Desert",
  "conservation_status": "Vulnerable"
}*/


//Encuentra los animales cuyo nombre_común contiene la palabra "Tigre".
/*{
    "common_name": { "$regex": "Tiger", "$options": "i" }
}*/
