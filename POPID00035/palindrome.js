const Str = "coslk";
let Palindrome = true;

for (var i = 0; i < Math.floor(Str.length / 2); i++) {
  if (Str[i] !== Str[Str.length - 1 - i]) {
    Palindrome = false;
    break;
  }
}

console.log(Palindrome);
