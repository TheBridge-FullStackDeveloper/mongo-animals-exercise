/* Using MongoDB Compass, write the queries that would satisfy the following requirements. */

/* Example: 

_id
1
common_name
"Eagle"
scientific_name
"Psittaciformes"
type
"Bird"
habitat
"Forest"
diet
"Omnivore"
description
"Description of Lion 1."
conservation_status
"Vulnerable"

physical_characteristics
Object
height
18
weight
4302
length
82

found_in_countries
Array (2)
0
"China"
1
"Canada"

*/ 

/* Encuentra todos los animales con el tipo "Ave". */

{ type: "Bird"} 

/* Lista todos los animales encontrados en "Australia". */

{ found_in_countries: "Australia" }

/* Recupera los animales con un estado_de_conservación de "En Peligro Crítico". */

{ conservation_status: "Critically Endangered" }

/* Selecciona los animales que son "Herbívoros" y tienen un hábitat de "Bosque". */

( { "$and": [{ "diet": "Herbivore" }, { "habitat": "Forest" }] } )

/* Obtén todos los animales con un peso superior a 400 kg. */

( { "physical_characteristics.weight": { "$gt": 400000} } )

/* Busca todos los animales con una altura inferior a 1 metro. */

( { "physical_characteristics.height": { "$lt": 100} } )

/* Consulta por animales que tienen "China" en su lista de países_donde_se_encuentran. */

{ found_in_countries: "China" }

/* Encuentra animales con una dieta de "Omnívoro" y un estado_de_conservación de "En Peligro". */

( { "$and": [{ "diet": "Omnivore"}, { "conservation_status": "Endangered"}] } )

/* Muestra todos los animales que tienen "León" en su nombre_común. */

( { common_name: "Lion" } )

/* Extrae todas las entradas que tienen una longitud mayor a 2 metros. */

( { "physical_characteristics.length": { "$gt": 200}})

/* Encuentra los animales que tienen la palabra "África" en su lista de países_donde_se_encuentran. */

({ found_in_countries: { $elemMatch: { $regex: "Africa", $options: "i"}}})

/* Lista todos los animales cuyo nombre_científico comienza con la letra "A". */

({ scientific_name: { $regex: "^A", $options: "i"}})

/* Busca animales que son "Carnívoros" y tienen un peso inferior a 50 kg. */

({ "$and": [{ diet: "Carnivore"}, { "physical_characteristics.weight": { "$lt": 50000}}]})

/* Recupera todos los animales que tienen un estado_de_conservación de "Vulnerable" y un hábitat de "Desierto". */

({ "$and": [{ conservation_status: "Vulnerable"}, { habitat: "Desert"}]})

/* Encuentra los animales cuyo nombre_común contiene la palabra "Tigre". */

({ common_name: { $regex: "Tiger", $options: "i"}})