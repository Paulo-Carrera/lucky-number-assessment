### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?

RESTful routing is the practice of making your different routes follow the REST pattern, using the different HTTP verbs (GET, POST, DELETE & PUT) in their standardized ways, adhering to the CRUD (Create Read Update Delete) standards. 

- What is a resource?

Resources are used to specify endpoints in a URL and they represent a piece of data or object that can be manipulated within a system through an API. Resources can be manipulated using the different HTTP methods (GET, POST, PUT, PATCH, DELETE) 

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?

When building a JSON API, you dont include routes to render HTML forms because JSON APIs are designed to handle data in a structured format (in JSON) and perform CRUD operations, and not to handle user interface components. 

- What does idempotent mean? Which HTTP verbs are idempotent?

Idempotent means that making the same request multiple times will have the same effect as making the request only once. GET, PUT, and DELETE are idempotent routes.

- What is the difference between PUT and PATCH?

PUT is used to completely replace a resource at a specified URL with the new data provided in the request. If any fields are omitted in the PUT request, they will be removed or reset to their default state. PATCH, on the other hand is used to partially update a resource. It allows you to send only the fields that need to be updated, leaving the others unchanged. PUT requires a full representation of the resource , while PATCH requires only the changes. 

- What is one way encryption?

One way ecryption, or hashing is a process that converts data (commonly a password) into a fixed-sized string of characters, which is typically a hash. Hashing is designed to be a one-way function, meaning it cannot be easily reversed to obtain the original input. Bcrypt is an example of a hashing algorithm that is commonly used to hash password securely. It also incorporates a salt to protect against rainbow table attacks and includes work factor settings to make brute-force attacks more difficult.

- What is the purpose of a `salt` when hashing a password?

A salt is a random value added to a password before hashing it. The purpose of a salt is to ensure that even if two users have the same password, their hashed passwords will be different due to the unique salt value added to each password. This makes it much harder for attackers to use techniques to crack passwords.

- What is the purpose of the Bcrypt module?

Bcrypt is a helpful module for secure password hashing. It provides functionality to hash passwords using the bcrypt algorithm, which is designed to be computationally expensive to slow down brute-force attacks. Bcrypt also includes built-in salting to ensure each password is unique and a work factor that controls the algorithms complexity. This makes bcrypt particularly effective for securing user passwords in authentication systems.

- What is the difference between authorization and authentication?

Authentication is the process of verifying the identity of a user. It typically involves checking that the user-provided credentials (like username or password) match what is stored in the database. Authorization, on the other hand, determines what an authenticated user is allowed to do within an application. It defines user permissions and access levels, ensuring that users can only access resources and perform actions that they are permitted to.