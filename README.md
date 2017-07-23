# React-Redux Primer

**What**
One (of many) getting started guides for React/Redux

**Why?**
On a recent work project I started my team down the path of adopting these tools in production. This tutorial is a resource to get those in my team (and in collaborating teams) up to a shared useful base level of understanding of these tools, so we can collaborate and learn together.

It assumes *almost zero* prior exposure to React/Redux (and *nearly zero* exposure to client side JS development) but does assume a degree of programming familiarity, i.e. you should show no fear of `functions`, `types`, `classes`, `objects` etc.

It *does not* aim to be an exhaustive documentation resource for those tools (I'll link out to better docs where appropriate), nor does it promise to offer **the best way** to solve the problems/areas covered...

## How to play along

### Pre-requisites

- Install node (version 6) and npm from here: https://nodejs.org/en/download/
- Install some sort of editor/IDE (I've been pretty happy with [Atom](https://atom.io/))

### Getting started

Get the code
```
git clone git@github.com:crosslandwa/react-redux-primer.git
cd react-redux-primer
npm install
```
then open the react-redux-primer folder in your IDE

Work through the technologies in the links below (note they build on each other so follow them in order) - each section links through to another directory/README in this repo with further steps/resources

**The play along steps throughout this tutorial have been written with the assumption you're using OS X**

## What is covered

- [Webpack/Webpack dev server](webpack)
- [React](react)
- [Redux](redux)
- [Redux and async actions](async-redux)

### Re-select
 - create anther type of tile, observe how parsing state is duplicated. Refactor to use re-select
 - show diffs from drum machine to how this is critical in more complex app

ideas
- start dev server with env variable that changes the entry point. Different entry point per step (means tutorial includes working code)
- only minimal working code, get to final step together (how would you use this resource solo?)
- branches with answers, use compare/x...y to see the incremental changes
