export interface Zipcodemodel {
    zip_code: string;
    lat: number;
    lng: number;
    city: string;
    state: string;
    timezone: Timezone;
    acceptable_city_names: AcceptableCityName[];
    area_codes: number[];
}

    export interface Timezone {
        timezone_identifier: string;
        timezone_abbr: string;
        utc_offset_sec: number;
        is_dst: string;
    }

    export interface AcceptableCityName {
        city: string;
        state: string;
    }


