# Users

Firebase Authentication

# init

opens a server connection to our firebase database in the cloud

# Middleware

decodeFirebaseSessionCookie() - looks for a user session stored in browser cookies
isAuthorized() - redirects to /login if there is not a valid user returned by decode

# /login

Login page offers Google 0auth strategy to create a user account on Firebase.

- Opens connection to firebase database in cloud from client side
- 0auth authentication is completed on firebase's domain and successful user object is returned to our domain
  authenticated user's idtoken is sent to firebase-admin on the serverside via http post request.
  The post request to /api/validate-idtoken transforms idtoken into encrypted session cookie to store on the login session on the client side
