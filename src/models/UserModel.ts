import mongoose, { Schema, Document } from 'mongoose';

export interface IAddress {
  city: string;
  state: string;
  country: string;
  street: string;
}

export interface IItems extends Document {
  id: string;
  gender: string;
  name: string;
  address: IAddress;
  email: string;
  age: number;
  picture: string;
  createdAt: Date;
}

const AddressSchema = new Schema<IAddress>({
  city: String,
  state: String,
  country: String,
  street: String,
});

const UserSchema = new Schema<IItems>({
  id: { type: String, unique: true },
  gender: String,
  name: String,
  address: AddressSchema,
  email: String,
  age: Number,
  picture: String,
  createdAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model<IItems>('User', UserSchema);

export default UserModel;
