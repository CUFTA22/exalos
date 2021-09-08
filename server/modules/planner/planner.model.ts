import {
  MBooleanRequired,
  MObjectId,
  MString,
  MStringRequired,
  MStringRequiredUinque,
} from '@server/utils/modelTypes';
import { Planner_Data } from '@ts/planner.types';
import mongoose, { Document, Model } from 'mongoose';

// Cell subschema

const cellSchema = new mongoose.Schema(
  {
    cell_id: MStringRequired, // Auto-genereted + unique - d2_h5 ?
    task_id: MObjectId('Task'), // ID for task to populate and get completed ?
    text: MString,
    type_id: MObjectId('Planner'), // If type is deleted also clear in DB
    meet_url: MString,
  },
  { _id: false }
);

// Week subschema

const weekSchema = new mongoose.Schema(
  {
    week_id: MStringRequired, // Auto-genereted + unique - 12.08.21 ?
    cells: [cellSchema],
  },
  { _id: false }
);

// Type subschema

const typeSchema = new mongoose.Schema(
  {
    name: MString,
    color: MString,
  },
  { _id: true } // Keep _id for DELETE requests
);

const PlannerSchema = new mongoose.Schema<PlannerDocument, PlannerModel>(
  {
    user_email: MStringRequiredUinque,
    calendar: [weekSchema],
    types: [typeSchema],
    settings: {
      start_time: MStringRequired,
      end_time: MStringRequired,
      include_weekends: MBooleanRequired,
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
