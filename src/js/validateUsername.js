export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const test = String(this.userName);
    const pattern = /^[^\d_-][\w-]*[^\d_-]$/i;
    const pattern2 = /\d{4,}/i;
    if (pattern.test(test) && !pattern2.test(test)) {
      return true;
    }
    return false;
  }
}
const goodUsername = new Validator('test-userName');
const badUsername2 = new Validator('test@-userName');
const badUsername3 = new Validator('123testuserName');
const badUsername4 = new Validator('_testuserName');
goodUsername.validateUsername();
badUsername2.validateUsername();
badUsername3.validateUsername();
badUsername4.validateUsername();
