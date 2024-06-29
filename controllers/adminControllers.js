//modelos
const compras = require('../models/compras.js');
const pagos = require('../models/pagos.js');
const productos = require('../models/productos.js');
const proveedor = require('../models/proveedor.js');
const requisicion = require('../models/requisicion.js');
const usuarios = require('../models/usuarios.js');

const login = async(req,res)=>{
try{
res.render("login");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////////
const principal = async(req,res)=>{
try{
res.render("index");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
////////////////////////////////////////////////
const Compras = async(req,res)=>{
try{
const c = await compras.findAll();
res.render("compras",{c});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
///////////////////////////////////////////////
const Pagos = async(req,res)=>{
try{
const p = await pagos.findAll();
res.render("pagos",{p});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}


//////////////////////////////////////////////
const Proveedores = async(req,res)=>{
try{
const p = await proveedor.findAll();
res.render("proveedores",{p});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const Requisicion = async(req,res)=>{
try{
const r = await requisicion.findAll();
res.render("requisicion",{r});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const Productos = async(req,res)=>{
try{
const p = await productos.findAll();
res.render("productos",{p});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const Usuarios = async(req,res)=>{
try{
const u = await usuarios.findAll();
res.render("usuarios",{u});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const agregarProducto = async(req,res)=>{
try{
res.render("agregarProducto");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const agregarProductoPost = async(req,res)=>{
try{
const {nombre,descripcion,precio} = req.body;
await productos.create({nombre,descripcion,precio});
res.redirect("/productos");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const updateProducto = async(req,res)=>{
try{
const id = req.params.id;
const p = await productos.findOne({where:{id}});
res.render("updateProducto",{p});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const updateProductoPost = async(req,res)=>{
try{
const id = req.params.id;
const {nombre,descripcion,precio} = req.body;
const p = await productos.update({nombre,descripcion,precio},{where:{id}});
res.redirect("/productos");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const deleteProducto = async(req,res)=>{
try{
const id = req.params.id; 
await productos.destroy({where:{id}});
res.redirect('/productos');
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const agregarProveedor = async(req,res)=>{
try{
res.render("agregarProveedor");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const agregarProveedorPost = async(req,res)=>{
try{
const {nombre,apellido,cedula,rif,telefono,correo,direccion,empresa} = req.body;
await proveedor.create({nombre,apellido,cedula,rif,telefono,correo,direccion,empresa});
res.redirect("/proveedores");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
//////////////////////////////////////////////
const updateProveedor = async(req,res)=>{
try{
const id = req.params.id;
const p = await proveedor.findOne({where:{id}});
res.render("updateProveedor",{p});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const updateProveedorPost = async(req,res)=>{
try{
const id = req.params.id;
const {nombre,apellido,cedula,rif,telefono,correo,direccion,empresa} = req.body;
const p = await proveedor.update({nombre,apellido,cedula,rif,telefono,correo,direccion,empresa},{where:{id}});
res.redirect("/proveedores");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const deleteProveedor = async(req,res)=>{
try{
const id = req.params.id; 
await proveedor.destroy({where:{id}});
res.redirect('/proveedores');
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const agregarUsuario = async(req,res)=>{
try{
res.render("agregarUsuario");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const agregarUsuarioPost = async(req,res)=>{
try{
const {nombre,correo,password} = req.body;
await usuarios.create({nombre,correo,password});
res.redirect("/usuarios");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
////////////////////////////////////////////
//////////////////////////////////////////////
const updateUsuario = async(req,res)=>{
try{
const id = req.params.id;
const u = await usuarios.findOne({where:{id}});
res.render("updateUsuarios",{u});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const updateUsuarioPost = async(req,res)=>{
try{
const id = req.params.id;
const {nombre,correo,password} = req.body;
const p = await usuarios.update({nombre,correo,password},{where:{id}});
res.redirect("/usuarios");
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}
/////////////////////////////////////////////
const deleteUsuario = async(req,res)=>{
try{
const id = req.params.id; 
await usuarios.destroy({where:{id}});
res.redirect('/usuarios');
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}

const consulta = async(req,res)=>{
try{
const id = req.params.id; 
await requisicion.create({iReq:"4",nombreP:"mermelada",descripcionP:"del campo",cantidad:"2",fecha:"26/06/24",iProveedor:"4"});
res.json({message:"listo"});
}catch(error){
console.error(error.message);
res.status(500).send("Error en el servidor");
}
}



/////////////////////////////////////////////
module.exports={
	login,
	principal,
	Compras,
	Pagos,
	Productos,
	Proveedores,
	Requisicion,
	Usuarios,
	agregarProducto,
	agregarProveedor,
	updateProducto,
	agregarProductoPost,
	updateProductoPost,
	deleteProducto,
	agregarProveedorPost,
	updateProveedor,
	updateProveedorPost,
	deleteProveedor,
	agregarUsuario,
	agregarUsuarioPost,
	updateUsuario,
	updateUsuarioPost,
	deleteUsuario,consulta
}