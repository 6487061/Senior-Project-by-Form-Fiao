// models/User.js
export class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  
    static validate(user) {
      const errors = [];
      if (!user.name || user.name.trim() === "") {
        errors.push("Name is required.");
      }
      if (!user.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
        errors.push("Valid email is required.");
      }
      if (!user.password || user.password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
      }
      return errors;
    }
  }
  