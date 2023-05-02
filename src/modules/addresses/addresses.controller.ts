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
} from '@nestjs/common';
import { AddressService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

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

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const address = await this.addressService.findOne(+id);
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
    await this.findOne(id);
    return await this.addressService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.findOne(id);
    return await this.addressService.remove(+id);
  }
}
