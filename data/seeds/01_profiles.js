const faker = require('faker');

const profiles = [...new Array(5)].map((i, idx) => ({
  id: idx === 0 ? '00ulthapbErVUwVJy4x6' : faker.random.alphaNumeric(20),
  firstName:faker.name.firstName(),
  lastName:faker.name.lastName(),
  email: idx === 0 ? 'llama001@maildrop.cc"' : faker.internet.email(),
  created_at:faker.date(),
  location:faker.locale(),
  avatarUrl: faker.image.avatar(),
  bio:'',
}));

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('profiles').insert(profiles);
};
