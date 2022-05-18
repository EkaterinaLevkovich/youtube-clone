export class User {
  constructor({
    name, lastName, phone, email,
  }) {
    this.name = name;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }

  get isFake() {
    return !this.name;
  }
}
