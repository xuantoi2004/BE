import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { QueryFailedError } from "typeorm";

@Catch(QueryFailedError)
export class QueryFailedFilter implements ExceptionFilter {
    catch(exception: QueryFailedError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        
        response.status(409).json({
            status: 'error',
            message: exception.driverError.sqlMessage
        })
    }
}