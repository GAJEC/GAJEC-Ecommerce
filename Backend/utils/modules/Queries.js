const Queries = {
    findUserByEmail: 'SELECT * FROM users WHERE email = ?',
    findUserById: 'SELECT * FROM users WHERE id = ?',
    createUser: 'INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)'
}

module.exports = Queries;