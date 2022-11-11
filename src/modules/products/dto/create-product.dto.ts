import { IsInt, IsString, Max, MaxLength, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  color: string;

  @IsString()
  @MaxLength(2)
  size: string;

  @IsString()
  brand: string;

  @IsInt()
  @Min(0)
  @Max(9999999)
  price: number;

  @IsInt()
  @Min(0)
  @Max(9999999)
  discount?: number;

  @IsInt()
  @Min(0)
  @Max(999)
  quantity: number;
}
