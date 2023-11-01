FROM node:18
WORKDIR /usr/samir-controlhe-usuario
COPY . .
RUN yarn 
CMD yarn serve