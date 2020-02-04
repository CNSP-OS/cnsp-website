
# Official [CNSP Website](https://cnsp.codes)

### The previous closed source website has been replaced with an open source version and the code for the same is present above. Because the website development and migration was handled by one person only, you might find quite a lot of errors. It is expected they will be resolved very soon.

## Table of Contents
1. [Issues, bugs, and requests](#issues-bugs-and-requests)
2. [Prerequisites](#prerequisites) 
3. [Before you build](#before-you-build)
4. [Developing](#developing)
5. [Redactions](#redactions)


## Issues, bugs, and requests

We welcome contributions and feedback on our website! Please file a request in our  [issue tracker](https://github.com/flutter/website/issues/new)  and we'll take a look.

For simple changes (such as to CSS and text), you probably don't need to build this site. Often you can make changes using the GitHub UI.

If you want/need to build, read on.

## Prerequisites
Install the following tools if you don't have them already.

-   **[Node.js](https://nodejs.org)**, a JavaScript runtime.
-   **[npm](https://github.com/npm/cli)**, a JavaScript package manager.
-   **[Express](https://expressjs.com/)**, Fast, unopinionated, minimalist web framework for [Node.js](https://nodejs.org/en/).
-   **[Mongoose](https://expressjs.com/)**, elegant [mongodb](https://www.mongodb.com/) object modeling for [node.js](https://nodejs.org/en/).
-   **[MongoDB](https://www.mongodb.com/community)**, MongoDB is a document database.
-   **[EJS](https://ejs.co)**, a simple templating language.

## Before you build

### Clone this repo
To **clone  [this repo](https://github.com/flutter/website)**, follow the instructions given in the GitHub help on [Cloning a repository](https://help.github.com/articles/cloning-a-repository), and _choose one_ of the following submodule-cloning techniques:

### Run installation scripts
**Open a bash terminal/command window**  and execute the following commands:

1.  `cd  _<path-to-this-repo>_`  # change to  **root of this repo**
2.  `npm i express mongoose ejs`  # initialize environment variables; install/use required Node & Ruby version

### Delete lines
Delete lines 5 to 41 in `server.js`

### Running the server
Run `npm start`

## Developing

In order to contribute to the project, you must have the knowledge of EJS, HTML, CSS, and JS. Follow these steps:

1. Create a branch.
2. Make your changes.
3. Do the work, write good commit messages.
4. Push to your origin repository.
5. Create a new PR in GitHub.
6. Respond to any code review feedback.

## Redactions

Certain parts of the server side code and the website have been redacted for security purposes. 