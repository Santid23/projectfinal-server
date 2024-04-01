# Project - TryHard :muscle: #

### Description ###
This is a web application where you can sign up for any type of CrossFit competition and create your own with the necessary conditions.

### Installation ###
1. Clone the repository
```
git clone
```

2. Install the dependencies
```
npm install
```

3. Create a .env file in the root folder and add the following environment variables:
```
PORT=3000
MONGODB_URI="mongodb://127.0.0.1:27017/TryHard_APP"
```
4. Run the server to develop locally
```
npm run dev
```

## API Routes ##

### **Competitions routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/competitions/list       | GET               | [competitions]                     | Get all competitions     |
| /api/competitions/getOne/:competition_id            | GET               | {competition}                | Get one Competitions     |
| /api/competitions/create            | POST               | {createdCompetitions}                | Create Competition      |
| /api/competitions/edit/:competition_id            | PUT               | {editedCompetitions}                | Edit one competition     |
| /api/competitions/delete/:competition_id           | DELETE               | {msg: "Competition successfully deleted!" }                | Delete one competition     |

### **Auth routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/auth/getLoggedUser     | GET               | {loggedUser}                            | Get Logged User             |
| /api/auth/signup            | POST              | {createdUser}    | Create a new user             |
| /api/auth/login             | POST              | {authToken}                       | Log user in             |
