import React from 'react'

const timezoneData = [
    {tz: 'Africa/Abidjan', offset: 0},
    {tz: 'Africa/Accra', offset: 0},
    {tz: 'Africa/Addis_Ababa', offset: 3},
    {tz: 'Africa/Algiers', offset: 1},
    {tz: 'Africa/Asmara', offset: 3},
    {tz: 'Africa/Bamako', offset: 0},
    {tz: 'Africa/Bangui', offset: 1},
    {tz: 'Africa/Banjul', offset: 0},
    {tz: 'Africa/Bissau', offset: 0},
    {tz: 'Africa/Blantyre', offset: 2},
    {tz: 'Africa/Brazzaville', offset: 1},
    {tz: 'Africa/Bujumbura', offset: 2},
    {tz: 'Africa/Cairo', offset: 2},
    {tz: 'Africa/Casablanca', offset: 1},
    {tz: 'Africa/Ceuta', offset: 1},
    {tz: 'Africa/Conakry', offset: 0},
    {tz: 'Africa/Dakar', offset: 0},
    {tz: 'Africa/Dar_es_Salaam', offset: 3},
    {tz: 'Africa/Djibouti', offset: 3},
    {tz: 'Africa/Douala', offset: 1},
    {tz: 'Africa/El_Aaiun', offset: 0},
    {tz: 'Africa/Freetown', offset: 0},
    {tz: 'Africa/Gaborone', offset: 2},
    {tz: 'Africa/Harare', offset: 2},
    {tz: 'Africa/Johannesburg', offset: 2},
    {tz: 'Africa/Juba', offset: 3},
    {tz: 'Africa/Kampala', offset: 3},
    {tz: 'Africa/Khartoum', offset: 2},
    {tz: 'Africa/Kigali', offset: 2},
    {tz: 'Africa/Kinshasa', offset: 1},
    {tz: 'Africa/Lagos', offset: 1},
    {tz: 'Africa/Libreville', offset: 1},
    {tz: 'Africa/Lome', offset: 0},
    {tz: 'Africa/Luanda', offset: 1},
    {tz: 'Africa/Lubumbashi', offset: 2},
    {tz: 'Africa/Lusaka', offset: 2},
    {tz: 'Africa/Malabo', offset: 1},
    {tz: 'Africa/Maputo', offset: 2},
    {tz: 'Africa/Maseru', offset: 2},
    {tz: 'Africa/Mbabane', offset: 2},
    {tz: 'Africa/Mogadishu', offset: 3},
    {tz: 'Africa/Monrovia', offset: 0},
    {tz: 'Africa/Nairobi', offset: 3},
    {tz: 'Africa/Ndjamena', offset: 1},
    {tz: 'Africa/Niamey', offset: 1},
    {tz: 'Africa/Nouakchott', offset: 0},
    {tz: 'Africa/Ouagadougou', offset: 0},
    {tz: 'Africa/Porto-Novo', offset: 1},
    {tz: 'Africa/Sao_Tome', offset: 0},
    {tz: 'Africa/Timbuktu', offset: 0},
    {tz: 'Africa/Tripoli', offset: 2},
    {tz: 'Africa/Tunis', offset: 1},
    {tz: 'Africa/Windhoek', offset: 2},
    {tz: 'America/Adak', offset: -10},
    {tz: 'America/Anchorage', offset: -9},
    {tz: 'America/Anguilla', offset: -4},
    {tz: 'America/Antigua', offset: -4},
    {tz: 'America/Araguaina', offset: -3},
    {tz: 'America/Argentina/Buenos_Aires', offset: -3},
    {tz: 'America/Argentina/Catamarca', offset: -3},
    {tz: 'America/Argentina/ComodRivadavia', offset: -3},
    {tz: 'America/Argentina/Cordoba', offset: -3},
    {tz: 'America/Argentina/Jujuy', offset: -3},
    {tz: 'America/Argentina/La_Rioja', offset: -3},
    {tz: 'America/Argentina/Mendoza', offset: -3},
    {tz: 'America/Argentina/Rio_Gallegos', offset: -3},
    {tz: 'America/Argentina/Salta', offset: -3},
    {tz: 'America/Argentina/San_Juan', offset: -3},
    {tz: 'America/Argentina/San_Luis', offset: -3},
    {tz: 'America/Argentina/Tucuman', offset: -3},
    {tz: 'America/Argentina/Ushuaia', offset: -3},
    {tz: 'America/Aruba', offset: -4},
    {tz: 'America/Asuncion', offset: -4},
    {tz: 'America/Atikokan', offset: -5},
    {tz: 'America/Atka', offset: -10},
    {tz: 'America/Bahia', offset: -3},
    {tz: 'America/Bahia_Banderas', offset: -6},
    {tz: 'America/Barbados', offset: -4},
    {tz: 'America/Belem', offset: -3},
    {tz: 'America/Belize', offset: -6},
    {tz: 'America/Blanc-Sablon', offset: -4},
    {tz: 'America/Boa_Vista', offset: -4},
    {tz: 'America/Bogota', offset: -5},
    {tz: 'America/Boise', offset: -7},
    {tz: 'America/Buenos_Aires', offset: -3},
    {tz: 'America/Cambridge_Bay', offset: -7},
    {tz: 'America/Campo_Grande', offset: -4},
    {tz: 'America/Cancun', offset: -5},
    {tz: 'America/Caracas', offset: -4},
    {tz: 'America/Catamarca', offset: -3},
    {tz: 'America/Cayenne', offset: -3},
    {tz: 'America/Cayman', offset: -5},
    {tz: 'America/Chicago', offset: -6},
    {tz: 'America/Chihuahua', offset: -7},
    {tz: 'America/Coral_Harbour', offset: -5},
    {tz: 'America/Cordoba', offset: -3},
    {tz: 'America/Costa_Rica', offset: -6},
    {tz: 'America/Creston', offset: -7},
    {tz: 'America/Cuiaba', offset: -4},
    {tz: 'America/Curacao', offset: -4},
    {tz: 'America/Danmarkshavn', offset: 0},
    {tz: 'America/Dawson', offset: -8},
    {tz: 'America/Dawson_Creek', offset: -7},
    {tz: 'America/Denver', offset: -7},
    {tz: 'America/Detroit', offset: -5},
    {tz: 'America/Dominica', offset: -4},
    {tz: 'America/Edmonton', offset: -7},
    {tz: 'America/Eirunepe', offset: -5},
    {tz: 'America/El_Salvador', offset: -6},
    {tz: 'America/Ensenada', offset: -8},
    {tz: 'America/Fort_Nelson', offset: -7},
    {tz: 'America/Fort_Wayne', offset: -5},
    {tz: 'America/Fortaleza', offset: -3},
    {tz: 'America/Glace_Bay', offset: -4},
    {tz: 'America/Godthab', offset: -3},
    {tz: 'America/Goose_Bay', offset: -4},
    {tz: 'America/Grand_Turk', offset: -5},
    {tz: 'America/Grenada', offset: -4},
    {tz: 'America/Guadeloupe', offset: -4},
    {tz: 'America/Guatemala', offset: -6},
    {tz: 'America/Guayaquil', offset: -5},
    {tz: 'America/Guyana', offset: -4},
    {tz: 'America/Halifax', offset: -4},
    {tz: 'America/Havana', offset: -5},
    {tz: 'America/Hermosillo', offset: -7},
    {tz: 'America/Indiana/Indianapolis', offset: -5},
    {tz: 'America/Indiana/Knox', offset: -6},
    {tz: 'America/Indiana/Marengo', offset: -5},
    {tz: 'America/Indiana/Petersburg', offset: -5},
    {tz: 'America/Indiana/Tell_City', offset: -6},
    {tz: 'America/Indiana/Vevay', offset: -5},
    {tz: 'America/Indiana/Vincennes', offset: -5},
    {tz: 'America/Indiana/Winamac', offset: -5},
    {tz: 'America/Indianapolis', offset: -5},
    {tz: 'America/Inuvik', offset: -7},
    {tz: 'America/Iqaluit', offset: -5},
    {tz: 'America/Jamaica', offset: -5},
    {tz: 'America/Jujuy', offset: -3},
    {tz: 'America/Juneau', offset: -9},
    {tz: 'America/Kentucky/Louisville', offset: -5},
    {tz: 'America/Kentucky/Monticello', offset: -5},
    {tz: 'America/Knox_IN', offset: -6},
    {tz: 'America/Kralendijk', offset: -4},
    {tz: 'America/La_Paz', offset: -4},
    {tz: 'America/Lima', offset: -5},
    {tz: 'America/Los_Angeles', offset: -8},
    {tz: 'America/Louisville', offset: -5},
    {tz: 'America/Lower_Princes', offset: -4},
    {tz: 'America/Maceio', offset: -3},
    {tz: 'America/Managua', offset: -6},
    {tz: 'America/Manaus', offset: -4},
    {tz: 'America/Marigot', offset: -4},
    {tz: 'America/Martinique', offset: -4},
    {tz: 'America/Matamoros', offset: -6},
    {tz: 'America/Mazatlan', offset: -7},
    {tz: 'America/Mendoza', offset: -3},
    {tz: 'America/Menominee', offset: -6},
    {tz: 'America/Merida', offset: -6},
    {tz: 'America/Metlakatla', offset: -9},
    {tz: 'America/Mexico_City', offset: -6},
    {tz: 'America/Miquelon', offset: -3},
    {tz: 'America/Moncton', offset: -4},
    {tz: 'America/Monterrey', offset: -6},
    {tz: 'America/Montevideo', offset: -3},
    {tz: 'America/Montreal', offset: -5},
    {tz: 'America/Montserrat', offset: -4},
    {tz: 'America/Nassau', offset: -5},
    {tz: 'America/New_York', offset: -5},
    {tz: 'America/Nipigon', offset: -5},
    {tz: 'America/Nome', offset: -9},
    {tz: 'America/Noronha', offset: -2},
    {tz: 'America/North_Dakota/Beulah', offset: -6},
    {tz: 'America/North_Dakota/Center', offset: -6},
    {tz: 'America/North_Dakota/New_Salem', offset: -6},
    {tz: 'America/Ojinaga', offset: -7},
    {tz: 'America/Panama', offset: -5},
    {tz: 'America/Pangnirtung', offset: -5},
    {tz: 'America/Paramaribo', offset: -3},
    {tz: 'America/Phoenix', offset: -7},
    {tz: 'America/Port_of_Spain', offset: -4},
    {tz: 'America/Port-au-Prince', offset: -5},
    {tz: 'America/Porto_Acre', offset: -5},
    {tz: 'America/Porto_Velho', offset: -4},
    {tz: 'America/Puerto_Rico', offset: -4},
    {tz: 'America/Punta_Arenas', offset: -3},
    {tz: 'America/Rainy_River', offset: -6},
    {tz: 'America/Rankin_Inlet', offset: -6},
    {tz: 'America/Recife', offset: -3},
    {tz: 'America/Regina', offset: -6},
    {tz: 'America/Resolute', offset: -6},
    {tz: 'America/Rio_Branco', offset: -5},
    {tz: 'America/Rosario', offset: -3},
    {tz: 'America/Santa_Isabel', offset: -8},
    {tz: 'America/Santarem', offset: -3},
    {tz: 'America/Santiago', offset: -4},
    {tz: 'America/Santo_Domingo', offset: -4},
    {tz: 'America/Sao_Paulo', offset: -3},
    {tz: 'America/Scoresbysund', offset: -1},
    {tz: 'America/Shiprock', offset: -7},
    {tz: 'America/Sitka', offset: -9},
    {tz: 'America/St_Barthelemy', offset: -4},
    {tz: 'America/St_Johns', offset: -3},
    {tz: 'America/St_Kitts', offset: -4},
    {tz: 'America/St_Lucia', offset: -4},
    {tz: 'America/St_Thomas', offset: -4},
    {tz: 'America/St_Vincent', offset: -4},
    {tz: 'America/Swift_Current', offset: -6},
    {tz: 'America/Tegucigalpa', offset: -6},
    {tz: 'America/Thule', offset: -4},
    {tz: 'America/Thunder_Bay', offset: -5},
    {tz: 'America/Tijuana', offset: -8},
    {tz: 'America/Toronto', offset: -5},
    {tz: 'America/Tortola', offset: -4},
    {tz: 'America/Vancouver', offset: -8},
    {tz: 'America/Virgin', offset: -4},
    {tz: 'America/Whitehorse', offset: -8},
    {tz: 'America/Winnipeg', offset: -6},
    {tz: 'America/Yakutat', offset: -9},
    {tz: 'America/Yellowknife', offset: -7},
    {tz: 'Antarctica/Casey', offset: 11},
    {tz: 'Antarctica/Davis', offset: 7},
    {tz: 'Antarctica/DumontDUrville', offset: 10},
    {tz: 'Antarctica/Macquarie', offset: 11},
    {tz: 'Antarctica/Mawson', offset: 5},
    {tz: 'Antarctica/McMurdo', offset: 12},
    {tz: 'Antarctica/Palmer', offset: -3},
    {tz: 'Antarctica/Rothera', offset: -3},
    {tz: 'Antarctica/South_Pole', offset: 12},
    {tz: 'Antarctica/Syowa', offset: 3},
    {tz: 'Antarctica/Troll', offset: 0},
    {tz: 'Antarctica/Vostok', offset: 6},
    {tz: 'Arctic/Longyearbyen', offset: 1},
    {tz: 'Asia/Aden', offset: 3},
    {tz: 'Asia/Almaty', offset: 6},
    {tz: 'Asia/Amman', offset: 2},
    {tz: 'Asia/Anadyr', offset: 12},
    {tz: 'Asia/Aqtau', offset: 5},
    {tz: 'Asia/Aqtobe', offset: 5},
    {tz: 'Asia/Ashgabat', offset: 5},
    {tz: 'Asia/Ashkhabad', offset: 5},
    {tz: 'Asia/Atyrau', offset: 5},
    {tz: 'Asia/Baghdad', offset: 3},
    {tz: 'Asia/Bahrain', offset: 3},
    {tz: 'Asia/Baku', offset: 4},
    {tz: 'Asia/Bangkok', offset: 7},
    {tz: 'Asia/Barnaul', offset: 7},
    {tz: 'Asia/Beirut', offset: 2},
    {tz: 'Asia/Bishkek', offset: 6},
    {tz: 'Asia/Brunei', offset: 8},
    {tz: 'Asia/Calcutta', offset: 5},
    {tz: 'Asia/Chita', offset: 9},
    {tz: 'Asia/Choibalsan', offset: 8},
    {tz: 'Asia/Chongqing', offset: 8},
    {tz: 'Asia/Chungking', offset: 8},
    {tz: 'Asia/Colombo', offset: 5},
    {tz: 'Asia/Dacca', offset: 6},
    {tz: 'Asia/Damascus', offset: 2},
    {tz: 'Asia/Dhaka', offset: 6},
    {tz: 'Asia/Dili', offset: 9},
    {tz: 'Asia/Dubai', offset: 4},
    {tz: 'Asia/Dushanbe', offset: 5},
    {tz: 'Asia/Famagusta', offset: 2},
    {tz: 'Asia/Gaza', offset: 2},
    {tz: 'Asia/Harbin', offset: 8},
    {tz: 'Asia/Hebron', offset: 2},
    {tz: 'Asia/Ho_Chi_Minh', offset: 7},
    {tz: 'Asia/Hong_Kong', offset: 8},
    {tz: 'Asia/Hovd', offset: 7},
    {tz: 'Asia/Irkutsk', offset: 8},
    {tz: 'Asia/Istanbul', offset: 3},
    {tz: 'Asia/Jakarta', offset: 7},
    {tz: 'Asia/Jayapura', offset: 9},
    {tz: 'Asia/Jerusalem', offset: 2},
    {tz: 'Asia/Kabul', offset: 4},
    {tz: 'Asia/Kamchatka', offset: 12},
    {tz: 'Asia/Karachi', offset: 5},
    {tz: 'Asia/Kashgar', offset: 6},
    {tz: 'Asia/Kathmandu', offset: 5},
    {tz: 'Asia/Katmandu', offset: 5},
    {tz: 'Asia/Khandyga', offset: 9},
    {tz: 'Asia/Kolkata', offset: 5},
    {tz: 'Asia/Krasnoyarsk', offset: 7},
    {tz: 'Asia/Kuala_Lumpur', offset: 8},
    {tz: 'Asia/Kuching', offset: 8},
    {tz: 'Asia/Kuwait', offset: 3},
    {tz: 'Asia/Macao', offset: 8},
    {tz: 'Asia/Macau', offset: 8},
    {tz: 'Asia/Magadan', offset: 11},
    {tz: 'Asia/Makassar', offset: 8},
    {tz: 'Asia/Manila', offset: 8},
    {tz: 'Asia/Muscat', offset: 4},
    {tz: 'Asia/Novokuznetsk', offset: 7},
    {tz: 'Asia/Novosibirsk', offset: 7},
    {tz: 'Asia/Omsk', offset: 6},
    {tz: 'Asia/Oral', offset: 5},
    {tz: 'Asia/Phnom_Penh', offset: 7},
    {tz: 'Asia/Pontianak', offset: 7},
    {tz: 'Asia/Pyongyang', offset: 9},
    {tz: 'Asia/Qatar', offset: 3},
    {tz: 'Asia/Qyzylorda', offset: 5},
    {tz: 'Asia/Rangoon', offset: 6},
    {tz: 'Asia/Riyadh', offset: 3},
    {tz: 'Asia/Saigon', offset: 7},
    {tz: 'Asia/Sakhalin', offset: 11},
    {tz: 'Asia/Samarkand', offset: 5},
    {tz: 'Asia/Seoul', offset: 9},
    {tz: 'Asia/Shanghai', offset: 8},
    {tz: 'Asia/Singapore', offset: 8},
    {tz: 'Asia/Srednekolymsk', offset: 11},
    {tz: 'Asia/Taipei', offset: 8},
    {tz: 'Asia/Tashkent', offset: 5},
    {tz: 'Asia/Tbilisi', offset: 4},
    {tz: 'Asia/Tehran', offset: 3},
    {tz: 'Asia/Tel_Aviv', offset: 2},
    {tz: 'Asia/Thimbu', offset: 6},
    {tz: 'Asia/Thimphu', offset: 6},
    {tz: 'Asia/Tokyo', offset: 9},
    {tz: 'Asia/Tomsk', offset: 7},
    {tz: 'Asia/Ujung_Pandang', offset: 8},
    {tz: 'Asia/Ulaanbaatar', offset: 8},
    {tz: 'Asia/Ulan_Bator', offset: 8},
    {tz: 'Asia/Urumqi', offset: 6},
    {tz: 'Asia/Ust-Nera', offset: 10},
    {tz: 'Asia/Vientiane', offset: 7},
    {tz: 'Asia/Vladivostok', offset: 10},
    {tz: 'Asia/Yakutsk', offset: 9},
    {tz: 'Asia/Yangon', offset: 6},
    {tz: 'Asia/Yekaterinburg', offset: 5},
    {tz: 'Asia/Yerevan', offset: 4},
    {tz: 'Atlantic/Azores', offset: -1},
    {tz: 'Atlantic/Bermuda', offset: -4},
    {tz: 'Atlantic/Canary', offset: 0},
    {tz: 'Atlantic/Cape_Verde', offset: -1},
    {tz: 'Atlantic/Faeroe', offset: 0},
    {tz: 'Atlantic/Faroe', offset: 0},
    {tz: 'Atlantic/Jan_Mayen', offset: 1},
    {tz: 'Atlantic/Madeira', offset: 0},
    {tz: 'Atlantic/Reykjavik', offset: 0},
    {tz: 'Atlantic/South_Georgia', offset: -2},
    {tz: 'Atlantic/St_Helena', offset: 0},
    {tz: 'Atlantic/Stanley', offset: -3},
    {tz: 'Australia/ACT', offset: 10},
    {tz: 'Australia/Adelaide', offset: 9},
    {tz: 'Australia/Brisbane', offset: 10},
    {tz: 'Australia/Broken_Hill', offset: 9},
    {tz: 'Australia/Canberra', offset: 10},
    {tz: 'Australia/Currie', offset: 10},
    {tz: 'Australia/Darwin', offset: 9},
    {tz: 'Australia/Eucla', offset: 8},
    {tz: 'Australia/Hobart', offset: 10},
    {tz: 'Australia/LHI', offset: 10},
    {tz: 'Australia/Lindeman', offset: 10},
    {tz: 'Australia/Lord_Howe', offset: 10},
    {tz: 'Australia/Melbourne', offset: 10},
    {tz: 'Australia/North', offset: 9},
    {tz: 'Australia/NSW', offset: 10},
    {tz: 'Australia/Perth', offset: 8},
    {tz: 'Australia/Queensland', offset: 10},
    {tz: 'Australia/South', offset: 9},
    {tz: 'Australia/Sydney', offset: 10},
    {tz: 'Australia/Tasmania', offset: 10},
    {tz: 'Australia/Victoria', offset: 10},
    {tz: 'Australia/West', offset: 8},
    {tz: 'Australia/Yancowinna', offset: 9},
    {tz: 'Brazil/Acre', offset: -5},
    {tz: 'Brazil/DeNoronha', offset: -2},
    {tz: 'Brazil/East', offset: -3},
    {tz: 'Brazil/West', offset: -4},
    {tz: 'Canada/Atlantic', offset: -4},
    {tz: 'Canada/Central', offset: -6},
    {tz: 'Canada/Eastern', offset: -5},
    {tz: 'Canada/Mountain', offset: -7},
    {tz: 'Canada/Newfoundland', offset: -3},
    {tz: 'Canada/Pacific', offset: -8},
    {tz: 'Canada/Saskatchewan', offset: -6},
    {tz: 'Canada/Yukon', offset: -8},
    {tz: 'CET', offset: 1},
    {tz: 'Chile/Continental', offset: -4},
    {tz: 'Chile/EasterIsland', offset: -6},
    {tz: 'CST6CDT', offset: -6},
    {tz: 'Cuba', offset: -5},
    {tz: 'EET', offset: 2},
    {tz: 'Egypt', offset: 2},
    {tz: 'Eire', offset: 0},
    {tz: 'EST', offset: -5},
    {tz: 'EST5EDT', offset: -5},
    {tz: 'Etc/GMT', offset: 0},
    {tz: 'Etc/GMT+0', offset: 0},
    {tz: 'Etc/GMT+1', offset: -1},
    {tz: 'Etc/GMT+10', offset: -10},
    {tz: 'Etc/GMT+11', offset: -11},
    {tz: 'Etc/GMT+12', offset: -12},
    {tz: 'Etc/GMT+2', offset: -2},
    {tz: 'Etc/GMT+3', offset: -3},
    {tz: 'Etc/GMT+4', offset: -4},
    {tz: 'Etc/GMT+5', offset: -5},
    {tz: 'Etc/GMT+6', offset: -6},
    {tz: 'Etc/GMT+7', offset: -7},
    {tz: 'Etc/GMT+8', offset: -8},
    {tz: 'Etc/GMT+9', offset: -9},
    {tz: 'Etc/GMT0', offset: 0},
    {tz: 'Etc/GMT-0', offset: 0},
    {tz: 'Etc/GMT-1', offset: 1},
    {tz: 'Etc/GMT-10', offset: 10},
    {tz: 'Etc/GMT-11', offset: 11},
    {tz: 'Etc/GMT-12', offset: 12},
    {tz: 'Etc/GMT-13', offset: 13},
    {tz: 'Etc/GMT-14', offset: 14},
    {tz: 'Etc/GMT-2', offset: 2},
    {tz: 'Etc/GMT-3', offset: 3},
    {tz: 'Etc/GMT-4', offset: 4},
    {tz: 'Etc/GMT-5', offset: 5},
    {tz: 'Etc/GMT-6', offset: 6},
    {tz: 'Etc/GMT-7', offset: 7},
    {tz: 'Etc/GMT-8', offset: 8},
    {tz: 'Etc/GMT-9', offset: 9},
    {tz: 'Etc/Greenwich', offset: 0},
    {tz: 'Etc/UCT', offset: 0},
    {tz: 'Etc/Universal', offset: 0},
    {tz: 'Etc/UTC', offset: 0},
    {tz: 'Etc/Zulu', offset: 0},
    {tz: 'Europe/Amsterdam', offset: 1},
    {tz: 'Europe/Andorra', offset: 1},
    {tz: 'Europe/Astrakhan', offset: 4},
    {tz: 'Europe/Athens', offset: 2},
    {tz: 'Europe/Belfast', offset: 0},
    {tz: 'Europe/Belgrade', offset: 1},
    {tz: 'Europe/Berlin', offset: 1},
    {tz: 'Europe/Bratislava', offset: 1},
    {tz: 'Europe/Brussels', offset: 1},
    {tz: 'Europe/Bucharest', offset: 2},
    {tz: 'Europe/Budapest', offset: 1},
    {tz: 'Europe/Busingen', offset: 1},
    {tz: 'Europe/Chisinau', offset: 2},
    {tz: 'Europe/Copenhagen', offset: 1},
    {tz: 'Europe/Dublin', offset: 0},
    {tz: 'Europe/Gibraltar', offset: 1},
    {tz: 'Europe/Guernsey', offset: 0},
    {tz: 'Europe/Helsinki', offset: 2},
    {tz: 'Europe/Isle_of_Man', offset: 0},
    {tz: 'Europe/Istanbul', offset: 3},
    {tz: 'Europe/Jersey', offset: 0},
    {tz: 'Europe/Kaliningrad', offset: 2},
    {tz: 'Europe/Kiev', offset: 2},
    {tz: 'Europe/Kirov', offset: 3},
    {tz: 'Europe/Lisbon', offset: 0},
    {tz: 'Europe/Ljubljana', offset: 1},
    {tz: 'Europe/London', offset: 0},
    {tz: 'Europe/Luxembourg', offset: 1},
    {tz: 'Europe/Madrid', offset: 1},
    {tz: 'Europe/Malta', offset: 1},
    {tz: 'Europe/Mariehamn', offset: 2},
    {tz: 'Europe/Minsk', offset: 3},
    {tz: 'Europe/Monaco', offset: 1},
    {tz: 'Europe/Moscow', offset: 3},
    {tz: 'Asia/Nicosia', offset: 2},
    {tz: 'Europe/Oslo', offset: 1},
    {tz: 'Europe/Paris', offset: 1},
    {tz: 'Europe/Podgorica', offset: 1},
    {tz: 'Europe/Prague', offset: 1},
    {tz: 'Europe/Riga', offset: 2},
    {tz: 'Europe/Rome', offset: 1},
    {tz: 'Europe/Samara', offset: 4},
    {tz: 'Europe/San_Marino', offset: 1},
    {tz: 'Europe/Sarajevo', offset: 1},
    {tz: 'Europe/Saratov', offset: 4},
    {tz: 'Europe/Simferopol', offset: 3},
    {tz: 'Europe/Skopje', offset: 1},
    {tz: 'Europe/Sofia', offset: 2},
    {tz: 'Europe/Stockholm', offset: 1},
    {tz: 'Europe/Tallinn', offset: 2},
    {tz: 'Europe/Tirane', offset: 1},
    {tz: 'Europe/Tiraspol', offset: 2},
    {tz: 'Europe/Ulyanovsk', offset: 4},
    {tz: 'Europe/Uzhgorod', offset: 2},
    {tz: 'Europe/Vaduz', offset: 1},
    {tz: 'Europe/Vatican', offset: 1},
    {tz: 'Europe/Vienna', offset: 1},
    {tz: 'Europe/Vilnius', offset: 2},
    {tz: 'Europe/Volgograd', offset: 4},
    {tz: 'Europe/Warsaw', offset: 1},
    {tz: 'Europe/Zagreb', offset: 1},
    {tz: 'Europe/Zaporozhye', offset: 2},
    {tz: 'Europe/Zurich', offset: 1},
    {tz: 'GB', offset: 0},
    {tz: 'GB-Eire', offset: 0},
    {tz: 'GMT', offset: 0},
    {tz: 'GMT+0', offset: 0},
    {tz: 'GMT0', offset: 0},
    {tz: 'GMT-0', offset: 0},
    {tz: 'Greenwich', offset: 0},
    {tz: 'Hongkong', offset: 8},
    {tz: 'HST', offset: -10},
    {tz: 'Iceland', offset: 0},
    {tz: 'Indian/Antananarivo', offset: 3},
    {tz: 'Indian/Chagos', offset: 6},
    {tz: 'Indian/Christmas', offset: 7},
    {tz: 'Indian/Cocos', offset: 6},
    {tz: 'Indian/Comoro', offset: 3},
    {tz: 'Indian/Kerguelen', offset: 5},
    {tz: 'Indian/Mahe', offset: 4},
    {tz: 'Indian/Maldives', offset: 5},
    {tz: 'Indian/Mauritius', offset: 4},
    {tz: 'Indian/Mayotte', offset: 3},
    {tz: 'Indian/Reunion', offset: 4},
    {tz: 'Iran', offset: 3},
    {tz: 'Israel', offset: 2},
    {tz: 'Jamaica', offset: -5},
    {tz: 'Japan', offset: 9},
    {tz: 'Kwajalein', offset: 12},
    {tz: 'Libya', offset: 2},
    {tz: 'MET', offset: 1},
    {tz: 'Mexico/BajaNorte', offset: -8},
    {tz: 'Mexico/BajaSur', offset: -7},
    {tz: 'Mexico/General', offset: -6},
    {tz: 'MST', offset: -7},
    {tz: 'MST7MDT', offset: -7},
    {tz: 'Navajo', offset: -7},
    {tz: 'NZ', offset: 12},
    {tz: 'NZ-CHAT', offset: 12},
    {tz: 'Pacific/Apia', offset: 13},
    {tz: 'Pacific/Auckland', offset: 12},
    {tz: 'Pacific/Bougainville', offset: 11},
    {tz: 'Pacific/Chatham', offset: 12},
    {tz: 'Pacific/Chuuk', offset: 10},
    {tz: 'Pacific/Easter', offset: -6},
    {tz: 'Pacific/Efate', offset: 11},
    {tz: 'Pacific/Enderbury', offset: 13},
    {tz: 'Pacific/Fakaofo', offset: 13},
    {tz: 'Pacific/Fiji', offset: 12},
    {tz: 'Pacific/Funafuti', offset: 12},
    {tz: 'Pacific/Galapagos', offset: -6},
    {tz: 'Pacific/Gambier', offset: -9},
    {tz: 'Pacific/Guadalcanal', offset: 11},
    {tz: 'Pacific/Guam', offset: 10},
    {tz: 'Pacific/Honolulu', offset: -10},
    {tz: 'Pacific/Johnston', offset: -10},
    {tz: 'Pacific/Kiritimati', offset: 14},
    {tz: 'Pacific/Kosrae', offset: 11},
    {tz: 'Pacific/Kwajalein', offset: 12},
    {tz: 'Pacific/Majuro', offset: 12},
    {tz: 'Pacific/Marquesas', offset: -9},
    {tz: 'Pacific/Midway', offset: -11},
    {tz: 'Pacific/Nauru', offset: 12},
    {tz: 'Pacific/Niue', offset: -11},
    {tz: 'Pacific/Norfolk', offset: 11},
    {tz: 'Pacific/Noumea', offset: 11},
    {tz: 'Pacific/Pago_Pago', offset: -11},
    {tz: 'Pacific/Palau', offset: 9},
    {tz: 'Pacific/Pitcairn', offset: -8},
    {tz: 'Pacific/Pohnpei', offset: 11},
    {tz: 'Pacific/Ponape', offset: 11},
    {tz: 'Pacific/Port_Moresby', offset: 10},
    {tz: 'Pacific/Rarotonga', offset: -10},
    {tz: 'Pacific/Saipan', offset: 10},
    {tz: 'Pacific/Samoa', offset: -11},
    {tz: 'Pacific/Tahiti', offset: -10},
    {tz: 'Pacific/Tarawa', offset: 12},
    {tz: 'Pacific/Tongatapu', offset: 13},
    {tz: 'Pacific/Truk', offset: 10},
    {tz: 'Pacific/Wake', offset: 12},
    {tz: 'Pacific/Wallis', offset: 12},
    {tz: 'Pacific/Yap', offset: 10},
    {tz: 'Poland', offset: 1},
    {tz: 'Portugal', offset: 0},
    {tz: 'PRC', offset: 8},
    {tz: 'PST8PDT', offset: -8},
    {tz: 'ROC', offset: 8},
    {tz: 'ROK', offset: 9},
    {tz: 'Singapore', offset: 8},
    {tz: 'Turkey', offset: 3},
    {tz: 'UCT', offset: 0},
    {tz: 'Universal', offset: 0},
    {tz: 'US/Alaska', offset: -9},
    {tz: 'US/Aleutian', offset: -10},
    {tz: 'US/Arizona', offset: -7},
    {tz: 'US/Central', offset: -6},
    {tz: 'US/Eastern', offset: -5},
    {tz: 'US/East-Indiana', offset: -5},
    {tz: 'US/Hawaii', offset: -10},
    {tz: 'US/Indiana-Starke', offset: -6},
    {tz: 'US/Michigan', offset: -5},
    {tz: 'US/Mountain', offset: -7},
    {tz: 'US/Pacific', offset: -8},
    {tz: 'US/Pacific-New', offset: -8},
    {tz: 'US/Samoa', offset: -11},
    {tz: 'UTC', offset: 0},
    {tz: 'WET', offset: 0},
    {tz: 'W-SU', offset: 3},
    {tz: 'Zulu', offset: 0},
]


//remove end of string
function firstTwoInt (i) {return i !== undefined ? i.toString().substring(0,2) : ""}

function lastTwoInt (i) {return i !== undefined ? i.toString().substring(2,5) : ""}

//convert to number
function convertToInt (i) {return parseInt(firstTwoInt(i))}

// get the amount of timezone offset
function getTimezoneOffset(x) {
    for (let i = 0; i < timezoneData.length; i++) {
        if (timezoneData[i].tz === x) {
            return timezoneData[i].offset
        }
    }
}

//subtract offset from the original time
function updateTime(timeInput, timezoneInput) { 
    return convertToInt(firstTwoInt(timeInput)) + getTimezoneOffset(timezoneInput) 
}

//get final time
function getFinalTime(x) {
    if (x <= -12) {
        return (x+24).toString()
    } else if (x <= 0) {
        return (x+12).toString()
    } else if (x <= 12) {
        return (x).toString()
    } else if (x <= 23) {
        return (x-12).toString()
    } else {
        return "time not found"
    }
}

function getFinalDayTime(x) {
    if (x <= -12) {
        return " AM"
    } else if (x <= 0) {
        return " PM"
    } else if (x <= 12) {
        return " AM"
    } else if (x <= 23) {
        return " PM"
    } else {
        return "time not found"
    }
}

function concatenateTimes(x,y,z) {
    return x.concat(y,z)
}


const SunStatus = props => {

    const sunriseHour = getFinalTime(updateTime(props.sunRise,props.timezone))
    const sunriseMinute = lastTwoInt(props.sunRise)
    const sunriseDayTime = getFinalDayTime(updateTime(props.sunRise,props.timezone))
    const sunriseTime = concatenateTimes(sunriseHour,sunriseMinute,sunriseDayTime)
    
    const sunsetHour = getFinalTime(updateTime(props.sunSet,props.timezone))
    const sunsetMinute = lastTwoInt(props.sunSet)
    const sunsetDayTime = getFinalDayTime(updateTime(props.sunSet,props.timezone))
    const sunsetTime = concatenateTimes(sunsetHour,sunsetMinute,sunsetDayTime)

    //Sun Horizontal Margin
    const sunXDay = props.dayCompleted === undefined ? "" : ((props.dayCompleted * 100)*.8)
    const sunXString = sunXDay.toString()
    const sunXMargin = sunXString.concat("%")

    //Sun Margin Set
    const sunStyle = {
       marginLeft: sunXMargin,
    }

    //Moon Horizontal Margin
    const moonXDay = props.dayCompleted === undefined ? "" : (((props.dayCompleted * 100) - 100))
    const moonXString = moonXDay.toString()
    const moonXMargin = moonXString.concat("%")
    
    //Moon Margin Set
    const moonStyle = {
        marginLeft: moonXMargin,        
    }

    //Day/Night Styles
    const dayStyle = {
        display: props.dayCompleted > 1 ? "none" : "block"
    }

    const nightStyle = {
        display: props.dayCompleted > 1 || props.dayCompleted < 0 ? "block" : "none"
    }


    return (
        <div>
            {props.sunRise &&
            <div>
                <div className="sunstatus-wrapper">
                    <div className="bar" id="sunrise-bar"/>

                    <div className="sunstatus-container" style={dayStyle}>
                        <div className="sunstatus-times">
                            <div className ="sun-text">SUNRISE</div>
                            
                            <div className="line-container">
                                <img className="sun-image"  style={sunStyle} src="https://image.flaticon.com/icons/png/512/169/169367.png"/>
                                <div id="semiCircle" />
                            </div>

                            <div className ="sun-text">SUNSET</div>
                            
                        </div>
                        <div className="sunstatus-textcontainer">
                            <div className="time"> {sunriseTime}  </div>
                            <div className="time"> {sunsetTime}  </div>
                        </div>
                    </div>

                    <div className="sunstatus-container" style={nightStyle}>
                        <div className="sunstatus-times">
                            <div className ="sun-text">MOONRISE</div>
                                <div className="line-container">
                                    <img className="sun-image"  style={moonStyle} src="https://images.vexels.com/media/users/3/153685/isolated/preview/04ac05fd3bbde0451d737a105e053379-full-moon-icon-by-vexels.png"/>
                                    <div id="semiCircle" />
                                </div>

                            <div className ="sun-text">MOONSET</div>
                            
                        </div>
                    </div>
                    <div className="bar" id="sunrise-bar"/>                    
                </div>
            </div>
            }
        </div>
    )
}


//                    <img id="semiCircle" src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Semicircle_%28PSF%29.png"/>

export default SunStatus


