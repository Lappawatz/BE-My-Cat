import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment, CommentDocument } from './schemas/comments.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const result = new this.commentModel(createCommentDto);
    return result.save();
  }

  async findAll(): Promise<Comment[]> {
    const result = await this.commentModel.find().exec();
    return result;
  }

  async findOne(id: string): Promise<Comment | null> {
    const result = await this.commentModel.findById(id).exec();
    return result;
  
  }

  async update(id: string, updateCommentDto: UpdateCommentDto): Promise<Comment | null> {
    const result = await this.commentModel.findByIdAndUpdate(id, updateCommentDto, { new: true }).exec();
    return result;
  }

  remove(id: string) {
    const result = this.commentModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new Error('Comment not found');
    }
    return `This action removes a #${id} comment`;
  }
}
