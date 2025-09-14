//Custom error class
class Err1 extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

module.exports = Err1;
