const express = require('express');
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const userRoutes = require('./routes/user')
const cors = require('cors')



const corsOptions = {
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}; 

app.use(cors(corsOptions)); 
app.use(express.json());  // This parses incoming requests with JSON payloads

const port = process.env.PORT || 5000;

const option = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Hope API",
        version: "1.0.0",
      },
      servers: [
        {
          url: `http://localhost:${port}`,
        },
      ],
      components: {
        schemas: {
          Blog: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                example: 1,
              },
              title: {
                type: "string",
                example: "Sample Blog Title",
              },
              description: {
                type: "string",
                example: "This is a detailed description of the blog.",
              },
              category: {
                type: "string",
                example: "Technology",
              },
              author: {
                type: "string",
                example: "John Doe",
              },
  
              date: {
                type: "string",
                format: "date",
                example: "2024-09-05",
              },
              image: {
                type: "string",
                example: "path/to/image.jpg",
              },
            },
            required: ["title", "description", "category", "author"],
          },
        },
      },
    },
    apis: ["./routes/*.js"], // Point to your route files
  };

  const swaggerSpec = swaggerJsdoc(option);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/auth', userRoutes);




module.exports = app;
