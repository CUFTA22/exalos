import { Planner_Data } from '@ts/planner.types';
import mongoose, { Document, Model } from 'mongoose';

const stringRequired = {
  type: String,
  required: true,
};
const string = {
  type: String,
};

// Cell subschema

const cellSchema = new mongoose.Schema(
  {
    cell_id: stringRequired, // Auto-genereted + unique - d2_h5 ?
    task_id: string, // ID for task to populate and get completed ?
    text: string,
    type: string, // If type is deleted also clear in DB
  },
  { _id: false }
);

// Week subschema

const weekSchema = new mongoose.Schema(
  {
    week_id: stringRequired, // Auto-genereted + unique - 12.08.21 ?
    cells: [cellSchema],
  },
  { _id: false }
);

// Type subschema

const typeSchema = new mongoose.Schema(
  {
    name: string,
    color: string,
  },
  { _id: true } // Keep _id for DELETE requests
);

const PlannerSchema = new mongoose.Schema<PlannerDocument, PlannerModel>(
  {
    user_email: stringRequired,
    calendar: [weekSchema],
    types: [typeSchema],
    settings: {
      start_time: stringRequired,
      end_time: stringRequired,
      include_weekends: {
        type: Boolean,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export interface PlannerDocument extends Planner_Data, Document {}

// For model
export interface PlannerModel extends Model<PlannerDocument> {
  findByUserEmail(user_email: string): Promise<PlannerDocument>;
}

// Static methods
PlannerSchema.statics.findByUserEmail = async function (
  this: Model<PlannerDocument>,
  user_email: string
) {
  return this.findOne({ user_email }).exec();
};

export default (mongoose.models.Planner as PlannerModel) ||
  mongoose.model<PlannerDocument, PlannerModel>('Planner', PlannerSchema);
