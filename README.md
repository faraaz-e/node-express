#### REST APIs 
--- 
  
CRUD APIs using NodeJs (Framework : Express Js)
  
#### Installation
---
  
`npm install`  
`npm start`
  
#### API Usage / Routes
---
  
GET (all tasks) : _localhost:3000/api/tasks_
GET (by task id) : _localhost:3000/api/tasks/:id_
POST : _localhost:3000/api/tasks_
PATCH : _localhost:3000/api/tasks/:id_
DELETE : _localhost:3000/api/tasks/:id_

> JSON Data structure (POST request)

- Tasks Model  
  
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
