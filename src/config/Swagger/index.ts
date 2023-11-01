import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.API_PORT;
const urlAPI = `http://localhost:${PORT}`

const DOCKER_PORT = process.env.DOCKER_PORT;
const urlDOCKER = `http://localhost:${DOCKER_PORT}`

export const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'API Samir-Controlhe-Usuario',
      version: '1.0.0',
      description:
        'This is a REST API application made with Express, TypeORM, Swagger, Bcrypt, Json Web Token, PostgreSQL, UUID, Jest and Supertest. API responsible for controlling access to the samir system',
      license: {
        name: 'Repository-GitHub',
        url: 'https://github.com/moisesPompilio/equity-wallet_back-end',
      },
      contact: {
        name: 'Developer Website ',
        url: 'https://github.com/moisesPompilio/'
      },
    },
    servers: [
      {
        url: `http://10.191.8.198:${DOCKER_PORT}/`,
        description: 'Development server',
      },
      {
        url: urlDOCKER,
        description: 'Development server DOCKER',
      },
      {
        url: urlAPI,
        description: 'Development server',
      },
    ],
  };

  export const Options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./src/routes/*.ts', './src/entities/*.ts', './src/DTO/*.ts'],
};