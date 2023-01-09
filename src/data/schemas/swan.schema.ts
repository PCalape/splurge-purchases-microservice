import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { NameDisplayPreferenceEnum } from '@enums/name-display-preference.enum';
import { GenderEnum } from '@enums/gender.enum';
import { AccountRequestStatusEnum } from '@enums/account-request-status.enum';
import { UUID } from 'bson';
mongoose.set('debug', process.env.DB_LOGGING_FLAG === 'enabled');

@Schema({ timestamps: true })
export class Swan {
  @Prop({ default: new UUID() })
  id?: string;

  @Prop({ default: new Date() })
  createdAt?: Date;

  @Prop({ default: new Date() })
  updatedAt?: Date;

  @Prop()
  deletedAt?: Date;

  @Prop()
  name?: string;

  @Prop({ index: true })
  username: string;

  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop({ default: false })
  isDefended?: boolean;

  @Prop({
    enum: NameDisplayPreferenceEnum,
  })
  nameDisplayPreference?: NameDisplayPreferenceEnum;

  @Prop()
  email: string;

  @Prop()
  phoneNumber?: string;

  @Prop()
  photoURL?: string;

  @Prop()
  defaultPhotoURL?: string;

  @Prop({
    enum: GenderEnum,
  })
  gender?: GenderEnum;

  @Prop()
  birthdate?: Date;

  @Prop()
  aboutMe?: string;

  @Prop()
  value?: number;

  @Prop({ default: false })
  isVerified?: boolean;

  @Prop({ default: false })
  isBanned?: boolean;

  isAdmin?: boolean;

  fbAccessToken?: string;

  @Prop({ default: true })
  isSubscribedToEmail?: boolean;

  @Prop({
    default: AccountRequestStatusEnum.PENDING_APPROVAL,
    enum: AccountRequestStatusEnum,
  })
  status?: AccountRequestStatusEnum;

  authorization?: string;
}

export type SwanDocument = Swan & Document;
export const SwanSchema = SchemaFactory.createForClass(Swan);
SwanSchema.index({ username: 'text', email: 'text' });
