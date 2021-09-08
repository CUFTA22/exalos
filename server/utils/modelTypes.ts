import { Schema } from 'mongoose';

export const MString = {
  type: String,
};
export const MStringRequired = {
  type: String,
  required: true,
};
export const MStringUinque = {
  type: String,
  unique: true,
};
export const MStringRequiredUinque = {
  type: String,
  required: true,
  unique: true,
};

export const MBoolean = {
  type: String,
};
export const MBooleanRequired = {
  type: String,
  required: true,
};

export const MObjectId = (ref: string) => ({ type: Schema.Types.ObjectId, ref });
