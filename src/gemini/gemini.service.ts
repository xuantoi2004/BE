import { Injectable } from '@nestjs/common';
import { CreateGeminiDto } from './dto/create-gemini.dto';
import { UpdateGeminiDto } from './dto/update-gemini.dto';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

@Injectable()
export class GeminiService {
  private genAI: any;
  private genAiProModel: any;
  private genAiProVisionModel: any;

  constructor(private readonly config: ConfigService) {
    this.genAI = new GoogleGenerativeAI(this.config.get('API_KEY'));
    this.genAiProModel = this.genAI.getGenerativeModel({model: 'gemini-pro'});
    this.genAiProVisionModel = this.genAI.getGenerativeModel({model: 'gemini-pro-vision'});
  }

  async getPromptWithImageResponse(images: Array<Express.Multer.File>, prompt: string): Promise<string> {
    const imageParts = [];
    for (let image of images) {
      imageParts.push(this.fileToGenerativePart(image.path, image.mimetype))
    }
  
    const result = await this.genAiProVisionModel.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  }

  async getPromptResponse(prompt: string): Promise<string> {
    const result = await this.genAiProModel.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  }

  // Converts local file information to a GoogleGenerativeAI.Part object.
  fileToGenerativePart(path: string, mimeType: string) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType
      },
    };
  }

  create(createGeminiDto: CreateGeminiDto) {
    return 'This action adds a new gemini';
  }

  findAll() {
    return `This action returns all gemini`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gemini`;
  }

  update(id: number, updateGeminiDto: UpdateGeminiDto) {
    return `This action updates a #${id} gemini`;
  }

  remove(id: number) {
    return `This action removes a #${id} gemini`;
  }
}
