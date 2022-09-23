/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let i = 0;
  let num = 0;
  while (i < s.length) {
    if (map[s[s.length - 1 - i]] > map[s[s.length - 2 - i]]) {
      num += map[s[s.length - 1 - i]] - map[s[s.length - 2 - i]];
      i += 2;
    } else {
      num += map[s[s.length - 1 - i]];
      i += 1;
    }
  }

  return num;
};

// Testcase
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
