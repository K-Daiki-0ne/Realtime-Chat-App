class Users {
  constructor() {
    this.users = [];
  }
  addUser({ id, name, room }) {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const exists = this.users.find((user) => user.room === room && user.name === name);

    if(exists) {
      return { error: 'Same user exists' };
    }

    const user = { id, name, room };
    this.users.push(user);
    return { user };
  };
  deleteUser(id) {
    const userId = this.users.findIndex((user) => user.id === id);
    if(userId !== -1) return this.users.splice(userId, 1)[0];
  };
  getUser(id) {
    return this.users.find((user) => user.id === id)
  };
  showUser(room) {
    return this.users.filter((user) => user.room === room);
  };
}

module.exports = { Users }