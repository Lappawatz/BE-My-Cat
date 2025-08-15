import { IsString, IsNotEmpty , IsOptional , IsNumber } from 'class-validator';
export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    readonly catId: string;

    @IsString()
    readonly userId: string;
    
    @IsString()
    readonly message: string;
}
