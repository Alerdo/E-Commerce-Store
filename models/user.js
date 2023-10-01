import { Model, DataTypes } from 'sequelize';

class User extends Model {
    static initialize(sequelize) {
        this.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                name: DataTypes.STRING,
                address: DataTypes.TEXT,
                registration_date: DataTypes.DATE,
                createdAt: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW, // Automatically set to the current timestamp on create
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW, // Automatically set to the current timestamp on update
                },
            },
            {
                sequelize,
                modelName: 'User', // Change to 'User' to match the table name
                tableName: 'users', // Ensure the table name matches your database table name
                underscored: true,
                timestamps: true, // Enable timestamps
                createdAt: 'created_at', // Specify the column name for 'created_at'
                updatedAt: 'updated_at', // Specify the column name for 'updated_at'
            }
        );
    }
}

export default User;
