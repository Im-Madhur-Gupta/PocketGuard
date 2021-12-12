### Installation
#### Set up and activate a virtual environment
```sh
  virtualenv -p python3 venv
  source venv/bin/activate
```
#### Activate virtualenv in Windows
```sh
   .\venv\Scripts\activate.bat
```
#### Install Django
```sh
    pip install django
```
```
    pip install djangorestframework
```
#### Make and run migrations
```sh
    python manage.py makemigrations
    python manage.py migrate
```
#### Run the server
```sh
    python manage.py runserver
```

1. SignUP:  http://127.0.0.1:8000/signup/   
```
{  
    "firstname": "Demo",  
    "lastname" : "User",  
    "email" : "demo@gmail.com",  
    "password" : "demopass"  
}  
```

2. LogIn: http://127.0.0.1:8000/login/    
```
 {  
    "email" : "demo@gmail.com",  
    "password" : "demopass"  
 }  
```

3. Logout: http://127.0.0.1:8000/logout/

4. SignUps-List: http://127.0.0.1:8000/signup-list/

5. Add Expenses and Monthly limit  http://127.0.0.1:8000/expenses/1/  

```
{
    "Monthly_limit": 555,
    "Fruits_vegetables" : 555, 
    "Fuel" : 555,
    "Clothes" : 555, 
    "Transporation" : 555,
    "Entertainment" : 555, 
    "Dining" : 555,
    "Liesure": 555,
    "Grocery" :555,
    "Electronics" : 555,
    "Furniture" : 555
}

```
PS: at 1, we'll use id number of that particular logged in user