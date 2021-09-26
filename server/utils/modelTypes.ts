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
export const MStringRequiredDefault = (def) => ({
  type: String,
  required: true,
  default: def,
});

export const MBoolean = {
  type: Boolean,
};
export const MBooleanRequired = {
  type: Boolean,
  required: true,
};
export const MBooleanRequiredDefault = (def) => ({
  type: Boolean,
  required: true,
  default: def,
});

export const MObjectId = (ref) => ({ type: Schema.Types.ObjectId, ref });
export const MObjectIdDefault = (ref) => ({
  type: Schema.Types.ObjectId,
  ref,
  default: '',
});
