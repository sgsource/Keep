Keep
====
A local and personal Google Keep clone

Table of Contents
=================

<!--ts-->
  * [Setup](#setup)
    * [Installing Node Dependencies](#installing-node-dependencies)
    * [Build](#build)
    * [Django Migrations](#django-migrations)
  * [Running the Server](#running-the-server)
<!--te-->

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
```

Django Migrations
-----------------

If you are still in frontend:

```
$ cd ..
```

Then

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
