import { anagram } from './anagram';

test("Test return true for empty strings", () => {
    const string1 = "";
    const string2 = "";
    const expected = true;
    expect(anagram(string1, string2)).toBe(expected)
});

test("Test returns false if strings are different lengths", () => {
    const string1 = "abc";
    const string2 = "abcd";
    const expected = false;
    expect(anagram(string1, string2)).toBe(expected)
});

test("Test case insensitive", () => {
    const string1 = "AbCd";
    const string2 = "aBcD";
    const expected = true;
    expect(anagram(string1, string2)).toBe(expected)
});

test("Test fails for non-anagram", () => {
    const string1 = "apple";
    const string2 = "bpple";
    const expected = false;
    expect(anagram(string1, string2)).toBe(expected)
});
