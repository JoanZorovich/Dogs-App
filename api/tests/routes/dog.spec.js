/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
};

describe('Routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: false })
  .then(() => Dog.findOne({
    where: {
      name: dog.name
    }
  })));
  describe('GETs de prueba', () => {
    it('Debe retornar un 200 si encuentran razas que incluyan la letra "A"', () =>
      agent.get('/dogs?name=a').expect(200)
    );
  });
});