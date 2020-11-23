# Potatotech Api

## Setup

```bash
git clone https://github.com/mridx/potatotech_api.git

cd potatotech_api

npm i

```

make a copy of `.env.example` file and rename it to `.env`

```bash

adonis key:generate

```

add database name and password to `.env` file

```bash
adonis migration:run

adonis serve --dev
```
