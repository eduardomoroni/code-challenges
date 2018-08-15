# snapengage code assignment
## Running
- npm install
- npm start

## What was your objective? How close did you come to achieving it?
My main goal was to implement a UI with React that allows the user to see recent chat requests and to inspect details of this chat.
 
## What obstacles did you hit how did you solve them?
Time, because I had little time to perform the exercise, I needed to optimize as much as possible in what would bring value to the result and that could reach the goal.
For this, I took some time to investigate libraries that could speed up the part that I, usually slower, the stylization of the UI.
I ended up using two UI kits [Anchor-ui] (https://github.com/anchorchat/anchor-ui) and [Semantic-Ui-React] (https://github.com/Semantic-Org/Semantic -UI-React).
Anchor UI was very useful because I was able to develop the exercise by basically worrying about the part of structuring and organizing React, but the use of Semantic UI I think was kinda over engineering because, I ended up using only the grid, for a very simple case. As I didn't know for sure if I'd need to use more or not, I ended up choosing to use it.

## What would you look to add to the project if you had more time?
Performance improvements, for sure. Between selecting a chat and the details appear on the screen there is a perceptible delay. Probably because I'm rendering all the conversations at once,
even those that are in the visible part of the screen are being rendered.
It would also try to add the possibility of the user being able to respond.

## What, if anything, do you regret about the decisions you made?
- Transcripts aren't shown in chronological order. This would not be hard to implement, but working with that data size on the frontend always impacts performance.
- A single CSS file, I have used Anchor Ui and Semantic UI almost did not need to use CSS so I ended up leaving a single CSS file, which is an decision that doesn't scale.
- Organize test fixtures, I usually try to follow the [test fixtures] (https://github.com/junit-team/junit4/wiki/test-fixtures) pattern but the time was short and I decided not to use my time with it.
- Tests were done thinking about development and not quality, despite having tests there are still spaces for improvements in the quality of tests.
- The algorithm isn't performant, dumping a 2MB JSON on the screen requires a bit of performance improvements. But I would spend some time thinking about what would be most impacting to improve, so I decided to let it go, I hope you understand.
- I committed the sacrilege of using `any` in the flow-type, that would be something I wouldn't forgive myself in a project.

## Extras
Reading this section is optional, if you want to better understand some of the decisions I made, I think it'll be interesting.

### Folder Structure
During the conversation with engineer, he commented that you are in the process of migrating a Backbone codebase to React. This movement is very common today, and I believe that for some time now there will be
the same migration to another technology that will emerge. Based on this I studied [Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164) that in my view
is an architectural standard that fits well with agile development. He preaches the complete separation of domain logic, presentation logic, and data logic. It is worth mentioning that I made a very simplistic adaptation
well away from a case that could be used on a codebase that would go into production. And I adopted Model-View-Presenter as a way to adapt [smart and dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
with a standard of the market.

### Using JS Objects
This is a polemic point in JS, I know. But I accepted the risk. Unfortunately, I fell into an anti-pattern known as [Anemic domain model](https://martinfowler.com/bliki/AnemicDomainModel.html).
Lately, I've been looking for ways to express better through the code, without losing the speed and flexibility that JS provides. Two tools that helps me are [flow](https://flow.org/en/) and TDD (when applicable).
Using flow brings several benefits, and some trade-offs. If I represented domain entities as a data structure, I would still have to define the type. Between defining the type and declaring a class I decided to declare classes. That simple.

### Ugly interface
Yeah... I know... the interface was not the best. But CSS does not go into the list of skills I have and I like to use. Making the layout more pleasant would take considerable time and unfortunately I didn't have this time.

#### That's all folks
Regards,
[Eduardo Moroni](https://github.com/eduardomoroni)
