import {DataTypes, Sequelize} from 'sequelize';

export const sequelize = new Sequelize(
    process.env.PG_DB || 'reviews_db',
    process.env.PG_USER ||'postgres',
    process.env.PG_PASSWORD || 'postgres',
    {
        host: process.env.PG_HOST || 'localhost',
        port: process.env.PG_PORT ? Number(process.env.PG_PORT) : 5432,
        dialect: 'postgres',
        logging: false,
    }
)
export const defineModels = () => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
        },
        name: {
            type: DataTypes.STRING, allowNull: false
        },
        email: {
            type: DataTypes.STRING, allowNull: false, unique: true
        }

    }, {
        tableName: 'users', underscored: true,
    })

    const Service = sequelize.define('Service', {
        id: {
            type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
        },
        title: {
            type: DataTypes.STRING, allowNull: false
        },
        description: {
            type: DataTypes.TEXT, allowNull: false
        }
    }, {
        tableName: 'services', underscored: true,
    })

    return {
        User,
        Service
    }
}
export let models = null

export const connectPostgres  = async () => {
    await sequelize.authenticate();
    models = defineModels();
    await sequelize.sync({alter: true});
    console.log('Connected to PostgreSQL');
}