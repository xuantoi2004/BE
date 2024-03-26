import { DataSource, DataSourceOptions } from "typeorm";
import configuration from "../config/configuration";

export const typeormConfig = Object.assign({
    type: 'mysql',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
},
    configuration().database
)

export const createDataSourceOptions = (): DataSourceOptions => {
    return typeormConfig as DataSourceOptions;
};

const dataSource = new DataSource(typeormConfig as DataSourceOptions)

export default dataSource;