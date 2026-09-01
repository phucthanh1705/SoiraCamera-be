# SoiraCamera Backend

Hệ thống Backend cho dự án SoiraCamera, được xây dựng dựa trên kiến trúc Microservices sử dụng NestJS.

## Cấu trúc dự án
Dự án được tổ chức theo dạng Monorepo với các service chính:
- **api-gateway**: Điểm vào (Entry point) tiếp nhận các request từ phía Client.
- **auth-service**: Microservice xử lý xác thực và phân quyền (Authentication/Authorization).
- **camera-service**: Microservice xử lý nghiệp vụ liên quan đến Camera.

## Công nghệ sử dụng
- Framework: NestJS
- Database: MongoDB Atlas
- Message Broker: Redis (Cloud)
- Containerization: Docker & Docker Compose

## Hướng dẫn cài đặt và chạy dự án

### 1. Cài đặt biến môi trường
Sao chép file `.env.example` thành `.env` và điền các thông tin kết nối thực tế (MongoDB, Redis, v.v.):
```bash
cp .env.example .env
```

### 2. Chạy môi trường Local (Development)
Cài đặt thư viện:
```bash
npm install
```
Mở các terminal khác nhau và chạy lần lượt từng service:
```bash
# Terminal 1: Chạy API Gateway
npm run start:dev api-gateway

# Terminal 2: Chạy Auth Service
npm run start:dev auth-service

# Terminal 3: Chạy Camera Service
npm run start:dev camera-service
```

### 3. Chạy với Docker (Được khuyến nghị)
Đảm bảo bạn đã cấu hình `.env` đầy đủ, sau đó chạy toàn bộ hệ thống bằng lệnh:
```bash
docker-compose up --build -d
```
Để xem log của các service:
```bash
docker-compose logs -f
```
Để dừng hệ thống:
```bash
docker-compose down
```
