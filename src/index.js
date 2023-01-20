import myServer from './app.js';
import  {dbConnection}  from './db/mongoDB.js';

const port = process.env.PORT || 8080;
dbConnection();

myServer.listen(port, () => console.log(`Server up on port ${port}`));