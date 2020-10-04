This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Create a react project: 0. install nodejs and yarn package manager
install the create react app cli globally
sudo yarn global add create-react-app 2. Create a new react project called react-docker-project
create-react-app react-docker-project 3. Start the project
cd react-docker-project #enter the project directory
yarn start #start the project in development mode 4. You’ll land on the default Create react app (which to my surprise changed the spinning svg logo btw 😊)
Image for post
create react app landing page
Setup Docker for development: 0. install docker and docker-compose
a) install docker. Use this digital ocean tutorial to install for ubuntu.
How To Install and Use Docker on Ubuntu 18.04 | DigitalOcean
Docker is an application that simplifies the process of managing application processes in containers. Containers let…
www.digitalocean.com
b) install docker compose. Use the release page on github
Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. To learn more about all the features of Compose
docker/compose
You can't perform that action at this time. You signed in with another tab or window. You signed out in another tab or…
github.com
Open the react app in an editor. For example vscode
code . #open current directory in vscode 2. Create a dockerfile
“A dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.”
touch dockerfile #note the absence of an extension 3. Write the following commands inside the dockerfile. The lines starting with ‘#’ are comments. N/b docker file commands are run sequentially.

# set the base image

# This is the application image from which

# all other subsequent applications run

# why alpine? Alpine Linux is a security-oriented, lightweight

# Linux distribution. how small? how about 5Mb?

# in comparison ubuntu 18.04 is about 1.8Gb

FROM node:alpine

# set working directory

# this is the working folder in the container

# from which the app will be running from

WORKDIR /app

# copy package.json and yarn.lock

# package.json to install the packages from

# and yarn.lock for a package called chokidar

# which is used for hot reloading

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

# since we are using local files and not copying them to docker

# add the container's node_modules folder to docker's \$PATH

# so that it can find and watch it's dependencies

ENV PATH /app/node_modules/.bin:\$PATH

# install and cache dependencies

# n/b: these dependencies are installed inside docker

# it runs the command "yarn" which is an equivalent of "yarn add"

RUN yarn

# start the container

CMD ["yarn", "start"] 4. To spin up the container you can use docker run which you can read about here -> https://docs.docker.com/engine/reference/commandline/run/ or you can use the handy docker-compose as we will
a) create a docker-compose file
touch docker-compose.yml #notice the .yml extension
b) Write the following commands inside the docker-compose file.
N/b: this file is indentation sensitive. Like a certain weird language we all know (I’m looking at you python 👀). Get the exact indentation from the github repo on the TL;DR above
#the docker compose file version
version: "3.7"

# you can run multiple services inside one docker compose file

# define them with their dependencies one after the other

services:

# service 1 named react-dev

react-dev: # service 1 container name
container_name: react-dev
build: # the context (working directory) is the current directory # change this to the directory containing the dockerfile if in a different place
context: . # the dockerfile to be run
dockerfile: Dockerfile # map the exposed port from the underlying service to a port exposed to the outside # in this case map port 3000 exposed by create react app to also 3000 # to be used to access the container from the outside
ports: - "3000:3000" # the mounted volumes (folders which are outside docker but being used by docker)
volumes: - ".:/app" - "/app/node_modules" # set the environment to development
environment: - NODE_ENV=development
c) Fire up the container. The up flag starts the container, the — build flag builds the container. N/b: you need to stop anything else running on port 3000
docker-compose up --build
d) To stop the container run . The down flag stops and removes stopped containers and delete any associated network. The — rmi flag removes the images
docker-compose down -v --rmi local
Setup Docker for production:

1. Create production dockerfile
   touch Dockerfile-prod
2. Write the following commands inside the dockerfile-prod.

# set the base image

# n/b: for production, node is only used for building

# the static Html and javascript files

# as react creates static html and js files after build

# these are what will be served by nginx

# use alias build to be easier to refer this container elsewhere

# e.g inside nginx container

FROM node:alpine as build

# set working directory

# this is the working folder in the container

# from which the app will be running from

WORKDIR /app

# copy everything to /app directory

# as opposed to on dev, in prod everything is copied to docker

COPY . /app

# add the node_modules folder to \$PATH

ENV PATH /app/node_modules/.bin:\$PATH

# install and cache dependencies

RUN yarn
#build the project for production
RUN yarn build

# set up production environment

# the base image for this is an alpine based nginx image

FROM nginx:alpine

# copy the build folder from react to the root of nginx (www)

COPY --from=build /app/build /usr/share/nginx/html

# --------- only for those using react router ----------

# if you are using react router

# you need to overwrite the default nginx configurations

# remove default nginx configuration file

RUN rm /etc/nginx/conf.d/default.conf

# replace with custom one

COPY nginx/nginx.conf /etc/nginx/conf.d

# --------- /only for those using react router ----------

# expose port 80 to the outer world

EXPOSE 80

# start nginx

CMD ["nginx", "-g", "daemon off;"] 3. For those using react router create an nginx folder with an nginx file inside at the root of the project like so
└── nginx
└── nginx.conf
mkdir nginx #create an nginx directory
cd nginx #enter the directory
touch nginx.conf #create an nginx.conf file
cd .. #leave the directory 4. Write the following nginx configurations inside the nginx.conf file
server {
listen 80;
location / {
root /usr/share/nginx/html;
index index.html index.htm;
try_files $uri $uri/ /index.html;
}
error_page 500 502 503 504 /50x.html;
location = /50x.html {
root /usr/share/nginx/html;
}
} 5. a) create a docker-compose-prod file
touch docker-compose-prod.yml 6. Write the following commands inside the docker-compose-prod file
#the docker compose file version
version: "3.7"

# you can run multiple services inside one docker compose file

# define them with their dependencies one after the other

services:

# service 1 named react-prod

react-prod: # service 1 container name
container_name: react-prod
build: # the context (working directory) is the current directory # change this to the directory containing the dockerfile if in a different place
context: . # the dockerfile to be run
dockerfile:
Dockerfile-prod # map the exposed port from the underlying service to a port exposed to the outside # in this case map port 80 exposed by nginx to port 3000 on the outside # to be used to access the container from the outside
ports: - "3000:80" 7. Fire up the container. The -f flag let’s you pick a specific docker-compose file to run, the up flag starts the container, the -d flag runs the container in detach mode (no interactive cli) and the — build flag rebuilds the container. N/b: you need to stop anything else running on port 3000
docker-compose -f docker-compose-prod.yml up --build -d 8. To stop the container run the following commands. The down flag stops and removes stopped containers and delete any associated network. The — rmi flag removes the images locally
docker-compose -f docker-compose-prod.yml down -v --rmi local
