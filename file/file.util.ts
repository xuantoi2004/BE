import { Injectable } from "@nestjs/common";

@Injectable()
export class FileUtil {
    editFileName(req: any, file: any, callback: any) {
        const originalFileName = Date.now() + file.originalname;
        callback(null, originalFileName);
    }

    validateImageFile(req: any, file: any, callback: any) {
        const originalFileName = file.originalname;
        if (!originalFileName.match(/\.(jpg|png|jpeg|gif)$/)) {
            return callback(new Error('Not a valid image.'), false)
        }
        callback(null, true);
    }
}