import { isAnagram, makeSortedLCLettersArray } from './anagram';

test("Test return true for empty strings", () => {
    const string1 = "";
    const string2 = "";
    const expected = true;
    expect(isAnagram(string1, string2)).toBe(expected)
});

test("Test returns false if strings are different lengths", () => {
    const string1 = "abc";
    const string2 = "abcd";
    const expected = false;
    expect(isAnagram(string1, string2)).toBe(expected)
});

test("Test case insensitive", () => {
    const string1 = "AbCd";
    const string2 = "aBcD";
    const expected = true;
    expect(isAnagram(string1, string2)).toBe(expected)
});

test("Test fails for non-anagram", () => {
    const string1 = "apple";
    const string2 = "bpple";
    const expected = false;
    expect(isAnagram(string1, string2)).toBe(expected)
});

test("Test returns empty array when passed empty string", () => {
    const string = "";
    const expected = [];
    expect(makeSortedLCLettersArray(string)).toEqual(expected);
});

test("Test returns an array with lowercase letters", () => {
    const string = "A";
    const expected = ["a"];
    const string2 = "BiHrCg";
    const expected2 = ["b", "c", "g", "h", "i", "r"];
    expect(makeSortedLCLettersArray(string)).toEqual(expected);
    expect(makeSortedLCLettersArray(string2)).toEqual(expected2);
});

test("Test returns appropriate array when passed double letters", () => {
    const string = "apple";
    const expected = ["a", "e", "l", "p", "p"];
    expect(makeSortedLCLettersArray(string)).toEqual(expected);
});

test("Test returns appropriate array when passed string in aphabetical order", () => {
    const string = "abcd";
    const expected = ["a", "b", "c", "d"];
    expect(makeSortedLCLettersArray(string)).toEqual(expected);
});