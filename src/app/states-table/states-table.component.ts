import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IState } from '../models/IState.model';
import { IResource } from '../models/IResource.model';

@Component({
  selector: 'states-table',
  templateUrl: './states-table.component.html',
  styleUrls: ['./states-table.component.scss']
})

export class StatesTable {
    @Input() resources: Array<IResource> = [];

    @Output() onchecked: EventEmitter<IState> = new EventEmitter();
    @Output() onexpanded: EventEmitter<IState> = new EventEmitter();

    states: Array<IState> = [
        {
          "id": 9690,
          "label": "Louisiana",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 468,
              "label": "Islandia"
            },
            {
              "id": 450,
              "label": "Edneyville"
            },
            {
              "id": 460,
              "label": "Sehili"
            },
            {
              "id": 287,
              "label": "Caron"
            },
            {
              "id": 675,
              "label": "Odessa"
            },
            {
              "id": 862,
              "label": "Jacumba"
            },
            {
              "id": 153,
              "label": "Cochranville"
            },
            {
              "id": 886,
              "label": "Bourg"
            }
          ]
        },
        {
          "id": 6931,
          "label": "Florida",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 506,
              "label": "Garfield"
            },
            {
              "id": 269,
              "label": "Hatteras"
            },
            {
              "id": 407,
              "label": "Greenbush"
            },
            {
              "id": 760,
              "label": "Bakersville"
            },
            {
              "id": 507,
              "label": "Carrizo"
            },
            {
              "id": 408,
              "label": "Williston"
            },
            {
              "id": 357,
              "label": "Caspar"
            },
            {
              "id": 128,
              "label": "Bradenville"
            }
          ]
        },
        {
          "id": 3181,
          "label": "Maine",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 292,
              "label": "Choctaw"
            },
            {
              "id": 834,
              "label": "Baden"
            },
            {
              "id": 705,
              "label": "Gallina"
            },
            {
              "id": 843,
              "label": "Outlook"
            },
            {
              "id": 784,
              "label": "Driftwood"
            },
            {
              "id": 381,
              "label": "Greenock"
            },
            {
              "id": 851,
              "label": "Hartsville/Hartley"
            },
            {
              "id": 605,
              "label": "Tonopah"
            }
          ]
        },
        {
          "id": 7306,
          "label": "Guam",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 220,
              "label": "Gerber"
            },
            {
              "id": 951,
              "label": "Maybell"
            },
            {
              "id": 536,
              "label": "Sanford"
            },
            {
              "id": 512,
              "label": "Rose"
            },
            {
              "id": 451,
              "label": "Winston"
            },
            {
              "id": 592,
              "label": "Glenville"
            },
            {
              "id": 573,
              "label": "Lydia"
            },
            {
              "id": 125,
              "label": "Carrsville"
            }
          ]
        },
        {
          "id": 2008,
          "label": "Indiana",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 668,
              "label": "Trona"
            },
            {
              "id": 734,
              "label": "Glenshaw"
            },
            {
              "id": 947,
              "label": "Comptche"
            },
            {
              "id": 852,
              "label": "Rushford"
            },
            {
              "id": 140,
              "label": "Chloride"
            },
            {
              "id": 107,
              "label": "Thynedale"
            },
            {
              "id": 308,
              "label": "Townsend"
            },
            {
              "id": 258,
              "label": "Caroline"
            }
          ]
        },
        {
          "id": 6912,
          "label": "West Virginia",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 589,
              "label": "Dexter"
            },
            {
              "id": 972,
              "label": "Blue"
            },
            {
              "id": 919,
              "label": "Edgar"
            },
            {
              "id": 172,
              "label": "Allensworth"
            },
            {
              "id": 773,
              "label": "Dellview"
            },
            {
              "id": 327,
              "label": "Shawmut"
            },
            {
              "id": 663,
              "label": "Konterra"
            },
            {
              "id": 540,
              "label": "Camptown"
            }
          ]
        },
        {
          "id": 7215,
          "label": "Rhode Island",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 803,
              "label": "Sena"
            },
            {
              "id": 824,
              "label": "Curtice"
            },
            {
              "id": 416,
              "label": "Lemoyne"
            },
            {
              "id": 863,
              "label": "Dodge"
            },
            {
              "id": 884,
              "label": "Remington"
            },
            {
              "id": 832,
              "label": "Wells"
            },
            {
              "id": 931,
              "label": "Sheatown"
            },
            {
              "id": 197,
              "label": "Herald"
            }
          ]
        },
        {
          "id": 6003,
          "label": "Colorado",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 346,
              "label": "Freeburn"
            },
            {
              "id": 532,
              "label": "Woodlands"
            },
            {
              "id": 246,
              "label": "Caroleen"
            },
            {
              "id": 741,
              "label": "Yorklyn"
            },
            {
              "id": 954,
              "label": "Aberdeen"
            },
            {
              "id": 573,
              "label": "Valle"
            },
            {
              "id": 778,
              "label": "Oasis"
            },
            {
              "id": 916,
              "label": "Seymour"
            }
          ]
        },
        {
          "id": 6488,
          "label": "Missouri",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 753,
              "label": "Laurelton"
            },
            {
              "id": 939,
              "label": "Jeff"
            },
            {
              "id": 439,
              "label": "Cliff"
            },
            {
              "id": 907,
              "label": "Fulford"
            },
            {
              "id": 434,
              "label": "Dowling"
            },
            {
              "id": 786,
              "label": "Dale"
            },
            {
              "id": 761,
              "label": "Gadsden"
            },
            {
              "id": 266,
              "label": "Wanamie"
            }
          ]
        },
        {
          "id": 3558,
          "label": "Palau",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 680,
              "label": "Barstow"
            },
            {
              "id": 720,
              "label": "Rutherford"
            },
            {
              "id": 870,
              "label": "Reno"
            },
            {
              "id": 350,
              "label": "Devon"
            },
            {
              "id": 487,
              "label": "Alfarata"
            },
            {
              "id": 642,
              "label": "Verdi"
            },
            {
              "id": 609,
              "label": "Nettie"
            },
            {
              "id": 309,
              "label": "Forestburg"
            }
          ]
        },
        {
          "id": 9422,
          "label": "Connecticut",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 589,
              "label": "Hayes"
            },
            {
              "id": 363,
              "label": "Cazadero"
            },
            {
              "id": 672,
              "label": "Carlton"
            },
            {
              "id": 502,
              "label": "Noxen"
            },
            {
              "id": 533,
              "label": "Hackneyville"
            },
            {
              "id": 750,
              "label": "Kidder"
            },
            {
              "id": 849,
              "label": "Shindler"
            },
            {
              "id": 256,
              "label": "Collins"
            }
          ]
        },
        {
          "id": 3787,
          "label": "North Dakota",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 455,
              "label": "Coyote"
            },
            {
              "id": 764,
              "label": "Chical"
            },
            {
              "id": 906,
              "label": "Drummond"
            },
            {
              "id": 762,
              "label": "Warren"
            },
            {
              "id": 697,
              "label": "Smeltertown"
            },
            {
              "id": 975,
              "label": "Cartwright"
            },
            {
              "id": 649,
              "label": "Herbster"
            },
            {
              "id": 919,
              "label": "Freelandville"
            }
          ]
        },
        {
          "id": 9705,
          "label": "Michigan",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 684,
              "label": "Kanauga"
            },
            {
              "id": 189,
              "label": "Epworth"
            },
            {
              "id": 976,
              "label": "Dawn"
            },
            {
              "id": 173,
              "label": "Centerville"
            },
            {
              "id": 314,
              "label": "Golconda"
            },
            {
              "id": 779,
              "label": "Bentonville"
            },
            {
              "id": 693,
              "label": "Inkerman"
            },
            {
              "id": 977,
              "label": "Deltaville"
            }
          ]
        },
        {
          "id": 3359,
          "label": "Iowa",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 892,
              "label": "Kaka"
            },
            {
              "id": 942,
              "label": "Cascades"
            },
            {
              "id": 858,
              "label": "Hoehne"
            },
            {
              "id": 787,
              "label": "Lisco"
            },
            {
              "id": 321,
              "label": "Summerfield"
            },
            {
              "id": 393,
              "label": "Walton"
            },
            {
              "id": 683,
              "label": "Brady"
            },
            {
              "id": 955,
              "label": "Duryea"
            }
          ]
        },
        {
          "id": 7006,
          "label": "Wisconsin",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 803,
              "label": "Whitewater"
            },
            {
              "id": 561,
              "label": "Leyner"
            },
            {
              "id": 781,
              "label": "Dixie"
            },
            {
              "id": 938,
              "label": "Madaket"
            },
            {
              "id": 491,
              "label": "Jennings"
            },
            {
              "id": 678,
              "label": "Wright"
            },
            {
              "id": 874,
              "label": "Graball"
            },
            {
              "id": 315,
              "label": "Forbestown"
            }
          ]
        },
        {
          "id": 6037,
          "label": "Oklahoma",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 170,
              "label": "Kent"
            },
            {
              "id": 995,
              "label": "Veyo"
            },
            {
              "id": 574,
              "label": "Noblestown"
            },
            {
              "id": 300,
              "label": "Brantleyville"
            },
            {
              "id": 262,
              "label": "Logan"
            },
            {
              "id": 182,
              "label": "Sidman"
            },
            {
              "id": 396,
              "label": "Aguila"
            },
            {
              "id": 244,
              "label": "Rockhill"
            }
          ]
        },
        {
          "id": 3621,
          "label": "Virginia",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 695,
              "label": "Welda"
            },
            {
              "id": 400,
              "label": "Boomer"
            },
            {
              "id": 168,
              "label": "Coral"
            },
            {
              "id": 254,
              "label": "Sperryville"
            },
            {
              "id": 398,
              "label": "Vicksburg"
            },
            {
              "id": 893,
              "label": "Kieler"
            },
            {
              "id": 409,
              "label": "Genoa"
            },
            {
              "id": 531,
              "label": "Cobbtown"
            }
          ]
        },
        {
          "id": 7778,
          "label": "Georgia",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 155,
              "label": "Ona"
            },
            {
              "id": 997,
              "label": "Rodanthe"
            },
            {
              "id": 964,
              "label": "Lawrence"
            },
            {
              "id": 124,
              "label": "Alamo"
            },
            {
              "id": 881,
              "label": "Newkirk"
            },
            {
              "id": 782,
              "label": "Springville"
            },
            {
              "id": 858,
              "label": "Hamilton"
            },
            {
              "id": 677,
              "label": "Morriston"
            }
          ]
        },
        {
          "id": 5288,
          "label": "New York",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 897,
              "label": "Twilight"
            },
            {
              "id": 274,
              "label": "Roberts"
            },
            {
              "id": 706,
              "label": "Trinway"
            },
            {
              "id": 150,
              "label": "Wedgewood"
            },
            {
              "id": 274,
              "label": "Grill"
            },
            {
              "id": 656,
              "label": "Topanga"
            },
            {
              "id": 995,
              "label": "Longbranch"
            },
            {
              "id": 295,
              "label": "Sutton"
            }
          ]
        },
        {
          "id": 1612,
          "label": "Puerto Rico",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 585,
              "label": "Smock"
            },
            {
              "id": 195,
              "label": "Sims"
            },
            {
              "id": 308,
              "label": "Neahkahnie"
            },
            {
              "id": 707,
              "label": "Shasta"
            },
            {
              "id": 217,
              "label": "Rossmore"
            },
            {
              "id": 904,
              "label": "Zortman"
            },
            {
              "id": 322,
              "label": "Glenbrook"
            },
            {
              "id": 676,
              "label": "Orviston"
            }
          ]
        },
        {
          "id": 6904,
          "label": "American Samoa",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 204,
              "label": "Wanship"
            },
            {
              "id": 143,
              "label": "Coaldale"
            },
            {
              "id": 880,
              "label": "Tivoli"
            },
            {
              "id": 477,
              "label": "Wakulla"
            },
            {
              "id": 679,
              "label": "Vivian"
            },
            {
              "id": 778,
              "label": "Cherokee"
            },
            {
              "id": 945,
              "label": "Groveville"
            },
            {
              "id": 714,
              "label": "Waterford"
            }
          ]
        },
        {
          "id": 7474,
          "label": "Arkansas",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 156,
              "label": "Strong"
            },
            {
              "id": 477,
              "label": "Belleview"
            },
            {
              "id": 957,
              "label": "Caln"
            },
            {
              "id": 375,
              "label": "Wollochet"
            },
            {
              "id": 391,
              "label": "Fedora"
            },
            {
              "id": 188,
              "label": "Fresno"
            },
            {
              "id": 154,
              "label": "Columbus"
            },
            {
              "id": 573,
              "label": "Rivera"
            }
          ]
        },
        {
          "id": 4363,
          "label": "New Hampshire",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 209,
              "label": "Needmore"
            },
            {
              "id": 821,
              "label": "Elizaville"
            },
            {
              "id": 729,
              "label": "Limestone"
            },
            {
              "id": 961,
              "label": "Cumminsville"
            },
            {
              "id": 389,
              "label": "Mapletown"
            },
            {
              "id": 375,
              "label": "Falmouth"
            },
            {
              "id": 302,
              "label": "Dunbar"
            },
            {
              "id": 875,
              "label": "Roeville"
            }
          ]
        },
        {
          "id": 8647,
          "label": "Nevada",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 150,
              "label": "Falconaire"
            },
            {
              "id": 116,
              "label": "Stollings"
            },
            {
              "id": 967,
              "label": "Morgandale"
            },
            {
              "id": 587,
              "label": "Flintville"
            },
            {
              "id": 519,
              "label": "Ilchester"
            },
            {
              "id": 218,
              "label": "Lodoga"
            },
            {
              "id": 175,
              "label": "Sedley"
            },
            {
              "id": 301,
              "label": "Stewart"
            }
          ]
        },
        {
          "id": 5215,
          "label": "Montana",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 164,
              "label": "Coultervillle"
            },
            {
              "id": 885,
              "label": "Robinette"
            },
            {
              "id": 252,
              "label": "Gilgo"
            },
            {
              "id": 193,
              "label": "Elrama"
            },
            {
              "id": 168,
              "label": "Teasdale"
            },
            {
              "id": 202,
              "label": "Richford"
            },
            {
              "id": 170,
              "label": "Rehrersburg"
            },
            {
              "id": 669,
              "label": "Boyd"
            }
          ]
        },
        {
          "id": 9504,
          "label": "Tennessee",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 742,
              "label": "Kennedyville"
            },
            {
              "id": 334,
              "label": "Cleary"
            },
            {
              "id": 281,
              "label": "Shrewsbury"
            },
            {
              "id": 687,
              "label": "Dotsero"
            },
            {
              "id": 254,
              "label": "Yonah"
            },
            {
              "id": 459,
              "label": "Esmont"
            },
            {
              "id": 564,
              "label": "Eastvale"
            },
            {
              "id": 848,
              "label": "Retsof"
            }
          ]
        },
        {
          "id": 5628,
          "label": "New Mexico",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 551,
              "label": "Magnolia"
            },
            {
              "id": 597,
              "label": "Callaghan"
            },
            {
              "id": 859,
              "label": "Jamestown"
            },
            {
              "id": 456,
              "label": "Sultana"
            },
            {
              "id": 656,
              "label": "Hollymead"
            },
            {
              "id": 822,
              "label": "Malott"
            },
            {
              "id": 921,
              "label": "Crisman"
            },
            {
              "id": 641,
              "label": "Springdale"
            }
          ]
        },
        {
          "id": 8998,
          "label": "Alaska",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 622,
              "label": "Cataract"
            },
            {
              "id": 958,
              "label": "Kimmell"
            },
            {
              "id": 853,
              "label": "Clayville"
            },
            {
              "id": 643,
              "label": "Ezel"
            },
            {
              "id": 361,
              "label": "Longoria"
            },
            {
              "id": 217,
              "label": "Ribera"
            },
            {
              "id": 350,
              "label": "Chemung"
            },
            {
              "id": 318,
              "label": "Gwynn"
            }
          ]
        },
        {
          "id": 8074,
          "label": "Massachusetts",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 140,
              "label": "Cawood"
            },
            {
              "id": 827,
              "label": "Klagetoh"
            },
            {
              "id": 823,
              "label": "Deseret"
            },
            {
              "id": 188,
              "label": "Temperanceville"
            },
            {
              "id": 984,
              "label": "Emison"
            },
            {
              "id": 681,
              "label": "Kipp"
            },
            {
              "id": 158,
              "label": "Westerville"
            },
            {
              "id": 307,
              "label": "Bethany"
            }
          ]
        },
        {
          "id": 8821,
          "label": "Alabama",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 604,
              "label": "Winesburg"
            },
            {
              "id": 642,
              "label": "Joppa"
            },
            {
              "id": 197,
              "label": "Ogema"
            },
            {
              "id": 696,
              "label": "Ada"
            },
            {
              "id": 874,
              "label": "National"
            },
            {
              "id": 329,
              "label": "Chicopee"
            },
            {
              "id": 447,
              "label": "Cornfields"
            },
            {
              "id": 354,
              "label": "Adelino"
            }
          ]
        },
        {
          "id": 9653,
          "label": "Pennsylvania",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 405,
              "label": "Gracey"
            },
            {
              "id": 545,
              "label": "Gibbsville"
            },
            {
              "id": 809,
              "label": "Clarktown"
            },
            {
              "id": 312,
              "label": "Hasty"
            },
            {
              "id": 200,
              "label": "Kylertown"
            },
            {
              "id": 398,
              "label": "Slovan"
            },
            {
              "id": 198,
              "label": "Orovada"
            },
            {
              "id": 271,
              "label": "Tolu"
            }
          ]
        },
        {
          "id": 9107,
          "label": "Oregon",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 718,
              "label": "Blanco"
            },
            {
              "id": 555,
              "label": "Haring"
            },
            {
              "id": 125,
              "label": "Oley"
            },
            {
              "id": 646,
              "label": "Hachita"
            },
            {
              "id": 579,
              "label": "Darrtown"
            },
            {
              "id": 261,
              "label": "Sanders"
            },
            {
              "id": 646,
              "label": "Ernstville"
            },
            {
              "id": 566,
              "label": "Johnsonburg"
            }
          ]
        },
        {
          "id": 7345,
          "label": "Texas",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 872,
              "label": "Kilbourne"
            },
            {
              "id": 507,
              "label": "Wyoming"
            },
            {
              "id": 669,
              "label": "Blanford"
            },
            {
              "id": 599,
              "label": "Osmond"
            },
            {
              "id": 888,
              "label": "Garnet"
            },
            {
              "id": 392,
              "label": "Coleville"
            },
            {
              "id": 298,
              "label": "Dyckesville"
            },
            {
              "id": 557,
              "label": "Brogan"
            }
          ]
        },
        {
          "id": 1107,
          "label": "Federated States Of Micronesia",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 585,
              "label": "Hannasville"
            },
            {
              "id": 686,
              "label": "Harmon"
            },
            {
              "id": 844,
              "label": "Echo"
            },
            {
              "id": 318,
              "label": "Linwood"
            },
            {
              "id": 577,
              "label": "Henrietta"
            },
            {
              "id": 678,
              "label": "Bancroft"
            },
            {
              "id": 913,
              "label": "Cumberland"
            },
            {
              "id": 835,
              "label": "Idamay"
            }
          ]
        },
        {
          "id": 8345,
          "label": "North Carolina",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 766,
              "label": "Lithium"
            },
            {
              "id": 854,
              "label": "Trail"
            },
            {
              "id": 303,
              "label": "Como"
            },
            {
              "id": 957,
              "label": "Winfred"
            },
            {
              "id": 136,
              "label": "Kohatk"
            },
            {
              "id": 187,
              "label": "Austinburg"
            },
            {
              "id": 509,
              "label": "Aurora"
            },
            {
              "id": 984,
              "label": "Interlochen"
            }
          ]
        },
        {
          "id": 7467,
          "label": "Utah",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 142,
              "label": "Nicholson"
            },
            {
              "id": 529,
              "label": "Frystown"
            },
            {
              "id": 371,
              "label": "Venice"
            },
            {
              "id": 572,
              "label": "Grantville"
            },
            {
              "id": 381,
              "label": "Bethpage"
            },
            {
              "id": 451,
              "label": "Joes"
            },
            {
              "id": 980,
              "label": "Biddle"
            },
            {
              "id": 195,
              "label": "Independence"
            }
          ]
        },
        {
          "id": 5430,
          "label": "South Carolina",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 847,
              "label": "Chapin"
            },
            {
              "id": 893,
              "label": "Canoochee"
            },
            {
              "id": 201,
              "label": "Elfrida"
            },
            {
              "id": 239,
              "label": "Gloucester"
            },
            {
              "id": 240,
              "label": "Macdona"
            },
            {
              "id": 494,
              "label": "Ballico"
            },
            {
              "id": 308,
              "label": "Soudan"
            },
            {
              "id": 381,
              "label": "Weogufka"
            }
          ]
        },
        {
          "id": 4381,
          "label": "South Dakota",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 649,
              "label": "Dunnavant"
            },
            {
              "id": 809,
              "label": "Kraemer"
            },
            {
              "id": 149,
              "label": "Gilmore"
            },
            {
              "id": 591,
              "label": "Enoree"
            },
            {
              "id": 463,
              "label": "Walker"
            },
            {
              "id": 839,
              "label": "Hiwasse"
            },
            {
              "id": 770,
              "label": "Yukon"
            },
            {
              "id": 948,
              "label": "Bellamy"
            }
          ]
        },
        {
          "id": 9548,
          "label": "Minnesota",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 470,
              "label": "Homestead"
            },
            {
              "id": 510,
              "label": "Cloverdale"
            },
            {
              "id": 520,
              "label": "Motley"
            },
            {
              "id": 502,
              "label": "Tecolotito"
            },
            {
              "id": 354,
              "label": "Lynn"
            },
            {
              "id": 550,
              "label": "Harborton"
            },
            {
              "id": 507,
              "label": "Thatcher"
            },
            {
              "id": 468,
              "label": "Loretto"
            }
          ]
        },
        {
          "id": 3370,
          "label": "California",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 593,
              "label": "Westboro"
            },
            {
              "id": 773,
              "label": "Coloma"
            },
            {
              "id": 513,
              "label": "Nash"
            },
            {
              "id": 135,
              "label": "Allison"
            },
            {
              "id": 964,
              "label": "Bartonsville"
            },
            {
              "id": 664,
              "label": "Roy"
            },
            {
              "id": 754,
              "label": "Waumandee"
            },
            {
              "id": 155,
              "label": "Fairview"
            }
          ]
        },
        {
          "id": 1854,
          "label": "New Jersey",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 911,
              "label": "Fannett"
            },
            {
              "id": 630,
              "label": "Croom"
            },
            {
              "id": 730,
              "label": "Klondike"
            },
            {
              "id": 844,
              "label": "Delwood"
            },
            {
              "id": 482,
              "label": "Whitehaven"
            },
            {
              "id": 643,
              "label": "Blairstown"
            },
            {
              "id": 305,
              "label": "Edinburg"
            },
            {
              "id": 348,
              "label": "Oretta"
            }
          ]
        },
        {
          "id": 9826,
          "label": "Vermont",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 179,
              "label": "Greensburg"
            },
            {
              "id": 904,
              "label": "Reinerton"
            },
            {
              "id": 210,
              "label": "Websterville"
            },
            {
              "id": 440,
              "label": "Dixonville"
            },
            {
              "id": 574,
              "label": "Sanborn"
            },
            {
              "id": 542,
              "label": "Leland"
            },
            {
              "id": 165,
              "label": "Loomis"
            },
            {
              "id": 835,
              "label": "Albrightsville"
            }
          ]
        },
        {
          "id": 8357,
          "label": "Idaho",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 331,
              "label": "Lacomb"
            },
            {
              "id": 153,
              "label": "Cliffside"
            },
            {
              "id": 225,
              "label": "Brownlee"
            },
            {
              "id": 957,
              "label": "Templeton"
            },
            {
              "id": 242,
              "label": "Caledonia"
            },
            {
              "id": 721,
              "label": "Sexton"
            },
            {
              "id": 619,
              "label": "Kansas"
            },
            {
              "id": 786,
              "label": "Murillo"
            }
          ]
        },
        {
          "id": 8637,
          "label": "Arizona",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 836,
              "label": "Chalfant"
            },
            {
              "id": 721,
              "label": "Sattley"
            },
            {
              "id": 288,
              "label": "Ruckersville"
            },
            {
              "id": 864,
              "label": "Lowgap"
            },
            {
              "id": 952,
              "label": "Nicut"
            },
            {
              "id": 646,
              "label": "Boling"
            },
            {
              "id": 100,
              "label": "Davenport"
            },
            {
              "id": 787,
              "label": "Oberlin"
            }
          ]
        },
        {
          "id": 2807,
          "label": "Northern Mariana Islands",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 354,
              "label": "Tryon"
            },
            {
              "id": 926,
              "label": "Linganore"
            },
            {
              "id": 298,
              "label": "Iberia"
            },
            {
              "id": 343,
              "label": "Manila"
            },
            {
              "id": 294,
              "label": "Elliston"
            },
            {
              "id": 122,
              "label": "Chesterfield"
            },
            {
              "id": 566,
              "label": "Irwin"
            },
            {
              "id": 622,
              "label": "Riegelwood"
            }
          ]
        },
        {
          "id": 1510,
          "label": "Kansas",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 511,
              "label": "Sharon"
            },
            {
              "id": 910,
              "label": "Tyro"
            },
            {
              "id": 676,
              "label": "Yogaville"
            },
            {
              "id": 369,
              "label": "Calverton"
            },
            {
              "id": 346,
              "label": "Goodville"
            },
            {
              "id": 311,
              "label": "Brethren"
            },
            {
              "id": 742,
              "label": "Martell"
            },
            {
              "id": 529,
              "label": "Datil"
            }
          ]
        },
        {
          "id": 8955,
          "label": "Nebraska",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 713,
              "label": "Maury"
            },
            {
              "id": 334,
              "label": "Abiquiu"
            },
            {
              "id": 627,
              "label": "Olney"
            },
            {
              "id": 879,
              "label": "Goldfield"
            },
            {
              "id": 988,
              "label": "Bowie"
            },
            {
              "id": 889,
              "label": "Crucible"
            },
            {
              "id": 732,
              "label": "Homeworth"
            },
            {
              "id": 261,
              "label": "Sardis"
            }
          ]
        },
        {
          "id": 8779,
          "label": "Illinois",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 254,
              "label": "Navarre"
            },
            {
              "id": 941,
              "label": "Denio"
            },
            {
              "id": 659,
              "label": "Crenshaw"
            },
            {
              "id": 863,
              "label": "Camas"
            },
            {
              "id": 119,
              "label": "Katonah"
            },
            {
              "id": 401,
              "label": "Benson"
            },
            {
              "id": 353,
              "label": "Crayne"
            },
            {
              "id": 587,
              "label": "Norris"
            }
          ]
        },
        {
          "id": 7786,
          "label": "Marshall Islands",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 383,
              "label": "Guthrie"
            },
            {
              "id": 424,
              "label": "Faxon"
            },
            {
              "id": 555,
              "label": "Bloomington"
            },
            {
              "id": 508,
              "label": "Lafferty"
            },
            {
              "id": 951,
              "label": "Whitmer"
            },
            {
              "id": 316,
              "label": "Celeryville"
            },
            {
              "id": 432,
              "label": "Fairfield"
            },
            {
              "id": 434,
              "label": "Graniteville"
            }
          ]
        },
        {
          "id": 1684,
          "label": "Delaware",
          "expanded": false,
          "checked": false,
          "cities": [
            {
              "id": 547,
              "label": "Shaft"
            },
            {
              "id": 980,
              "label": "Kiskimere"
            },
            {
              "id": 896,
              "label": "Riverton"
            },
            {
              "id": 201,
              "label": "Ellerslie"
            },
            {
              "id": 908,
              "label": "Catharine"
            },
            {
              "id": 565,
              "label": "Warsaw"
            },
            {
              "id": 472,
              "label": "Hebron"
            },
            {
              "id": 847,
              "label": "Kempton"
            }
          ]
        }
    ];

    pageNumber: number = 1;
    itemsPerPage: number = 10;
    
    getIndexByPageNumber(index: number): number {   
        return this.pageNumber == 1 ? index : (this.itemsPerPage * (this.pageNumber - 1)) + index;
    }

    handleChecked(state: IState): void {
        state.checked = !state.checked;

        this.onchecked.emit(state);
    }

    handleExpanded(state: IState): void {
        state.expanded = !state.expanded;

        this.onexpanded.emit(state);
    }


}