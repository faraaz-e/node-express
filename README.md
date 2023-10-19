#### REST APIs
---

CRUD APIs using NodeJs (Framework : Express Js)  

#### Installation  
---
1. Download [MongoDB Compass](https://www.mongodb.com/products/tools/compass)  
2. Create new Database and copy Connection string.
3. Create collection
4. Clone this repository and paste MongoDB Connection string to _.env_ file to make connection to Database
  
`npm install`  
`npm start`

#### API Usage / Routes

---

- Tasks

GET (all tasks) : _localhost:3000/api/v1/tasks_  
GET (by task id) : _localhost:3000/api/v1/tasks/:id_  
POST : _localhost:3000/api/v1/tasks_  
PATCH : _localhost:3000/api/v1/tasks/:id_  
DELETE : _localhost:3000/api/v1/tasks/:id_  

- Users

GET (all users) : _localhost:3000/api/v1/users_  
GET (by user id) : _localhost:3000/api/v1/users/:id_  
POST : _localhost:3000/api/v1/users_  
PATCH : _localhost:3000/api/v1/users/:id_  
DELETE : _localhost:3000/api/v1/users/:id_  
  


> JSON Data structure (POST request)

- Tasks

```JSON
{
"taskTitle": "UI Development",
"taskDesc": "Admin Dashboard overview using React",
"taskOwner": { "taskOwnerId": "abc112233", "taskOwnerName": "Jerry" },
"taskAssignee": [{ "taskAssigneeId": "xyz617328", "taskAssigneeName": "Bob" }],
"taskPriority": "Normal",
"taskStartDate": "",
"taskDueDate": "",
"taskStatus": "Pending",
"subtask": [{
            "subtaskTitle": "Component Development",
            "subtaskDesc": "Design Overview with Graphs",
            "subtaskOwner": { "subtaskOwnerId": "xyz617328", "subtaskOwnerName": "Bob" },
            "subtaskAssignee": [{ "subtaskAssigneeId": "xyz654987", "subtaskAssigneeName": "Oswald" }],
            "subtaskPriority": "High",
            "subtaskStartDate": "",
            "subtaskDueDate": "",
            "subtaskStatus": "In-Progress"
            },
            {
            "subtaskTitle": "Styling components",
            "subtaskDesc": "Styling using CSS to all components",
            "subtaskOwner": { "subtaskOwnerId": "xyz617328", "subtaskOwnerName": "Bob" },
            "subtaskAssignee": [{ "subtaskAssigneeId": "xyz321", "subtaskAssigneeName": "Tom" }],
            "subtaskPriority": "High",
            "subtaskStartDate": "",
            "subtaskDueDate": "",
            "subtaskStatus": "Complete"
            }]
}
```

- Users

```JSON
{
"userFirstName": "Tom",
"userLastName": "Dexter",
"userEmail": "username@domain.com",
"userPhone": 1234567890,
"userType": "Admin",
"userDesignation": "Software Engineer",
"userDept": "Information Technology",
"userLocation": "India",
"userCompany": "ABC",
"userStatus": "Active",
"userPassword": "12345",
"userSecurityKey": "xyz123"
}
```
