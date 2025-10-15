# Big Blues Portal

## Project Status: Discontinued (for now)

This project was started as a personal experiment to create a web portal for a friends group, but development was discontinued. I may revisit and continue development in the future.

## About

Big Blues Portal was conceived as a web application to serve as a centralized platform for a friends group, providing features like shared calendars, group chat, event planning, and other collaborative tools.

The project uses a purchased Vue.js admin template ([Vuexy](https://themeforest.net/item/vuexy-vuejs-html-laravel-admin-dashboard-template/23328599)) as the foundation for the frontend UI, while all backend architecture, integrations, and additional features were developed from scratch.

## Technologies Used

### Frontend
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Typed superset of JavaScript
- **Vuetify** - Material Design component framework
- **Vite** - Modern build tool and dev server
- **Pinia** - State management
- **Vuexy Template** - Professional admin template (purchased)

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Infrastructure
- **Docker & Docker Compose** - Containerization
- **Nginx** - Reverse proxy and static file serving
- **GitLab CI/CD** - Automated deployment pipeline (migrated to GitHub now)

## Project Structure

```
bigbluesportal/
├── frontend/          # Vue.js application (based on Vuexy template)
├── backend/           # Express.js API server
├── mongodb/           # MongoDB configuration
├── nginx/             # Nginx configuration
├── docker-compose.dev.yml
├── docker-compose.prod.yml
└── run_application.sh
```

## Running Locally

Development environment:
```bash
./run_application.sh
```

Or using Docker Compose:
```bash
docker-compose -f docker-compose.dev.yml up
```

## Future Plans

While currently on hold, potential future development could include:
- User authentication and authorization
- Group event management
- Shared file storage
- Real-time chat functionality
- Calendar integration
- Member profiles and activity feeds

## Note

The Vuexy admin template is a commercial product and is not included under any open-source license. The template was purchased for use in this project. All custom code and integrations developed for this project are my own work.
