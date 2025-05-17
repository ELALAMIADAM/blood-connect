import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { User } from './user.model';

export class BloodRequest extends Model {
  public id!: number;
  public hospital!: string;
  public bloodType!: string;
  public units!: number;
  public urgency!: 'Low' | 'Medium' | 'High';
  public deadline!: Date;
  public latitude!: number;
  public longitude!: number;
  public status!: 'Open' | 'Fulfilled' | 'Expired';
  public requesterId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

BloodRequest.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  hospital: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bloodType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  units: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  urgency: {
    type: DataTypes.ENUM('Low', 'Medium', 'High'),
    allowNull: false,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Open', 'Fulfilled', 'Expired'),
    defaultValue: 'Open',
  },
  requesterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'BloodRequest',
});

// Define associations
BloodRequest.belongsTo(User, { foreignKey: 'requesterId', as: 'requester' }); 