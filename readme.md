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

Note 1 :The name of the "bundle" arg may be any name of an app which for you've created a json file named accordingly, similar to the ShootEmUp.json example

Note 2 : for apps other than games, you'll need to also clone the formant-stylesheet and formant-lexical-tools repos in the codebase folder