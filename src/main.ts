import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Esta función inicializa la aplicación 
import { AppModule } from './app/app.module'; // Se importa el modulo raiz de la aplicación 

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
/* este es el punto de entrada de la aplicacion Angular 
Es el archivo que se ejecuta primero cuando la aplicación se inicia
*/
