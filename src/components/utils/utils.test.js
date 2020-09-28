import { getFirstLetter, urlPath } from './index';

// what we want to test
// return te first letter in uppercase mode

describe('Get first letter function ', () => {
  test('It should return an empty string if there is no value', () => {
    expect(getFirstLetter()).toBe('');
  });

  test('It should return the first letter un uppercase of a string', () => {
    expect(getFirstLetter('marissa')).toBe('M');
  });

  test('It should return an empty string when the value is a different type', () => {
    expect(getFirstLetter(1234)).toBe('');
    expect(getFirstLetter(true)).toBe('');
    expect(getFirstLetter(false)).toBe('');
    expect(getFirstLetter(-1)).toBe('');
    expect(getFirstLetter(null)).toBe('');
    expect(getFirstLetter({})).toBe('');
  });
});

describe('Get :type and: :id from the url', () => {
  test('It should return :type and :id on the normal way', () => {
    expect(urlPath('https://test.com/people/1/', 'people')).toBe('people/1/');
  });

  test('return undefined if one of the parameters is missing', () => {
    expect(urlPath('https://test.com/people/1/')).toBe(undefined);
    expect(urlPath()).toBe(undefined);
    expect(urlPath('people')).toBe(undefined);
    expect(urlPath(null, 'people')).toBe(undefined);
    expect(urlPath('https://test.com/people/1/', undefined)).toBe(undefined);
  });

  test('return undefined if the activeSubject does not match the url', () => {
    expect(urlPath('https://test.com/people/1/', 'films')).toBe(undefined);
  });
});
