# JJD

## Backend
1. To start the server `python manage.py runserver`
2. To Update the changes in the databases after updating the models.py `python manage.py makemigrations`
3. To apply the above changes made `python manage.py migrate`
4. To open the database shell `python manage.py dbshell`


## Frontend
1. To start the react + vite app `npm run dev`


## Learning in frontend
1. While building any react apps you can navigate in two ways:<br>
    a. By leaveraging the reacts single page functionality:<br>
        i. make use of reacts components, pass parameters to these components which are called as props.<br>
        ii. Login and Register page navigations in this app are examples fot this type of navigation.<br>
    b.By using reacts routers and route as a differt link, that loads the new page.<br>
        i. For example /, /login, /register.<br>
        ii.Despite the URL changing, React still prevents a full page reload — it remains a single-page app under the hood.<br>




## Learning in Backend