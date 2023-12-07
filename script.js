// solving  problem  using array function on rest countries data
// a.)all countries from asia continent/region using filter function

var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true)
request1.send();
request1.onload = function () {
  var data = request1.response;
  // console,log(data);
  var result = JSON.parse(data);
  // console.log(result);
  var asia = result.filter((country) => country.region === "asia");
  asia.map((country) => console.log(country.name));

}
// b.population of less than  2 lakhs using filter function

var request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true)
request2.send();
request2.onload = function () {
  var data1 = request2.response;
  // console,log(data);
  var result1 = JSON.parse(data1);
  var populationfilter = result1.filter((x) => x.population < 200000);
  populationfilter.map((ele) => console.log(ele.name.common));
}
// c.print the following details name,captial,flag using for each function
var request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v3.1/all", true)
request3.send();
request3.onload = function () {
  var data2 = request3.response;
  // console.log(data);
  var result2 = JSON.parse(data2);
  // console.log(result2);
  result2.foreach((ele) => console.log('Name:${ele.Name.common} / capital :${ele.capital} / flag:${ele.flag}'))
  console.log(`    `);

}
//d print total population using reduce function

var request4 = new XMLHttpRequest();
request4.open("GET", "https://restcountries.com/v3.1/all", true)
request4.send();
request4.onload = function () {
  var data3 = request4.response;
  // console.log(data);
  var result3 = JSON.parse(data3);
  // console.log(result3);
  var totpopulation = result3.reduce((acc, cv) => {
    return acc + cv.population
  }, 0)
  console.log(totpopulation);
}
// print the country us dollors as currency
var request5 = new XMLHttpRequest();
request5.open("GET", "https://restcountries.com/v3.1/all", true)
request5.send();
request5.onload = function () {
  var data1 = request5.response;
  // console.log(data);
  var result4 = JSON.parse(data4);
  // console.log(result4);

  let result4 = result.filter((ele) => ele.currencies && ele.currencies && ele.currencies.USD);
  result4.forEach((ele) => console.log(ele.name.common))
}