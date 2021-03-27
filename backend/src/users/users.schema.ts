import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  lastname: String,
  creationDate: Date,
});
