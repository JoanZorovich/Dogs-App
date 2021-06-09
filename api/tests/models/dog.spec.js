const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');
const { v4: uuidv4 } = require('uuid');

describe('Modelos', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validaciones', () => {
    beforeEach(() => Dog.sync({ force: false }));
    describe('name', () => {
      it('Debes crear una nueva raza llamada Pug', () => {
        Dog.create({ 
          id: uuidv4(), name: 'Pug',  weight: "45", life_span:"20", });
      });
      it('La raza Pug debe estar creada', () => {
        Dog.findOne({
          where: { name: 'Pug' }
        })
      });
    });
  });
});
