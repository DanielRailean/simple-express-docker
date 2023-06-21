FROM node:16.20.0-alpine3.18

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install


RUN apk --no-cache add curl
RUN curl -f http://example.com

# Bundle app source
COPY . /usr/src/app
HEALTHCHECK --interval=3s --timeout=1s --retries=3 --start-period=5s CMD curl -f http://localhost:8080/health || kill $(pidof node)

EXPOSE 8080
CMD [ "yarn", "start" ]
