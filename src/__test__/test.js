import Validator from '../js/validateUsername.js';

test('test func validateUsername', () => {
  const goodUsername = new Validator('test-userName').validateUsername();
  expect(goodUsername).toBeTruthy();
});
test('test func validateUsername', () => {
  const goodUsername = new Validator('testuserName').validateUsername();
  expect(goodUsername).toBeTruthy();
});
test('test func validateUsername', () => {
  const goodUsername = new Validator('name').validateUsername();
  expect(goodUsername).toBeTruthy();
});
test('test func validateUsername', () => {
  const badUsername = new Validator('test@-userName').validateUsername();
  expect(badUsername).toBeFalsy();
});
test('test func validateUsername', () => {
  const badUsername = new Validator('!@test-userName').validateUsername();
  expect(badUsername).toBeFalsy();
});
test('test func validateUsername', () => {
  const badUsername = new Validator('test-userName&&').validateUsername();
  expect(badUsername).toBeFalsy();
});
test('test func validateUsername', () => {
  const badUsername = new Validator('12345test-userName&&').validateUsername();
  expect(badUsername).toBeFalsy();
});
test('test func validateUsername', () => {
  const badUsername = new Validator('__test-userName&&').validateUsername();
  expect(badUsername).toBeFalsy();
});
