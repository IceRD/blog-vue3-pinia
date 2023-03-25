import { createI18n } from 'vue-i18n'

const i18n = createI18n({
	locale: 'ru',
	messages: {
		ru: {
			authorization: 'Авторизация',
			enter: 'Войти',
			exit: 'Выйти',
			login: 'Логин',
			password: 'Пароль',
			example: 'Пример',

			errors: {
				default: 'Упс! Что-то пошло не так.',
				auth: 'Комбинация логина и пароля отсутствует',
			},
		},
	},
})

export default i18n
