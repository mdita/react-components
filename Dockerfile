# pull official base image
FROM node:14.19.1-alpine

# set work directory
WORKDIR /usr/src/app


# install serve - deployment static server suggested by official create-react-app
RUN npm install -g serve

EXPOSE 3000

# copy our build files from our builder stage
COPY ./build ./build

# USER jenkins
CMD ["/bin/sh", "-c", "serve -s build --no-clipboard"]
