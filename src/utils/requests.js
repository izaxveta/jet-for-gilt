const getAllItems = (categoriesCollection) => {
  const categories = categoriesCollection.join(',')
  return fetch(`https://jet-for-gilt.herokuapp.com/api/v1/items?q=${categories}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth_token')
    }
  })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const getAllVenues = (query) => {
  return fetch(`https://jet-for-gilt.herokuapp.com/api/v1/search?q=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth_token')
    }
  })
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const setCurrentUser = (moniker, password) => {
  return authenticateUser(moniker, password)
    .then(() => setUser(moniker))
    .catch((error) => console.error({ error }))
}

const setUser = (moniker) => {
  return fetch(`https://jet-for-gilt.herokuapp.com/api/v1/users/${moniker}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth_token')
    }
  })
    .then((response) => handleResponse(response))
    .then((user) => localStorage.setItem('user', JSON.stringify(user)))
    .catch((error) => console.error({ error }))
}

const handleAuthentication = (moniker, password) => {
  authenticateUser(moniker,password)
}

const authenticateUser = (moniker, password) => {
  return fetch('https://jet-for-gilt.herokuapp.com/api/v1/authenticate', authenticateHeaders(moniker, password))
    .then((response) => handleResponse(response))
    .then((token) => setToken(token))
    .catch((error) => console.error({ error }))
}

const setToken = (token) => {
  localStorage.setItem('auth_token', token.auth_token)
}

const authenticateHeaders = (moniker, password) => {
  return {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ 'moniker': moniker, 'password': password })
  }
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
  setCurrentUser,
  addUser,
  handleAuthentication,
  getAllVenues,
  getAllItems
}