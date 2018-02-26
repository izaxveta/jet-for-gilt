// const authenticateUser = (email, password) => {
//   return fetch('http://jet-for-gilt.herokuapp.com/api/v1/authenticate', authenticateHeaders(email, password))
//     .then((response) => handleResponse(response))
//     .catch((error) => console.error({ error }))
// }

// const authenticateHeaders = (email, password) => {
//   return {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: { 'email': email, 'password': password }
//   }
// }

const getUser = (email) => {
  return fetch(`http://jet-for-gilt.herokuapp.com/api/v1/users/${email}`)
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const addUser = (firstName, lastName, email, password) => {
  return fetch('http://jet-for-gilt.herokuapp.com/api/v1/users', postHeaders(firstName, lastName, email, password))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const postHeaders = (firstName, lastName, email, password) => {
  return {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      user: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      }
    })
  }
}

const handleResponse = (response) => {
  return response.json()
    .then((json) => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusText: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
}

module.exports = {
  getUser,
  addUser,
  // authenticateUser
}