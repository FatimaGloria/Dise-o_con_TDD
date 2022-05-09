const Spiderman = require("../app/spiderman");

describe("Unit Tests for Spiderman class", () => {
    test('1) Create a spiderman object', () => {
      
    //Código para instanciar un objeto Spiderman con esta información
      const andrewGarfield = new Spiderman("The Amazing Spiderman", 31, "Andrew Garfield", 2, "Sony")
     
    // Validamos que el código funcione de la forma esperada
      expect(andrewGarfield.name).toBe("The Amazing Spiderman");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe(2);
      expect(andrewGarfield.studio).toBe("Sony");  
    });

  })

  //Queremos usar un método que nos regrese la sig. información: nombre y estudio al que pertenece el spiderman instanciado.
  test('2) Use the method getInfo()', ()=> {
    const tomHolland = new Spiderman("Spider-Man Marvel", 25, "Tom Holland", 6, "Marvel")
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio")
  });

  //Agregando una tercera prueba de práctica
  test('3) Verifying class and method together', ()=> {
    
    const tobeyMaguire = new Spiderman("Spider-Man", 27, "Tobey Maguire", 3, "Sony")
      
    expect(tobeyMaguire.name).toBe("Spider-Man");
    expect(tobeyMaguire.age).toBe(27);
    expect(tobeyMaguire.actor).toBe("Tobey Maguire");
    expect(tobeyMaguire.movies).toBe(3);
    expect(tobeyMaguire.studio).toBe("Sony");  
    
    expect(tobeyMaguire.getInfo()).toBe("Hey, I'm Tobey Maguire from Sony Studio")
  });

