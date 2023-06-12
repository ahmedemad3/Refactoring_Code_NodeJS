class OrderError extends Error {
    constructor(code, message) {
      super(message);
      this.code = code;
    }
  }
  
  module.exports = {
    OrderError
  };