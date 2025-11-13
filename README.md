<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  <b>🎯 Sistema de Control de Inventario 🧁</b>
</p>

<p align="center">
  <i>Proyecto desarrollado por Joel Franklin Lazarte Cabezas Parí Alave Rene y Bernabe Jennifer  </i><br/>
  <i>Ingeniería de Sistemas – Gestión 2025</i>
</p>

<p align="center">
  <a href="https://nodejs.org" target="_blank"><img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white" /></a>
  <a href="https://www.postgresql.org/" target="_blank"><img src="https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql&logoColor=white" /></a>
  <a href="https://nestjs.com/" target="_blank"><img src="https://img.shields.io/badge/NestJS-Backend-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" /></a>
  <a href="https://swagger.io/" target="_blank"><img src="https://img.shields.io/badge/Swagger-Docs-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" /></a>
  <a href="https://github.com/" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
</p>

---

## 📘 Descripción General

El **Sistema de Control de Inventario** es una aplicación web creada con **NestJS** y **PostgreSQL** que permite gestionar de forma integral el stock de productos, proveedores, almacenes y movimientos de entrada/salida.

Cuenta con **autenticación JWT**, **documentación Swagger**, y generación automática de **alertas de stock bajo**, garantizando un control eficiente y escalable del inventario de la panadería.

---

## 🧠 Funcionalidades Principales

| Módulo | Descripción |
|:--|:--|
| 🔐 **Autenticación (Auth)** | Inicio de sesión, protección con JWT y control de roles |
| 🧁 **Productos (Obras)** | CRUD completo de productos con validaciones |
| 🗂️ **Categorías** | Organización de productos por tipo |
| 📦 **Movimiento** | Registra entradas/salidas y actualiza stock automáticamente |
| 🚨 **Alertas** | Notificaciones automáticas de bajo stock |
| 🧾 **Proveedor** | CRUD de proveedores con datos de contacto |
| 🏬 **Almacén** | Gestión de depósitos o sucursales |
| 🧭 **Ubicación** | Control de pasillos y estantes dentro de un almacén |

---

## 🧩 Tecnologías Utilizadas

- **NestJS** – Framework backend modular y escalable  
- **TypeORM** – ORM para interactuar con PostgreSQL  
- **PostgreSQL** – Base de datos relacional robusta  
- **JWT + Passport** – Seguridad y autenticación  
- **Swagger** – Documentación interactiva de la API  
- **Class-Validator** – Validación de datos en DTOs  

---

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/backend-inventario.git
cd backend-inventario
