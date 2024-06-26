## Unit Assignment: Kudos Board

Submitted by: Michelle Ordonez

Deployed Application (optional): [Kudos Board Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

- [X] **Home Page**
  - [X] Displays header, banner, search, board grid, and footer.
  - [X] Displays preview of all boards on initial page load.
    - [X] Boards previews should show an image/gif and board title.
  - [X] Users can click on a category (recent, celebration, thank you, inspiration) to filter the boards.
    - [X] Recent displays most recently created boards.
    - [X] Other categories display boards of that type.
  - [X] Users can search for a board by name.
  - [X] Users can click on a board to navigate to a new page containing that board.
  - [X] Users can create a new board.
    - [X] Boards should have a title, category, and author (optional).
  - [X] User can delete boards.
  
- [X] **Board Page**
  - [X] Displays a list of all cards for a board.
    -  [X] Each card features a text message.
    -  [X] Each card features a gif found using the [GIPHY API](https://developers.giphy.com/docs/api/).
    -  [X] Users can optionally sign the card as the author.  
-   [X] Cards can be upvoted.
-   [X] Cards can be deleted.


#### STRETCH FEATURES


- [ ] **User Accounts**
  - [ ] Users should be able to log in with a username and password.
  - [ ] Users should be able to sign up for a new account.
  - [ ]  Boards and cards should be associated with a user.
    - [ ]  Anonymous cards or cards by guest users should still be allowed.
  - [ ] Add a new filter option on the home page to display only the current user's boards.
  - [ ] Allow boards to be deleted only if they are owned by the user.
- [ ] **Deployment**
  - [ ] Website is deployed via Render.
- [ ] **Comments**
  - [ ] Users should be able to comment on cards.


### Walkthrough Video

![Loom Video](https://www.loom.com/embed/fe911ed7fda04c4399f85d5d05130b65?sid=51a0c122-f976-482b-85d7-667a36dea11f)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The topics discussed in the labs were very helpful for this project. Most of the concepts required were introduced in the labs which made them a very useful resource. Some features that more coverage would have helped with is model relationships.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would have liked to make the interface more intuitive. Users might not know to only use certain categories so a dropdown menu may have been a better option when creating a new board.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

When sharing projects, I was able to show my peers how I passed IDs and filters instead of writing multiple if statements. My peers also showed me how they fetched gifs with the GIPHY api so that I could attempt to implement it in the future.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Tessa, Ruby, Eduardo, and Axel were all very helpful in multiple parts of my project and were very open to answering my questions and giving advice!
