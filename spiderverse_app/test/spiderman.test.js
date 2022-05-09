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