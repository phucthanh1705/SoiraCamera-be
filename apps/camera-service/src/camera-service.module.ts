import { Module } from '@nestjs/common';
import { CameraServiceController } from './camera-service.controller.js';
import { CameraServiceService } from './camera-service.service.js';

@Module({
  imports: [],
  controllers: [CameraServiceController],
  providers: [CameraServiceService],
})
export class CameraServiceModule {}
