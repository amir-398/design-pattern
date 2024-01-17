# VOD Films Management API with Observer Pattern

![Static Badge](https://img.shields.io/badge/version-1.0.0-blue)
![Static Badge](https://img.shields.io/badge/node_js-language-green?logo=nodedotjs)
![Static Badge](https://img.shields.io/badge/docs_api-swagger-orange?logo=swagger)

This Node.js API lets you manage a catalog of films with dynamic platform allocation. Films can be added to the catalog, assigned to different streaming platforms, and users are notified whenever a film changes platforms.

## Introduction 📄​

The VOD Films Management API has been designed to facilitate the organization and monitoring of film distribution across various streaming platforms. It employs the observer pattern to notify users of platform changes for individual films.

## What you can do with the VOD Films Management API 🔎​

Here are a few examples of how to use this API:

- Add a new film: `POST /movies`
- Update film details (including platform): `PUT /movies/{film_id}`
- Retrieve all films for a specific platform: `GET /movies/{platform_name}`
- Get notifications when a film changes platforms
- Add category: `POST /category`
- GET all categories: `GET /category`

## ​🔥​ Try the API (Swagger) 🔥​ ​🗂️​

Swagger documentation will be available once the project is deployed, enabling you to interact with the API directly.

## ⚡​ Installation ​⚡​

To install and run this project locally, follow these steps:

```bash
git clone https://github.com/amir-398/design-pattern.git
cd DESIGN-PATTERN
npm install
npm start
```
