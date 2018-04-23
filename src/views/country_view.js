const CountryView = function(selectElement, countryContainer) {
  this.selectElement = selectElement;
  this.countryContainer = countryContainer;
}

CountryView.prototype.renderSelect = function (countryData) {
  countryData.forEach((country, index) => {
    const countryOption = document.createElement('option');
    countryOption.textContent = country.name;
    countryOption.value = index;
    this.selectElement.appendChild(countryOption);
  });
};

CountryView.prototype.renderDetail = function (country) {
  const countryName = document.createElement('p');
  countryName.textContent = country.name;
  this.countryContainer.appendChild(countryName);
}

module.exports = CountryView;
