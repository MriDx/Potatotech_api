'use strict'

const User = use('App/Models/User')

class AuthController {

	async login({request, auth, response}) {
		let {email, password} = request.all()
		try {
			if (await auth.attempt(email, password)) {
				let user = await User.findByOrFail('email', email)
				let token =  await auth.generate(user)
				return token
			}
		} catch (error) {
			return response.status(403).json({
				status: 'failed',
				message: 'user not found'
			})
		}
	}

	async register({request, auth, response}) {
		try {
			let user = await User.findBy('email', request.body.email)
			if (user != null) {
				return response.status(403).json({
					status: 'failed',
					message: 'user already exist, please login'
				})
			}
			user = await User.create(request.all())
			let token = await auth.generate(user)
			Object.assign(user, token)
			return response.status(201).json({
				status: 'success',
				message: 'user created',
				user : user
			})
		} catch (error) {
			return response.status(403).json({
				status: 'failed',
				message: 'something went wrong !',
				error
			})
		}
	}

	async me({request, auth, response}) {
		try {
			let user = await auth.getUser()
			user.password = ''
			return user

		} catch (error) {
			return response.status(403).json({
				status: 'failed',
				message: 'something went wrong'
			})
		}
	}

}

module.exports = AuthController
