# CHANGELOG
## **<1.0.0> - <2023-11-22>**

### *Sprint learnings*
- Aprendí que son los componentes en Angular.
- La estructura de un proyecto de Angular.

### *Added*
- Instalaciones.
- Prototipo de alta fidelidad.

### *Changed*

En esta sección detalla los cambios que hiciste a funcionalides ya existentes.
- Hoy hubo ningun cambio ya que era el primer sprint.

### *Fixed*

En esta sección describe los _bugs_ solucionados.
- No hubo bugs solucionados ya que era el primer sprint.

### *Removed*

En esta sección incluye las funcionalidades eliminadas.
- No hubo funcionalidades eliminadas ya que era el primer sprint.

***

## **<2.0.0> - <2023-11-29>**

### *Sprint learnings*

- Aprendi que no se debe de hacer una llamada por cada pelicula, de lo contrario serain demasiadas llamadas y en un proyecto profesional saldria carisimo. 
- Aprendi como funciona el servicio en el proyecto.
- Evitar el uso de <any>  y ser más especifica con Typescript. 


### *Added*
- Creación del componente movie-list.component.
- Creación de las interfaces de la respuesta del servicio y del objeto Movie.
- Comence a crear los elementos en el HTML de movie-list.

### *Changed*

- Modifique los componentes, creé el componente movie-list.component y pase toda la logica de app.component a movie-list.
- Implemente la paginación en movie-list component. 

### *Fixed*

- Tuve que hacer algunas modificaciones en lo que retornaba el servicio. 

### *Removed*

- Nada se removio. 
***
## **<3.1.1> - <2023-12-06>**

### *Sprint learnings*

- Aprendi que la API ya esta configurada para traer en cada llamada 20 peliculas. 
- Aprendi que son los HttpParams, para que sirven y como se implementan con "set"

### *Added*
- Comence a hacer modificaciones en CSS basandome en mi protitpo de alta fidelidad. 
- HttpParams en el servicio. 

### *Changed*

- Modifique la codicional que esta en movie-list component para poder traer las 20 peliculas en cada llamada. 

### *Fixed*

- Tuve que hacer algunas modificaciones en lo que retornaba el servicio. 

### *Removed*

- Slice en HTML
- Tuve que eliminar el slice en el HTML del componente: no habia necesidad de ponerlo ya que la API por defecto ya trae las 20 peliculas en cada llamada
*******************************************************************************