/*
 * @source: https://github.com/opening-hours/opening_hours.js/blob/master/index.js
 * @source: ./index.js
 * @license: LGPL-3.0
 *
 * Copyright (C) 2012-2013 Dmitry Marakasov
 * Copyright (C) 2013-2017 Robin `ypid` Schneider
 *
 * opening_hours.js is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by the
 * Free Software Foundation, version 3 of the License.
 *
 * opening_hours.js is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with opening_hours.js; if not, see
 * <https://www.gnu.org/licenses/>.
 * For information see https://github.com/opening-hours/opening_hours.js
 * and the docs directory which contains internal documentation and design.
 *
 * ---------------
 * Copyright (C) 2012-2013 Dmitry Marakasov
 *
 * All work done by Dmitry Marakasov is additionally published under the New (2-clause) BSD license.
 * Refer to the README.md and the reversion control history for more details.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('moment'), require('suncalc'), require('i18next-client')) :
	typeof define === 'function' && define.amd ? define(['moment', 'suncalc', 'i18next-client'], factory) :
	(global.opening_hours = factory(global.moment,global.SunCalc,global.i18n));
}(this, (function (moment,SunCalc,i18n) { 'use strict';

moment = 'default' in moment ? moment['default'] : moment;
SunCalc = 'default' in SunCalc ? SunCalc['default'] : SunCalc;
i18n = 'default' in i18n ? i18n['default'] : i18n;

var data = { PH:{ Neujahrstag:[ 1,
      1 ],
    "Heilige Drei Könige":[ 1,
      6 ],
    Ostermontag:[ "easter",
      1 ],
    Staatsfeiertag:[ 5,
      1 ],
    "Christi Himmelfahrt":[ "easter",
      39 ],
    Pfingstmontag:[ "easter",
      50 ],
    Fronleichnam:[ "easter",
      60 ],
    "Mariä Himmelfahrt":[ 8,
      15 ],
    Nationalfeiertag:[ 10,
      26 ],
    Allerheiligen:[ 11,
      1 ],
    "Mariä Empfängnis":[ 12,
      8 ],
    Christtag:[ 12,
      25 ],
    Stefanitag:[ 12,
      26 ] } };

var data$2 = { PH:{ "Nieuwjaar - Jour de l'an":[ 1,
      1 ],
    "Paasmaandag - Lundi de Pâques":[ "easter",
      1 ],
    "Dag van de Arbeid - Fête du Travail":[ 5,
      1 ],
    "Onze-Lieve-Heer-Hemelvaart - Jeudi de l'Ascensionn":[ "easter",
      39 ],
    "Pinkstermaandag - Lundi de Pentecôte":[ "easter",
      50 ],
    "Nationale feestdag van België - Fête nationale":[ 7,
      21 ],
    "Onze-Lieve-Vrouw-Hemelvaart - Assomption":[ 8,
      15 ],
    "Allerheiligen - Toussaint":[ 11,
      1 ],
    "Wapenstilstand - Armistice":[ 11,
      11 ],
    "Kerstmis - Noël":[ 12,
      25 ] } };

var data$4 = { _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=-10&lon=-52&zoom=18&addressdetails=1&accept-language=pt,en",
  PH:{ "Ano Novo":[ 1,
      1 ],
    Carnaval:[ "easter",
      -47 ],
    "Sexta-feira santa":[ "easter",
      -2 ],
    Tiradentes:[ 4,
      21 ],
    "Dia do Trabalhador":[ 5,
      1 ],
    "Corpus Christi":[ "easter",
      60 ],
    "Independência":[ 9,
      7 ],
    "Nossa Senhora Aparecida":[ 10,
      12 ],
    Finados:[ 11,
      2 ],
    "Proclamação da República":[ 11,
      15 ],
    Natal:[ 12,
      25 ] },
  Acre:{ PH:{ "Ano Novo":[ 1,
        1 ],
      "Dia do evangélico":[ 1,
        23 ],
      Carnaval:[ "easter",
        -47 ],
      "Alusivo ao Dia Internacional da Mulher":[ 3,
        8 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Aniversário do estado":[ 6,
        15 ],
      "Dia da Amazônia":[ 9,
        5 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      "Assinatura do Tratado de Petrópolis":[ 11,
        17 ],
      Natal:[ 12,
        25 ] } },
  Alagoas:{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "São João":[ 6,
        24 ],
      "São Pedro":[ 6,
        29 ],
      "Independência":[ 9,
        7 ],
      "Emancipação política":[ 9,
        16 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      "Morte de Zumbi dos Palmares":[ 11,
        20 ],
      Natal:[ 12,
        25 ] } },
  "Amapá":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Dia de São José":[ 3,
        19 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Data Magna do estado":[ 9,
        13 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  Amazonas:{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Data Magna do estado":[ 9,
        5 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      "Dia da Consciência Negra":[ 11,
        20 ],
      Natal:[ 12,
        25 ] } },
  Bahia:{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Data magna do estado":[ 2,
        7 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Ceará":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Data magna do estado":[ 3,
        25 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Distrito Federal":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      "Dia do evangélico":[ 11,
        30 ],
      Natal:[ 12,
        25 ] } },
  "Espírito Santo":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Data magna do estado":[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Goiás":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Maranhão":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Data magna do estado":[ 7,
        28 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Mato Grosso":{ _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=-10.4276788&lon=-52.0892082&zoom=18&addressdetails=1&accept-language=pt,en",
    PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      "Dia da Consciência Negra":[ 11,
        20 ],
      Natal:[ 12,
        25 ] } },
  "Mato Grosso do Sul":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Criação do estado":[ 10,
        11 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Minas Gerais":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Data magna do estado":[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Pará":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Data magna do estado":[ 8,
        15 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Paraíba":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Homenagem a João Pessoa":[ 7,
        26 ],
      "Data magna do estado":[ 8,
        5 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Paraná":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      "Data magna do estado":[ 12,
        19 ],
      Natal:[ 12,
        25 ] } },
  Pernambuco:{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Data magna do estado":[ "firstMarchSunday" ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Piauí":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      "Data magna do estado":[ 10,
        19 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Rio de Janeiro":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      "Dia da Consciência Negra":[ 11,
        20 ],
      Natal:[ 12,
        25 ] } },
  "Rio Grande do Norte":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "São Jorge":[ 4,
        23 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Mártires de Cunhaú e Uruaçu":[ 10,
        3 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Rio Grande do Sul":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Proclamação da República Rio-Grandense":[ 9,
        20 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Rondônia":{ PH:{ "Ano Novo":[ 1,
        1 ],
      "Data magna do estado":[ 1,
        4 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Dia do evangélico":[ 6,
        18 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  Roraima:{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Data magna do estado":[ 10,
        5 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  "Santa Catarina":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Data magna do estado":[ 8,
        11 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      "Santa Catarina de Alexandria":[ 11,
        25 ],
      Natal:[ 12,
        25 ] } },
  "São Paulo":{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Data magna do estado":[ 7,
        9 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } },
  Sergipe:{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Aniversário de Aracaju":[ 3,
        17 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "São João":[ 6,
        24 ],
      "Data magna do estado":[ 7,
        8 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      "Nossa Senhora da Conceição":[ 12,
        8 ],
      Natal:[ 12,
        25 ] } },
  Tocantins:{ PH:{ "Ano Novo":[ 1,
        1 ],
      Carnaval:[ "easter",
        -47 ],
      "Autonomia do estado":[ 3,
        18 ],
      "Sexta-feira santa":[ "easter",
        -2 ],
      Tiradentes:[ 4,
        21 ],
      "Dia do Trabalhador":[ 5,
        1 ],
      "Corpus Christi":[ "easter",
        60 ],
      "Independência":[ 9,
        7 ],
      "Nossa Senhora da Natividade":[ 9,
        8 ],
      "Criação do estado":[ 10,
        5 ],
      "Nossa Senhora Aparecida":[ 10,
        12 ],
      Finados:[ 11,
        2 ],
      "Proclamação da República":[ 11,
        15 ],
      Natal:[ 12,
        25 ] } } };

var data$6 = { PH:{ "New Year's Day":[ 1,
      1 ],
    "Good Friday":[ "easter",
      -2 ],
    "Canada Day":[ "canadaDay",
      0 ],
    "Labour Day":[ "firstSeptemberMonday",
      0 ],
    "Christmas Day":[ 12,
      25 ] },
  Alberta:{ PH:{ "New Year's Day":[ 1,
        1 ],
      "Alberta Family Day":[ "firstFebruaryMonday",
        14 ],
      "Good Friday":[ "easter",
        -2 ],
      "Easter Monday":[ "easter",
        1 ],
      "Victoria Day":[ "victoriaDay",
        0 ],
      "Canada Day":[ "canadaDay",
        0 ],
      "Heritage Day":[ "firstAugustMonday",
        0 ],
      "Labour Day":[ "firstSeptemberMonday",
        0 ],
      Thanksgiving:[ "firstOctoberMonday",
        7 ],
      "Remembrance Day":[ 11,
        11 ],
      "Christmas Day":[ 12,
        25 ],
      "Boxing Day":[ 12,
        26 ] } },
  "British Columbia":{ PH:{ "New Year's Day":[ 1,
        1 ],
      "Family Day":[ "firstFebruaryMonday",
        7 ],
      "Good Friday":[ "easter",
        -2 ],
      "Victoria Day":[ "victoriaDay",
        0 ],
      "Canada Day":[ "canadaDay",
        0 ],
      "British Columbia Day":[ "firstAugustMonday",
        0 ],
      "Labour Day":[ "firstSeptemberMonday",
        0 ],
      Thanksgiving:[ "firstOctoberMonday",
        7 ],
      "Remembrance Day":[ 11,
        11 ],
      "Christmas Day":[ 12,
        25 ] } },
  Manitoba:{ PH:{ "New Year's Day":[ 1,
        1 ],
      "Louis Riel Day":[ "firstFebruaryMonday",
        14 ],
      "Good Friday":[ "easter",
        -2 ],
      "Victoria Day":[ "victoriaDay",
        0 ],
      "Canada Day":[ "canadaDay",
        0 ],
      "Civic Holiday":[ "firstAugustMonday",
        0 ],
      "Labour Day":[ "firstSeptemberMonday",
        0 ],
      Thanksgiving:[ "firstOctoberMonday",
        7 ],
      "Remembrance Day":[ 11,
        11 ],
      "Christmas Day":[ 12,
        25 ] } },
  "New Brunswick":{ PH:{ "New Year's Day":[ 1,
        1 ],
      "Good Friday":[ "easter",
        -2 ],
      "Victoria Day":[ "victoriaDay",
        0 ],
      "Canada Day":[ "canadaDay",
        0 ],
      "New Brunswick Day":[ "firstAugustMonday",
        0 ],
      "Labour Day":[ "firstSeptemberMonday",
        0 ],
      Thanksgiving:[ "firstOctoberMonday",
        7 ],
      "Remembrance Day":[ 11,
        11 ],
      "Christmas Day":[ 12,
        25 ],
      "Boxing Day":[ 12,
        26 ] } },
  "Newfoundland and Labrador":{ PH:{ "New Year's Day":[ 1,
        1 ],
      "Saint Patrick's Day":[ 3,
        17 ],
      "Good Friday":[ "easter",
        -2 ],
      "Saint George's Day":[ 4,
        23 ],
      "Discovery Day":[ 6,
        24 ],
      "Memorial Day":[ 7,
        1 ],
      "Orangemen's Day":[ 7,
        12 ],
      "Labour Day":[ "firstSeptemberMonday",
        0 ],
      "Armistice Day":[ 11,
        11 ],
      "Christmas Day":[ 12,
        25 ] } },
  "Northwest Territories":{ PH:{ "New Year's Day":[ 1,
        1 ],
      "Good Friday":[ "easter",
        -2 ],
      "Victoria Day":[ "victoriaDay",
        0 ],
      "National Aboriginal Day":[ 6,
        21 ],
      "Canada Day":[ "canadaDay",
        0 ],
      "Civic Holiday":[ "firstAugustMonday",
        0 ],
      "Labour Day":[ "firstSeptemberMonday",
        0 ],
      Thanksgiving:[ "firstOctoberMonday",
        7 ],
      "Remembrance Day":[ 11,
        11 ],
      "Christmas Day":[ 12,
        25 ] } },
  "Nova Scotia":{ PH:{ "New Year's Day":[ 1,
        1 ],
      "Good Friday":[ "easter",
        -2 ],
      "Victoria Day":[ "victoriaDay",
        0 ],
      "Canada Day":[ "canadaDay",
        0 ],
      "Natal Day":[ "firstAugustMonday",
        0 ],
      "Labour Day":[ "firstSeptemberMonday",
        0 ],
      Thanksgiving:[ "firstOctoberMonday",
        7 ],
      "Remembrance Day":[ 11,
        11 ],
      "Christmas Day":[ 12,
        25 ],
      "Boxing Day":[ 12,
        26 ] } },
  Nunavut:{ PH:{ "New Year's Day":[ 1,
        1 ],
      "Good Friday":[ "easter",
        -2 ],
      "Victoria Day":[ "victoriaDay",
        0 ],
      "Canada Day":[ "canadaDay",
        0 ],
      "Nunavut Day":[ 7,
        9 ],
      "Civic Holiday":[ "firstAugustMonday",
        0 ],
      "Labour Day":[ "firstSeptemberMonday",
        0 ],
      Thanksgiving:[ "firstOctoberMonday",
        7 ],
      "Remembrance Day":[ 11,
        11 ],
      "Christmas Day":[ 12,
        25 ] } },
  Ontario:{ PH:{ "New Year's Day":[ 1,
        1 ],
      "Family Day":[ "firstFebruaryMonday",
        14 ],
      "Good Friday":[ "easter",
        -2 ],
      "Victoria Day":[ "victoriaDay",
        0 ],
      "Canada Day":[ "canadaDay",
        0 ],
      "August Civic Public Holiday":[ "firstAugustMonday",
        0 ],
      "Labour Day":[ "firstSeptemberMonday",
        0 ],
      Thanksgiving:[ "firstOctoberMonday",
        7 ],
      "Remembrance Day":[ 11,
        11 ],
      "Christmas Day":[ 12,
        25 ],
      "Boxing Day":[ 12,
        26 ] } },
  "Prince Edward Island":{ PH:{ "New Year's Day":[ 1,
        1 ],
      "Islander Day":[ "firstFebruaryMonday",
        14 ],
      "Good Friday":[ "easter",
        -2 ],
      "Easter Monday":[ "easter",
        1 ],
      "Victoria Day":[ "victoriaDay",
        0 ],
      "Canada Day":[ "canadaDay",
        0 ],
      "Civic Holiday":[ "firstAugustMonday",
        0 ],
      "Gold Cup Parade Day":[ "firstAugustMonday",
        18 ],
      "Labour Day":[ "firstSeptemberMonday",
        0 ],
      Thanksgiving:[ "firstOctoberMonday",
        7 ],
      "Remembrance Day":[ 11,
        11 ],
      "Christmas Day":[ 12,
        25 ],
      "Boxing Day":[ 12,
        26 ] } },
  Quebec:{ PH:{ "Jour de l'an":[ 1,
        1 ],
      "Vendredi saint":[ "easter",
        -2 ],
      "Lundi de Pâques":[ "easter",
        1 ],
      "Journée nationale des patriotes":[ "victoriaDay",
        0 ],
      "Fête nationale du Québec":[ 6,
        24 ],
      "Fête du Canada":[ "canadaDay",
        0 ],
      "Fête du Travail":[ "firstSeptemberMonday",
        0 ],
      "Jour de l'Action de grâce":[ "firstOctoberMonday",
        7 ],
      "Noël":[ 12,
        25 ] } },
  Saskatchewan:{ PH:{ "New Year's Day":[ 1,
        1 ],
      "Family Day":[ "firstFebruaryMonday",
        14 ],
      "Good Friday":[ "easter",
        -2 ],
      "Victoria Day":[ "victoriaDay",
        0 ],
      "Canada Day":[ "canadaDay",
        0 ],
      "Saskatchewan Day":[ "firstAugustMonday",
        0 ],
      "Labour Day":[ "firstSeptemberMonday",
        0 ],
      Thanksgiving:[ "firstOctoberMonday",
        7 ],
      "Remembrance Day":[ 11,
        11 ],
      "Christmas Day":[ 12,
        25 ] } },
  Yukon:{ PH:{ "New Year's Day":[ 1,
        1 ],
      "Heritage Day":[ "lastFebruarySunday",
        -2 ],
      "Good Friday":[ "easter",
        -2 ],
      "Easter Monday":[ "easter",
        1 ],
      "Victoria Day":[ "victoriaDay",
        0 ],
      "Canada Day":[ "canadaDay",
        0 ],
      "Discovery Day":[ "firstAugustMonday",
        14 ],
      "Labour Day":[ "firstSeptemberMonday",
        0 ],
      Thanksgiving:[ "firstOctoberMonday",
        7 ],
      "Remembrance Day":[ 11,
        11 ],
      "Christmas Day":[ 12,
        25 ],
      "Boxing Day":[ 12,
        26 ] } } };

var data$8 = { _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=50.0874401&lon=14.4212556&zoom=18&addressdetails=1&accept-language=cs,en",
  PH:{ "Den obnovy samostatného českého státu":[ 1,
      1 ],
    "Velký pátek":[ "easter",
      -2 ],
    "Velikonoční pondělí":[ "easter",
      1 ],
    "Svátek práce":[ 5,
      1 ],
    "Den vítězství":[ 5,
      8 ],
    "Den slovanských věrozvěstů Cyrila a Metoděje":[ 7,
      5 ],
    "Den upálení mistra Jana Husa":[ 7,
      6 ],
    "Den české státnosti":[ 9,
      28 ],
    "Den vzniku samostatného československého státu":[ 10,
      28 ],
    "Den boje za svobodu a demokracii":[ 11,
      17 ],
    "Štědrý den":[ 12,
      24 ],
    "1. svátek vánoční":[ 12,
      25 ],
    "2. svátek vánoční":[ 12,
      26 ] } };

var data$10 = { _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=49.5487&lon=9.8160&zoom=18&addressdetails=1&accept-language=de,en",
  PH:{ Neujahrstag:[ 1,
      1 ],
    "Heilige Drei Könige":[ 1,
      6,
      [ "Baden-Württemberg",
        "Bayern",
        "Sachsen-Anhalt" ] ],
    "Tag der Arbeit":[ 5,
      1 ],
    Karfreitag:[ "easter",
      -2 ],
    Ostersonntag:[ "easter",
      0,
      [ "Brandenburg" ] ],
    Ostermontag:[ "easter",
      1 ],
    "Christi Himmelfahrt":[ "easter",
      39 ],
    Pfingstsonntag:[ "easter",
      49,
      [ "Brandenburg" ] ],
    Pfingstmontag:[ "easter",
      50 ],
    Fronleichnam:[ "easter",
      60,
      [ "Baden-Württemberg",
        "Bayern",
        "Hessen",
        "Nordrhein-Westfalen",
        "Rheinland-Pfalz",
        "Saarland" ] ],
    "Mariä Himmelfahrt":[ 8,
      15,
      [ "Saarland" ] ],
    "Tag der Deutschen Einheit":[ 10,
      3 ],
    Reformationstag:[ 10,
      31,
      [ "Brandenburg",
        "Mecklenburg-Vorpommern",
        "Sachsen",
        "Sachsen-Anhalt",
        "Thüringen" ] ],
    Allerheiligen:[ 11,
      1,
      [ "Baden-Württemberg",
        "Bayern",
        "Nordrhein-Westfalen",
        "Rheinland-Pfalz",
        "Saarland" ] ],
    "Buß- und Bettag":[ "nextWednesday16Nov",
      0,
      [ "Sachsen" ] ],
    "1. Weihnachtstag":[ 12,
      25 ],
    "2. Weihnachtstag":[ 12,
      26 ] },
  "Baden-Württemberg":{ _state_code:"bw",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=49.5487429714954&lon=9.81602098644987&zoom=18&addressdetails=1",
    SH:[ { "2012":[ 4,
          2,
          4,
          13 ],
        "2013":[ 3,
          25,
          4,
          5 ],
        "2014":[ 4,
          14,
          4,
          25 ],
        "2015":[ 3,
          30,
          4,
          10 ],
        "2016":[ 3,
          24,
          3,
          24,
          3,
          29,
          4,
          2 ],
        "2017":[ 4,
          10,
          4,
          21 ],
        "2018":[ 3,
          26,
          4,
          6 ],
        "2019":[ 4,
          15,
          4,
          27 ],
        "2020":[ 4,
          6,
          4,
          18 ],
        name:"Osterferien" },
      { "2012":[ 5,
          29,
          6,
          9 ],
        "2013":[ 5,
          21,
          6,
          1 ],
        "2014":[ 6,
          10,
          6,
          21 ],
        "2015":[ 5,
          26,
          6,
          6 ],
        "2016":[ 5,
          17,
          5,
          28 ],
        "2017":[ 6,
          6,
          6,
          16 ],
        "2018":[ 5,
          22,
          6,
          2 ],
        "2019":[ 6,
          11,
          6,
          21 ],
        "2020":[ 6,
          2,
          6,
          13 ],
        name:"Pfingstferien" },
      { "2012":[ 7,
          26,
          9,
          8 ],
        "2013":[ 7,
          25,
          9,
          7 ],
        "2014":[ 7,
          31,
          9,
          13 ],
        "2015":[ 7,
          30,
          9,
          12 ],
        "2016":[ 7,
          28,
          9,
          10 ],
        "2017":[ 7,
          27,
          9,
          9 ],
        "2018":[ 7,
          26,
          9,
          8 ],
        "2019":[ 7,
          29,
          9,
          10 ],
        "2020":[ 7,
          30,
          9,
          12 ],
        "2021":[ 7,
          29,
          9,
          11 ],
        "2022":[ 7,
          28,
          9,
          10 ],
        "2023":[ 7,
          27,
          9,
          9 ],
        "2024":[ 7,
          25,
          9,
          7 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          29,
          11,
          2 ],
        "2013":[ 10,
          28,
          10,
          30 ],
        "2014":[ 10,
          27,
          10,
          30 ],
        "2015":[ 10,
          31,
          10,
          31,
          11,
          2,
          11,
          6 ],
        "2016":[ 10,
          31,
          10,
          31,
          11,
          2,
          11,
          4 ],
        "2017":[ 10,
          30,
          11,
          3 ],
        "2018":[ 10,
          29,
          11,
          2 ],
        "2019":[ 10,
          28,
          10,
          30 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          23,
          1,
          5 ],
        "2012":[ 12,
          24,
          1,
          5 ],
        "2013":[ 12,
          23,
          1,
          4 ],
        "2014":[ 12,
          22,
          1,
          5 ],
        "2015":[ 12,
          23,
          1,
          9 ],
        "2016":[ 12,
          23,
          1,
          7 ],
        "2017":[ 12,
          22,
          1,
          5 ],
        "2018":[ 12,
          24,
          1,
          5 ],
        "2019":[ 12,
          23,
          1,
          4 ],
        name:"Weihnachtsferien" } ] },
  Bayern:{ _state_code:"by",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=48.9467562&lon=11.4038717&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 2,
          20,
          2,
          24 ],
        "2013":[ 2,
          11,
          2,
          15 ],
        "2014":[ 3,
          3,
          3,
          7 ],
        "2015":[ 2,
          16,
          2,
          20 ],
        "2016":[ 2,
          8,
          2,
          12 ],
        "2017":[ 2,
          27,
          3,
          3 ],
        "2018":[ 2,
          12,
          2,
          16 ],
        "2019":[ 3,
          4,
          3,
          8 ],
        "2020":[ 2,
          24,
          2,
          28 ],
        "2021":[ 2,
          15,
          2,
          19 ],
        "2022":[ 2,
          28,
          3,
          4 ],
        "2023":[ 2,
          20,
          2,
          24 ],
        "2024":[ 2,
          12,
          2,
          16 ],
        name:"Winterferien" },
      { "2012":[ 4,
          2,
          4,
          14 ],
        "2013":[ 3,
          25,
          4,
          6 ],
        "2014":[ 4,
          14,
          4,
          26 ],
        "2015":[ 3,
          30,
          4,
          11 ],
        "2016":[ 3,
          21,
          4,
          1 ],
        "2017":[ 4,
          10,
          4,
          22 ],
        "2018":[ 3,
          26,
          4,
          7 ],
        "2019":[ 4,
          15,
          4,
          27 ],
        "2020":[ 4,
          6,
          4,
          18 ],
        "2021":[ 3,
          29,
          4,
          10 ],
        "2022":[ 4,
          11,
          4,
          23 ],
        "2023":[ 4,
          3,
          4,
          15 ],
        "2024":[ 3,
          25,
          4,
          6 ],
        name:"Osterferien" },
      { "2012":[ 5,
          29,
          6,
          9 ],
        "2013":[ 5,
          21,
          5,
          31 ],
        "2014":[ 6,
          10,
          6,
          21 ],
        "2015":[ 5,
          26,
          6,
          5 ],
        "2016":[ 5,
          17,
          5,
          28 ],
        "2017":[ 6,
          6,
          6,
          16 ],
        "2018":[ 5,
          22,
          6,
          2 ],
        "2019":[ 6,
          11,
          6,
          21 ],
        "2020":[ 6,
          2,
          6,
          13 ],
        "2021":[ 5,
          25,
          6,
          4 ],
        "2022":[ 6,
          7,
          6,
          18 ],
        "2023":[ 5,
          30,
          6,
          9 ],
        "2024":[ 5,
          21,
          6,
          1 ],
        name:"Pfingstferien" },
      { "2012":[ 8,
          1,
          9,
          12 ],
        "2013":[ 7,
          31,
          9,
          11 ],
        "2014":[ 7,
          30,
          9,
          15 ],
        "2015":[ 8,
          1,
          9,
          14 ],
        "2016":[ 7,
          30,
          9,
          12 ],
        "2017":[ 7,
          29,
          9,
          11 ],
        "2018":[ 7,
          30,
          9,
          10 ],
        "2019":[ 7,
          29,
          9,
          9 ],
        "2020":[ 7,
          27,
          9,
          7 ],
        "2021":[ 7,
          30,
          9,
          13 ],
        "2022":[ 8,
          1,
          9,
          12 ],
        "2023":[ 7,
          31,
          9,
          11 ],
        "2024":[ 7,
          29,
          9,
          9 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          29,
          11,
          3 ],
        "2013":[ 10,
          28,
          10,
          31 ],
        "2014":[ 10,
          27,
          10,
          31,
          11,
          19,
          11,
          19 ],
        "2015":[ 11,
          2,
          11,
          7,
          11,
          18,
          11,
          18 ],
        "2016":[ 10,
          31,
          11,
          4,
          11,
          16,
          11,
          16 ],
        "2017":[ 10,
          30,
          11,
          3,
          11,
          22,
          11,
          22 ],
        "2018":[ 10,
          29,
          11,
          2,
          11,
          21,
          11,
          21 ],
        "2019":[ 10,
          28,
          10,
          31,
          11,
          20,
          11,
          20 ],
        "2020":[ 10,
          31,
          11,
          6,
          11,
          18,
          11,
          18 ],
        "2021":[ 11,
          2,
          11,
          5,
          11,
          17,
          11,
          17 ],
        "2022":[ 10,
          31,
          11,
          4,
          11,
          16,
          11,
          16 ],
        "2023":[ 10,
          30,
          11,
          3,
          11,
          22,
          11,
          22 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          27,
          1,
          5 ],
        "2012":[ 12,
          24,
          1,
          5 ],
        "2013":[ 12,
          23,
          1,
          4 ],
        "2014":[ 12,
          24,
          1,
          5 ],
        "2015":[ 12,
          24,
          1,
          5 ],
        "2016":[ 12,
          24,
          1,
          5 ],
        "2017":[ 12,
          23,
          1,
          5 ],
        "2018":[ 12,
          22,
          1,
          5 ],
        "2019":[ 12,
          23,
          1,
          4 ],
        "2020":[ 12,
          23,
          1,
          9 ],
        "2021":[ 12,
          24,
          1,
          8 ],
        "2022":[ 12,
          24,
          1,
          7 ],
        "2023":[ 12,
          23,
          1,
          5 ],
        name:"Weihnachtsferien" } ] },
  Berlin:{ _state_code:"be",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=52.5170365&lon=13.3888599&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 1,
          30,
          2,
          4 ],
        "2013":[ 2,
          4,
          2,
          9 ],
        "2014":[ 2,
          3,
          2,
          8 ],
        "2015":[ 2,
          2,
          2,
          7 ],
        "2016":[ 2,
          1,
          2,
          6 ],
        "2017":[ 1,
          30,
          2,
          3 ],
        "2018":[ 2,
          5,
          2,
          10 ],
        "2019":[ 2,
          4,
          2,
          9 ],
        "2020":[ 2,
          3,
          2,
          8 ],
        "2021":[ 2,
          1,
          2,
          6 ],
        "2022":[ 1,
          29,
          2,
          5 ],
        "2023":[ 1,
          30,
          2,
          4 ],
        "2024":[ 2,
          5,
          2,
          10 ],
        name:"Winterferien" },
      { "2012":[ 4,
          2,
          4,
          14,
          4,
          30,
          4,
          30 ],
        "2013":[ 3,
          25,
          4,
          6 ],
        "2014":[ 4,
          14,
          4,
          26,
          5,
          2,
          5,
          2 ],
        "2015":[ 3,
          30,
          4,
          11 ],
        "2016":[ 3,
          21,
          4,
          2 ],
        "2017":[ 4,
          10,
          4,
          18 ],
        "2018":[ 3,
          26,
          4,
          6 ],
        "2019":[ 4,
          15,
          4,
          26 ],
        "2020":[ 4,
          6,
          4,
          17 ],
        "2021":[ 3,
          29,
          4,
          10 ],
        "2022":[ 4,
          11,
          4,
          23 ],
        "2023":[ 4,
          3,
          4,
          14 ],
        "2024":[ 3,
          25,
          4,
          5 ],
        name:"Osterferien" },
      { "2012":[ 5,
          18,
          5,
          18 ],
        "2013":[ 5,
          10,
          5,
          10,
          5,
          21,
          5,
          21 ],
        "2014":[ 5,
          30,
          5,
          30 ],
        "2015":[ 5,
          15,
          5,
          15,
          5,
          26,
          5,
          26 ],
        "2016":[ 5,
          6,
          5,
          6,
          5,
          17,
          5,
          18 ],
        "2017":[ 5,
          24,
          5,
          24,
          5,
          26,
          5,
          26,
          6,
          6,
          6,
          9 ],
        "2018":[ 4,
          30,
          4,
          30,
          5,
          11,
          5,
          11,
          5,
          22,
          5,
          22 ],
        "2019":[ 5,
          31,
          5,
          31,
          6,
          11,
          6,
          11 ],
        "2020":[ 5,
          22,
          5,
          22 ],
        "2021":[ 5,
          14,
          5,
          14 ],
        "2022":[ 5,
          27,
          5,
          27,
          6,
          7,
          6,
          7 ],
        "2023":[ 5,
          19,
          5,
          19,
          5,
          30,
          5,
          30 ],
        "2024":[ 5,
          10,
          5,
          10 ],
        name:"Pfingstferien" },
      { "2012":[ 6,
          20,
          8,
          3 ],
        "2013":[ 6,
          19,
          8,
          2 ],
        "2014":[ 7,
          9,
          8,
          22 ],
        "2015":[ 7,
          16,
          8,
          28 ],
        "2016":[ 7,
          21,
          9,
          2 ],
        "2017":[ 7,
          20,
          9,
          1 ],
        "2018":[ 7,
          5,
          8,
          17 ],
        "2019":[ 6,
          20,
          8,
          2 ],
        "2020":[ 6,
          25,
          8,
          7 ],
        "2021":[ 6,
          24,
          8,
          6 ],
        "2022":[ 7,
          7,
          8,
          19 ],
        "2023":[ 7,
          13,
          8,
          25 ],
        "2024":[ 7,
          18,
          8,
          30 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          1,
          10,
          13 ],
        "2013":[ 9,
          30,
          10,
          12 ],
        "2014":[ 10,
          20,
          11,
          1 ],
        "2015":[ 10,
          19,
          10,
          31 ],
        "2016":[ 10,
          17,
          10,
          28 ],
        "2017":[ 10,
          2,
          10,
          2,
          10,
          23,
          11,
          4 ],
        "2018":[ 10,
          22,
          11,
          2 ],
        "2019":[ 10,
          4,
          10,
          4,
          10,
          7,
          10,
          19 ],
        "2020":[ 10,
          12,
          10,
          24 ],
        "2021":[ 10,
          11,
          10,
          23 ],
        "2022":[ 10,
          24,
          11,
          5 ],
        "2023":[ 10,
          2,
          10,
          2,
          10,
          23,
          11,
          4 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          23,
          1,
          3 ],
        "2012":[ 12,
          24,
          1,
          4 ],
        "2013":[ 12,
          23,
          1,
          3 ],
        "2014":[ 12,
          22,
          1,
          2 ],
        "2015":[ 12,
          23,
          1,
          2 ],
        "2016":[ 12,
          23,
          1,
          3 ],
        "2017":[ 12,
          21,
          1,
          2 ],
        "2018":[ 12,
          22,
          1,
          5 ],
        "2019":[ 12,
          23,
          1,
          4 ],
        "2020":[ 12,
          21,
          1,
          2 ],
        "2021":[ 12,
          23,
          12,
          31 ],
        "2022":[ 12,
          22,
          1,
          2 ],
        "2023":[ 12,
          23,
          1,
          5 ],
        name:"Weihnachtsferien" } ] },
  Brandenburg:{ _state_code:"bb",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=52.8455492&lon=13.2461296&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 1,
          30,
          2,
          4 ],
        "2013":[ 2,
          4,
          2,
          9 ],
        "2014":[ 2,
          3,
          2,
          8 ],
        "2015":[ 2,
          2,
          2,
          7 ],
        "2016":[ 2,
          1,
          2,
          6 ],
        "2017":[ 1,
          30,
          2,
          4 ],
        "2018":[ 2,
          5,
          2,
          10 ],
        "2019":[ 2,
          4,
          2,
          9 ],
        "2020":[ 2,
          3,
          2,
          8 ],
        "2021":[ 2,
          1,
          2,
          6 ],
        "2022":[ 1,
          31,
          2,
          5 ],
        "2023":[ 1,
          30,
          2,
          3 ],
        "2024":[ 2,
          5,
          2,
          9 ],
        name:"Winterferien" },
      { "2012":[ 4,
          4,
          4,
          14,
          4,
          30,
          4,
          30 ],
        "2013":[ 3,
          27,
          4,
          6 ],
        "2014":[ 4,
          16,
          4,
          26,
          5,
          2,
          5,
          2 ],
        "2015":[ 4,
          1,
          4,
          11 ],
        "2016":[ 3,
          23,
          4,
          2 ],
        "2017":[ 4,
          10,
          4,
          22 ],
        "2018":[ 3,
          26,
          4,
          6 ],
        "2019":[ 4,
          15,
          4,
          26 ],
        "2020":[ 4,
          6,
          4,
          17 ],
        "2021":[ 3,
          29,
          4,
          9 ],
        "2022":[ 4,
          11,
          4,
          23 ],
        "2023":[ 4,
          3,
          4,
          14 ],
        "2024":[ 3,
          25,
          4,
          5 ],
        name:"Osterferien" },
      { "2012":[ 5,
          18,
          5,
          18 ],
        "2013":[ 5,
          10,
          5,
          10 ],
        "2014":[ 5,
          30,
          5,
          30 ],
        "2015":[ 5,
          15,
          5,
          15 ],
        "2016":[ 5,
          6,
          5,
          6,
          5,
          17,
          5,
          17 ],
        "2017":[ 5,
          26,
          5,
          26 ],
        "2018":[ 4,
          30,
          4,
          30,
          5,
          11,
          5,
          11 ],
        "2019":[ 5,
          31,
          5,
          31 ],
        "2020":[ 5,
          22,
          5,
          22 ],
        "2021":[ 5,
          14,
          5,
          14 ],
        "2022":[ 5,
          27,
          5,
          27 ],
        "2023":[ 5,
          19,
          5,
          19 ],
        "2024":[ 5,
          10,
          5,
          10 ],
        name:"Pfingstferien" },
      { "2012":[ 6,
          21,
          8,
          3 ],
        "2013":[ 6,
          20,
          8,
          2 ],
        "2014":[ 7,
          10,
          8,
          22 ],
        "2015":[ 7,
          16,
          8,
          28 ],
        "2016":[ 7,
          21,
          9,
          3 ],
        "2017":[ 7,
          20,
          9,
          1 ],
        "2018":[ 7,
          5,
          8,
          18 ],
        "2019":[ 6,
          20,
          8,
          3 ],
        "2020":[ 6,
          25,
          8,
          8 ],
        "2021":[ 6,
          24,
          8,
          7 ],
        "2022":[ 7,
          7,
          8,
          20 ],
        "2023":[ 7,
          13,
          8,
          26 ],
        "2024":[ 7,
          18,
          8,
          31 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          1,
          10,
          13 ],
        "2013":[ 9,
          30,
          10,
          12,
          11,
          1,
          11,
          1 ],
        "2014":[ 10,
          20,
          11,
          1 ],
        "2015":[ 10,
          19,
          10,
          30 ],
        "2016":[ 10,
          17,
          10,
          28 ],
        "2017":[ 10,
          2,
          10,
          2,
          10,
          23,
          11,
          4 ],
        "2018":[ 10,
          22,
          11,
          2 ],
        "2019":[ 10,
          4,
          10,
          18,
          11,
          1,
          11,
          1 ],
        "2020":[ 10,
          12,
          10,
          24 ],
        "2021":[ 10,
          11,
          10,
          23 ],
        "2022":[ 10,
          24,
          11,
          5 ],
        "2023":[ 10,
          2,
          10,
          2,
          10,
          23,
          11,
          4 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          23,
          1,
          3 ],
        "2012":[ 12,
          24,
          1,
          4 ],
        "2013":[ 12,
          23,
          1,
          3 ],
        "2014":[ 12,
          22,
          1,
          2 ],
        "2015":[ 12,
          23,
          1,
          2 ],
        "2016":[ 12,
          23,
          1,
          3 ],
        "2017":[ 12,
          21,
          1,
          2 ],
        "2018":[ 12,
          21,
          1,
          5 ],
        "2019":[ 12,
          23,
          1,
          3 ],
        "2020":[ 12,
          21,
          1,
          2 ],
        "2021":[ 12,
          23,
          12,
          31 ],
        "2022":[ 12,
          22,
          1,
          3 ],
        "2023":[ 12,
          23,
          1,
          5 ],
        name:"Weihnachtsferien" } ] },
  Bremen:{ _state_code:"hb",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=53.0758196&lon=8.8071646&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 1,
          30,
          1,
          31 ],
        "2013":[ 1,
          31,
          2,
          1 ],
        "2014":[ 1,
          30,
          1,
          31 ],
        "2015":[ 2,
          2,
          2,
          3 ],
        "2016":[ 1,
          28,
          1,
          29 ],
        "2017":[ 1,
          30,
          1,
          31 ],
        "2018":[ 2,
          1,
          2,
          2 ],
        "2019":[ 1,
          31,
          2,
          1 ],
        "2020":[ 2,
          3,
          2,
          4 ],
        "2021":[ 2,
          1,
          2,
          2 ],
        "2022":[ 1,
          31,
          2,
          1 ],
        "2023":[ 1,
          30,
          1,
          31 ],
        "2024":[ 2,
          1,
          2,
          2 ],
        name:"Winterferien" },
      { "2012":[ 3,
          26,
          4,
          11,
          4,
          30,
          4,
          30 ],
        "2013":[ 3,
          16,
          4,
          2 ],
        "2014":[ 4,
          3,
          4,
          22,
          5,
          2,
          5,
          2 ],
        "2015":[ 3,
          25,
          4,
          10 ],
        "2016":[ 3,
          18,
          4,
          2 ],
        "2017":[ 4,
          10,
          4,
          22 ],
        "2018":[ 3,
          19,
          4,
          3 ],
        "2019":[ 4,
          6,
          4,
          23 ],
        "2020":[ 3,
          28,
          4,
          14 ],
        "2021":[ 3,
          27,
          4,
          10 ],
        "2022":[ 4,
          4,
          4,
          19 ],
        "2023":[ 3,
          27,
          4,
          11 ],
        "2024":[ 3,
          18,
          4,
          2 ],
        name:"Osterferien" },
      { "2012":[ 5,
          18,
          5,
          18,
          5,
          29,
          5,
          29 ],
        "2013":[ 5,
          10,
          5,
          10,
          5,
          21,
          5,
          21 ],
        "2014":[ 5,
          30,
          5,
          30,
          6,
          10,
          6,
          10 ],
        "2015":[ 5,
          15,
          5,
          15,
          5,
          26,
          5,
          26 ],
        "2016":[ 5,
          6,
          5,
          6,
          5,
          17,
          5,
          17 ],
        "2017":[ 5,
          26,
          5,
          26,
          6,
          6,
          6,
          6 ],
        "2018":[ 4,
          30,
          4,
          30,
          5,
          11,
          5,
          11,
          5,
          22,
          5,
          22 ],
        "2019":[ 5,
          31,
          5,
          31,
          6,
          11,
          6,
          11 ],
        "2020":[ 5,
          22,
          5,
          22,
          6,
          2,
          6,
          2 ],
        "2021":[ 5,
          14,
          5,
          14,
          5,
          25,
          5,
          25 ],
        "2022":[ 5,
          27,
          5,
          27,
          6,
          7,
          6,
          7 ],
        "2023":[ 5,
          19,
          5,
          19,
          5,
          30,
          5,
          30 ],
        "2024":[ 5,
          10,
          5,
          10,
          5,
          21,
          5,
          21 ],
        name:"Pfingstferien" },
      { "2012":[ 7,
          23,
          8,
          31 ],
        "2013":[ 6,
          27,
          8,
          7 ],
        "2014":[ 7,
          31,
          9,
          10 ],
        "2015":[ 7,
          23,
          9,
          2 ],
        "2016":[ 6,
          23,
          8,
          3 ],
        "2017":[ 6,
          22,
          8,
          2 ],
        "2018":[ 6,
          28,
          8,
          8 ],
        "2019":[ 7,
          4,
          8,
          14 ],
        "2020":[ 7,
          16,
          8,
          26 ],
        "2021":[ 7,
          22,
          9,
          1 ],
        "2022":[ 7,
          14,
          8,
          24 ],
        "2023":[ 7,
          6,
          8,
          16 ],
        "2024":[ 6,
          24,
          8,
          2 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          22,
          11,
          3 ],
        "2013":[ 10,
          4,
          10,
          18 ],
        "2014":[ 10,
          27,
          11,
          8 ],
        "2015":[ 10,
          19,
          10,
          31 ],
        "2016":[ 10,
          4,
          10,
          15 ],
        "2017":[ 10,
          2,
          10,
          14,
          10,
          30,
          10,
          30 ],
        "2018":[ 10,
          1,
          10,
          13 ],
        "2019":[ 10,
          4,
          10,
          18 ],
        "2020":[ 10,
          12,
          10,
          24 ],
        "2021":[ 10,
          18,
          10,
          30 ],
        "2022":[ 10,
          17,
          10,
          29 ],
        "2023":[ 10,
          2,
          10,
          2,
          10,
          16,
          10,
          28 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          23,
          1,
          4 ],
        "2012":[ 12,
          24,
          1,
          5 ],
        "2013":[ 12,
          23,
          1,
          3 ],
        "2014":[ 12,
          22,
          1,
          5 ],
        "2015":[ 12,
          23,
          1,
          6 ],
        "2016":[ 12,
          21,
          1,
          6 ],
        "2017":[ 12,
          22,
          1,
          6 ],
        "2018":[ 12,
          24,
          1,
          4 ],
        "2019":[ 12,
          21,
          1,
          6 ],
        "2020":[ 12,
          23,
          1,
          8 ],
        "2021":[ 12,
          23,
          1,
          8 ],
        "2022":[ 12,
          23,
          1,
          6 ],
        "2023":[ 12,
          23,
          1,
          5 ],
        name:"Weihnachtsferien" } ] },
  Hamburg:{ _state_code:"hh",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=53.5437641&lon=10.0099133&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 1,
          30,
          1,
          30 ],
        "2013":[ 2,
          1,
          2,
          1 ],
        "2014":[ 1,
          31,
          1,
          31 ],
        "2015":[ 1,
          30,
          1,
          30 ],
        "2016":[ 1,
          29,
          1,
          29 ],
        "2017":[ 1,
          30,
          1,
          30 ],
        "2018":[ 2,
          2,
          2,
          2 ],
        "2019":[ 2,
          1,
          2,
          1 ],
        "2020":[ 1,
          31,
          1,
          31 ],
        "2021":[ 1,
          29,
          1,
          29 ],
        "2022":[ 1,
          28,
          1,
          28 ],
        "2023":[ 1,
          27,
          1,
          27 ],
        "2024":[ 2,
          2,
          2,
          2 ],
        name:"Winterferien" },
      { "2012":[ 3,
          5,
          3,
          16 ],
        "2013":[ 3,
          4,
          3,
          15 ],
        "2014":[ 3,
          3,
          3,
          14 ],
        "2015":[ 3,
          2,
          3,
          13 ],
        "2016":[ 3,
          7,
          3,
          18 ],
        "2017":[ 3,
          6,
          3,
          17 ],
        "2018":[ 3,
          5,
          3,
          16,
          4,
          30,
          4,
          30 ],
        "2019":[ 3,
          4,
          3,
          15 ],
        "2020":[ 3,
          2,
          3,
          13 ],
        "2021":[ 3,
          1,
          3,
          12 ],
        "2022":[ 3,
          7,
          3,
          18 ],
        "2023":[ 3,
          6,
          3,
          17 ],
        "2024":[ 3,
          18,
          3,
          28 ],
        name:"Osterferien" },
      { "2012":[ 4,
          30,
          5,
          4,
          5,
          18,
          5,
          18 ],
        "2013":[ 5,
          2,
          5,
          10 ],
        "2014":[ 4,
          28,
          5,
          2,
          5,
          30,
          5,
          30 ],
        "2015":[ 5,
          11,
          5,
          15 ],
        "2016":[ 5,
          6,
          5,
          6,
          5,
          17,
          5,
          20 ],
        "2017":[ 5,
          22,
          5,
          26 ],
        "2018":[ 5,
          7,
          5,
          11 ],
        "2019":[ 5,
          13,
          5,
          17,
          5,
          31,
          5,
          31 ],
        "2020":[ 5,
          4,
          5,
          8 ],
        "2021":[ 5,
          10,
          5,
          14 ],
        "2022":[ 5,
          23,
          5,
          27 ],
        "2023":[ 5,
          15,
          5,
          19 ],
        "2024":[ 5,
          21,
          5,
          24 ],
        name:"Pfingstferien" },
      { "2012":[ 6,
          21,
          8,
          1 ],
        "2013":[ 6,
          20,
          7,
          31 ],
        "2014":[ 7,
          10,
          8,
          20 ],
        "2015":[ 7,
          16,
          8,
          26 ],
        "2016":[ 7,
          21,
          8,
          31 ],
        "2017":[ 7,
          20,
          8,
          30 ],
        "2018":[ 7,
          5,
          8,
          15 ],
        "2019":[ 6,
          27,
          8,
          7 ],
        "2020":[ 6,
          25,
          8,
          5 ],
        "2021":[ 6,
          24,
          8,
          4 ],
        "2022":[ 7,
          7,
          8,
          17 ],
        "2023":[ 7,
          13,
          8,
          23 ],
        "2024":[ 7,
          18,
          8,
          28 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          1,
          10,
          12 ],
        "2013":[ 9,
          30,
          10,
          11 ],
        "2014":[ 10,
          13,
          10,
          24 ],
        "2015":[ 10,
          19,
          10,
          30 ],
        "2016":[ 10,
          17,
          10,
          28 ],
        "2017":[ 10,
          2,
          10,
          2,
          10,
          16,
          10,
          27 ],
        "2018":[ 10,
          1,
          10,
          12 ],
        "2019":[ 10,
          4,
          10,
          18 ],
        "2020":[ 10,
          5,
          10,
          16 ],
        "2021":[ 10,
          4,
          10,
          15 ],
        "2022":[ 10,
          10,
          10,
          21 ],
        "2023":[ 10,
          2,
          10,
          2,
          10,
          16,
          10,
          27 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          27,
          1,
          6 ],
        "2012":[ 12,
          21,
          1,
          4 ],
        "2013":[ 12,
          19,
          1,
          3 ],
        "2014":[ 12,
          22,
          1,
          6 ],
        "2015":[ 12,
          21,
          1,
          1 ],
        "2016":[ 12,
          27,
          1,
          6 ],
        "2017":[ 12,
          22,
          1,
          5 ],
        "2018":[ 12,
          20,
          1,
          4 ],
        "2019":[ 12,
          23,
          1,
          3 ],
        "2020":[ 12,
          21,
          1,
          4 ],
        "2021":[ 12,
          23,
          1,
          4 ],
        "2022":[ 12,
          23,
          1,
          6 ],
        "2023":[ 12,
          22,
          1,
          5 ],
        name:"Weihnachtsferien" } ] },
  Hessen:{ _state_code:"he",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=50.6118537&lon=9.1909725&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 4,
          2,
          4,
          14 ],
        "2013":[ 3,
          25,
          4,
          6 ],
        "2014":[ 4,
          14,
          4,
          26 ],
        "2015":[ 3,
          30,
          4,
          11 ],
        "2016":[ 3,
          29,
          4,
          9 ],
        "2017":[ 4,
          3,
          4,
          15 ],
        "2018":[ 3,
          26,
          4,
          7 ],
        "2019":[ 4,
          14,
          4,
          27 ],
        "2020":[ 4,
          6,
          4,
          18 ],
        "2021":[ 4,
          6,
          4,
          16 ],
        "2022":[ 4,
          11,
          4,
          23 ],
        "2023":[ 4,
          3,
          4,
          22 ],
        "2024":[ 3,
          25,
          4,
          13 ],
        name:"Osterferien" },
      { "2012":[ 7,
          2,
          8,
          10 ],
        "2013":[ 7,
          8,
          8,
          16 ],
        "2014":[ 7,
          28,
          9,
          5 ],
        "2015":[ 7,
          27,
          9,
          4 ],
        "2016":[ 7,
          18,
          8,
          26 ],
        "2017":[ 7,
          3,
          8,
          11 ],
        "2018":[ 6,
          25,
          8,
          3 ],
        "2019":[ 7,
          1,
          8,
          9 ],
        "2020":[ 7,
          6,
          8,
          14 ],
        "2021":[ 7,
          19,
          8,
          27 ],
        "2022":[ 7,
          25,
          9,
          2 ],
        "2023":[ 7,
          24,
          9,
          1 ],
        "2024":[ 7,
          15,
          8,
          23 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          15,
          10,
          27 ],
        "2013":[ 10,
          14,
          10,
          26 ],
        "2014":[ 10,
          20,
          11,
          1 ],
        "2015":[ 10,
          19,
          10,
          31 ],
        "2016":[ 10,
          17,
          10,
          29 ],
        "2017":[ 10,
          9,
          10,
          21 ],
        "2018":[ 10,
          1,
          10,
          13 ],
        "2019":[ 9,
          30,
          10,
          12 ],
        "2020":[ 10,
          5,
          10,
          17 ],
        "2021":[ 10,
          11,
          10,
          23 ],
        "2022":[ 10,
          24,
          10,
          29 ],
        "2023":[ 10,
          23,
          10,
          28 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          21,
          1,
          6 ],
        "2012":[ 12,
          24,
          1,
          12 ],
        "2013":[ 12,
          23,
          1,
          11 ],
        "2014":[ 12,
          22,
          1,
          10 ],
        "2015":[ 12,
          23,
          1,
          9 ],
        "2016":[ 12,
          22,
          1,
          7 ],
        "2017":[ 12,
          24,
          1,
          13 ],
        "2018":[ 12,
          24,
          1,
          12 ],
        "2019":[ 12,
          23,
          1,
          11 ],
        "2020":[ 12,
          21,
          1,
          9 ],
        "2021":[ 12,
          23,
          1,
          8 ],
        "2022":[ 12,
          22,
          1,
          7 ],
        "2023":[ 12,
          27,
          1,
          13 ],
        name:"Weihnachtsferien" } ] },
  "Mecklenburg-Vorpommern":{ _state_code:"mv",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=53.7735234&lon=12.5755746&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 2,
          6,
          2,
          17 ],
        "2013":[ 2,
          4,
          2,
          15 ],
        "2014":[ 2,
          3,
          2,
          15 ],
        "2015":[ 2,
          2,
          2,
          14 ],
        "2016":[ 2,
          1,
          2,
          13 ],
        "2017":[ 2,
          6,
          2,
          18 ],
        "2018":[ 2,
          5,
          2,
          16 ],
        "2019":[ 2,
          4,
          2,
          15 ],
        "2020":[ 2,
          10,
          2,
          21 ],
        "2021":[ 2,
          6,
          2,
          19 ],
        "2022":[ 2,
          5,
          2,
          17 ],
        "2023":[ 2,
          6,
          2,
          18 ],
        "2024":[ 2,
          5,
          2,
          16 ],
        name:"Winterferien" },
      { "2012":[ 4,
          2,
          4,
          11 ],
        "2013":[ 3,
          25,
          4,
          3 ],
        "2014":[ 4,
          14,
          4,
          23 ],
        "2015":[ 3,
          30,
          4,
          8 ],
        "2016":[ 3,
          21,
          3,
          30 ],
        "2017":[ 4,
          10,
          4,
          19 ],
        "2018":[ 3,
          26,
          4,
          4 ],
        "2019":[ 4,
          15,
          4,
          24 ],
        "2020":[ 4,
          6,
          4,
          15 ],
        "2021":[ 3,
          29,
          4,
          7 ],
        "2022":[ 4,
          11,
          4,
          20 ],
        "2023":[ 4,
          3,
          4,
          12 ],
        "2024":[ 3,
          25,
          4,
          3 ],
        name:"Osterferien" },
      { "2012":[ 5,
          25,
          5,
          29 ],
        "2013":[ 5,
          17,
          5,
          21 ],
        "2014":[ 6,
          6,
          6,
          10 ],
        "2015":[ 5,
          22,
          5,
          26 ],
        "2016":[ 5,
          14,
          5,
          17 ],
        "2017":[ 6,
          2,
          6,
          6 ],
        "2018":[ 5,
          11,
          5,
          11,
          5,
          18,
          5,
          22 ],
        "2019":[ 5,
          22,
          5,
          22,
          6,
          7,
          6,
          11 ],
        "2020":[ 5,
          22,
          5,
          22,
          5,
          29,
          6,
          2 ],
        "2021":[ 5,
          14,
          5,
          14,
          5,
          21,
          5,
          25 ],
        "2022":[ 5,
          27,
          5,
          27,
          6,
          3,
          6,
          7 ],
        "2023":[ 5,
          19,
          5,
          19,
          5,
          26,
          5,
          30 ],
        "2024":[ 5,
          10,
          5,
          10,
          5,
          17,
          5,
          21 ],
        name:"Pfingstferien" },
      { "2012":[ 6,
          23,
          8,
          4 ],
        "2013":[ 6,
          22,
          8,
          3 ],
        "2014":[ 7,
          14,
          8,
          23 ],
        "2015":[ 7,
          20,
          8,
          29 ],
        "2016":[ 7,
          25,
          9,
          3 ],
        "2017":[ 7,
          24,
          9,
          2 ],
        "2018":[ 7,
          9,
          8,
          18 ],
        "2019":[ 7,
          1,
          8,
          10 ],
        "2020":[ 6,
          22,
          8,
          1 ],
        "2021":[ 6,
          21,
          7,
          31 ],
        "2022":[ 7,
          4,
          8,
          13 ],
        "2023":[ 7,
          17,
          8,
          26 ],
        "2024":[ 7,
          22,
          8,
          31 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          1,
          10,
          5 ],
        "2013":[ 10,
          14,
          10,
          19 ],
        "2014":[ 10,
          20,
          10,
          25 ],
        "2015":[ 10,
          24,
          10,
          30 ],
        "2016":[ 10,
          24,
          10,
          28 ],
        "2017":[ 10,
          2,
          10,
          2,
          10,
          23,
          10,
          30 ],
        "2018":[ 10,
          8,
          10,
          13,
          11,
          1,
          11,
          2 ],
        "2019":[ 10,
          4,
          10,
          4,
          10,
          7,
          10,
          12,
          11,
          1,
          11,
          1 ],
        "2020":[ 10,
          5,
          10,
          10,
          11,
          2,
          11,
          3 ],
        "2021":[ 10,
          2,
          10,
          9,
          11,
          1,
          11,
          2 ],
        "2022":[ 10,
          10,
          10,
          14,
          11,
          1,
          11,
          2 ],
        "2023":[ 10,
          9,
          10,
          14,
          10,
          30,
          10,
          30,
          11,
          1,
          11,
          1 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          23,
          1,
          3 ],
        "2012":[ 12,
          21,
          1,
          4 ],
        "2013":[ 12,
          23,
          1,
          3 ],
        "2014":[ 12,
          22,
          1,
          2 ],
        "2015":[ 12,
          21,
          1,
          2 ],
        "2016":[ 12,
          22,
          1,
          2 ],
        "2017":[ 12,
          21,
          1,
          3 ],
        "2018":[ 12,
          24,
          1,
          5 ],
        "2019":[ 12,
          23,
          1,
          4 ],
        "2020":[ 12,
          21,
          1,
          2 ],
        "2021":[ 12,
          22,
          12,
          31 ],
        "2022":[ 12,
          22,
          1,
          2 ],
        "2023":[ 12,
          21,
          1,
          3 ],
        name:"Weihnachtsferien" } ] },
  Niedersachsen:{ _state_code:"ni",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=52.6368397&lon=9.8456838&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 1,
          30,
          1,
          31 ],
        "2013":[ 1,
          31,
          2,
          1 ],
        "2014":[ 1,
          30,
          1,
          31 ],
        "2015":[ 2,
          2,
          2,
          3 ],
        "2016":[ 1,
          28,
          1,
          29 ],
        "2017":[ 1,
          30,
          1,
          31 ],
        "2018":[ 2,
          1,
          2,
          2 ],
        "2019":[ 1,
          31,
          2,
          1 ],
        "2020":[ 2,
          3,
          2,
          4 ],
        "2021":[ 2,
          1,
          2,
          2 ],
        "2022":[ 1,
          31,
          2,
          1 ],
        "2023":[ 1,
          30,
          1,
          31 ],
        "2024":[ 2,
          1,
          2,
          2 ],
        name:"Winterferien" },
      { "2012":[ 3,
          26,
          4,
          11,
          4,
          30,
          4,
          30 ],
        "2013":[ 3,
          16,
          4,
          2 ],
        "2014":[ 4,
          3,
          4,
          22,
          5,
          2,
          5,
          2 ],
        "2015":[ 3,
          25,
          4,
          10 ],
        "2016":[ 3,
          18,
          4,
          2 ],
        "2017":[ 4,
          10,
          4,
          22 ],
        "2018":[ 3,
          19,
          4,
          3 ],
        "2019":[ 4,
          8,
          4,
          23 ],
        "2020":[ 3,
          30,
          4,
          14 ],
        "2021":[ 3,
          29,
          4,
          9 ],
        "2022":[ 4,
          4,
          4,
          19 ],
        "2023":[ 3,
          27,
          4,
          11 ],
        "2024":[ 3,
          18,
          4,
          2 ],
        name:"Osterferien" },
      { "2012":[ 5,
          18,
          5,
          18,
          5,
          29,
          5,
          29 ],
        "2013":[ 5,
          10,
          5,
          10,
          5,
          21,
          5,
          21 ],
        "2014":[ 5,
          30,
          5,
          30,
          6,
          10,
          6,
          10 ],
        "2015":[ 5,
          15,
          5,
          15,
          5,
          26,
          5,
          26 ],
        "2016":[ 5,
          6,
          5,
          6,
          5,
          17,
          5,
          17 ],
        "2017":[ 5,
          26,
          5,
          26,
          6,
          6,
          6,
          6 ],
        "2018":[ 4,
          30,
          4,
          30,
          5,
          11,
          5,
          11,
          5,
          22,
          5,
          22 ],
        "2019":[ 5,
          31,
          5,
          31,
          6,
          11,
          6,
          11 ],
        "2020":[ 5,
          22,
          5,
          22,
          6,
          2,
          6,
          2 ],
        "2021":[ 5,
          14,
          5,
          14,
          5,
          25,
          5,
          25 ],
        "2022":[ 5,
          27,
          5,
          27,
          6,
          7,
          6,
          7 ],
        "2023":[ 5,
          19,
          5,
          19,
          5,
          30,
          5,
          30 ],
        "2024":[ 5,
          10,
          5,
          10,
          5,
          21,
          5,
          21 ],
        name:"Pfingstferien" },
      { "2012":[ 7,
          23,
          8,
          31 ],
        "2013":[ 6,
          27,
          8,
          7 ],
        "2014":[ 7,
          31,
          9,
          10 ],
        "2015":[ 7,
          23,
          9,
          2 ],
        "2016":[ 6,
          23,
          8,
          3 ],
        "2017":[ 6,
          22,
          8,
          2 ],
        "2018":[ 6,
          28,
          8,
          8 ],
        "2019":[ 7,
          4,
          8,
          14 ],
        "2020":[ 7,
          16,
          8,
          26 ],
        "2021":[ 7,
          22,
          9,
          1 ],
        "2022":[ 7,
          14,
          8,
          24 ],
        "2023":[ 7,
          6,
          8,
          16 ],
        "2024":[ 6,
          24,
          8,
          2 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          22,
          11,
          3 ],
        "2013":[ 10,
          4,
          10,
          18 ],
        "2014":[ 10,
          27,
          11,
          8 ],
        "2015":[ 10,
          19,
          10,
          31 ],
        "2016":[ 10,
          4,
          10,
          15 ],
        "2017":[ 10,
          2,
          10,
          13,
          10,
          30,
          10,
          30 ],
        "2018":[ 10,
          1,
          10,
          12 ],
        "2019":[ 10,
          4,
          10,
          18 ],
        "2020":[ 10,
          12,
          10,
          23 ],
        "2021":[ 10,
          18,
          10,
          29 ],
        "2022":[ 10,
          17,
          10,
          28 ],
        "2023":[ 10,
          2,
          10,
          2,
          10,
          16,
          10,
          27 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          23,
          1,
          4 ],
        "2012":[ 12,
          24,
          1,
          5 ],
        "2013":[ 12,
          23,
          1,
          3 ],
        "2014":[ 12,
          22,
          1,
          5 ],
        "2015":[ 12,
          23,
          1,
          6 ],
        "2016":[ 12,
          21,
          1,
          6 ],
        "2017":[ 12,
          22,
          1,
          5 ],
        "2018":[ 12,
          24,
          1,
          4 ],
        "2019":[ 12,
          23,
          1,
          6 ],
        "2020":[ 12,
          23,
          1,
          8 ],
        "2021":[ 12,
          23,
          1,
          7 ],
        "2022":[ 12,
          23,
          1,
          6 ],
        "2023":[ 12,
          27,
          1,
          5 ],
        name:"Weihnachtsferien" } ] },
  "Nordrhein-Westfalen":{ _state_code:"nw",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=51.4785568&lon=7.5533645&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 4,
          2,
          4,
          14 ],
        "2013":[ 3,
          25,
          4,
          6 ],
        "2014":[ 4,
          14,
          4,
          26 ],
        "2015":[ 3,
          30,
          4,
          11 ],
        "2016":[ 3,
          21,
          4,
          2 ],
        "2017":[ 4,
          10,
          4,
          22 ],
        "2018":[ 3,
          26,
          4,
          7 ],
        "2019":[ 4,
          15,
          4,
          27 ],
        "2020":[ 4,
          6,
          4,
          18 ],
        "2021":[ 3,
          29,
          4,
          10 ],
        "2022":[ 4,
          11,
          4,
          23 ],
        "2023":[ 4,
          3,
          4,
          15 ],
        "2024":[ 3,
          25,
          4,
          6 ],
        name:"Osterferien" },
      { "2012":[ 5,
          29,
          5,
          29 ],
        "2013":[ 5,
          21,
          5,
          21 ],
        "2014":[ 6,
          10,
          6,
          10 ],
        "2015":[ 5,
          26,
          5,
          26 ],
        "2016":[ 5,
          17,
          5,
          17 ],
        "2017":[ 6,
          6,
          6,
          6 ],
        "2018":[ 5,
          22,
          5,
          25 ],
        "2019":[ 6,
          11,
          6,
          11 ],
        "2020":[ 6,
          2,
          6,
          2 ],
        "2021":[ 5,
          25,
          5,
          25 ],
        "2023":[ 5,
          30,
          5,
          30 ],
        "2024":[ 5,
          21,
          5,
          21 ],
        name:"Pfingstferien" },
      { "2012":[ 7,
          9,
          8,
          21 ],
        "2013":[ 7,
          22,
          9,
          3 ],
        "2014":[ 7,
          7,
          8,
          19 ],
        "2015":[ 6,
          29,
          8,
          11 ],
        "2016":[ 7,
          11,
          8,
          23 ],
        "2017":[ 7,
          17,
          8,
          29 ],
        "2018":[ 7,
          16,
          8,
          28 ],
        "2019":[ 7,
          15,
          8,
          27 ],
        "2020":[ 6,
          29,
          8,
          11 ],
        "2021":[ 7,
          5,
          8,
          17 ],
        "2022":[ 6,
          27,
          8,
          9 ],
        "2023":[ 6,
          22,
          8,
          4 ],
        "2024":[ 7,
          8,
          8,
          20 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          8,
          10,
          20 ],
        "2013":[ 10,
          21,
          11,
          2 ],
        "2014":[ 10,
          6,
          10,
          18 ],
        "2015":[ 10,
          5,
          10,
          17 ],
        "2016":[ 10,
          10,
          10,
          21 ],
        "2017":[ 10,
          23,
          11,
          4 ],
        "2018":[ 10,
          15,
          10,
          27 ],
        "2019":[ 10,
          14,
          10,
          26 ],
        "2020":[ 10,
          12,
          10,
          24 ],
        "2021":[ 10,
          11,
          10,
          23 ],
        "2022":[ 10,
          4,
          10,
          15 ],
        "2023":[ 10,
          2,
          10,
          14 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          23,
          1,
          6 ],
        "2012":[ 12,
          21,
          1,
          4 ],
        "2013":[ 12,
          23,
          1,
          7 ],
        "2014":[ 12,
          22,
          1,
          6 ],
        "2015":[ 12,
          23,
          1,
          6 ],
        "2016":[ 12,
          23,
          1,
          6 ],
        "2017":[ 12,
          27,
          1,
          6 ],
        "2018":[ 12,
          21,
          1,
          4 ],
        "2019":[ 12,
          23,
          1,
          6 ],
        "2020":[ 12,
          23,
          1,
          6 ],
        "2021":[ 12,
          24,
          1,
          8 ],
        "2022":[ 12,
          23,
          1,
          6 ],
        "2023":[ 12,
          21,
          1,
          5 ],
        name:"Weihnachtsferien" } ] },
  "Rheinland-Pfalz":{ _state_code:"rp",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=49.7497346&lon=7.4396553&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2019":[ 2,
          25,
          3,
          1 ],
        "2020":[ 2,
          17,
          2,
          21 ],
        "2022":[ 2,
          21,
          2,
          25 ],
        name:"Winterferien" },
      { "2012":[ 3,
          29,
          4,
          13 ],
        "2013":[ 3,
          20,
          4,
          5 ],
        "2014":[ 4,
          11,
          4,
          25 ],
        "2015":[ 3,
          26,
          4,
          10 ],
        "2016":[ 3,
          18,
          4,
          1 ],
        "2017":[ 4,
          10,
          4,
          21 ],
        "2018":[ 3,
          26,
          4,
          6 ],
        "2019":[ 4,
          23,
          4,
          30 ],
        "2020":[ 4,
          9,
          4,
          17 ],
        "2021":[ 3,
          29,
          4,
          6 ],
        "2022":[ 4,
          13,
          4,
          22 ],
        "2023":[ 4,
          3,
          4,
          6 ],
        "2024":[ 3,
          25,
          4,
          2 ],
        name:"Osterferien" },
      { "2021":[ 5,
          25,
          6,
          2 ],
        "2023":[ 5,
          30,
          6,
          7 ],
        "2024":[ 5,
          21,
          5,
          29 ],
        name:"Pfingstferien" },
      { "2012":[ 7,
          2,
          8,
          10 ],
        "2013":[ 7,
          8,
          8,
          16 ],
        "2014":[ 7,
          28,
          9,
          5 ],
        "2015":[ 7,
          27,
          9,
          4 ],
        "2016":[ 7,
          18,
          8,
          26 ],
        "2017":[ 7,
          3,
          8,
          11 ],
        "2018":[ 6,
          25,
          8,
          3 ],
        "2019":[ 7,
          1,
          8,
          9 ],
        "2020":[ 7,
          6,
          8,
          14 ],
        "2021":[ 7,
          19,
          8,
          27 ],
        "2022":[ 7,
          25,
          9,
          2 ],
        "2023":[ 7,
          24,
          9,
          1 ],
        "2024":[ 7,
          15,
          8,
          23 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          1,
          10,
          12 ],
        "2013":[ 10,
          4,
          10,
          18 ],
        "2014":[ 10,
          20,
          10,
          31 ],
        "2015":[ 10,
          19,
          10,
          30 ],
        "2016":[ 10,
          10,
          10,
          21 ],
        "2017":[ 10,
          2,
          10,
          13 ],
        "2018":[ 10,
          1,
          10,
          12 ],
        "2019":[ 9,
          30,
          10,
          11 ],
        "2020":[ 10,
          12,
          10,
          23 ],
        "2021":[ 10,
          11,
          10,
          22 ],
        "2022":[ 10,
          17,
          10,
          31 ],
        "2023":[ 10,
          16,
          10,
          27 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          22,
          1,
          6 ],
        "2012":[ 12,
          20,
          1,
          4 ],
        "2013":[ 12,
          23,
          1,
          7 ],
        "2014":[ 12,
          22,
          1,
          7 ],
        "2015":[ 12,
          23,
          1,
          8 ],
        "2016":[ 12,
          22,
          1,
          6 ],
        "2017":[ 12,
          22,
          1,
          9 ],
        "2018":[ 12,
          20,
          1,
          4 ],
        "2019":[ 12,
          23,
          1,
          6 ],
        "2020":[ 12,
          21,
          12,
          31 ],
        "2021":[ 12,
          23,
          12,
          31 ],
        "2022":[ 12,
          23,
          1,
          2 ],
        "2023":[ 12,
          27,
          1,
          5 ],
        name:"Weihnachtsferien" } ] },
  Saarland:{ _state_code:"sl",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=49.4173988&lon=6.9805789&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 2,
          20,
          2,
          25 ],
        "2013":[ 2,
          11,
          2,
          16 ],
        "2014":[ 3,
          3,
          3,
          8 ],
        "2015":[ 2,
          16,
          2,
          21 ],
        "2016":[ 2,
          8,
          2,
          13 ],
        "2017":[ 2,
          27,
          3,
          4 ],
        "2018":[ 2,
          12,
          2,
          17 ],
        "2019":[ 2,
          25,
          3,
          5 ],
        "2020":[ 2,
          17,
          2,
          25 ],
        "2021":[ 2,
          15,
          2,
          19 ],
        "2022":[ 2,
          21,
          3,
          1 ],
        "2023":[ 2,
          20,
          2,
          24 ],
        "2024":[ 2,
          12,
          2,
          16 ],
        name:"Winterferien" },
      { "2012":[ 4,
          2,
          4,
          14 ],
        "2013":[ 3,
          25,
          4,
          6 ],
        "2014":[ 4,
          14,
          4,
          26 ],
        "2015":[ 3,
          30,
          4,
          11 ],
        "2016":[ 3,
          29,
          4,
          9 ],
        "2017":[ 4,
          10,
          4,
          22 ],
        "2018":[ 3,
          26,
          4,
          6 ],
        "2019":[ 4,
          17,
          4,
          26 ],
        "2020":[ 4,
          14,
          4,
          24 ],
        "2021":[ 3,
          29,
          4,
          7 ],
        "2022":[ 4,
          14,
          4,
          22 ],
        "2023":[ 4,
          3,
          4,
          12 ],
        "2024":[ 2,
          25,
          4,
          5 ],
        name:"Osterferien" },
      { "2021":[ 5,
          25,
          5,
          28 ],
        "2022":[ 6,
          7,
          6,
          10 ],
        "2023":[ 5,
          30,
          6,
          2 ],
        "2024":[ 5,
          21,
          5,
          24 ],
        name:"Pfingstferien" },
      { "2012":[ 7,
          2,
          8,
          14 ],
        "2013":[ 7,
          8,
          8,
          17 ],
        "2014":[ 7,
          28,
          9,
          6 ],
        "2015":[ 7,
          27,
          9,
          5 ],
        "2016":[ 7,
          18,
          8,
          27 ],
        "2017":[ 7,
          3,
          8,
          14 ],
        "2018":[ 6,
          25,
          8,
          3 ],
        "2019":[ 7,
          1,
          8,
          9 ],
        "2020":[ 7,
          6,
          8,
          14 ],
        "2021":[ 7,
          19,
          8,
          27 ],
        "2022":[ 7,
          25,
          9,
          2 ],
        "2023":[ 7,
          24,
          9,
          1 ],
        "2024":[ 7,
          15,
          8,
          23 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          22,
          11,
          3 ],
        "2013":[ 10,
          21,
          11,
          2 ],
        "2014":[ 10,
          20,
          10,
          31 ],
        "2015":[ 10,
          19,
          10,
          31 ],
        "2016":[ 10,
          10,
          10,
          22 ],
        "2017":[ 10,
          2,
          10,
          14 ],
        "2018":[ 10,
          1,
          10,
          12 ],
        "2019":[ 10,
          7,
          10,
          18 ],
        "2020":[ 10,
          12,
          10,
          23 ],
        "2021":[ 10,
          18,
          10,
          29 ],
        "2022":[ 10,
          24,
          11,
          4 ],
        "2023":[ 10,
          23,
          11,
          3 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          23,
          1,
          4 ],
        "2012":[ 12,
          24,
          1,
          5 ],
        "2013":[ 12,
          20,
          1,
          4 ],
        "2014":[ 12,
          22,
          1,
          7 ],
        "2015":[ 12,
          21,
          1,
          2 ],
        "2016":[ 12,
          19,
          12,
          31 ],
        "2017":[ 12,
          21,
          1,
          5 ],
        "2018":[ 12,
          20,
          1,
          4 ],
        "2019":[ 12,
          23,
          1,
          3 ],
        "2020":[ 12,
          21,
          12,
          31 ],
        "2021":[ 12,
          23,
          1,
          3 ],
        "2022":[ 12,
          22,
          1,
          4 ],
        "2023":[ 12,
          21,
          1,
          2 ],
        name:"Weihnachtsferien" } ] },
  Sachsen:{ _state_code:"sn",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=50.9295798&lon=13.4585052&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 2,
          13,
          2,
          25 ],
        "2013":[ 2,
          4,
          2,
          15 ],
        "2014":[ 2,
          17,
          3,
          1 ],
        "2015":[ 2,
          9,
          2,
          21 ],
        "2016":[ 2,
          8,
          2,
          20 ],
        "2017":[ 2,
          13,
          2,
          24 ],
        "2018":[ 2,
          12,
          2,
          23 ],
        "2019":[ 2,
          18,
          3,
          2 ],
        "2020":[ 2,
          10,
          2,
          22 ],
        "2021":[ 2,
          8,
          2,
          20 ],
        "2022":[ 2,
          12,
          2,
          26 ],
        "2023":[ 2,
          13,
          2,
          24 ],
        "2024":[ 2,
          12,
          2,
          23 ],
        name:"Winterferien" },
      { "2012":[ 4,
          6,
          4,
          14 ],
        "2013":[ 3,
          29,
          4,
          6 ],
        "2014":[ 4,
          18,
          4,
          26 ],
        "2015":[ 4,
          2,
          4,
          11 ],
        "2016":[ 3,
          25,
          4,
          2 ],
        "2017":[ 4,
          13,
          4,
          22 ],
        "2018":[ 3,
          29,
          4,
          6 ],
        "2019":[ 4,
          19,
          4,
          26 ],
        "2020":[ 4,
          10,
          4,
          18 ],
        "2021":[ 4,
          2,
          4,
          10 ],
        "2022":[ 4,
          15,
          4,
          23 ],
        "2023":[ 4,
          7,
          4,
          15 ],
        "2024":[ 3,
          28,
          4,
          5 ],
        name:"Osterferien" },
      { "2012":[ 5,
          18,
          5,
          18 ],
        "2013":[ 5,
          10,
          5,
          10,
          5,
          18,
          5,
          22 ],
        "2014":[ 5,
          30,
          5,
          30 ],
        "2015":[ 5,
          15,
          5,
          15 ],
        "2016":[ 5,
          6,
          5,
          6 ],
        "2017":[ 5,
          26,
          5,
          26 ],
        "2018":[ 5,
          11,
          5,
          11,
          5,
          19,
          5,
          22 ],
        "2019":[ 5,
          31,
          5,
          31 ],
        "2020":[ 5,
          22,
          5,
          22 ],
        "2021":[ 5,
          14,
          5,
          14 ],
        "2022":[ 5,
          27,
          5,
          27 ],
        "2023":[ 5,
          19,
          5,
          19 ],
        "2024":[ 5,
          10,
          5,
          10,
          5,
          18,
          5,
          21 ],
        name:"Pfingstferien" },
      { "2012":[ 7,
          23,
          8,
          31 ],
        "2013":[ 7,
          15,
          8,
          23 ],
        "2014":[ 7,
          21,
          8,
          29 ],
        "2015":[ 7,
          13,
          8,
          21 ],
        "2016":[ 6,
          27,
          8,
          5 ],
        "2017":[ 6,
          26,
          8,
          4 ],
        "2018":[ 7,
          2,
          8,
          10 ],
        "2019":[ 7,
          8,
          8,
          16 ],
        "2020":[ 7,
          20,
          8,
          28 ],
        "2021":[ 7,
          26,
          9,
          3 ],
        "2022":[ 7,
          18,
          8,
          26 ],
        "2023":[ 7,
          10,
          8,
          18 ],
        "2024":[ 6,
          20,
          7,
          31 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          22,
          11,
          2 ],
        "2013":[ 10,
          21,
          11,
          1 ],
        "2014":[ 10,
          20,
          10,
          31 ],
        "2015":[ 10,
          12,
          10,
          24 ],
        "2016":[ 10,
          3,
          10,
          15 ],
        "2017":[ 10,
          2,
          10,
          14,
          10,
          30,
          10,
          30 ],
        "2018":[ 10,
          8,
          10,
          20 ],
        "2019":[ 10,
          14,
          10,
          25 ],
        "2020":[ 10,
          19,
          10,
          31 ],
        "2021":[ 10,
          18,
          10,
          30 ],
        "2022":[ 10,
          17,
          10,
          29 ],
        "2023":[ 10,
          2,
          10,
          14,
          10,
          30,
          10,
          30 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          23,
          1,
          2 ],
        "2012":[ 12,
          22,
          1,
          2 ],
        "2013":[ 12,
          21,
          1,
          3 ],
        "2014":[ 12,
          22,
          1,
          3 ],
        "2015":[ 12,
          21,
          1,
          2 ],
        "2016":[ 12,
          23,
          1,
          2 ],
        "2017":[ 12,
          23,
          1,
          2 ],
        "2018":[ 12,
          22,
          1,
          4 ],
        "2019":[ 12,
          21,
          1,
          3 ],
        "2020":[ 12,
          23,
          1,
          2 ],
        "2021":[ 12,
          23,
          1,
          1 ],
        "2022":[ 12,
          22,
          1,
          2 ],
        "2023":[ 12,
          23,
          1,
          2 ],
        name:"Weihnachtsferien" } ] },
  "Sachsen-Anhalt":{ _state_code:"st",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=51.908526&lon=11.4939134&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 2,
          4,
          2,
          11 ],
        "2013":[ 2,
          1,
          2,
          8 ],
        "2014":[ 2,
          1,
          2,
          12 ],
        "2015":[ 2,
          2,
          2,
          14 ],
        "2016":[ 2,
          1,
          2,
          10 ],
        "2017":[ 2,
          4,
          2,
          11 ],
        "2018":[ 2,
          5,
          2,
          9 ],
        "2019":[ 2,
          11,
          2,
          15 ],
        "2020":[ 2,
          10,
          2,
          14 ],
        name:"Winterferien" },
      { "2012":[ 4,
          2,
          4,
          7 ],
        "2013":[ 3,
          25,
          3,
          30 ],
        "2014":[ 4,
          14,
          4,
          17 ],
        "2015":[ 4,
          2,
          4,
          2 ],
        "2016":[ 3,
          24,
          3,
          24 ],
        "2017":[ 4,
          10,
          4,
          13 ],
        "2018":[ 3,
          26,
          3,
          31,
          4,
          30,
          4,
          30 ],
        "2019":[ 4,
          18,
          4,
          30 ],
        "2020":[ 4,
          6,
          4,
          11 ],
        name:"Osterferien" },
      { "2012":[ 5,
          18,
          5,
          25 ],
        "2013":[ 5,
          10,
          5,
          18 ],
        "2014":[ 5,
          30,
          6,
          7 ],
        "2015":[ 5,
          15,
          5,
          23 ],
        "2016":[ 5,
          6,
          5,
          14 ],
        "2017":[ 5,
          26,
          5,
          26 ],
        "2018":[ 5,
          11,
          5,
          19 ],
        "2019":[ 5,
          31,
          6,
          1 ],
        "2020":[ 5,
          18,
          5,
          30 ],
        name:"Pfingstferien" },
      { "2012":[ 7,
          23,
          9,
          5 ],
        "2013":[ 7,
          15,
          8,
          28 ],
        "2014":[ 7,
          21,
          9,
          3 ],
        "2015":[ 7,
          13,
          8,
          26 ],
        "2016":[ 6,
          27,
          8,
          10 ],
        "2017":[ 6,
          26,
          8,
          9 ],
        "2018":[ 6,
          28,
          8,
          8 ],
        "2019":[ 7,
          4,
          8,
          14 ],
        "2020":[ 7,
          16,
          8,
          26 ],
        "2021":[ 7,
          22,
          9,
          1 ],
        "2022":[ 7,
          14,
          8,
          24 ],
        "2023":[ 7,
          6,
          8,
          16 ],
        "2024":[ 6,
          24,
          8,
          3 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          29,
          11,
          2 ],
        "2013":[ 10,
          21,
          10,
          25 ],
        "2014":[ 10,
          27,
          10,
          30 ],
        "2015":[ 10,
          17,
          10,
          24 ],
        "2016":[ 10,
          4,
          10,
          15 ],
        "2017":[ 10,
          2,
          10,
          13,
          10,
          30,
          10,
          30 ],
        "2018":[ 10,
          1,
          10,
          12 ],
        "2019":[ 10,
          4,
          10,
          11,
          11,
          1,
          11,
          1 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          22,
          1,
          7 ],
        "2012":[ 12,
          19,
          1,
          4 ],
        "2013":[ 12,
          21,
          1,
          3 ],
        "2014":[ 12,
          22,
          1,
          5 ],
        "2015":[ 12,
          21,
          1,
          5 ],
        "2016":[ 12,
          19,
          1,
          2 ],
        "2017":[ 12,
          21,
          1,
          3 ],
        "2018":[ 12,
          19,
          1,
          4 ],
        "2019":[ 12,
          23,
          1,
          4 ],
        name:"Weihnachtsferien" } ] },
  "Schleswig-Holstein":{ _state_code:"sh",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=54.1853998&lon=9.8220089&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 3,
          30,
          4,
          13 ],
        "2013":[ 3,
          25,
          4,
          9 ],
        "2014":[ 4,
          16,
          5,
          2 ],
        "2015":[ 4,
          1,
          4,
          17 ],
        "2016":[ 3,
          24,
          4,
          9 ],
        "2017":[ 4,
          7,
          4,
          21 ],
        "2018":[ 3,
          29,
          4,
          13 ],
        "2019":[ 4,
          4,
          4,
          18 ],
        "2020":[ 3,
          30,
          4,
          17 ],
        "2021":[ 4,
          1,
          4,
          16 ],
        "2022":[ 4,
          4,
          4,
          16 ],
        "2023":[ 4,
          6,
          4,
          22 ],
        "2024":[ 4,
          2,
          4,
          19 ],
        name:"Osterferien" },
      { "2012":[ 5,
          18,
          5,
          18 ],
        "2013":[ 5,
          10,
          5,
          10 ],
        "2014":[ 5,
          30,
          5,
          30 ],
        "2015":[ 5,
          15,
          5,
          15 ],
        "2016":[ 5,
          6,
          5,
          6 ],
        "2017":[ 5,
          26,
          5,
          26 ],
        "2018":[ 5,
          11,
          5,
          11 ],
        "2019":[ 5,
          31,
          5,
          31 ],
        "2020":[ 5,
          22,
          5,
          22 ],
        "2021":[ 5,
          14,
          5,
          14 ],
        "2022":[ 5,
          27,
          5,
          27 ],
        "2023":[ 5,
          19,
          5,
          20 ],
        "2024":[ 5,
          10,
          5,
          11 ],
        name:"Pfingstferien" },
      { "2012":[ 6,
          25,
          8,
          4 ],
        "2013":[ 6,
          24,
          8,
          3 ],
        "2014":[ 7,
          14,
          8,
          23 ],
        "2015":[ 7,
          20,
          8,
          29 ],
        "2016":[ 7,
          25,
          9,
          3 ],
        "2017":[ 7,
          24,
          9,
          2 ],
        "2018":[ 7,
          9,
          8,
          18 ],
        "2019":[ 7,
          1,
          8,
          10 ],
        "2020":[ 6,
          29,
          8,
          8 ],
        "2021":[ 6,
          21,
          7,
          31 ],
        "2022":[ 7,
          4,
          8,
          13 ],
        "2023":[ 7,
          17,
          8,
          26 ],
        "2024":[ 7,
          22,
          8,
          31 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          4,
          10,
          19 ],
        "2013":[ 10,
          4,
          10,
          18 ],
        "2014":[ 10,
          13,
          10,
          25 ],
        "2015":[ 10,
          19,
          10,
          31 ],
        "2016":[ 10,
          17,
          10,
          29 ],
        "2017":[ 10,
          16,
          10,
          27 ],
        "2018":[ 10,
          1,
          10,
          19 ],
        "2019":[ 10,
          4,
          10,
          18 ],
        "2020":[ 10,
          5,
          10,
          17 ],
        "2021":[ 10,
          4,
          10,
          16 ],
        "2022":[ 10,
          10,
          10,
          21 ],
        "2023":[ 10,
          16,
          10,
          27 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          23,
          1,
          6 ],
        "2012":[ 12,
          24,
          1,
          5 ],
        "2013":[ 12,
          23,
          1,
          6 ],
        "2014":[ 12,
          22,
          1,
          6 ],
        "2015":[ 12,
          21,
          1,
          6 ],
        "2016":[ 12,
          23,
          1,
          6 ],
        "2017":[ 12,
          21,
          1,
          6 ],
        "2018":[ 12,
          21,
          1,
          4 ],
        "2019":[ 12,
          23,
          1,
          6 ],
        "2020":[ 12,
          21,
          1,
          6 ],
        "2021":[ 12,
          23,
          1,
          8 ],
        "2022":[ 12,
          23,
          1,
          7 ],
        "2023":[ 12,
          27,
          1,
          6 ],
        name:"Weihnachtsferien" } ] },
  "Thüringen":{ _state_code:"th",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=50.7333163&lon=11.0747905&zoom=18&addressdetails=1&accept-language=de,en",
    SH:[ { "2012":[ 2,
          6,
          2,
          11 ],
        "2013":[ 2,
          18,
          2,
          23 ],
        "2014":[ 2,
          17,
          2,
          22 ],
        "2015":[ 2,
          2,
          2,
          7 ],
        "2016":[ 2,
          1,
          2,
          6 ],
        "2017":[ 2,
          6,
          2,
          11 ],
        "2018":[ 2,
          5,
          2,
          9 ],
        "2019":[ 2,
          11,
          2,
          15 ],
        "2020":[ 2,
          10,
          2,
          14 ],
        "2021":[ 2,
          8,
          2,
          13 ],
        "2022":[ 2,
          12,
          2,
          19 ],
        "2023":[ 2,
          13,
          2,
          17 ],
        "2024":[ 2,
          12,
          2,
          16 ],
        name:"Winterferien" },
      { "2012":[ 4,
          2,
          4,
          13 ],
        "2013":[ 3,
          25,
          4,
          6 ],
        "2014":[ 4,
          19,
          5,
          2 ],
        "2015":[ 3,
          30,
          4,
          11 ],
        "2016":[ 3,
          24,
          4,
          2 ],
        "2017":[ 4,
          10,
          4,
          21 ],
        "2018":[ 3,
          26,
          4,
          7 ],
        "2019":[ 4,
          15,
          4,
          27 ],
        "2020":[ 4,
          6,
          4,
          18 ],
        "2021":[ 3,
          29,
          4,
          10 ],
        "2022":[ 4,
          11,
          4,
          23 ],
        "2023":[ 4,
          3,
          4,
          15 ],
        "2024":[ 3,
          25,
          4,
          6 ],
        name:"Osterferien" },
      { "2012":[ 5,
          25,
          5,
          29 ],
        "2013":[ 5,
          10,
          5,
          10 ],
        "2014":[ 5,
          30,
          5,
          30 ],
        "2015":[ 5,
          15,
          5,
          15 ],
        "2016":[ 5,
          6,
          5,
          6 ],
        "2017":[ 5,
          26,
          5,
          26 ],
        "2018":[ 5,
          11,
          5,
          11 ],
        "2019":[ 5,
          31,
          5,
          31 ],
        "2020":[ 5,
          22,
          5,
          22 ],
        "2021":[ 5,
          14,
          5,
          14 ],
        "2022":[ 5,
          27,
          5,
          27 ],
        "2023":[ 5,
          19,
          5,
          19 ],
        "2024":[ 5,
          10,
          5,
          10 ],
        name:"Pfingstferien" },
      { "2012":[ 7,
          23,
          8,
          31 ],
        "2013":[ 7,
          15,
          8,
          23 ],
        "2014":[ 7,
          21,
          8,
          29 ],
        "2015":[ 7,
          13,
          8,
          21 ],
        "2016":[ 6,
          27,
          8,
          10 ],
        "2017":[ 6,
          26,
          8,
          9 ],
        "2018":[ 7,
          2,
          8,
          11 ],
        "2019":[ 7,
          8,
          8,
          17 ],
        "2020":[ 7,
          20,
          8,
          29 ],
        "2021":[ 7,
          26,
          9,
          4 ],
        "2022":[ 7,
          18,
          8,
          27 ],
        "2023":[ 7,
          10,
          8,
          19 ],
        "2024":[ 6,
          20,
          7,
          31 ],
        name:"Sommerferien" },
      { "2012":[ 10,
          22,
          11,
          3 ],
        "2013":[ 10,
          21,
          11,
          2 ],
        "2014":[ 10,
          6,
          10,
          18 ],
        "2015":[ 10,
          5,
          10,
          17 ],
        "2016":[ 10,
          10,
          10,
          22 ],
        "2017":[ 10,
          2,
          10,
          14 ],
        "2018":[ 10,
          1,
          10,
          13 ],
        "2019":[ 10,
          7,
          10,
          19 ],
        "2020":[ 10,
          17,
          10,
          30 ],
        "2021":[ 10,
          25,
          11,
          6 ],
        "2022":[ 10,
          17,
          10,
          29 ],
        "2023":[ 10,
          2,
          10,
          14 ],
        name:"Herbstferien" },
      { "2011":[ 12,
          23,
          1,
          1 ],
        "2012":[ 12,
          24,
          1,
          5 ],
        "2013":[ 12,
          23,
          1,
          4 ],
        "2014":[ 12,
          22,
          1,
          3 ],
        "2015":[ 12,
          23,
          1,
          2 ],
        "2016":[ 12,
          23,
          12,
          31 ],
        "2017":[ 12,
          22,
          1,
          5 ],
        "2018":[ 12,
          21,
          1,
          4 ],
        "2019":[ 12,
          21,
          1,
          3 ],
        "2020":[ 12,
          23,
          1,
          2 ],
        "2021":[ 12,
          23,
          12,
          31 ],
        "2022":[ 12,
          22,
          1,
          3 ],
        "2023":[ 12,
          22,
          1,
          5 ],
        name:"Weihnachtsferien" } ] } };

var data$12 = { _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=55.670249&lon=10.3333283&zoom=18&addressdetails=1&accept-language=da,en",
  PH:{ "Nytårsdag":[ 1,
      1 ],
    "Skærtorsdag":[ "easter",
      -3 ],
    Langfredag:[ "easter",
      -2 ],
    "Påskedag":[ "easter",
      0 ],
    "2. Påskedag":[ "easter",
      1 ],
    "Store Bededag":[ "easter",
      26 ],
    "Kristi Himmelfartsdag":[ "easter",
      39 ],
    Pinsedag:[ "easter",
      49 ],
    "2. Pinsedag":[ "easter",
      50 ],
    Grundlovsdag:[ 6,
      5 ],
    Juleaftensdag:[ 12,
      24 ],
    Juledag:[ 12,
      25 ],
    "2. Juledag":[ 12,
      26 ] } };

var data$14 = { PH:{ "Jour de l'an":[ 1,
      1 ],
    "Vendredi saint":[ "easter",
      -2,
      [ "Moselle",
        "Bas-Rhin",
        "Haut-Rhin",
        "Guadeloupe",
        "Martinique",
        "Polynésie française" ] ],
    "Lundi de Pâques":[ "easter",
      1 ],
    "Saint-Pierre-Chanel":[ 4,
      28,
      [ "Wallis-et-Futuna" ] ],
    "Fête du Travail":[ 5,
      1 ],
    "Fête de la Victoire":[ 5,
      8 ],
    "Abolition de l'esclavage (Martinique)":[ 5,
      22,
      [ "Martinique" ] ],
    "Abolition de l'esclavage (Guadeloupe)":[ 5,
      27,
      [ "Guadeloupe" ] ],
    "Jeudi de l'Ascension":[ "easter",
      39 ],
    "Lundi de Pentecôte":[ "easter",
      50 ],
    "Abolition de l'esclavage (Guyane)":[ 6,
      10,
      [ "Guyane" ] ],
    "Fête de l'autonomie":[ 6,
      29,
      [ "Polynésie française" ] ],
    "Fête nationale":[ 7,
      14 ],
    "Fête Victor Schoelcher":[ 7,
      21,
      [ "Guadeloupe",
        "Martinique" ] ],
    "Fête du Territoire":[ 7,
      29,
      [ "Wallis-et-Futuna" ] ],
    Assomption:[ 8,
      15 ],
    "Fête de la citoyenneté":[ 9,
      24,
      [ "Nouvelle-Calédonie" ] ],
    Toussaint:[ 11,
      1 ],
    Armistice:[ 11,
      11 ],
    "Abolition de l'esclavage (Réunion)":[ 12,
      20,
      [ "Réunion" ] ],
    "Noël":[ 12,
      25 ],
    "Saint-Étienne ":[ 12,
      26,
      [ "Moselle",
        "Bas-Rhin",
        "Haut-Rhin" ] ] } };

var data$16 = { _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=47.4821&lon=19.0640&zoom=18&addressdetails=1&accept-language=hu,en",
  PH:{ "újév":[ 1,
      1 ],
    "az 1848-as forradalom ünnepe":[ 3,
      15 ],
    "nagypéntek":[ "easter",
      -2 ],
    "húsvétvasárnap":[ "easter",
      0 ],
    "húsvéthétfő":[ "easter",
      1 ],
    "pünkösdvasárnap":[ "easter",
      49 ],
    "pünkösdhétfő":[ "easter",
      50 ],
    "a munka ünnepe":[ 5,
      1 ],
    "az államalapítás ünnepe":[ 8,
      20 ],
    "az 1956-os forradalom ünnepe":[ 10,
      23 ],
    mindenszentek:[ 11,
      1 ],
    "karácsony":[ 12,
      25 ],
    "karácsony másnap":[ 12,
      26 ] },
  SH:[ { "2015":[ 4,
        2,
        4,
        7 ],
      "2016":[ 3,
        24,
        3,
        29 ],
      "2017":[ 4,
        13,
        4,
        18 ],
      name:"tavaszi szünet" },
    { "2015":[ 6,
        16,
        8,
        31 ],
      "2016":[ 6,
        16,
        8,
        31 ],
      "2017":[ 6,
        16,
        8,
        31 ],
      name:"nyári szünet" },
    { "2014":[ 10,
        27,
        10,
        31 ],
      "2015":[ 10,
        26,
        10,
        30 ],
      "2016":[ 11,
        2,
        11,
        4 ],
      name:"őszi szünet" },
    { "2014":[ 12,
        22,
        1,
        2 ],
      "2015":[ 12,
        21,
        12,
        31 ],
      "2016":[ 12,
        22,
        1,
        2 ],
      name:"téli szünet" } ] };

var data$18 = { _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=41.9808038&lon=12.7662312&zoom=18&addressdetails=1&accept-language=it,en",
  PH:{ Capodanno:[ 1,
      1 ],
    Epifania:[ 1,
      6 ],
    "Liberazione dal nazifascismo (1945)":[ 4,
      25 ],
    Pasqua:[ "easter",
      0 ],
    "Lunedì di Pasqua":[ "easter",
      1 ],
    "Festa del lavoro":[ 5,
      1 ],
    "Festa della Repubblica":[ 6,
      2 ],
    "Assunzione di Maria":[ 8,
      15 ],
    Ognissanti:[ 11,
      1 ],
    "Festa dell’unità nazionale":[ "firstSeptemberSunday",
      0 ],
    "Immacolata Concezione":[ 12,
      8 ],
    "Natale di Gesù":[ 12,
      25 ],
    "Santo Stefano":[ 12,
      26 ] } };

var data$20 = { PH:{ Nieuwjaarsdag:[ 1,
      1 ],
    "Goede vrijdag":[ "easter",
      -2 ],
    "Tweede Paasdag":[ "easter",
      1 ],
    Koningsdag:[ 4,
      27 ],
    Bevreidingsdag:[ 5,
      5 ],
    Hemelvaartsdag:[ "easter",
      39 ],
    "Tweede Pinksterdag":[ "easter",
      50 ],
    "Eerste Kerstdag":[ 12,
      25 ],
    "Tweede Kerstdag":[ 12,
      26 ] } };

var data$22 = { _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=53.4825&lon=18.75823&zoom=18&addressdetails=1&accept-language=pl,en",
  PH:{ "Nowy Rok":[ 1,
      1 ],
    "Święto Trzech Króli":[ 1,
      6 ],
    Wielkanoc:[ "easter",
      0 ],
    "Lany Poniedziałek - drugi dzień Wielkiej Nocy":[ "easter",
      1 ],
    "Pierwszy Maja":[ 5,
      1 ],
    "Trzeci Maja":[ 5,
      3 ],
    "Zielone Świątki":[ "easter",
      49 ],
    "Boże Ciało":[ "easter",
      60 ],
    "Wniebowzięcie Najświętszej Maryi Panny":[ 8,
      15 ],
    "Wszystkich Świętych":[ 11,
      1 ],
    "Święto Niepodległości":[ 11,
      11 ],
    "pierwszy dzień Bożego Narodzenia":[ 12,
      25 ],
    "drugi dzień Bożego Narodzenia":[ 12,
      26 ] } };

var data$24 = { _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=45.9852129&lon=24.6859225&zoom=18&addressdetails=1&accept-language=ro,en",
  PH:{ "Anul Nou":[ 1,
      1 ],
    "A doua zi de Anul Nou":[ 1,
      2 ],
    "Ziua Unirii Principatelor Române (Ziua Unirii)":[ 1,
      24 ],
    "Paștele ortodox":[ "orthodox easter",
      0 ],
    "A doua zi de Paște ortodox":[ "orthodox easter",
      1 ],
    "Ziua Muncii":[ 5,
      1 ],
    Rusaliile:[ "orthodox easter",
      50 ],
    "A doua zi de Rusalii":[ "orthodox easter",
      51 ],
    "Adormirea Maicii Domnului":[ 8,
      15 ],
    "Sfântul Apostol Andrei":[ 11,
      30 ],
    "Ziua Națională (Ziua Marii Uniri)":[ 12,
      1 ],
    "Crăciunul":[ 12,
      25 ],
    "A doua zi de Crăciun":[ 12,
      26 ] },
  SH:[ { "2015":[ 1,
        31,
        2,
        8 ],
      "2016":[ 1,
        30,
        2,
        7 ],
      name:"Vacanţa intersemestrială" },
    { "2015":[ 4,
        11,
        4,
        19 ],
      "2016":[ 4,
        23,
        5,
        3 ],
      name:"Vacanța de primăvară" },
    { "2015":[ 6,
        20,
        9,
        13 ],
      "2016":[ 6,
        18,
        9,
        4 ],
      name:"Vacanța de vară" },
    { "2014":[ 12,
        20,
        1,
        4 ],
      "2015":[ 12,
        19,
        1,
        3 ],
      name:"Vacanța de iarnă" } ] };

var data$26 = { _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=55.7780&lon=49.1303&zoom=18&addressdetails=1&accept-language=ru,en",
  PH:{ "1. Новогодние каникулы":[ 1,
      1 ],
    "2. Новогодние каникулы":[ 1,
      2 ],
    "3. Новогодние каникулы":[ 1,
      3 ],
    "4. Новогодние каникулы":[ 1,
      4 ],
    "5. Новогодние каникулы":[ 1,
      5 ],
    "6. Новогодние каникулы":[ 1,
      6 ],
    "Рождество Христово":[ 1,
      7 ],
    "8. Новогодние каникулы":[ 1,
      8 ],
    "День защитника Отечества":[ 2,
      23 ],
    "Международный женский день":[ 3,
      8 ],
    "День Победы":[ 5,
      9 ],
    "Праздник Весны и Труда":[ 5,
      1 ],
    "День народного единства":[ 11,
      4 ],
    "День России":[ 6,
      12 ] },
  "Татарстан":{ _state_code:"tatarstan",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=55.7780&lon=49.1303&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "Ураза-байрам":[ 7,
        28 ],
      "День Республики Татарстан":[ 8,
        30 ],
      "Курбан-байрам":[ 10,
        4 ],
      "День Конституции Республики Татарстан":[ 11,
        6 ] } },
  "Башкортостан":{ _state_code:"bashkortostan",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=54.1264&lon=56.5797&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "Ураза-байрам":[ 7,
        28 ],
      "Курбан-байрам":[ 10,
        4 ],
      "День Республики Башкирии":[ 10,
        11 ],
      "День Конституции Башкортостана":[ 12,
        24 ] } },
  "Чувашия":{ _state_code:"chuvashia",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=55.4871&lon=47.1659&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "День Чувашской республики":[ 6,
        24 ] } },
  "Республика Саха (Якутия)":{ _state_code:"sakha",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=62.1010&lon=129.7176&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "День Республики Саха":[ 4,
        27 ],
      "Ысыах":[ 6,
        23 ],
      "День государственности Республики Саха":[ 9,
        27 ] } },
  "Калмыкия":{ _state_code:"kalmykia",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=46.524&lon=44.731&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "Цаган Сар":[ 1,
        14 ],
      "День принятия Степного Уложения (Конституции) Республики Калмыкия":[ 4,
        5 ],
      "День рождения Будды Шакьямун":[ 6,
        6 ],
      "Зул":[ 12,
        15 ],
      "День памяти жертв депортации калмыцкого народа":[ 12,
        28 ] } },
  "Республика Бурятия":{ _state_code:"buryatia",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=52.014&lon=109.366&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "Сагаалган":[ 1,
        14 ] } },
  "Республика Карелия":{ _state_code:"karelia",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=63.832&lon=33.626&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "День Республики Карелия":[ 6,
        8 ],
      "День освобождения Карелии от фашистских захватчиков":[ 9,
        30 ] } },
  "Приволжский федеральный округ":{ _state_code:"udmurtia",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=56.8642&lon=53.2054&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "День Государственности Удмуртской Республики":[ 5,
        31 ] } },
  "Адыгея":{ _state_code:"adygea",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=44.60627&lon=40.10432&zoom=18&addressdetails=1&accept-language=ru,us",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "Ураза-байрам":[ 7,
        28 ],
      "Курбан-байрам":[ 10,
        4 ],
      "День образования Республики Адыгея":[ 10,
        5 ] } },
  "Дагестан":{ _state_code:"dagestan",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=43.118&lon=46.959&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "День Конституции Республики Дагестан":[ 7,
        26 ],
      "Ураза-байрам":[ 7,
        28 ],
      "День единства народов Дагестана":[ 9,
        15 ],
      "Курбан-байрам":[ 10,
        4 ] } },
  "Ингушетия":{ _state_code:"ingushetia",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=43.1171&lon=44.8626&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "День образования Республики Ингушетия":[ 6,
        4 ],
      "Ураза-байрам":[ 7,
        28 ],
      "Курбан-байрам":[ 10,
        4 ] } },
  "Карачаево-Черкесия":{ _state_code:"karachay_cherkess",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=43.7916&lon=41.7268&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "День возрождения карачаевского народа":[ 5,
        3 ],
      "Ураза-байрам":[ 7,
        28 ],
      "Курбан-байрам":[ 10,
        4 ] } },
  "Чечня":{ _state_code:"chechnya",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=43.451&lon=45.700&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "День мира в Чеченской Республике":[ 4,
        16 ],
      "Ураза-байрам":[ 7,
        28 ],
      "Курбан-байрам":[ 10,
        4 ] } },
  "Кабардино-Балкария":{ _state_code:"kabardino_balkaria",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=43.497&lon=43.423&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "День возрождения балкарского народа":[ 3,
        28 ],
      "Черкесский день траура":[ 5,
        21 ],
      "Ураза-байрам":[ 7,
        28 ],
      "День государственности Кабардино-Балкарской Республики":[ 9,
        1 ],
      "Курбан-байрам":[ 10,
        4 ] } },
  "Республика Алтай":{ _state_code:"altai",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=50.900&lon=86.899&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "Чага-Байрам":[ 1,
        14 ] } },
  "Республика Тыва":{ _state_code:"tuva",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=51.781&lon=94.033&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "Народный праздник Шагаа":[ 1,
        14 ],
      "День Республики Тыва":[ 8,
        15 ] } },
  "Саратовская область":{ _state_code:"saratov",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=51.335&lon=46.668&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "Радоница":[ 4,
        29 ] } },
  "Брянская область":{ _state_code:"bryansk",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=52.952&lon=33.283&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "Радоница":[ 4,
        29 ],
      "День освобождения города Брянска":[ 9,
        17 ] } },
  "Республика Коми":{ _state_code:"komi",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=64.191&lon=55.826&zoom=18&addressdetails=1&accept-language=ru,en",
    PH:{ "1. Новогодние каникулы":[ 1,
        1 ],
      "2. Новогодние каникулы":[ 1,
        2 ],
      "3. Новогодние каникулы":[ 1,
        3 ],
      "4. Новогодние каникулы":[ 1,
        4 ],
      "5. Новогодние каникулы":[ 1,
        5 ],
      "6. Новогодние каникулы":[ 1,
        6 ],
      "Рождество Христово":[ 1,
        7 ],
      "8. Новогодние каникулы":[ 1,
        8 ],
      "День защитника Отечества":[ 2,
        23 ],
      "Международный женский день":[ 3,
        8 ],
      "День Победы":[ 5,
        9 ],
      "Праздник Весны и Труда":[ 5,
        1 ],
      "День народного единства":[ 11,
        4 ],
      "День России":[ 6,
        12 ],
      "День Республики Коми":[ 8,
        22 ] } } };

var data$28 = { _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=63.1151&lon=16.5767&zoom=18&addressdetails=1&accept-language=sv,en",
  PH:{ "nyårsdagen":[ 1,
      1 ],
    "trettondedag jul":[ 1,
      6 ],
    "långfredagen":[ "easter",
      -2 ],
    "påskdagen":[ "easter",
      0 ],
    "annandag påsk":[ "easter",
      1 ],
    "första maj":[ 5,
      1 ],
    pingstdagen:[ "easter",
      49 ],
    nationaldagen:[ 6,
      6 ],
    midsommardagen:[ "nextSaturday20Jun",
      0 ],
    "alla helgons dag":[ "nextSaturday31Oct",
      0 ],
    juldagen:[ 12,
      25 ],
    "annandag jul":[ 12,
      26 ] } };

var data$30 = { PH:{ "novo leto":[ 1,
      1 ],
    "Prešernov dan, slovenski kulturni praznik":[ 2,
      8 ],
    "velikonočna nedelja":[ "easter",
      0 ],
    "velikonočni ponedeljek":[ "easter",
      1 ],
    "dan upora proti okupatorju":[ 4,
      27 ],
    "praznik dela 1":[ 5,
      1 ],
    "praznik dela 2":[ 5,
      2 ],
    "binkoštna nedelja - binkošti":[ "easter",
      49 ],
    "dan državnosti":[ 6,
      25 ],
    "Marijino vnebovzetje":[ 8,
      15 ],
    "dan reformacije":[ 10,
      31 ],
    "dan spomina na mrtve":[ 11,
      1 ],
    "božič":[ 12,
      25 ],
    "dan samostojnosti in enotnosti":[ 12,
      26 ] } };

var data$32 = { _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=48.7411522&lon=19.4528646&zoom=18&addressdetails=1&accept-language=sk,en",
  PH:{ "Deň vzniku Slovenskej republiky":[ 1,
      1 ],
    "Zjavenie Pána":[ 1,
      6 ],
    "Veľký piatok":[ "easter",
      -2 ],
    "Veľkonočný pondelok":[ "easter",
      1 ],
    "Sviatok práce":[ 5,
      1 ],
    "Deň víťazstva nad fašizmom":[ 5,
      8 ],
    "Sviatok svätého Cyrila a Metoda":[ 7,
      5 ],
    "Výročie Slovenského národného povstania":[ 8,
      29 ],
    "Deň Ústavy Slovenskej republiky":[ 9,
      1 ],
    "Sviatok Panny Márie Sedembolestnej":[ 9,
      15 ],
    "Sviatok všetkých svätých":[ 11,
      1 ],
    "Deň boja za slobodu a demokraciu":[ 11,
      17 ],
    "Štedrý deň":[ 12,
      24 ],
    "Prvý sviatok vianočný":[ 12,
      25 ],
    "Druhý sviatok vianočný":[ 12,
      26 ] } };

var data$34 = { PH:{ "Новий рік":[ 1,
      1 ],
    "Різдво":[ 1,
      7 ],
    "Міжнародний жіночий день":[ 3,
      8 ],
    "Великдень":[ "orthodox easter",
      1 ],
    "День Праці 1":[ 5,
      1 ],
    "День Праці 2":[ 5,
      2 ],
    "День Перемоги":[ 5,
      9 ],
    "День Конституції України":[ 6,
      28 ],
    "День Незалежності України":[ 8,
      24 ] } };

var data$36 = { _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=32.3673&lon=-86.2983&zoom=18&addressdetails=1&accept-language=en",
  PH:{ "New Year's Day":[ 1,
      1 ],
    "Memorial Day":[ "lastMayMonday",
      0 ],
    "Independence Day":[ 7,
      4 ],
    "Labor Day":[ "firstSeptemberMonday",
      0 ],
    "Veterans Day":[ 11,
      11 ],
    Thanksgiving:[ "firstNovemberThursday",
      21 ],
    "Christmas Day":[ 12,
      25 ] },
  Alabama:{ _state_code:"al",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=32.3673&lon=-86.2983&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Robert E. Lee/Martin Luther King Birthday":[ "firstJanuaryMonday",
        14 ],
      "George Washington/Thomas Jefferson Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Confederate Memorial Day":[ "firstAprilMonday",
        21 ],
      "Jefferson Davis' Birthday":[ "firstJuneMonday",
        0 ] } },
  Alaska:{ _state_code:"ak",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=64.5082&lon=-165.4066&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Seward's Day":[ "lastMarchMonday",
        0 ],
      "Alaska Day":[ 10,
        18 ] } },
  Arizona:{ _state_code:"az",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=34.9378&lon=-109.7565&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Dr. Martin Luther King Jr./Civil Rights Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ] } },
  Arkansas:{ _state_code:"ar",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=34.74610&lon=-92.29054&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Dr. Martin Luther King Jr. and Robert E. Lee's Birthdays":[ "firstJanuaryMonday",
        14 ],
      "George Washington's Birthday and Daisy Gatson Bates Day":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Eve":[ 12,
        24 ],
      "Christmas Day":[ 12,
        25 ] } },
  California:{ _state_code:"ca",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=40.8001&lon=-124.1698&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "César Chávez Day":[ 3,
        31 ] } },
  Colorado:{ _state_code:"co",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=39.1804&lon=-106.8218&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ] } },
  Connecticut:{ _state_code:"ct",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=41.9111&lon=-72.16014&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Lincoln's Birthday":[ 2,
        12 ],
      "Good Friday":[ "easter",
        -2 ] } },
  Delaware:{ _state_code:"de",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=38.7113&lon=-75.0978&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Day After Thanksgiving":[ "firstNovemberThursday",
        22 ],
      "Christmas Day":[ 12,
        25 ],
      "Good Friday":[ "easter",
        -2 ] } },
  "District of Columbia":{ _state_code:"dc",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=38.8953&lon=-77.0356&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Emancipation Day":[ 4,
        16 ] } },
  Florida:{ _state_code:"fl",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=25.7720&lon=-80.1324&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Friday after Thanksgiving":[ "firstNovemberThursday",
        22 ],
      "Christmas Day":[ 12,
        25 ] } },
  Georgia:{ _state_code:"ga",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=31.0823&lon=-81.4192&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Robert E. Lee's Birthday":[ "firstNovemberThursday",
        22 ],
      "Washington's Birthday":[ 12,
        24 ],
      "Christmas Day":[ 12,
        25 ],
      "Confederate Memorial Day":[ "lastAprilMonday",
        0 ] } },
  Guam:{ _state_code:"gu",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=13.4311&lon=144.6549&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      "Guam Discovery Day":[ 3,
        5 ],
      "Good Friday":[ "easter",
        -2 ],
      "Liberation Day":[ 7,
        21 ],
      "All Souls' Day":[ 11,
        2 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Lady of Camarin Day":[ 12,
        8 ],
      "Christmas Day":[ 12,
        25 ] } },
  Hawaii:{ _state_code:"hi",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=19.6423&lon=-155.4837&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Prince Jonah Kuhio Kalanianaole Day":[ 3,
        26 ],
      "Kamehameha Day":[ 6,
        11 ],
      "Statehood Day":[ "firstAugustFriday",
        14 ],
      "Election Day":[ "firstNovemberMonday",
        1 ] } },
  Idaho:{ _state_code:"id",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=47.6710&lon=-116.7671&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr.-Idaho Human Rights Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ] } },
  Illinois:{ _state_code:"il",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=42.05202&lon=-87.67594&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Lincoln's Birthday":[ 2,
        12 ],
      "Casimir Pulaski Day":[ "firstMarchMonday",
        0 ],
      "Election Day":[ "firstNovemberMonday",
        1 ] } },
  Indiana:{ _state_code:"in",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=40.4179&lon=-86.8969&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Lincoln's Birthday":[ "firstNovemberThursday",
        22 ],
      "Christmas Day":[ 12,
        25 ],
      "Good Friday":[ "easter",
        -2 ],
      "Primary Election Day":[ "firstMayMonday",
        1 ],
      "Election Day":[ "firstNovemberMonday",
        1 ] } },
  Iowa:{ _state_code:"ia",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=41.9747&lon=-91.6760&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Lincoln's Birthday":[ 2,
        12 ] } },
  Kansas:{ _state_code:"ks",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=37.6888&lon=-97.3271&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ] } },
  Kentucky:{ _state_code:"ky",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=36.8446&lon=-83.3196&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Eve":[ 12,
        24 ],
      "Christmas Day":[ 12,
        25 ],
      "New Year's Eve":[ 12,
        31 ],
      "Good Friday":[ "easter",
        -2 ] } },
  Louisiana:{ _state_code:"la",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=30.1800&lon=-90.1787&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Mardi Gras":[ "easter",
        -47 ],
      "Good Friday":[ "easter",
        -2 ],
      "Election Day":[ "firstNovemberMonday",
        1 ] } },
  Maine:{ _state_code:"me",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=44.7903&lon=-68.7829&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Patriots' Day":[ "firstAprilMonday",
        14 ] } },
  Maryland:{ _state_code:"md",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=38.3206&lon=-75.6213&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Native American Heritage Day":[ "firstNovemberThursday",
        22 ],
      "Christmas Day":[ 12,
        25 ] } },
  Massachusetts:{ _state_code:"ma",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=42.3550&lon=-71.0645&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Patriots' Day":[ "firstAprilMonday",
        14 ] } },
  Michigan:{ _state_code:"mi",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=42.7153&lon=-84.4995&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Eve":[ 12,
        24 ],
      "Christmas Day":[ 12,
        25 ],
      "New Year's Eve":[ 12,
        31 ] } },
  Minnesota:{ _state_code:"mn",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=47.8278&lon=-90.0484&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ] } },
  Mississippi:{ _state_code:"ms",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=30.3986&lon=-88.8820&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King's and Robert E. Lee's Birthdays":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Confederate Memorial Day":[ "lastAprilMonday",
        0 ] } },
  Missouri:{ _state_code:"mo",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=37.0799&lon=-94.5060&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Truman Day":[ 5,
        8 ] } },
  Montana:{ _state_code:"mt",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=48.3866&lon=-115.5498&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Election Day":[ "firstNovemberMonday",
        1 ],
      "Christmas Eve":[ 12,
        24 ],
      "New Year's Eve":[ 12,
        31 ] } },
  Nebraska:{ _state_code:"ne",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=41.2587&lon=-95.9374&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Arbor Day":[ "lastAprilFriday",
        0 ] } },
  Nevada:{ _state_code:"nv",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=36.1215&lon=-115.1704&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Nevada Day":[ "lastOctoberFriday",
        0 ],
      "Family Day":[ "firstNovemberThursday",
        22 ] } },
  "New Hampshire":{ _state_code:"nh",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=43.5628&lon=-71.9447&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Civil Rights Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Day after Thanksgiving":[ "firstNovemberThursday",
        22 ],
      "Christmas Day":[ 12,
        25 ],
      "Election Day":[ "firstNovemberMonday",
        1 ] } },
  "New Jersey":{ _state_code:"nj",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=39.9475&lon=-75.1066&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Lincoln's Birthday":[ 2,
        12 ],
      "Good Friday":[ "easter",
        -2 ],
      "Election Day":[ "firstNovemberMonday",
        1 ] } },
  "New Mexico":{ _state_code:"nm",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=34.0790&lon=-107.6179&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Day after Thanksgiving":[ "firstNovemberThursday",
        22 ],
      "Christmas Day":[ 12,
        25 ] } },
  "New York":{ _state_code:"ny",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=42.8126&lon=-73.9379&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Lincoln's Birthday":[ 2,
        12 ],
      "Election Day":[ "firstNovemberMonday",
        1 ] } },
  "North Carolina":{ _state_code:"nc",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=35.7802&lon=-78.6394&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Day after Thanksgiving":[ "firstNovemberThursday",
        22 ],
      "Christmas Eve":[ 12,
        24 ],
      "Christmas Day":[ 12,
        25 ],
      "Day after Christmas":[ 12,
        26 ],
      "Good Friday":[ "easter",
        -2 ] } },
  "North Dakota":{ _state_code:"nd",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=48.1459&lon=-103.6232&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ] } },
  Ohio:{ _state_code:"oh",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=41.4846&lon=-82.6852&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ] } },
  Oklahoma:{ _state_code:"ok",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=36.0514&lon=-95.7892&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Day after Thanksgiving":[ "firstNovemberThursday",
        22 ],
      "Christmas Day":[ 12,
        25 ] } },
  Oregon:{ _state_code:"or",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=45.3732&lon=-121.6959&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ] } },
  Pennsylvania:{ _state_code:"pa",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=40.3340&lon=-75.9300&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Flag Day":[ 6,
        14 ] } },
  "Puerto Rico":{ _state_code:"pr",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=18.4364&lon=-66.1188&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "Día de Año Nuevo":[ 1,
        1 ],
      "Día de Reyes":[ 1,
        6 ],
      "Natalicio de Eugenio María de Hostos":[ "firstJanuaryMonday",
        7 ],
      "Natalicio de Martin Luther King, Jr.":[ "firstJanuaryMonday",
        14 ],
      "Día de los Presidentes":[ "firstFebruaryMonday",
        14 ],
      "Día de la Abolición de Esclavitud":[ 3,
        22 ],
      "Viernes Santo":[ "easter",
        -2 ],
      "Natalicio de José de Diego":[ "firstAprilMonday",
        14 ],
      "Recordación de los Muertos de la Guerra":[ "lastMayMonday",
        0 ],
      "Día de la Independencia":[ 7,
        4 ],
      "Constitución de Puerto Rico":[ 7,
        25 ],
      "Natalicio de Dr. José Celso Barbosa":[ 7,
        27 ],
      "Día del Trabajo":[ "firstSeptemberMonday",
        0 ],
      "Día de la Raza Descubrimiento de América":[ "firstOctoberMonday",
        7 ],
      "Día del Veterano":[ 11,
        11 ],
      "Día del Descubrimiento de Puerto Rico":[ 11,
        19 ],
      "Día de Acción de Gracias":[ "firstNovemberThursday",
        21 ],
      "Noche Buena":[ 12,
        24 ],
      "Día de Navidad":[ 12,
        25 ] } },
  "Rhode Island":{ _state_code:"ri",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=41.8251&lon=-71.4194&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Victory Day":[ "firstAugustMonday",
        7 ] } },
  "South Carolina":{ _state_code:"sc",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=32.7878&lon=-79.9392&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Confederate Memorial Day":[ 5,
        10 ] } },
  "South Dakota":{ _state_code:"sd",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=43.7148&lon=-98.0249&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Native American Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ] } },
  Tennessee:{ _state_code:"tn",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=35.1438&lon=-90.0231&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Eve":[ 12,
        24 ],
      "Christmas Day":[ 12,
        25 ],
      "Good Friday":[ "easter",
        -2 ] } },
  Texas:{ _state_code:"tx",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=30.2655&lon=-97.7559&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Friday after Thanksgiving":[ "firstNovemberThursday",
        22 ],
      "Christmas Eve":[ 12,
        24 ],
      "Christmas Day":[ 12,
        25 ],
      "Day after Christmas":[ 12,
        26 ] } },
  "United States Virgin Islands":{ _state_code:"vi",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=18.3433&lon=-64.9347&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Virgin Islands-Puerto Rico Friendship Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Three Kings Day":[ 1,
        6 ],
      "Transfer Day":[ 3,
        31 ],
      "Holy Thursday":[ "easter",
        -3 ],
      "Good Friday":[ "easter",
        -2 ],
      "Easter Monday":[ "easter",
        1 ],
      "Emancipation Day":[ 7,
        3 ],
      "Hurricane Supplication Day":[ "firstJulyMonday",
        21 ],
      "Hurricane Thanksgiving":[ 10,
        25 ],
      "Liberty Day":[ 11,
        1 ],
      "Christmas Second Day":[ 12,
        26 ],
      "New Year's Eve":[ 12,
        31 ] } },
  Utah:{ _state_code:"ut",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=40.5888&lon=-111.6378&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Pioneer Day":[ 7,
        24 ] } },
  Vermont:{ _state_code:"vt",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=44.2597&lon=-72.5800&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Town Meeting Day":[ "firstMarchTuesday",
        0 ],
      "Battle of Bennington":[ "firstAugustMonday",
        14 ] } },
  Virginia:{ _state_code:"va",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=36.9454&lon=-76.2888&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Lee-Jackson Day":[ "firstJanuaryMonday",
        11 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ] } },
  Washington:{ _state_code:"wa",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=46.8598&lon=-121.7256&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ] } },
  "West Virginia":{ _state_code:"wv",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=38.3686&lon=-81.6070&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "West Virginia Day":[ 6,
        20 ],
      "Lincoln's Day":[ "firstNovemberThursday",
        22 ] } },
  Wisconsin:{ _state_code:"wi",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=45.8719&lon=-89.6930&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ],
      "Primary Election Day":[ "firstAugustTuesday",
        7 ],
      "Election Day":[ "firstNovemberMonday",
        1 ] } },
  Wyoming:{ _state_code:"wy",
    _nominatim_url:"https://nominatim.openstreetmap.org/reverse?format=json&lat=42.8590&lon=-106.3126&zoom=18&addressdetails=1&accept-language=en",
    PH:{ "New Year's Day":[ 1,
        1 ],
      "Martin Luther King, Jr. Day":[ "firstJanuaryMonday",
        14 ],
      "Washington's Birthday":[ "firstFebruaryMonday",
        14 ],
      "Memorial Day":[ "lastMayMonday",
        0 ],
      "Independence Day":[ 7,
        4 ],
      "Labor Day":[ "firstSeptemberMonday",
        0 ],
      "Columbus Day":[ "firstOctoberMonday",
        7 ],
      "Veterans Day":[ 11,
        11 ],
      Thanksgiving:[ "firstNovemberThursday",
        21 ],
      "Christmas Day":[ 12,
        25 ] } } };



var holiday_definitions = Object.freeze({
	at: data,
	be: data$2,
	br: data$4,
	ca: data$6,
	cz: data$8,
	de: data$10,
	dk: data$12,
	fr: data$14,
	hu: data$16,
	it: data$18,
	nl: data$20,
	pl: data$22,
	ro: data$24,
	ru: data$26,
	se: data$28,
	si: data$30,
	sk: data$32,
	ua: data$34,
	us: data$36
});

var data$38 = { "assuming ok for ko":{ daytime:"sunrise-sunset",
    spring:"Mar-May",
    summer:"Jun-Aug",
    autumn:"Sep-Nov",
    winter:"Dec-Feb",
    _:"-",
    "=":"-",
    "frühling":"Mar-May",
    "frühjahr":"Mar-May",
    sommer:"Jun-Aug",
    herbst:"Sep-Nov",
    gesloten:"off",
    feestdag:"PH",
    feestdagen:"PH",
    m:"Mo",
    w:"We",
    f:"Fr" },
  "please use English written ok for ko":{ "(?:an )?feiertag(?:s|en?)?":"PH" },
  "please use off for ko":{ "ruhetage?":"off",
    geschlossen:"off",
    geschl:"off",
    except:"off" },
  "please use ok for workday":{ wd:"Mo-Fr",
    "on work days?":"Mo-Fr",
    "weekdays?":"Mo-Fr",
    "werktags?":"Mo-Sa",
    vardagar:"Mo-Fr" },
  "omit hour keyword":{ h:"" },
  "omit ko":{ season:"",
    hs:"",
    hrs:"",
    hours:"",
    uhr:"",
    "geöffnet":"",
    zwischen:"",
    ist:"",
    durchgehend:"",
    "öffnungszeit(?:en)?:?":"" },
  "omit tag key":{ "opening_hours\\s*=":"" },
  "omit wrong keyword open end":{ from:"",
    ab:"",
    von:"" },
  "assuming open end for ko":{ "(?:bis|till?|-|–)? ?(?:open ?end|late)":"+" },
  "please use ok for uncertainty":{ "~":"-",
    "～":"-" },
  "please use fallback rule":{ otherwise:"||" },
  "please use ok for missing data":{ "\\?":"" },
  "please use ok for ko":{ "→":"-",
    "−":"-",
    "—":"-",
    "ー":"-",
    to:"-",
    "до":"-",
    a:"-",
    as:"-",
    "á":"-",
    "ás":"-",
    "às":"-",
    ate:"-",
    "till?":"-",
    until:"-",
    through:"-",
    and:",",
    "&":",",
    "：":":",
    "'":"\"",
    always:"24/7",
    "always open":"24/7",
    "always closed":"closed",
    nonstop:"24/7",
    "24x7":"24/7",
    anytime:"24/7",
    "all day":"24/7",
    daily:"Mo-Su",
    everyday:"Mo-Su",
    "every day":"Mo-Su",
    "all days":"Mo-Su",
    "7j/7":"Mo-Su",
    "7/7":"Mo-Su",
    "7days":"Mo-Su",
    "7 days":"Mo-Su",
    "7 days a week":"Mo-Su",
    "7 days/week":"Mo-Su",
    "24 hours 7 days a week":"24/7",
    "24 hours":"00:00-24:00",
    midday:"12:00",
    midnight:"00:00",
    "(?:public )?holidays?":"PH",
    "(?:one )?day after public holiday":"PH +1 day",
    "(?:one )?day before public holiday":"PH -1 day",
    "school ?holidays?":"SH",
    "weekends?":"Sa,Su",
    daylight:"sunrise-sunset",
    "on(?:_| )?appointments?":"\"on appointment\"",
    "by(?:_| )?appointments?":"\"by appointment\"",
    "nach(?: |_)vereinbarung":"\"Nach Vereinbarung\"",
    "nach(?: |_)absprache":"\"Nach Absprache\"",
    bis:"-",
    "täglich":"Mo-Su",
    "(?:schul)?ferien":"SH",
    "(?:an|nur)? ?sonn-?(?: und |/)feiertag(?:s|en?)?":"PH,Su",
    und:",",
    u:",",
    auch:",",
    "fermé":"off",
    et:",",
    "à":"-",
    "jours fériés":"PH",
    sundown:"sunset",
    "morgendämmerung":"dawn",
    "abenddämmerung":"dusk",
    sonnenaufgang:"sunrise",
    sonnenuntergang:"sunset",
    ostern:"easter" },
  "please use English abbreviation ok for so":{ so:"Su" },
  "please use English abbreviation ok for ko":{ sun:"Su",
    "sundays?":"Su",
    mon:"Mo",
    "mondays?":"Mo",
    "tues?":"Tu",
    "tuesdays?":"Tu",
    "weds?":"We",
    "wednesdays?":"We",
    thu:"Th",
    "thurs?":"Th",
    "thursdays?":"Th",
    fri:"Fr",
    "fridays?":"Fr",
    sat:"Sa",
    "saturdays?":"Sa",
    son:"Su",
    "sonn-":"Su",
    "sonntags?":"Su",
    "montags?":"Mo",
    di:"Tu",
    "die?":"Tu",
    "dienstags?":"Tu",
    mi:"We",
    "mit?":"We",
    "mittwochs?":"We",
    "don?":"Th",
    "donnerstags?":"Th",
    fre:"Fr",
    "freitags?":"Fr",
    sam:"Sa",
    "samstags?":"Sa",
    dim:"Su",
    dimanche:"Su",
    "lun?":"Mo",
    lundi:"Mo",
    mardi:"Tu",
    mer:"We",
    mercredi:"We",
    "jeu?":"Th",
    jeudi:"Th",
    "ven?":"Fr",
    vendredi:"Fr",
    samedi:"Sa",
    "zon?":"Su",
    zontag:"Su",
    zondag:"Su",
    maandag:"Mo",
    din:"Tu",
    dinsdag:"Tu",
    "woe?":"We",
    woensdag:"We",
    donderdag:"Th",
    "vri?":"Fr",
    vrijdag:"Fr",
    "zat?":"Sa",
    zaterdag:"Sa",
    "neděle":"Su",
    ne:"Su",
    "pondělí":"Mo",
    po:"Mo",
    "úterý":"Tu",
    "út":"Tu",
    "středa":"We",
    st:"We",
    "čtvrtek":"Th",
    "čt":"Th",
    "pátek":"Fr",
    "pá":"Fr",
    sobota:"Sa",
    martes:"Su",
    "miércoles":"Mo",
    jueves:"Tu",
    viernes:"We",
    "sábado":"Th",
    domingo:"Fr",
    lunes:"Sa",
    selasa:"Su",
    rabu:"Mo",
    kami:"Tu",
    jumat:"We",
    sabtu:"Th",
    minggu:"Fr",
    senin:"Sa",
    "söndag":"Su",
    "söndagar":"Su",
    "måndag":"Mo",
    ma:"Mo",
    tisdag:"Tu",
    onsdag:"We",
    torsdag:"Th",
    fredag:"Fr",
    "lördag":"Sa",
    "lördagar":"Sa",
    niedziela:"Su",
    niedz:"Su",
    n:"Su",
    ndz:"Su",
    "poniedziałek":"Mo",
    poniedzialek:"Mo",
    pon:"Mo",
    pn:"Mo",
    wtorek:"Tu",
    wt:"Tu",
    "środa":"We",
    sroda:"We",
    "śr":"We",
    sr:"We",
    czwartek:"Th",
    czw:"Th",
    cz:"Th",
    "piątek":"Fr",
    piatek:"Fr",
    pt:"Fr",
    sob:"Sa",
    "воскресенье":"Su",
    "Вс":"Su",
    "voskresen'ye":"Su",
    "понедельник":"Mo",
    "Пн":"Mo",
    "ponedel'nik":"Mo",
    "вторник":"Tu",
    vtornik:"Tu",
    "среда":"We",
    sreda:"We",
    "четверг":"Th",
    chetverk:"Th",
    "пятница":"Fr",
    pyatnitsa:"Fr",
    "суббота":"Sa",
    subbota:"Sa",
    "søndag":"Su",
    mandag:"Mo",
    tirsdag:"Tu",
    "lørdag":"Sa",
    "jänner":"Jan",
    january:"Jan",
    february:"Feb",
    march:"Mar",
    april:"Apr",
    "june?":"Jun",
    "july?":"Jul",
    august:"Aug",
    september:"Sep",
    sept:"Sep",
    october:"Oct",
    november:"Nov",
    december:"Dec",
    januar:"Jan",
    februar:"Feb",
    "märz?":"Mar",
    maerz:"Mar",
    mai:"May",
    juni:"Jun",
    juli:"Jul",
    okt:"Oct",
    oktober:"Oct",
    dez:"Dec",
    dezember:"Dec",
    janvier:"Jan",
    "février":"Feb",
    "fév":"Feb",
    mars:"Mar",
    avril:"Apr",
    avr:"Apr",
    juin:"Jun",
    juillet:"Jul",
    "août":"Aug",
    "aoû":"Aug",
    septembre:"Sep",
    octobre:"Oct",
    novembre:"Nov",
    "décembre":"Dec",
    januari:"Jan",
    februari:"Feb",
    maart:"Mar",
    mei:"May",
    augustus:"Aug" },
  "please use ok for similar looking ko":{ "оff":"off" },
  "please use 24 hours time for ko":{ pm:"pm",
    "p.m.":"pm",
    "рм":"pm",
    am:"am",
    "a.m.":"am",
    "ам":"am" },
  "please use restriction comment time for ko":{ damen:"open \"Damen\"",
    herren:"open \"Herren\"" },
  "please use ok for typographically correct":{ "–":"-",
    "„":"\"",
    "“":"\"",
    "”":"\"",
    "«":"\"",
    "»":"\"",
    "‚":"\"",
    "‘":"\"",
    "’":"\"",
    "「":"\"",
    "」":"\"",
    "『":"\"",
    "』":"\"" } };

var data$39 = { "unexpected token":"Unexpected token: \"__token__\" This means that the syntax is not valid at that point or it is currently not supported.",
  "no string":"The value (first parameter) is not a string.",
  nothing:"The value contains nothing meaningful which can be parsed.",
  "nothing useful":"This rule does not contain anything useful. Please remove this empty rule.",
  "programmers joke":"Might it be possible that you are a programmer and adding a semicolon after each statement is hardwired in your muscle memory ;) ? The thing is that the semicolon in the opening_hours syntax is defined as rule separator. So for compatibility reasons you should omit this last semicolon.",
  "interpreted as year":"The number __number__ will be interpreted as year. This is probably not intended. Times can be specified as \"12:00\".",
  "rule before fallback empty":"Rule before fallback rule does not contain anything useful",
  "hour min separator":"Please use \":\" as hour/minute-separator",
  "warnings severity":"The parameter optional_conf_parm[\"warnings_severity\"] must be an integer number between 0 and 7 (inclusive). Given __severity__, expected one of the following numbers: __allowed__.",
  "optional conf parm type":"The optional_conf_parm parameter is of unknown type. Given __given__",
  "conf param tag key missing":"The optional_conf_parm[\"tag_key\"] is missing, required by optional_conf_parm[\"map_value\"].",
  "conf param mode invalid":"The optional_conf_parm[\"mode\"] parameter is a invalid number. Gave __given__, expected one of the following numbers: __allowed__.",
  "conf param unkown type":"The optional_conf_parm[\"__key__\"] parameter is of unknown type. Given __given__, expected __expected__.",
  "library bug":"An error occurred during evaluation of the value \"__value__\". Please file a bug report or pull request: __url__.__message__",
  "library bug PR only":"An error occurred during evaluation of the value \"__value__\". Please submit a pull request: __url__.__message__",
  "use multi":"You have used __count__ __part2__ Rules can be separated by \";\".",
  "selector multi 2a":"__what__ in one rule. You may only use one in one rule.",
  "selector multi 2b":"not connected __what__ in one rule. This is probably an error. Equal selector types can (and should) always be written in conjunction separated by comma. Example for time ranges \"12:00-13:00,15:00-18:00\". Example for weekdays \"Mo-We,Fr\".",
  "selector state":"state keywords",
  comments:"comments",
  "holiday ranges":"holiday ranges",
  months:"months",
  weekdays:"weekdays",
  ranges:"ranges",
  "default state":"This rule which changes the default state (which is closed) for all following rules is not the first rule. The rule will overwrite all previous rules. It can be legitimate to change the default state to open for example and then only specify for which times the facility is closed.",
  vague:"This rule is not very explicit because there is no time selector being used. Please add a time selector to this rule or use a comment to make it more explicit.",
  "empty comment":"You have used an empty comment. Please either write something in the comment or use the keyword unknown instead.",
  separator_for_readability:"You have used the optional symbol <separator_for_readability> in the wrong place. Please check the syntax specification to see where it could be used or remove it.",
  "strange 24/7":"You used 24/7 in a way that is probably not interpreted as \"24 hours 7 days a week\". For correctness you might want to use \"open\" or \"closed\" for this rule and then write your exceptions which should achieve the same goal and is more clear e.g. \"open; Mo 12:00-14:00 off\".",
  "public holiday":"There was no PH (public holiday) specified. This is not very explicit.__part2__ Please either append a \"PH off\" rule if the amenity is closed on all public holidays or use something like \"Sa,Su,PH 12:00-16:00\" to say that on Saturdays, Sundays and on public holidays the amenity is open 12:00-16:00. If the amenity is open everyday including public holidays then you can make this explicit by writing \"Mo-Su,PH\". If you are not certain try to find it out. If you can’t then do not add PH to the value and ignore this warning.",
  "public holiday part2":" Unfortunately the tag key (e.g. \"opening_hours\", or \"lit\") is unknown to opening_hours.js. This warning only applies to the key __keys__. If your value is for that key than read on. If not you can ignore the following.",
  switched:"The selector \"__first__\" was switched with the selector \"__second__\" for readablitity and compatibiltity reasons.",
  "no colon after":"Please don’t use \":\" after __token__.",
  "number -5 to 5":"Number between -5 and 5 (except 0) expected.",
  "one weekday constraint":"You can not use more than one constrained weekday in a month range",
  "range constrained weekdays":"You can not use a range of constrained weekdays in a month range",
  expected:"\"__symbol__\" expected.",
  "range zero":"You can not use __type__ ranges with period equals zero.",
  "period one year+":"Please don’t use __type__ ranges with period equals one. If you want to express that a facility is open starting from a year without limit use \"<year>+\".",
  "period one":"Please don’t use __type__ ranges with period equals one.",
  "month 31":"The day for __month__ must be between 1 and 31.",
  "month 30":"Month __month__ doesn't have 31 days. The last day of __month__ is day 30.",
  "month feb":"Month __month__ either has 28 or 29 days (leap years).",
  "point in time":"hyphen (-) or open end (+) in time range __calc__expected. For working with points in time, the mode for __libraryname__ has to be altered. Maybe wrong tag?",
  calculation:"calculation",
  "time range continue":"Time range does not continue as expected",
  "period continue":"Time period does not continue as expected. Example \"/01:30\".",
  "time range mode":"__libraryname__ is running in \"time range mode\". Found point in time.",
  "point in time mode":"__libraryname__ is running in \"points in time mode\". Found time range.",
  "outside current day":"Time range starts outside of the current day",
  "two midnights":"Time spanning more than two midnights not supported",
  "without minutes":"Time range without minutes specified. Not very explicit! Please use this syntax instead \"__syntax__\".",
  "outside day":"Time range starts outside of the current day",
  "zero calculation":"Adding zero in a variable time calculation does not change the variable time. Please omit the calculation (example: \"sunrise-(sunset-00:00)\").",
  "calculation syntax":"Calculation with variable time is not in the right syntax",
  missing:"Missing \"__symbol__\"",
  "(time)":"(time)",
  "bad range":"Bad range: __from__-__to__",
  "] or more numbers":"\"]\" or more numbers expected.",
  "additional rule no sense":"An additional rule does not make sense here. Just use a \";\" as rule separator. See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:additional_rule_separator",
  "unexpected token weekday range":"Unexpected token in weekday range: __token__",
  "max differ":"There should be no reason to differ more than __maxdiffer__ days from a __name__. If so tell us …",
  "adding 0":"Adding 0 does not change the date. Please omit this.",
  "unexpected token holiday":"Unexpected token (holiday parser): __token__",
  "no holiday definition":"There are no holidays (__name__) defined for country __cc__.",
  "no holiday definition state":"There are no holidays (__name__) defined for country __cc__ and state __state__.",
  "no country code":"Country code missing which is needed to select the correct holidays (see README how to provide it)",
  "no SH definition":"School holiday __name__not defined for the year __year__.",
  "movable no formula":"Movable day __name__ can not not be calculated. Please add the formula how to calculate it.",
  "movable not in year":"The movable day __name__ plus __days__ days is not in the year of the movable day anymore. Currently not supported.",
  "year range one year":"A year range in which the start year is equal to the end year does not make sense. Please remove the end year. E.g. \"__year__ May 23\"",
  "year range reverse":"A year range in which the start year is greater than the end year does not make sense. Please turn it over.",
  "year past":"The year is in the past.",
  "unexpected token year range":"Unexpected token in year range: __token__",
  "week range reverse":"You have specified a week range in reverse order or leaping over a year. This is (currently) not supported.",
  "week negative":"You have specified a week date less then one. A valid week date range is 1-53.",
  "week exceed":"You have specified a week date greater then 53. A valid week date range is 1-53.",
  "week period less than 2":"You have specified a week period which is less than two. If you want to select the whole range from week __weekfrom__ to week __weekto__ then just omit the \"/__period__\".",
  "week period greater than 26":"You have specified a week period which is greater than 26. 26.5 is the half of the maximum 53 week dates per year so a week date period greater than 26 would only apply once per year. Please specify the week selector as \"week __weekfrom__\" if that is what you want to express.",
  "unexpected token week range":"Unexpected token in week range: __token__",
  "unexpected token month range":"Unexpected token in month range: __token__",
  "day range reverse":"Range in wrong order. From day is greater than to day.",
  "open end":"Specified as open end. Closing time was guessed.",
  "date parameter needed":"Date parameter needed.",
  "assuming ok for ko":"Assuming \"__ok__\" for \"__ko__\".",
  "please use ok for ko":"Please use notation \"__ok__\" for \"__ko__\".",
  "please use ok for similar looking ko":"Please use notation \"__ok__\" for \"__ko__\". Those characters look very similar but are not the same!",
  "rant degree sign used for zero":"Note that this is not a (superscript) zero but a degree sign which is misused as zero. A superscript zero is defined in Unicode (°) and would have been more appropriate/uniform here. But note that the use of none-ASCII digits is not allowed.",
  "please use English written ok for ko":"Please use the English written \"__ok__\" for \"__ko__\".",
  "please use English abbreviation ok for ko":"Please use the English abbreviation \"__ok__\" for \"__ko__\".",
  "please use English abbreviation ok for so":"Please use the English abbreviation \"__ok__\" for \"__ko__\". Note that it might also mean Saturday in Polish.",
  "please use off for ko":"Please use \"__ok__\" for \"__ko__\". Example: \"Mo-Fr 08:00-12:00; Tu off\".",
  "please use ok for workday":"Assuming \"__ok__\" for \"__ko__\". Please avoid using \"workday\": https://wiki.openstreetmap.org/wiki/Talk:Key:opening_hours#need_syntax_for_holidays_and_workingdays",
  "omit hour keyword":"Please omit \"__ko__\" or use a colon instead. Example: \"12:00-14:00\".",
  "omit ko":"Please omit \"__ko__\".",
  "omit tag key":"Please omit \"__ko__\". The tag key must not be in the tag value.",
  "omit wrong keyword open end":"Please omit \"__ko__\". The tag key must not be in the tag value.",
  "assuming open end for ko":"Assuming \"__ok__\" (open end time) for \"__ko__\". Example: \"12:00+\".",
  "please use ok for uncertainty":"Please use notation \"__ok__\" for \"__ko__\". If there is reason to suspect uncertainty consider adding a comment. Example: 12:00-14:00 \"only on sunshine\".",
  "please use fallback rule":"Please use notation \"__ok__\" (Fallback rule) for \"__ko__\". Example: Mo-Fr 12:00-14:00; PH off || \"by appointment\"",
  "please use ok for missing data":"Please consider adding a FIXME tag instead.",
  "please use 24 hours time for ko":"Please use time format in 24 hours notation instead of the legacy 12 hours variant. If the 12 hours variant is used you might have to convert the hours to the 24 hours notation.",
  "please use restriction comment time for ko":"It looks like you might want to define additional restrictions. If that is the case and they can not be expressed by other syntax elements then you could use a comment together with the `open` keyword. Example: open \"female only\"",
  "please use ok for typographically correct":"Please use notation \"__ok__\" for \"__ko__\". Although using \"__ko__\" is typographical correct, it is not defined in the opening_hours syntax. Correct typography should be done on application level …" };

var data$40 = { en:{ opening_hours:{ pretty:{ off:"closed",
        SH:"school holidays",
        PH:"public holidays" } } },
  de:{ opening_hours:{ texts:{ "unexpected token":"Unerwartetes Zeichen: \"__token__\" Das bedeutet, dass die Syntax an dieser Stelle nicht erkannt werden konnte.",
        "no string":"Der Wert (erster Parameter) ist kein String",
        nothing:"Der Wert enthält nichts, was ausgewertet werden könnte.",
        "nothing useful":"Diese Regel enthält nichts nützliches. Bitte entferne diese leere Regel.",
        "programmers joke":"Kann es sein, dass du ein Programmierer bist und das Hinzufügen eines Semikolons nach jedem Statement ist zwanghaft ;) ? Es ist so, dass das Semikolon in der opening_hours-Syntax als Trenner für Regeln definiert ist. Bitte verzichte an dieser Stelle auf ein Semikolon.",
        "interpreted as year":"Die Zahl __number__ wird als Jahr interpretiert. Vermutlich ist das nicht beabsichtigt. Uhrzeiten werden als \"12:00\" angegeben.",
        "rule before fallback empty":"Die Regel vor der Fallback-Regel enthält nichts nützliches",
        "hour min separator":"Bitte benutze \":\" als Stunden/Minuten-Trenner",
        "warnings severity":"Der Parameter optional_conf_parm[\"warnings_severity\"] muss eine ganze Zahl zwischen (einschließlich) 0 und (einschließlich) 7 sein. Gegeben: __severity__, erwartet: Eine der Zahlen: __allowed__.",
        "optional conf parm type":"Der optional_conf_parm Parameter hat einen unbekannten Typ. Gegeben: __given__",
        "conf param tag key missing":"Der optional_conf_parm[\"tag_key\"] fehlt, ist aber notwendig wegen optional_conf_parm[\"map_value\"].",
        "conf param mode invalid":"Der optional_conf_parm[\"mode\"]-Parameter ist eine ungültige Zahl. Gegeben: __given__, erwartet: Eine der Zahlen: __allowed__.",
        "conf param unkown type":"Der optional_conf_parm[\"__key__\"] Parameter hat einen unbekannten Typ. Gegeben: __given__, erwartet: __expected__.",
        "library bug":"Bei der Auswertung des Wertes \"__value__\" ist ein Fehler aufgetreten. Bitte melde diesen Fehler oder korrigiere diesen mittels eines Pull Requests oder Patches: __url__.__message__",
        "library bug PR only":"Bei der Auswertung des Wertes \"__value__\" ist ein Fehler aufgetreten. Du kannst dies korrigieren, indem du das Problem löst und in Form eines Pull Requests oder Patches zum Projekt beiträgst: __url__.__message__",
        "use multi":"Du hast __count__ __part2__ Einzelne Regeln können mit \";\" getrennt werden.",
        "selector multi 2a":"__what__ in einer Regel benutzt. Du kannst nur einen davon je Regel verwenden",
        "selector multi 2b":"nicht verbundene __what__ in einer Regel benutzt. Das ist vermutlich ein Fehler. Gleiche Selektoren können (und sollten) immer zusammen und durch Kommas getrennt geschrieben werden. Beispiel für Zeitspannen \"12:00-13:00,15:00-18:00\". Beispiel für Wochentage \"Mo-We,Fr\".",
        "selector state":"Status-Schlüsselwörter (offen, geschlossen)",
        comments:"Kommentare",
        months:"Monate",
        weekdays:"Wochentage",
        ranges:"Zeitspannen",
        "default state":"Diese Regel, welche den Standard-Status (d.h. geschlossen) für alle folgenden Regeln ändert, ist nicht die erste Regel. Diese Regel überschreibt alle vorherigen Regeln. Es kann legitim sein, den Standard-Status z.B. auf geöffnet festzulegen und dann nur die Zeiten, zu denen geschlossen ist, anzugeben.",
        vague:"Diese Regel ist nicht sehr aussagekräftig, da keine Zeit angegeben wurde. Bitte füge eine Zeitangabe oder einen Kommentar hinzu, um dies zu verbessern.",
        "empty comment":"Du hast einen leeren Kommentar verwendet.\" Bitte schreibe entweder einen Kommentar-Text oder benutze stattdessen das Schlüsselwort \"unknown\".",
        separator_for_readability:"Du hast das optionale Symbol <separator_for_readability> an der falschen Stelle benutzt. Bitte lies die Syntax-Spezifikation um zu sehen, wo es verwendet werden kann, oder entferne es.",
        "strange 24/7":"Du hast 24/7 in einer Art verwendet, welche wahrscheinlich nicht als \"24 Stunden, 7 Tage die Woche\" interpretiert wird. Der Richtigkeit halber solltest du \"open\" oder \"closed\" für diese Regel verwenden und dann die Ausnahmen angeben um das selbe Ziel zu erreichen. So ist es klarer – zum Beispiel \"open; Mo 12:00-14:00 off\".",
        "public holiday":"Es wurde keine Regel für \"PH\" (feiertags) angegeben. Dies ist nicht sehr aussagekräftig.__part2__ Bitte füge die Regel \"PH off\" an, wenn die Einrichtung an allen Feiertagen geschlossen ist oder schreibe \"Sa,Su,PH 12:00-16:00\" um auszudrücken, dass Samstags, Sonntags und feiertags von 12:00-16:00 geöffnet ist. Falls die Einrichtung täglich und an Feiertagen geöffnet ist, kann dies explizit mittels \"Mo-Su,PH\" ausgedrückt werden. Wenn du dir im Unklaren bist, versuche die Öffnungszeit zu klären. Falls das nicht möglich ist, lass die Angabe weg und ignoriere diese Warnung.",
        "public holiday part2":" Leider ist der \"tag key\" (beispielsweise \"opening_hours\", oder \"lit\") in opening_hours.js nicht bekannt. Diese Warnung betrifft nur die Keys: __keys__. Falls deine Angabe nicht für einen dieser ist, ignoriere bitte folgenden Hinweis:",
        switched:"Der Selektor \"__first__\" wurde für eine bessere Lesbarkeit und der Vollständigkeit halber mit \"__second__\" getauscht.",
        "no colon after":"Bitte Benutze kein \":\" nach dem Token __token__.",
        "number -5 to 5":"Zahl zwischen -5 und 5 (außer 0) erwartet.",
        "one weekday constraint":"Du kannst höchstens einen beschränkten Wochentag in einer Monats-Spanne verwenden",
        "range constrained weekdays":"Du kannst keine Wochentags-Spanne als Beschränkung in einer Monats-Spanne verwenden",
        expected:"\"__symbol__\" erwartet.",
        "range zero":"Du kannst keine __type__-Spanne mit Periode \"0\" verwenden.",
        "period one year+":"Bitte verwende keine __type__-Spannen mit Periode \"1\". Wenn du ausdrücken willst, das eine Einrichtung ab einem bestimmten Jahr immer offen ist, benutze bitte \"<year>+\".",
        "period one":"Bitte verwende keine __type__-Spannen mit Periode \"1\".",
        "month 31":"Die Tagesangabe für __month__ muss zwischen 1 und 31 liegen.",
        "month 30":"Der Monat __month__ hat keine 31 Tage. Der letzte Tag von __month__ ist Tag 30.",
        "month feb":"\"Der Monat __month__ hat entweder 28 oder 29 Tage (Schaltjahre).\"",
        "point in time":"Erwarte Bindestrich (-) oder offenes Ende (+) in der Zeitspanne __calc__. Um mit Zeitpunkten zu arbeiten, muss der Modus für  __libraryname__ umgestellt werden. Vielleicht falsches OSM-tag verwendet?",
        calculation:"Berechnung",
        "time range continue":"Die Zeitspanne geht nicht wie erwartet weiter",
        "period continue":"Die Zeitspannen-Periode geht nicht wie erwartet weiter. Beispiel \"/01:30\".",
        "time range mode":"__libraryname__ wurde im \"Zeitspannen-Modus\" aufgerufen. Zeitpunkt gefunden.",
        "point in time mode":"__libraryname__ wurde im \"Zeitpunkt-Modus\" aufgerufen. Zeitspanne gefunden.",
        "outside current day":"Zeitspanne beginnt außerhalb des aktuellen Tages",
        "two midnights":"Zeitspanne welche mehrmals Mitternacht beinhaltet wird nicht unterstützt",
        "without minutes":"Zeitspanne ohne Minutenangabe angegeben. Das ist nicht sehr eindeutig! Bitte verwende stattdessen folgende Syntax \"__syntax__\".",
        "outside day":"Die Zeitspanne beginnt außerhalb des aktuellen Tages",
        "zero calculation":"Das Hinzufügen von 0 in einer variablen Zeitberechnung ändert die variable Zeit nicht. Bitte entferne die Zeitberechnung (Beispiel: \"sunrise-(sunset-00:00)\").",
        "calculation syntax":"Berechnung mit variabler Zeit hat nicht die korrekte Syntax",
        missing:"Fehlendes \"__symbol__\"",
        "(time)":"(Zeit)",
        "bad range":"Ungültige Zeitspanne: __from__-__to__",
        "] or more numbers":"\"]\" oder weitere Zahlen erwartet.",
        "additional rule no sense":"Eine weitere Regel an dieser Stelle ergibt keinen Sinn. Benutze einfach \";\" als Trenner für Regeln. Siehe https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:additional_rule_separator",
        "unexpected token weekday range":"Unerwartes Token in Tages-Spanne: __token__",
        "max differ":"Es sollte keinen Grund geben, mehr als __maxdiffer__ Tage von einem __name__ abzuweichen. Wenn nötig, teile uns dies bitte mit …",
        "adding 0":"Addition von 0 verändert das Datum nicht. Bitte weglassen.",
        "unexpected token holiday":"Unerwarteter Token (in Feiertags-Auswertung): __token__",
        "no holiday definition":"__name__ ist für das Land __cc__ nicht definiert.",
        "no holiday definition state":"__name__ ist für das Land __cc__ und Bundesland __state__ nicht definiert.",
        "no country code":"Der Ländercode fehlt. Dieser wird benötigt um die korrekten Feiertage zu bestimmen (siehe in der README wie dieser anzugeben ist)",
        "no SH definition":"Die Schulferien __name__sind für das Jahr __year__ nicht definiert",
        "movable no formula":"Der bewegliche Feiertag __name__ kann nicht berechnet werden. Bitte füge eine entsprechende Formel hinzu.",
        "movable not in year":"Der bewegliche Feiertag __name__ plus __days__ Tage befindet sich nicht mehr im selben Jahr. Aktuell nicht unterstützt.",
        "year range one year":"Eine Jahres-Spanne mit gleichem Jahr als Beginn und Ende ergibt keinen Sinn. Bitte entferne das Ende-Jahr. zum Beispiel: \"__year__ May 23\"",
        "year range reverse":"Eine Jahres-Spanne mit Beginn größer als Ende ergibt keinen Sinn. Bitte umdrehen.",
        "year past":"Das Jahr liegt in der Vergangenheit.",
        "unexpected token year range":"Unerwartetes Token in der Jahres-Spanne: __token__",
        "week range reverse":"Du hast eine Wochen-Spanne in umgekehrter Reihenfolge oder mehrere Jahre umfassende angegeben. Dies ist aktuell nicht unterstützt.",
        "week negative":"Du hast eine Kalenderwoche kleiner 1 angegeben. Korrekte Angaben sind 1-53.",
        "week exceed":"Du hast eine Kalenderwoche größer als 53 angegeben. Korrekte Angaben sind 1-53.",
        "week period less than 2":"Du hast eine Wochenperiode kleiner 2 angegeben. Wenn du die gesamte Spanne von __weekfrom__ bis __weekto__ angeben willst, lasse \"/__period__\" einfach weg.",
        "week period greater than 26":"Du hast eine Wochen-Periode größer als 26 angegeben. 26,5 ist die Hälfte des Maximums von 53 Wochen pro Jahr. Damit würde eine Periode größer als 26 nur einmal pro Jahr auftreten. Bitte gibt den Wochen-Selektor als \"week __weekfrom__\" an, wenn es das ist, was du ausdrücken möchtest.",
        "unexpected token week range":"Unerwartetes Token in Wochen-Spanne: __token__",
        "unexpected token month range":"Unerwartetes Token in Monats-Spanne: __token__",
        "day range reverse":"Zeitspanne in falscher Reihenfolge. Beginn ist größer als Ende.",
        "open end":"Angegeben als \"open end\". Schließzeit wurde geraten.",
        "date parameter needed":"Datumsparameter nötig.",
        "assuming ok for ko":"\"__ko__\" wird als \"__ok__\" interpretiert.",
        "please use ok for ko":"Bitte verwende \"__ok__\" anstelle von \"__ko__\".",
        "please use ok for similar looking ko":"Please use notation \"__ok__\" for \"__ko__\". Those characters look very similar but are not the same!",
        "rant degree sign used for zero":"Beachte das dies ein Gradzeichen ist, welches als (hochgestellte) Null missbraucht wurde. Eine hochgestellte Null ist in Unicode definiert (°) und wäre angebrachter/einheitlicher an dieser Stelle. Allerdings ist die Verwendung von nicht ASCII Ziffern nicht erlaubt.",
        "please use English written ok for ko":"Bitte benutze die englische Schreibweise \"__ok__\" für \"__ko__\".",
        "please use English abbreviation ok for ko":"Bitte benutze die englische Abkürzung \"__ok__\" für \"__ko__\".",
        "please use English abbreviation ok for so":"Bitte benutze die englische Abkürzung \"__ok__\" für \"__ko__\". Beachte das Samstag in Polnisch gemeint sein kann.",
        "please use off for ko":"Bitte benutze \"__ok__\" für \"__ko__\". Beispiel: \"Mo-Fr 08:00-12:00; Tu off\".",
        "please use ok for workday":"\"__ko__\" wird als \"__ok__\" interpretiert. Werktag sollte nicht verwendet werden. Siehe https://wiki.openstreetmap.org/wiki/Talk:Key:opening_hours#need_syntax_for_holidays_and_workingdays",
        "omit hour keyword":"Bitte lasse \"__ko__\" weg oder verwende einen Doppelpunkt. Beispiel: \"12:00-14:00\".",
        "omit ko":"Bitte verzichte auf \"__ko__\".",
        "omit tag key":"Bitte lasse \"__ko__\" weg. Der Tag Schlüssel darf nicht im Tag Wert sein.",
        "omit wrong keyword open end":"Bitte lasse \"__ko__\" weg. Falls du \"open end\" ausdrücken möchtest verwende bitte ein \"+\". Beispiel: \"12:00+\".",
        "assuming open end for ko":"\"__ko__\" wird als \"__ok__\" (\"open end\") interpretiert. Example: \"12:00+\".",
        "please use ok for uncertainty":"Bitte verwende \"__ok__\" für \"__ko__\". Falls der begründete Verdacht der Ungewissheit vorliegt ziehe die Verwendung eines Kommentars in Betracht. Beispiel: 12:00-14:00 \"only on sunshine\".",
        "please use fallback rule":"Bitte verwende \"__ok__\" (Fallback Regel) für \"__ko__\". Beispiel: Mo-Fr 12:00-14:00; PH off || \"nach Vereinbarung\"",
        "please use ok for missing data":"Bitte verwende eine FIXME Notiz.",
        "please use 24 hours time for ko":"Bitte verwende 24 Stunden Zeitangaben anstelle der veralteten 12 Stunden Variante. Falls die 12 Stunden Variante verwendet wird ist eventuelle eine Konvertierung notwendig.",
        "please use restriction comment time for ko":"Es sieht so aus also möchtest du zusätzliche Einschränkungen für eine Öffnungszeit geben. Falls sich dies nicht mit der Syntax ausdrücken lässt können Kommentare verwendet werden. Zusätzlich sollte eventuell das Schlüsselwort `open` benutzt werden. Beispiel: open \"Nur Frauen\".",
        "please use ok for typographically correct":"Bitte verwende \"__ok__\" für \"__ko__\". Auch wenn \"__ko__\" typografisch korrekt ist, ist dies in der opening_hours Syntax nicht definiert. Korrekte Typographie sollte auf Anwendungsebene sichergestellt werden …" },
      pretty:{ off:"geschlossen",
        SH:"Schulferien",
        PH:"Feiertags" } } },
  fr:{ opening_hours:{ texts:{ "assuming ok for ko":"S'il vous plaît utiliser \"<ok>\" pour \"<ko>\".",
        "please use ok for ko":"S'il vous plaît utiliser \"__ok__\" pour \"__ko__\".",
        "please use English abbreviation ok for ko":"S'il vous plaît utiliser l'abréviation \"__ok__\" pour \"__ko__\"." } } },
  nl:{ opening_hours:{ texts:{ "please use English abbreviation ok for ko":"Neem de engelse afkorting \"__ok__\" voor \"__ko__\" alstublieft." } } } };

if (!i18n.isInitialized()) {
    i18n.init({
        fallbackLng: 'en',
        // lngWhitelist: ['en', 'de'],
        resStore: data$40,
        getAsync: true,
        useCookie: true,
        // debug: true,
    });
} else {
    // compat with an app that already initializes i18n
    for (var lang$1 in data$40) {
        i18n.addResourceBundle(lang$1, 'opening_hours', data$40[lang$1]['opening_hours'], true);

    }
}

/* jshint laxbreak: true */
/* jshint boss: true */
/* jshint loopfunc: true */

var index = function(value, nominatim_object, optional_conf_parm, override_with_holidays) {
    // short constants {{{
    var word_value_replacement = { // If the correct values can not be calculated.
        dawn    : 60 * 5 + 30,
        sunrise : 60 * 6,
        sunset  : 60 * 18,
        dusk    : 60 * 18 + 30,
    };
    var months$$1   = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var weekdays$$1 = ['Su','Mo','Tu','We','Th','Fr','Sa'];
    var string_to_token_map = {
        'su': [ 0, 'weekday' ],
        'mo': [ 1, 'weekday' ],
        'tu': [ 2, 'weekday' ],
        'we': [ 3, 'weekday' ],
        'th': [ 4, 'weekday' ],
        'fr': [ 5, 'weekday' ],
        'sa': [ 6, 'weekday' ],
        'jan': [  0, 'month' ],
        'feb': [  1, 'month' ],
        'mar': [  2, 'month' ],
        'apr': [  3, 'month' ],
        'may': [  4, 'month' ],
        'jun': [  5, 'month' ],
        'jul': [  6, 'month' ],
        'aug': [  7, 'month' ],
        'sep': [  8, 'month' ],
        'oct': [  9, 'month' ],
        'nov': [ 10, 'month' ],
        'dec': [ 11, 'month' ],
        'day': [ 'day', 'calcday' ],
        'days': [ 'days', 'calcday' ],
        'sunrise': [ 'sunrise', 'timevar' ],
        'sunset': [ 'sunset', 'timevar' ],
        'dawn': [ 'dawn', 'timevar' ],
        'dusk': [ 'dusk', 'timevar' ],
        'easter': [ 'easter', 'event' ],
        'week': [ 'week', 'week' ],
        'open': [ 'open', 'state' ],
        'closed': [ 'closed', 'state' ],
        'off': [ 'off', 'state' ],
        'unknown': [ 'unknown', 'state' ],
    };

    var default_prettify_conf = {
        // Update README.md if changed.
        'zero_pad_hour': true,           // enforce ("%02d", hour)
        'one_zero_if_hour_zero': false,  // only one zero "0" if hour is zero "0"
        'leave_off_closed': true,        // leave keywords "off" and "closed" as is
        'keyword_for_off_closed': 'off', // use given keyword instead of "off" or "closed"
        'rule_sep_string': ' ',          // separate rules by string
        'print_semicolon': true,         // print token which separates normal rules
        'leave_weekday_sep_one_day_betw': true, // use the separator (either "," or "-" which is used to separate days which follow to each other like Sa,Su or Su-Mo
        'sep_one_day_between': ',',      // separator which should be used
        'zero_pad_month_and_week_numbers': true, // Format week (e.g. `week 01`) and month day numbers (e.g. `Jan 01`) with "%02d".
        'locale': 'en',                  // use local language (needs moment.js / i18n.js)
    };

    var osm_tag_defaults = {
        'opening_hours'       :  { 'mode' :  0, 'warn_for_PH_missing' :  true, },
        'collection_times'    :  { 'mode' :  2, },
        /* oh_mode 2: "including the hyphen because there are post boxes which are
         * emptied several (undefined) times or one (undefined) time in a certain time
         * frame. This shall be covered also.".
         * Ref: https://wiki.openstreetmap.org/wiki/Key:collection_times */
        'opening_hours:.+'    :  { 'mode' :  0, },
        '.+:opening_hours'    :  { 'mode' :  0, },
        '.+:opening_hours:.+' :  { 'mode' :  0, },
        'smoking_hours'       :  { 'mode' :  0, },
        'service_times'       :  { 'mode' :  2, },
        'happy_hours'         :  { 'mode' :  0, },
        'lit'                 :  { 'mode' :  0,
            map: {
                'yes'      : 'sunset-sunrise open "specified as yes: At night (unknown time schedule or daylight detection)"',
                'automatic': 'unknown "specified as automatic: When someone enters the way the lights are turned on."',
                'no'       : 'off "specified as no: There are no lights installed."',
                'interval' : 'unknown "specified as interval"',
                'limited'  : 'unknown "specified as limited"',
            }
        },
    };

    var minutes_in_day = 60 * 24;
    var msec_in_day    = 1000 * 60 * minutes_in_day;
    // var msec_in_week   = msec_in_day * 7;

    var library_name   = 'opening_hours.js';
    var repository_url = 'https://github.com/opening-hours/' + library_name;
    // var issues_url     = repository_url + '/issues?state=open';
    /* }}} */

    /* translation function {{{ */
    /* Roughly compatibly to i18next so we can replace everything by i18next include later
     * sprintf support
     */
    var locale = 'en'; // Default locale
    if (typeof i18n === 'object') {
        locale = i18n.lng();
    }

    var t = function(str, variables) {
        if (
                typeof i18n === 'object'
                && typeof i18n.t === 'function'
                && typeof locale === 'string'
                && ['de'].indexOf(locale) !== -1
            ) {

            var global_locale = i18n.lng();

            if (global_locale !== locale) {
                i18n.setLng(locale);
            }
            var text = i18n.t('opening_hours:texts.' + str, variables);
            if (global_locale !== locale) {
                i18n.setLng(global_locale);
            }
            return text;
        }
        var text = data$39[str];
        if (typeof text === 'undefined') {
            text = str;
        }
        return text.replace(/__([^_]*)__/g, function (match, c) {
            return typeof variables[c] !== 'undefined'
                ? variables[c]
                : match
                ;
            }
        );
    };
    /* }}} */

    /* Optional constructor parameters {{{ */

    /* nominatim_object {{{
     *
     * Required to reasonably calculate 'sunrise' and holidays.
     */
    var location_cc, location_state, lat, lon;
    if (typeof nominatim_object === 'object' && nominatim_object !== null) {
        if (typeof nominatim_object.address === 'object') {
            if (typeof nominatim_object.address.country_code === 'string') {
                location_cc = nominatim_object.address.country_code;
            }
            if (typeof nominatim_object.address.state === 'string') {
                location_state = nominatim_object.address.state;
            } else if (typeof nominatim_object.address.county === 'string') {
                location_state = nominatim_object.address.county;
            }
        }

        if (typeof nominatim_object.lon === 'string' && typeof nominatim_object.lat === 'string') {
            lat = nominatim_object.lat;
            lon = nominatim_object.lon;
        }
    } else if (nominatim_object === null) {
        /* Set the location to some random value. This can be used if you don’t
         * care about correct opening hours for more complex opening_hours
         * values.
         */
        location_cc = 'de';
        location_state = 'Baden-W\u00fcrttemberg';
        lat = '49.5400039';
        lon = '9.7937133';
    } else if (typeof nominatim_object !== 'undefined') {
        throw 'The nominatim_object parameter is of unknown type.'
            + ' Given ' + typeof(nominatim_object)
            + ', expected object.';
    }
    /* }}} */

    /* mode, locale, warnings_severity, tag_key, map_value {{{
     *
     * 0: time ranges (default), tags: opening_hours, lit, …
     * 1: points in time
     * 2: both (time ranges and points in time), tags: collection_times, service_times
     */

    var warnings_severity = 4;
    /* Default, currently the highest severity supported.
     * This number is expected to be >= 4. This is not explicitly checked.
     */

    var oh_mode;
    var oh_map_value = false;
    var oh_key, oh_regex_key;

    if (typeof optional_conf_parm === 'number') {
        oh_mode = optional_conf_parm;
    } else if (typeof optional_conf_parm === 'object') {
        locale = optional_conf_parm['locale'];
        if (checkOptionalConfParm('mode', 'number')) {
            oh_mode = optional_conf_parm['mode'];
        }
        if (checkOptionalConfParm('warnings_severity', 'number')) {
            warnings_severity = optional_conf_parm['warnings_severity'];
            if ([ 0, 1, 2, 3, 4, 5, 6, 7 ].indexOf(warnings_severity) === -1) {
                throw t('warnings severity', { 'severity': warnings_severity, 'allowed': '[ 0, 1, 2, 3, 4, 5, 6, 7 ]' });
            }
        }
        if (checkOptionalConfParm('tag_key', 'string')) {
            oh_key = optional_conf_parm['tag_key'];
        }
        if (checkOptionalConfParm('map_value', 'boolean')) {
            oh_map_value = optional_conf_parm.map_value;
        }
    } else if (typeof optional_conf_parm !== 'undefined') {
        throw t('optional conf parm type', { 'given': typeof(optional_conf_parm) });
    }

    if (typeof oh_key === 'string') {
        oh_regex_key = getRegexKeyForKeyFromOsmDefaults(oh_key);

        if (oh_map_value
            && typeof osm_tag_defaults[oh_regex_key] === 'object'
            && typeof osm_tag_defaults[oh_regex_key]['map'] === 'object'
            && typeof osm_tag_defaults[oh_regex_key]['map'][value] === 'string'
            ) {

            value = osm_tag_defaults[oh_regex_key]['map'][value];
        }
    } else if (oh_map_value) {
        throw t('conf param tag key missing');
    }

    if (typeof oh_mode === 'undefined') {
        if (typeof oh_key === 'string') {
            if (typeof osm_tag_defaults[oh_regex_key]['mode'] === 'number') {
                oh_mode = osm_tag_defaults[oh_regex_key]['mode'];
            } else {
                oh_mode = 0;
            }
        } else {
            oh_mode = 0;
        }
    } else if ([ 0, 1, 2 ].indexOf(oh_mode) === -1) {
        throw t('conf param mode invalid', { 'given': oh_mode, 'allowed': '[ 0, 1, 2 ]' });
    }

    /* }}} */
    /* }}} */

    // Tokenize value and generate selector functions. {{{
    if (typeof value !== 'string') {
        throw t('no string');
    }
    if (/^(?:\s*;?)+$/.test(value)) {
        throw t('nothing');
    }

    var parsing_warnings = []; // Elements are fed into function formatWarnErrorMessage(nrule, at, message)
    var done_with_warnings = false; // The functions which returns warnings can be called multiple times.
    var done_with_selector_reordering = false;
    var done_with_selector_reordering_warnings = false;
    var tokens = tokenize(value);
    // console.log(JSON.stringify(tokens, null, '    '));
    var prettified_value = '';
    var week_stable = true;

    var rules = [];
    var new_tokens = [];

    for (var nrule = 0; nrule < tokens.length; nrule++) {
        if (tokens[nrule][0].length === 0) {
            // Rule does contain nothing useful e.g. second rule of '10:00-12:00;' (empty) which needs to be handled.
            parsing_warnings.push([nrule, -1,
                t('nothing useful')
                + (nrule === tokens.length - 1 && nrule > 0 && !tokens[nrule][1] ?
                    ' ' + t('programmers joke') : '')
                ]);
            continue;
        }

        var continue_at = 0;
        var next_rule_is_additional = false;
        do {
            if (continue_at === tokens[nrule][0].length) break;
            // Additional rule does contain nothing useful e.g. second rule of '10:00-12:00,' (empty) which needs to be handled.

            var selectors = {
                // Time selectors
                time: [],

                // Temporary array of selectors from time wrapped to the next day
                wraptime: [],

                // Date selectors
                weekday: [],
                holiday: [],
                week: [],
                month: [],
                monthday: [],
                year: [],

                // Array with non-empty date selector types, with most optimal ordering
                date: [],

                fallback: tokens[nrule][1],
                additional: continue_at ? true : false,
                meaning: true,
                unknown: false,
                comment: undefined,
                build_from_token_rule: undefined,
            };

            selectors.build_from_token_rule = [ nrule, continue_at, new_tokens.length ];
            continue_at = parseGroup(tokens[nrule][0], continue_at, selectors, nrule);
            if (typeof continue_at === 'object') {
                continue_at = continue_at[0];
            } else {
                continue_at = 0;
            }

            // console.log('Current tokens: ' + JSON.stringify(tokens[nrule], null, '    '));

            new_tokens.push(
                [
                    tokens[nrule][0].slice(
                        selectors.build_from_token_rule[1],
                        continue_at === 0
                            ? tokens[nrule][0].length
                            : continue_at
                    ),
                    tokens[nrule][1],
                    tokens[nrule][2],
                ]
            );

            if (next_rule_is_additional && new_tokens.length > 1) {
                // Move 'rule separator' from last token of last rule to first token of this rule.
                new_tokens[new_tokens.length - 1][0].unshift(new_tokens[new_tokens.length - 2][0].pop());
            }

            next_rule_is_additional = continue_at === 0 ? false : true;

            /* Optimal order of selectors for checking. */
            var selector_elements = ['year', 'holiday', 'month', 'monthday', 'week', 'weekday'];
            for (var selector_ind in selector_elements) {
                if (selectors[selector_elements[selector_ind]].length > 0) {
                    selectors.date.push(selectors[selector_elements[selector_ind]]);
                    selectors[selector_elements[selector_ind]] = [];
                }
            }

            // console.log('weekday: ' + JSON.stringify(selectors.weekday, null, '\t'));
            rules.push(selectors);

            /* This handles selectors with time ranges wrapping over midnight (e.g. 10:00-02:00).
             * It generates wrappers for all selectors and creates a new rule.
             */
            if (selectors.wraptime.length > 0) {
                var wrapselectors = {
                    time: selectors.wraptime,
                    date: [],

                    meaning: selectors.meaning,
                    unknown: selectors.unknown,
                    comment: selectors.comment,

                    wrapped: true,
                    build_from_token_rule: selectors.build_from_token_rule,
                };

                for (var dselg = 0; dselg < selectors.date.length; dselg++) {
                    wrapselectors.date.push([]);
                    for (var dsel = 0; dsel < selectors.date[dselg].length; dsel++) {
                        wrapselectors.date[wrapselectors.date.length-1].push(
                                generateDateShifter(selectors.date[dselg][dsel], -msec_in_day)
                            );
                    }
                }

                rules.push(wrapselectors);
            }
        } while (continue_at);
    }
    // console.log(JSON.stringify(tokens, null, '    '));
    // console.log(JSON.stringify(new_tokens, null, '    '));
    /* }}} */

    /* Helper functions {{{ */
    /* Get regex string key from key osm_tag_defaults. {{{
     *
     * :param key: Tag key e.g. opening_hours:kitchen.
     * :returns: Regex key from osm_tag_defaults e.g. opening_hours:.*
     */
    function getRegexKeyForKeyFromOsmDefaults(key) {
        var regex_key;

        for (var osm_key in osm_tag_defaults) {
            if (key === osm_key) { // Exact match.
                regex_key = osm_key;
                break;
            } else if (new RegExp(osm_key).test(key)) {
                regex_key = osm_key;
            }
        }
        return regex_key;
    }
    /* }}} */

    /* Check given element in optional_conf_parm. {{{
     *
     * :param key: Key of optional_conf_parm.
     * :param expected_type: Expected `typeof()` the parameter.
     * :returns: True if the expected type matches the given type.
     */
    function checkOptionalConfParm(key, expected_type) {
        if (typeof optional_conf_parm[key] === expected_type) {
            return true;
        } else if (typeof optional_conf_parm[key] !== 'undefined') {
            throw t('conf param unkown type', { 'key': key, 'given': typeof(optional_conf_parm[key]), 'expected': expected_type });
        }
        return false;
    }
    /* }}} */
    /* }}} */

    /* Format warning or error message for the user. {{{
     *
     * :param nrule: Rule number starting with zero.
     * :param at: Token position at which the issue occurred.
     * :param message: Human readable string with the message.
     * :returns: String with position of the warning or error marked for the user.
     */
    function formatWarnErrorMessage(nrule, at$$1, message) {
        // console.log(`Called formatWarnErrorMessage: ${nrule}, ${at}, ${message}`);
        // FIXME: Change to new_tokens.
        if (typeof nrule === 'number') {
            var pos = 0;
            if (nrule === -1) { // Usage of rule index not required because we do have access to value.length.
                pos = value.length - at$$1;
            } else { // Issue occurred at a later time, position in string needs to be reconstructed.
                if (typeof tokens[nrule][0][at$$1] === 'undefined') {
                    if (typeof tokens[nrule][0] && at$$1 === -1) {
                        pos = value.length;
                        if (typeof tokens[nrule+1] === 'object' && typeof tokens[nrule+1][2] === 'number') {
                            pos -= tokens[nrule+1][2];
                        } else if (typeof tokens[nrule][2] === 'number') {
                            pos -= tokens[nrule][2];
                        }
                    } else {
                        // Given position is invalid.
                        //
                        formatLibraryBugMessage('Bug in warning generation code which could not determine the exact position of the warning or error in value.');
                        pos = value.length;
                        if (typeof tokens[nrule][2] === 'number') {
                            // Fallback: Point to last token in the rule which caused the problem.
                            // Run real_test regularly to fix the problem before a user is confronted with it.
                            pos -= tokens[nrule][2];
                            console.warn('Last token for rule: ' + JSON.stringify(tokens[nrule]));
                            console.log(value.substring(0, pos) + ' <--- (' + message + ')');
                            console.log('\n');
                        } {
                            console.warn('tokens[nrule][2] is undefined. This is ok if nrule is the last rule.');
                        }
                    }
                } else {
                    pos = value.length;
                    if (typeof tokens[nrule][0][at$$1+1] === 'object') {
                        pos -= tokens[nrule][0][at$$1+1][2];
                    } else if (typeof tokens[nrule][2] === 'number') {
                        pos -= tokens[nrule][2];
                    }
                }
            }
            return value.substring(0, pos) + ' <--- (' + message + ')';
        } else if (typeof nrule === 'string') {
            return nrule.substring(0, at$$1) + ' <--- (' + message + ')';
        }
    }
    /* }}} */

    /* Format internal library error message. {{{
     *
     * :param message: Human readable string with the error message.
     * :param text_template: Message template defined in the `lang` variable to use for the error message. Defaults to 'library bug'.
     * :returns: Error message for the user.
     */
    function formatLibraryBugMessage(message, text_template) {
        if (typeof message === 'undefined') {
            message = '';
        } else {
            message = ' ' + message;
        }
        if (typeof text_template !== 'string') {
            text_template = 'library bug';
        }

        message = t(text_template, { 'value': value, 'url': repository_url, 'message': message });
        console.error(message);
        return message;
    } /* }}} */

    /* Tokenize input stream {{{
     *
     * :param value: Raw opening_hours value.
     * :returns: Tokenized list object. Complex structure. Check the
     *        internal documentation in the docs/ directory for details.
     */
    function tokenize(value) {
        var all_tokens       = [];
        var curr_rule_tokens = [];

        var last_rule_fallback_terminated = false;

        while (value !== '') {
            /* Ordered after likelihood of input for performance reasons.
             * Also, error tolerance is supposed to happen at the end.
             */
            // console.log("Parsing value: " + value);
            var tmp = value.match(/^([a-z]{2,})\b((?:[.]| before| after)?)/i);
            var token_from_map = undefined;
            if (tmp && tmp[2] === '') {
                token_from_map = string_to_token_map[tmp[1].toLowerCase()];
            }
            if (typeof token_from_map === 'object') {
                curr_rule_tokens.push(token_from_map.concat([value.length]));
                value = value.substr(tmp[1].length);
            } else if (tmp = value.match(/^\s+/)) {
                // whitespace is ignored
                value = value.substr(tmp[0].length);
            } else if (tmp = value.match(/^24\/7/)) {
                // Reserved keyword.
                curr_rule_tokens.push([tmp[0], tmp[0], value.length ]);
                value = value.substr(tmp[0].length);
            } else if (/^;/.test(value)) {
                // semicolon terminates rule.
                // Next token belong to a new rule.
                all_tokens.push([ curr_rule_tokens, last_rule_fallback_terminated, value.length ]);
                value = value.substr(1);

                curr_rule_tokens = [];
                last_rule_fallback_terminated = false;
            } else if (/^[:.]/.test(value)) {
                // Time separator (timesep).
                if (value[0] === '.' && !done_with_warnings) {
                    parsing_warnings.push([ -1, value.length - 1, t('hour min separator')]);
                }
                curr_rule_tokens.push([ ':', 'timesep', value.length ]);
                value = value.substr(1);
            } else if (tmp = value.match(/^(?:PH|SH)/i)) {
                // special day name (holidays)
                curr_rule_tokens.push([tmp[0].toUpperCase(), 'holiday', value.length ]);
                value = value.substr(2);
            } else if (tmp = value.match(/^[°\u2070-\u209F\u00B2\u00B3\u00B9]{1,2}/)) {
                var unicode_code_point_to_digit = {
                    176: 0,
                    0x2070: 0,
                    185: 1,
                    178: 2,
                    179: 3,
                };
                var regular_number = tmp[0].split('').map(function (ch) {
                    var code_point = ch.charCodeAt(0);
                    if (typeof unicode_code_point_to_digit[code_point] === 'number') {
                        return unicode_code_point_to_digit[code_point];
                    } else if (0x2074 <= code_point && code_point <= 0x2079) {
                        return code_point - 0x2070;
                    } else if (0x2080 <= code_point && code_point <= 0x2089) {
                        return code_point - 0x2080;
                    }
                }).join('');
                var ok = '';
                if (curr_rule_tokens.length > 0 && matchTokens(curr_rule_tokens, curr_rule_tokens.length-1, 'number')) {
                    ok += ':';
                }
                ok += regular_number;
                if (!done_with_warnings) {
                    for (var i = 0; i <= tmp[0].length; i++) {
                        if (value.charCodeAt(i) == 176) {
                            parsing_warnings.push([ -1, value.length - (1 + i),
                                    t('rant degree sign used for zero')]);
                        }
                    }
                    parsing_warnings.push([ -1, value.length - tmp[0].length,
                            t('please use ok for ko', {'ko': tmp[0], 'ok': ok})]);
                }
                value = ok + value.substr(tmp[0].length);
            } else if (tmp = value.match(/^(&|_|→|–|−|—|ー|=|·|öffnungszeit(?:en)?:?|opening_hours\s*=|\?|~|～|：|always (?:open|closed)|24x7|24 hours 7 days a week|24 hours|7 ?days(?:(?: a |\/)week)?|7j?\/7|all days?|every day|(?:bis|till?|-|–)? ?(?:open ?end|late)|(?:(?:one )?day (?:before|after) )?(?:school|public) holidays?|days?\b|до|рм|ам|jours fériés|on work days?|sonntags?|(?:nur |an )?sonn-?(?:(?: und |\/)feiertag(?:s|en?)?)?|(?:an )?feiertag(?:s|en?)?|(?:nach|on|by) (?:appointments?|vereinbarung|absprache)|p\.m\.|a\.m\.|[_a-zäößàáéøčěíúýřПнВсо]+\b|à|á|mo|tu|we|th|fr|sa|su|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)(\.?)/i)) {
                /* Handle all remaining words and specific other characters with error tolerance.
                 *
                 * à|á: Word boundary does not work with Unicode chars: 'test à test'.match(/\bà\b/i)
                 * https://stackoverflow.com/questions/10590098/javascript-regexp-word-boundaries-unicode-characters
                 * Order in the regular expression capturing group is important in some cases.
                 *
                 * mo|tu|we|th|fr|sa|su|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec: Prefer defended keywords
                 * if used in cases like 'mo12:00-14:00' (when keyword is followed by number).
                 */
                var correct_val = returnCorrectWordOrToken(tmp[1].toLowerCase(), value.length);
                // console.log('Error tolerance for string "' + tmp[1] + '" returned "' + correct_val + '".');
                if (typeof correct_val === 'object') {
                    curr_rule_tokens.push([ correct_val[0], correct_val[1], value.length ]);
                    value = value.substr(tmp[0].length);
                } else if (typeof correct_val === 'string') {
                    if (correct_val === 'am' || correct_val === 'pm') {
                        var hours_token_at = curr_rule_tokens.length - 1;
                        var hours_token;
                        if (hours_token_at >= 0) {
                            if (hours_token_at -2 >= 0 &&
                                    matchTokens(
                                        curr_rule_tokens, hours_token_at - 2,
                                        'number', 'timesep', 'number'
                                    )
                            ) {
                                hours_token_at -= 2;
                                hours_token = curr_rule_tokens[hours_token_at];
                            } else if (matchTokens(curr_rule_tokens, hours_token_at, 'number')) {
                                hours_token = curr_rule_tokens[hours_token_at];
                            }

                            if (typeof hours_token === 'object') {
                                if (correct_val === 'pm' && hours_token[0] < 12) {
                                    hours_token[0] += 12;
                                }
                                if (correct_val === 'am' && hours_token[0] === 12) {
                                    hours_token[0] = 0;
                                }
                                curr_rule_tokens[hours_token_at] = hours_token;
                            }
                        }
                        correct_val = '';
                    }
                    var correct_tokens = tokenize(correct_val)[0];
                    if (correct_tokens[1] === true) { // last_rule_fallback_terminated
                        throw formatLibraryBugMessage();
                    }
                    for (var i = 0; i < correct_tokens[0].length; i++) {
                        curr_rule_tokens.push([correct_tokens[0][i][0], correct_tokens[0][i][1], value.length]);
                        // value.length - tmp[0].length does not have the desired effect for all test cases.
                    }

                    value = value.substr(tmp[0].length);
                    // value = correct_val + value.substr(tmp[0].length);
                    // Does not work because it would generate the wrong length for formatWarnErrorMessage.
                } else {
                    // No correction available. Insert as single character token and let the parser handle the error.
                    curr_rule_tokens.push([value[0].toLowerCase(), value[0].toLowerCase(), value.length - 1 ]);
                    value = value.substr(1);
                }
                if (typeof tmp[2] === 'string' && tmp[2] !== '' && !done_with_warnings) {
                    parsing_warnings.push([ -1, value.length, t('omit ko', {'ko': tmp[2]})]);
                }
            } else if (tmp = value.match(/^(\d+)(?:([.])([^\d]))?/)) {
                // number
                if (Number(tmp[1]) > 1900) { // Assumed to be a year number.
                    curr_rule_tokens.push([Number(tmp[1]), 'year', value.length ]);
                    if (Number(tmp[1]) >= 2100) // Probably an error
                        parsing_warnings.push([ -1, value.length - 1,
                                t('interpreted as year', {number:  Number(tmp[1])})
                        ]);
                } else {
                    curr_rule_tokens.push([Number(tmp[1]), 'number', value.length ]);
                }

                value = value.substr(tmp[1].length + (typeof tmp[2] === 'string' ? tmp[2].length : 0));
                if (typeof tmp[2] === 'string' && tmp[2] !== '' && !done_with_warnings) {
                    parsing_warnings.push([ -1, value.length, t('omit ko', {'ko': tmp[2]})]);
                }
            } else if (/^\|\|/.test(value)) {
                // || terminates rule.
                // Next token belong to a fallback rule.
                if (curr_rule_tokens.length === 0) {
                    throw formatWarnErrorMessage(-1, value.length - 2, t('rule before fallback empty'));
                }

                all_tokens.push([ curr_rule_tokens, last_rule_fallback_terminated, value.length ]);
                curr_rule_tokens = [];
                // curr_rule_tokens = [ [ '||', 'rule separator', value.length  ] ];
                // FIXME: Use this. Unknown bug needs to be solved in the process.
                value = value.substr(2);

                last_rule_fallback_terminated = true;
            } else if (tmp = value.match(/^"([^"]+)"/)) {
                // Comment following the specification.
                // Any character is allowed inside the comment except " itself.
                curr_rule_tokens.push([tmp[1], 'comment', value.length ]);
                value = value.substr(tmp[0].length);
            } else if (tmp = value.match(/^(["'„“‚‘’«「『])([^"'“”‘’»」』;|]*)(["'”“‘’»」』])/)) {
                // Comments with error tolerance.
                // The comments still have to be somewhat correct meaning
                // the start and end quote signs used have to be
                // appropriate. So “testing„ will not match as it is not a
                // quote but rather something unknown which the user should
                // fix first.
                // console.log('Matched: ' + JSON.stringify(tmp));
                for (var pos = 1; pos <= 3; pos += 2) {
                    // console.log('Pos: ' + pos + ', substring: ' + tmp[pos]);
                    var correct_val = returnCorrectWordOrToken(tmp[pos],
                        value.length - (pos === 3 ? tmp[1].length + tmp[2].length : 0)
                    );
                    if (typeof correct_val !== 'string' && tmp[pos] !== '"') {
                        throw formatLibraryBugMessage(
                            'A character for error tolerance was allowed in the regular expression'
                            + ' but is not covered by word_error_correction'
                            + ' which is needed to format a proper message for the user.'
                        );
                    }
                }
                curr_rule_tokens.push([tmp[2], 'comment', value.length ]);
                value = value.substr(tmp[0].length);
            } else if (/^(?:␣|\s)/.test(value)) {
                // Using "␣" as space is not expected to be a normal
                // mistake. Just ignore it to make using taginfo easier.
                value = value.substr(1);
            } else {
                // other single-character tokens
                curr_rule_tokens.push([value[0].toLowerCase(), value[0].toLowerCase(), value.length ]);
                value = value.substr(1);
            }
        }

        all_tokens.push([ curr_rule_tokens, last_rule_fallback_terminated ]);

        return all_tokens;
    }
    /* }}} */

    /* error correction/tolerance function {{{
     * Go through word_error_correction hash and get correct value back.
     *
     * :param word: Wrong word or character.
     * :param value_length: Current value_length (used for warnings).
     * :returns:
     *        * (valid) opening_hours sub string.
     *        * object with [ internal_value, token_name ] if value is correct.
     *        * undefined if word could not be found (and thus is not corrected).
     */
    function returnCorrectWordOrToken(word, value_length) {
        var token_from_map = string_to_token_map[word];
        if (typeof token_from_map === 'object') {
            return token_from_map;
        }
        for (var comment in data$38) {
            for (var old_val in data$38[comment]) {
                if (new RegExp('^' + old_val + '$').test(word)) {
                    var val = data$38[comment][old_val];
                    // Replace wrong words or characters with correct ones.
                    // This will return a string which is then being tokenized.
                    if (!done_with_warnings) {
                        parsing_warnings.push([
                            -1,
                            value_length - word.length,
                            t(comment, {'ko': word, 'ok': val}),
                        ]);
                    }
                    return val;
                }
            }
        }
        return undefined;
    }
    /* }}} */

    /* return warnings as list {{{
     *
     * :param it: Iterator object if available (optional).
     * :returns: Warnings as list with one warning per element.
     */
    function getWarnings(it$$1) {
        if (warnings_severity < 4) {
            return [];
        }

        if (!done_with_warnings && typeof it$$1 === 'object') {
            /* getWarnings was called in a state without critical errors.
             * We can do extended tests.
             */

            /* Place all tests in this function if an additional (high
             * level) test is added and this does not require to rewrite
             * big parts of (sub) selector parsers only to get the
             * position. If that is the case, then rather place the test
             * code in the (sub) selector parser function directly.
             */

            var wide_range_selector_order = [ 'year', 'month', 'week', 'holiday' ];
            var small_range_selector_order = [ 'weekday', 'time', '24/7', 'state', 'comment'];

            // How many times was a selector_type used per rule? {{{
            var used_selectors = [];
            var used_selectors_types_array = [];
            var has_token = {};

            for (var nrule = 0; nrule < new_tokens.length; nrule++) {
                if (new_tokens[nrule][0].length === 0) continue;
                // Rule does contain nothing useful e.g. second rule of '10:00-12:00;' (empty) which needs to be handled.

                var selector_start_end_type = [ 0, 0, undefined ];
                // console.log(new_tokens[nrule][0]);

                used_selectors[nrule] = {};
                used_selectors_types_array[nrule] = [];

                do {
                    selector_start_end_type = getSelectorRange(new_tokens[nrule][0], selector_start_end_type[1]);
                    // console.log(selector_start_end_type, new_tokens[nrule][0].length);

                    for (var token_pos = 0; token_pos <= selector_start_end_type[1]; token_pos++) {
                        if (typeof new_tokens[nrule][0][token_pos] === 'object' && new_tokens[nrule][0][token_pos][0] === 'PH') {
                            has_token['PH'] = true;
                        }
                    }

                    if (selector_start_end_type[0] === selector_start_end_type[1] &&
                        new_tokens[nrule][0][selector_start_end_type[0]][0] === '24/7'
                        ) {
                            has_token['24/7'] = true;
                    }

                    if (typeof used_selectors[nrule][selector_start_end_type[2]] !== 'object') {
                        used_selectors[nrule][selector_start_end_type[2]] = [ selector_start_end_type[1] ];
                    } else {
                        used_selectors[nrule][selector_start_end_type[2]].push(selector_start_end_type[1]);
                    }
                    used_selectors_types_array[nrule].push(selector_start_end_type[2]);

                    selector_start_end_type[1]++;
                } while (selector_start_end_type[1] < new_tokens[nrule][0].length);
            }
            // console.log('used_selectors: ' + JSON.stringify(used_selectors, null, '    '));
            /* }}} */

            for (var nrule = 0; nrule < used_selectors.length; nrule++) {

                /* Check if more than one not connected selector of the same type is used in one rule {{{ */
                for (var selector_type in used_selectors[nrule]) {
                    // console.log(selector_type + ' use at: ' + used_selectors[nrule][selector_type].length);
                    if (used_selectors[nrule][selector_type].length > 1) {
                        parsing_warnings.push([nrule, used_selectors[nrule][selector_type][used_selectors[nrule][selector_type].length - 1],
                            t('use multi', {
                                'count': used_selectors[nrule][selector_type].length,
                                'part2': (
                                    /^(?:comment|state)/.test(selector_type) ?
                                        t('selector multi 2a', {'what': (selector_type === 'state' ? t('selector state'): t('comments'))})
                                        :
                                        t('selector multi 2b', {'what': t(selector_type + (/^(?:month|weekday)$/.test(selector_type) ? 's' : ' ranges'))})
                                )
                            })]
                        );
                        done_with_selector_reordering = true; // Correcting the selector order makes no sense if this kind of issue exists.
                    }
                }
                /* }}} */
                /* Check if change default state rule is not the first rule {{{ */
                if (   typeof used_selectors[nrule].state === 'object'
                    && Object.keys(used_selectors[nrule]).length === 1
                ) {

                    if (nrule !== 0) {
                        parsing_warnings.push([nrule, new_tokens[nrule][0].length - 1, t('default state')]);
                    }
                /* }}} */
                /* Check if a rule (with state open) has no time selector {{{ */
                } else if (typeof used_selectors[nrule].time === 'undefined') {
                    if (    (       typeof used_selectors[nrule].state === 'object'
                                && new_tokens[nrule][0][used_selectors[nrule].state[0]][0] === 'open'
                                && typeof used_selectors[nrule].comment === 'undefined'
                            ) || ( typeof used_selectors[nrule].comment === 'undefined'
                                && typeof used_selectors[nrule].state === 'undefined'
                            ) &&
                            typeof used_selectors[nrule]['24/7'] === 'undefined'
                    ) {

                        parsing_warnings.push([nrule, new_tokens[nrule][0].length - 1, t('vague')]);
                    }
                }
                /* }}} */
                /* Check if empty comment was given {{{ */
                if (typeof used_selectors[nrule].comment === 'object'
                    && new_tokens[nrule][0][used_selectors[nrule].comment[0]][0].length === 0
                ) {

                    parsing_warnings.push([nrule, used_selectors[nrule].comment[0], t('empty comment')]);
                }
                /* }}} */
                /* Check for valid use of <separator_for_readability> {{{ */
                for (var i = 0; i < used_selectors_types_array[nrule].length - 1; i++) {
                    var selector_type = used_selectors_types_array[nrule][i];
                    var next_selector_type = used_selectors_types_array[nrule][i+1];
                    if (   (   wide_range_selector_order.indexOf(selector_type)       !== -1
                            && wide_range_selector_order.indexOf(next_selector_type)  !== -1
                        ) || ( small_range_selector_order.indexOf(selector_type)      !== -1
                            && small_range_selector_order.indexOf(next_selector_type) !== -1)
                        ) {

                        if (new_tokens[nrule][0][used_selectors[nrule][selector_type][0]][0] === ':') {
                            parsing_warnings.push([nrule, used_selectors[nrule][selector_type][0],
                                t('separator_for_readability')
                            ]);
                        }
                    }
                }
                /* }}} */

                /* FIXME: Enable (currently disabled): Check if rule with closed|off modifier is additional {{{ */
                if (typeof new_tokens[nrule][0][0] === 'object'
                        && new_tokens[nrule][0][0][0] === ','
                        && new_tokens[nrule][0][0][1] === 'rule separator'
                        && typeof used_selectors[nrule].state === 'object'
                        && (
                               new_tokens[nrule][0][used_selectors[nrule].state[0]][0] === 'closed'
                            || new_tokens[nrule][0][used_selectors[nrule].state[0]][0] === 'off'
                           )
                ) {

                    // parsing_warnings.push([nrule, new_tokens[nrule][0].length - 1,
                        // "This rule will be evaluated as closed but it was specified as additional rule."
                        // + " It is enough to specify this rule as normal rule using the \";\" character."
                        // + " See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:rule_modifier:closed."
                    // ]);
                }
                /* }}} */

            }

            /* Check if 24/7 is used and it does not mean 24/7 because there are other rules {{{ */
            var has_advanced = it$$1.advance();

            if (has_advanced === true && has_token['24/7'] && !done_with_warnings) {
                parsing_warnings.push([ -1, 0,
                    // Probably because of: "24/7; 12:00-14:00 open", ". Needs extra testing.
                    t('strange 24/7')
                ]);
            }
            /* }}} */

            /* Check for missing PH. {{{ */
            if (    warnings_severity >= 5
                && !has_token['PH']
                && !has_token['24/7']
                && !done_with_warnings
                && (
                        (
                            typeof oh_key === 'string'
                            && osm_tag_defaults[oh_regex_key]['warn_for_PH_missing']
                        )
                        || (typeof oh_key !== 'string')
                   )
                ) {

                var keys_with_warn_for_PH_missing = [];
                for (var key in osm_tag_defaults) {
                    if (osm_tag_defaults[key]['warn_for_PH_missing']) {
                        keys_with_warn_for_PH_missing.push(key);
                    }
                }
                parsing_warnings.push([ -1, 0,
                    t('public holiday', { 'part2': (typeof oh_key !== 'string'
                        ? t('public holiday part2', {'keys': keys_with_warn_for_PH_missing.join(', ')}) : '')})
                        // + '(see README how to provide it)' // UI of the evaluation tool does not allow to provide it (currently).
                ]);
            }
            /* }}} */

            prettifyValue();
        }
        done_with_warnings = true;

        var warnings = [];
        // FIXME: Sort based on parsing_warnings[1], tricky …
        for (var i = 0; i < parsing_warnings.length; i++) {
            warnings.push( formatWarnErrorMessage(parsing_warnings[i][0], parsing_warnings[i][1], parsing_warnings[i][2]) );
        }
        return warnings;
    }

    /* Helpers for getWarnings {{{ */

    /* Check if token is the begin of a selector and why. {{{
     *
     * :param tokens: List of token objects.
     * :param at: Position where to start.
     * :returns:
     *        * false the current token is not the begin of a selector.
     *        * Position in token array from where the decision was made that
     *          the token is the start of a selector.
     */
    function tokenIsTheBeginOfSelector(tokens, at$$1) {
        if (typeof tokens[at$$1][3] === 'string') {
            return 3;
        } else if (tokens[at$$1][1] === 'comment'
                || tokens[at$$1][1] === 'state'
                || tokens[at$$1][1] === '24/7'
                || tokens[at$$1][1] === 'rule separator'
            ){

            return 1;
        } else {
            return false;
        }
    }
    /* }}} */

    /* Get start and end position of a selector. {{{
     * For example this value 'Mo-We,Fr' will return the position of the
     * token lexeme 'Mo' and 'Fr' e.g. there indexes [ 0, 4 ] in the
     * selector array of tokens.
     *
     * :param tokens: List of token objects.
     * :param at: Position where to start.
     * :returns: Array:
     *            0. Index of first token in selector array of tokens.
     *            1. Index of last token in selector array of tokens.
     *            2. Selector type.
     */
    function getSelectorRange(tokens, at$$1) {
        var selector_start = at$$1,
            selector_end,
            pos_in_token_array;

        for (; selector_start >= 0; selector_start--) {
            pos_in_token_array = tokenIsTheBeginOfSelector(tokens, selector_start);
            if (pos_in_token_array)
                break;
        }
        selector_end = selector_start;

        if (pos_in_token_array === 1) {
            // Selector consists of a single token.

            // Include tailing colon.
            if (selector_end + 1 < tokens.length && tokens[selector_end + 1][0] === ':')
                selector_end++;

            return [ selector_start, selector_end, tokens[selector_start][pos_in_token_array] ];
        }

        for (selector_end++; selector_end < tokens.length ; selector_end++) {
            if (tokenIsTheBeginOfSelector(tokens, selector_end))
                return [ selector_start, selector_end - 1, tokens[selector_start][pos_in_token_array] ];
        }

        return [ selector_start, selector_end - 1, tokens[selector_start][pos_in_token_array] ];
    }
    /* }}} */
    /* }}} */
    /* }}} */

    /* Prettify raw value from user. {{{
     * The value is generated by putting the tokens back together to a string.
     *
     * :param argument_hash: Hash which can contain:
     *        'conf': Configuration hash.
     *        'get_internals: If true export internal data structures.
     *        'rule_index: Only prettify the rule with this index.
     * :returns: Prettified value string or object if get_internals is true.
     */
    function prettifyValue(argument_hash) {
        var user_conf = {};
        var get_internals = false;
        var rule_index;

        prettified_value = '';
        var prettified_value_array = [];

        if (typeof argument_hash === 'object') {
            if (typeof argument_hash.conf === 'object') {
                user_conf = argument_hash.conf;
            }

            if (typeof argument_hash.rule_index === 'number') {
                rule_index = argument_hash.rule_index;
            }

            if (argument_hash.get_internals === true) {
                get_internals = true;
            }

        }

        for (var key in default_prettify_conf) {
            if (typeof user_conf[key] === 'undefined') {
                user_conf[key] = default_prettify_conf[key];
            }
        }

        if (typeof moment !== 'undefined' && typeof user_conf['locale'] === 'string' && user_conf['locale'] !== 'en') {
            // FIXME: Does not work?
            // var moment_localized = moment();
            // moment_localized.locale('en');

            var global_locale = moment.locale();
            // build translation arrays from moment
            moment.locale('en');
            var weekdays_en = moment.weekdaysMin();
            // monthShort would not return what we like
            var months_en = moment.months().map(function (month) {
                return month.substr(0,3);
            });
            // FIXME: Does not work in Firefox?
            moment.locale(user_conf['locale']);
            var weekdays_local = moment.weekdaysMin();
            var months_local = moment.months().map(function (month) {
                return month.substr(0,3);
            });
            // console.log(months_local);
            moment.locale(global_locale);
        }

        for (var nrule = 0; nrule < new_tokens.length; nrule++) {
            if (new_tokens[nrule][0].length === 0) continue;
            // Rule does contain nothing useful e.g. second rule of '10:00-12:00;' (empty) which needs to be handled.

            if (typeof rule_index === 'number') {
                if (rule_index !== nrule) continue;
            } else {
                if (nrule !== 0)
                    prettified_value += (
                        new_tokens[nrule][1]
                            ? user_conf.rule_sep_string + '|| '
                            : (
                                new_tokens[nrule][0][0][1] === 'rule separator'
                                ? ','
                                : (
                                    user_conf.print_semicolon
                                    ? ';'
                                    : ''
                                )
                            ) +
                        user_conf.rule_sep_string);
            }

            var selector_start_end_type = [ 0, 0, undefined ];
            var prettified_group_value = [];
            var count = 0;
            // console.log(new_tokens[nrule][0]);

            do {
                selector_start_end_type = getSelectorRange(new_tokens[nrule][0], selector_start_end_type[1]);
                // console.log(selector_start_end_type, new_tokens[nrule][0].length, count);

                if (count > 50) {
                    throw formatLibraryBugMessage('Infinite loop.');
                }

                if (selector_start_end_type[2] !== 'rule separator') {
                    prettified_group_value.push(
                        [
                            selector_start_end_type,
                            prettifySelector(
                                new_tokens[nrule][0],
                                selector_start_end_type[0],
                                selector_start_end_type[1],
                                selector_start_end_type[2],
                                user_conf
                            ),
                        ]
                    );
                }

                selector_start_end_type[1]++;
                count++;
                // console.log(selector_start_end_type, new_tokens[nrule][0].length, count);
            } while (selector_start_end_type[1] < new_tokens[nrule][0].length);
            // console.log('Prettified value: ' + JSON.stringify(prettified_group_value, null, '    '));
            var not_sorted_prettified_group_value = prettified_group_value.slice();

            if (!done_with_selector_reordering) {
                prettified_group_value.sort(
                    function (a, b) {
                        var selector_order = [ 'year', 'month', 'week', 'holiday', 'weekday', 'time', '24/7', 'state', 'comment'];
                        return selector_order.indexOf(a[0][2]) - selector_order.indexOf(b[0][2]);
                    }
                );
            }
            var old_prettified_value_length = prettified_value.length;

            if (typeof user_conf['locale'] === 'string' && user_conf['locale'] !== 'en') {
                var global_locale = i18n.lng();
                if (global_locale !== user_conf['locale']) {
                    i18n.setLng(user_conf['locale']);
                }
                for (var i = 0; i < prettified_group_value.length; i++) {
                    var type = prettified_group_value[i][0][2];
                    if (type === 'weekday') {
                        for(var key in weekdays_en) {
                            prettified_group_value[i][1] = prettified_group_value[i][1].replace(new RegExp(weekdays_en[key], 'g'), weekdays_local[key]);
                        }
                    } else if (type === 'month') {
                        for(var key in months_en) {
                            prettified_group_value[i][1] = prettified_group_value[i][1].replace(new RegExp(months_en[key], 'g'), months_local[key]);
                        }
                    } else {
                        prettified_group_value[i][1] = i18n.t(['opening_hours:pretty.' + prettified_group_value[i][1], prettified_group_value[i][1]]);
                    }
                }
                if (global_locale !== locale) {
                    i18n.setLng(global_locale);
                }
            }

            prettified_value += prettified_group_value.map(
                function (array) {
                    return array[1];
                }
            ).join(' ');

            prettified_value_array.push( prettified_group_value );

            if (!done_with_selector_reordering_warnings) {
                for (var i = 0, l = not_sorted_prettified_group_value.length; i < l; i++) {
                    if (not_sorted_prettified_group_value[i] !== prettified_group_value[i]) {
                        // console.log(i + ': ' + prettified_group_value[i][0][2]);
                        var length = i + old_prettified_value_length; // i: Number of spaces in string.
                        for (var x = 0; x <= i; x++) {
                            length += prettified_group_value[x][1].length;
                            // console.log('Length: ' + length + ' ' + prettified_group_value[x][1]);
                        }
                        // console.log(length);
                        parsing_warnings.push([ prettified_value, length, t('switched', {
                            'first': prettified_group_value[i][0][2],
                            'second': not_sorted_prettified_group_value[i][0][2]
                        })
                        ]);
                    }
                }
            }
        }

        done_with_selector_reordering_warnings = true;
        // console.log(JSON.stringify(prettified_value_array, null, '    '));

        if (get_internals) {
            return [ prettified_value_array, new_tokens ];
        } else {
            return prettified_value;
        }
    }
    /* }}} */

    /* Check selector array of tokens for specific token name pattern. {{{
     *
     * :param tokens: List of token objects.
     * :param at: Position at which the matching should begin.
     * :param token_name(s): One or many token_name strings which have to match in that order.
     * :returns: true if token_name(s) match in order false otherwise.
     */
    function matchTokens(tokens, at$$1 /*, matches... */) {
        if (at$$1 + arguments.length - 2 > tokens.length)
            return false;
        for (var i = 0; i < arguments.length - 2; i++) {
            if (tokens[at$$1 + i][1] !== arguments[i + 2]) {
                return false;
            }
        }

        return true;
    }
    /* }}} */

    /* Generate selector wrapper with time offset {{{
     *
     * :param func: Generated selector code function.
     * :param shirt: Time to shift in milliseconds.
     * :param token_name(s): One or many token_name strings which have to match in that order.
     * :returns: See selector code.
     */
    function generateDateShifter(func, shift) {
        return function(date) {
            var res = func(new Date(date.getTime() + shift));

            if (typeof res[1] === 'undefined')
                return res;
            return [ res[0], new Date(res[1].getTime() - shift) ];
        };
    }
    /* }}} */

    /* Top-level parser {{{
     *
     * :param tokens: List of token objects.
     * :param at: Position where to start.
     * :param selectors: Reference to selector object.
     * :param nrule: Rule number starting with 0.
     * :returns: See selector code.
     */
    function parseGroup(tokens, at$$1, selectors, nrule) {
        var rule_modifier_specified = false;

        // console.log(tokens); // useful for debugging of tokenize
        var last_selector = [];
        while (at$$1 < tokens.length) {
            // console.log('Parsing at position', at +':', tokens[at]);
            if (matchTokens(tokens, at$$1, 'weekday')) {
                at$$1 = parseWeekdayRange(tokens, at$$1, selectors);
            } else if (matchTokens(tokens, at$$1, '24/7')) {
                selectors.time.push(function() { return [true]; });
                // Not needed. If there is no selector it automatically matches everything.
                // WRONG: This only works if there is no other selector in this selector group ...
                at$$1++;
            } else if (matchTokens(tokens, at$$1, 'holiday')) {
                if (matchTokens(tokens, at$$1+1, ',')) {
                    at$$1 = parseHoliday(tokens, at$$1, selectors, true);
                } else {
                    at$$1 = parseHoliday(tokens, at$$1, selectors, false);
                }
                week_stable = false;
            } else if (matchTokens(tokens, at$$1, 'month', 'number')
                    || matchTokens(tokens, at$$1, 'month', 'weekday')
                    || matchTokens(tokens, at$$1, 'year', 'month', 'number')
                    || matchTokens(tokens, at$$1, 'year', 'event')
                    || matchTokens(tokens, at$$1, 'event')) {

                at$$1 = parseMonthdayRange(tokens, at$$1, nrule);
                week_stable = false;
            } else if (matchTokens(tokens, at$$1, 'year')) {
                at$$1 = parseYearRange(tokens, at$$1);
                week_stable = false;
            } else if (matchTokens(tokens, at$$1, 'month')) {
                at$$1 = parseMonthRange(tokens, at$$1);
                // week_stable = false; // Decided based on the actual value/tokens.
            } else if (matchTokens(tokens, at$$1, 'week')) {
                tokens[at$$1][3] = 'week';
                at$$1 = parseWeekRange(tokens, at$$1);

            } else if (at$$1 !== 0 && at$$1 !== tokens.length - 1 && tokens[at$$1][0] === ':'
                && !(typeof last_selector[1] === 'string' && last_selector[1] === 'time')) {
                /* Ignore colon if they appear somewhere else than as time separator.
                 * Except the start or end of the value.
                 * This provides compatibility with the syntax proposed by Netzwolf:
                 * https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#separator_for_readability
                 * Check for valid use of <separator_for_readability> is implemented in function getWarnings().
                 */

                if (!done_with_warnings && matchTokens(tokens, at$$1-1, 'holiday')) {
                    parsing_warnings.push([nrule, at$$1, t('no colon after', { 'token': tokens[at$$1-1][1] })]);
                }

                at$$1++;
            } else if (matchTokens(tokens, at$$1, 'number', 'timesep')
                    || matchTokens(tokens, at$$1, 'timevar')
                    || matchTokens(tokens, at$$1, '(', 'timevar')
                    || matchTokens(tokens, at$$1, 'number', '-')) {

                at$$1 = parseTimeRange(tokens, at$$1, selectors, false);
                last_selector = [at$$1 , 'time'];

            } else if (matchTokens(tokens, at$$1, 'state')) {

                if (tokens[at$$1][0] === 'open') {
                    selectors.meaning = true;
                } else if (tokens[at$$1][0] === 'closed' || tokens[at$$1][0] === 'off') {
                    selectors.meaning = false;
                } else {
                    selectors.meaning = false;
                    selectors.unknown = true;
                }

                rule_modifier_specified = true;
                at$$1++;
                if (typeof tokens[at$$1] === 'object' && tokens[at$$1][0] === ',') // additional rule
                    at$$1 = [ at$$1 + 1 ];

            } else if (matchTokens(tokens, at$$1, 'comment')) {
                selectors.comment = tokens[at$$1][0];
                if (!rule_modifier_specified) {
                    // Then it is unknown. Either with unknown explicitly
                    // specified or just a comment.
                    selectors.meaning = false;
                    selectors.unknown = true;
                }

                rule_modifier_specified = true;
                at$$1++;
                if (typeof tokens[at$$1] === 'object' && tokens[at$$1][0] === ',') { // additional rule
                    at$$1 = [ at$$1 + 1 ];
                }
            } else if ((at$$1 === 0 || at$$1 === tokens.length - 1) && matchTokens(tokens, at$$1, 'rule separator')) {
                at$$1++;
                // console.log("value: " + nrule);
                // throw formatLibraryBugMessage('Not implemented yet.');
            } else {
                var warnings = getWarnings();
                throw formatWarnErrorMessage(nrule, at$$1, t('unexpected token', {token: tokens[at$$1][1] })) + (warnings ? (' ' + warnings.join('; ')) : '');
            }

            if (typeof at$$1 === 'object') { // additional rule
                tokens[at$$1[0] - 1][1] = 'rule separator';
                break;
            }
            if (typeof last_selector[0] === 'number' && last_selector[0] !== at$$1) {
                last_selector = [];
            }
        }

        return at$$1;
    }

    /* Not used
    function get_last_token_pos_in_token_group(tokens, at, last_at) {
        for (at++; at < last_at; at++) {
            if (typeof tokens[at] === 'object') {
                if (typeof tokens[at][3] === 'string'
                        || tokens[at][1] === 'comment'
                        || tokens[at][1] === 'state'){

                        return at - 1;
                }
            }
        }
        return last_at;
    }
    */

    /* }}} */

    // helper functions for sub parser {{{

    /* For given date, returns date moved to the start of the day with an offset specified in minutes. {{{
     * For example, if date is 2014-05-19_18:17:12, dateAtDayMinutes would
     * return 2014-05-19_02:00:00 for minutes=120.
     *
     * :param date: Date object.
     * :param minutes: Minutes used as offset starting from midnight of current day.
     * :returns: Moved date object.
     */
    function dateAtDayMinutes(date, minutes) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, minutes);
    }
    /* }}} */

    /* For given date, returns date moved to the specific day of week {{{
     *
     * :param date: Date object.
     * :param weekday: Integer number for day of week. Starting with zero (Sunday).
     * :returns: Moved date object.
     */
    function dateAtNextWeekday(date, weekday) {
        var delta = weekday - date.getDay();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + delta + (delta < 0 ? 7 : 0));
    }
    /* }}} */

    /* Function to determine whether an array contains a value {{{
     * Source: https://stackoverflow.com/a/1181586
     *
     * :param needle: Element to find.
     * :returns: Index of element if present, if not present returns -1.
     */
    function parseNumRange(tokens, at$$1, func) {
        for (; at$$1 < tokens.length; at$$1++) {
            if (matchTokens(tokens, at$$1, 'number', '-', 'number')) {
                // Number range
                func(tokens[at$$1][0], tokens[at$$1+2][0], at$$1);
                at$$1 += 3;
            } else if (matchTokens(tokens, at$$1, '-', 'number')) {
                // Negative number
                func(-tokens[at$$1+1][0], -tokens[at$$1+1][0], at$$1);
                at$$1 += 2;
            } else if (matchTokens(tokens, at$$1, 'number')) {
                // Single number
                func(tokens[at$$1][0], tokens[at$$1][0], at$$1);
                at$$1++;
            } else {
                throw formatWarnErrorMessage(nrule, at$$1 + matchTokens(tokens, at$$1, '-'),
                    'Unexpected token in number range: ' + tokens[at$$1][1]);
            }

            if (!matchTokens(tokens, at$$1, ','))
                break;
        }

        return at$$1;
    }
    /* }}} */

    /* List parser for constrained weekdays in month range {{{
     * e.g. Su[-1] which selects the last Sunday of the month.
     *
     * :param tokens: List of token objects.
     * :param at: Position where to start.
     * :returns: Array:
     *            0. Constrained weekday number.
     *            1. Position at which the token does not belong to the list any more (after ']' token).
     */
    function getConstrainedWeekday(tokens, at$$1) {
        var number = 0;
        var endat = parseNumRange(tokens, at$$1, function(from, to, at$$1) {

            // bad number
            if (from === 0 || from < -5 || from > 5)
                throw formatWarnErrorMessage(nrule, at$$1,
                    t('number -5 to 5'));

            if (from === to) {
                if (number !== 0)
                    throw formatWarnErrorMessage(nrule, at$$1,
                        t('one weekday constraint'));
                number = from;
            } else {
                throw formatWarnErrorMessage(nrule, at$$1+2,
                    t('range constrained weekdays'));
            }
        });

        if (!matchTokens(tokens, endat, ']'))
            throw formatWarnErrorMessage(nrule, endat, t('expected', {symbol: ']'}));

        return [ number, endat + 1 ];
    }
    /* }}} */

    // Check if period is ok. Period 0 or 1 don’t make much sense.
    function checkPeriod(at$$1, period, period_type, parm_string) {
        if (done_with_warnings)
            return;

        if (period === 0) {
            throw formatWarnErrorMessage(nrule, at$$1,
                t('range zero', { 'type': period_type }));
        } else if (period === 1) {
            if (typeof parm_string === 'string' && parm_string === 'no_end_year')
                parsing_warnings.push([nrule, at$$1, t('period one year+', {'type': period_type})]);
            else
                parsing_warnings.push([nrule, at$$1, t('period one', {'type': period_type})]);
        }
    }

    /* Get date moved to constrained weekday (and moved for add_days. {{{
     * E.g. used for 'Aug Su[-1] -1 day'.
     *
     * :param year: Year as integer.
     * :param month: Month as integer starting with zero.
     * :param weekday: Integer number for day of week. Starting with zero (Sunday).
     * :param constrained_weekday: Position where to start.
     * :returns: Date object.
     */
    function getDateForConstrainedWeekday(year, month, weekday, constrained_weekday, add_days) {
        var tmp_date = dateAtNextWeekday(
            new Date(year, month + (constrained_weekday[0] > 0 ? 0 : 1), 1), weekday);

        tmp_date.setDate(tmp_date.getDate() + (constrained_weekday[0] + (constrained_weekday[0] > 0 ? -1 : 0)) * 7);

        if (typeof add_days === 'object' && add_days[1])
            tmp_date.setDate(tmp_date.getDate() + add_days[0]);

        return tmp_date;
    }
    /* }}} */

    /* Check if date is valid. {{{
     *
     * :param month: Month as integer starting with zero.
     * :param date: Day of month as integer.
     * :returns: undefined. There is no real return value. This function just throws an exception if something is wrong.
     */
    function checkIfDateIsValid(month, day, nrule, at$$1) {
        // May use this instead. The problem is that this does not give feedback as precise as the code which is used in this function.
        // var testDate = new Date(year, month, day);
        // if (testDate.getDate() !== day || testDate.getMonth() !== month || testDate.getFullYear() !== year) {
        //     console.error('date not valid');
        // }

        // https://en.wikipedia.org/wiki/Month#Julian_and_Gregorian_calendars
        if (day < 1 || day > 31) {
            throw formatWarnErrorMessage(nrule, at$$1, t('month 31', {'month': months$$1[month]}));
        } else if ((month === 3 || month === 5 || month === 8 || month === 10) && day === 31) {
            throw formatWarnErrorMessage(nrule, at$$1, t('month 30', {'month': months$$1[month]}));
        } else if (month === 1 && day === 30) {
            throw formatWarnErrorMessage(nrule, at$$1, t('month feb', {'month': months$$1[month]}));
        }
    }
    /* }}} */
    /* }}} */

    /* Time range parser (10:00-12:00,14:00-16:00) {{{
     *
     * :param tokens: List of token objects.
     * :param at: Position where to start.
     * :param selectors: Reference to selector object.
     * :param extended_open_end: Used for combined time range with open end.
     * extended_open_end: <time> - <time> +
     *        parameter at is here A (if extended_open_end is true)
     * :returns: Position at which the token does not belong to the selector anymore.
     */
    function parseTimeRange(tokens, at$$1, selectors, extended_open_end) {
        if (!extended_open_end)
            tokens[at$$1][3] = 'time';

        for (; at$$1 < tokens.length; at$$1++) {
            var has_time_var_calc = [], has_normal_time = []; // element 0: start time, 1: end time
                has_normal_time[0]   = matchTokens(tokens, at$$1, 'number', 'timesep', 'number');
                has_time_var_calc[0] = matchTokens(tokens, at$$1, '(', 'timevar');
            var minutes_from,
                minutes_to;
            if (has_normal_time[0] || matchTokens(tokens, at$$1, 'timevar') || has_time_var_calc[0]) {
                // relying on the fact that always *one* of them is true

                var is_point_in_time = false; // default no time range
                var has_open_end     = false; // default no open end
                var timevar_add      = [ 0, 0 ];
                var timevar_string   = [];    // capture timevar string like 'sunrise' to calculate it for the current date.
                var point_in_time_period;

                // minutes_from
                if (has_normal_time[0]) {
                    minutes_from = getMinutesByHoursMinutes(tokens, nrule, at$$1+has_time_var_calc[0]);
                } else {
                    timevar_string[0] = tokens[at$$1+has_time_var_calc[0]][0];
                    minutes_from = word_value_replacement[timevar_string[0]];

                    if (has_time_var_calc[0]) {
                        timevar_add[0] = parseTimevarCalc(tokens, at$$1);
                        minutes_from += timevar_add[0];
                    }
                }

                var at_end_time = at$$1+(has_normal_time[0] ? 3 : (has_time_var_calc[0] ? 7 : 1))+1; // after '-'
                if (!matchTokens(tokens, at_end_time - 1, '-')) { // not time range
                    if (matchTokens(tokens, at_end_time - 1, '+')) {
                        has_open_end = true;
                    } else {
                        if (oh_mode === 0) {
                            throw formatWarnErrorMessage(nrule,
                                at$$1+(
                                    has_normal_time[0] ? (
                                        typeof tokens[at$$1+3] === 'object' ? 3 : 2
                                    ) : (
                                        has_time_var_calc[0] ? 2 : (
                                                typeof tokens[at$$1+1] === 'object' ? 1 : 0
                                            )
                                    )
                                ),
                                t('point in time', {
                                    'calc': (has_time_var_calc[0] ? t('calculation') + ' ' : ''),
                                    'libraryname': library_name
                                }));
                        } else {
                            minutes_to = minutes_from + 1;
                            is_point_in_time = true;
                        }
                    }
                }

                // minutes_to
                if (has_open_end) {
                    if (extended_open_end === 1) {
                        minutes_from += minutes_in_day;
                    }
                    if (minutes_from >= 22 * 60) {

                        minutes_to = minutes_from +  8 * 60;
                    } else if (minutes_from >= 17 * 60) {
                        minutes_to = minutes_from + 10 * 60;
                    } else {
                        minutes_to = minutes_in_day;
                    }
                } else if (!is_point_in_time) {
                    has_normal_time[1] = matchTokens(tokens, at_end_time, 'number', 'timesep', 'number');
                    has_time_var_calc[1]      = matchTokens(tokens, at_end_time, '(', 'timevar');
                    if (!has_normal_time[1] && !matchTokens(tokens, at_end_time, 'timevar') && !has_time_var_calc[1]) {
                        throw formatWarnErrorMessage(nrule, at_end_time - (typeof tokens[at_end_time] === 'object' ? 0 : 1),
                                t('time range continue'));
                    } else {
                        if (has_normal_time[1]) {
                            minutes_to = getMinutesByHoursMinutes(tokens, nrule, at_end_time);
                        } else {
                            timevar_string[1] = tokens[at_end_time+has_time_var_calc[1]][0];
                            minutes_to = word_value_replacement[timevar_string[1]];
                        }

                        if (has_time_var_calc[1]) {
                            timevar_add[1] = parseTimevarCalc(tokens, at_end_time);
                            minutes_to += timevar_add[1];
                        }
                    }
                }

                at$$1 = at_end_time + (is_point_in_time ? -1 :
                        (has_normal_time[1] ? 3 : (has_time_var_calc[1] ? 7 : !has_open_end))
                    );

                if (matchTokens(tokens, at$$1, '/', 'number')) {
                    if (matchTokens(tokens, at$$1 + 2, 'timesep', 'number')) { // /hours:minutes
                        point_in_time_period = getMinutesByHoursMinutes(tokens, nrule, at$$1 + 1);
                        at$$1 += 4;
                    } else { // /minutes
                        point_in_time_period = tokens[at$$1 + 1][0];
                        at$$1 += 2;
                        if (matchTokens(tokens, at$$1, 'timesep'))
                            throw formatWarnErrorMessage(nrule, at$$1,
                                t('period continue'));
                    }

                    // Check at this later state in the if condition to get the correct position.
                    if (oh_mode === 0) {
                        throw formatWarnErrorMessage(nrule, at$$1 - 1,
                            t('time range mode', {'libraryname': library_name}));
                    }

                    is_point_in_time = true;
                } else if (matchTokens(tokens, at$$1, '+')) {
                    parseTimeRange(tokens, at_end_time, selectors, minutes_to < minutes_from ? 1 : true);
                    at$$1++;
                } else if (oh_mode === 1 && !is_point_in_time) {
                    throw formatWarnErrorMessage(nrule, at_end_time,
                        t('point in time mode', {'libraryname': library_name}));
                }

                if (typeof lat === 'string') { // lon will also be defined (see above)
                    if (!has_normal_time[0] || !(has_normal_time[1] || has_open_end || is_point_in_time) ) {
                        week_stable = false;
                    }
                } else { // we can not calculate exact times so we use the already applied constants (word_value_replacement).
                    timevar_string = [];
                }

                // Normalize minutes into range.
                if (!extended_open_end && minutes_from >= minutes_in_day) {
                    throw formatWarnErrorMessage(nrule, at_end_time - 2,
                        t('outside current day'));
                }
                if (minutes_to < minutes_from || ((has_normal_time[0] && has_normal_time[1]) && minutes_from === minutes_to)) {
                    minutes_to += minutes_in_day;
                }
                if (minutes_to > minutes_in_day * 2) {
                    throw formatWarnErrorMessage(nrule, at_end_time + (has_normal_time[1] ? 4 : (has_time_var_calc[1] ? 7 : 1)) - 2,
                        t('two midnights'));
                }

                // This shortcut makes always-open range check faster.
                if (minutes_from === 0 && minutes_to === minutes_in_day) {
                    selectors.time.push(function() { return [true]; });
                } else {
                    if (minutes_to > minutes_in_day) { // has_normal_time[1] must be true
                        selectors.time.push(function(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end) { return function(date) {
                            var ourminutes = date.getHours() * 60 + date.getMinutes();

                            if (timevar_string[0]) {
                                var date_from = SunCalc.getTimes(date, lat, lon)[timevar_string[0]];
                                minutes_from  = date_from.getHours() * 60 + date_from.getMinutes() + timevar_add[0];
                            }
                            if (timevar_string[1]) {
                                var date_to = SunCalc.getTimes(date, lat, lon)[timevar_string[1]];
                                minutes_to  = date_to.getHours() * 60 + date_to.getMinutes() + timevar_add[1];
                                minutes_to += minutes_in_day;
                                // Needs to be added because it was added by
                                // normal times: if (minutes_to < minutes_from)
                                // above the selector construction.
                            } else if (is_point_in_time && typeof point_in_time_period !== 'number') {
                                minutes_to = minutes_from + 1;
                            }

                            if (typeof point_in_time_period === 'number') {
                                if (ourminutes < minutes_from) {
                                    return [false, dateAtDayMinutes(date, minutes_from)];
                                } else if (ourminutes <= minutes_to) {
                                    for (var cur_min = minutes_from; ourminutes + point_in_time_period >= cur_min; cur_min += point_in_time_period) {
                                        if (cur_min === ourminutes) {
                                            return [true, dateAtDayMinutes(date, ourminutes + 1)];
                                        } else if (ourminutes < cur_min) {
                                            return [false, dateAtDayMinutes(date, cur_min)];
                                        }
                                    }
                                }
                                return [false, dateAtDayMinutes(date, minutes_in_day)];
                            } else {
                                if (ourminutes < minutes_from)
                                    return [false, dateAtDayMinutes(date, minutes_from)];
                                else
                                    return [true, dateAtDayMinutes(date, minutes_to), has_open_end, extended_open_end];
                            }
                        }}(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end));

                        selectors.wraptime.push(function(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, point_in_time_period, extended_open_end) { return function(date) {
                            var ourminutes = date.getHours() * 60 + date.getMinutes();

                            if (timevar_string[0]) {
                                var date_from = SunCalc.getTimes(date, lat, lon)[timevar_string[0]];
                                minutes_from  = date_from.getHours() * 60 + date_from.getMinutes() + timevar_add[0];
                            }
                            if (timevar_string[1]) {
                                var date_to = SunCalc.getTimes(date, lat, lon)[timevar_string[1]];
                                minutes_to  = date_to.getHours() * 60 + date_to.getMinutes() + timevar_add[1];
                                // minutes_in_day does not need to be added.
                                // For normal times in it was added in: if (minutes_to < // minutes_from)
                                // above the selector construction and
                                // subtracted in the selector construction call
                                // which returns the selector function.
                            }

                            if (typeof point_in_time_period === 'number') {
                                if (ourminutes <= minutes_to) {
                                    for (var cur_min = 0; ourminutes + point_in_time_period >= cur_min; cur_min += point_in_time_period) {
                                        if (cur_min === ourminutes) {
                                            return [true, dateAtDayMinutes(date, ourminutes + 1)];
                                        } else if (ourminutes < cur_min) {
                                            return [false, dateAtDayMinutes(date, cur_min)];
                                        }
                                    }
                                }
                            } else {
                                if (ourminutes < minutes_to)
                                    return [true, dateAtDayMinutes(date, minutes_to), has_open_end, extended_open_end];
                            }
                            return [false, undefined];
                        }}(minutes_from, minutes_to - minutes_in_day, timevar_string, timevar_add, has_open_end, point_in_time_period, extended_open_end));
                    } else {
                        selectors.time.push(function(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period) { return function(date) {
                            var ourminutes = date.getHours() * 60 + date.getMinutes();

                            if (timevar_string[0]) {
                                var date_from = SunCalc.getTimes(date, lat, lon)[timevar_string[0]];
                                minutes_from  = date_from.getHours() * 60 + date_from.getMinutes() + timevar_add[0];
                            }
                            if (timevar_string[1]) {
                                var date_to = SunCalc.getTimes(date, lat, lon)[timevar_string[1]];
                                minutes_to  = date_to.getHours() * 60 + date_to.getMinutes() + timevar_add[1];
                            } else if (is_point_in_time && typeof point_in_time_period !== 'number') {
                                minutes_to = minutes_from + 1;
                            }

                            if (typeof point_in_time_period === 'number') {
                                if (ourminutes < minutes_from) {
                                    return [false, dateAtDayMinutes(date, minutes_from)];
                                } else if (ourminutes <= minutes_to) {
                                    for (var cur_min = minutes_from; ourminutes + point_in_time_period >= cur_min; cur_min += point_in_time_period) {
                                        if (cur_min === ourminutes) {
                                            return [true, dateAtDayMinutes(date, ourminutes + 1)];
                                        } else if (ourminutes < cur_min) {
                                            return [false, dateAtDayMinutes(date, cur_min)];
                                        }
                                    }
                                }
                                return [false, dateAtDayMinutes(date, minutes_in_day)];
                            } else {
                                if (ourminutes < minutes_from)
                                    return [false, dateAtDayMinutes(date, minutes_from)];
                                else if (ourminutes < minutes_to)
                                    return [true, dateAtDayMinutes(date, minutes_to), has_open_end];
                                else
                                    return [false, dateAtDayMinutes(date, minutes_from + minutes_in_day)];
                            }
                        }}(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period));
                    }
                }

            } else if (matchTokens(tokens, at$$1, 'number', '-', 'number')) { // "Mo 09-18" (Please don’t use this) -> "Mo 09:00-18:00".
                minutes_from = tokens[at$$1][0]   * 60;
                minutes_to   = tokens[at$$1+2][0] * 60;
                if (!done_with_warnings)
                    parsing_warnings.push([nrule, at$$1 + 2, t('without minutes', {
                        'syntax': (tokens[at$$1][0]   < 10 ? '0' : '') + tokens[at$$1][0]   + ':00-'
                                + (tokens[at$$1+2][0] < 10 ? '0' : '') + tokens[at$$1+2][0] + ':00'
                    })]);

                if (minutes_from >= minutes_in_day)
                    throw formatWarnErrorMessage(nrule, at$$1, t('outside day'));
                if (minutes_to < minutes_from)
                    minutes_to += minutes_in_day;
                if (minutes_to > minutes_in_day * 2)
                    throw formatWarnErrorMessage(nrule, at$$1 + 2, t('two midnights'));

                if (minutes_to > minutes_in_day) {
                    selectors.time.push(function(minutes_from, minutes_to) { return function(date) {
                        var ourminutes = date.getHours() * 60 + date.getMinutes();

                        if (ourminutes < minutes_from)
                            return [false, dateAtDayMinutes(date, minutes_from)];
                        else
                            return [true, dateAtDayMinutes(date, minutes_to)];
                    }}(minutes_from, minutes_to));

                    selectors.wraptime.push(function(minutes_to) { return function(date) {
                        var ourminutes = date.getHours() * 60 + date.getMinutes();

                        if (ourminutes < minutes_to) {
                            return [true, dateAtDayMinutes(date, minutes_to)];
                        } else {
                            return [false, undefined];
                        }
                    }}(minutes_to - minutes_in_day));
                } else {
                    selectors.time.push(function(minutes_from, minutes_to) { return function(date) {
                        var ourminutes = date.getHours() * 60 + date.getMinutes();

                        if (ourminutes < minutes_from)
                            return [false, dateAtDayMinutes(date, minutes_from)];
                        else if (ourminutes < minutes_to)
                            return [true, dateAtDayMinutes(date, minutes_to), has_open_end];
                        else
                            return [false, dateAtDayMinutes(date, minutes_from + minutes_in_day)];
                    }}(minutes_from, minutes_to));
                }

                at$$1 += 3;
            } else { // additional rule
                if (matchTokens(tokens, at$$1, '('))
                    throw formatWarnErrorMessage(nrule, at$$1, 'Missing variable time (e.g. sunrise) after: "' + tokens[at$$1][1] + '"');
                if (matchTokens(tokens, at$$1, 'number', 'timesep'))
                    throw formatWarnErrorMessage(nrule, at$$1+1, 'Missing minutes in time range after: "' + tokens[at$$1+1][1] + '"');
                if (matchTokens(tokens, at$$1, 'number'))
                    throw formatWarnErrorMessage(nrule, at$$1 + (typeof tokens[at$$1+1] === 'object' ? 1 : 0),
                            'Missing time separator in time range after: "' + tokens[at$$1][1] + '"');
                return [ at$$1 ];
            }

            if (!matchTokens(tokens, at$$1, ','))
                break;
        }

        return at$$1;
    }
    /* }}} */

    /* Helpers for time range parser {{{ */

    /* Get time in minutes from <hour>:<minute> (tokens). {{{
     * Only used if throwing an error is wanted.
     *
     * :param tokens: List of token objects.
     * :param nrule: Rule number starting with 0.
     * :param at: Position at which the time begins.
     * :returns: Time in minutes.
     */
    function getMinutesByHoursMinutes(tokens, nrule, at$$1) {
        if (tokens[at$$1+2][0] > 59)
            throw formatWarnErrorMessage(nrule, at$$1+2,
                    'Minutes are greater than 59.');
        return tokens[at$$1][0] * 60 + tokens[at$$1+2][0];
    }
    /* }}} */

    /* Get time in minutes from "(sunrise-01:30)" {{{
     * Extract the added or subtracted time from "(sunrise-01:30)"
     * returns time in minutes e.g. -90.
     *
     * :param tokens: List of token objects.
     * :param at: Position where the specification for the point in time could be.
     * :returns: Time in minutes on suggest, throws an exception otherwise.
    */
    function parseTimevarCalc(tokens, at$$1) {
        var error;
        if (matchTokens(tokens, at$$1+2, '+') || matchTokens(tokens, at$$1+2, '-')) {
            if (matchTokens(tokens, at$$1+3, 'number', 'timesep', 'number')) {
                if (matchTokens(tokens, at$$1+6, ')')) {
                    var add_or_subtract = tokens[at$$1+2][0] === '+' ? '1' : '-1';
                    var minutes = getMinutesByHoursMinutes(tokens, nrule, at$$1+3) * add_or_subtract;
                    if (minutes === 0)
                        parsing_warnings.push([ nrule, at$$1+5, t('zero calculation') ]
                            );
                    return minutes;
                } else {
                    error = [ at$$1+6, '. ' + t('missing', {'symbol': ")"}) + '.'];
                }
            } else {
                error = [ at$$1+5, ' ' + t('(time)') + '.'];
            }
        } else {
            error = [ at$$1+2, '. ' + t('expected', {'symbol': '+" or "-'})];
        }

        if (error)
            throw formatWarnErrorMessage(nrule, error[0],
                 t('calculation syntax')+ error[1]);
    }
    /* }}} */
    /* }}} */

    /* Weekday range parser (Mo,We-Fr,Sa[1-2,-1],PH). {{{
     *
     * :param tokens: List of token objects.
     * :param at: Position where the weekday tokens could be.
     * :param selectors: Reference to selector object.
     * :returns: Position at which the token does not belong to the selector anymore.
     */
    function parseWeekdayRange(tokens, at$$1, selectors, in_holiday_selector) {
        if (!in_holiday_selector) {
            in_holiday_selector = true;
            tokens[at$$1][3] = 'weekday';
        }

        for (; at$$1 < tokens.length; at$$1++) {
            if (matchTokens(tokens, at$$1, 'weekday', '[')) {
                // Conditional weekday (Mo[3])
                var numbers = [];

                // Get list of constraints
                var endat = parseNumRange(tokens, at$$1+2, function(from, to, at$$1) {

                    // bad number
                    if (from === 0 || from < -5 || from > 5)
                        throw formatWarnErrorMessage(nrule, at$$1,
                            t('number -5 to 5'));

                    if (from === to) {
                        numbers.push(from);
                    } else if (from < to) {
                        for (var i = from; i <= to; i++) {
                            // bad number
                            if (i === 0 || i < -5 || i > 5)
                                throw formatWarnErrorMessage(nrule, at$$1+2,
                                    t('number -5 to 5'));

                            numbers.push(i);
                        }
                    } else {
                        throw formatWarnErrorMessage(nrule, at$$1+2,
                            t('bad range',{'from': from, 'to': to}));
                    }
                });

                if (!matchTokens(tokens, endat, ']')) {
                    throw formatWarnErrorMessage(
                        nrule,
                        endat + (typeof tokens[endat] === 'object' ? 0 : -1),
                        t('] or more numbers')
                    );
                }

                var add_days = getMoveDays(tokens, endat+1, 6, 'constrained weekdays');
                week_stable = false;

                // Create selector for each list element.
                for (var nnumber = 0; nnumber < numbers.length; nnumber++) {

                    selectors.weekday.push(function(weekday, number, add_days) { return function(date) {
                        var date_num = getValueForDate(date, false); // Year not needed to distinguish.
                        var start_of_this_month = new Date(date.getFullYear(), date.getMonth(), 1);
                        var start_of_next_month = new Date(date.getFullYear(), date.getMonth() + 1, 1);

                        var target_day_this_month;

                        target_day_this_month = getDateForConstrainedWeekday(date.getFullYear(), date.getMonth(), weekday, [ number ]);

                        var target_day_with_added_days_this_month = new Date(target_day_this_month.getFullYear(),
                            target_day_this_month.getMonth(), target_day_this_month.getDate() + add_days);

                        // The target day with added days can be before this month
                        if (target_day_with_added_days_this_month.getTime() < start_of_this_month.getTime()) {
                            // but in this case, the target day without the days added needs to be in this month
                            if (target_day_this_month.getTime() >= start_of_this_month.getTime()) {
                                // so we calculate it for the month
                                // following this month and hope that the
                                // target day will actually be this month.

                                target_day_with_added_days_this_month = dateAtNextWeekday(
                                    new Date(date.getFullYear(), date.getMonth() + (number > 0 ? 0 : 1) + 1, 1), weekday);
                                target_day_this_month.setDate(target_day_with_added_days_this_month.getDate()
                                    + (number + (number > 0 ? -1 : 0)) * 7 + add_days);
                            } else {
                                // Calculated target day is not inside this month
                                // therefore the specified weekday (e.g. fifth Sunday)
                                // does not exist this month. Try it next month.
                                return [false, start_of_next_month];
                            }
                        } else if (target_day_with_added_days_this_month.getTime() >= start_of_next_month.getTime()) {
                            // The target day is in the next month. If the target day without the added days is not in this month
                            if (target_day_this_month.getTime() >= start_of_next_month.getTime())
                                return [false, start_of_next_month];
                        }

                        var target_day_with_added_moved_days_this_month;
                        if (add_days > 0) {
                            target_day_with_added_moved_days_this_month = dateAtNextWeekday(
                                new Date(date.getFullYear(), date.getMonth() + (number > 0 ? 0 : 1) -1, 1), weekday);
                            target_day_with_added_moved_days_this_month.setDate(target_day_with_added_moved_days_this_month.getDate()
                                + (number + (number > 0 ? -1 : 0)) * 7 + add_days);

                            if (date_num === getValueForDate(target_day_with_added_moved_days_this_month, false))
                                return [true, dateAtDayMinutes(date, minutes_in_day)];
                        } else if (add_days < 0) {
                            target_day_with_added_moved_days_this_month = dateAtNextWeekday(
                                new Date(date.getFullYear(), date.getMonth() + (number > 0 ? 0 : 1) + 1, 1), weekday);
                            target_day_with_added_moved_days_this_month.setDate(target_day_with_added_moved_days_this_month.getDate()
                                + (number + (number > 0 ? -1 : 0)) * 7 + add_days);

                            if (target_day_with_added_moved_days_this_month.getTime() >= start_of_next_month.getTime()) {
                                if (target_day_with_added_days_this_month.getTime() >= start_of_next_month.getTime())
                                    return [false, target_day_with_added_moved_days_this_month];
                            } else {
                                if (target_day_with_added_days_this_month.getTime() < start_of_next_month.getTime()
                                    && getValueForDate(target_day_with_added_days_this_month, false) === date_num)
                                    return [true, dateAtDayMinutes(date, minutes_in_day)];

                                target_day_with_added_days_this_month = target_day_with_added_moved_days_this_month;
                            }
                        }

                        // we hit the target day
                        if (date.getDate() === target_day_with_added_days_this_month.getDate()) {
                            return [true, dateAtDayMinutes(date, minutes_in_day)];
                        }

                        // we're before target day
                        if (date.getDate() < target_day_with_added_days_this_month.getDate()) {
                            return [false, target_day_with_added_days_this_month];
                        }

                        // we're after target day, set check date to next month
                        return [false, start_of_next_month];
                    }}(tokens[at$$1][0], numbers[nnumber], add_days[0]));
                }

                at$$1 = endat + 1 + add_days[1];
            } else if (matchTokens(tokens, at$$1, 'weekday')) {
                // Single weekday (Mo) or weekday range (Mo-Fr)
                var is_range = matchTokens(tokens, at$$1+1, '-', 'weekday');

                var weekday_from = tokens[at$$1][0];
                var weekday_to = is_range ? tokens[at$$1+2][0] : weekday_from;

                var inside = true;

                // handle reversed range
                if (weekday_to < weekday_from) {
                    var tmp = weekday_to;
                    weekday_to = weekday_from - 1;
                    weekday_from = tmp + 1;
                    inside = false;
                }

                if (weekday_to < weekday_from) { // handle full range
                    selectors.weekday.push(function() { return [true]; });
                    // Not needed. If there is no selector it automatically matches everything.
                    // WRONG: This only works if there is no other selector in this selector group ...
                } else {
                    selectors.weekday.push(function(weekday_from, weekday_to, inside) { return function(date) {
                        var ourweekday = date.getDay();

                        if (ourweekday < weekday_from || ourweekday > weekday_to) {
                            return [!inside, dateAtNextWeekday(date, weekday_from)];
                        } else {
                            return [inside, dateAtNextWeekday(date, weekday_to + 1)];
                        }
                    }}(weekday_from, weekday_to, inside));
                }

                at$$1 += is_range ? 3 : 1;
            } else if (matchTokens(tokens, at$$1, 'holiday')) {
                week_stable = false;
                return parseHoliday(tokens, at$$1, selectors, true, in_holiday_selector);
            } else if (matchTokens(tokens, at$$1 - 1, ',')) { // additional rule
                throw formatWarnErrorMessage(
                    nrule,
                    at$$1 - 1,
                    t('additional rule no sense'));
            } else {
                throw formatWarnErrorMessage(nrule, at$$1, t('unexpected token weekday range', {'token': tokens[at$$1][1]}));
            }

            if (!matchTokens(tokens, at$$1, ',')) {
                break;
            }
        }

        return at$$1;
    }
    /* }}} */

    /* Get the number of days a date should be moved (if any). {{{
     *
     * :param tokens: List of token objects.
     * :param at: Position where the date moving tokens could be.
     * :param max_differ: Maximal number of days to move (could also be zero if there are no day move tokens).
     * :returns: Array:
     *            0. Days to add.
     *            1. How many tokens.
     */
    function getMoveDays(tokens, at$$1, max_differ, name) {
        var add_days = [ 0, 0 ]; // [ 'days to add', 'how many tokens' ]
        add_days[0] = matchTokens(tokens, at$$1, '+') || (matchTokens(tokens, at$$1, '-') ? -1 : 0);
        if (add_days[0] !== 0 && matchTokens(tokens, at$$1+1, 'number', 'calcday')) {
            // continues with '+ 5 days' or something like that
            if (tokens[at$$1+1][0] > max_differ)
                throw formatWarnErrorMessage(nrule, at$$1+2,
                    t('max differ',{'maxdiffer': max_differ, 'name': name}));
            add_days[0] *= tokens[at$$1+1][0];
            if (add_days[0] === 0 && !done_with_warnings)
                parsing_warnings.push([ nrule, at$$1+2, t('adding 0') ]);
            add_days[1] = 3;
        } else {
            add_days[0] = 0;
        }
        return add_days;
    }
    /* }}} */

    /* Holiday parser for public and school holidays (PH,SH) {{{
     *
     * :param tokens: List of token objects.
     * :param at: Position where to start.
     * :param selectors: Reference to selector object.
     * :param push_to_weekday: Will push the selector into the weekday selector array which has the desired side effect of working in conjunction with the weekday selectors (either the holiday match or the weekday), which is the normal and expected behavior.
     * :returns: Position at which the token does not belong to the selector anymore.
     */
    function parseHoliday(tokens, at$$1, selectors, push_to_weekday, in_holiday_selector) {
        if (!in_holiday_selector) {

            if (push_to_weekday)
                tokens[at$$1][3] = 'weekday';
            else
                tokens[at$$1][3] = 'holiday'; // Could also be holiday but this is not important here.
        }

        for (; at$$1 < tokens.length; at$$1++) {
            if (matchTokens(tokens, at$$1, 'holiday')) {
                if (tokens[at$$1][0] === 'PH') {
                    var applying_holidays = getMatchingHoliday(tokens[at$$1][0]);

                    // Only allow moving one day in the past or in the future.
                    // This makes implementation easier because only one holiday is assumed to be moved to the next year.
                    var add_days = getMoveDays(tokens, at$$1+1, 1, 'public holiday');

                    var selector = function(applying_holidays, add_days) { return function(date) {

                        var holidays = getApplyingHolidaysForYear(applying_holidays, date.getFullYear(), add_days);
                        // Needs to be calculated each time because of movable days.

                        var date_num = getValueForDate(date, true);

                        for (var i = 0; i < holidays.length; i++) {
                            var next_holiday_date_num = getValueForDate(holidays[i][0], true);

                            if (date_num < next_holiday_date_num) {

                                if (add_days[0] > 0) {
                                    // Calculate the last holiday from previous year to tested against it.
                                    var holidays_last_year = getApplyingHolidaysForYear(applying_holidays, date.getFullYear() - 1, add_days);
                                    var last_holiday_last_year = holidays_last_year[holidays_last_year.length - 1];
                                    var last_holiday_last_year_num = getValueForDate(last_holiday_last_year[0], true);

                                    if (date_num < last_holiday_last_year_num ) {
                                        return [ false, last_holiday_last_year[0] ];
                                    } else if (date_num === last_holiday_last_year_num) {
                                        return [true, dateAtDayMinutes(last_holiday_last_year[0], minutes_in_day),
                                            'Day after ' +last_holiday_last_year[1] ];
                                    }
                                }

                                return [ false, holidays[i][0] ];
                            } else if (date_num === next_holiday_date_num) {
                                return [true, new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
                                    (add_days[0] > 0 ? 'Day after ' : (add_days[0] < 0 ? 'Day before ' : '')) + holidays[i][1] ];
                            }
                        }

                        if (add_days[0] < 0) {
                            // Calculate the first holiday from next year to tested against it.
                            var holidays_next_year = getApplyingHolidaysForYear(applying_holidays, date.getFullYear() + 1, add_days);
                            var first_holidays_next_year = holidays_next_year[0];
                            var first_holidays_next_year_num = getValueForDate(first_holidays_next_year[0], true);
                            if (date_num === first_holidays_next_year_num) {
                                return [true, dateAtDayMinutes(first_holidays_next_year[0], minutes_in_day),
                                    'Day before ' + first_holidays_next_year[1] ];
                            }
                        }

                        // continue next year
                        return [ false, new Date(holidays[0][0].getFullYear() + 1,
                                holidays[0][0].getMonth(),
                                holidays[0][0].getDate()) ];

                    }}(applying_holidays, add_days);

                    if (push_to_weekday)
                        selectors.weekday.push(selector);
                    else
                        selectors.holiday.push(selector);

                    at$$1 += 1 + add_days[1];
                } else if (tokens[at$$1][0] === 'SH') {
                    var applying_holidays = getMatchingHoliday(tokens[at$$1][0]);

                    var selector = function(applying_holidays) { return function(date) {
                        var date_num = getValueForDate(date);

                        // Iterate over holiday array containing the different holiday ranges.
                        for (var i = 0; i < applying_holidays.length; i++) {

                            var holiday = getSHForYear(applying_holidays[i], date.getFullYear(), false);
                            if (typeof holiday === 'undefined') {
                                continue;
                            }

                            for (var h = 0; h < holiday.length; h+=4) {
                                var holiday_to_plus = new Date(date.getFullYear(), holiday[2+h] - 1, holiday[3+h] + 1);
                                var holiday_from = (holiday[0+h] - 1) * 100 + holiday[1+h];
                                var holiday_to   = (holiday[2+h] - 1) * 100 + holiday[3+h];
                                holiday_to_plus  = getValueForDate(holiday_to_plus);

                                // console.log(`holiday_from: ${holiday_from}, holiday_to: ${holiday_to}, holiday_to_plus: ${holiday_to_plus}`);

                                var holiday_ends_next_year = holiday_to < holiday_from;

                                if (date_num < holiday_from) { // date is before selected holiday

                                    // check if we are in the holidays from the last year spanning into this year
                                    var last_year_holiday = getSHForYear(applying_holidays[applying_holidays.length - 1], date.getFullYear() - 1, false);
                                    if (typeof last_year_holiday === 'object') {
                                        var last_year_holiday_from = (last_year_holiday[last_year_holiday.length - 4] - 1) * 100
                                            + last_year_holiday[last_year_holiday.length - 3]; // e.g. 1125
                                        var last_year_holiday_to   = (last_year_holiday[last_year_holiday.length - 2] - 1) * 100
                                            + last_year_holiday[last_year_holiday.length - 1]; // e.g. 0005
                                        // console.log(last_year_holiday_from, last_year_holiday_to);

                                        if (last_year_holiday_from > last_year_holiday_to && date_num <= last_year_holiday_to) {
                                            return [ true, new Date(date.getFullYear(),
                                                last_year_holiday[last_year_holiday.length - 2] - 1,
                                                last_year_holiday[last_year_holiday.length - 1] + 1),
                                                applying_holidays[applying_holidays.length - 1].name ];
                                        } else {
                                            return [ false, new Date(date.getFullYear(), holiday[0+h] - 1, holiday[1+h]) ];
                                        }
                                    } else { /* School holidays for last year are not defined. */
                                        return [ false, new Date(date.getFullYear(), holiday[0+h] - 1, holiday[1+h]) ];
                                    }
                                } else if (holiday_from <= date_num && (date_num <= holiday_to || holiday_ends_next_year)) {
                                    return [ true, new Date(date.getFullYear() + holiday_ends_next_year, holiday[2+h] - 1, holiday[3+h] + 1),
                                        applying_holidays[i].name ];
                                } else if (holiday_to_plus === date_num) { // selected holiday end is equal to month and day
                                    if (h + 4 < holiday.length) { // next holiday is next date range of the same holidays
                                        h += 4;
                                        return [ false, new Date(date.getFullYear(), holiday[0+h] - 1, holiday[1+h]) ];
                                    } else {
                                        /* Because not all school holidays
                                         * have to apply each year this
                                         * part has been simplified which
                                         * makes the implementation abit
                                         * less efficient but reduces
                                         * complexity.
                                         */
                                        return [ false, new Date(date.getFullYear(), holiday[2+h] - 1, holiday[3+h] + 2) ];
                                    }
                                }
                            }
                        }
                        throw formatLibraryBugMessage(t('no SH definition', {
                            'name': '',
                            'year': date.getFullYear(),
                        }), 'library bug PR only');
                    }}(applying_holidays);

                    if (push_to_weekday)
                        selectors.weekday.push(selector);
                    else
                        selectors.holiday.push(selector);
                    at$$1 += 1; // FIXME: test
                }
            } else if (matchTokens(tokens, at$$1, 'weekday')) {
                return parseWeekdayRange(tokens, at$$1, selectors, true);
            } else if (matchTokens(tokens, at$$1 - 1, ',')) { // additional rule
                throw formatWarnErrorMessage(
                    nrule,
                    at$$1 - 1,
                    t('additional rule no sense'));
            } else {
                throw formatWarnErrorMessage(nrule, at$$1, t('unexpected token holiday', {'token': tokens[at$$1][1]}));
            }

            if (!matchTokens(tokens, at$$1, ','))
                break;
        }

        return at$$1;
    }

    // Helpers for holiday parsers {{{

    /* Returns a number for a date which can then be used to compare just the dates (without the time). {{{
     *
     * This is necessary because a selector could be called for the middle of the day and we need to tell if it matches that day.
     * Example: Returns 20150015 for Jan 15 2015.
     *
     * :param date: Date object.
     * :param include_year: Boolean. If true include the year.
     * :returns: Number for the date.
     */
    function getValueForDate(date, include_year) {
        // Implicit because undefined evaluates to false.
        // include_year = typeof include_year !== 'undefined' ? include_year : false;

        return (include_year ? date.getFullYear() * 10000 : 0) + date.getMonth() * 100 + date.getDate();
    }
    /* }}} */

    /* Return the school holiday definition e.g. [ 5, 25, to 6, 5 ], for the specified year {{{
     *
     * :param SH_hash:
     * :param year: Year as integer.
     * :param fatal: Defines the behavior in case no definition is find. Throw an error if set to true. Return return undefined otherwise.
     * :returns: school holidays for the given year.
     */
    function getSHForYear(SH_hash, year, fatal) {
        if (typeof fatal !== 'boolean') {
            fatal = true;
        }

        var holiday = SH_hash[year];
        if (typeof holiday === 'undefined') {
            holiday = SH_hash['default']; // applies for any year without explicit definition
            if (typeof holiday === 'undefined') {
                if (fatal) {
                    throw formatLibraryBugMessage(t('no SH definition', {
                        'name': SH_hash.name + ' ',
                        'year': year,
                    }), 'library bug PR only');
                } else {
                    return undefined;
                }
            }
        }
        return holiday;
    }
    /* }}} */

    /* Return closest holiday definition available. {{{
     *
     * First try to get the state, if missing get the country wide holidays
     * (which can on it’s own be limited to some states).
     *
     * :param type_of_holidays: Choices: PH, SH.
     * :returns: Public or school holiday list.
     */
    function getMatchingHoliday(type_of_holidays) {
        if (override_with_holidays != null) {
            return override_with_holidays
        }
        if (typeof location_cc === 'string') {
            if (holiday_definitions[location_cc]) {
                if (typeof location_state === 'string'
                    && typeof holiday_definitions[location_cc][location_state] === 'object'
                    && typeof holiday_definitions[location_cc][location_state][type_of_holidays] === 'object') {

                    /* If holiday_definitions for the state are specified,
                     * use it and ignore lesser specific ones (for the
                     * country)
                     */
                    return holiday_definitions[location_cc][location_state][type_of_holidays];

                } else if (holiday_definitions[location_cc][type_of_holidays]) {
                    /* Holidays are defined country wide. Some
                     * countries only have country-wide holiday definitions
                     * so that is ok too.
                     */
                    var applying_holidays_for_country = holiday_definitions[location_cc][type_of_holidays];

                    var matching_holiday = {}; /* Holidays in the country-wide scope can be limited to certain states. */
                    switch (type_of_holidays) {
                        case 'PH':
                            for (var holiday_name in applying_holidays_for_country) {
                                if (typeof applying_holidays_for_country[holiday_name][2] === 'object') {
                                    if (-1 !== applying_holidays_for_country[holiday_name][2].indexOf(location_state)) {
                                        matching_holiday[holiday_name] = applying_holidays_for_country[holiday_name];
                                    }
                                } else {
                                    matching_holiday[holiday_name] = applying_holidays_for_country[holiday_name];
                                }
                            }
                            break;
                        case 'SH':
                            matching_holiday = applying_holidays_for_country;
                            break;
                    }
                    if (Object.keys(matching_holiday).length === 0) {
                        throw formatLibraryBugMessage(t('no holiday definition', {
                            'name': type_of_holidays,
                            'cc': location_cc,
                        }), 'library bug PR only');
                    }
                    return matching_holiday;
                } else {
                    throw formatLibraryBugMessage(t('no holiday definition state', {
                        'name': type_of_holidays,
                        'cc': location_cc,
                        'state': location_state,
                    }), 'library bug PR only');
                }
            } else {
                throw formatLibraryBugMessage(t('no holiday definition', {
                    'name': type_of_holidays,
                    'cc': location_cc,
                }), 'library bug PR only');
            }
        } else { /* We have no idea which holidays do apply because the country code was not provided. */
            throw t('no country code');
        }
    }
    /* }}} */

    /* Return variable dates used for holiday calculation. {{{
     *
     * :param year: Year as integer.
     * :returns: Hash of variables dates. Key is the name of the variable date. Value is the variable date date object.
     */
    function getMovableEventsForYear(year) {
        /* Calculate easter {{{ */
        var C = Math.floor(year/100);
        var N = year - 19*Math.floor(year/19);
        var K = Math.floor((C - 17)/25);
        var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
        I = I - 30*Math.floor((I/30));
        I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
        var J = year + Math.floor(year/4) + I + 2 - C + Math.floor(C/4);
        J = J - 7*Math.floor(J/7);
        var L = I - J;
        var M = 3 + Math.floor((L + 40)/44);
        var D = L + 28 - 31*Math.floor(M/4);
        /* }}} */

        /* Calculate orthodox easter {{{ */
        var oA = year % 4;
        var oB = year % 7;
        var oC = year % 19;
        var oD = (19*oC + 15) % 30;
        var oE = (2*oA+4*oB - oD + 34) % 7;
        var oF = oD+oE;

        var oDate;
        if (oF < 9) {
            oDate = new Date(year, 4-1, oF+4);
        } else {
            if ((oF+4)<31) {
                oDate = new Date(year, 4-1, oF+4);
            } else {
                oDate = new Date(year, 5-1, oF-26);
            }
        }
        /* }}} */

        /* Calculate last Sunday in February {{{ */
        var lastFebruaryDay = new Date(year, 2, 0);
        var lastFebruarySunday = lastFebruaryDay.getDate() - lastFebruaryDay.getDay();
        /* }}} */

        /* Calculate Victoria Day. last Monday before or on May 24 {{{ */
        var may_24 = new Date(year, 4, 24);
        var victoriaDay = 24  - ((6 + may_24.getDay()) % 7);
        /* }}} */

        /* Calculate Canada Day. July 1st unless 1st is on Sunday, then July 2. {{{ */
        var july_1 = new Date(year, 6, 1);
        var canadaDay = july_1.getDay() === 0 ? 2 : 1;
        /* }}} */

        /* Helper functions {{{ */
        function firstWeekdayOfMonth(month, weekday){
            var first = new Date(year, month, 1);
            return 1 + ((7 + weekday - first.getDay()) % 7);
        }

        function lastWeekdayOfMonth(month, weekday){
            var last = new Date(year, month+1, 0);
            var offset = ((7 + last.getDay() - weekday) % 7);
            return last.getDate() - offset;
        }

        function getDateOfWeekdayInDateRange(weekday, start_date){
            var days_to_dest_date = weekday - start_date.getDay();
            if (days_to_dest_date < 0) {
                days_to_dest_date += 7;
            }
            start_date.setDate(start_date.getDate() + days_to_dest_date);
            return start_date;
        }
        /* }}} */

        return {
            'easter'                : new Date(year, M - 1, D),
            'orthodox easter'       : oDate,
            'victoriaDay'           : new Date(year,  4, victoriaDay),
            'canadaDay'             : new Date(year,  6, canadaDay),
            'firstJanuaryMonday'    : new Date(year,  0, firstWeekdayOfMonth(0, 1)),
            'firstFebruaryMonday'   : new Date(year,  1, firstWeekdayOfMonth(1, 1)),
            'lastFebruarySunday'    : new Date(year,  1, lastFebruarySunday),
            'firstMarchMonday'      : new Date(year,  2, firstWeekdayOfMonth(2, 1)),
            'firstAprilMonday'      : new Date(year,  3, firstWeekdayOfMonth(3, 1)),
            'firstMayMonday'        : new Date(year,  4, firstWeekdayOfMonth(4, 1)),
            'firstJuneMonday'       : new Date(year,  5, firstWeekdayOfMonth(5, 1)),
            'firstJulyMonday'       : new Date(year,  6, firstWeekdayOfMonth(6, 1)),
            'firstAugustMonday'     : new Date(year,  7, firstWeekdayOfMonth(7, 1)),
            'firstSeptemberMonday'  : new Date(year,  8, firstWeekdayOfMonth(8, 1)),
            'firstSeptemberSunday'  : new Date(year,  8, firstWeekdayOfMonth(8, 0)),
            'firstOctoberMonday'    : new Date(year,  9, firstWeekdayOfMonth(9, 1)),
            'firstNovemberMonday'   : new Date(year, 10, firstWeekdayOfMonth(10, 1)),
            'firstMarchTuesday'     : new Date(year,  2, firstWeekdayOfMonth(2, 2)),
            'firstAugustTuesday'    : new Date(year,  7, firstWeekdayOfMonth(7, 2)),
            'firstAugustFriday'     : new Date(year,  7, firstWeekdayOfMonth(7, 5)),
            'firstNovemberThursday' : new Date(year, 10, firstWeekdayOfMonth(10, 4)),
            'lastMayMonday'         : new Date(year,  4, lastWeekdayOfMonth(4, 1)),
            'lastMarchMonday'       : new Date(year,  2, lastWeekdayOfMonth(2, 1)),
            'lastAprilMonday'       : new Date(year,  3, lastWeekdayOfMonth(3, 1)),
            'lastAprilFriday'       : new Date(year,  3, lastWeekdayOfMonth(3, 5)),
            'lastOctoberFriday'     : new Date(year,  9, lastWeekdayOfMonth(9, 5)),
            'nextSaturday20Jun'     : getDateOfWeekdayInDateRange(6, new Date(year, 5, 20)),
            'nextSaturday31Oct'     : getDateOfWeekdayInDateRange(6, new Date(year, 9, 31)),
            'nextWednesday16Nov'    : getDateOfWeekdayInDateRange(3, new Date(year, 10, 16)),
        };
    }
    /* }}} */

    function getApplyingHolidaysForYear(applying_holidays, year, add_days) {
        var movableDays = getMovableEventsForYear(year);

        var sorted_holidays = [];
        var next_holiday;

        for (var holiday_name in applying_holidays) {
            if (typeof applying_holidays[holiday_name][0] === 'string') {
                var selected_movableDay = movableDays[applying_holidays[holiday_name][0]];
                if (!selected_movableDay)
                    throw t('movable no formula', {'name': applying_holidays[holiday_name][0]});
                next_holiday = new Date(selected_movableDay.getFullYear(),
                        selected_movableDay.getMonth(),
                        selected_movableDay.getDate()
                        + applying_holidays[holiday_name][1]
                    );
                if (year !== next_holiday.getFullYear())
                    throw t('movable not in year', {
                        'name': applying_holidays[holiday_name][0], 'days': applying_holidays[holiday_name][1]});
            } else {
                next_holiday = new Date(year,
                        applying_holidays[holiday_name][0] - 1,
                        applying_holidays[holiday_name][1]
                    );
            }
            if (add_days[0])
                next_holiday.setDate(next_holiday.getDate() + add_days[0]);

            sorted_holidays.push([ next_holiday, holiday_name ]);
        }

        sorted_holidays = sorted_holidays.sort(function(a,b){
            if (a[0].getTime() < b[0].getTime()) return -1;
            if (a[0].getTime() > b[0].getTime()) return 1;
            return 0;
        });

        return sorted_holidays;
    }
    /* }}} */
    /* }}} */

    /* Year range parser (2013,2016-2018,2020/2). {{{
     *
     * :param tokens: List of token objects.
     * :param at: Position where to start.
     * :returns: Position at which the token does not belong to the selector anymore.
     */
    function parseYearRange(tokens, at$$1) {
        tokens[at$$1][3] = 'year';
        for (; at$$1 < tokens.length; at$$1++) {
            if (matchTokens(tokens, at$$1, 'year')) {
                var is_range = false,
                    has_period,
                    period;
                if (matchTokens(tokens, at$$1+1, '-', 'year', '/', 'number')) {
                    is_range   = true;
                    has_period = true;
                    period = parseInt(tokens[at$$1+4][0]);
                    checkPeriod(at$$1+4, period, 'year');
                } else {
                    is_range   = matchTokens(tokens, at$$1+1, '-', 'year');
                    has_period = matchTokens(tokens, at$$1+1, '/', 'number');
                    if (has_period) {
                        period = parseInt(tokens[at$$1+2][0]);
                        checkPeriod(at$$1+2, period, 'year', 'no_end_year');
                    } else if (matchTokens(tokens, at$$1+1, '+')) {
                        period = 1;
                        has_period = 2;
                    }
                }

                var year_from = parseInt(tokens[at$$1][0]);
                // error checking {{{
                    if (is_range && tokens[at$$1+2][0] <= year_from) {
                        // handle reversed range
                        if (tokens[at$$1+2][0] === year_from) {
                            throw formatWarnErrorMessage(nrule, at$$1, t('year range one year', {'year': year_from }));
                        } else {
                            throw formatWarnErrorMessage(nrule, at$$1, t('year range reverse'));
                        }
                    }
                    if (!is_range && year_from < new Date().getFullYear()) {
                        parsing_warnings.push([ nrule, at$$1, t('year past') ]);
                    }
                    if (is_range && tokens[at$$1+2][0] < new Date().getFullYear()) {
                        parsing_warnings.push([ nrule, at$$1+2, t('year past') ]);
                    }
                /* }}} */

                selectors.year.push(function(tokens, at$$1, year_from, is_range, has_period, period) { return function(date) {
                    var ouryear = date.getFullYear();
                    var year_to = is_range ? parseInt(tokens[at$$1+2][0]) : year_from;

                    if (ouryear < year_from ){
                        return [false, new Date(year_from, 0, 1)];
                    } else if (has_period) {
                        if (year_from <= ouryear) {
                            if (is_range && ouryear > year_to)
                                return [false];
                            if (period > 0) {
                                if ((ouryear - year_from) % period === 0) {
                                    return [true, new Date(ouryear + 1, 0, 1)];
                                } else {
                                    return [false, new Date(ouryear + period - 1, 0, 1)];
                                }
                            }
                        }
                    } else if (is_range) {
                        if (ouryear <= year_to)
                            return [true, new Date(year_to + 1, 0, 1)];
                    } else if (ouryear === year_from) {
                        return [true];
                    }

                    return [false];

                }}(tokens, at$$1, year_from, is_range, has_period, period));

                at$$1 += 1 + (is_range ? 2 : 0) + (has_period ? (has_period === 2 ? 1 : 2) : 0);
            } else if (matchTokens(tokens, at$$1 - 1, ',')) { // additional rule
                throw formatWarnErrorMessage(nrule, at$$1 - 1, t('additional rule no sense'));
            } else {
                throw formatWarnErrorMessage(nrule, at$$1, t('unexpected token year range', {'token': tokens[at$$1][1]}));
            }

            if (!matchTokens(tokens, at$$1, ','))
                break;
        }

        return at$$1;
    }
    /* }}} */

    /* Week range parser (week 11-20, week 1-53/2). {{{
     *
     * :param tokens: List of token objects.
     * :param at: Position where to start.
     * :returns: Position at which the token does not belong to the selector anymore.
     */
    function parseWeekRange(tokens, at$$1) {
        for (; at$$1 < tokens.length; at$$1++) {
            if (matchTokens(tokens, at$$1, 'week')) {
                at$$1++;
            }
            if (matchTokens(tokens, at$$1, 'number')) {
                var is_range = matchTokens(tokens, at$$1+1, '-', 'number'), period = 0;
                var week_from = tokens[at$$1][0];
                var week_to   = is_range ? tokens[at$$1+2][0] : week_from;
                if (week_from > week_to) {
                    throw formatWarnErrorMessage(nrule, at$$1+2, t('week range reverse'));
                }
                if (week_from < 1) {
                    throw formatWarnErrorMessage(nrule, at$$1, t('week negative'));
                }
                if (week_to > 53) {
                    throw formatWarnErrorMessage(nrule, is_range ? at$$1+2 : at$$1, t('week exceed'));
                }
                if (is_range) {
                    period = matchTokens(tokens, at$$1+3, '/', 'number');
                    if (period) {
                        period = tokens[at$$1+4][0];
                        if (period < 2) {
                            throw formatWarnErrorMessage(nrule, at$$1+4, t('week period less than 2', {
                                'weekfrom': week_from, 'weekto': week_to, 'period': period}));
                        } else if (period > 26) {
                            throw formatWarnErrorMessage(nrule, at$$1+4, t('week period greater than 26', {
                                'weekfrom': week_from
                            }));
                        }
                    }
                }

                if (week_stable && (!(week_from <= 1 && week_to >= 53) || period)) {
                    week_stable = false;
                }

                if (!period && week_from === 1 && week_to === 53) {
                    /* Shortcut and work around bug. */
                    selectors.week.push(function() { return [true]; });
                } else {

                    selectors.week.push(function(week_from, week_to, period) { return function(date) {
                        var ourweek = getWeekNumber(date);

                        // console.log("week_from: %s, week_to: %s", week_from, week_to);
                        // console.log("ourweek: %s, date: %s", ourweek, date);

                        // before range
                        if (ourweek < week_from) {
                            // console.log("Before: " + getNextDateOfISOWeek(week_from, date));
                            return [false, getNextDateOfISOWeek(week_from, date)];
                        }

                        // we're after range, set check date to next year
                        if (ourweek > week_to) {
                            // console.log("After");
                            return [false, getNextDateOfISOWeek(week_from, date)];
                        }

                        // we're in range
                        if (period) {
                            var in_period = (ourweek - week_from) % period === 0;
                            if (in_period) {
                                return [true, getNextDateOfISOWeek(ourweek + 1, date)];
                            } else {
                                return [false, getNextDateOfISOWeek(ourweek + period - 1, date)];
                            }
                        }

                        // console.log("Match");
                        return [true, getNextDateOfISOWeek(week_to === 53 ? 1 : week_to + 1, date)];
                    }}(week_from, week_to, period));
                }

                at$$1 += 1 + (is_range ? 2 : 0) + (period ? 2 : 0);
            } else if (matchTokens(tokens, at$$1 - 1, ',')) { // additional rule
                throw formatWarnErrorMessage(nrule, at$$1 - 1, t('additional rule no sense'));
            } else {
                throw formatWarnErrorMessage(nrule, at$$1, t('unexpected token week range', {'token': tokens[at$$1][1]}));
            }

            if (!matchTokens(tokens, at$$1, ','))
                break;
        }

        return at$$1;
    }

    // https://stackoverflow.com/a/6117889
    /* For a given date, get the ISO week number.
     *
     * Based on information at:
     *
     *    http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
     *
     * Algorithm is to find nearest Thursday, it's year
     * is the year of the week number. Then get weeks
     * between that date and the first day of that year.
     *
     * Note that dates in one year can be weeks of previous
     * or next year, overlap is up to 3 days.
     *
     * e.g. 2014/12/29 is Monday in week  1 of 2015
     *      2012/1/1   is Sunday in week 52 of 2011
     */
    function getWeekNumber(d) {
        // Copy date so don't modify original
        d = new Date(+d);
        d.setHours(0,0,0,0);
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setDate(d.getDate() + 4 - (d.getDay()||7));
        // Get first day of year
        var yearStart = new Date(d.getFullYear(),0,1);
        // Calculate full weeks to nearest Thursday
        return Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7)
    }
    // https://stackoverflow.com/a/16591175
    function getDateOfISOWeek(w, year) {
        var simple = new Date(year, 0, 1 + (w - 1) * 7);
        var dow = simple.getDay();
        var ISOweekStart = simple;
        if (dow <= 4)
            ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
        else
            ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
        return ISOweekStart;
    }
    function getNextDateOfISOWeek(week, date) {
        var next_date;
        for (var i = -1; i <= 1; i++) {
            next_date = getDateOfISOWeek(week, date.getFullYear() + i);
            if (next_date.getTime() > date.getTime()) {
                return next_date;
            }
        }
        throw formatLibraryBugMessage();
    }
    /* }}} */

    /* Month range parser (Jan,Feb-Mar). {{{
     *
     * :param tokens: List of token objects.
     * :param at: Position where to start.
     * :param push_to_monthday: Will push the selector into the monthday selector array which has the desired side effect of working in conjunction with the monthday selectors (either the month match or the monthday).
     * :returns: Position at which the token does not belong to the selector anymore.
     */
    function parseMonthRange(tokens, at$$1, push_to_monthday, in_selector) {
        if (!in_selector)
            tokens[at$$1][3] = 'month';

        for (; at$$1 < tokens.length; at$$1++) {
            // Use parseMonthdayRange if '<month> <daynum>' and not '<month> <hour>:<minute>'
            if (matchTokens(tokens, at$$1, 'month', 'number') && !matchTokens(tokens, at$$1+2, 'timesep', 'number')) {
                return parseMonthdayRange(tokens, at$$1, nrule, true);
            } else if (matchTokens(tokens, at$$1, 'month')) {
                // Single month (Jan) or month range (Feb-Mar)
                var is_range = matchTokens(tokens, at$$1+1, '-', 'month');

                var month_from = tokens[at$$1][0];
                var month_to = is_range ? tokens[at$$1+2][0] : month_from;

                if (is_range && week_stable) {
                    if (month_from !== (month_to + 1) % 12)
                        week_stable = false;
                } else {
                    week_stable = false;
                }

                var inside = true;

                // handle reversed range
                if (month_to < month_from) {
                    var tmp = month_to;
                    month_to = month_from - 1;
                    month_from = tmp + 1;
                    inside = false;
                }

                var selector = function(month_from, month_to, inside) { return function(date) {
                    var ourmonth = date.getMonth();

                    if (month_to < month_from) {
                        /* Handle full range. */
                        return [!inside];
                    }

                    if (ourmonth < month_from || ourmonth > month_to) {
                        return [!inside, dateAtNextMonth(date, month_from)];
                    } else {
                        return [inside, dateAtNextMonth(date, month_to + 1)];
                    }
                }}(month_from, month_to, inside);

                if (push_to_monthday === true)
                    selectors.monthday.push(selector);
                else
                    selectors.month.push(selector);

                at$$1 += is_range ? 3 : 1;
            } else {
                throw formatWarnErrorMessage(nrule, at$$1, t('unexpected token month range', {'token': tokens[at$$1][1]}));
            }

            if (!matchTokens(tokens, at$$1, ','))
                break;
        }

        return at$$1;
    }

    function dateAtNextMonth(date, month) {
        return new Date(date.getFullYear(), month < date.getMonth() ? month + 12 : month);
    }
    /* }}} */

    /* Month day range parser (Jan 26-31; Jan 26-Feb 26). {{{
     *
     * :param tokens: List of token objects.
     * :param at: Position where to start.
     * :param nrule: Rule number starting with 0.
     * :param push_to_month: Will push the selector into the month selector array which has the desired side effect of working in conjunction with the month selectors (either the month match or the monthday).
     * :returns: Position at which the token does not belong to the selector anymore.
     */
    function parseMonthdayRange(tokens, at$$1, nrule, push_to_month) {
        if (!push_to_month)
            tokens[at$$1][3] = 'month';

        for (; at$$1 < tokens.length; at$$1++) {
            var has_year = [], has_month = [], has_event = [], has_calc = [], has_constrained_weekday = [];
            has_year[0]  = matchTokens(tokens, at$$1, 'year');
            has_month[0] = matchTokens(tokens, at$$1+has_year[0], 'month', 'number');
            has_event[0] = matchTokens(tokens, at$$1+has_year[0], 'event');

            if (has_event[0])
                has_calc[0] = getMoveDays(tokens, at$$1+has_year[0]+1, 200, 'event like easter');

            var at_range_sep;
            if (matchTokens(tokens, at$$1+has_year[0], 'month', 'weekday', '[')) {
                has_constrained_weekday[0] = getConstrainedWeekday(tokens, at$$1+has_year[0]+3);
                has_calc[0] = getMoveDays(tokens, has_constrained_weekday[0][1], 6, 'constrained weekdays');
                at_range_sep = has_constrained_weekday[0][1] + (typeof has_calc[0] === 'object' && has_calc[0][1] ? 3 : 0);
            } else {
                at_range_sep = at$$1+has_year[0]
                    + (has_event[0]
                        ? (typeof has_calc[0] === 'object' && has_calc[0][1] ? 4 : 1)
                        : 2);
            }

            var at_sec_event_or_month;
            if ((has_month[0] || has_event[0] || has_constrained_weekday[0]) && matchTokens(tokens, at_range_sep, '-')) {
                has_year[1] = matchTokens(tokens, at_range_sep+1, 'year');
                at_sec_event_or_month = at_range_sep+1+has_year[1];
                has_month[1] = matchTokens(tokens, at_sec_event_or_month, 'month', 'number');
                if (!has_month[1]) {
                    has_event[1] = matchTokens(tokens, at_sec_event_or_month, 'event');
                    if (has_event[1]) {
                        has_calc[1] = getMoveDays(tokens, at_sec_event_or_month+1, 366, 'event like easter');
                    } else if (matchTokens(tokens, at_sec_event_or_month, 'month', 'weekday', '[')) {
                        has_constrained_weekday[1] = getConstrainedWeekday(tokens, at_sec_event_or_month+3);
                        has_calc[1] = getMoveDays(tokens, has_constrained_weekday[1][1], 6, 'constrained weekdays');
                    }
                }
            }

            // monthday range like Jan 26-Feb 26 {{{
            if (has_year[0] === has_year[1] && (has_month[1] || has_event[1] || has_constrained_weekday[1])) {

                if (has_month[0])
                    checkIfDateIsValid(tokens[at$$1+has_year[0]][0], tokens[at$$1+has_year[0]+1][0], nrule, at$$1+has_year[0]+1);
                if (has_month[1])
                    checkIfDateIsValid(tokens[at_sec_event_or_month][0], tokens[at_sec_event_or_month+1][0], nrule, at_sec_event_or_month+1);

                var selector = function(tokens, at$$1, nrule, has_year, has_event, has_calc, at_sec_event_or_month, has_constrained_weekday) { return function(date) {
                    var start_of_next_year = new Date(date.getFullYear() + 1, 0, 1);

                    var movableDays, from_date;
                    if (has_event[0]) {
                        movableDays = getMovableEventsForYear(has_year[0] ? parseInt(tokens[at$$1][0]) : date.getFullYear());
                        from_date = movableDays[tokens[at$$1+has_year[0]][0]];

                        if (typeof has_calc[0] === 'object' && has_calc[0][1]) {
                            var from_year_before_calc = from_date.getFullYear();
                            from_date.setDate(from_date.getDate() + has_calc[0][0]);
                            if (from_year_before_calc !== from_date.getFullYear())
                                throw formatWarnErrorMessage(nrule, at$$1+has_year[0]+has_calc[0][1]*3,
                                    t('movable not in year', {'name': tokens[at$$1+has_year[0]][0], 'days': has_calc[0][0]}));
                        }
                    } else if (has_constrained_weekday[0]) {
                        from_date = getDateForConstrainedWeekday((has_year[0] ? tokens[at$$1][0] : date.getFullYear()), // year
                            tokens[at$$1+has_year[0]][0], // month
                            tokens[at$$1+has_year[0]+1][0], // weekday
                            has_constrained_weekday[0],
                            has_calc[0]);
                    } else {
                        from_date = new Date((has_year[0] ? tokens[at$$1][0] : date.getFullYear()),
                            tokens[at$$1+has_year[0]][0], tokens[at$$1+has_year[0]+1][0]);
                    }

                    var to_date;
                    if (has_event[1]) {
                        movableDays = getMovableEventsForYear(has_year[1]
                                    ? parseInt(tokens[at_sec_event_or_month-1][0])
                                    : date.getFullYear());
                        to_date = movableDays[tokens[at_sec_event_or_month][0]];

                        if (typeof has_calc[1] === 'object' && has_calc[1][1]) {
                            var to_year_before_calc = to_date.getFullYear();
                            to_date.setDate(to_date.getDate() + has_calc[1][0]);
                            if (to_year_before_calc !== to_date.getFullYear()) {
                                throw formatWarnErrorMessage(nrule, at_sec_event_or_month+has_calc[1][1],
                                    t('movable not in year', {'name': tokens[at_sec_event_or_month][0], 'days':  has_calc[1][0] }));
                            }
                        }
                    } else if (has_constrained_weekday[1]) {
                        to_date = getDateForConstrainedWeekday((has_year[1] ? tokens[at_sec_event_or_month-1][0] : date.getFullYear()), // year
                            tokens[at_sec_event_or_month][0],   // month
                            tokens[at_sec_event_or_month+1][0], // weekday
                            has_constrained_weekday[1],
                            has_calc[1]);
                    } else {
                        to_date = new Date((has_year[1] ? tokens[at_sec_event_or_month-1][0] : date.getFullYear()),
                            tokens[at_sec_event_or_month][0], tokens[at_sec_event_or_month+1][0] + 1);
                    }

                    var inside = true;

                    if (to_date < from_date) {
                        var tmp = to_date;
                        to_date = from_date;
                        from_date = tmp;
                        inside = false;
                    }

                    if (date.getTime() < from_date.getTime()) {
                        return [!inside, from_date];
                    } else if (date.getTime() < to_date.getTime()) {
                        return [inside, to_date];
                    } else {
                        if (has_year[0]) {
                            return [!inside];
                        } else {
                            return [!inside, start_of_next_year];
                        }
                    }
                }}(tokens, at$$1, nrule, has_year, has_event, has_calc, at_sec_event_or_month, has_constrained_weekday);

                if (push_to_month === true)
                    selectors.month.push(selector);
                else
                    selectors.monthday.push(selector);

                at$$1 = (has_constrained_weekday[1]
                        ? has_constrained_weekday[1][1]
                        : at_sec_event_or_month + (has_event[1] ? 1 : 2))
                    + (typeof has_calc[1] === 'object' ? has_calc[1][1] : 0);

                /* }}} */
                // Monthday range like Jan 26-31 {{{
            } else if (has_month[0]) {

                has_year = has_year[0];
                var year = tokens[at$$1][0]; // Could be month if has no year. Tested later.
                var month = tokens[at$$1+has_year][0];

                var first_round = true;

                do {
                    var range_from = tokens[at$$1+1 + has_year][0];
                    var is_range = matchTokens(tokens, at$$1+2+has_year, '-', 'number');
                    var period = undefined;
                    var range_to = tokens[at$$1+has_year+(is_range ? 3 : 1)][0] + 1;
                    if (is_range && matchTokens(tokens, at$$1+has_year+4, '/', 'number')) {
                        period = tokens[at$$1+has_year+5][0];
                        checkPeriod(at$$1+has_year+5, period, 'day');
                    }

                    if (first_round) {
                        var at_timesep_if_monthRange = at$$1 + has_year + 1 // at month number
                            + (is_range ? 2 : 0) + (period ? 2 : 0)
                            + !(is_range || period); // if not range nor has period, add one

                        // Check for '<month> <timespan>'
                        if (matchTokens(tokens, at_timesep_if_monthRange, 'timesep', 'number')
                                && (matchTokens(tokens, at_timesep_if_monthRange+2, '+')
                                    || matchTokens(tokens, at_timesep_if_monthRange+2, '-')
                                    || oh_mode !== 0)
                            ) {
                                return parseMonthRange(tokens, at$$1, true, true);
                        }
                    }

                    // error checking {{{
                    if (range_to < range_from)
                        throw formatWarnErrorMessage(nrule, at$$1+has_year+3, t('day range reverse'));

                    checkIfDateIsValid(month, range_from, nrule, at$$1+1 + has_year);
                    checkIfDateIsValid(month, range_to - 1 /* added previously */,
                        nrule, at$$1+has_year+(is_range ? 3 : 1));
                    /* }}} */

                    var selector = function(year, has_year, month, range_from, range_to, period) { return function(date) {
                        var start_of_next_year = new Date(date.getFullYear() + 1, 0, 1);

                        var from_date = new Date(has_year ? year : date.getFullYear(),
                            month, range_from);
                        if (month === 1 && range_from !== from_date.getDate()) // Only on leap years does this day exist.
                            return [false]; // If day 29 does not exist,
                                            // then the date object adds one day to date
                                            // and this selector should not match.
                        var to_date   = new Date(from_date.getFullYear(),
                            month, range_to);
                        if (month === 1 && is_range && range_to !== to_date.getDate()) // Only on leap years does this day exist.
                            return [false];

                        if (date.getTime() < from_date.getTime())
                            return [false, from_date];
                        else if (date.getTime() >= to_date.getTime())
                            return [false, start_of_next_year];
                        else if (!period)
                            return [true, to_date];

                        var nday = Math.floor((date.getTime() - from_date.getTime()) / msec_in_day);
                        var in_period = nday % period;

                        if (in_period === 0)
                            return [true, new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)];
                        else
                            return [false, new Date(date.getFullYear(), date.getMonth(), date.getDate() + period - in_period)];

                    }}(year, has_year, month, range_from, range_to, period);

                    if (push_to_month === true)
                        selectors.month.push(selector);
                    else
                        selectors.monthday.push(selector);

                    at$$1 += 2 + has_year + (is_range ? 2 : 0) + (period ? 2 : 0);

                    first_round = false;
                }
                while (matchTokens(tokens, at$$1, ',', 'number'))


                /* }}} */
                // Only event like easter {{{
            } else if (has_event[0]) {

                var selector = function(tokens, at$$1, nrule, has_year, add_days) { return function(date) {

                    // console.log('enter selector with date: ' + date);
                    var movableDays = getMovableEventsForYear((has_year ? tokens[at$$1][0] : date.getFullYear()));
                    var event_date = movableDays[tokens[at$$1+has_year][0]];
                    if (!event_date)
                        throw t('movable no formula', {'name': tokens[at$$1+has_year][0]});

                    if (add_days[0]) {
                        event_date.setDate(event_date.getDate() + add_days[0]);
                        if (date.getFullYear() !== event_date.getFullYear())
                            throw formatWarnErrorMessage(nrule, at$$1+has_year+add_days[1], t('movable not in year', {
                                'name': tokens[at$$1+has_year][0], 'days': add_days[0]}));
                    }

                    if (date.getTime() < event_date.getTime())
                        return [false, event_date];
                    // else if (date.getTime() < event_date.getTime() + msec_in_day) // does not work because of daylight saving times
                    else if (event_date.getMonth() * 100 + event_date.getDate() === date.getMonth() * 100 + date.getDate())
                        return [true, new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)];
                    else
                        return [false, new Date(date.getFullYear() + 1, 0, 1)];

                }}(tokens, at$$1, nrule, has_year[0], has_calc[0]);

                if (push_to_month === true)
                    selectors.month.push(selector);
                else
                    selectors.monthday.push(selector);

                at$$1 += has_year[0] + has_event[0] + (typeof has_calc[0][1] === 'number' && has_calc[0][1] ? 3 : 0);
                /* }}} */
            } else if (has_constrained_weekday[0]) {
                at$$1 = parseMonthRange(tokens, at$$1);
            } else if (matchTokens(tokens, at$$1, 'month')) {
                return parseMonthRange(tokens, at$$1, true, true);
            } else {
                // throw 'Unexpected token in monthday range: "' + tokens[at] + '"';
                return at$$1;
            }

            if (!matchTokens(tokens, at$$1, ','))
                break;
        }

        return at$$1;
    }
    /* }}} */

    /* Main selector traversal function (return state array for date). {{{
     * Checks for given date which rule and those which state and comment applies.
     *
     * :param date: Date object.
     * :returns: Array:
     *            0. resultstate: State: true for 'open', false for 'closed'.
     *            1. changedate: Next change as date object.
     *            2. unknown: true if state open is not sure.
     *            3. comment: Comment which applies for this time range (from date to changedate).
     *            4. match_rule: Rule number starting with 0 (nrule).
     */
    this.getStatePair = function(date) {
        var resultstate = false;
        var changedate;
        var unknown = false;
        var comment;
        var match_rule;

        var date_matching_rules = [];

        /* Go though all date selectors and check if they return something
         * else than closed for the given date.
         */
        for (var nrule = 0; nrule < rules.length; nrule++) {
            var matching_date_rule = true;
            // console.log(nrule, 'length',  rules[nrule].date.length);

            /* Try each date selector type. */
            for (var ndateselector = 0; ndateselector < rules[nrule].date.length; ndateselector++) {
                var dateselectors = rules[nrule].date[ndateselector];
                // console.log(nrule, ndateselector);

                var has_matching_selector = false;
                for (var datesel = 0; datesel < dateselectors.length; datesel++) {
                    var res = dateselectors[datesel](date);
                    if (res[0]) {
                        has_matching_selector = true;

                        if (typeof res[2] === 'string') { // holiday name
                            comment = [ res[2], nrule ];
                        }

                    }
                    if (typeof changedate === 'undefined' || (typeof res[1] === 'object' && res[1].getTime() < changedate.getTime()))
                        changedate = res[1];
                }

                if (!has_matching_selector) {
                    matching_date_rule = false;
                    // We can ignore other date selectors, as the state won't change
                    // anyway until THIS selector matches (due to conjunction of date
                    // selectors of different types).
                    // This is also an optimization, if widest date selector types
                    // are checked first.
                    break;
                }
            }

            if (matching_date_rule) {
                /* The following lines implement date overwriting logic (e.g. for
                 * "Mo-Fr 10:00-20:00; We 10:00-16:00", We rule overrides Mo-Fr rule partly (We).
                 *
                 * This is the only way to be consistent. I thought about ("22:00-02:00; Tu 12:00-14:00") letting Th override 22:00-02:00 partly:
                 * Like: Th 00:00-02:00,12:00-14:00 but this would result in including 22:00-00:00 for Th which is probably not what you want.
                 */
                if ((rules[nrule].date.length > 0 || nrule > 0 && rules[nrule].meaning && rules[nrule-1].date.length === 0)
                        && (rules[nrule].meaning || rules[nrule].unknown)
                        && !rules[nrule].wrapped && !rules[nrule].additional && !rules[nrule].fallback
                    ) {

                    // var old_date_matching_rules = date_matching_rules;
                    date_matching_rules = [];
                    // for (var nrule = 0; nrule < old_date_matching_rules.length; nrule++) {
                    //     if (!rules[old_date_matching_rules[nrule]].wrapped)
                    //         date_matching_rules.push(nrule);
                    // }
                }
                date_matching_rules.push(nrule);
            }
        }

        // console.log(date_matching_rules);
        for (var nrule = 0; nrule < date_matching_rules.length; nrule++) {
            var rule = date_matching_rules[nrule];

            // console.log('Processing rule ' + rule + ': with date ' + date
                // + ' and ' + rules[rule].time.length + ' time selectors (comment: "' + rules[rule].comment + '").');

            /* There is no time specified, state applies to the whole day. */
            if (rules[rule].time.length === 0) {
                // console.log('there is no time', date);
                if (!rules[rule].fallback || (rules[rule].fallback && !(resultstate || unknown))) {
                    resultstate = rules[rule].meaning;
                    unknown     = rules[rule].unknown;
                    match_rule  = rule;

                    // if (rules[rule].fallback)
                        // break rule; // fallback rule matched, no need for checking the rest
                    // WRONG: What if closing rules follow?
                }
            }

            for (var timesel = 0; timesel < rules[rule].time.length; timesel++) {
                var res = rules[rule].time[timesel](date);

                // console.log('res:', res);
                if (res[0]) {
                    if (!rules[rule].fallback || (rules[rule].fallback && !(resultstate || unknown))) {
                        resultstate = rules[rule].meaning;
                        unknown     = rules[rule].unknown;
                        match_rule  = rule;

                        /* Reset open end comment */
                        if (typeof comment === 'object' && comment[0] === t('open end'))
                            comment = undefined;

                        // open end
                        if (res[2] === true && (resultstate || unknown)) {
                            comment = [ t('open end'), match_rule ];

                            resultstate = false;
                            unknown     = true;

                            /* Hack to make second rule in '07:00+,12:00-16:00; 16:00-24:00 closed "needed because of open end"' obsolete {{{ */
                            if (typeof rules[rule].time[timesel+1] === 'function') {

                                var next_res = rules[rule].time[timesel+1](date);
                                if (  !next_res[0]
                                    // && next_res[2]
                                    && typeof next_res[1] === 'object'
                                    // && getValueForDate(next_res[1], true) !== getValueForDate(date, true) // Just to be sure.
                                    && rules[rule].time[timesel](new Date(date.getTime() - 1))[0]
                                    /* To distinguish the following two values:
                                     *     'sunrise-14:00,14:00+',
                                     *   '07:00+,12:00-16:00',
                                     */
                                    ) {

                                    // console.log("07:00+,12:00-16:00 matched.");

                                    resultstate = false;
                                    unknown     = false;
                                }
                            }

                            /* Hack to handle '17:00+,13:00-02:00' {{{ */
                            /* Not enabled. To complicated, just don‘t use them …
                             * It gets even crazier …
                             * Time wrapping over midnight is
                             * stored in the next internal rule:
                             * '17:00-00:00 unknown "Specified as open end. Closing time was guessed.", 13:00-00:00 open' // First internal rule.
                             * + ', ' overwritten part: 00:00-03:00 open + '00:00-02:00 open', // Second internal rule.
                             */
                            if (    false
                                    && typeof rules[rule-1] === 'object'
                                    && rules[rule].build_from_token_rule.toString() === rules[rule-1].build_from_token_rule.toString()
                                    && typeof rules[rule] === 'object'
                                    && rules[rule].build_from_token_rule.toString() === rules[rule].build_from_token_rule.toString()
                                    ) {

                                var last_wrapping_time_selector = rules[rule].time[rules[rule].time.length - 1];
                                var last_w_res = last_wrapping_time_selector(new Date(date.getTime() - 1));
                                // console.log(last_w_res);

                                if (    last_w_res[0]
                                        &&  typeof last_w_res[2] === 'undefined'
                                        && (typeof last_w_res[2] === 'undefined' || last_w_res[2] === false) // Do not match for 'Tu 23:59-40:00+'
                                        &&  typeof last_w_res[1] === 'object'
                                        && date.getTime() === last_w_res[1].getTime()
                                    ) {

                                    // '05:00-06:00,17:00+,13:00-02:00',

                                    // console.log("17:00+,13:00-02:00 matched.");
                                    // console.log(JSON.stringify(rules, null, '    '));

                                    resultstate = false;
                                    unknown     = false;
                                }
                            /* }}} */
                            }
                            /* }}} */
                        }

                        if (rules[rule].fallback) {
                            if (typeof changedate === 'undefined' || (typeof res[1] !== 'undefined' && res[1] < changedate)) {
                                // FIXME: Changing undefined does not break the test framework.
                                changedate = res[1];
                            }

                            // break rule; // Fallback rule matched, no need for checking the rest.
                            // WRONG: What if 'off' is used after fallback rule.
                        }
                    }
                }
                if (typeof changedate === 'undefined' || (typeof res[1] === 'object' && res[1] < changedate))
                    changedate = res[1];
            }
        }

        if (typeof rules[match_rule] === 'object' && typeof rules[match_rule].comment === 'string') {
            /* Only use comment if one is explicitly specified. */
            comment = rules[match_rule].comment;
        } else if (typeof comment === 'object') {
            if (comment[1] === match_rule) {
                comment = comment[0];
            } else {
                comment = undefined;
            }
        }

        // console.log('changedate', changedate, resultstate, comment, match_rule);
        return [ resultstate, changedate, unknown, comment, match_rule ];
    };
    /* }}} */

    /* Generate prettified value for selector based on tokens. {{{
     *
     * :param tokens: List of token objects.
     * :param at: Position where to start.
     * :param last_at: Position where to stop.
     * :param conf: Configuration options.
     * :returns: Prettified value.
     */
    function prettifySelector(tokens, selector_start, selector_end, selector_type, conf) {

        var prettified_value = '';
        var at$$1 = selector_start;
        while (at$$1 <= selector_end) {
            // console.log('At: ' + at + ', token: ' + tokens[at]);
            if (matchTokens(tokens, at$$1, 'weekday')) {
                if (!conf.leave_weekday_sep_one_day_betw
                    && at$$1 - selector_start > 1 && (matchTokens(tokens, at$$1-1, ',') || matchTokens(tokens, at$$1-1, '-'))
                    && matchTokens(tokens, at$$1-2, 'weekday')
                    && tokens[at$$1][0] === (tokens[at$$1-2][0] + 1) % 7) {
                        prettified_value = prettified_value.substring(0, prettified_value.length - 1) + conf.sep_one_day_between;
                }
                prettified_value += weekdays$$1[tokens[at$$1][0]];
            } else if (at$$1 - selector_start > 0 // e.g. '09:0' -> '09:00'
                    && selector_type === 'time'
                    && matchTokens(tokens, at$$1-1, 'timesep')
                    && matchTokens(tokens, at$$1, 'number')) {
                prettified_value += (tokens[at$$1][0] < 10 ? '0' : '') + tokens[at$$1][0].toString();
            } else if (selector_type === 'time' // e.g. '9:00' -> ' 09:00'
                    && conf.zero_pad_hour
                    && at$$1 !== tokens.length
                    && matchTokens(tokens, at$$1, 'number')
                    && matchTokens(tokens, at$$1+1, 'timesep')) {
                prettified_value += (
                        tokens[at$$1][0] < 10 ?
                            (tokens[at$$1][0] === 0 && conf.one_zero_if_hour_zero ?
                             '' : '0') :
                            '') + tokens[at$$1][0].toString();
            } else if (selector_type === 'time' // e.g. '9-18' -> '09:00-18:00'
                    && at$$1 + 2 <= selector_end
                    && matchTokens(tokens, at$$1, 'number')
                    && matchTokens(tokens, at$$1+1, '-')
                    && matchTokens(tokens, at$$1+2, 'number')) {
                prettified_value += (tokens[at$$1][0] < 10 ?
                        (tokens[at$$1][0] === 0 && conf.one_zero_if_hour_zero ? '' : '0')
                        : '') + tokens[at$$1][0].toString();
                prettified_value += ':00-'
                    + (tokens[at$$1+2][0] < 10 ? '0' : '') + tokens[at$$1+2][0].toString()
                    + ':00';
                at$$1 += 2;
            } else if (matchTokens(tokens, at$$1, 'comment')) {
                prettified_value += '"' + tokens[at$$1][0].toString() + '"';
            } else if (matchTokens(tokens, at$$1, 'closed')) {
                prettified_value += (conf.leave_off_closed ? tokens[at$$1][0] : conf.keyword_for_off_closed);
            } else if (at$$1 - selector_start > 0 && matchTokens(tokens, at$$1, 'number')
                    && (matchTokens(tokens, at$$1-1, 'month') && selector_type === 'month'
                    ||  matchTokens(tokens, at$$1-1, 'week')  && selector_type === 'week'
                    )) {
                prettified_value += ' '
                    + (conf.zero_pad_month_and_week_numbers && tokens[at$$1][0] < 10 ? '0' : '')
                    + tokens[at$$1][0];
            } else if (at$$1 - selector_start > 0 && matchTokens(tokens, at$$1, 'month')
                    && matchTokens(tokens, at$$1-1, 'year')) {
                prettified_value += ' ' + months$$1[[tokens[at$$1][0]]];
            } else if (at$$1 - selector_start > 0 && matchTokens(tokens, at$$1, 'event')
                    && matchTokens(tokens, at$$1-1, 'year')) {
                prettified_value += ' ' + tokens[at$$1][0];
            } else if (matchTokens(tokens, at$$1, 'month')) {
                prettified_value += months$$1[[tokens[at$$1][0]]];
                if (at$$1 + 1 <= selector_end && matchTokens(tokens, at$$1+1, 'weekday'))
                    prettified_value += ' ';
            } else if (at$$1 + 2 <= selector_end
                    && (matchTokens(tokens, at$$1, '-') || matchTokens(tokens, at$$1, '+'))
                    && matchTokens(tokens, at$$1+1, 'number', 'calcday')) {
                prettified_value += ' ' + tokens[at$$1][0] + tokens[at$$1+1][0] + ' day' + (Math.abs(tokens[at$$1+1][0]) === 1 ? '' : 's');
                at$$1 += 2;
            } else if (at$$1 === selector_end
                    && selector_type === 'weekday'
                    && tokens[at$$1][0] === ':') {
                // Do nothing.
            } else {
                prettified_value += tokens[at$$1][0].toString();
            }
            at$$1++;
        }
        return prettified_value;
    }
    /* }}} */

    //======================================================================
    // Public interface {{{
    // All functions below are considered public.
    //======================================================================

    // Simple API {{{

    this.getState = function(date) {
        var it$$1 = this.getIterator(date);
        return it$$1.getState();
    };

    this.getUnknown = function(date) {
        var it$$1 = this.getIterator(date);
        return it$$1.getUnknown();
    };

    this.getStateString = function(date, past) {
        var it$$1 = this.getIterator(date);
        return it$$1.getStateString(past);
    };

    this.getComment = function(date) {
        var it$$1 = this.getIterator(date);
        return it$$1.getComment();
    };

    this.getMatchingRule = function(date) {
        var it$$1 = this.getIterator(date);
        return it$$1.getMatchingRule();
    };

    /* Not available for iterator API {{{ */
    /* getWarnings: Get warnings, empty list if none {{{ */
    this.getWarnings = function() {
        var it$$1 = this.getIterator();
        return getWarnings(it$$1);
    };
    /* }}} */

    /* prettifyValue: Get a nicely formated value {{{ */
    this.prettifyValue = function(argument_hash) {
        this.getWarnings();
        /* getWarnings has to be run before prettifyValue because some
         * decisions if certain aspects makes sense to prettify or not
         * are influenced by warnings.
         * Basically, both functions depend on each other in some way :(
         * See done_with_selector_reordering.
         */
        return prettifyValue(argument_hash);
    };
    /* }}} */

    /* getNextChange: Get time of next status change {{{ */
    this.getNextChange = function(date, maxdate) {
        var it$$1 = this.getIterator(date);
        if (!it$$1.advance(maxdate))
            return undefined;
        return it$$1.getDate();
    };
    /* }}} */

    /* isWeekStable: Checks whether open intervals are same for every week. {{{ */
    this.isWeekStable = function() {
        return week_stable;
    };
    /* }}} */

    /* isEqualTo: Check if this opening_hours object has the same meaning as the given opening_hours object. {{{ */
    this.isEqualTo = function(second_oh_object, start_date) {
        if (typeof start_date === 'undefined') {
            var start_date = new Date();
        }
        var datelimit;

        if (this.isWeekStable() && second_oh_object.isWeekStable()) {
            datelimit = new Date(start_date.getTime() + msec_in_day * 10);
        // } else if (this.isWeekStable() !== second_oh_object.isWeekStable()) {
        //     return [ false,
        //         {
        //             'reason': 'isWeekStable do not match',
        //         }
        //     ];
        } else {
            datelimit = new Date(start_date.getTime() + msec_in_day * 366 * 5);
        }

        var first_it = this.getIterator(start_date);
        var second_it = second_oh_object.getIterator(start_date);

        while (first_it.advance(datelimit)) {
            second_it.advance(datelimit);

            var not_equal = [];

            if (first_it.getDate().getTime() !== second_it.getDate().getTime()) {
                not_equal.push('getDate');
            }

            if (first_it.getState() !== second_it.getState()) {
                not_equal.push('getState');
            }

            if (first_it.getUnknown() !== second_it.getUnknown()) {
                not_equal.push('getUnknown');
            }

            if (first_it.getComment() !== second_it.getComment()) {
                not_equal.push('getComment');
            }

            if (not_equal.length) {
                var deviation_for_time = {};
                deviation_for_time[first_it.getDate().getTime()] = not_equal;
                return [ false,
                    {
                        'matching_rule': first_it.getMatchingRule(),
                        'matching_rule_other': second_it.getMatchingRule(),
                        'deviation_for_time': deviation_for_time,
                    }
                ];
            }
        }

        return [ true ];
    };
    /* }}} */
    /* }}} */
    /* }}} */

    // High-level API {{{
    /* getOpenIntervals: Get array of open intervals between two dates {{{ */
    this.getOpenIntervals = function(from, to) {
        var res = [];

        var it$$1 = this.getIterator(from);

        if (it$$1.getState() || it$$1.getUnknown()) {
            res.push([from, undefined, it$$1.getUnknown(), it$$1.getComment()]);
        }

        while (it$$1.advance(to)) {
            if (it$$1.getState() || it$$1.getUnknown()) {
                if (res.length !== 0 && typeof res[res.length - 1][1] === 'undefined') {
                    // last state was also open or unknown
                    res[res.length - 1][1] = it$$1.getDate();
                }
                res.push([it$$1.getDate(), undefined, it$$1.getUnknown(), it$$1.getComment()]);
            } else {
                if (res.length !== 0 && typeof res[res.length - 1][1] === 'undefined') {
                    // only use the first time as closing/change time and ignore closing times which might follow
                    res[res.length - 1][1] = it$$1.getDate();
                }
            }
        }

        if (res.length > 0 && typeof res[res.length - 1][1] === 'undefined') {
            res[res.length - 1][1] = to;
        }

        return res;
    };
    /* }}} */

    /* getOpenDuration: Get total number of milliseconds a facility is open,unknown within a given date range {{{ */
    this.getOpenDuration = function(from, to) {
    // console.log('-----------');

        var open    = 0;
        var unknown = 0;

        var it$$1 = this.getIterator(from);
        var prevdate    = (it$$1.getState() || it$$1.getUnknown()) ? from : undefined;
        var prevstate   = it$$1.getState();
        var prevunknown = it$$1.getUnknown();

        while (it$$1.advance(to)) {
            if (it$$1.getState() || it$$1.getUnknown()) {

                if (typeof prevdate === 'object') {
                    // last state was also open or unknown
                    if (prevunknown) //
                        unknown += it$$1.getDate().getTime() - prevdate.getTime();
                    else if (prevstate)
                        open    += it$$1.getDate().getTime() - prevdate.getTime();
                }

                prevdate    = it$$1.getDate();
                prevstate   = it$$1.getState();
                prevunknown = it$$1.getUnknown();
                // console.log('if', prevdate, open / (1000 * 60 * 60), unknown / (1000 * 60 * 60));
            } else {
                // console.log('else', prevdate);
                if (typeof prevdate === 'object') {
                    if (prevunknown)
                        unknown += it$$1.getDate().getTime() - prevdate.getTime();
                    else
                        open    += it$$1.getDate().getTime() - prevdate.getTime();
                    prevdate = undefined;
                }
            }
        }

        if (typeof prevdate === 'object') {
            if (prevunknown)
                unknown += to.getTime() - prevdate.getTime();
            else
                open    += to.getTime() - prevdate.getTime();
        }

        return [ open, unknown ];
    };
    /* }}} */
    /* }}} */

    // Iterator API {{{
    this.getIterator = function(date) {
        return new function(oh) {
            if (typeof date === 'undefined')
                date = new Date();

            var prevstate = [ undefined, date, undefined, undefined, undefined ];
            var state = oh.getStatePair(date);

            /* getDate {{{ */
            this.getDate = function() {
                return prevstate[1];
            };
            /* }}} */

            /* setDate {{{ */
            this.setDate = function(date) {
                if (typeof date !== 'object')
                    throw t('date parameter needed');

                prevstate = [ undefined, date, undefined, undefined, undefined ];
                state     = oh.getStatePair(date);
            };
            /* }}} */

            /* getState: Check whether facility is `open' {{{ */
            this.getState = function() {
                return state[0];
            };
            /* }}} */

            /* getUnknown: Checks whether the opening state is conditional or unknown {{{ */
            this.getUnknown = function() {
                return state[2];
            };
            /* }}} */

            /* getStateString: Get state string. Either 'open', 'unknown' or 'closed' {{{ */
            this.getStateString = function(past) {
                return (state[0] ? 'open' : (state[2] ? 'unknown' : (past ? 'closed' : 'close')));
            };
            /* }}} */

            /* getComment: Get the comment, undefined in none {{{ */
            this.getComment = function() {
                return state[3];
            };
            /* }}} */

            /* getMatchingRule: Get the rule which matched thus deterrents the current state {{{ */
            this.getMatchingRule = function() {
                if (typeof state[4] === 'undefined')
                    return undefined;

                return rules[state[4]].build_from_token_rule[2];
            };
            /* }}} */

            /* advance: Advances to the next position {{{ */
            this.advance = function(datelimit) {
                if (typeof datelimit === 'undefined') {
                    datelimit = new Date(prevstate[1].getTime() + msec_in_day * 366 * 5);
                } else if (datelimit.getTime() <= prevstate[1].getTime()) {
                    return false; /* The limit for advance needs to be after the current time. */
                }

                do {
                    if (typeof state[1] === 'undefined') {
                        return false; /* open range, we won't be able to advance */
                    }

                    // console.log('\n' + 'previous check time:', prevstate[1]
                    //     + ', current check time:',
                    //     // (state[1].getHours() < 10 ? '0' : '') + state[1].getHours() +
                    //     // ':'+(state[1].getMinutes() < 10 ? '0' : '')+ state[1].getMinutes(), state[1].getDate(),
                    //     state[1],
                    //     (state[0] ? 'open' : (state[2] ? 'unknown' : 'closed')) + ', comment:', state[3]);

                    if (state[1].getTime() <= prevstate[1].getTime()) {
                        /* We're going backwards or staying at the same time.
                         * This most likely indicates an error in a selector code.
                         */
                        throw 'Fatal: infinite loop in nextChange';
                    }

                    if (state[1].getTime() >= datelimit.getTime()) {
                        /* Don't advance beyond limits. */
                        return false;
                    }

                    // do advance
                    prevstate = state;
                    state = oh.getStatePair(prevstate[1]);
                    // console.log(state);
                } while (state[0] === prevstate[0] && state[2] === prevstate[2] && state[3] === prevstate[3]);
                return true;
            };
            /* }}} */
        }(this);
    };
    /* }}} */

    /* }}} */
};

/* vim: set ts=4 sw=4 tw=0 et foldmarker={{{,}}} foldlevel=0 foldmethod=marker : */

return index;

})));
