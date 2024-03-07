// address of our user api
const uri = 'http://localhost:2000/user';
// this gets so annoying to type
const HEADERS = {
  headers: { 'Content-Type': 'application/json' }
};

// Make the http request initializing account creation.
const requestAccountCreation = async () => {
  // Build the object you will need for the request.
  const user = {
    username: document.querySelector('.ACFormGroup .Username').value.trim(),
    password: document.querySelector('.ACFormGroup .Password').value.trim(),
    email: document.querySelector('.ACFormGroup .Email').value.trim()
  };
  // If any fields were blank let's not do anything.
  if (!(user.username && user.password && user.email)) return;
  const response = await fetch(uri, {
    ...HEADERS,
    method: 'POST',
    body: JSON.stringify({
      user: user
    })
  });
  const creation = await response.json();
  return creation;
};

// Depending on the context with which we use this request, we may want un to be a string or a RegExp
const requestGetUserByUsername = async (un) => {
  const response = await fetch(uri + '/s/' + un, {
    ...HEADERS,
    method: 'GET'
  });
  const user = await response.json();
  return user;
}

export { requestAccountCreation, requestGetUserByUsername };
