import { Document, model, Schema } from 'mongoose';

interface IUser extends Document {
    clerkUserId: string;
    name: string;
    dob: string;
    gender: string;
    location: string;
    mobileNumber: string;
    school: string;
    study: string;
    previousClassPercentage: string;
    favouriteSubject: string;
    nonFavouriteSubject: string;
    achievements: string;
    aspiration: string;
    hobbies: string;
    strength: string;
    weakness: string;
    socialMedia: string;
    movie: string;
    book: string;
    higherEducation: string;
    referenceCounsellor: string;
    email: string;
}

const UserSchema = new Schema<IUser>({
    clerkUserId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    dob: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    mobileNumber: { type: String, default: '' },
    school: { type: String, default: '' },
    study: { type: String, default: '' },
    previousClassPercentage: { type: String, default: '' },
    favouriteSubject: { type: String, default: '' },
    nonFavouriteSubject: { type: String, default: '' },
    achievements: { type: String, default: '' },
    aspiration: { type: String, default: '' },
    hobbies: { type: String, default: '' },
    strength: { type: String, default: '' },
    weakness: { type: String, default: '' },
    socialMedia: { type: String, default: '' },
    movie: { type: String, default: '' },
    book: { type: String, default: '' },
    higherEducation: { type: String, default: '' },
    referenceCounsellor: { type: String, default: '' },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
}, {
    timestamps: true,
});

export const User = model<IUser>('User', UserSchema);
export type { IUser };