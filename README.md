# Movie Search API Client

This is a website that searches for and displays information about movies, especially the following aspects:
- Title
- Poster Image
- Directors
- Genres
- Release Date

## Installation

1. Clone this repository into a folder of your choice
   ```bash
   git clone git@github.com/spwashi/movie-search-client
   ```
   
2. Change directories into the newly cloned project folder
   ```bash
   cd movie-search-client
   ```
   
3. Install the client dependencies, build the client app;
   ```bash
   yarn; yarn build;
   # or
   npm install; npm run build;
   ```
   
4. Install the server
   ```bash
   git submodule update --init --recursive;
   cd server;
   yarn;
   ```
   
5. Run the server
   ```bash
   yarn serve;
   # or 
   npm run serve;
   ```