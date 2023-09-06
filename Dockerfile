FROM node:16

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

RUN npx prisma generate

EXPOSE 3001

RUN npm run build

CMD ["npm", "run", "start"]