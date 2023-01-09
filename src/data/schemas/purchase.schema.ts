import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UUID } from 'bson';
mongoose.set('debug', process.env.DB_LOGGING_FLAG === 'enabled');

@Schema({ timestamps: true })
export class Purchase {
  @Prop({ default: new UUID() })
  id?: string;

  @Prop({ default: new Date() })
  createdAt?: Date;

  @Prop({ default: new Date() })
  updatedAt?: Date;

  @Prop()
  itemId: string;

  @Prop()
  itemType: string;

  @Prop()
  cost: number;

  @Prop()
  newValue: number;

  @Prop()
  userId: string;

  @Prop({ default: false })
  isSeen?: boolean;

  recentPurchaseDate?: Date;
}

export type PurchaseDocument = Purchase & Document;
export const PurchaseSchema = SchemaFactory.createForClass(Purchase);
PurchaseSchema.index({ username: 'text', email: 'text' });
