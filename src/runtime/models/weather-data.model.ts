export interface WeatherData {
	location: {
		name: string;

	},
	current: {
		temp_c: number;
		condition: {
			text: string;
			icon: string;
		}
		humidity: string;
		feelslike_c: string;
		is_day: number;
	}
}