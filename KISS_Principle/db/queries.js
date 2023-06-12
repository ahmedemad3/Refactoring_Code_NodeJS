const Queries = {
    IS_EMAIL_EXISTS_QUERY: 'SELECT * FROM users WHERE email = $1',
    SAVE_USER_QUERY: 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
}