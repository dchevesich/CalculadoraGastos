# Calculadora de Gastos

## Descripción del Proyecto
Una breve descripción de lo que hace la aplicación.

## Características
- Gestión de gastos (añadir, ver, modificar, eliminar).
- ... (otras características que tenga tu app)

## Tecnologías Utilizadas
- Python
- Django
- SQLite (base de datos por defecto)
- HTML, CSS

## Configuración y Ejecución

### Requisitos
- Python 3.11
- pip (gestor de paquetes de Python)
- Docker y Docker Compose (opcional, para ejecución con contenedores)

### 1. Configuración Local (sin Docker)

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DE_TU_REPOSITORIO>
    cd CalculadoraMate-main
    ```
2.  **Crear y activar el entorno virtual:**
    ```bash
    python -m venv venv
    # En Windows (CMD):
    .\venv\Scripts\activate
    # En Windows (PowerShell):
    .\venv\Scripts\Activate.ps1
    # En Linux/macOS:
    source venv/bin/activate
    ```
3.  **Instalar dependencias:**
    ```bash
    pip install -r requirements.txt
    ```
4.  **Realizar migraciones de la base de datos:**
    ```bash
    python manage.py migrate
    ```
5.  **Crear un superusuario (opcional, para acceder al panel de administración de Django):**
    ```bash
    python manage.py createsuperuser
    ```
6.  **Ejecutar el servidor de desarrollo:**
    ```bash
    python manage.py runserver
    ```
    La aplicación estará disponible en `http://127.0.0.1:8000/`.

### 2. Ejecución con Docker

1.  **Asegúrate de tener Docker Desktop instalado y en ejecución.**
2.  **Clonar el repositorio (si aún no lo has hecho):**
    ```bash
    git clone <URL_DE_TU_REPOSITORIO>
    cd CalculadoraMate-main
    ```
3.  **Construir la imagen de Docker:**
    ```bash
    docker-compose build
    ```
4.  **Iniciar los servicios (la aplicación):**
    ```bash
    docker-compose up
    ```
    La aplicación estará disponible en `http://localhost:8000/`.

## Contacto
- Danko Chevesich
- https://github.com/dchevesich
