function App() {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${encodeURIComponent('https://www.googleapis.com/auth/userinfo.profile')}&access_type=offline&include_granted_scopes=true&response_type=code&redirect_uri=${encodeURIComponent('http://localhost:8080/google')}&client_id=72077841259-naqli9572qehlso0cfclkefndk7lgj3s.apps.googleusercontent.com`

  console.log(url)
  
  return (
    <div className="App">
      <button>
        <a href={url}>Google</a>
      </button>
    </div>
  );
}

export default App;
