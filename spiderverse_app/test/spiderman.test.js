const Spiderman = require("../app/spiderman");

describe("Unit Tests dor Spiderman class", () => {
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