export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const test = String(this.userName);
    const pattern = /^[a-z0-9_.-]+$/i;
    return pattern.test(test);
  }
}
const goodUsername = new Validator('test-userName');
const badUsername2 = new Validator('test@-userName');
const badUsername3 = new Validator('!@test-userName');
goodUsername.validateUsername();
badUsername2.validateUsername();
badUsername3.validateUsername();
