import { IsInt, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class GeoDto {
  @IsString()
  lat: string;

  @IsString()
  lng: string;
}

class AddressDto {
  @IsString()
  street: string;

  @IsString()
  suite: string;

  @IsString()
  city: string;

  @IsString()
  zipcode: string;

  @ValidateNested()
  @Type(() => GeoDto)
  geo: GeoDto;
}

export class UserDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsString()
  email: string;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}
