# Potatotech Api

## Setup

```bash
git clone https://github.com/MriDx/Potatotech_api.git

cd Potatotech_api

npm i

```

make a copy of `.env.example` file and rename it to `.env`

```bash

adonis key:generate

```

add database name and password to `.env` file
and set `DB_CONNECTION` to `mysql`

```bash
adonis migration:run

adonis serve --dev
```
