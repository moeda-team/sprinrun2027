FROM node:22-alpine AS build

WORKDIR /app

ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_WHATSAPP_NUMBER
ARG NEXT_PUBLIC_REGISTRATION_API_URL
ARG NEXT_PUBLIC_EVENT_ID
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_WHATSAPP_NUMBER=$NEXT_PUBLIC_WHATSAPP_NUMBER \
    NEXT_PUBLIC_REGISTRATION_API_URL=$NEXT_PUBLIC_REGISTRATION_API_URL \
    NEXT_PUBLIC_EVENT_ID=$NEXT_PUBLIC_EVENT_ID

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS production

ENV NODE_ENV=production
WORKDIR /app

RUN npm install --global serve@14.2.4 \
  && addgroup -S app \
  && adduser -S app -G app

COPY --from=build --chown=app:app /app/out ./out

USER app
EXPOSE 3000

CMD ["serve", "out", "-l", "tcp://0.0.0.0:3000"]
