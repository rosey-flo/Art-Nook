const { model, Schema } = require('mongoose');
const { hash, compare } = require('bcrypt');

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		minlength: [2, 'Your username must be at least 2 characters']
	},

	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator(val) {
				return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(val);
			}
		}
	},

	password: {
		type: String,
		required: true,
		minLength: [6, 'Your password must be at least 6 characters in length'],
	},

    artwork: [{
        type: Schema.Types.ObjectId,
        ref: 'Artwork',
    }],
    favorites: [{  // New field
        type: Schema.Types.ObjectId,
        ref: 'Artwork',
    }]
},
	{
		toJSON: {
			transform(user, jsonVal) {
				delete jsonVal.password;
				delete jsonVal.__v;

				return jsonVal;
			}
		}
	});

userSchema.pre('save', async function () {
	// check if this is a newly created user and not jsut a  user update
	if (this.isNew) {
		this.password = await hash(this.password, 10);
	}
});

userSchema.methods.validatePassword = async function (formPassword) {
	const is_valid = await compare(formPassword, this.password);

	return is_valid;
}

const User = model('User', userSchema);

module.exports = User;