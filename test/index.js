/* Tests copied from https://github.com/tyxla/remove-accents/.
The MIT License (MIT)

Copyright (c) 2015 Marin Atanasov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var tape = require('tape');
var removeAccents = require('..');

tape('remove accents from string', function(t) {
	var input = 'ÀÁÂÃÄÅẤẮÆẦẰÇḈÈÉÊËẾḖỀḔÌÍÎÏḮÐÑÒÓÔÕÖØỐṌṒÙÚÛÜÝßàáâãäåấắæầằçḉèéêëếḗềḕìíîïḯñòóôõöøốṍṓùúûüýÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģǴǵĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķḰḱĹĺĻļĽľĿŀŁłḾḿŃńŅņŇňŉŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵẂẃŶŷŸŹźŻżŽžſƒƠơƯưǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜỨứṸṹǺǻǼǽǾǿðÞþṔṕṤṥX́x́ЃѓЌќA̋a̋E̋e̋I̋i̋ǸǹỒồṐṑỪừẀẁỲỳȀȁȄȅȈȉȌȍȐȑȔȕẲẴẶḜẳẵặḝC̆c̆ḪḫK̆k̆M̆m̆N̆n̆P̆p̆R̆r̆T̆t̆V̆v̆X̆x̆Y̆y̆ȂȆȊȎȃȇȋȏȒȓȖȗșțȘȚB̌b̌F̌f̌ǦǧȞȟJ̌ǰǨǩM̌m̌P̌p̌Q̌q̌ṦṧV̌v̌W̌w̌X̌x̌Y̌y̌A̧a̧B̧b̧ḐḑȨȩƐ̧ɛ̧ḨḩI̧i̧Ɨ̧ɨ̧M̧m̧O̧o̧Q̧q̧U̧u̧X̧x̧Z̧z̧';
	var output = removeAccents(input);
	var expected = 'AAAAAAAAAEAACCEEEEEEEEIIIIIDNOOOOOOOOOUUUUYsaaaaaaaaaeaacceeeeeeeeiiiiinooooooooouuuuyyAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgGgHhHhIiIiIiIiIiIJijJjKkKkLlLlLlLlllMmNnNnNnnOoOoOoOEoeRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwWwYyYZzZzZzsfOoUuAaIiOoUuUuUuUuUuUuUuAaAEaeOodTHthPpSsXxГгКкAaEeIiNnOoOoUuWwYyAaEeIiOoRrUuAAAEaaaeCcHhKkMmNnPpRrTtVvXxYyAEIOaeioRrUustSTBbFfGgHhJjKkMmPpQqSsVvWwXxYyAaBbDdEeEeHhIiIiMmOoQqUuXxZz';

	t.same( output, expected );

	t.end();
});

tape('do not modify non-accented strings', function(t) {
	var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789.,:;~`!@#$%^&*()-_=+[]{}\'"|\\<>?/';
	var output = removeAccents(input);

	t.same( output, input );

	t.end();
});