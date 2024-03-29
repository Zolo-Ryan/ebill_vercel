# Project setup
1. Fork the repo. <br>
2. open terminal <br>
3. `git clone (url_of_your_repo)` <br>
4. `cd ebill` <br>
5. `npm i` <br>
6. `cd frontend` <br>
7. `npm i` <br>
8. `npm start` <br>
9. open new terminal in the project directory <br>
10. `cd ../backend` <br>
11. `npm i` <br>
12. `npm run dev` <br>

## Important points
`.env` files contains important secrets. Make sure not to delete or modify them.<br>
If backend crashes, most probably the mongodb server is not running:<br>
Go to terminal and type `mongosh`. If `mongosh` shows error then restart the pc. If `mongosh` is not found then install it. Else you can use **mongodb compass** also. Make sure to connect to `mongodb://localhost:27017` in compass. If this shows error then install `mongosh` to run the server. (PS: Idk any other way :) )<br>

After mongodb server is running there mustn't be any issues.<br>
Open the website and register a new user and play around the website.