# Assignment for Disecto -- Harinder Singh

### This assignment is Task #1 and Task #3 combined into one.

[Access the website](https://reacttodo.shop/)

[Access the Backend API](https://api.reacttodo.shop/)

This is a product review website with user authentication.

### This is ofcouse not a fully built website/webapp but just built according to the requirement of the assignment. The main built features are:
- List Products Component
- Search Bar Component
- Review/Comment Section
- User Authentication
- Caching

- **List Products Component** lists all the products in Card format along with the title, price, category and description.
- **Search Bar component** returns all the matching search items.
- **Review/Commment Section** shows all the reviews/comments for that particular product.
- **Caching** is fully implemented for faster access and better overall performance.
- **Users** can create an account and securely login using their credentials. There are two roles _Admin_ and _Users_. _Users_ don't have access to _Admin_ routes. There are
two _Admin_ routes. One is reactodo.shop/dashboard. This is a dummy component to show the logic on the frontend side. Admin has access to this route while users will be shown an
error and redirected to homepage. Frontend and backend is seperated. The bulk of roles and permissions is implemented on the backend. Only _Admin_ has access to the backend API.


### Some points regarding the assignment:
- More focus is spent on logic, implementation and structure rather than UI design(used a very basic design) in order to facilitate the requirements.
- Features such as ability to create a new product, add a review etc were not implemented on the frontend since the assignment did not mention them. The logic for them is implemented on the backend API, so they can easily be created on the frontend though.
- Features like Pagination were also not implemented similar to reasons above.
- I have a similar website developed which can be accessed hereplaygames.quest. It has loads of additional features like pagination, checkout with credit card, orders, address, extensive roles and permissions, cart etc. Please check it out if you want.
