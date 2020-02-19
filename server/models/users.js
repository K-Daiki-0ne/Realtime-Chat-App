// Userの追加や削除等を行う
class Users {
  constructor() {
    // Userを格納する配列
    this.users = [];
  }
  addUser({ id, name, room }) {

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
//   console.log('')
//   console.log('')
// console.log('')
module.exports = { Users }