# TaskFlow - React Todo Application (Dockerized)

A modern, responsive **React Todo Application** built with **Vite**, **Lucide Icons**, **Glassmorphism CSS design**, and containerized using **Docker** & **Nginx**.

---

## 🚀 Features

- **React + Vite Architecture**: Modular components (`Navbar`, `StatsDashboard`, `TodoForm`, `FilterControls`, `TodoList`).
- **Rich Interactive UI**: Priority badges (High, Medium, Low), Category filters, Real-time search, Status pills, and `localStorage` persistence.
- **Dockerized**: Multi-stage `Dockerfile` with Nginx web server for production-ready container deployment.

---

## 💻 Running Locally (Without Docker)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the React Vite dev server:
   ```bash
   npm run dev
   ```

3. Open your browser: `http://localhost:5173`

---

## 🐳 Running with Docker

### Method 1: Docker Compose (Recommended)

Make sure Docker Desktop is open, then run:

```bash
docker compose up -d
```

Open your browser at: **`http://localhost:3000`**

To stop the container:
```bash
docker compose down
```

---

### Method 2: Docker CLI

1. **Build the Docker Image**:
   ```bash
   docker build -t react-todo-app:latest .
   ```

2. **Run the Container**:
   ```bash
   docker run -d -p 3000:80 --name react-todo-container react-todo-app:latest
   ```

---

## 📤 How to Push the React App Image to Docker Hub

### Step 1: Log in to Docker Hub
```bash
docker login
```

### Step 2: Tag the Image with your Docker Hub Username
```bash
docker tag react-todo-app:latest <YOUR_DOCKERHUB_USERNAME>/react-todo-app:latest
docker tag react-todo-app:latest <YOUR_DOCKERHUB_USERNAME>/react-todo-app:v1.0.0
```

> **Example**:
> ```bash
> docker tag react-todo-app:latest johndoe/react-todo-app:latest
> ```

### Step 3: Push to Docker Hub
```bash
docker push <YOUR_DOCKERHUB_USERNAME>/react-todo-app:latest
```

---

## 🌐 Run Container Anywhere
Once pushed, anyone can pull and run your React app instantly:
```bash
docker run -d -p 3000:80 <YOUR_DOCKERHUB_USERNAME>/react-todo-app:latest
```
