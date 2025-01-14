class UserModel {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static validateUsername(username) {
    return username && username.length >= 3;
  }

  static validatePassword(password) {
    return password && password.length >= 6;
  }

  static async signIn(username, password) {
    // Mock API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "testuser" && password === "password123") {
          resolve({ success: true, message: "Sign-in successful!" });
        } else {
          reject({ success: false, message: "Invalid credentials." });
        }
      }, 1000);
    });
  }
}