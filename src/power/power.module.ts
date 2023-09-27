import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  // These are private
  providers: [PowerService],
  // These are public
  exports: [PowerService],
})
export class PowerModule {}
