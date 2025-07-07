// Country data with phone codes (continued)
const countries = [
    { code: 'US', name: 'United States', phone: '+1', flag: '🇺🇸' },
    { code: 'CA', name: 'Canada', phone: '+1', flag: '🇨🇦' },
    { code: 'GB', name: 'United Kingdom', phone: '+44', flag: '🇬🇧' },
    { code: 'AU', name: 'Australia', phone: '+61', flag: '🇦🇺' },
    { code: 'DE', name: 'Germany', phone: '+49', flag: '🇩🇪' },
    { code: 'FR', name: 'France', phone: '+33', flag: '🇫🇷' },
    { code: 'IT', name: 'Italy', phone: '+39', flag: '🇮🇹' },
    { code: 'ES', name: 'Spain', phone: '+34', flag: '🇪🇸' },
    { code: 'NL', name: 'Netherlands', phone: '+31', flag: '🇳🇱' },
    { code: 'BE', name: 'Belgium', phone: '+32', flag: '🇧🇪' },
    { code: 'CH', name: 'Switzerland', phone: '+41', flag: '🇨🇭' },
    { code: 'AT', name: 'Austria', phone: '+43', flag: '🇦🇹' },
    { code: 'SE', name: 'Sweden', phone: '+46', flag: '🇸🇪' },
    { code: 'NO', name: 'Norway', phone: '+47', flag: '🇳🇴' },
    { code: 'DK', name: 'Denmark', phone: '+45', flag: '🇩🇰' },
    { code: 'FI', name: 'Finland', phone: '+358', flag: '🇫🇮' },
    { code: 'PL', name: 'Poland', phone: '+48', flag: '🇵🇱' },
    { code: 'CZ', name: 'Czech Republic', phone: '+420', flag: '🇨🇿' },
    { code: 'HU', name: 'Hungary', phone: '+36', flag: '🇭🇺' },
    { code: 'RO', name: 'Romania', phone: '+40', flag: '🇷🇴' },
    { code: 'BG', name: 'Bulgaria', phone: '+359', flag: '🇧🇬' },
    { code: 'HR', name: 'Croatia', phone: '+385', flag: '🇭🇷' },
    { code: 'SI', name: 'Slovenia', phone: '+386', flag: '🇸🇮' },
    { code: 'SK', name: 'Slovakia', phone: '+421', flag: '🇸🇰' },
    { code: 'LT', name: 'Lithuania', phone: '+370', flag: '🇱🇹' },
    { code: 'LV', name: 'Latvia', phone: '+371', flag: '🇱🇻' },
    { code: 'EE', name: 'Estonia', phone: '+372', flag: '🇪🇪' },
    { code: 'IE', name: 'Ireland', phone: '+353', flag: '🇮🇪' },
    { code: 'PT', name: 'Portugal', phone: '+351', flag: '🇵🇹' },
    { code: 'GR', name: 'Greece', phone: '+30', flag: '🇬🇷' },
    { code: 'CN', name: 'China', phone: '+86', flag: '🇨🇳' },
    { code: 'JP', name: 'Japan', phone: '+81', flag: '🇯🇵' },
    { code: 'KR', name: 'South Korea', phone: '+82', flag: '🇰🇷' },
    { code: 'IN', name: 'India', phone: '+91', flag: '🇮🇳' },
    { code: 'PK', name: 'Pakistan', phone: '+92', flag: '🇵🇰' },
    { code: 'BD', name: 'Bangladesh', phone: '+880', flag: '🇧🇩' },
    { code: 'LK', name: 'Sri Lanka', phone: '+94', flag: '🇱🇰' },
    { code: 'TH', name: 'Thailand', phone: '+66', flag: '🇹🇭' },
    { code: 'VN', name: 'Vietnam', phone: '+84', flag: '🇻🇳' },
    { code: 'MY', name: 'Malaysia', phone: '+60', flag: '🇲🇾' },
    { code: 'SG', name: 'Singapore', phone: '+65', flag: '🇸🇬' },
    { code: 'ID', name: 'Indonesia', phone: '+62', flag: '🇮🇩' },
    { code: 'PH', name: 'Philippines', phone: '+63', flag: '🇵🇭' },
    { code: 'BR', name: 'Brazil', phone: '+55', flag: '🇧🇷' },
    { code: 'AR', name: 'Argentina', phone: '+54', flag: '🇦🇷' },
    { code: 'CL', name: 'Chile', phone: '+56', flag: '🇨🇱' },
    { code: 'CO', name: 'Colombia', phone: '+57', flag: '🇨🇴' },
    { code: 'PE', name: 'Peru', phone: '+51', flag: '🇵🇪' },
    { code: 'VE', name: 'Venezuela', phone: '+58', flag: '🇻🇪' },
    { code: 'UY', name: 'Uruguay', phone: '+598', flag: '🇺🇾' },
    { code: 'PY', name: 'Paraguay', phone: '+595', flag: '🇵🇾' },
    { code: 'BO', name: 'Bolivia', phone: '+591', flag: '🇧🇴' },
    { code: 'EC', name: 'Ecuador', phone: '+593', flag: '🇪🇨' },
    { code: 'MX', name: 'Mexico', phone: '+52', flag: '🇲🇽' },
    { code: 'ZA', name: 'South Africa', phone: '+27', flag: '🇿🇦' },
    { code: 'NG', name: 'Nigeria', phone: '+234', flag: '🇳🇬' },
    { code: 'KE', name: 'Kenya', phone: '+254', flag: '🇰🇪' },
    { code: 'GH', name: 'Ghana', phone: '+233', flag: '🇬🇭' },
    { code: 'EG', name: 'Egypt', phone: '+20', flag: '🇪🇬' },
    { code: 'MA', name: 'Morocco', phone: '+212', flag: '🇲🇦' },
    { code: 'TN', name: 'Tunisia', phone: '+216', flag: '🇹🇳' },
    { code: 'DZ', name: 'Algeria', phone: '+213', flag: '🇩🇿' },
    { code: 'AE', name: 'United Arab Emirates', phone: '+971', flag: '🇦🇪' },
    { code: 'SA', name: 'Saudi Arabia', phone: '+966', flag: '🇸🇦' },
    { code: 'IL', name: 'Israel', phone: '+972', flag: '🇮🇱' },
    { code: 'TR', name: 'Turkey', phone: '+90', flag: '🇹🇷' },
    { code: 'IR', name: 'Iran', phone: '+98', flag: '🇮🇷' },
    { code: 'IQ', name: 'Iraq', phone: '+964', flag: '🇮🇶' },
    { code: 'JO', name: 'Jordan', phone: '+962', flag: '🇯🇴' },
    { code: 'LB', name: 'Lebanon', phone: '+961', flag: '🇱🇧' },
    { code: 'SY', name: 'Syria', phone: '+963', flag: '🇸🇾' },
    { code: 'KW', name: 'Kuwait', phone: '+965', flag: '🇰🇼' },
    { code: 'QA', name: 'Qatar', phone: '+974', flag: '🇶🇦' },
    { code: 'BH', name: 'Bahrain', phone: '+973', flag: '🇧🇭' },
    { code: 'OM', name: 'Oman', phone: '+968', flag: '🇴🇲' },
    { code: 'YE', name: 'Yemen', phone: '+967', flag: '🇾🇪' },
    { code: 'NZ', name: 'New Zealand', phone: '+64', flag: '🇳🇿' },
    { code: 'FJ', name: 'Fiji', phone: '+679', flag: '🇫🇯' },
    { code: 'PG', name: 'Papua New Guinea', phone: '+675', flag: '🇵🇬' }
];

// Function to populate country select
function populateCountrySelect() {
    const countrySelects = document.querySelectorAll('.country-select');
    
    countrySelects.forEach(select => {
        // Clear existing options except the first one
        while (select.children.length > 1) {
            select.removeChild(select.lastChild);
        }
        
        // Sort countries alphabetically
        const sortedCountries = countries.sort((a, b) => a.name.localeCompare(b.name));
        
        // Add country options
        sortedCountries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = `${country.flag} ${country.name} ${country.phone}`;
            option.dataset.phone = country.phone;
            select.appendChild(option);
        });
    });
}

// Initialize country selects when DOM is loaded
document.addEventListener('DOMContentLoaded', populateCountrySelect);
