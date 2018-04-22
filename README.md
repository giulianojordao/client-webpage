## Important Note

   This project uses Python3 and Django2.  Please use `python3` and `pip3` for all shell/terminal commands.


## First time installing app
   1. create `apollo` db in `postgres`
   2. create a `sensitive_settings.py` file using `sensitive_settings.example.py` as an example
   3. change directories to react dir: `cd react`
   4. in node: `npm install`
   5. open new terminal, go to root dir and create virtualenv: `virtualenv env`
   6. activate local environment: `. env/bin/activate`
   7. install requirements: `pip3 install -r requirements.txt`

## Local Build
   1. change directories to react dir: `cd react`
   2. in node: `BROWSER=none npm start`
   3. open new terminal, go to root dir and activate local environment: `. env/bin/activate`
   4. run server: `python3 manage.py runserver 8000`
   5. open a browser and go to [localhost:8000](http://localhost:8000/)
   
   **Note:** react without django will automatically open in localhost:3000 after running `npm start`.
       Close this window and use localhost:8000 to see react and django together


## Prod Build
   1. change directories to react dir: `cd react`
   2. in node: `npm run build`
   3. open new terminal, go to root dir and activate local environment: `. env/bin/activate`
   4. run server: `python3 manage.py runserver 8000 --settings=control_panel.production_settings`
   5. open a browser and go to [localhost:8000](http://localhost:8000/)
    

## Prod Deploy
   ** Make sure you run `collectstatic` after you build the js files, 
       otherwise your webserver won't be able to find the build files.
       
   ** Make sure your build generates a `webpack-stats.prod.json` file. 
       If you are deploy by building the files manually, make sure you also 
       include it when you're copying files from your machine to server.


## Run Tests
   1. change directories to react dir: `cd react`
   2. in node: `npm test`


