const faker = require('faker');

const profiles = [...new Array(8)].map((i, idx) => ({
  id:
    idx === 0
      ? '00ulthapbErVUwVJy4x6'
      : idx === 1
      ? '00ultx74kMUmEW8054x6'
      : idx === 2
      ? '00ultwew80Onb2vOT4x6'
      : idx === 3
      ? '00ultwqjtqt4VCcS24x6'
      : idx === 4
      ? '00ultwz1n9ORpNFc04x6'
      : idx === 5
      ? '00u13omswyZM1xVya4x7'
      : idx === 6
      ? '00u13ol5x1kmKxVJU4x7'
      : idx === 7
      ? '00u13oned0U8XP8Mb4x7'
      : idx.toString(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: idx === 0 ? 'llama001@maildrop.cc' : faker.internet.email(),
  created_at: faker.date.past(),
  location: faker.address.streetAddress(),
  avatar_url: faker.image.avatar(),
  bio: '',
}));

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('profiles').insert(profiles);
};
