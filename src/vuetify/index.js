import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const defaultTheme = {
	dark: false,
	colors: {
		guestBackground: '#E3F2FD',
		primary: '#7986CB',
		error: '#EC407A',
	},
}

const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: 'defaultTheme',
		themes: {
			defaultTheme,
		},
	},
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		},
	},
})

export default vuetify
