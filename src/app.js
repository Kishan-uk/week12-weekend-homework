const CountryData = require('./models/country_data.js');
const CountryView = require('./views/country_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const countrySelect = document.querySelector('#country-select');
  const countryContainer = document.querySelector('#country-detail-view');
  const countryView = new CountryView(countrySelect, countryContainer);

  const countryData = new CountryData();

  countrySelect.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    const selectedCountry = countryData.data[selectedIndex];
    countryView.renderDetail(selectedCountry);
  })

  countryData.getData((data) => {
    countryView.renderSelect(data)
  });
});
