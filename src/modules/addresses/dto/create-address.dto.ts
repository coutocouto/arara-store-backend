import {
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { User } from '../../users/entities/user.entity';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  state: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(9999999)
  number: number;

  @IsNotEmpty()
  @IsString()
  cep: number;

  @IsString()
  complement?: string;

  user: User;
}
