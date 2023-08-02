const SERVERS = {
    PRODUCTION: "http://172.174.85.112:8080",
    DEVELOPMENT: "http://127.0.0.1:8080"
  };
  
  const ACTIVE_SERVER = SERVERS.PRODUCTION;  // Switch this line to change server
  
  export default {
    SERVER_URL: ACTIVE_SERVER
  };
  