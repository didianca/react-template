# Run App Component

1. in terminal: `npm start`

# New Project Setup
1. in working dir in terminal
- `npx create-react-app <app-name> --template typescript`
- `npm install --save-exact react-redux redux @types/react-redux redux-thunk axios`

> Note: When naming files use **.tsx** for files containing rect components and **.ts** for all other files.
2. design the Redux store + folder structure inside the project
3. delete src folder
4. create new src folder
5. create /src/index.tsx file. Inside this file:
    1. create AppComponent component
    2. render AppComponent
6. create /src/components (for functional components)
    1. create component files
7. create /src/state
    1. create src/state/action-types/index.ts - export enum of possible action types
    2. create src/state/actions/*.action.ts - for different action interfaces
        1. import all actions in index.ts and export them as actions?
    3. create src/state/reducers/*.reducer.ts - for different logic around state
        1. import all reducers in index.ts and export them all as reducers
    4. create src/state/action-creators/*.ts
        1. import all creators in index.ts and export them as creators
    5. create src/state/store.ts
        1. import reducers and pass them to the store
    6. create src/state/index.ts
        1. export store, action-creators and all other files needed outside the redux folder
    7. create /src/hooks/useAction.hook.ts