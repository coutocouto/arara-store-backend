import { Injectable } from '@nestjs/common';
import { EntityNotFoundError } from '../../errors/not-found.error';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  private address: Address[];
  create(createAddressDto: CreateAddressDto) {
    const currentMaxId = this.address[this.address.length - 1]?.id || 0;

    const id = currentMaxId + 1;
    const address: Address = {
      id,
      ...createAddressDto,
    };

    const addressExists = this.address.find(
      (address) => address.id === createAddressDto.id,
    );

    if (addressExists) {
      return 'Address already exists';
    }

    this.address.push(address);

    return address;
  }

  findAll() {
    return this.address;
  }

  findOne(id: number) {
    const address = this.address.find((address) => address.id === id);

    if (!address) {
      throw new EntityNotFoundError('Address was not found.');
    }

    return address;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    const address = this.findOne(id);

    const newAddress: Address = {
      ...address,
      ...updateAddressDto,
    };

    const findIndex = this.address.findIndex((address) => address.id === id);
    this.address[findIndex] = newAddress;

    return newAddress;
  }

  remove(id: number) {
    const findIndex = this.address.findIndex((address) => address.id === id);
    this.address.splice(findIndex, 1);
    return;
  }
}
