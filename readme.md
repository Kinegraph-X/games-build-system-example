Basic Instructions to bundle an app : 
-------------------------------------

- Download the present repo (don't clone it)

- In the root folder of the repo, launch :

```
npm install
```

- clone the formant-core & the formant-keyboardEvents repositories in the "codebase" folder, and of course the repo of the app you want to bundle

- In the root folder of the repo, launch :

```
grunt --bundle=ShootEmUp
```

The app shall be exposed in the global namespace of the browser under the "ShootEmUp" variable,or any name you set in the src/index.js file.

The logic to launch an app depends on the structure of your MyAppNameRouter.js file, but in the case of the shoot'em up game, we expose an object with an "init" prop, so :

```
ShootEmUp.init();
```

shall do the job.

Note 1 :The name of the "bundle" arg may be any name of an app which for you've created a json file named accordingly, similar to the ShootEmUp.json example

Note 2 : for apps other than games, you'll need to also clone the formant-stylesheet and formant-lexical-tools repos in the codebase folder