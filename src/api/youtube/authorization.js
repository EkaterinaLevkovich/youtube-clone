class AuthorizationApi {
  login() {
    return window.location.replace(`https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/login&response_type=code&client_id=${process.env.REACT_APP_YOUTUBE_CLIENT_ID}`);
  }

  async getAccessToken(code) {
    const response = await fetch(`https://oauth2.googleapis.com/token?grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/login&client_id=${process.env.REACT_APP_YOUTUBE_CLIENT_ID}&client_secret=${process.env.REACT_APP_YOUTUBE_CLIENT_SECRET}`, {
      method: 'POST',
      // headers: {
      //   Authorization: `Bearer ${access_token}`,
      // },
    });
    const userData = await response.json();
    console.log(userData);
  }

  logout() {
    return window.location.replace('https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000');
  }
}

export const Authorization = new AuthorizationApi();
