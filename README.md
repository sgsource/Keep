Keep
====
A local and personal Google Keep clone

![](https://github.com/sgsource/Keep/blob/main/demo.gif)

Table of Contents
=================

<!--ts-->
  * [Folder Structure](#folder-structure)
  * [Setup](#setup)
    * [Installing Node Dependencies](#installing-node-dependencies)
    * [Build](#build)
    * [Installing Python Dependencies](#installing-python-dependencies)
    * [Django Migrations](#django-migrations)
  * [Running the Server](#running-the-server)
<!--te-->

Folder Structure
================
```
keep                   # Django project
├── api                # REST API
│   ├── models.py      # data model configuration
│   ├── serializers.py # data serializer
│   ├── urls.py        # CRUD URLs
│   ├── views.py       # function based views
│   └── ...
├── frontend           # React app
│   ├── public
│   │   ├── index.html
│   │   └── ...
│   ├── src
│   │   ├── components
│   │   │   ├── ColorSelector.js # color customization
│   │   │   ├── CreateNote.js    # new note
│   │   │   ├── NotePaper.js     # notes in database
│   │   │   └── utils.js         # available colors
│   │   ├── pages
│   │   │   └── NotesPage.js     # homepage
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json   # node dependencies
│   ├── urls.py        # show index.html template
│   └── ...
├── keep
│   ├── settings.py    # app configurations
│   ├── urls.py        # specifies where to look for URLs
│   └── ...
├── requirements.txt   # python dependencies
└── ...
```

Setup
=====

Installing Node Dependencies
----------------------------

```
$ cd frontend
$ npm install
```

Build
-----

While in frontend:
```
$ npm run build
$ cd ..
```

Installing Python Dependencies
------------------------------

```
$ pip install -r requirements.txt
```

Django Migrations
-----------------

```
$ python manage.py migrate
$ python manage.py makemigrations api
$ python manage.py migrate api
```

Running the Server
==================

```
$ python manage.py runserver
```
