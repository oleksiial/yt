const { createVideo } = require('./video');

const seed = async () => {
  await createVideo('tZS-em7GIjs', 77);
  await createVideo('0KHLfGI9vgU', 98);
  await createVideo('DwxzK8ipVkg', 67);

  console.log('seeded');
};

seed();
