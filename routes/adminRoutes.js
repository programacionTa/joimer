const express = require('express');
const router = express.Router();
const {login,principal,Compras,Pagos,agregarProducto,Usuarios,Productos,Proveedores,Requisicion,agregarProveedor,updateProducto,agregarProductoPost,updateProductoPost,deleteProducto,agregarProveedorPost,updateProveedor,updateProveedorPost,deleteProveedor,agregarUsuario,agregarUsuarioPost,updateUsuario,updateUsuarioPost,deleteUsuario,consulta} = require('../controllers/adminControllers');

router.get('/',login);
router.get('/principal',principal);

router.get('/compras',Compras);
router.get('/pagos',Pagos);
router.get('/productos',Productos);
router.get('/proveedores',Proveedores);
router.get('/requisicion',Requisicion);
router.get('/usuarios',Usuarios);

router.get('/agregarProducto',agregarProducto);
router.get('/agregarProveedor',agregarProveedor);
router.get('/agregarUsuario',agregarUsuario);


router.get('/updateProducto/:id',updateProducto);
router.get('/updateProveedor/:id',updateProveedor);
router.get('/updateUsuario/:id',updateUsuario);


router.post('/agregarProductoPost',agregarProductoPost);
router.post('/updateProductoPost/:id',updateProductoPost);
router.get('/deleteProducto/:id',deleteProducto);

router.post('/agregarProveedorPost',agregarProveedorPost);
router.post('/updateProveedorPost/:id',updateProveedorPost);
router.get('/deleteProveedor/:id',deleteProveedor);

router.post('/agregarUsuarioPost',agregarUsuarioPost);
router.post('/updateUsuarioPost/:id',updateUsuarioPost);
router.get('/deleteUsuario/:id',deleteUsuario);

router.get("/consulta",consulta);



module.exports=router;