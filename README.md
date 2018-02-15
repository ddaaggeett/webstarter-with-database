## this is a jumping-off-point for modern web development

### what you get
- [webpack](https://webpack.js.org/): modern web infrastructure
- [react](https://reactjs.org/): you want user friendly?
- [redux](https://redux.js.org/): app state container
- [rethinkDB](https://rethinkdb.com/) connection: modern noSQL database for realtime software -> [how to install](https://rethinkdb.com/docs/install/)

## how to use

    git clone https://github.com/ddaaggeett/webstarter-with-database.git
    cd webstarter-with-database/
    npm install

### run database

    rethinkdb

#### visit [database](http://localhost:8080/#tables)

    click -> Add Database = 'webstarter'
    click -> Add Table = 'appState'

#### visit [data explorer](http://localhost:8080/#dataexplorer)

run command at any time:

    r.db('webstarter').table('appState');

### run application

    npm run universal:dev

visit application: [http://127.0.0.1:8081](http://127.0.0.1:8081)

## Demo Here

[![webstarter](https://img.youtube.com/vi/MGf7F1NJeCo/0.jpg)](https://www.youtube.com/watch?v=MGf7F1NJeCo)
