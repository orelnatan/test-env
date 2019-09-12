import { Component } from '@angular/core';
import { IState } from '../models/IState.model';
import { IResource } from '../models/IResource.model';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class Home {
    console: Console = console;

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
    resources: Array<IResource> = [
        {
          "id": "5d7753c2309528fde9ac7937",
          "label": "Kangle",
          "color": "#65df3a",
          "data": [
            {
              "id": "30df021a-1229-4e0d-8e84-0416174f5343",
              "total": 6663,
              "values": [
                95,
                83,
                78,
                68,
                28,
                92,
                61,
                56
              ]
            },
            {
              "id": "29996a61-c86c-4425-ba86-f89620a26eed",
              "total": 7410,
              "values": [
                70,
                72,
                87,
                11,
                90,
                74,
                47,
                32
              ]
            },
            {
              "id": "9ae91950-2565-4f8e-a88a-dd8e9fabf660",
              "total": 2592,
              "values": [
                19,
                89,
                48,
                89,
                61,
                65,
                45,
                11
              ]
            },
            {
              "id": "df4152cf-23af-499c-bb61-06be313bd6e9",
              "total": 7986,
              "values": [
                77,
                39,
                36,
                12,
                50,
                46,
                54,
                25
              ]
            },
            {
              "id": "8544ce23-67db-437e-9fe2-92f3caa46da6",
              "total": 2241,
              "values": [
                61,
                26,
                37,
                71,
                85,
                22,
                66,
                90
              ]
            },
            {
              "id": "ec169efa-d980-478a-9001-7adb2264e062",
              "total": 9904,
              "values": [
                15,
                46,
                13,
                32,
                56,
                42,
                14,
                73
              ]
            },
            {
              "id": "4a3619f4-8bdb-4800-b649-7234615bf741",
              "total": 6336,
              "values": [
                82,
                84,
                81,
                76,
                30,
                27,
                40,
                26
              ]
            },
            {
              "id": "75852395-cbe8-4181-bcb3-72bb2fc2dd8a",
              "total": 5367,
              "values": [
                67,
                68,
                24,
                74,
                18,
                40,
                98,
                97
              ]
            },
            {
              "id": "0db76f72-1ff8-4984-a7b5-85404082da88",
              "total": 5007,
              "values": [
                86,
                12,
                63,
                49,
                36,
                80,
                32,
                37
              ]
            },
            {
              "id": "9a1dd8c1-592c-49a3-a2ff-d84b64e4ba6a",
              "total": 4518,
              "values": [
                20,
                67,
                72,
                58,
                74,
                99,
                97,
                43
              ]
            },
            {
              "id": "cfc1b432-340f-469e-9aec-0c511dc5c64f",
              "total": 7357,
              "values": [
                25,
                13,
                24,
                21,
                91,
                67,
                27,
                81
              ]
            },
            {
              "id": "e0550a41-2837-4b6c-967d-64d73ae78f03",
              "total": 7949,
              "values": [
                79,
                24,
                15,
                76,
                32,
                66,
                59,
                44
              ]
            },
            {
              "id": "72fb4f42-072e-45ba-81ea-49a5a407262c",
              "total": 8843,
              "values": [
                25,
                93,
                17,
                67,
                21,
                55,
                27,
                38
              ]
            },
            {
              "id": "1b1e4c03-f950-4dab-9b09-2ec5fb10fb8a",
              "total": 4850,
              "values": [
                60,
                35,
                12,
                32,
                71,
                23,
                57,
                12
              ]
            },
            {
              "id": "77f89f29-9276-40da-885d-17d38ddd2119",
              "total": 1767,
              "values": [
                10,
                24,
                34,
                28,
                28,
                39,
                64,
                23
              ]
            },
            {
              "id": "31adc64c-02e7-4ab0-81cc-60e646c83291",
              "total": 2688,
              "values": [
                66,
                49,
                50,
                44,
                40,
                74,
                25,
                51
              ]
            },
            {
              "id": "3dd484c1-00ed-4451-86a9-ee664a09e737",
              "total": 5599,
              "values": [
                42,
                92,
                12,
                47,
                11,
                36,
                73,
                46
              ]
            },
            {
              "id": "1c168c38-100a-4a4f-b5ec-9dcf3459246a",
              "total": 3140,
              "values": [
                32,
                62,
                97,
                74,
                30,
                76,
                67,
                21
              ]
            },
            {
              "id": "8ff16fcb-4835-4e52-aebf-e3a1a9b65de4",
              "total": 1212,
              "values": [
                50,
                93,
                61,
                89,
                27,
                41,
                34,
                37
              ]
            },
            {
              "id": "d73fc212-8235-4395-a876-1ce364b2e176",
              "total": 1160,
              "values": [
                77,
                55,
                77,
                62,
                51,
                12,
                72,
                26
              ]
            },
            {
              "id": "bc3f6a39-f200-431e-ae27-b5c5ecbac740",
              "total": 3027,
              "values": [
                18,
                22,
                75,
                41,
                24,
                26,
                76,
                86
              ]
            },
            {
              "id": "d3b7007b-9185-415c-942e-06a0708139ae",
              "total": 8551,
              "values": [
                31,
                38,
                27,
                47,
                33,
                50,
                39,
                34
              ]
            },
            {
              "id": "1acfde06-ecbd-4ec9-8782-9bf4d802c9f7",
              "total": 3258,
              "values": [
                91,
                47,
                72,
                94,
                43,
                52,
                55,
                60
              ]
            },
            {
              "id": "4c799097-6c7d-4cb9-b739-22cf6473c4fe",
              "total": 3955,
              "values": [
                81,
                15,
                89,
                35,
                69,
                37,
                98,
                95
              ]
            },
            {
              "id": "b35740d7-a96e-41a0-8754-eaee73749259",
              "total": 1403,
              "values": [
                11,
                18,
                93,
                82,
                94,
                89,
                82,
                53
              ]
            },
            {
              "id": "25d52be9-8943-423e-b42d-1bc9eb0c9546",
              "total": 9684,
              "values": [
                23,
                32,
                96,
                57,
                35,
                80,
                50,
                94
              ]
            },
            {
              "id": "21705513-0274-46a8-98bd-97e9bdcfe8b4",
              "total": 6964,
              "values": [
                19,
                13,
                35,
                98,
                15,
                14,
                66,
                91
              ]
            },
            {
              "id": "7d59cd10-4a6b-4d18-aa6d-2425b63b4f83",
              "total": 7327,
              "values": [
                61,
                62,
                56,
                58,
                80,
                24,
                15,
                83
              ]
            },
            {
              "id": "e4881062-c8dd-4f37-9ebc-66b2f884ff33",
              "total": 7330,
              "values": [
                84,
                95,
                19,
                66,
                22,
                55,
                21,
                10
              ]
            },
            {
              "id": "675a0084-8378-487d-9a44-d377f6a56572",
              "total": 9888,
              "values": [
                77,
                14,
                76,
                87,
                41,
                83,
                97,
                40
              ]
            },
            {
              "id": "9c8a41fa-d34d-4442-9ac4-95f68a4f8559",
              "total": 9912,
              "values": [
                41,
                28,
                24,
                81,
                15,
                41,
                45,
                47
              ]
            },
            {
              "id": "b83252b0-f1be-42db-9d1f-4ae74ec7365b",
              "total": 9259,
              "values": [
                83,
                54,
                14,
                97,
                54,
                90,
                25,
                47
              ]
            },
            {
              "id": "78127b3f-c9df-449b-8a3d-5e1d7599df5a",
              "total": 2887,
              "values": [
                43,
                10,
                57,
                45,
                91,
                67,
                19,
                26
              ]
            },
            {
              "id": "af9dae65-9f64-4040-9627-3684599ed0f3",
              "total": 4814,
              "values": [
                62,
                81,
                13,
                22,
                26,
                14,
                71,
                52
              ]
            },
            {
              "id": "b91a2e4c-5a18-4c7a-bb2e-a4de7234bdf5",
              "total": 4336,
              "values": [
                94,
                23,
                31,
                72,
                96,
                76,
                82,
                34
              ]
            },
            {
              "id": "9c52f4c6-290e-46bc-b5d5-a86a9640087b",
              "total": 4662,
              "values": [
                68,
                80,
                36,
                26,
                68,
                56,
                47,
                10
              ]
            },
            {
              "id": "5e658b08-d40a-44e6-8e57-f00c27ee0159",
              "total": 1702,
              "values": [
                16,
                36,
                99,
                72,
                73,
                95,
                18,
                46
              ]
            },
            {
              "id": "555fcead-05cf-4d37-a62f-a1a430e17a75",
              "total": 9894,
              "values": [
                42,
                29,
                30,
                96,
                12,
                23,
                63,
                80
              ]
            },
            {
              "id": "5670e287-9833-4e81-8ce0-1fcbc4d46117",
              "total": 7558,
              "values": [
                74,
                65,
                49,
                67,
                47,
                71,
                52,
                47
              ]
            },
            {
              "id": "fdb63d36-3bd5-444f-a462-ccf318d2412d",
              "total": 3974,
              "values": [
                60,
                24,
                99,
                67,
                18,
                51,
                63,
                76
              ]
            },
            {
              "id": "5ede23eb-a9d9-42cd-96b3-b88d25931043",
              "total": 9058,
              "values": [
                85,
                77,
                75,
                34,
                41,
                86,
                43,
                43
              ]
            },
            {
              "id": "b90285c3-f396-4760-9a9b-c2037022a4d3",
              "total": 9293,
              "values": [
                71,
                65,
                95,
                88,
                14,
                96,
                88,
                46
              ]
            },
            {
              "id": "ef78392e-88dc-426b-846c-16c828f462ee",
              "total": 8182,
              "values": [
                69,
                69,
                19,
                84,
                55,
                38,
                77,
                97
              ]
            },
            {
              "id": "d895a2bd-4633-495d-b710-d983e5c5a4ca",
              "total": 9131,
              "values": [
                26,
                12,
                93,
                70,
                63,
                79,
                35,
                29
              ]
            },
            {
              "id": "cd3d477c-1074-4d8d-85c1-1c79b37d12ff",
              "total": 5708,
              "values": [
                31,
                54,
                19,
                15,
                19,
                56,
                80,
                89
              ]
            },
            {
              "id": "3db075e0-4878-4e7c-ad4a-6c54b3a3e1cc",
              "total": 5856,
              "values": [
                36,
                12,
                13,
                37,
                80,
                71,
                80,
                41
              ]
            },
            {
              "id": "d163dc0c-821c-470e-9656-923612dd4075",
              "total": 8072,
              "values": [
                91,
                11,
                71,
                50,
                15,
                62,
                57,
                96
              ]
            },
            {
              "id": "51b5a792-a313-4180-8962-ed6b0bfb9656",
              "total": 7817,
              "values": [
                57,
                16,
                22,
                77,
                21,
                98,
                76,
                92
              ]
            },
            {
              "id": "d621b671-a771-45d2-ad11-7d7a099ddcba",
              "total": 3392,
              "values": [
                96,
                34,
                67,
                39,
                68,
                80,
                23,
                61
              ]
            },
            {
              "id": "ac34fea1-f7b8-495c-9df7-811e68ccf39c",
              "total": 2393,
              "values": [
                42,
                70,
                99,
                69,
                67,
                62,
                43,
                62
              ]
            }
          ]
        },
        {
          "id": "5d7753c229f5192240e4cc2f",
          "label": "Futurity",
          "color": "#ffd21d",
          "data": [
            {
              "id": "36170d7e-d4e1-4bb4-a384-d8d0da0fad92",
              "total": 1667,
              "values": [
                31,
                16,
                81,
                86,
                18,
                31,
                29,
                55
              ]
            },
            {
              "id": "128ea357-c22e-4958-bd1d-f1d479326f2c",
              "total": 5368,
              "values": [
                96,
                21,
                99,
                17,
                41,
                37,
                10,
                63
              ]
            },
            {
              "id": "baedde36-eadf-4be4-b317-fc73ac478e53",
              "total": 7858,
              "values": [
                81,
                22,
                73,
                69,
                68,
                58,
                46,
                99
              ]
            },
            {
              "id": "e043b1f3-0c22-423c-981d-04fdb56ad150",
              "total": 8137,
              "values": [
                17,
                37,
                93,
                76,
                38,
                40,
                88,
                86
              ]
            },
            {
              "id": "a6ff5a4d-a6c7-4bb1-a777-5c189f2141eb",
              "total": 5866,
              "values": [
                78,
                27,
                55,
                65,
                15,
                31,
                71,
                24
              ]
            },
            {
              "id": "a6b9eeed-ec6f-47a6-ad91-4652b7df8bde",
              "total": 2580,
              "values": [
                92,
                77,
                40,
                36,
                63,
                45,
                35,
                90
              ]
            },
            {
              "id": "a774ed42-d5be-41f2-9f8c-9b52b2b3d0fa",
              "total": 3825,
              "values": [
                74,
                10,
                87,
                47,
                22,
                67,
                56,
                59
              ]
            },
            {
              "id": "62acc36c-1c82-41e9-9552-69443ea9330e",
              "total": 1542,
              "values": [
                16,
                29,
                52,
                18,
                98,
                14,
                77,
                58
              ]
            },
            {
              "id": "ed7e9637-0bcb-41ea-b565-164705cbca74",
              "total": 6046,
              "values": [
                73,
                49,
                52,
                71,
                35,
                63,
                54,
                72
              ]
            },
            {
              "id": "b0fbad5a-69ce-46d7-b8e6-56002d95efe4",
              "total": 5328,
              "values": [
                40,
                66,
                51,
                67,
                95,
                43,
                29,
                29
              ]
            },
            {
              "id": "05d3a5eb-7c65-433f-af2a-3ee318eef2a7",
              "total": 4010,
              "values": [
                46,
                85,
                86,
                53,
                24,
                62,
                59,
                18
              ]
            },
            {
              "id": "72e582a2-db86-49ac-be8b-9142998327d5",
              "total": 7032,
              "values": [
                53,
                40,
                72,
                83,
                50,
                95,
                50,
                21
              ]
            },
            {
              "id": "f487985f-73a9-48bb-8894-9df971cd3ede",
              "total": 3807,
              "values": [
                26,
                46,
                18,
                87,
                12,
                88,
                15,
                36
              ]
            },
            {
              "id": "42338adb-fe00-445a-9d86-0e351750117a",
              "total": 3773,
              "values": [
                72,
                11,
                92,
                16,
                96,
                56,
                20,
                66
              ]
            },
            {
              "id": "4e35e837-ebe8-4b29-b8d4-a3e73bce7f84",
              "total": 2695,
              "values": [
                68,
                56,
                80,
                99,
                43,
                97,
                61,
                69
              ]
            },
            {
              "id": "96dfdac4-948f-4d30-adb7-202ae43a6dbb",
              "total": 9145,
              "values": [
                91,
                98,
                47,
                50,
                24,
                64,
                35,
                56
              ]
            },
            {
              "id": "5663ceab-5d01-4404-914d-793ae05438d4",
              "total": 5835,
              "values": [
                70,
                90,
                34,
                20,
                18,
                78,
                55,
                73
              ]
            },
            {
              "id": "3df8716c-f7aa-48ef-b0b2-20b7e6deeda5",
              "total": 1816,
              "values": [
                38,
                29,
                86,
                32,
                21,
                54,
                12,
                29
              ]
            },
            {
              "id": "a0a5add4-5827-4971-bf9a-09904501b4a0",
              "total": 7761,
              "values": [
                64,
                69,
                52,
                86,
                34,
                49,
                31,
                73
              ]
            },
            {
              "id": "84211951-06ab-4b5f-9af0-98e4f6567112",
              "total": 1472,
              "values": [
                82,
                83,
                91,
                47,
                96,
                59,
                30,
                71
              ]
            },
            {
              "id": "67a6d1ad-fae8-477b-b681-808ed6833a5f",
              "total": 1629,
              "values": [
                71,
                62,
                53,
                70,
                62,
                68,
                70,
                41
              ]
            },
            {
              "id": "277a060b-7a37-4462-bd25-ed10a91e2bb9",
              "total": 8193,
              "values": [
                89,
                32,
                73,
                65,
                12,
                54,
                67,
                24
              ]
            },
            {
              "id": "fc8b8517-30c8-4e46-9757-f73e20cddb7c",
              "total": 8292,
              "values": [
                36,
                59,
                73,
                98,
                67,
                23,
                78,
                30
              ]
            },
            {
              "id": "eff265e9-ff87-47c4-a61a-9766ba3f8f34",
              "total": 3155,
              "values": [
                17,
                16,
                59,
                49,
                80,
                38,
                60,
                58
              ]
            },
            {
              "id": "e320516a-7a78-4325-93a6-ff481d23900d",
              "total": 1171,
              "values": [
                88,
                13,
                70,
                24,
                59,
                20,
                45,
                88
              ]
            },
            {
              "id": "2d097a3d-0a02-4b12-9ad7-b2ad2b17e4a4",
              "total": 7989,
              "values": [
                72,
                30,
                23,
                80,
                21,
                61,
                25,
                71
              ]
            },
            {
              "id": "11184964-ba21-4674-88fc-64cb4fbeb48d",
              "total": 3973,
              "values": [
                11,
                66,
                84,
                81,
                82,
                60,
                35,
                34
              ]
            },
            {
              "id": "b429598c-9bd8-4cb9-9f02-76a0b4ad599e",
              "total": 6339,
              "values": [
                21,
                59,
                49,
                39,
                26,
                14,
                82,
                44
              ]
            },
            {
              "id": "5a485833-cac1-4da2-8bcb-13551994b008",
              "total": 5631,
              "values": [
                48,
                93,
                59,
                23,
                69,
                55,
                66,
                86
              ]
            },
            {
              "id": "aa5dc123-4726-46be-b4ad-d3b4c5c12cc8",
              "total": 4331,
              "values": [
                40,
                69,
                75,
                77,
                56,
                97,
                77,
                21
              ]
            },
            {
              "id": "4cf2c676-5bbf-47d4-b0b7-b0b39f20b08b",
              "total": 1894,
              "values": [
                47,
                24,
                50,
                15,
                52,
                31,
                70,
                46
              ]
            },
            {
              "id": "a4432753-fbe0-4a07-945e-24c99e3ff032",
              "total": 2242,
              "values": [
                60,
                34,
                80,
                95,
                64,
                34,
                77,
                53
              ]
            },
            {
              "id": "c10d37af-9c08-4c2b-bad1-d6a2fddd39ac",
              "total": 1816,
              "values": [
                63,
                57,
                77,
                25,
                21,
                14,
                47,
                49
              ]
            },
            {
              "id": "e8f0e074-55af-4150-a94b-deaeedda0ff0",
              "total": 7794,
              "values": [
                20,
                11,
                27,
                57,
                38,
                95,
                90,
                17
              ]
            },
            {
              "id": "5ce4c214-e69e-4823-93cb-f017c9a38e69",
              "total": 8491,
              "values": [
                63,
                48,
                94,
                89,
                34,
                53,
                87,
                86
              ]
            },
            {
              "id": "c527e80c-89c6-401f-b8c0-47aa736bbeb5",
              "total": 5088,
              "values": [
                86,
                66,
                87,
                40,
                81,
                26,
                78,
                70
              ]
            },
            {
              "id": "5da2fed2-54a7-4da8-842c-35852c573be7",
              "total": 7026,
              "values": [
                78,
                36,
                49,
                73,
                58,
                43,
                46,
                36
              ]
            },
            {
              "id": "4bc781ff-f40b-4a9a-8060-da5d76a1828b",
              "total": 8777,
              "values": [
                63,
                47,
                95,
                92,
                10,
                22,
                86,
                49
              ]
            },
            {
              "id": "470f430f-4a0b-456c-a46b-b9e9e886f7b4",
              "total": 2590,
              "values": [
                70,
                83,
                83,
                63,
                22,
                94,
                30,
                90
              ]
            },
            {
              "id": "943dce44-f93d-4d92-8717-9b06324d7acc",
              "total": 2195,
              "values": [
                96,
                87,
                74,
                81,
                14,
                20,
                30,
                18
              ]
            },
            {
              "id": "df18f082-e440-4fa5-adf4-1a590ed138b0",
              "total": 5207,
              "values": [
                47,
                46,
                52,
                83,
                19,
                64,
                82,
                87
              ]
            },
            {
              "id": "f97ac334-812b-4130-9827-41b86d334ed1",
              "total": 6765,
              "values": [
                14,
                59,
                60,
                72,
                77,
                82,
                79,
                72
              ]
            },
            {
              "id": "4b3f5330-5e64-4de7-bcfe-8840a0059312",
              "total": 2090,
              "values": [
                54,
                45,
                49,
                66,
                57,
                66,
                19,
                92
              ]
            },
            {
              "id": "21ca3ae1-e127-46f7-8b91-66ddd650fd4a",
              "total": 8307,
              "values": [
                97,
                56,
                56,
                70,
                15,
                34,
                69,
                89
              ]
            },
            {
              "id": "1a2ee950-d217-4700-92f1-6031af5163c6",
              "total": 6591,
              "values": [
                48,
                33,
                12,
                98,
                20,
                22,
                62,
                47
              ]
            },
            {
              "id": "7e2d37c1-488c-4202-910d-c1801949c312",
              "total": 1929,
              "values": [
                24,
                64,
                78,
                60,
                99,
                64,
                96,
                89
              ]
            },
            {
              "id": "62c78e7b-11eb-4e30-8377-2dd27830be62",
              "total": 6510,
              "values": [
                36,
                17,
                64,
                71,
                14,
                82,
                99,
                99
              ]
            },
            {
              "id": "bd0ecdc8-ec3c-49d5-a20c-b46a5b0b29f0",
              "total": 2520,
              "values": [
                28,
                51,
                55,
                79,
                19,
                99,
                94,
                69
              ]
            },
            {
              "id": "55f16302-cd00-440e-93cd-8ab50b5f19f8",
              "total": 3219,
              "values": [
                36,
                69,
                59,
                11,
                46,
                38,
                77,
                62
              ]
            },
            {
              "id": "09a32e14-fd43-4e40-a806-decfd17933b9",
              "total": 4531,
              "values": [
                24,
                97,
                96,
                37,
                42,
                92,
                28,
                19
              ]
            }
          ]
        },
        {
          "id": "5d7753c2cf8e0bf28fb2928b",
          "label": "Earwax",
          "color": "#f57d31",
          "data": [
            {
              "id": "80580570-2b36-46f6-94a8-c4eda98cac30",
              "total": 9965,
              "values": [
                36,
                48,
                94,
                34,
                10,
                61,
                94,
                23
              ]
            },
            {
              "id": "9e4abd70-1db6-495d-b469-e6406e3d0532",
              "total": 8708,
              "values": [
                58,
                35,
                91,
                34,
                45,
                15,
                77,
                57
              ]
            },
            {
              "id": "feb2e956-840b-4250-8649-a5182e813e7b",
              "total": 1957,
              "values": [
                94,
                18,
                34,
                51,
                88,
                14,
                15,
                22
              ]
            },
            {
              "id": "f5deb05e-fe3e-44b0-9da8-1157f0894264",
              "total": 3361,
              "values": [
                91,
                32,
                67,
                69,
                23,
                27,
                90,
                90
              ]
            },
            {
              "id": "03b28703-af67-452a-aa4b-d636384dba37",
              "total": 7511,
              "values": [
                23,
                39,
                40,
                55,
                46,
                95,
                23,
                13
              ]
            },
            {
              "id": "20d280e5-5082-4a67-b237-963d8426cb32",
              "total": 2968,
              "values": [
                40,
                14,
                90,
                57,
                60,
                72,
                67,
                89
              ]
            },
            {
              "id": "633277a1-db54-4e4a-b047-f3638f890ef4",
              "total": 3117,
              "values": [
                79,
                15,
                12,
                39,
                14,
                64,
                54,
                44
              ]
            },
            {
              "id": "437748bf-7105-4e37-966a-fbfb919abc1f",
              "total": 1480,
              "values": [
                49,
                96,
                80,
                22,
                10,
                84,
                73,
                53
              ]
            },
            {
              "id": "2770dc44-ca9a-45da-9f6a-4df5f294303a",
              "total": 2953,
              "values": [
                49,
                37,
                60,
                15,
                25,
                95,
                64,
                77
              ]
            },
            {
              "id": "65d80bc4-548b-4600-aa8e-83d57b9fa3b9",
              "total": 5263,
              "values": [
                69,
                47,
                86,
                70,
                67,
                81,
                18,
                88
              ]
            },
            {
              "id": "f680bd65-d1f6-435f-ac19-3feac34b72c4",
              "total": 1578,
              "values": [
                19,
                49,
                15,
                79,
                61,
                78,
                82,
                23
              ]
            },
            {
              "id": "939375e3-c3a6-4632-a8e1-5191a15be773",
              "total": 4574,
              "values": [
                19,
                41,
                77,
                67,
                91,
                31,
                58,
                58
              ]
            },
            {
              "id": "f31cf61f-dae0-4bd4-a90f-8e618aec5db7",
              "total": 4669,
              "values": [
                67,
                95,
                94,
                57,
                56,
                96,
                46,
                66
              ]
            },
            {
              "id": "f022d219-6936-4cd4-a59b-b22cd4accc1d",
              "total": 6405,
              "values": [
                84,
                70,
                23,
                46,
                34,
                90,
                33,
                57
              ]
            },
            {
              "id": "683d9d9e-e3d7-4c59-b754-10e214aa1546",
              "total": 4407,
              "values": [
                58,
                18,
                95,
                38,
                65,
                95,
                85,
                15
              ]
            },
            {
              "id": "b64cc3f5-9e6b-4cfd-bc67-de942d1e1456",
              "total": 1719,
              "values": [
                86,
                19,
                20,
                64,
                87,
                83,
                78,
                87
              ]
            },
            {
              "id": "6df90cc0-6213-4419-8492-6be4373f0c17",
              "total": 5941,
              "values": [
                96,
                68,
                56,
                66,
                85,
                69,
                75,
                91
              ]
            },
            {
              "id": "4e85b8f1-900b-476c-a0bf-67616ec8a9c8",
              "total": 3693,
              "values": [
                13,
                48,
                36,
                92,
                85,
                36,
                88,
                86
              ]
            },
            {
              "id": "89d94ed3-7f43-4eab-82a7-d32f0577d42e",
              "total": 1427,
              "values": [
                62,
                29,
                71,
                59,
                55,
                80,
                27,
                23
              ]
            },
            {
              "id": "e1e19af1-e6c8-4d7f-a370-7484b6c87aa5",
              "total": 4497,
              "values": [
                51,
                91,
                11,
                92,
                75,
                38,
                30,
                16
              ]
            },
            {
              "id": "56c50b2e-7d89-432e-afbf-74d05b61e8b6",
              "total": 7764,
              "values": [
                42,
                30,
                42,
                70,
                58,
                84,
                48,
                82
              ]
            },
            {
              "id": "6d4c0b6d-5a5d-4575-a4e4-a85cd9fd8601",
              "total": 6862,
              "values": [
                71,
                71,
                27,
                94,
                10,
                73,
                89,
                60
              ]
            },
            {
              "id": "6d8dd81e-b09b-44de-a517-3bcda457a758",
              "total": 9864,
              "values": [
                62,
                17,
                49,
                13,
                67,
                42,
                53,
                87
              ]
            },
            {
              "id": "0fc08e54-be8a-47cc-b224-8d641a6a6160",
              "total": 7798,
              "values": [
                12,
                92,
                76,
                11,
                45,
                72,
                42,
                85
              ]
            },
            {
              "id": "dc743b3e-ec73-4312-9b2f-1f389ce8bde8",
              "total": 7653,
              "values": [
                62,
                15,
                94,
                80,
                99,
                66,
                80,
                97
              ]
            },
            {
              "id": "fa008f20-fefe-4b44-8369-5fe1ce388fe2",
              "total": 4111,
              "values": [
                60,
                33,
                79,
                64,
                87,
                21,
                70,
                33
              ]
            },
            {
              "id": "909073b5-4ea3-4616-8b5c-9281d8ff1a2e",
              "total": 9758,
              "values": [
                39,
                80,
                96,
                11,
                80,
                35,
                88,
                31
              ]
            },
            {
              "id": "55090616-8c29-49c4-8f1f-a5be117aa42e",
              "total": 5993,
              "values": [
                16,
                47,
                38,
                72,
                75,
                64,
                15,
                30
              ]
            },
            {
              "id": "fa17be69-a2c4-4e48-8c1a-522a01fc3f1e",
              "total": 2841,
              "values": [
                26,
                23,
                60,
                47,
                94,
                17,
                66,
                78
              ]
            },
            {
              "id": "6347ae95-10ce-4efd-b5e6-3cb7f164e318",
              "total": 7441,
              "values": [
                54,
                50,
                47,
                75,
                32,
                37,
                23,
                85
              ]
            },
            {
              "id": "ef93548b-c7ff-445b-bb9d-abe5471e709f",
              "total": 9677,
              "values": [
                30,
                72,
                18,
                86,
                56,
                17,
                21,
                29
              ]
            },
            {
              "id": "77398259-ed4d-40ee-a3f6-2743e754a49c",
              "total": 1632,
              "values": [
                61,
                51,
                87,
                23,
                36,
                76,
                55,
                52
              ]
            },
            {
              "id": "9e571ff3-416c-4403-94ba-6984cc9eedab",
              "total": 2409,
              "values": [
                58,
                57,
                72,
                45,
                56,
                34,
                75,
                92
              ]
            },
            {
              "id": "dbda2350-a5d1-486a-9997-14ee5d54d94a",
              "total": 7673,
              "values": [
                97,
                63,
                66,
                77,
                80,
                33,
                89,
                77
              ]
            },
            {
              "id": "7d59f04c-7a3b-4a34-8c71-9f2edaeb1116",
              "total": 2440,
              "values": [
                74,
                91,
                49,
                79,
                32,
                70,
                45,
                54
              ]
            },
            {
              "id": "5175b513-7bcb-4e45-9d0b-6d688f0caee6",
              "total": 8107,
              "values": [
                22,
                36,
                37,
                50,
                20,
                44,
                42,
                70
              ]
            },
            {
              "id": "19744471-4e5a-467a-b7eb-bc5f97bd0c8a",
              "total": 2773,
              "values": [
                22,
                58,
                65,
                50,
                34,
                47,
                18,
                93
              ]
            },
            {
              "id": "7156cc6e-2ef3-4dbc-a236-3b2cd9f1efc1",
              "total": 5467,
              "values": [
                75,
                56,
                33,
                24,
                74,
                51,
                66,
                81
              ]
            },
            {
              "id": "c511de36-8777-440a-af2f-921fe4a42ce3",
              "total": 8656,
              "values": [
                76,
                48,
                47,
                66,
                29,
                15,
                83,
                93
              ]
            },
            {
              "id": "aa1530d2-645c-4dc4-8a47-c43570d4e1c1",
              "total": 8392,
              "values": [
                27,
                50,
                25,
                36,
                25,
                11,
                99,
                41
              ]
            },
            {
              "id": "50b79a1f-0770-4ba9-a803-b616c2fe02a0",
              "total": 7359,
              "values": [
                68,
                69,
                27,
                60,
                41,
                62,
                97,
                82
              ]
            },
            {
              "id": "9fc88528-3339-41f2-a514-1cdc9ea5e90f",
              "total": 6571,
              "values": [
                41,
                14,
                43,
                56,
                64,
                71,
                11,
                38
              ]
            },
            {
              "id": "049dde5f-334b-4bef-9eb8-90ae86a2232e",
              "total": 7633,
              "values": [
                65,
                10,
                43,
                73,
                90,
                52,
                43,
                23
              ]
            },
            {
              "id": "e8fb2272-79b8-4a9d-b833-5aa300820060",
              "total": 9855,
              "values": [
                23,
                14,
                45,
                49,
                79,
                31,
                50,
                97
              ]
            },
            {
              "id": "e51b03bd-b79f-4cf3-9036-f065217be298",
              "total": 6503,
              "values": [
                40,
                24,
                64,
                93,
                72,
                94,
                11,
                50
              ]
            },
            {
              "id": "287e2cce-ff0a-43f1-bde5-954142d0dff9",
              "total": 9713,
              "values": [
                87,
                13,
                65,
                56,
                22,
                99,
                88,
                65
              ]
            },
            {
              "id": "f12692c5-ab00-4f08-b42d-6e30b2d8dd93",
              "total": 7130,
              "values": [
                34,
                91,
                60,
                47,
                71,
                48,
                49,
                89
              ]
            },
            {
              "id": "57a50a9b-36d3-4a91-8e83-a99e5cf87903",
              "total": 9175,
              "values": [
                97,
                97,
                55,
                68,
                18,
                50,
                81,
                53
              ]
            },
            {
              "id": "b78ee7d8-d95e-4efd-94fc-9a2c2978005a",
              "total": 6380,
              "values": [
                81,
                39,
                64,
                39,
                48,
                76,
                36,
                69
              ]
            },
            {
              "id": "b4edd3d6-6fc1-4967-a2b3-46b19a3d7df2",
              "total": 5756,
              "values": [
                31,
                97,
                48,
                26,
                20,
                42,
                40,
                15
              ]
            }
          ]
        },
        {
          "id": "5d7753c2f1748b8ad1086847",
          "label": "Qaboos",
          "color": "#43b0b7",
          "data": [
            {
              "id": "9cdf04d4-d765-402c-bc5a-a228b1a70253",
              "total": 7866,
              "values": [
                65,
                27,
                70,
                36,
                91,
                88,
                88,
                45
              ]
            },
            {
              "id": "682a18bb-c466-4008-a870-a5475af657c0",
              "total": 7302,
              "values": [
                47,
                13,
                28,
                81,
                28,
                31,
                26,
                47
              ]
            },
            {
              "id": "d1651efe-ca84-4d70-b6ac-f35378082968",
              "total": 4879,
              "values": [
                17,
                93,
                20,
                10,
                12,
                31,
                34,
                65
              ]
            },
            {
              "id": "e1fbc222-295e-474d-b1a6-476baa19e68c",
              "total": 7982,
              "values": [
                20,
                18,
                88,
                90,
                35,
                93,
                90,
                39
              ]
            },
            {
              "id": "783f3f74-474d-41e7-b028-1abe226e3e64",
              "total": 8249,
              "values": [
                57,
                40,
                90,
                47,
                13,
                28,
                69,
                68
              ]
            },
            {
              "id": "4b861f9f-7129-476c-a917-c12fd78215e7",
              "total": 2088,
              "values": [
                44,
                16,
                69,
                61,
                91,
                76,
                77,
                35
              ]
            },
            {
              "id": "ed71635c-64af-45b1-a571-592c6d1c2371",
              "total": 1069,
              "values": [
                55,
                19,
                16,
                64,
                44,
                71,
                62,
                42
              ]
            },
            {
              "id": "f24a8213-6fcf-439f-a446-8f728377ada6",
              "total": 5671,
              "values": [
                16,
                95,
                58,
                11,
                40,
                13,
                68,
                12
              ]
            },
            {
              "id": "066d5725-ffc7-4fc7-b2fe-b803542dccdc",
              "total": 6585,
              "values": [
                53,
                51,
                33,
                24,
                14,
                83,
                32,
                98
              ]
            },
            {
              "id": "86a52ffb-a5fb-4688-ac4a-6d45cf7fb340",
              "total": 1875,
              "values": [
                81,
                18,
                21,
                60,
                23,
                51,
                21,
                54
              ]
            },
            {
              "id": "87220268-7187-4b78-aea0-594f18d352a8",
              "total": 1754,
              "values": [
                43,
                91,
                33,
                13,
                46,
                27,
                37,
                60
              ]
            },
            {
              "id": "1b9fe21b-c623-4f6b-a203-4686c3518592",
              "total": 1775,
              "values": [
                43,
                38,
                44,
                37,
                41,
                13,
                45,
                33
              ]
            },
            {
              "id": "1e533b4c-e196-458a-888e-acc2a7afc66e",
              "total": 3409,
              "values": [
                14,
                21,
                99,
                87,
                56,
                19,
                74,
                25
              ]
            },
            {
              "id": "e209f84d-c7f5-44e8-ba72-6857b1c23657",
              "total": 6906,
              "values": [
                99,
                57,
                82,
                60,
                39,
                22,
                62,
                34
              ]
            },
            {
              "id": "1bac028c-d86c-4182-b9b3-56716ac991e7",
              "total": 3899,
              "values": [
                35,
                88,
                12,
                27,
                83,
                92,
                34,
                22
              ]
            },
            {
              "id": "ec5917f5-e136-4f6c-9882-3f56bcf9a5ce",
              "total": 2288,
              "values": [
                19,
                44,
                67,
                66,
                82,
                81,
                87,
                54
              ]
            },
            {
              "id": "517df4b0-4b38-48e9-8759-6afe6ab1831d",
              "total": 5268,
              "values": [
                97,
                59,
                97,
                92,
                21,
                70,
                60,
                96
              ]
            },
            {
              "id": "1ae45e96-fcad-47a1-84c8-dbd4ec225da8",
              "total": 4150,
              "values": [
                34,
                54,
                74,
                42,
                32,
                41,
                65,
                22
              ]
            },
            {
              "id": "dfc3820e-f8b7-45fb-a0b8-4a0492806a26",
              "total": 3704,
              "values": [
                22,
                60,
                15,
                52,
                96,
                73,
                13,
                45
              ]
            },
            {
              "id": "2bbcadd7-0955-4755-9493-ff891b244f57",
              "total": 1270,
              "values": [
                66,
                23,
                51,
                12,
                92,
                51,
                66,
                70
              ]
            },
            {
              "id": "20b2d39c-4dee-41bc-be60-be2500739c79",
              "total": 4065,
              "values": [
                76,
                75,
                62,
                85,
                96,
                38,
                73,
                69
              ]
            },
            {
              "id": "475af594-8d4c-4978-a1f6-1eb5c25f0dd6",
              "total": 3034,
              "values": [
                57,
                76,
                18,
                37,
                75,
                98,
                67,
                91
              ]
            },
            {
              "id": "cde73743-39de-4f13-88ef-7661482b44a0",
              "total": 8981,
              "values": [
                48,
                70,
                91,
                21,
                93,
                92,
                73,
                92
              ]
            },
            {
              "id": "f1876c45-c2c4-4773-aa50-3e503729f728",
              "total": 6163,
              "values": [
                65,
                86,
                13,
                52,
                18,
                52,
                91,
                16
              ]
            },
            {
              "id": "65e78a1b-4c77-4edb-b434-49c45b31ebd4",
              "total": 2458,
              "values": [
                57,
                81,
                29,
                62,
                18,
                44,
                78,
                40
              ]
            },
            {
              "id": "dc601f88-8fb4-4194-be2e-5caa4c3ded07",
              "total": 5564,
              "values": [
                46,
                13,
                36,
                39,
                53,
                55,
                78,
                27
              ]
            },
            {
              "id": "44a48049-e1d7-4aa7-9ae3-7a1c7fc69dd5",
              "total": 9681,
              "values": [
                64,
                30,
                70,
                38,
                40,
                43,
                70,
                35
              ]
            },
            {
              "id": "97fd7691-bcb2-44df-b147-83a35bc5485c",
              "total": 6517,
              "values": [
                48,
                29,
                22,
                62,
                81,
                15,
                95,
                63
              ]
            },
            {
              "id": "1f282b47-6647-4490-a9c8-d77c143c0f73",
              "total": 2046,
              "values": [
                57,
                15,
                13,
                98,
                85,
                86,
                86,
                24
              ]
            },
            {
              "id": "c2f4daaf-1fac-4b88-85b9-cef3ce68ae85",
              "total": 2623,
              "values": [
                89,
                29,
                15,
                28,
                97,
                38,
                33,
                41
              ]
            },
            {
              "id": "c1a14e38-0263-4097-abee-69ecc7866828",
              "total": 2038,
              "values": [
                21,
                29,
                43,
                38,
                60,
                84,
                46,
                78
              ]
            },
            {
              "id": "74a63050-c58b-4ff1-a1e6-d7e8a78930e9",
              "total": 9969,
              "values": [
                73,
                10,
                61,
                33,
                83,
                66,
                84,
                68
              ]
            },
            {
              "id": "d910c8a8-7fb3-4b38-b7d6-1bc0960d2101",
              "total": 3269,
              "values": [
                21,
                50,
                28,
                85,
                47,
                80,
                96,
                76
              ]
            },
            {
              "id": "6818298d-f11a-4d4e-bf64-fa6837bbaab2",
              "total": 5946,
              "values": [
                72,
                89,
                98,
                35,
                30,
                60,
                22,
                34
              ]
            },
            {
              "id": "2c706b08-800a-455e-8997-3b07b6f59959",
              "total": 5140,
              "values": [
                20,
                78,
                56,
                58,
                10,
                67,
                99,
                27
              ]
            },
            {
              "id": "3b6567d1-9070-4aae-89c0-4614997cf01c",
              "total": 1175,
              "values": [
                50,
                23,
                13,
                45,
                78,
                86,
                76,
                52
              ]
            },
            {
              "id": "da3ff3c5-0e3c-4488-838a-8b88eba694fd",
              "total": 5552,
              "values": [
                75,
                92,
                39,
                28,
                14,
                78,
                56,
                30
              ]
            },
            {
              "id": "3275a94b-2a95-43ee-9ca9-fbdcef609767",
              "total": 7748,
              "values": [
                81,
                77,
                27,
                64,
                87,
                13,
                15,
                78
              ]
            },
            {
              "id": "d6f7c73a-929f-4cb9-bfbc-082eb462cdc6",
              "total": 2578,
              "values": [
                20,
                62,
                99,
                76,
                86,
                61,
                74,
                40
              ]
            },
            {
              "id": "6c562891-db3b-434e-9519-1902a401b3ff",
              "total": 3894,
              "values": [
                11,
                84,
                74,
                63,
                89,
                82,
                92,
                33
              ]
            },
            {
              "id": "6bec331e-2319-4599-916e-dcb7e093f010",
              "total": 3603,
              "values": [
                61,
                14,
                22,
                64,
                27,
                30,
                68,
                95
              ]
            },
            {
              "id": "9c7e309e-f96c-4360-8256-a026b2f9e713",
              "total": 2297,
              "values": [
                60,
                86,
                54,
                23,
                49,
                90,
                90,
                34
              ]
            },
            {
              "id": "177e6ccf-9aba-44ec-b205-f9f29f232268",
              "total": 8635,
              "values": [
                72,
                77,
                58,
                45,
                46,
                73,
                92,
                99
              ]
            },
            {
              "id": "f3062d7e-d806-403b-a578-cd04040a7067",
              "total": 4929,
              "values": [
                31,
                46,
                28,
                62,
                44,
                94,
                70,
                34
              ]
            },
            {
              "id": "b995dede-e661-4975-ae25-567d270d21a7",
              "total": 4342,
              "values": [
                71,
                14,
                57,
                52,
                86,
                31,
                52,
                24
              ]
            },
            {
              "id": "7b702d41-4cfd-4916-a576-7b5a75837eb5",
              "total": 2482,
              "values": [
                45,
                96,
                87,
                14,
                11,
                68,
                54,
                38
              ]
            },
            {
              "id": "1fd643d8-1bd2-48ae-906b-652a6fd27704",
              "total": 4179,
              "values": [
                26,
                45,
                64,
                66,
                80,
                38,
                13,
                78
              ]
            },
            {
              "id": "21276250-81d5-4b79-bee9-10f5848519a9",
              "total": 3612,
              "values": [
                26,
                31,
                77,
                23,
                42,
                73,
                91,
                75
              ]
            },
            {
              "id": "e2e8e492-9ebb-4e64-998e-22b6e4f6eff9",
              "total": 2103,
              "values": [
                80,
                50,
                81,
                51,
                42,
                63,
                52,
                65
              ]
            },
            {
              "id": "9e9648fc-a425-4f90-84b4-c137155949a3",
              "total": 5533,
              "values": [
                35,
                72,
                39,
                99,
                54,
                47,
                20,
                81
              ]
            }
          ]
        },
        {
          "id": "5d7753c2aa5f5abd6598b9e0",
          "label": "Memora",
          "color": "#ea26c5",
          "data": [
            {
              "id": "a337502f-4739-4bdd-b1ce-94491872d280",
              "total": 4847,
              "values": [
                76,
                91,
                30,
                23,
                18,
                53,
                59,
                46
              ]
            },
            {
              "id": "bee96c1a-578b-4894-9baf-c8851810ab34",
              "total": 6805,
              "values": [
                36,
                94,
                87,
                83,
                50,
                69,
                91,
                49
              ]
            },
            {
              "id": "20b84a15-9154-4c74-9909-3e1daa36d0ef",
              "total": 7243,
              "values": [
                17,
                74,
                40,
                89,
                92,
                86,
                90,
                34
              ]
            },
            {
              "id": "e08385d7-a7e1-43bc-a4b8-b14aa66a658d",
              "total": 3804,
              "values": [
                62,
                32,
                84,
                33,
                93,
                76,
                41,
                96
              ]
            },
            {
              "id": "2a93391c-0878-4c70-b24d-cf84c6a9dd78",
              "total": 1636,
              "values": [
                93,
                52,
                96,
                15,
                15,
                83,
                79,
                19
              ]
            },
            {
              "id": "f2aab691-fd39-49ce-9ad6-cddddc97de65",
              "total": 9184,
              "values": [
                44,
                53,
                17,
                18,
                57,
                21,
                98,
                14
              ]
            },
            {
              "id": "82eff4bc-a497-48cf-bc55-0df50bea61b1",
              "total": 2466,
              "values": [
                15,
                97,
                40,
                43,
                95,
                96,
                89,
                79
              ]
            },
            {
              "id": "465f0bd1-030b-421a-9bff-396cdd8cf523",
              "total": 7270,
              "values": [
                10,
                89,
                27,
                98,
                56,
                36,
                16,
                19
              ]
            },
            {
              "id": "1c38dc9c-31b5-4ced-8dea-88345071337e",
              "total": 4965,
              "values": [
                35,
                10,
                86,
                59,
                76,
                94,
                93,
                75
              ]
            },
            {
              "id": "46647b31-a8e6-4cf2-9488-3e8e388739bb",
              "total": 6426,
              "values": [
                30,
                98,
                41,
                49,
                41,
                86,
                38,
                39
              ]
            },
            {
              "id": "338c4aff-50ca-42ce-9ea2-a576b9e0bd6f",
              "total": 9868,
              "values": [
                63,
                31,
                12,
                92,
                38,
                63,
                57,
                18
              ]
            },
            {
              "id": "75dfdb2f-f843-4ab3-acff-450c952829a0",
              "total": 8734,
              "values": [
                95,
                60,
                83,
                89,
                49,
                13,
                26,
                90
              ]
            },
            {
              "id": "b9d7e1f5-aacc-4200-800c-851eabe58061",
              "total": 9133,
              "values": [
                96,
                18,
                26,
                25,
                14,
                26,
                73,
                86
              ]
            },
            {
              "id": "3b6685b2-3165-465a-b7e9-64f1f6d3065c",
              "total": 7245,
              "values": [
                28,
                40,
                42,
                71,
                70,
                43,
                64,
                69
              ]
            },
            {
              "id": "51d4b1f6-8e8e-4fca-b611-a72f8f4393e1",
              "total": 5139,
              "values": [
                32,
                44,
                49,
                20,
                44,
                79,
                90,
                76
              ]
            },
            {
              "id": "d28e92da-9be0-4b3a-9485-ff116a8b00bc",
              "total": 7891,
              "values": [
                72,
                17,
                92,
                10,
                49,
                59,
                26,
                18
              ]
            },
            {
              "id": "44bef069-72f2-47bc-8763-cc32677f5d4c",
              "total": 8812,
              "values": [
                25,
                83,
                46,
                26,
                14,
                86,
                35,
                75
              ]
            },
            {
              "id": "f8bf184c-9022-4da1-9187-432b11af8364",
              "total": 5326,
              "values": [
                33,
                77,
                98,
                80,
                54,
                15,
                20,
                14
              ]
            },
            {
              "id": "e281ffd1-8777-4bf3-a76b-9e73cb6f9b8a",
              "total": 3694,
              "values": [
                18,
                43,
                14,
                79,
                12,
                95,
                62,
                84
              ]
            },
            {
              "id": "594794af-7b64-4dcf-a8cc-fd66ee2c2826",
              "total": 8389,
              "values": [
                60,
                96,
                46,
                40,
                93,
                87,
                85,
                96
              ]
            },
            {
              "id": "ed04e703-ebbf-4682-99d9-e1677e30dbbb",
              "total": 1273,
              "values": [
                36,
                77,
                98,
                28,
                63,
                80,
                71,
                69
              ]
            },
            {
              "id": "74ee0354-76e9-4199-8629-ace218082b93",
              "total": 9328,
              "values": [
                49,
                59,
                93,
                36,
                40,
                25,
                54,
                28
              ]
            },
            {
              "id": "d5e66625-5527-4f46-8334-546aa887d36b",
              "total": 6523,
              "values": [
                23,
                90,
                53,
                16,
                53,
                98,
                58,
                88
              ]
            },
            {
              "id": "e13260de-c27c-4371-829c-29942cab3001",
              "total": 9208,
              "values": [
                60,
                53,
                70,
                41,
                59,
                50,
                24,
                39
              ]
            },
            {
              "id": "46f63a06-52b7-4f57-9179-28e55eeb604f",
              "total": 9255,
              "values": [
                24,
                80,
                79,
                22,
                53,
                24,
                60,
                10
              ]
            },
            {
              "id": "f27e8412-8c63-4b67-b109-aa1d3f4b4f43",
              "total": 3540,
              "values": [
                40,
                40,
                62,
                31,
                47,
                30,
                38,
                63
              ]
            },
            {
              "id": "afbfd3c7-0b81-4176-a693-f173ef7ccb4f",
              "total": 3077,
              "values": [
                73,
                78,
                13,
                25,
                64,
                69,
                38,
                27
              ]
            },
            {
              "id": "e50c9826-20ed-468c-bf82-7a39308e73e3",
              "total": 6344,
              "values": [
                19,
                44,
                75,
                13,
                40,
                74,
                47,
                13
              ]
            },
            {
              "id": "e70e4534-b95f-4cb1-8e87-46a84b759a27",
              "total": 3424,
              "values": [
                28,
                18,
                99,
                86,
                81,
                51,
                80,
                19
              ]
            },
            {
              "id": "b83b3c45-117e-4eef-8db1-15e5a2030f8d",
              "total": 7034,
              "values": [
                41,
                39,
                25,
                81,
                67,
                49,
                70,
                26
              ]
            },
            {
              "id": "b5b4f850-7827-402a-92a5-224123f0188a",
              "total": 5005,
              "values": [
                31,
                89,
                46,
                41,
                31,
                28,
                70,
                21
              ]
            },
            {
              "id": "473befed-eb6c-47e7-9b7d-178bfe93e7ad",
              "total": 4993,
              "values": [
                95,
                34,
                58,
                89,
                90,
                61,
                21,
                40
              ]
            },
            {
              "id": "85a9fde3-5ff6-4256-85d4-27f623aa3563",
              "total": 4556,
              "values": [
                69,
                65,
                93,
                98,
                40,
                54,
                20,
                12
              ]
            },
            {
              "id": "1638158a-6285-4ce3-b7f3-22e45008d608",
              "total": 9658,
              "values": [
                69,
                77,
                28,
                54,
                13,
                10,
                95,
                88
              ]
            },
            {
              "id": "9c05f2a1-ba50-43c3-99a6-949635d07283",
              "total": 8884,
              "values": [
                88,
                62,
                55,
                38,
                11,
                98,
                54,
                93
              ]
            },
            {
              "id": "7d4df7e5-9d78-47a3-bdea-4d645859f851",
              "total": 3355,
              "values": [
                51,
                11,
                88,
                70,
                55,
                81,
                47,
                15
              ]
            },
            {
              "id": "3de85c23-3ba0-4d11-8986-a3abc761564d",
              "total": 3728,
              "values": [
                38,
                88,
                54,
                76,
                36,
                31,
                11,
                18
              ]
            },
            {
              "id": "5d41730b-10b1-4d7a-8756-25c66e72be57",
              "total": 8182,
              "values": [
                55,
                58,
                31,
                76,
                83,
                46,
                45,
                95
              ]
            },
            {
              "id": "5b80b2fb-d705-45ca-8697-ffc868116ab0",
              "total": 4340,
              "values": [
                69,
                26,
                91,
                74,
                78,
                26,
                82,
                10
              ]
            },
            {
              "id": "9d115e9f-2f5b-4ed0-9c0d-ba76611db13a",
              "total": 5075,
              "values": [
                44,
                12,
                83,
                59,
                10,
                10,
                85,
                84
              ]
            },
            {
              "id": "96a6b685-2e8d-4602-992d-e42ad2682d4b",
              "total": 3389,
              "values": [
                84,
                61,
                70,
                44,
                83,
                92,
                29,
                66
              ]
            },
            {
              "id": "635c9270-733d-4d07-bccb-96932002d1da",
              "total": 7599,
              "values": [
                47,
                24,
                98,
                69,
                51,
                52,
                68,
                87
              ]
            },
            {
              "id": "e16fb4f8-c803-4f9a-9433-65511ad28fd5",
              "total": 4855,
              "values": [
                65,
                37,
                85,
                12,
                40,
                37,
                89,
                39
              ]
            },
            {
              "id": "339a21fc-0ff4-4928-952a-5f4f939d110a",
              "total": 8925,
              "values": [
                56,
                90,
                63,
                43,
                87,
                84,
                22,
                77
              ]
            },
            {
              "id": "4e588c30-cfdb-4335-ba02-9ecd2dcc04c6",
              "total": 8823,
              "values": [
                83,
                67,
                38,
                19,
                36,
                12,
                82,
                30
              ]
            },
            {
              "id": "712f02f9-aeaf-4459-afe1-7dfd39049f8b",
              "total": 4884,
              "values": [
                53,
                55,
                92,
                59,
                88,
                71,
                50,
                43
              ]
            },
            {
              "id": "2f623ef9-3526-4f8a-a378-9987d7ea8bb4",
              "total": 9852,
              "values": [
                67,
                65,
                91,
                15,
                51,
                80,
                48,
                33
              ]
            },
            {
              "id": "1de535cf-d5f6-4c20-a201-522dbe22a8e1",
              "total": 6239,
              "values": [
                64,
                72,
                97,
                83,
                72,
                92,
                35,
                20
              ]
            },
            {
              "id": "acc24afc-5327-44b6-8508-f249eb8ff19b",
              "total": 1440,
              "values": [
                30,
                83,
                79,
                72,
                29,
                89,
                22,
                80
              ]
            },
            {
              "id": "88bf667c-5a06-4076-b790-997d7be8257a",
              "total": 5912,
              "values": [
                39,
                38,
                98,
                54,
                62,
                64,
                88,
                17
              ]
            }
          ]
        },
        {
          "id": "5d7753c20a6d6dab36bc3aaa",
          "label": "Qualitern",
          "color": "#cccccc",
          "data": [
            {
              "id": "401a25cf-a1f3-42f2-a3c7-78c01a5b229d",
              "total": 9153,
              "values": [
                97,
                33,
                64,
                48,
                13,
                43,
                93,
                49
              ]
            },
            {
              "id": "359ec298-7bad-42ba-9b4b-81ceefe938eb",
              "total": 8454,
              "values": [
                96,
                13,
                14,
                22,
                17,
                39,
                92,
                87
              ]
            },
            {
              "id": "0bfce99e-9de0-438b-9e69-8d001ce66d4c",
              "total": 7353,
              "values": [
                42,
                31,
                27,
                15,
                33,
                40,
                57,
                85
              ]
            },
            {
              "id": "b47b6a9a-010d-4ae0-8e32-bf0180a1f211",
              "total": 3028,
              "values": [
                45,
                44,
                86,
                32,
                93,
                65,
                37,
                74
              ]
            },
            {
              "id": "5c6ebef5-2b90-4c73-b174-03250b10cd64",
              "total": 1329,
              "values": [
                90,
                45,
                41,
                98,
                32,
                38,
                52,
                35
              ]
            },
            {
              "id": "f29f47df-3792-4f40-89ae-f8ed1efb1b91",
              "total": 6240,
              "values": [
                38,
                70,
                60,
                58,
                83,
                68,
                54,
                88
              ]
            },
            {
              "id": "7ffb3519-25ee-4caa-87dc-6db026dd8ae9",
              "total": 3176,
              "values": [
                94,
                45,
                58,
                93,
                11,
                19,
                74,
                17
              ]
            },
            {
              "id": "9fd998e2-6c77-4c57-8fec-5b4acd927d66",
              "total": 5394,
              "values": [
                15,
                85,
                93,
                31,
                93,
                27,
                90,
                68
              ]
            },
            {
              "id": "7b45b220-15d0-4bf6-ad47-fa5e2d4b7c23",
              "total": 2433,
              "values": [
                75,
                13,
                59,
                25,
                95,
                87,
                97,
                38
              ]
            },
            {
              "id": "813e942f-837b-4bc3-97fa-175aaffb629c",
              "total": 6005,
              "values": [
                28,
                90,
                85,
                41,
                92,
                34,
                90,
                74
              ]
            },
            {
              "id": "5967789d-e07f-48fd-a777-9e85cf44561b",
              "total": 3196,
              "values": [
                78,
                70,
                70,
                91,
                68,
                14,
                35,
                95
              ]
            },
            {
              "id": "b6e43daf-fd3d-4f8a-9d6b-483fc620b9a8",
              "total": 5593,
              "values": [
                66,
                81,
                78,
                41,
                54,
                87,
                32,
                44
              ]
            },
            {
              "id": "3eb459ca-cf03-4204-bffb-4a04ba4a1b80",
              "total": 9699,
              "values": [
                24,
                98,
                67,
                76,
                28,
                19,
                56,
                34
              ]
            },
            {
              "id": "4c82f61f-f583-4a7c-9609-18bd5ba64097",
              "total": 4742,
              "values": [
                27,
                60,
                62,
                57,
                13,
                61,
                36,
                91
              ]
            },
            {
              "id": "8148ab41-178c-4ee3-8b61-ff7310bce802",
              "total": 9878,
              "values": [
                94,
                24,
                80,
                74,
                64,
                43,
                62,
                16
              ]
            },
            {
              "id": "ef7aa3c9-2171-4c5d-b565-5d111dbcde16",
              "total": 2530,
              "values": [
                95,
                31,
                42,
                79,
                88,
                89,
                34,
                82
              ]
            },
            {
              "id": "ea9d5d56-1e51-4f60-ba5b-7ab9949346ca",
              "total": 1785,
              "values": [
                42,
                64,
                76,
                23,
                63,
                96,
                19,
                99
              ]
            },
            {
              "id": "16bf1f34-ea3d-4643-a5ae-e5fa9ad87cf7",
              "total": 4171,
              "values": [
                34,
                62,
                57,
                24,
                11,
                96,
                97,
                94
              ]
            },
            {
              "id": "529d08b6-b886-4f2d-8698-722e93dc8cda",
              "total": 1290,
              "values": [
                68,
                69,
                28,
                53,
                97,
                60,
                95,
                14
              ]
            },
            {
              "id": "bb1f2e1f-36e9-4520-86e3-b8d9bb644c6d",
              "total": 6643,
              "values": [
                58,
                21,
                87,
                45,
                47,
                39,
                81,
                30
              ]
            },
            {
              "id": "edbfebeb-a259-48f4-8c4a-ae73302fc185",
              "total": 1156,
              "values": [
                12,
                17,
                45,
                38,
                45,
                18,
                44,
                22
              ]
            },
            {
              "id": "9a3fb41a-ae15-4b5e-84f8-03c81ad9e6d3",
              "total": 2694,
              "values": [
                10,
                70,
                86,
                50,
                80,
                47,
                83,
                71
              ]
            },
            {
              "id": "fc664fd0-ef77-432f-85a0-0bef53aca752",
              "total": 9239,
              "values": [
                81,
                34,
                91,
                49,
                36,
                49,
                61,
                68
              ]
            },
            {
              "id": "d37f663d-3d7c-451e-8470-032320e70ea8",
              "total": 7471,
              "values": [
                81,
                88,
                38,
                48,
                24,
                30,
                19,
                62
              ]
            },
            {
              "id": "6f4d2934-b568-4f21-bdd3-e92e6cd954e0",
              "total": 5770,
              "values": [
                18,
                81,
                97,
                96,
                75,
                77,
                26,
                13
              ]
            },
            {
              "id": "2df7daf8-1ada-4c47-a065-9a9234622d05",
              "total": 6145,
              "values": [
                98,
                77,
                25,
                65,
                64,
                92,
                14,
                14
              ]
            },
            {
              "id": "8e7e70cf-e963-4a14-b236-b8da39f90173",
              "total": 5963,
              "values": [
                94,
                57,
                10,
                66,
                51,
                36,
                33,
                15
              ]
            },
            {
              "id": "0d5527a0-f510-45a2-89d8-9102adca7447",
              "total": 1508,
              "values": [
                93,
                93,
                50,
                49,
                12,
                83,
                81,
                47
              ]
            },
            {
              "id": "01a5ef10-2ace-4b56-b1a9-a5ce802e0dd6",
              "total": 7379,
              "values": [
                28,
                22,
                23,
                95,
                21,
                97,
                46,
                55
              ]
            },
            {
              "id": "bf73c923-be1b-44db-8688-c44bbc49650c",
              "total": 7745,
              "values": [
                53,
                50,
                31,
                53,
                42,
                32,
                61,
                25
              ]
            },
            {
              "id": "d0f9b57a-4736-4be2-8edb-5f6e0654cbb8",
              "total": 4130,
              "values": [
                84,
                74,
                51,
                30,
                72,
                13,
                80,
                41
              ]
            },
            {
              "id": "1c706bdc-bb50-4a9b-ae2d-a83b292b34bf",
              "total": 8993,
              "values": [
                49,
                91,
                38,
                77,
                22,
                65,
                67,
                50
              ]
            },
            {
              "id": "9261127e-4987-456d-b044-263dd6df1ea1",
              "total": 4608,
              "values": [
                28,
                49,
                53,
                49,
                62,
                33,
                32,
                25
              ]
            },
            {
              "id": "6a849515-9a46-457f-ad03-6ad201bb00a7",
              "total": 7004,
              "values": [
                67,
                76,
                59,
                71,
                38,
                31,
                26,
                33
              ]
            },
            {
              "id": "f2be3f8a-fb3a-4dd6-b072-ae7f14d7fb59",
              "total": 9880,
              "values": [
                62,
                57,
                39,
                75,
                82,
                95,
                72,
                62
              ]
            },
            {
              "id": "4b794be0-8c81-4948-9a85-e422f0e74243",
              "total": 3604,
              "values": [
                66,
                88,
                99,
                22,
                82,
                63,
                41,
                69
              ]
            },
            {
              "id": "7bee65a8-91f8-41f8-a522-3cae891247e7",
              "total": 5225,
              "values": [
                76,
                80,
                20,
                45,
                84,
                17,
                75,
                59
              ]
            },
            {
              "id": "1a4f032e-d024-4bf2-bb0f-6368cbb2305a",
              "total": 1523,
              "values": [
                79,
                56,
                20,
                90,
                92,
                22,
                62,
                97
              ]
            },
            {
              "id": "88ff4581-c395-454e-bf30-c2201208946e",
              "total": 4789,
              "values": [
                48,
                68,
                12,
                95,
                72,
                62,
                83,
                56
              ]
            },
            {
              "id": "749ecd9f-019d-48b3-be13-dac77723d2b4",
              "total": 8146,
              "values": [
                61,
                56,
                77,
                33,
                46,
                67,
                62,
                50
              ]
            },
            {
              "id": "bf4526b1-8772-4ccc-8853-06e4d53322c6",
              "total": 1704,
              "values": [
                42,
                81,
                52,
                31,
                89,
                76,
                10,
                83
              ]
            },
            {
              "id": "098f2ee6-8a27-49a1-9bf3-9c7fa8854e99",
              "total": 6444,
              "values": [
                35,
                62,
                33,
                81,
                26,
                53,
                53,
                11
              ]
            },
            {
              "id": "904f8658-c3e6-4a8e-9b5d-641f50293b67",
              "total": 8247,
              "values": [
                62,
                33,
                83,
                80,
                31,
                27,
                43,
                85
              ]
            },
            {
              "id": "52ba3a79-f57f-459f-bfa2-c3a0a096f655",
              "total": 6215,
              "values": [
                50,
                51,
                19,
                27,
                64,
                51,
                24,
                13
              ]
            },
            {
              "id": "8cf7310d-a3ce-4e8b-803e-f40cca420473",
              "total": 7842,
              "values": [
                36,
                84,
                17,
                45,
                66,
                92,
                33,
                20
              ]
            },
            {
              "id": "06c75b64-9ba0-4aa8-a757-7d2c40e69d23",
              "total": 6989,
              "values": [
                12,
                45,
                46,
                10,
                84,
                65,
                70,
                80
              ]
            },
            {
              "id": "69d782fe-166d-4ddf-abf3-605d2c3ba96c",
              "total": 1996,
              "values": [
                75,
                81,
                74,
                48,
                73,
                89,
                33,
                33
              ]
            },
            {
              "id": "3d4d3758-3f66-4eef-882b-679cba812cad",
              "total": 4138,
              "values": [
                56,
                91,
                65,
                63,
                14,
                35,
                65,
                51
              ]
            },
            {
              "id": "2e6b0cd3-66cd-4a9e-99ae-279905b3bf70",
              "total": 8762,
              "values": [
                59,
                31,
                15,
                48,
                53,
                98,
                38,
                40
              ]
            },
            {
              "id": "0a30f84e-b135-48f3-bb0a-5656988401d3",
              "total": 8813,
              "values": [
                29,
                27,
                52,
                94,
                63,
                13,
                45,
                54
              ]
            }
          ]
        },
        {
          "id": "5d7753c246fcc4aaa058b2cc",
          "label": "Digial",
          "color": "#FF0000",
          "data": [
            {
              "id": "c883b43a-dd4d-4d89-b18f-8684fb51d4e8",
              "total": 3239,
              "values": [
                79,
                85,
                54,
                33,
                10,
                84,
                98,
                80
              ]
            },
            {
              "id": "b940deff-7af4-4b79-9563-c3bd04a39377",
              "total": 8251,
              "values": [
                97,
                70,
                98,
                84,
                85,
                11,
                34,
                26
              ]
            },
            {
              "id": "cf9d5be6-4f63-410c-801b-2a557ccb26ec",
              "total": 1495,
              "values": [
                38,
                28,
                24,
                13,
                22,
                67,
                89,
                23
              ]
            },
            {
              "id": "ea2740e0-2aa2-4a41-a61c-42d3aef9b837",
              "total": 7315,
              "values": [
                14,
                36,
                77,
                88,
                38,
                56,
                37,
                24
              ]
            },
            {
              "id": "a4aa222b-0a34-45dc-9f00-6a3afcea3ee1",
              "total": 3603,
              "values": [
                59,
                77,
                17,
                82,
                48,
                16,
                52,
                30
              ]
            },
            {
              "id": "bc249055-3812-4daf-9888-00a76dc43adc",
              "total": 7403,
              "values": [
                33,
                75,
                33,
                37,
                36,
                60,
                97,
                42
              ]
            },
            {
              "id": "78abf337-86ef-4c26-97dc-4131eb0c18ce",
              "total": 7664,
              "values": [
                67,
                92,
                68,
                26,
                68,
                89,
                84,
                57
              ]
            },
            {
              "id": "ce0d6d07-d269-4142-9f4a-1ab8be178042",
              "total": 5941,
              "values": [
                40,
                82,
                15,
                27,
                95,
                11,
                43,
                77
              ]
            },
            {
              "id": "a0885a19-047e-46d1-8d29-bd353bc8333d",
              "total": 3684,
              "values": [
                86,
                69,
                81,
                74,
                36,
                58,
                39,
                52
              ]
            },
            {
              "id": "64ba1c8f-513c-46cc-a0ee-f16b050a40ad",
              "total": 2161,
              "values": [
                96,
                42,
                34,
                46,
                60,
                30,
                41,
                81
              ]
            },
            {
              "id": "55e040e9-fb8d-4f80-a705-c98172eaf201",
              "total": 3648,
              "values": [
                73,
                18,
                71,
                18,
                79,
                18,
                61,
                86
              ]
            },
            {
              "id": "55b472ac-b4ac-49ee-bf65-8cfad698282c",
              "total": 9415,
              "values": [
                68,
                41,
                94,
                51,
                49,
                83,
                97,
                21
              ]
            },
            {
              "id": "9eff441b-e4b3-4d76-a298-777f2230aebe",
              "total": 4957,
              "values": [
                31,
                60,
                87,
                95,
                23,
                25,
                11,
                24
              ]
            },
            {
              "id": "c2751b50-c3f0-4062-b3c2-f8f2ac308705",
              "total": 5212,
              "values": [
                23,
                65,
                90,
                44,
                82,
                41,
                93,
                16
              ]
            },
            {
              "id": "3e6fe04b-634f-4acb-901d-e64964a785db",
              "total": 1638,
              "values": [
                81,
                74,
                90,
                53,
                73,
                51,
                59,
                91
              ]
            },
            {
              "id": "d9cc3ea7-c805-4c95-bdc0-3f407c90cdf2",
              "total": 6196,
              "values": [
                42,
                48,
                61,
                89,
                27,
                87,
                70,
                32
              ]
            },
            {
              "id": "d395577f-5aca-48ea-88c3-391529668cf2",
              "total": 3262,
              "values": [
                28,
                76,
                89,
                85,
                95,
                52,
                25,
                87
              ]
            },
            {
              "id": "054d5e1a-de12-404c-9e80-868c3dd0f92a",
              "total": 8927,
              "values": [
                65,
                79,
                53,
                11,
                69,
                10,
                44,
                67
              ]
            },
            {
              "id": "aae7ed54-fb16-4bf8-b3f6-1d89672e7aef",
              "total": 6811,
              "values": [
                99,
                38,
                49,
                52,
                20,
                45,
                70,
                52
              ]
            },
            {
              "id": "ea77f904-5f1d-4059-a54c-1182b6543b11",
              "total": 7037,
              "values": [
                60,
                87,
                59,
                58,
                13,
                44,
                65,
                91
              ]
            },
            {
              "id": "db1e1188-1a26-4e1a-90f2-69c694f988c4",
              "total": 4388,
              "values": [
                45,
                49,
                18,
                85,
                72,
                62,
                37,
                51
              ]
            },
            {
              "id": "48d709b5-74ad-489d-b4b8-e85770fea053",
              "total": 7888,
              "values": [
                63,
                40,
                38,
                88,
                86,
                46,
                44,
                25
              ]
            },
            {
              "id": "787e9ecf-b361-4991-a332-ee38e3f3575e",
              "total": 7681,
              "values": [
                91,
                54,
                82,
                18,
                40,
                46,
                83,
                50
              ]
            },
            {
              "id": "4d9c5a69-306f-4f43-a3fc-6b723dd01301",
              "total": 8529,
              "values": [
                78,
                40,
                73,
                37,
                45,
                20,
                64,
                88
              ]
            },
            {
              "id": "8127a9ad-436b-4b6c-b0ab-e7e8ace80e56",
              "total": 3070,
              "values": [
                18,
                69,
                87,
                59,
                58,
                14,
                78,
                51
              ]
            },
            {
              "id": "3d11c4fd-b28e-4c60-9a34-7415b64a5d99",
              "total": 7887,
              "values": [
                24,
                75,
                93,
                95,
                34,
                91,
                22,
                63
              ]
            },
            {
              "id": "97fbab6b-32c9-40f4-8bec-3ce851cc919b",
              "total": 9016,
              "values": [
                91,
                53,
                69,
                31,
                20,
                28,
                19,
                61
              ]
            },
            {
              "id": "8494f195-849d-4c6a-9fa1-71782a9b3004",
              "total": 6083,
              "values": [
                58,
                89,
                13,
                77,
                87,
                40,
                60,
                23
              ]
            },
            {
              "id": "423a5848-ed98-4a73-8fc6-e1590d8dfa57",
              "total": 4372,
              "values": [
                41,
                52,
                72,
                89,
                20,
                74,
                63,
                10
              ]
            },
            {
              "id": "cbf381fc-652e-4faf-8d1d-678131e1dc68",
              "total": 9137,
              "values": [
                39,
                26,
                74,
                48,
                89,
                32,
                89,
                96
              ]
            },
            {
              "id": "f020eda5-2855-4a64-b6da-7f1e3c29df05",
              "total": 4725,
              "values": [
                78,
                73,
                68,
                38,
                54,
                22,
                73,
                35
              ]
            },
            {
              "id": "8a6a0617-cc61-4646-bc94-a0c127645555",
              "total": 3228,
              "values": [
                77,
                25,
                59,
                88,
                76,
                35,
                70,
                83
              ]
            },
            {
              "id": "9605f682-af12-467d-9fb5-51d927302450",
              "total": 9729,
              "values": [
                69,
                71,
                56,
                24,
                54,
                49,
                49,
                48
              ]
            },
            {
              "id": "45b18f6c-9202-400d-a90b-87b7179b72de",
              "total": 5702,
              "values": [
                33,
                36,
                82,
                10,
                46,
                72,
                20,
                75
              ]
            },
            {
              "id": "73d7102b-cfe1-4d17-8290-b6ebaca6f4dc",
              "total": 6596,
              "values": [
                39,
                17,
                75,
                70,
                76,
                33,
                73,
                84
              ]
            },
            {
              "id": "58640279-25d1-4a5a-84e3-69a69b801f47",
              "total": 1787,
              "values": [
                64,
                89,
                81,
                31,
                84,
                34,
                79,
                21
              ]
            },
            {
              "id": "160f38db-1c30-458a-849b-7f0990540893",
              "total": 5195,
              "values": [
                67,
                76,
                36,
                65,
                17,
                30,
                60,
                58
              ]
            },
            {
              "id": "85be74de-9bbe-4489-9a31-30990e1108f6",
              "total": 1096,
              "values": [
                92,
                64,
                16,
                36,
                90,
                52,
                55,
                34
              ]
            },
            {
              "id": "58ee02e2-89e8-4aad-9592-da80026e6569",
              "total": 7393,
              "values": [
                43,
                38,
                94,
                16,
                81,
                93,
                42,
                37
              ]
            },
            {
              "id": "6832f544-4e34-4419-8e99-4279a9bb06ea",
              "total": 9251,
              "values": [
                20,
                23,
                24,
                57,
                85,
                87,
                54,
                87
              ]
            },
            {
              "id": "779053c8-96e5-4d34-ac95-e2b29327d6be",
              "total": 3431,
              "values": [
                86,
                77,
                32,
                34,
                57,
                64,
                92,
                10
              ]
            },
            {
              "id": "a0105591-116b-47bc-a77d-2ebf24568c17",
              "total": 5857,
              "values": [
                70,
                30,
                51,
                43,
                70,
                98,
                27,
                79
              ]
            },
            {
              "id": "773de9ca-373e-4641-8dcc-3ba2d9318cee",
              "total": 5782,
              "values": [
                69,
                48,
                87,
                96,
                51,
                51,
                31,
                53
              ]
            },
            {
              "id": "0baa0c21-9507-4d95-b7da-e8bb06a4d561",
              "total": 3671,
              "values": [
                62,
                48,
                24,
                74,
                71,
                54,
                11,
                38
              ]
            },
            {
              "id": "81d72766-2303-4f2b-b384-988866fa343d",
              "total": 5648,
              "values": [
                80,
                24,
                58,
                91,
                91,
                84,
                67,
                40
              ]
            },
            {
              "id": "b3fad5b1-4e2a-4c4b-9a81-823359e8a4f6",
              "total": 2867,
              "values": [
                16,
                36,
                50,
                61,
                33,
                26,
                43,
                95
              ]
            },
            {
              "id": "800b578b-9300-4742-908e-2c7ff0c9fe49",
              "total": 8263,
              "values": [
                23,
                81,
                94,
                16,
                62,
                18,
                87,
                86
              ]
            },
            {
              "id": "2eda1a41-19bd-4800-9f4f-45ab38e1acb0",
              "total": 2415,
              "values": [
                80,
                42,
                39,
                84,
                10,
                57,
                29,
                32
              ]
            },
            {
              "id": "126b288d-d735-49d7-8de8-2ce6a9a9fd82",
              "total": 6003,
              "values": [
                47,
                25,
                78,
                32,
                55,
                40,
                55,
                26
              ]
            },
            {
              "id": "54079d84-3afc-469f-adf7-a5c73dc796b5",
              "total": 2844,
              "values": [
                59,
                83,
                81,
                92,
                38,
                46,
                78,
                46
              ]
            }
          ]
        },
        {
          "id": "5d7753c2d5fc83d04e8381c1",
          "label": "Exoswitch",
          "color": "#0cd36d",
          "data": [
            {
              "id": "c34b3df9-edf0-4c7a-b5df-d527abf4fb79",
              "total": 4118,
              "values": [
                86,
                60,
                24,
                29,
                45,
                91,
                29,
                45
              ]
            },
            {
              "id": "b3086806-3ef7-4126-af9d-a07e05e28d47",
              "total": 2186,
              "values": [
                22,
                80,
                47,
                27,
                56,
                46,
                88,
                11
              ]
            },
            {
              "id": "d566755c-56d0-464c-8346-b4d8b38141e2",
              "total": 4131,
              "values": [
                10,
                92,
                17,
                46,
                64,
                50,
                87,
                90
              ]
            },
            {
              "id": "5f0bc695-f2be-416b-88d4-b8128c636b12",
              "total": 4067,
              "values": [
                52,
                16,
                50,
                35,
                16,
                15,
                96,
                17
              ]
            },
            {
              "id": "181dc36d-da20-4b7e-868a-f78486379cee",
              "total": 5882,
              "values": [
                32,
                26,
                41,
                20,
                80,
                53,
                71,
                64
              ]
            },
            {
              "id": "fd1a249d-1e50-4d6e-b525-d49cf23e3064",
              "total": 6202,
              "values": [
                82,
                82,
                14,
                64,
                91,
                48,
                48,
                17
              ]
            },
            {
              "id": "8c3349f1-f1af-4abc-befb-844232e0d6c9",
              "total": 1133,
              "values": [
                50,
                18,
                95,
                32,
                29,
                34,
                86,
                52
              ]
            },
            {
              "id": "70abea1b-8fec-4141-98e2-d03e706d8a67",
              "total": 1584,
              "values": [
                31,
                87,
                78,
                22,
                49,
                61,
                41,
                74
              ]
            },
            {
              "id": "dd7930f2-1d66-4c9e-b7a6-6ba5e33eac5c",
              "total": 8005,
              "values": [
                87,
                57,
                79,
                86,
                37,
                68,
                17,
                82
              ]
            },
            {
              "id": "dc0b8771-2714-4106-9e97-a42da88c54ba",
              "total": 9465,
              "values": [
                62,
                91,
                93,
                64,
                37,
                45,
                36,
                15
              ]
            },
            {
              "id": "2ab53ffc-d1dc-4330-a675-80a25688fa0e",
              "total": 4931,
              "values": [
                21,
                54,
                47,
                89,
                67,
                75,
                88,
                95
              ]
            },
            {
              "id": "068dc1f3-c6d8-4ea2-95bb-0c7e4375ce7c",
              "total": 4739,
              "values": [
                21,
                46,
                96,
                52,
                94,
                66,
                82,
                42
              ]
            },
            {
              "id": "3d9fe9aa-b4b7-430f-9926-9b31049155ca",
              "total": 1330,
              "values": [
                46,
                39,
                61,
                17,
                84,
                94,
                40,
                11
              ]
            },
            {
              "id": "209b68d1-01c0-435d-9f11-811c4ef5df94",
              "total": 8766,
              "values": [
                16,
                12,
                67,
                97,
                51,
                91,
                73,
                23
              ]
            },
            {
              "id": "c0cba3ee-6095-4dc4-9396-327b8f2fa758",
              "total": 2354,
              "values": [
                91,
                54,
                58,
                79,
                75,
                75,
                17,
                24
              ]
            },
            {
              "id": "d33dcac5-1fac-4834-b05a-1d22bc1998ff",
              "total": 3025,
              "values": [
                42,
                98,
                34,
                21,
                75,
                95,
                86,
                94
              ]
            },
            {
              "id": "de8c91df-ca0a-4b92-ae7e-fc7f8bd1c279",
              "total": 9943,
              "values": [
                59,
                87,
                44,
                82,
                34,
                72,
                33,
                42
              ]
            },
            {
              "id": "c21a20a7-32d5-4b77-97db-3e2fb5c1bc35",
              "total": 5925,
              "values": [
                80,
                72,
                47,
                58,
                74,
                74,
                74,
                55
              ]
            },
            {
              "id": "fc176e3f-76b6-42fe-b8d2-72a8d2a6e76d",
              "total": 8247,
              "values": [
                70,
                99,
                39,
                69,
                68,
                24,
                62,
                43
              ]
            },
            {
              "id": "e9b16cdf-d7ef-424e-9f67-f392a18ede26",
              "total": 3949,
              "values": [
                19,
                54,
                31,
                58,
                16,
                35,
                29,
                75
              ]
            },
            {
              "id": "28b67853-0a85-4e8b-a4e5-ffc09e058831",
              "total": 7298,
              "values": [
                46,
                91,
                21,
                13,
                25,
                87,
                90,
                86
              ]
            },
            {
              "id": "794b1485-356d-49cb-9209-3606cc7a3a30",
              "total": 7703,
              "values": [
                13,
                34,
                20,
                67,
                68,
                69,
                28,
                45
              ]
            },
            {
              "id": "12a23a36-e31c-4194-b2b5-b335ffbac8d0",
              "total": 9795,
              "values": [
                19,
                44,
                53,
                10,
                79,
                14,
                64,
                24
              ]
            },
            {
              "id": "d8e9dcab-bd9c-4cc6-b53e-8f343b24a1f0",
              "total": 1409,
              "values": [
                50,
                71,
                40,
                83,
                97,
                94,
                80,
                73
              ]
            },
            {
              "id": "e3a788e8-77b8-4c4e-bf47-0252fc3f9c04",
              "total": 3689,
              "values": [
                93,
                93,
                75,
                74,
                68,
                95,
                73,
                95
              ]
            },
            {
              "id": "d72786c1-4f65-44f5-a442-8357d4c32e4b",
              "total": 6994,
              "values": [
                99,
                94,
                27,
                83,
                28,
                19,
                29,
                24
              ]
            },
            {
              "id": "dbf90f73-95ad-4edc-89e6-1fa7902c9f15",
              "total": 1577,
              "values": [
                18,
                36,
                60,
                86,
                30,
                74,
                72,
                66
              ]
            },
            {
              "id": "164a9bad-e0b4-4d85-b2ba-3cdaa627e022",
              "total": 8539,
              "values": [
                84,
                16,
                64,
                82,
                70,
                63,
                52,
                50
              ]
            },
            {
              "id": "79dea314-1922-4f9d-b734-293e32feeb39",
              "total": 1372,
              "values": [
                64,
                48,
                53,
                52,
                26,
                62,
                92,
                34
              ]
            },
            {
              "id": "14e6ca8e-a445-4e46-ae1c-bf58f7af8083",
              "total": 6308,
              "values": [
                44,
                14,
                20,
                59,
                39,
                96,
                71,
                88
              ]
            },
            {
              "id": "d512cf98-777d-436f-a290-74158fc1ccef",
              "total": 7578,
              "values": [
                77,
                31,
                91,
                89,
                23,
                43,
                48,
                76
              ]
            },
            {
              "id": "84ba5f07-ec08-44c2-9e2b-f6ba0f877a6e",
              "total": 3065,
              "values": [
                91,
                81,
                79,
                14,
                79,
                91,
                45,
                29
              ]
            },
            {
              "id": "ddbea6cd-9a31-4882-91d5-c475181453bf",
              "total": 7302,
              "values": [
                99,
                18,
                78,
                89,
                25,
                33,
                44,
                89
              ]
            },
            {
              "id": "c0af1a7a-6a76-46d3-bbfb-fa0ca7ed9f31",
              "total": 2513,
              "values": [
                23,
                21,
                80,
                49,
                22,
                45,
                76,
                49
              ]
            },
            {
              "id": "e534d53f-6c69-4804-b1f3-5570a3ac4d79",
              "total": 5175,
              "values": [
                81,
                53,
                85,
                13,
                13,
                69,
                91,
                39
              ]
            },
            {
              "id": "4c979e88-73fe-440f-9964-b8102d453d31",
              "total": 2844,
              "values": [
                21,
                91,
                47,
                34,
                94,
                47,
                92,
                83
              ]
            },
            {
              "id": "1ecf0354-0b55-4dbe-a5e6-c901158923f0",
              "total": 5635,
              "values": [
                55,
                49,
                91,
                72,
                86,
                98,
                69,
                83
              ]
            },
            {
              "id": "d92a55d3-3815-437d-b813-5f0e68efe091",
              "total": 4204,
              "values": [
                28,
                79,
                36,
                99,
                16,
                57,
                52,
                29
              ]
            },
            {
              "id": "d7c82e98-ce85-442f-8c8b-fc35cd1d84a8",
              "total": 8891,
              "values": [
                21,
                87,
                33,
                37,
                26,
                55,
                59,
                48
              ]
            },
            {
              "id": "b319b171-21a4-4543-a7da-f6b125d541fa",
              "total": 9805,
              "values": [
                72,
                86,
                28,
                64,
                33,
                16,
                14,
                40
              ]
            },
            {
              "id": "874555ea-3a49-4ac1-b4bd-9f4ecf48e78c",
              "total": 8529,
              "values": [
                41,
                33,
                45,
                36,
                68,
                22,
                56,
                74
              ]
            },
            {
              "id": "26d327f3-2153-4aad-8d6b-ace3f6d0200e",
              "total": 3998,
              "values": [
                99,
                13,
                32,
                34,
                21,
                92,
                40,
                64
              ]
            },
            {
              "id": "16844ab4-4f4a-4e89-9562-402c0b74caac",
              "total": 5195,
              "values": [
                72,
                24,
                41,
                82,
                46,
                65,
                96,
                41
              ]
            },
            {
              "id": "d604a451-684d-4d32-a5c1-398881ea9bf5",
              "total": 3974,
              "values": [
                30,
                87,
                50,
                38,
                78,
                48,
                31,
                68
              ]
            },
            {
              "id": "8d9209b7-d54b-44d6-8b03-1ee3eeffc249",
              "total": 9127,
              "values": [
                14,
                97,
                33,
                63,
                79,
                26,
                14,
                74
              ]
            },
            {
              "id": "1758d08e-a7fb-4540-83bc-17ba85ed4a74",
              "total": 3474,
              "values": [
                95,
                56,
                45,
                16,
                20,
                53,
                24,
                91
              ]
            },
            {
              "id": "a1ad6a84-5ed9-4a7f-876f-3b5ec11bb6ba",
              "total": 4452,
              "values": [
                23,
                81,
                95,
                94,
                82,
                91,
                84,
                71
              ]
            },
            {
              "id": "aec8da57-0734-422f-93e8-96476b48a4e6",
              "total": 4641,
              "values": [
                58,
                50,
                16,
                49,
                45,
                48,
                17,
                33
              ]
            },
            {
              "id": "0a088f61-deed-496d-a1a2-aa1054f97c31",
              "total": 8648,
              "values": [
                37,
                99,
                51,
                93,
                69,
                19,
                40,
                80
              ]
            },
            {
              "id": "b2f11ced-6749-4dd0-a54f-e952d510bb4f",
              "total": 5748,
              "values": [
                52,
                75,
                18,
                66,
                39,
                17,
                75,
                94
              ]
            }
          ]
        },
        {
          "id": "5d7753c2f202ca5be87f141b",
          "label": "Handshake",
          "color": "#c5a4fb",
          "data": [
            {
              "id": "6d8e7718-4cb3-4ea2-bf56-5750457355a6",
              "total": 6724,
              "values": [
                50,
                37,
                59,
                23,
                39,
                67,
                78,
                15
              ]
            },
            {
              "id": "a86abde5-1066-4eec-b258-30588a17a0be",
              "total": 1466,
              "values": [
                30,
                70,
                87,
                65,
                75,
                76,
                83,
                79
              ]
            },
            {
              "id": "3306c98a-1c1b-4fb6-a55e-3601e50f7112",
              "total": 3684,
              "values": [
                85,
                45,
                38,
                90,
                45,
                47,
                85,
                77
              ]
            },
            {
              "id": "85db1519-0378-4daa-b115-6945c88ebc78",
              "total": 6355,
              "values": [
                93,
                83,
                81,
                97,
                99,
                59,
                73,
                61
              ]
            },
            {
              "id": "3266092b-97f6-42fc-9fc1-49c224edf7d4",
              "total": 1160,
              "values": [
                48,
                35,
                86,
                98,
                54,
                12,
                12,
                19
              ]
            },
            {
              "id": "7d3b72da-c9a1-4088-a5c3-fe6689926a1a",
              "total": 9355,
              "values": [
                62,
                69,
                94,
                11,
                73,
                96,
                97,
                69
              ]
            },
            {
              "id": "7febb1da-dcd8-439a-a67c-997068c3bcd9",
              "total": 4768,
              "values": [
                71,
                68,
                99,
                96,
                61,
                19,
                96,
                92
              ]
            },
            {
              "id": "e58ab39f-77a1-495b-92f7-5f7c25a2e50c",
              "total": 5165,
              "values": [
                74,
                77,
                46,
                87,
                52,
                88,
                30,
                60
              ]
            },
            {
              "id": "5f218560-a7d1-466f-b328-92f689d0dbee",
              "total": 3429,
              "values": [
                81,
                44,
                31,
                41,
                49,
                72,
                72,
                35
              ]
            },
            {
              "id": "a194b929-b00d-4516-9894-2ebc99c1fff3",
              "total": 1372,
              "values": [
                59,
                76,
                38,
                28,
                91,
                93,
                73,
                42
              ]
            },
            {
              "id": "b8c996e8-d9ae-4821-9283-09ccc9fa48d6",
              "total": 8408,
              "values": [
                71,
                89,
                80,
                78,
                42,
                80,
                10,
                91
              ]
            },
            {
              "id": "ce5881c1-9595-4746-81f5-ff980e3f58c1",
              "total": 3053,
              "values": [
                24,
                74,
                97,
                78,
                27,
                44,
                90,
                74
              ]
            },
            {
              "id": "f80d0440-f3d6-4c16-9212-ae0d5fc3f0dc",
              "total": 2339,
              "values": [
                84,
                10,
                81,
                51,
                18,
                75,
                62,
                71
              ]
            },
            {
              "id": "6f6d8a2c-b554-4168-bed1-c493278767c4",
              "total": 5173,
              "values": [
                11,
                81,
                81,
                43,
                46,
                76,
                78,
                72
              ]
            },
            {
              "id": "1d5fea3e-7ef1-4e3a-8c99-b069c678f565",
              "total": 4055,
              "values": [
                69,
                89,
                73,
                14,
                97,
                71,
                44,
                82
              ]
            },
            {
              "id": "62040149-a4fa-4cf0-9101-e7cb45f4ad75",
              "total": 9535,
              "values": [
                18,
                44,
                32,
                36,
                76,
                25,
                26,
                98
              ]
            },
            {
              "id": "f3999353-26f4-463f-8605-22a225699b6a",
              "total": 9041,
              "values": [
                99,
                29,
                28,
                17,
                54,
                39,
                46,
                33
              ]
            },
            {
              "id": "8a0b47b5-c2cb-47e7-bdcf-1355df31f865",
              "total": 2591,
              "values": [
                11,
                90,
                66,
                29,
                68,
                90,
                75,
                12
              ]
            },
            {
              "id": "99b92141-f0b2-4dd4-8f86-627245d48069",
              "total": 7752,
              "values": [
                13,
                15,
                63,
                33,
                63,
                27,
                82,
                39
              ]
            },
            {
              "id": "b74cdc92-c0d9-4e9e-80b8-31694f8481bc",
              "total": 4546,
              "values": [
                58,
                29,
                15,
                23,
                28,
                68,
                72,
                53
              ]
            },
            {
              "id": "67e006d3-d4f8-4b77-95f3-a639f530ba13",
              "total": 8757,
              "values": [
                73,
                97,
                64,
                39,
                77,
                67,
                19,
                91
              ]
            },
            {
              "id": "05bb366f-899a-48fe-9d5a-43eb599c048e",
              "total": 9380,
              "values": [
                89,
                71,
                81,
                52,
                75,
                51,
                81,
                11
              ]
            },
            {
              "id": "f1f59caa-6e6e-417f-a1ef-a0e0773e7c7e",
              "total": 3800,
              "values": [
                53,
                16,
                80,
                11,
                41,
                47,
                33,
                60
              ]
            },
            {
              "id": "870e6956-cd00-4244-890f-8f0139e348f4",
              "total": 4060,
              "values": [
                15,
                49,
                34,
                57,
                30,
                55,
                19,
                42
              ]
            },
            {
              "id": "55ff9ffd-dc59-409e-81df-b1ea93ea2117",
              "total": 5438,
              "values": [
                93,
                15,
                44,
                62,
                79,
                49,
                17,
                96
              ]
            },
            {
              "id": "46376f7c-4e07-4c30-8180-1387706ac343",
              "total": 2875,
              "values": [
                12,
                53,
                87,
                94,
                88,
                36,
                41,
                43
              ]
            },
            {
              "id": "fe11ff88-0610-4fa3-ac5f-9c977b6abe04",
              "total": 2766,
              "values": [
                97,
                14,
                12,
                46,
                28,
                12,
                27,
                59
              ]
            },
            {
              "id": "710eb937-77d2-4007-8817-62fca155b136",
              "total": 8234,
              "values": [
                50,
                40,
                30,
                25,
                43,
                77,
                46,
                45
              ]
            },
            {
              "id": "f4106d65-c139-44a9-8d73-02e8123151b0",
              "total": 8458,
              "values": [
                92,
                86,
                67,
                46,
                95,
                15,
                30,
                53
              ]
            },
            {
              "id": "e990ad27-4a7f-4b6e-9d62-fb7bc9071a5e",
              "total": 3458,
              "values": [
                21,
                39,
                77,
                29,
                51,
                28,
                40,
                55
              ]
            },
            {
              "id": "a2962d89-6d7a-44fb-b5a5-e20c82fca097",
              "total": 3581,
              "values": [
                62,
                53,
                66,
                18,
                84,
                25,
                80,
                59
              ]
            },
            {
              "id": "87464b13-b06c-4ac0-bc81-8803a254a396",
              "total": 2078,
              "values": [
                38,
                52,
                15,
                86,
                56,
                19,
                32,
                77
              ]
            },
            {
              "id": "e7d9f2c9-ed5e-4ec2-b38e-da103c7787d4",
              "total": 8426,
              "values": [
                32,
                98,
                69,
                49,
                27,
                83,
                54,
                23
              ]
            },
            {
              "id": "85d6c25f-d2b4-4b85-bcc8-01ab3d2fa0b2",
              "total": 3782,
              "values": [
                56,
                60,
                77,
                22,
                22,
                11,
                85,
                39
              ]
            },
            {
              "id": "2d35efe0-61be-4236-82b6-9bbd996da47a",
              "total": 7126,
              "values": [
                58,
                44,
                95,
                59,
                62,
                43,
                25,
                72
              ]
            },
            {
              "id": "5b8c1ea4-e7ed-49bf-b103-5f4d7c11f9d7",
              "total": 7689,
              "values": [
                38,
                65,
                78,
                62,
                30,
                57,
                64,
                60
              ]
            },
            {
              "id": "0e4998fb-1df3-4fdb-a56d-4dede05906cf",
              "total": 3498,
              "values": [
                54,
                23,
                35,
                39,
                25,
                54,
                18,
                99
              ]
            },
            {
              "id": "d82629b6-05a4-43de-9e62-502012348926",
              "total": 6068,
              "values": [
                66,
                59,
                68,
                55,
                20,
                44,
                84,
                37
              ]
            },
            {
              "id": "adda00a8-fd52-490e-b901-3cecf0e77b6f",
              "total": 8830,
              "values": [
                20,
                72,
                40,
                33,
                16,
                80,
                85,
                30
              ]
            },
            {
              "id": "516b47ff-084b-4ed4-9d98-736ddc381baa",
              "total": 2546,
              "values": [
                34,
                14,
                19,
                16,
                14,
                77,
                65,
                25
              ]
            },
            {
              "id": "81e37831-b2bc-4a83-87e1-d8273d2062c7",
              "total": 5740,
              "values": [
                65,
                13,
                13,
                19,
                95,
                66,
                36,
                23
              ]
            },
            {
              "id": "64085e8a-6dea-41a2-88ca-d84ed5d19fbd",
              "total": 6988,
              "values": [
                17,
                14,
                86,
                31,
                34,
                23,
                92,
                40
              ]
            },
            {
              "id": "c480c579-8b98-472a-9b7c-d8d2565cd4ff",
              "total": 4581,
              "values": [
                43,
                34,
                42,
                66,
                28,
                95,
                99,
                66
              ]
            },
            {
              "id": "13000bb7-5d1a-42da-b57a-bb3692545e52",
              "total": 4862,
              "values": [
                38,
                52,
                55,
                18,
                36,
                62,
                85,
                61
              ]
            },
            {
              "id": "830a2648-45bb-4f37-8f4c-f95175ffefb7",
              "total": 1069,
              "values": [
                47,
                84,
                25,
                89,
                50,
                11,
                11,
                10
              ]
            },
            {
              "id": "4ca21d43-cdc8-46ae-8983-6b34544f9237",
              "total": 4782,
              "values": [
                50,
                38,
                85,
                75,
                90,
                14,
                58,
                23
              ]
            },
            {
              "id": "174140d3-eb5c-4557-b16e-118f01ec6c15",
              "total": 7046,
              "values": [
                66,
                25,
                15,
                11,
                20,
                11,
                94,
                21
              ]
            },
            {
              "id": "234b727a-3b14-4b6e-a959-0eb5ca8d36ee",
              "total": 6306,
              "values": [
                95,
                39,
                61,
                75,
                82,
                37,
                38,
                21
              ]
            },
            {
              "id": "b7a45485-24c5-4025-9c6d-9677796f5c47",
              "total": 2281,
              "values": [
                45,
                38,
                15,
                79,
                52,
                76,
                88,
                39
              ]
            },
            {
              "id": "e5ef0566-2a2b-4565-bee8-36be7047c907",
              "total": 5505,
              "values": [
                67,
                73,
                89,
                59,
                79,
                85,
                28,
                22
              ]
            }
          ]
        },
        {
          "id": "5d7753c223485df730f5f688",
          "label": "Chorizon",
          "color": "#0000FF",
          "data": [
            {
              "id": "fec432f7-636c-4937-a302-b5ad1b80e507",
              "total": 8105,
              "values": [
                49,
                68,
                86,
                39,
                68,
                78,
                68,
                95
              ]
            },
            {
              "id": "cf42b241-8d9e-4b95-a5e0-b2bb708331eb",
              "total": 9258,
              "values": [
                61,
                49,
                66,
                78,
                55,
                71,
                61,
                95
              ]
            },
            {
              "id": "717335a2-9fe3-430c-a9e0-e80ecc496dac",
              "total": 1584,
              "values": [
                75,
                50,
                56,
                54,
                79,
                14,
                19,
                63
              ]
            },
            {
              "id": "cc4d346a-0ea2-4d08-b2b0-2dc3dff195b0",
              "total": 3014,
              "values": [
                93,
                68,
                75,
                26,
                89,
                46,
                71,
                61
              ]
            },
            {
              "id": "00df1af2-677c-4d26-92e2-a6668a9eb8b6",
              "total": 3303,
              "values": [
                69,
                62,
                32,
                77,
                94,
                70,
                44,
                11
              ]
            },
            {
              "id": "ceaa7315-b697-44fd-ab41-bbb59ad60d3d",
              "total": 5878,
              "values": [
                91,
                76,
                82,
                83,
                53,
                98,
                27,
                90
              ]
            },
            {
              "id": "2ec2437f-3c42-44c6-a9aa-3d94c01122b5",
              "total": 3186,
              "values": [
                67,
                98,
                68,
                83,
                79,
                94,
                58,
                66
              ]
            },
            {
              "id": "8f731b73-1d1e-4d15-b9ee-a8dce735af57",
              "total": 6684,
              "values": [
                60,
                92,
                21,
                16,
                64,
                51,
                64,
                23
              ]
            },
            {
              "id": "ea3aba79-c6e9-41ec-9715-a133b4182c0c",
              "total": 5655,
              "values": [
                18,
                82,
                81,
                40,
                88,
                81,
                32,
                54
              ]
            },
            {
              "id": "6fbd74a3-bd77-4bf9-a7b0-76693c8b29a6",
              "total": 9308,
              "values": [
                89,
                57,
                30,
                50,
                86,
                58,
                71,
                47
              ]
            },
            {
              "id": "882b8eb7-7e4f-401a-92ea-0a657505117f",
              "total": 3633,
              "values": [
                48,
                91,
                84,
                58,
                71,
                98,
                71,
                56
              ]
            },
            {
              "id": "823db4fd-07fa-41fc-aa83-fd1323f4264a",
              "total": 6029,
              "values": [
                79,
                20,
                94,
                45,
                88,
                11,
                51,
                34
              ]
            },
            {
              "id": "02e19518-687b-4fef-84c4-c03ac0337bb8",
              "total": 4666,
              "values": [
                74,
                35,
                75,
                38,
                46,
                66,
                62,
                28
              ]
            },
            {
              "id": "6c9686db-9fd5-46c7-85b8-b667c4abc48e",
              "total": 5646,
              "values": [
                60,
                18,
                61,
                73,
                86,
                23,
                93,
                28
              ]
            },
            {
              "id": "5bc6d3f6-78c3-4073-bf99-94acd7b1034e",
              "total": 2222,
              "values": [
                24,
                14,
                80,
                21,
                46,
                96,
                21,
                31
              ]
            },
            {
              "id": "d627d61a-44d5-43a2-a175-0b035ca44c05",
              "total": 6560,
              "values": [
                93,
                71,
                86,
                46,
                38,
                58,
                94,
                22
              ]
            },
            {
              "id": "d98cbb62-7542-4bff-a764-f1b743f37a49",
              "total": 2229,
              "values": [
                18,
                53,
                38,
                86,
                26,
                60,
                32,
                13
              ]
            },
            {
              "id": "261056cc-911f-41d7-8268-9dfc87746dd4",
              "total": 7936,
              "values": [
                95,
                41,
                37,
                55,
                12,
                53,
                45,
                39
              ]
            },
            {
              "id": "38246de0-7021-4dd0-9f8e-eb28ec9956b8",
              "total": 6756,
              "values": [
                52,
                40,
                13,
                66,
                28,
                55,
                36,
                45
              ]
            },
            {
              "id": "6a1424f8-b891-4c3b-afc0-b1c1e81560fb",
              "total": 9678,
              "values": [
                37,
                63,
                32,
                27,
                63,
                24,
                94,
                48
              ]
            },
            {
              "id": "be3bddb0-62de-4b48-bb4b-df7beaad9085",
              "total": 4488,
              "values": [
                83,
                38,
                46,
                32,
                19,
                25,
                51,
                62
              ]
            },
            {
              "id": "2eb486c2-c090-4a11-a579-01be153136f5",
              "total": 8299,
              "values": [
                82,
                90,
                29,
                11,
                77,
                56,
                54,
                33
              ]
            },
            {
              "id": "b796d178-e6fa-4643-9138-b4b85febc164",
              "total": 2635,
              "values": [
                41,
                89,
                93,
                48,
                14,
                85,
                30,
                25
              ]
            },
            {
              "id": "a0c427b5-5dae-4814-8274-dde278d83e18",
              "total": 7381,
              "values": [
                45,
                28,
                87,
                87,
                26,
                83,
                29,
                26
              ]
            },
            {
              "id": "d9399091-dff7-48a3-b316-b327fff35cd5",
              "total": 2704,
              "values": [
                33,
                62,
                35,
                46,
                82,
                92,
                59,
                13
              ]
            },
            {
              "id": "32d48f9b-8793-40dc-8463-c7fa9c0bca42",
              "total": 9768,
              "values": [
                67,
                96,
                14,
                36,
                59,
                67,
                85,
                56
              ]
            },
            {
              "id": "b6ecd208-ac7a-48fa-adfe-fc781c118dc1",
              "total": 3450,
              "values": [
                86,
                96,
                12,
                28,
                10,
                16,
                91,
                34
              ]
            },
            {
              "id": "702d67cc-7d51-489b-b4ea-d331975db959",
              "total": 2771,
              "values": [
                52,
                72,
                80,
                51,
                82,
                63,
                17,
                16
              ]
            },
            {
              "id": "033ca5b6-3680-424d-97b3-76a8e3bb20b1",
              "total": 8417,
              "values": [
                48,
                32,
                57,
                10,
                44,
                31,
                43,
                86
              ]
            },
            {
              "id": "1cf77039-5464-42fc-9f59-7431c21bac7d",
              "total": 4378,
              "values": [
                56,
                24,
                67,
                79,
                39,
                25,
                62,
                28
              ]
            },
            {
              "id": "8f0182a0-de56-4140-a8ff-e2fbe33c5db8",
              "total": 7352,
              "values": [
                55,
                68,
                80,
                10,
                52,
                35,
                96,
                48
              ]
            },
            {
              "id": "260300db-3c2a-4a48-927b-61af310733c6",
              "total": 9820,
              "values": [
                96,
                96,
                55,
                76,
                79,
                13,
                27,
                57
              ]
            },
            {
              "id": "59826e21-6a4b-4193-b294-cc3e3c52e290",
              "total": 2798,
              "values": [
                39,
                12,
                63,
                51,
                35,
                28,
                92,
                97
              ]
            },
            {
              "id": "bdd527aa-da23-4812-afc2-e4cf78671e24",
              "total": 5816,
              "values": [
                68,
                99,
                29,
                49,
                67,
                12,
                81,
                63
              ]
            },
            {
              "id": "38d20c1d-9124-48ec-92ab-60a9a1a2ece9",
              "total": 2199,
              "values": [
                82,
                86,
                26,
                59,
                60,
                37,
                92,
                11
              ]
            },
            {
              "id": "6a9249a4-74b9-41f0-9cc8-87518cc447ff",
              "total": 6826,
              "values": [
                43,
                24,
                19,
                87,
                99,
                39,
                92,
                99
              ]
            },
            {
              "id": "76931007-abf5-4ce3-bd77-214799a3d554",
              "total": 5522,
              "values": [
                13,
                28,
                89,
                45,
                19,
                82,
                83,
                44
              ]
            },
            {
              "id": "b70b65d0-238e-458c-bf9d-cedac7f2d76d",
              "total": 7773,
              "values": [
                82,
                22,
                53,
                31,
                47,
                95,
                14,
                99
              ]
            },
            {
              "id": "61af788b-8ae1-4f3d-abd9-9cda2cc264ea",
              "total": 3746,
              "values": [
                44,
                77,
                68,
                19,
                18,
                30,
                31,
                96
              ]
            },
            {
              "id": "c7e6004a-bb75-4bcc-accc-8b672f9bd0c1",
              "total": 2227,
              "values": [
                16,
                90,
                52,
                92,
                63,
                71,
                76,
                17
              ]
            },
            {
              "id": "320beaf4-ccad-420d-ad9d-1639fd55b290",
              "total": 1746,
              "values": [
                30,
                29,
                10,
                34,
                53,
                88,
                75,
                19
              ]
            },
            {
              "id": "8e6e4299-5d2e-49ce-97d9-76177ad5136f",
              "total": 2137,
              "values": [
                78,
                94,
                75,
                71,
                60,
                69,
                71,
                86
              ]
            },
            {
              "id": "43d531a4-602b-46a8-a3b3-5f7a9fd756b7",
              "total": 1861,
              "values": [
                74,
                56,
                48,
                70,
                24,
                44,
                40,
                72
              ]
            },
            {
              "id": "09ab69fa-420a-421d-8b0b-8d3118ba77f2",
              "total": 4153,
              "values": [
                33,
                14,
                76,
                85,
                68,
                84,
                97,
                97
              ]
            },
            {
              "id": "60ec69e0-fb04-470d-b9c9-525312dd7030",
              "total": 5768,
              "values": [
                90,
                66,
                29,
                67,
                72,
                13,
                41,
                28
              ]
            },
            {
              "id": "3c958b38-d566-4c46-8908-3099f548e05a",
              "total": 8055,
              "values": [
                28,
                40,
                87,
                84,
                93,
                42,
                85,
                22
              ]
            },
            {
              "id": "924365ed-82b7-4792-8a57-9f341846e113",
              "total": 3276,
              "values": [
                31,
                40,
                77,
                92,
                38,
                61,
                76,
                30
              ]
            },
            {
              "id": "af92095c-1bbc-47ea-83df-c87e59a0e50e",
              "total": 2102,
              "values": [
                19,
                86,
                33,
                97,
                90,
                99,
                50,
                87
              ]
            },
            {
              "id": "a06b04fe-dcc8-445d-936f-eec937e111b7",
              "total": 6743,
              "values": [
                98,
                62,
                46,
                23,
                27,
                50,
                40,
                74
              ]
            },
            {
              "id": "2576597c-0e82-4946-a5d3-8919ae478c13",
              "total": 8452,
              "values": [
                61,
                67,
                14,
                85,
                56,
                32,
                77,
                75
              ]
            }
          ]
        },
        {
          "id": "5d7753c21fbfc26d5c30b5e5",
          "label": "Playce",
          "color": "#aead3a",
          "data": [
            {
              "id": "f290f878-352f-46c2-a748-e2a0781134a9",
              "total": 1479,
              "values": [
                86,
                93,
                49,
                35,
                37,
                75,
                90,
                38
              ]
            },
            {
              "id": "ddee2d36-2de7-4fa0-ab7e-5a0de43ba970",
              "total": 5747,
              "values": [
                49,
                22,
                34,
                38,
                45,
                76,
                37,
                23
              ]
            },
            {
              "id": "1d904afd-c1db-4c7d-a6f2-4fefb9ab5093",
              "total": 7550,
              "values": [
                48,
                93,
                34,
                50,
                17,
                97,
                89,
                52
              ]
            },
            {
              "id": "bb677b5f-09fb-40f7-9cba-82e2ac1dbb9e",
              "total": 3749,
              "values": [
                18,
                75,
                77,
                88,
                74,
                37,
                20,
                64
              ]
            },
            {
              "id": "af9f0b03-4bbb-4d3a-988d-2e489daa100e",
              "total": 4528,
              "values": [
                41,
                54,
                90,
                78,
                40,
                84,
                89,
                90
              ]
            },
            {
              "id": "85281bef-1836-4be5-b5a3-ea34d58736f5",
              "total": 8347,
              "values": [
                79,
                27,
                39,
                66,
                86,
                66,
                87,
                64
              ]
            },
            {
              "id": "dc0117cb-59fe-481d-a663-e9d23df26531",
              "total": 8068,
              "values": [
                28,
                36,
                76,
                13,
                66,
                22,
                86,
                88
              ]
            },
            {
              "id": "181b86a8-353e-4521-80ba-3b06f9b6a5d0",
              "total": 3980,
              "values": [
                76,
                51,
                45,
                44,
                33,
                47,
                21,
                80
              ]
            },
            {
              "id": "e8389f63-b15d-43a6-9794-3e83683e490f",
              "total": 3598,
              "values": [
                71,
                70,
                65,
                53,
                46,
                18,
                96,
                57
              ]
            },
            {
              "id": "0b116687-0053-4451-8576-539bd406df51",
              "total": 9482,
              "values": [
                12,
                16,
                85,
                17,
                50,
                47,
                46,
                71
              ]
            },
            {
              "id": "24411d8f-da4c-4013-8a20-16cdbfbb5328",
              "total": 6405,
              "values": [
                21,
                36,
                15,
                83,
                63,
                24,
                45,
                19
              ]
            },
            {
              "id": "0ff816df-416d-4c5c-a34e-602445bc3440",
              "total": 5406,
              "values": [
                90,
                72,
                53,
                83,
                85,
                23,
                54,
                48
              ]
            },
            {
              "id": "c5f8c271-837f-41d5-8f1e-f4b3196bb389",
              "total": 4911,
              "values": [
                80,
                42,
                41,
                14,
                35,
                74,
                85,
                18
              ]
            },
            {
              "id": "7ef5807f-0881-4349-a00f-f5d3b4d068f9",
              "total": 9477,
              "values": [
                35,
                93,
                83,
                58,
                84,
                39,
                57,
                40
              ]
            },
            {
              "id": "7ff1d80c-8252-46cf-939b-dd0b6cb88524",
              "total": 3946,
              "values": [
                70,
                64,
                48,
                42,
                98,
                39,
                18,
                98
              ]
            },
            {
              "id": "479828ca-1db2-4279-b19e-f46912a3ecb1",
              "total": 2911,
              "values": [
                39,
                58,
                46,
                94,
                88,
                57,
                77,
                70
              ]
            },
            {
              "id": "dffedd08-db41-4d45-becc-71798e885b24",
              "total": 6027,
              "values": [
                68,
                86,
                92,
                70,
                96,
                62,
                67,
                79
              ]
            },
            {
              "id": "89a69593-55da-4737-b82a-60d46ac5009a",
              "total": 5661,
              "values": [
                56,
                17,
                25,
                90,
                81,
                28,
                67,
                94
              ]
            },
            {
              "id": "9319ddd5-92d1-48a1-a527-a865bf9b077f",
              "total": 5738,
              "values": [
                74,
                99,
                34,
                19,
                78,
                73,
                39,
                89
              ]
            },
            {
              "id": "65e66607-a4ec-4805-a6ca-e1fe9ffa59c5",
              "total": 4662,
              "values": [
                72,
                52,
                97,
                78,
                99,
                72,
                19,
                77
              ]
            },
            {
              "id": "2757670d-bd0f-487a-8558-ba9e86c8e73e",
              "total": 1017,
              "values": [
                41,
                58,
                29,
                82,
                63,
                97,
                77,
                39
              ]
            },
            {
              "id": "b2b618b0-ad42-4ff4-860d-3036e8fa4d5e",
              "total": 2921,
              "values": [
                32,
                97,
                61,
                51,
                28,
                71,
                60,
                98
              ]
            },
            {
              "id": "52d0686b-bf1a-498d-af0e-39fc806a163b",
              "total": 1944,
              "values": [
                35,
                47,
                16,
                26,
                76,
                57,
                47,
                33
              ]
            },
            {
              "id": "3051c93d-8fc5-47c5-ad58-6705cc04d7d6",
              "total": 5045,
              "values": [
                73,
                65,
                48,
                19,
                31,
                84,
                35,
                58
              ]
            },
            {
              "id": "345fc2a0-0573-4b0a-b561-f77c62f03089",
              "total": 7682,
              "values": [
                55,
                96,
                69,
                70,
                57,
                55,
                48,
                85
              ]
            },
            {
              "id": "8d0085fd-5f53-4a71-aa62-ca0325c96f5b",
              "total": 7458,
              "values": [
                86,
                27,
                16,
                36,
                86,
                84,
                86,
                12
              ]
            },
            {
              "id": "920df0f0-9aa9-4b67-ab34-419486c2bf89",
              "total": 3402,
              "values": [
                91,
                64,
                68,
                25,
                73,
                99,
                51,
                44
              ]
            },
            {
              "id": "77d45054-7cfa-4bfb-8468-1ec64abd066a",
              "total": 3113,
              "values": [
                69,
                71,
                17,
                73,
                38,
                98,
                20,
                87
              ]
            },
            {
              "id": "471ae292-102b-4cb4-a3a3-53f0db17caf8",
              "total": 7739,
              "values": [
                54,
                41,
                14,
                70,
                27,
                74,
                16,
                33
              ]
            },
            {
              "id": "86640ecb-6595-43b1-b7fb-36456cce401e",
              "total": 4061,
              "values": [
                16,
                73,
                30,
                83,
                71,
                38,
                83,
                89
              ]
            },
            {
              "id": "1faed485-9e7a-4804-9f1b-2a95e0512b87",
              "total": 4588,
              "values": [
                88,
                41,
                92,
                52,
                52,
                48,
                47,
                39
              ]
            },
            {
              "id": "72d4b76c-8147-4d8a-99d6-e997b106e12b",
              "total": 4743,
              "values": [
                20,
                67,
                25,
                15,
                55,
                28,
                69,
                78
              ]
            },
            {
              "id": "f7970b45-dd35-4c71-a3bb-d2343afac18f",
              "total": 7276,
              "values": [
                49,
                19,
                14,
                25,
                56,
                15,
                64,
                23
              ]
            },
            {
              "id": "5fafc785-24ad-49e1-a958-bae4a01b9364",
              "total": 2645,
              "values": [
                41,
                36,
                69,
                45,
                22,
                33,
                41,
                84
              ]
            },
            {
              "id": "cb146931-323b-4221-aaa7-66488778b8df",
              "total": 8224,
              "values": [
                27,
                44,
                75,
                26,
                16,
                94,
                48,
                98
              ]
            },
            {
              "id": "72fbc740-83f8-44da-a4c2-4c9dc8bb5e57",
              "total": 1036,
              "values": [
                17,
                96,
                33,
                57,
                19,
                10,
                13,
                34
              ]
            },
            {
              "id": "76991bf0-7bfd-4410-a8b6-98cdd5cc6906",
              "total": 4539,
              "values": [
                87,
                15,
                50,
                49,
                27,
                47,
                44,
                81
              ]
            },
            {
              "id": "98d4ba1f-cdfa-48b8-8bc3-1e7ce3ddae71",
              "total": 6148,
              "values": [
                93,
                55,
                27,
                17,
                40,
                97,
                81,
                79
              ]
            },
            {
              "id": "94f1a253-5105-4788-a0ce-d81d34ab0395",
              "total": 5791,
              "values": [
                93,
                52,
                10,
                97,
                89,
                13,
                73,
                27
              ]
            },
            {
              "id": "9278b31e-99b4-47d5-b9ac-16d1736c31fb",
              "total": 9441,
              "values": [
                44,
                21,
                65,
                34,
                19,
                24,
                58,
                92
              ]
            },
            {
              "id": "6107f325-3624-46af-a311-ae17fbf30b9a",
              "total": 8823,
              "values": [
                37,
                90,
                99,
                90,
                76,
                45,
                98,
                92
              ]
            },
            {
              "id": "80935638-09b8-40e7-8422-4d3dd2d4e1f8",
              "total": 4876,
              "values": [
                19,
                46,
                24,
                55,
                62,
                39,
                31,
                26
              ]
            },
            {
              "id": "343ba460-5069-48cd-8520-64a462af7fbb",
              "total": 5430,
              "values": [
                63,
                11,
                71,
                21,
                40,
                41,
                34,
                96
              ]
            },
            {
              "id": "f6f04242-48a3-45c5-b0cc-efb4535ff109",
              "total": 6111,
              "values": [
                40,
                44,
                43,
                70,
                90,
                80,
                39,
                79
              ]
            },
            {
              "id": "0b08e0d7-8962-4b02-9941-ab8891f635e4",
              "total": 8888,
              "values": [
                18,
                19,
                74,
                61,
                32,
                40,
                61,
                75
              ]
            },
            {
              "id": "5dd0b348-af72-4be0-8719-fca3aa2865d2",
              "total": 5520,
              "values": [
                42,
                80,
                24,
                61,
                92,
                91,
                90,
                69
              ]
            },
            {
              "id": "3fe98595-479c-4475-b6d5-b356656a6014",
              "total": 6616,
              "values": [
                88,
                13,
                62,
                81,
                94,
                41,
                95,
                95
              ]
            },
            {
              "id": "028bc6ff-efb3-48d3-b680-d8352ea6f070",
              "total": 9966,
              "values": [
                51,
                59,
                67,
                45,
                65,
                42,
                41,
                42
              ]
            },
            {
              "id": "48c9a765-93d4-4b45-9d7e-66f41468a0ef",
              "total": 3573,
              "values": [
                56,
                40,
                95,
                42,
                89,
                83,
                82,
                86
              ]
            },
            {
              "id": "93b66bd1-4f8b-4ecd-ba52-21d7221a3104",
              "total": 1903,
              "values": [
                32,
                40,
                34,
                85,
                88,
                17,
                94,
                60
              ]
            }
          ]
        },
        {
          "id": "5d7753c293ac20337d662d9f",
          "label": "Recrisys",
          "color": "#4bb473",
          "data": [
            {
              "id": "3651c6ac-5961-4f0a-8cfb-e8bc3f93f6d0",
              "total": 7078,
              "values": [
                29,
                81,
                21,
                61,
                84,
                96,
                57,
                99
              ]
            },
            {
              "id": "7ddf1410-f1ec-4f3e-a632-cb911dae173a",
              "total": 1460,
              "values": [
                97,
                30,
                41,
                17,
                69,
                86,
                52,
                82
              ]
            },
            {
              "id": "51c8d1d5-51e4-426b-adc2-4cd5a599ad54",
              "total": 1289,
              "values": [
                32,
                24,
                12,
                97,
                88,
                74,
                88,
                50
              ]
            },
            {
              "id": "9d2dcf78-8802-43c0-a6a5-ff1bea9ed0d2",
              "total": 7532,
              "values": [
                87,
                15,
                52,
                32,
                87,
                92,
                34,
                24
              ]
            },
            {
              "id": "630dd886-733f-4bb3-bbf3-7d97eebb3bb7",
              "total": 4039,
              "values": [
                33,
                47,
                14,
                65,
                32,
                74,
                20,
                71
              ]
            },
            {
              "id": "185538b5-b60a-49cb-955f-7f53de49f35d",
              "total": 6270,
              "values": [
                89,
                25,
                74,
                37,
                70,
                83,
                30,
                72
              ]
            },
            {
              "id": "a86935f5-8a91-4255-8983-0c2ced1e4808",
              "total": 3420,
              "values": [
                14,
                36,
                54,
                12,
                95,
                87,
                88,
                66
              ]
            },
            {
              "id": "03c9f422-41c4-480c-8549-cc48e8f9e09a",
              "total": 4046,
              "values": [
                60,
                83,
                31,
                53,
                99,
                49,
                76,
                75
              ]
            },
            {
              "id": "92b30733-c488-4fdf-ab69-74b945cfd63c",
              "total": 6225,
              "values": [
                89,
                10,
                68,
                74,
                42,
                57,
                80,
                36
              ]
            },
            {
              "id": "907febac-4f38-44e7-a7d8-cca58dab7462",
              "total": 3375,
              "values": [
                61,
                47,
                75,
                59,
                40,
                48,
                90,
                43
              ]
            },
            {
              "id": "0076b577-37e2-4dbc-9a39-9b65dcf446e9",
              "total": 3690,
              "values": [
                44,
                84,
                90,
                89,
                83,
                19,
                49,
                82
              ]
            },
            {
              "id": "78b2206e-f373-441f-b9cc-a2dd96ca5928",
              "total": 7460,
              "values": [
                99,
                12,
                24,
                58,
                88,
                73,
                64,
                35
              ]
            },
            {
              "id": "3f5383ef-ca65-4eb4-adec-263b33860756",
              "total": 8458,
              "values": [
                73,
                31,
                12,
                72,
                86,
                65,
                50,
                21
              ]
            },
            {
              "id": "ea544e5c-3033-4cba-9815-217e4e563d16",
              "total": 9587,
              "values": [
                86,
                29,
                60,
                47,
                79,
                15,
                83,
                64
              ]
            },
            {
              "id": "3ae92d67-7243-4bba-9efb-a56f9589f94d",
              "total": 4782,
              "values": [
                62,
                85,
                87,
                76,
                23,
                97,
                10,
                82
              ]
            },
            {
              "id": "066f17af-5956-4b11-a8f0-3068b2973e6e",
              "total": 9254,
              "values": [
                83,
                30,
                69,
                61,
                78,
                95,
                85,
                40
              ]
            },
            {
              "id": "2eb01601-9183-43aa-9340-8bf0f3850a90",
              "total": 3189,
              "values": [
                13,
                88,
                55,
                83,
                23,
                89,
                98,
                26
              ]
            },
            {
              "id": "dff02c49-a35e-4e36-b859-1002c7b430ac",
              "total": 3448,
              "values": [
                33,
                12,
                51,
                41,
                36,
                63,
                94,
                82
              ]
            },
            {
              "id": "4b4db76e-1228-4b9e-9d3c-aa91c9f2d5e2",
              "total": 7573,
              "values": [
                59,
                32,
                67,
                60,
                21,
                12,
                29,
                63
              ]
            },
            {
              "id": "5072ff14-bce9-458c-ab0b-a0534eed52a6",
              "total": 3682,
              "values": [
                54,
                78,
                88,
                51,
                97,
                69,
                22,
                69
              ]
            },
            {
              "id": "16abf5d9-0277-4081-bd50-f3018531c646",
              "total": 1816,
              "values": [
                67,
                71,
                56,
                79,
                96,
                97,
                68,
                56
              ]
            },
            {
              "id": "9969be1a-d8a5-4368-9608-9093fe6c6693",
              "total": 8464,
              "values": [
                16,
                62,
                74,
                30,
                96,
                61,
                32,
                36
              ]
            },
            {
              "id": "9cde034d-22dc-43f3-9c66-e6a93869ba80",
              "total": 7954,
              "values": [
                46,
                26,
                30,
                54,
                97,
                59,
                94,
                18
              ]
            },
            {
              "id": "c87f20f2-e1f6-4d3f-8257-7444b2b172de",
              "total": 7466,
              "values": [
                17,
                90,
                65,
                96,
                18,
                68,
                20,
                62
              ]
            },
            {
              "id": "b5ce521a-abcd-473c-bc3f-575db85d178f",
              "total": 5249,
              "values": [
                30,
                20,
                11,
                82,
                70,
                80,
                16,
                28
              ]
            },
            {
              "id": "1259c6d2-6f06-4f02-86ee-aae299560c98",
              "total": 4990,
              "values": [
                69,
                98,
                17,
                66,
                23,
                64,
                40,
                91
              ]
            },
            {
              "id": "9f8c73d9-42a7-4c84-aee0-893dae3dfb6c",
              "total": 8046,
              "values": [
                24,
                75,
                55,
                22,
                23,
                12,
                27,
                56
              ]
            },
            {
              "id": "9fa11816-5b6b-46ea-bf2c-58e410189419",
              "total": 1217,
              "values": [
                85,
                67,
                60,
                85,
                76,
                15,
                94,
                71
              ]
            },
            {
              "id": "f8d4657c-0cb5-448f-9e71-8a5449c65b7a",
              "total": 3081,
              "values": [
                60,
                73,
                84,
                30,
                89,
                47,
                77,
                81
              ]
            },
            {
              "id": "3ce181d9-085b-462a-86ab-83fe2f1b1e0c",
              "total": 5169,
              "values": [
                79,
                34,
                98,
                76,
                76,
                42,
                64,
                66
              ]
            },
            {
              "id": "e2d64e8f-41a8-4e48-b9b7-557f6064d8f6",
              "total": 8931,
              "values": [
                58,
                70,
                72,
                22,
                39,
                36,
                83,
                26
              ]
            },
            {
              "id": "05855617-ac2c-4d53-a645-39038fdcc207",
              "total": 1426,
              "values": [
                79,
                57,
                13,
                62,
                78,
                97,
                93,
                45
              ]
            },
            {
              "id": "71d65a03-a7ef-4730-b19f-418dd821979f",
              "total": 7306,
              "values": [
                64,
                83,
                12,
                57,
                47,
                62,
                88,
                12
              ]
            },
            {
              "id": "59898f4d-7a29-48fd-8061-081fbfa42a2e",
              "total": 3631,
              "values": [
                70,
                12,
                52,
                37,
                41,
                20,
                84,
                53
              ]
            },
            {
              "id": "7bfb7ce9-53d0-47d0-99d2-f06bd5f8bd2b",
              "total": 2905,
              "values": [
                25,
                22,
                24,
                87,
                95,
                82,
                33,
                37
              ]
            },
            {
              "id": "185da2e6-f746-465f-bc96-20331c4010ae",
              "total": 5983,
              "values": [
                15,
                49,
                63,
                84,
                73,
                16,
                75,
                87
              ]
            },
            {
              "id": "664b15da-ae0b-43c2-a125-a4821776148a",
              "total": 3651,
              "values": [
                43,
                20,
                83,
                43,
                54,
                92,
                90,
                77
              ]
            },
            {
              "id": "bbf37482-219a-423d-ba23-a260b407920f",
              "total": 6964,
              "values": [
                99,
                27,
                27,
                45,
                71,
                27,
                66,
                74
              ]
            },
            {
              "id": "3098e8da-b5de-439a-964f-faf7f448f3c9",
              "total": 2919,
              "values": [
                27,
                28,
                26,
                93,
                95,
                21,
                14,
                72
              ]
            },
            {
              "id": "be7e4984-c361-4ce9-b374-49f1e8dd8793",
              "total": 3243,
              "values": [
                23,
                84,
                48,
                77,
                35,
                37,
                73,
                73
              ]
            },
            {
              "id": "8df707e3-8702-4894-8ca2-1959330d1918",
              "total": 2510,
              "values": [
                58,
                86,
                65,
                34,
                20,
                43,
                66,
                17
              ]
            },
            {
              "id": "30f5a9ff-43f3-4738-be69-f1c3c7e2c420",
              "total": 6796,
              "values": [
                93,
                92,
                57,
                38,
                95,
                15,
                97,
                50
              ]
            },
            {
              "id": "e96aef58-acb4-4646-a710-1b8172938112",
              "total": 2586,
              "values": [
                24,
                93,
                25,
                25,
                56,
                37,
                45,
                19
              ]
            },
            {
              "id": "d0677532-047a-446d-ab59-e19d6ea02f99",
              "total": 5981,
              "values": [
                55,
                12,
                43,
                26,
                17,
                38,
                87,
                60
              ]
            },
            {
              "id": "85526b8d-4e13-4050-a06e-a64fc4ad2898",
              "total": 2084,
              "values": [
                56,
                45,
                25,
                84,
                84,
                68,
                32,
                45
              ]
            },
            {
              "id": "fc48cb24-ff77-4a58-bf45-26f243f1f445",
              "total": 6822,
              "values": [
                60,
                70,
                75,
                82,
                53,
                33,
                73,
                73
              ]
            },
            {
              "id": "55eb3e94-b8ff-4ce6-ac8d-c54d0e97df9e",
              "total": 7966,
              "values": [
                51,
                51,
                31,
                48,
                46,
                75,
                70,
                91
              ]
            },
            {
              "id": "184e9880-8201-46e4-b35a-22946cad6e54",
              "total": 5998,
              "values": [
                21,
                69,
                48,
                64,
                31,
                59,
                37,
                33
              ]
            },
            {
              "id": "ab5ab393-7f12-469f-bbc7-66ec39e77b9c",
              "total": 5104,
              "values": [
                95,
                76,
                77,
                54,
                95,
                53,
                10,
                86
              ]
            },
            {
              "id": "0d569d0a-2a95-47f6-b79e-b1231cd90e5e",
              "total": 6712,
              "values": [
                69,
                72,
                58,
                10,
                73,
                91,
                43,
                89
              ]
            }
          ]
        }
    ];

    selectedResources: Array<IResource> = [ ...this.resources ];

  
    handleChecked(state: IState): void {
        console.log(state);
    }
}
