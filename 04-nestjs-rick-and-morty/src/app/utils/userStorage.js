// utils/userStorage.js
const fs = require('fs')
const path = require('path')

const USERS_FILE_PATH = path.join(process.cwd(), 'public', 'users.json')

function getUsers() {
  try {
    const data = fs.readFileSync(USERS_FILE_PATH, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

function addUser(user) {
  const users = getUsers()
  users.push(user)
  fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users), 'utf8')
}

function getUserById(id) {
  const users = getUsers()
  return users.find((user) => user.id === id)
}

module.exports = {
  getUsers,
  addUser,
  getUserById,
}
