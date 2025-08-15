import { IsString, IsNotEmpty , IsOptional , IsNumber } from 'class-validator';

export class UpdateCommentDto {
    @IsString()
    @IsOptional()
    readonly catId?: string;

    @IsString()
    @IsOptional()
    readonly userId?: string;
    
    @IsString()
    @IsOptional()
    readonly message?: string;
}
