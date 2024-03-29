import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { AddressService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async create(@Body() createAddressDto: CreateAddressDto) {
    return await this.addressService.create(createAddressDto);
  }

  @Get()
  async findAll() {
    const addresses = await this.addressService.findAll();
    if (!addresses.length) {
      throw new HttpException('NO CONTENT', HttpStatus.NO_CONTENT);
    }
    return addresses;
  }

  @Get(':userId')
  async findAddressesByUser(@Param('userId') userId: string) {
    const address = await this.addressService.findAddressesByUser(+userId);
    if (!address) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return address;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return await this.addressService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return await this.addressService.remove(+id);
  }
}
