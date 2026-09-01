import { Controller, Get } from '@nestjs/common';
import { CameraServiceService } from './camera-service.service.js';

@Controller()
export class CameraServiceController {
  constructor(private readonly cameraServiceService: CameraServiceService) {}

  @Get()
  getHello(): string {
    return this.cameraServiceService.getHello();
  }
}
