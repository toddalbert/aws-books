import { DataStore } from '@aws-amplify/datastore';
import { Book } from './src/models/index.js';

await DataStore.save(
  new Book({
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "year": 1951,
  "genre": "Young Adult Fiction"
})
);

await DataStore.save(
  new Book({
  "title": "Of Mice and Men",
  "author": "John Steinbeck",
  "year": 1937,
  "genre": "Novella"
})
);
