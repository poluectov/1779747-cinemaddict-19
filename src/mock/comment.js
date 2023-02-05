import { getRandomArrayElement } from '../utils/common.js';
import {COMMENT_EMOTIONS} from '../const.js';

const mockComments = [
  {
    id: 0,
    author: 'Ilya O\'Reilly',
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    date: '2021-05-11T16:12:32.554Z',
    emotion: getRandomArrayElement(Object.values(COMMENT_EMOTIONS))
  },
  {
    id: 1,
    author: 'Tim Macoveev',
    comment: 'Interesting setting and a good cast.',
    date: '2020-05-09T16:12:32.554Z',
    emotion: getRandomArrayElement(Object.values(COMMENT_EMOTIONS))
  },
  {
    id: 2,
    author: 'John O\'Reilly',
    comment: 'Very very old. Meh.',
    date: '2022-05-08T16:12:32.554Z',
    emotion: getRandomArrayElement(Object.values(COMMENT_EMOTIONS))
  },
  {
    id: 3,
    author: 'John Doe',
    comment: 'Booooooooooring.',
    date: '2023-01-30T14:18:32.554Z',
    emotion: getRandomArrayElement(Object.values(COMMENT_EMOTIONS))
  },
  {
    id: 4,
    author: 'Lisa',
    comment: 'Very cool series! Looking forward to season 2.',
    date: '2022-08-19T16:12:32.554Z',
    emotion: getRandomArrayElement(Object.values(COMMENT_EMOTIONS))
  },
  {
    id: 5,
    author: 'Ricciy',
    comment: 'It needs to be celebrated now; fan dango!!.',
    date: '2022-12-20T16:12:32.554Z',
    emotion: getRandomArrayElement(Object.values(COMMENT_EMOTIONS))
  },
  {
    id: 6,
    author: 'Bon Grec',
    comment: 'The film is just super well done to the creators.',
    date: '2022-12-28T16:12:32.554Z',
    emotion: getRandomArrayElement(Object.values(COMMENT_EMOTIONS))
  },
  {
    id: 7,
    author: 'Nata Robinson',
    comment: 'Not to look nervous!.',
    date: '2021-12-11T12:12:32.554Z',
    emotion: getRandomArrayElement(Object.values(COMMENT_EMOTIONS))
  },
  {
    id: 8,
    author: 'Rosa Fun',
    comment: 'And I really like this movie! I watched it 100 times.',
    date: '2022-10-11T19:12:32.554Z',
    emotion: getRandomArrayElement(Object.values(COMMENT_EMOTIONS))
  },
  {
    id: 9,
    author: 'Fiktor Top',
    comment: 'The film is strong. The storyline, the acting, everything is top notch. And most importantly, that it makes sense.',
    date: '2023-02-01T23:12:32.554Z',
    emotion: getRandomArrayElement(Object.values(COMMENT_EMOTIONS))
  }
];
export {mockComments};
