import { TestBed, ComponentFixture } from "@angular/core/testing"; // ComponentFixture para representar y manipular un componente en el contexto de una prueba unitaria
// ComponentFixture imita el entorno de ejecución del componente en el contexto de las pruebas
import { MovieListComponent } from "./movie-list.component";

describe('MovieListComponent', () => {
    let component = MovieListComponent
    let fixture = ComponentFixture<MovieListComponent> // Simula el entorno de ejecución del componente MovieListComponent durante las pruebas.
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MovieListComponent]
        })
            .compileComponents()
        fixture = TestBed.createComponent(MovieListComponent)
        component = fixture.componentInstance // incompatibilidad entre las versiones de las dependencias utilizadas en tu proyecto. Para solucionarlo, te recomendaría seguir los siguientes pasos:


    })
    it('should create', () => {
        expect(component).toBeTruthy()
    })
})