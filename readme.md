Basic Instructions to bundle an app : 
-------------------------------------

- Download the present repo (don't clone it)

- In the root folder of the repo, launch :

```
npm install
```

- clone the formant-core & the formant-keyboardEvents repositories in the "codebase" folder, and of course the repo of the app you want to bundle

- In the root folder of this repo, launch :

```
grunt --bundle=ShootEmUp
```

The app shall be exposed in the global namespace of the browser under the "ShootEmUp" variable,or any name you set in the src/index.js file.

The logic to launch an app depends on the structure of your MyAppNameRouter.js file, but in the case of the shoot'em up game, we expose a function which returns an object with an "init" prop, so :

```
ShootEmUp().init();
```

shall do the job.

Note 1 :The name of the "bundle" arg may be any name of an app which for you've created a json file named accordingly, similar to the ShootEmUp.json example

Note 2 : for apps other than games, you'll need to also clone the formant-stylesheet and formant-lexical-tools repos in the codebase folder


Livereloading
-------------

To enable the watchfolder and the live-reloading, add this to the ```&lt;head&gt;``` of your html file :

```
<script type="text/javascript" async="true" src="http://localhost:35729/livereload.js"></script>
```

and then launch :

```
grunt --bundle=ShootEmUp watch
```

Grunt shall then re-bundle the js app on each modification of a file.

The logic to deploy the app to your dev environement is up to you. You may want to use the "copy.js" task already defined in the "ShootEmUp" folder.

In order to do this, add 

```
"grunt-contrib-copy": "^0.8.0" to your devDependencies in the "package.json".
```

Define a 

```
"localDeployRoot" : "path_to_my_dev_server"
```

prop in the ShootEmUp.json file.

Finally, add the 

```
"copy-debug"
```

task at the end of the list in "watch.js" (and also in the "default" task of the gruntfile.js, if you want to also deploy on manual builds).