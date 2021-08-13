# Deployed on 8.12.21, all code must push to LC/fe-repo as well as the heroku one listed below
(https://git.heroku.com/produce-box-app.git)
https://produce-box-app.herokuapp.com/ 

# tried to set up dbs for the heroku git with `heroku run flask db upgrade` but got the following in response:
    - Warning: heroku update available from 7.56.0 to 7.56.1.
    - Running flask db upgrade on ⬢ produce-box-app... up, run.7372 (Free)
    - bash: flask: command not found


# LAYOUT COMPONENT MUST BE INSIDE APP.JS FOR APP TO LAUNCH
# LOAD OTHER COMPONENTS TO LAYOUT.JS ACC TO WHICH PAGE THEYRE SUPPOSED TO BE ON FOR USER, THOUGH.
# CONCLU: PBA COMPONENTS GO TO LAYOUT.JS, <LAYOUT /> STAYS IN APP.JS FOR IT TO ALL WORK


# added the fowlling to package_json - 8.12.21
- "proxy": "https://produce-box-app.herokuapp.com",