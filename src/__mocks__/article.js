import faker from 'faker';

/* eslint-disable */

export function articleFactory() {
  const id = faker.datatype.uuid();
  return {
    _id: id,
    title: faker.name.title(),
    tags: new Array(5).fill(0).map(() => faker.lorem.word()),
    content: faker.lorem.slug(100),
    uploadDate: faker.date.recent(),
    comments: new Array(5).fill(0).map(() => commentFactory(id)),
    author: userFactory(),
    readTimeMinutes: faker.datatype.number({ min: 5, max: 3 * 60 }),
    savesCount: faker.datatype.number({ min: 0, max: 100 }),
    likesCount: faker.datatype.number({ min: 0, max: 500 }),
  };
}

export function userFactory() {
  return {
    _id: faker.datatype.uuid(),
    email: faker.internet.email(),
    name: faker.internet.userName(),
    avatarUrl: faker.internet.avatar(),
    joinDate: faker.date.past(1),
    location: faker.address.city(),
    comments: new Array(5).fill(0).map(() => commentFactory()),
  };
}

export function commentFactory(articleId) {
  return {
    _id: faker.datatype.uuid(),
    authorId: faker.datatype.uuid(),
    articleId,
    content: faker.lorem.sentence(),
    writeDate: faker.date.recent(),
    likesCount: faker.datatype.number({ min: 0, max: 50 }),
  };
}
