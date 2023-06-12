const Queries = {
    GET_USER_QUERY:"SELECT * FROM users WHERE id = ? ",
    DELETE_USER_QUERY: "DELETE FROM users WHERE id = ? ",
}

module.exports = Queries;