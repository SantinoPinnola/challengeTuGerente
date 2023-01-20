import myServer from './app.js';
import  {dbConnection}  from './db/mongoDB.js';
import config from './config/config.js';

const port = config.PORT || 8080;
dbConnection();

myServer.listen(port, () => console.log(`Server up on port ${port}`));