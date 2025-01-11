# Exam Surveillance Management System - ENSA El Jadida

A comprehensive web application for managing and planning exam surveillance at the National School of Applied Sciences of El Jadida (ENSA El Jadida).

## 🚀 Features

- Department and faculty management
- Exam session planning
- Automated surveillance assignments
- Venue management (amphitheaters and classrooms)
- Backup supervisor system
- Surveillance schedule generation

## 🛠 Technical Architecture
![System Architecture](https://github.com/user-attachments/assets/2e48b461-7302-44e0-a434-67cbd225a190)

### Frontend Technology Stack
- React.js for UI components
- Redux Toolkit for state management and API calls
- Material Tailwind for modern UI components
- Responsive design optimized for all devices

### Backend Microservices Architecture
Built on Spring Cloud Netflix stack for robust microservices:

- **API Gateway Service**
  - Spring Cloud Gateway for routing
  - Load balancing
  - Security filters
  - Rate limiting

- **Service Registry (Eureka Server)**
  - Service discovery
  - Load balancing
  - Fault tolerance

- **Config Server**
  - Centralized configuration
  - Environment-specific settings
  - Runtime configuration updates

- **Core Microservices**
  - Exam Service (Service des Examens)
  
  - Department Service (Service des Départements)
   



### Security
- Keycloak for Identity and Access Management
  - OAuth 2.0 / OpenID Connect
  - Role-based access control
  - Single Sign-On (SSO)
  - User Federation

### Database Architecture
- MySQL databases (one per service)
- Database per service pattern

## 📋 Prerequisites

- Node.js (v14+)
- Java 17
- Maven 3.8+
- MySQL 8.0+
- Docker & Docker Compose
- Keycloak 21+

## 🚀 Installation

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/Mohammedaoudi/Exam-surveillance-platform.git

# Navigate to frontend directory
cd material-tailwind-dashboard-react-main

# Install dependencies
npm install

# Start development server
npm start
```

### Backend Services Setup

```bash
# Start infrastructure services
docker-compose up -d

# Navigate to service directory
cd [service-name]

# Build with Maven
mvn clean install

# Run the service
mvn spring-boot:run
```

### Keycloak Configuration

1. Start Keycloak server:
```bash
docker-compose up keycloak
```

2. Access Keycloak Admin Console (http://localhost:8180)
3. Create new realm
4. Configure client settings
5. Set up roles and initial users

## 🔑 Configuration

### Frontend Environment Variables
```env
REACT_APP_API_URL=http://localhost:8080
REACT_APP_KEYCLOAK_URL=http://localhost:8180
REACT_APP_KEYCLOAK_REALM=your-realm
REACT_APP_KEYCLOAK_CLIENT_ID=your-client-id
```

### Microservice Configuration Example
```yaml
spring:
  application:
    name: exam-service
  cloud:
    config:
      uri: http://localhost:8888
    discovery:
      enabled: true
  datasource:
    url: jdbc:mysql://localhost:3306/exam_db
    username: root
    password: root

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/
```



## 👥 Contributors

- [CHOUAY Walid](https://github.com/CHOUAY15) 
- [BESSAM Adam](https://github.com/AdamBessam)
- [DAOUDI Mohammed](https://github.com/Mohammedaoudi)

## 💬 Support

For support and questions, please [open an issue](https://github.com/Mohammedaoudi/Exam-surveillance-platform/issues) on GitHub.

## 📄 License

This project is the property of ENSA El Jadida. All rights reserved.

