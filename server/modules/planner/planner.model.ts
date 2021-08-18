import { Planner_Data } from '@ts/planner.types';
import mongoose, { Document, Model } from 'mongoose';

const stringRequired = {
  type: String,
  required: true,
};

const cell = {
  cell_id: stringRequired, // Auto-genereted + unique - d2_h5 ?
  task_id: stringRequired, // ID for task to populate and get completed ?
  text: stringRequired,
  type: stringRequired, // If type is deleted also clear in DB
};

const week = {
  week_id: stringRequired, // Auto-genereted + unique - 12.08.21 ?
  start_date: stringRequired,
  cells: [cell],
};

const PlannerSchema = new mongoose.Schema<PlannerDocument, PlannerModel>(
  {
    user_email: stringRequired,
    calendar: [week],
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

export default mongoose.models.Planner ||
  mongoose.model<PlannerDocument, PlannerModel>('Planner', PlannerSchema);
