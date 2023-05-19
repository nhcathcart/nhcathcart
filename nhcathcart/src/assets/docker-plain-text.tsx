export const dockerPlain = [{
    title: "Multi-Architecture Build Command",
    description: "This command will build an image that is compatible with various hardware, and push it to dockerhub.",
    code: `
    docker buildx build --push --platform linux/arm64/v8,linux/amd64 --tag <username>/<repo-name>:<tag> .
    `
},
{
    title: "Multi stage build boilerplate",
    description: "This is a boilerplate Dockerfile using a multistage build to reduce final image size. It assumes the base image you need is node, you are using npm, and your built files will be in a directory called dist. But all of that would be easy to change.",
    code: `
# Stage 1: Build the application
FROM node:latest as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Create a smaller image for production
FROM node:latest as production

WORKDIR /app

COPY --from=build /app/dist ./dist

RUN npm install -g serve

EXPOSE 5000

CMD ["npx", "serve", "-s", "dist"]`
}]