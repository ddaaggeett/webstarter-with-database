## [this](https://www.youtube.com/watch?v=MGf7F1NJeCo) is an idiot-proof full-stack starting point for modern web development

### what you get
- [universal](https://en.wikipedia.org/wiki/Isomorphic_JavaScript)/isomorphic/SSR [react.JS](https://reactjs.org/): you want user friendly?
- [socket.io](https://socket.io/): SSR appeal. instant data transfer between server + client
- [webpack](https://webpack.js.org/): modern web infrastructure
- [redux](https://redux.js.org/): app state container
- [rethinkDB](https://rethinkdb.com/) connection: modern noSQL database for [realtime](https://rethinkdb.com/docs/changefeeds/javascript/) software -> [how to install](https://rethinkdb.com/docs/install/)

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
