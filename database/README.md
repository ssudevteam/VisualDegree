# Collab App - Backend Server/Client

## Description

This project sets up a GraphQL server using Express.js and provides API endpoints for 
querying and mutating data related to users, courses, departments, programs, program types, and schedules.
The server connects to a MongoDB database using Mongoose for data storage and retrieval.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install`

```
PORT=<port-number>
MONGODB_URI=<mongodb-connection-uri>
NODE_ENV=<development-or-production>
```

## Usage

1. Start the server using nodemon: `npm run create-env`
2. Start the server using nodemon: `npm run dev`
3. Access the Apollo Sandbox for testing at `https://studio.apollographql.com/sandbox/explorer` in your web browser.
4. Make sure the Sandbox is on `http://localhost:<port-number>/graphql`

## API Endpoint - Refer to gist files for possible implementation in Sandbox

- `/graphql` - The main GraphQL endpoint for executing queries and mutations.

## Schema

The GraphQL schema defines the available types and operations:

### User Type

- `id` (ID): The unique identifier of the user.
- `name` (String): The name of the user.
- `student_id` (String): The student ID of the user.
- `email` (String): The email address of the user.
- `unitsEnrolled` (String): The number of units enrolled by the user.
- `unitsTaken` (String): The number of units taken by the user.
- `major` (ProgramType): The major program of the user.
- `minor` (ProgramType): The minor program of the user (if applicable).
- `completed_courses` ([CourseType]): The list of courses completed by the user.
- `schedule` ([ScheduleType]): The list of schedules associated with the user.

### Course Type

- `id` (ID): The unique identifier of the course.
- `title` (String): The title of the course.
- `prefix` (String): The prefix of the course.
- `header` (String): The header of the course.
- `code` (String): The code of the course.
- `description` (String): The description of the course.
- `num_units` (String): The number of units of the course.
- `ge_category` (String): The GE category of the course.
- `prerequisites` (String): The prerequisites of the course.
- `url` (String): The URL of the course.
- `department` (DepartmentType): The department associated with the course.

### Department Type

- `id` (ID): The unique identifier of the department.
- `name` (String): The name of the department.
- `url` (String): The URL of the department.

### Program Type

- `id` (ID): The unique identifier of the program.
- `name` (String): The name of the program.
- `url` (String): The URL of the program.
- `department` (DepartmentType): The department associated with the program.
- `courses` ([CourseType]): The list of courses in the program.
- `programType` (ProgramDistinctType): The program type of the program.

### ProgramDistinct Type

- `id` (ID): The unique identifier of the program type.
- `name` (String): The name of the program type.

### Schedule Type

- `id` (ID): The unique identifier of the schedule.
- `name` (String): The name of the schedule.
- `courses` ([CourseType]): The list of
- `courses` ([CourseType]): The list of courses in the schedule.
- `user` (UserType): The user associated with the schedule.


### Current Queries

`user(id: ID):` Retrieve a user by ID.

`course(id: ID):` Retrieve a course by ID.

`department(id: ID):` Retrieve a department by ID.

`program(id: ID):` Retrieve a program by ID.

`programDistinct(id: ID):` Retrieve a program type by ID.

`schedule(id: ID):` Retrieve a schedule by ID.

`users:` Retrieve all users.

`courses:` Retrieve all courses.

`departments:` Retrieve all departments.

`programs:` Retrieve all programs.

`programDistincts:` Retrieve all program types.

`schedules:` Retrieve all schedules.

`coursesByDepartment(departmentId: ID):` Retrieve all courses in a department.

`programsByProgramType(type_id: ID):` Retrieve all programs in a program type based on type ID.

`userCountByMajor(programID: ID):` Retrieve users with a specific major given a program ID.

`userCountByUnitsTaken(num_of_units: String):` Retrieve users who have completed more than a certain amount of units.

### Current Mutations

- All CRUD functionality for all types

### NEEDED CONFIG
- Currently type-defs and resolvers are in the same file however in the future
     these should be seperated into respective files and exported.