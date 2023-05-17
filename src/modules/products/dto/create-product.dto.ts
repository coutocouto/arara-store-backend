import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { Image } from '../../index.entities';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  size: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsInt()
  @Min(0)
  @Max(9999999)
  @IsNotEmpty()
  price: number;

  @IsInt()
  @Min(0)
  @Max(9999999)
  discount?: number;

  @IsInt()
  @Min(0)
  @Max(9999999)
  inherited?: number;

  @IsBoolean()
  disabled?: boolean;

  @IsInt()
  @Min(0)
  @Max(999)
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  images: Array<string>;
}
