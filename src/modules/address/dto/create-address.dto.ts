import { IsInt, IsString, Max, MaxLength, Min } from 'class-validator';
import { User } from '../../users/entities/user.entity';

export class CreateAddressDto {
  id: number;

  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsString()
  @MaxLength(2)
  state: string;

  @IsString()
  address: string;

  @IsInt()
  @Min(0)
  @Max(9999999)
  number: number;

  @IsString()
  cep: number;

  @IsString()
  complement: string;

  user: User;
}
