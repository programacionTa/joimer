const adminRoutes = require('./routes/adminRoutes');
const express = require('express');
const http = require('http');
const path = require('path');
const port = 3000;
const app = express();
// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, '/public')));

// Instancia del servidor
const server = http.createServer(app);

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

// Configuración de recuperación de datos y envío
app.use(express.urlencoded({ extended:false}));
app.use(express.json());

// Routers
app.use('/', adminRoutes);

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});








