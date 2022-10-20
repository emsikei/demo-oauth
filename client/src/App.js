function App() {
  const FACEBOOK_CLIENT_ID = "1246606399427378";
  const FACEBOOK_CLIENT_SECRET = "2b4b5cb882c060ef1f70aac44b324e81";
  
  const GOOGLE_OPTIONS = {
    scope: "https://www.googleapis.com/auth/userinfo.profile",
    access_type: "offline",
    include_granted_scopes: true,
    response_type: "code",
    redirect_uri: encodeURIComponent('http://localhost:8080/google'),
    client_id: "72077841259-naqli9572qehlso0cfclkefndk7lgj3s.apps.googleusercontent.com"
  }

  const FACEBOOK_OPTIONS = {
    client_id: "1246606399427378",
    redirect_uri: encodeURIComponent('http://localhost:8080/facebook'),
    state: "{st=state123abc,ds=123456789}",
    auth_type: "rerequest"
  }

  const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=${GOOGLE_OPTIONS.scope}&access_type=${GOOGLE_OPTIONS.access_type}&include_granted_scopes=${GOOGLE_OPTIONS.include_granted_scopes}&response_type=${GOOGLE_OPTIONS.response_type}&redirect_uri=${GOOGLE_OPTIONS.redirect_uri}&client_id=${GOOGLE_OPTIONS.client_id}`

  const FACEBOOK_URL = `https://www.facebook.com/v15.0/dialog/oauth?client_id=${FACEBOOK_OPTIONS.client_id}&redirect_uri=${FACEBOOK_OPTIONS.redirect_uri}&state=${FACEBOOK_OPTIONS.state}&auth_type=${FACEBOOK_OPTIONS.auth_type}`


  console.log(FACEBOOK_URL)
  
  return (
    <div className="App">
      <button>
        <a href={GOOGLE_URL}>Google</a>
      </button>
      <button>
        <a href={FACEBOOK_URL}>Facebook</a>
      </button>
    </div>
  );
}

export default App;
