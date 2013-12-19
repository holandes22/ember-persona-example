## Using Mozilla Person Login  with Ember.js

This is a simple ember app to show user authentication using Mozilla Persona

The app shows a list of cars that belong to the user (No UI for this atm, add them from the admin console of django).

### The technologies used:

* frontend
    - Ember.js https://github.com/emberjs/ember.js
    - ember-data https://github.com/emberjs/data
    - ember-data-django-rest-adapter https://github.com/toranb/ember-data-django-rest-adapter
* backend
    - Django https://www.djangoproject.com/
    - Django REST Framework http://django-rest-framework.org/
    - django-browserid https://github.com/mozilla/django-browserid

### Architecture

A Client-Server architecture is used. 
The backend provides a simple REST API:

    /users
    /users/:id
    /cars
    /cars/:id
    /auth/login

The REST API uses a Token authentication scheme

## Login process

    - A user fires up a login request. The Persona dialog is presented.
    - The auth assertion is passed to the client.
    - The client sends a POST request to /auth/login with the assertion
    - The server tries to authenticate the user (by calling Mozilla's verify service) and responds with email and 
      API token if succeds or 500 if not. The server creates a new user if none associated with that email.
    - The client stores the API Token for the session (used by ember-data adapter to consume the REST API)

## Installation

The frontend uses Ember APP Kit as a skeleton.
After cloning the repo:

    cd ember-persona-example/frontend
    npm install
    grunt server (runs server at port 8000)

For the backend 

    cd ember-person-example/backend
    # python, so we create a virtualenv, I use virtualenvwrapper here, you should too
    mkvirtualenv ember-persona-example
    pip install -r requirements
    python manage.py syncdb
    python managa.py runserver 8888


Open a browser and go to http://localhost:8000. Go to the login section and press the login with Persona button to
authenticate.

## TODO

- deploy to heroku
- Vagrant for dev env
- dev install script
- Allow car add/delete/edit
