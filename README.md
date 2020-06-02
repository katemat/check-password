This project was crreated as a part of Homework Excersise mainly aiming to get familiar with React Components.

![Password Checker ](/public/screenShot1.png )
![Password Checker ](/public/screenShot2.png )
![Password Checker ](/public/screenShot3.png )


# the challenge

## part 1

write a function that accepts one argument `password` as a string and return an object with the strength of the password plus other information

for example calling

```js
checkPassword("cakePudd1ng")
```
should return the following
```js
{ 
  score: 4, 
  hasLowerCase: true, 
  hasUpperCase: true,
  hasNumber: true,
  hasNonAlphaNumeric: false,
  isOver8Char: true,
  isOver12Char: false
}
```

## here are them rulez

use them to write tests to prove that your function is working as intended

- 1 point for lower case letters
- 1 point for upper case letters
- 1 point for numbers
- 1 point for non alpha numeric characters
- 1 point for 8 characters or more
- 1 more point for 12 characters or more

getting only 1 point means your password is weak sauce and 6 points means your password will be a pain to remember and type

## part 2

Create a react app with a single component `PasswordChecker` that includes a input box and below the input box a bar and make up so words to describe how weak or strong the password is as the user types based on the score. eg. ok, weak, very weak, you must be joking etc. 