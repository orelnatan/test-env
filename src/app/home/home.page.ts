import { Component } from '@angular/core';
import { IJaw } from '../models/IJaw.model';
import { IDocument } from '../models/IDocument.model';
import { ICountry } from '../models/ICountry.model';
import { ICompany } from '../models/ICompany.model';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class Home {
    companies: Array<ICompany> = [
        {
          "id": "5d74c34fa0d383afdd5bd121",
          "label": "ACLIMA",
          "subsidiaries": [
            {
              "id": "5d74c34fddc877e874a295bc",
              "label": "ACIUM",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$2,069.33"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,502.30"
                },
                {
                  "label": "CINASTER",
                  "value": "$7,560.53"
                },
                {
                  "label": "ADORNICA",
                  "value": "$5,182.17"
                },
                {
                  "label": "GEEKUS",
                  "value": "$3,265.53"
                },
                {
                  "label": "FARMEX",
                  "value": "$2,109.89"
                },
                {
                  "label": "PIVITOL",
                  "value": "$2,198.77"
                },
                {
                  "label": "SATIANCE",
                  "value": "$4,749.58"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$4,502.45"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$7,302.88"
                },
                {
                  "label": "CYTREX",
                  "value": "$6,052.20"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$6,518.19"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,930.99"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$3,626.79"
                },
                {
                  "label": "CODACT",
                  "value": "$4,806.57"
                },
                {
                  "label": "KEENGEN",
                  "value": "$5,701.23"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$2,869.74"
                },
                {
                  "label": "THREDZ",
                  "value": "$1,857.01"
                },
                {
                  "label": "UXMOX",
                  "value": "$7,356.46"
                },
                {
                  "label": "APPLICA",
                  "value": "$5,994.79"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$6,125.42"
                },
                {
                  "label": "ZENTURY",
                  "value": "$4,270.57"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,962.28"
                },
                {
                  "label": "COMTRACT",
                  "value": "$7,447.98"
                },
                {
                  "label": "EARGO",
                  "value": "$2,129.65"
                },
                {
                  "label": "ZYPLE",
                  "value": "$5,713.50"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$1,861.21"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$2,602.29"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$4,909.66"
                },
                {
                  "label": "VERBUS",
                  "value": "$7,291.11"
                },
                {
                  "label": "BULLZONE",
                  "value": "$4,010.08"
                },
                {
                  "label": "ISBOL",
                  "value": "$1,075.36"
                },
                {
                  "label": "DADABASE",
                  "value": "$4,332.86"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$3,776.43"
                },
                {
                  "label": "REALYSIS",
                  "value": "$5,704.62"
                },
                {
                  "label": "QIMONK",
                  "value": "$1,211.18"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$1,992.32"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$5,485.11"
                },
                {
                  "label": "KOZGENE",
                  "value": "$1,463.39"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$5,973.11"
                }
              ]
            },
            {
              "id": "5d74c34fec232a6b97a2af65",
              "label": "UNQ",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$7,271.77"
                },
                {
                  "label": "NETPLAX",
                  "value": "$1,883.41"
                },
                {
                  "label": "CINASTER",
                  "value": "$1,174.19"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,606.82"
                },
                {
                  "label": "GEEKUS",
                  "value": "$2,397.28"
                },
                {
                  "label": "FARMEX",
                  "value": "$3,581.46"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,978.31"
                },
                {
                  "label": "SATIANCE",
                  "value": "$4,361.60"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$7,603.51"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$2,793.35"
                },
                {
                  "label": "CYTREX",
                  "value": "$5,362.05"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$5,367.13"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$5,953.57"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$1,192.37"
                },
                {
                  "label": "CODACT",
                  "value": "$4,008.85"
                },
                {
                  "label": "KEENGEN",
                  "value": "$6,154.86"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$2,489.71"
                },
                {
                  "label": "THREDZ",
                  "value": "$1,979.82"
                },
                {
                  "label": "UXMOX",
                  "value": "$5,135.35"
                },
                {
                  "label": "APPLICA",
                  "value": "$4,669.53"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$4,969.67"
                },
                {
                  "label": "ZENTURY",
                  "value": "$3,748.94"
                },
                {
                  "label": "ZENCO",
                  "value": "$1,108.93"
                },
                {
                  "label": "COMTRACT",
                  "value": "$3,683.85"
                },
                {
                  "label": "EARGO",
                  "value": "$2,505.12"
                },
                {
                  "label": "ZYPLE",
                  "value": "$4,588.57"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$6,675.85"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$1,810.84"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$3,186.12"
                },
                {
                  "label": "VERBUS",
                  "value": "$7,462.16"
                },
                {
                  "label": "BULLZONE",
                  "value": "$2,587.63"
                },
                {
                  "label": "ISBOL",
                  "value": "$6,998.72"
                },
                {
                  "label": "DADABASE",
                  "value": "$5,369.43"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$3,113.91"
                },
                {
                  "label": "REALYSIS",
                  "value": "$3,319.19"
                },
                {
                  "label": "QIMONK",
                  "value": "$3,747.28"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$7,361.15"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$3,472.83"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,413.60"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$2,736.54"
                }
              ]
            },
            {
              "id": "5d74c34fb75fd41a118dfc61",
              "label": "ENOMEN",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$1,842.41"
                },
                {
                  "label": "NETPLAX",
                  "value": "$6,985.75"
                },
                {
                  "label": "CINASTER",
                  "value": "$5,429.34"
                },
                {
                  "label": "ADORNICA",
                  "value": "$5,203.27"
                },
                {
                  "label": "GEEKUS",
                  "value": "$4,980.82"
                },
                {
                  "label": "FARMEX",
                  "value": "$1,246.72"
                },
                {
                  "label": "PIVITOL",
                  "value": "$2,701.08"
                },
                {
                  "label": "SATIANCE",
                  "value": "$4,388.53"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$7,567.81"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$1,558.45"
                },
                {
                  "label": "CYTREX",
                  "value": "$4,776.08"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$5,811.81"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,607.73"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,580.98"
                },
                {
                  "label": "CODACT",
                  "value": "$1,842.50"
                },
                {
                  "label": "KEENGEN",
                  "value": "$1,334.68"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$5,453.08"
                },
                {
                  "label": "THREDZ",
                  "value": "$4,654.38"
                },
                {
                  "label": "UXMOX",
                  "value": "$2,087.52"
                },
                {
                  "label": "APPLICA",
                  "value": "$3,036.06"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$1,575.53"
                },
                {
                  "label": "ZENTURY",
                  "value": "$7,601.81"
                },
                {
                  "label": "ZENCO",
                  "value": "$5,699.55"
                },
                {
                  "label": "COMTRACT",
                  "value": "$6,028.51"
                },
                {
                  "label": "EARGO",
                  "value": "$7,808.26"
                },
                {
                  "label": "ZYPLE",
                  "value": "$5,427.71"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$6,554.67"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$1,399.53"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$3,981.18"
                },
                {
                  "label": "VERBUS",
                  "value": "$1,000.58"
                },
                {
                  "label": "BULLZONE",
                  "value": "$2,992.64"
                },
                {
                  "label": "ISBOL",
                  "value": "$6,439.25"
                },
                {
                  "label": "DADABASE",
                  "value": "$6,871.88"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$4,235.51"
                },
                {
                  "label": "REALYSIS",
                  "value": "$1,545.50"
                },
                {
                  "label": "QIMONK",
                  "value": "$6,915.43"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$4,721.69"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$6,662.37"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,358.08"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,290.38"
                }
              ]
            },
            {
              "id": "5d74c34f1f6534337a161914",
              "label": "KOG",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$4,766.51"
                },
                {
                  "label": "NETPLAX",
                  "value": "$3,732.32"
                },
                {
                  "label": "CINASTER",
                  "value": "$6,441.64"
                },
                {
                  "label": "ADORNICA",
                  "value": "$7,614.47"
                },
                {
                  "label": "GEEKUS",
                  "value": "$7,414.97"
                },
                {
                  "label": "FARMEX",
                  "value": "$5,088.93"
                },
                {
                  "label": "PIVITOL",
                  "value": "$6,733.46"
                },
                {
                  "label": "SATIANCE",
                  "value": "$5,607.98"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$2,642.04"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$2,461.87"
                },
                {
                  "label": "CYTREX",
                  "value": "$3,461.48"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$4,706.61"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$5,508.70"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$4,130.47"
                },
                {
                  "label": "CODACT",
                  "value": "$7,706.15"
                },
                {
                  "label": "KEENGEN",
                  "value": "$4,300.46"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$3,087.22"
                },
                {
                  "label": "THREDZ",
                  "value": "$1,178.04"
                },
                {
                  "label": "UXMOX",
                  "value": "$6,265.52"
                },
                {
                  "label": "APPLICA",
                  "value": "$2,569.19"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$1,720.01"
                },
                {
                  "label": "ZENTURY",
                  "value": "$5,464.36"
                },
                {
                  "label": "ZENCO",
                  "value": "$4,790.96"
                },
                {
                  "label": "COMTRACT",
                  "value": "$2,985.56"
                },
                {
                  "label": "EARGO",
                  "value": "$6,427.96"
                },
                {
                  "label": "ZYPLE",
                  "value": "$7,348.83"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$1,010.43"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$5,606.63"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,481.74"
                },
                {
                  "label": "VERBUS",
                  "value": "$6,334.58"
                },
                {
                  "label": "BULLZONE",
                  "value": "$4,505.22"
                },
                {
                  "label": "ISBOL",
                  "value": "$7,500.79"
                },
                {
                  "label": "DADABASE",
                  "value": "$5,548.47"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$7,401.07"
                },
                {
                  "label": "REALYSIS",
                  "value": "$7,354.07"
                },
                {
                  "label": "QIMONK",
                  "value": "$3,154.60"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$6,591.76"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$2,248.23"
                },
                {
                  "label": "KOZGENE",
                  "value": "$6,115.61"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,104.28"
                }
              ]
            },
            {
              "id": "5d74c34fb66fea0eccf3d29a",
              "label": "GEOSTELE",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$1,860.89"
                },
                {
                  "label": "NETPLAX",
                  "value": "$7,413.61"
                },
                {
                  "label": "CINASTER",
                  "value": "$7,728.84"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,831.56"
                },
                {
                  "label": "GEEKUS",
                  "value": "$1,802.45"
                },
                {
                  "label": "FARMEX",
                  "value": "$6,460.15"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,369.34"
                },
                {
                  "label": "SATIANCE",
                  "value": "$4,049.58"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$3,231.92"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$6,245.47"
                },
                {
                  "label": "CYTREX",
                  "value": "$7,731.94"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$4,576.02"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$1,593.92"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$2,973.59"
                },
                {
                  "label": "CODACT",
                  "value": "$5,084.03"
                },
                {
                  "label": "KEENGEN",
                  "value": "$2,276.18"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$3,727.92"
                },
                {
                  "label": "THREDZ",
                  "value": "$2,623.26"
                },
                {
                  "label": "UXMOX",
                  "value": "$3,589.38"
                },
                {
                  "label": "APPLICA",
                  "value": "$7,388.13"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$3,592.97"
                },
                {
                  "label": "ZENTURY",
                  "value": "$5,622.72"
                },
                {
                  "label": "ZENCO",
                  "value": "$4,637.93"
                },
                {
                  "label": "COMTRACT",
                  "value": "$1,454.66"
                },
                {
                  "label": "EARGO",
                  "value": "$1,735.42"
                },
                {
                  "label": "ZYPLE",
                  "value": "$1,376.89"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$6,867.73"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$5,634.72"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,562.35"
                },
                {
                  "label": "VERBUS",
                  "value": "$5,281.50"
                },
                {
                  "label": "BULLZONE",
                  "value": "$5,264.11"
                },
                {
                  "label": "ISBOL",
                  "value": "$5,849.73"
                },
                {
                  "label": "DADABASE",
                  "value": "$7,210.50"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$7,623.58"
                },
                {
                  "label": "REALYSIS",
                  "value": "$6,586.13"
                },
                {
                  "label": "QIMONK",
                  "value": "$6,038.14"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$1,234.42"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$5,289.30"
                },
                {
                  "label": "KOZGENE",
                  "value": "$1,043.11"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$1,789.79"
                }
              ]
            }
          ]
        },
        {
          "id": "5d74c34f872acc900bab4746",
          "label": "COLUMELLA",
          "subsidiaries": [
            {
              "id": "5d74c34feb50759175dadfe8",
              "label": "MAGNEMO", //
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$6,876.32"
                },
                {
                  "label": "NETPLAX",
                  "value": "$6,039.04"
                },
                {
                  "label": "CINASTER",
                  "value": "$7,245.79"
                },
                {
                  "label": "ADORNICA",
                  "value": "$4,796.19"
                },
                {
                  "label": "GEEKUS",
                  "value": "$2,856.67"
                },
                {
                  "label": "FARMEX",
                  "value": "$1,207.36"
                },
                {
                  "label": "PIVITOL",
                  "value": "$6,265.66"
                },
                {
                  "label": "SATIANCE",
                  "value": "$7,194.23"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$3,344.87"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$3,725.54"
                },
                {
                  "label": "CYTREX",
                  "value": "$3,511.87"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$4,036.67"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$3,438.58"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,938.95"
                },
                {
                  "label": "CODACT",
                  "value": "$4,351.08"
                },
                {
                  "label": "KEENGEN",
                  "value": "$7,953.39"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$7,945.75"
                },
                {
                  "label": "THREDZ",
                  "value": "$1,983.89"
                },
                {
                  "label": "UXMOX",
                  "value": "$1,807.17"
                },
                {
                  "label": "APPLICA",
                  "value": "$7,085.15"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$3,722.63"
                },
                {
                  "label": "ZENTURY",
                  "value": "$5,624.51"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,999.91"
                },
                {
                  "label": "COMTRACT",
                  "value": "$4,841.13"
                },
                {
                  "label": "EARGO",
                  "value": "$6,876.72"
                },
                {
                  "label": "ZYPLE",
                  "value": "$5,417.81"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$3,566.35"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$2,420.56"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$6,551.73"
                },
                {
                  "label": "VERBUS",
                  "value": "$6,309.83"
                },
                {
                  "label": "BULLZONE",
                  "value": "$5,238.32"
                },
                {
                  "label": "ISBOL",
                  "value": "$5,018.44"
                },
                {
                  "label": "DADABASE",
                  "value": "$2,508.02"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$6,989.73"
                },
                {
                  "label": "REALYSIS",
                  "value": "$7,538.09"
                },
                {
                  "label": "QIMONK",
                  "value": "$7,750.15"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$7,383.55"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$6,612.70"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,793.26"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,855.75"
                }
              ]
            },
            {
              "id": "5d74c34fc540dc2a97f3c794",
              "label": "RAMJOB",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$7,725.80"
                },
                {
                  "label": "NETPLAX",
                  "value": "$3,256.17"
                },
                {
                  "label": "CINASTER",
                  "value": "$7,730.10"
                },
                {
                  "label": "ADORNICA",
                  "value": "$2,020.14"
                },
                {
                  "label": "GEEKUS",
                  "value": "$2,619.98"
                },
                {
                  "label": "FARMEX",
                  "value": "$3,983.36"
                },
                {
                  "label": "PIVITOL",
                  "value": "$3,600.86"
                },
                {
                  "label": "SATIANCE",
                  "value": "$7,368.88"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$6,454.08"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$2,897.24"
                },
                {
                  "label": "CYTREX",
                  "value": "$2,482.86"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,488.63"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,744.62"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,381.50"
                },
                {
                  "label": "CODACT",
                  "value": "$7,854.31"
                },
                {
                  "label": "KEENGEN",
                  "value": "$7,005.75"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$7,105.96"
                },
                {
                  "label": "THREDZ",
                  "value": "$1,085.98"
                },
                {
                  "label": "UXMOX",
                  "value": "$6,107.51"
                },
                {
                  "label": "APPLICA",
                  "value": "$5,291.02"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$7,041.76"
                },
                {
                  "label": "ZENTURY",
                  "value": "$5,105.63"
                },
                {
                  "label": "ZENCO",
                  "value": "$7,532.84"
                },
                {
                  "label": "COMTRACT",
                  "value": "$4,710.81"
                },
                {
                  "label": "EARGO",
                  "value": "$5,629.56"
                },
                {
                  "label": "ZYPLE",
                  "value": "$5,704.80"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$3,849.73"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$5,412.68"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$4,427.29"
                },
                {
                  "label": "VERBUS",
                  "value": "$4,729.18"
                },
                {
                  "label": "BULLZONE",
                  "value": "$1,212.49"
                },
                {
                  "label": "ISBOL",
                  "value": "$5,637.44"
                },
                {
                  "label": "DADABASE",
                  "value": "$3,801.88"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$7,817.18"
                },
                {
                  "label": "REALYSIS",
                  "value": "$3,140.88"
                },
                {
                  "label": "QIMONK",
                  "value": "$4,003.63"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$5,396.59"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$4,883.79"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,319.60"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$5,430.11"
                }
              ]
            },
            {
              "id": "5d74c34f1dcb52f496e6faa7",
              "label": "EGYPTO",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$6,617.41"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,381.30"
                },
                {
                  "label": "CINASTER",
                  "value": "$5,143.61"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,538.03"
                },
                {
                  "label": "GEEKUS",
                  "value": "$2,062.78"
                },
                {
                  "label": "FARMEX",
                  "value": "$6,650.05"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,375.07"
                },
                {
                  "label": "SATIANCE",
                  "value": "$2,766.22"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$4,766.80"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$4,313.99"
                },
                {
                  "label": "CYTREX",
                  "value": "$6,546.58"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$5,000.78"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$7,799.96"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,680.94"
                },
                {
                  "label": "CODACT",
                  "value": "$7,327.68"
                },
                {
                  "label": "KEENGEN",
                  "value": "$4,664.23"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$5,603.92"
                },
                {
                  "label": "THREDZ",
                  "value": "$1,345.77"
                },
                {
                  "label": "UXMOX",
                  "value": "$5,190.05"
                },
                {
                  "label": "APPLICA",
                  "value": "$5,495.28"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$7,489.57"
                },
                {
                  "label": "ZENTURY",
                  "value": "$1,909.36"
                },
                {
                  "label": "ZENCO",
                  "value": "$4,650.22"
                },
                {
                  "label": "COMTRACT",
                  "value": "$6,672.36"
                },
                {
                  "label": "EARGO",
                  "value": "$1,414.24"
                },
                {
                  "label": "ZYPLE",
                  "value": "$5,245.80"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$7,326.89"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$3,276.65"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,473.24"
                },
                {
                  "label": "VERBUS",
                  "value": "$7,005.13"
                },
                {
                  "label": "BULLZONE",
                  "value": "$1,532.36"
                },
                {
                  "label": "ISBOL",
                  "value": "$4,348.92"
                },
                {
                  "label": "DADABASE",
                  "value": "$6,404.02"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$7,125.17"
                },
                {
                  "label": "REALYSIS",
                  "value": "$5,250.18"
                },
                {
                  "label": "QIMONK",
                  "value": "$4,902.37"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$5,115.24"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$7,756.59"
                },
                {
                  "label": "KOZGENE",
                  "value": "$4,234.30"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$1,758.91"
                }
              ]
            },
            {
              "id": "5d74c34ff7a9e2281f482b38",
              "label": "SARASONIC",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$3,649.53"
                },
                {
                  "label": "NETPLAX",
                  "value": "$6,941.69"
                },
                {
                  "label": "CINASTER",
                  "value": "$5,583.44"
                },
                {
                  "label": "ADORNICA",
                  "value": "$3,427.89"
                },
                {
                  "label": "GEEKUS",
                  "value": "$2,285.14"
                },
                {
                  "label": "FARMEX",
                  "value": "$3,133.47"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,000.43"
                },
                {
                  "label": "SATIANCE",
                  "value": "$7,582.80"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$5,286.35"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$1,456.87"
                },
                {
                  "label": "CYTREX",
                  "value": "$5,051.56"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,102.08"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,983.68"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$2,088.39"
                },
                {
                  "label": "CODACT",
                  "value": "$3,625.87"
                },
                {
                  "label": "KEENGEN",
                  "value": "$2,157.95"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$2,413.97"
                },
                {
                  "label": "THREDZ",
                  "value": "$2,569.08"
                },
                {
                  "label": "UXMOX",
                  "value": "$6,750.21"
                },
                {
                  "label": "APPLICA",
                  "value": "$6,293.97"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$1,579.81"
                },
                {
                  "label": "ZENTURY",
                  "value": "$3,130.55"
                },
                {
                  "label": "ZENCO",
                  "value": "$7,154.06"
                },
                {
                  "label": "COMTRACT",
                  "value": "$4,533.33"
                },
                {
                  "label": "EARGO",
                  "value": "$2,165.43"
                },
                {
                  "label": "ZYPLE",
                  "value": "$7,121.97"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$1,612.69"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,224.81"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$7,912.80"
                },
                {
                  "label": "VERBUS",
                  "value": "$7,109.41"
                },
                {
                  "label": "BULLZONE",
                  "value": "$7,344.79"
                },
                {
                  "label": "ISBOL",
                  "value": "$3,422.11"
                },
                {
                  "label": "DADABASE",
                  "value": "$1,766.31"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$3,483.57"
                },
                {
                  "label": "REALYSIS",
                  "value": "$7,458.59"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,305.32"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$2,793.41"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$3,976.49"
                },
                {
                  "label": "KOZGENE",
                  "value": "$1,399.06"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$7,866.69"
                }
              ]
            },
            {
              "id": "5d74c34f74667c20b9f14494",
              "label": "VALPREAL",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$7,974.66"
                },
                {
                  "label": "NETPLAX",
                  "value": "$7,922.69"
                },
                {
                  "label": "CINASTER",
                  "value": "$2,616.39"
                },
                {
                  "label": "ADORNICA",
                  "value": "$7,121.31"
                },
                {
                  "label": "GEEKUS",
                  "value": "$2,294.67"
                },
                {
                  "label": "FARMEX",
                  "value": "$1,715.79"
                },
                {
                  "label": "PIVITOL",
                  "value": "$7,567.28"
                },
                {
                  "label": "SATIANCE",
                  "value": "$1,941.03"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$5,565.99"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$7,660.42"
                },
                {
                  "label": "CYTREX",
                  "value": "$5,044.87"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,610.08"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,358.04"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,114.73"
                },
                {
                  "label": "CODACT",
                  "value": "$6,699.76"
                },
                {
                  "label": "KEENGEN",
                  "value": "$3,275.37"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$4,974.40"
                },
                {
                  "label": "THREDZ",
                  "value": "$5,816.52"
                },
                {
                  "label": "UXMOX",
                  "value": "$1,961.60"
                },
                {
                  "label": "APPLICA",
                  "value": "$3,612.25"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$3,351.37"
                },
                {
                  "label": "ZENTURY",
                  "value": "$5,898.52"
                },
                {
                  "label": "ZENCO",
                  "value": "$4,647.14"
                },
                {
                  "label": "COMTRACT",
                  "value": "$1,993.09"
                },
                {
                  "label": "EARGO",
                  "value": "$3,978.06"
                },
                {
                  "label": "ZYPLE",
                  "value": "$5,645.41"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$4,907.15"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$7,295.36"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$5,724.39"
                },
                {
                  "label": "VERBUS",
                  "value": "$5,825.40"
                },
                {
                  "label": "BULLZONE",
                  "value": "$3,069.41"
                },
                {
                  "label": "ISBOL",
                  "value": "$4,279.48"
                },
                {
                  "label": "DADABASE",
                  "value": "$3,656.91"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$7,647.97"
                },
                {
                  "label": "REALYSIS",
                  "value": "$1,233.13"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,603.28"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$5,759.22"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$5,917.79"
                },
                {
                  "label": "KOZGENE",
                  "value": "$1,328.55"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,711.93"
                }
              ]
            },
            {
              "id": "5d74c34fd3463b10e499d9a1",
              "label": "CORMORAN",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$2,027.26"
                },
                {
                  "label": "NETPLAX",
                  "value": "$1,292.83"
                },
                {
                  "label": "CINASTER",
                  "value": "$4,055.55"
                },
                {
                  "label": "ADORNICA",
                  "value": "$7,814.58"
                },
                {
                  "label": "GEEKUS",
                  "value": "$6,656.02"
                },
                {
                  "label": "FARMEX",
                  "value": "$4,108.66"
                },
                {
                  "label": "PIVITOL",
                  "value": "$7,101.41"
                },
                {
                  "label": "SATIANCE",
                  "value": "$6,084.10"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$5,716.03"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$3,790.25"
                },
                {
                  "label": "CYTREX",
                  "value": "$6,524.33"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,147.75"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$3,549.81"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,869.26"
                },
                {
                  "label": "CODACT",
                  "value": "$3,284.17"
                },
                {
                  "label": "KEENGEN",
                  "value": "$7,927.81"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$6,784.33"
                },
                {
                  "label": "THREDZ",
                  "value": "$2,751.95"
                },
                {
                  "label": "UXMOX",
                  "value": "$6,968.06"
                },
                {
                  "label": "APPLICA",
                  "value": "$7,569.48"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$2,859.22"
                },
                {
                  "label": "ZENTURY",
                  "value": "$5,842.00"
                },
                {
                  "label": "ZENCO",
                  "value": "$2,525.53"
                },
                {
                  "label": "COMTRACT",
                  "value": "$5,861.42"
                },
                {
                  "label": "EARGO",
                  "value": "$6,931.65"
                },
                {
                  "label": "ZYPLE",
                  "value": "$4,373.14"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$4,492.79"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$7,588.67"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$3,874.69"
                },
                {
                  "label": "VERBUS",
                  "value": "$3,790.21"
                },
                {
                  "label": "BULLZONE",
                  "value": "$7,702.67"
                },
                {
                  "label": "ISBOL",
                  "value": "$7,843.99"
                },
                {
                  "label": "DADABASE",
                  "value": "$4,154.14"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$2,113.57"
                },
                {
                  "label": "REALYSIS",
                  "value": "$4,437.94"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,895.03"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$3,497.54"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$2,814.06"
                },
                {
                  "label": "KOZGENE",
                  "value": "$7,799.39"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$5,115.95"
                }
              ]
            },
            {
              "id": "5d74c34fe2e7035c3d2fbdf6",
              "label": "GYNKO",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$1,975.67"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,007.21"
                },
                {
                  "label": "CINASTER",
                  "value": "$2,544.32"
                },
                {
                  "label": "ADORNICA",
                  "value": "$2,769.71"
                },
                {
                  "label": "GEEKUS",
                  "value": "$7,649.34"
                },
                {
                  "label": "FARMEX",
                  "value": "$3,067.40"
                },
                {
                  "label": "PIVITOL",
                  "value": "$6,847.16"
                },
                {
                  "label": "SATIANCE",
                  "value": "$6,560.84"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$4,729.47"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$2,109.09"
                },
                {
                  "label": "CYTREX",
                  "value": "$4,666.46"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$4,295.58"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$2,989.77"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$4,634.11"
                },
                {
                  "label": "CODACT",
                  "value": "$7,345.04"
                },
                {
                  "label": "KEENGEN",
                  "value": "$2,426.40"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$6,673.30"
                },
                {
                  "label": "THREDZ",
                  "value": "$4,428.46"
                },
                {
                  "label": "UXMOX",
                  "value": "$4,293.14"
                },
                {
                  "label": "APPLICA",
                  "value": "$2,306.23"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$4,165.10"
                },
                {
                  "label": "ZENTURY",
                  "value": "$1,439.42"
                },
                {
                  "label": "ZENCO",
                  "value": "$7,798.09"
                },
                {
                  "label": "COMTRACT",
                  "value": "$1,317.49"
                },
                {
                  "label": "EARGO",
                  "value": "$1,185.69"
                },
                {
                  "label": "ZYPLE",
                  "value": "$3,509.68"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$3,985.76"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$5,980.83"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$7,532.40"
                },
                {
                  "label": "VERBUS",
                  "value": "$7,296.81"
                },
                {
                  "label": "BULLZONE",
                  "value": "$4,359.09"
                },
                {
                  "label": "ISBOL",
                  "value": "$7,912.58"
                },
                {
                  "label": "DADABASE",
                  "value": "$6,714.65"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$1,399.02"
                },
                {
                  "label": "REALYSIS",
                  "value": "$7,591.52"
                },
                {
                  "label": "QIMONK",
                  "value": "$6,782.91"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$2,111.12"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$2,283.28"
                },
                {
                  "label": "KOZGENE",
                  "value": "$4,284.67"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$7,403.84"
                }
              ]
            },
            {
              "id": "5d74c34f5d4995ab1532c76a",
              "label": "LUXURIA",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$6,831.95"
                },
                {
                  "label": "NETPLAX",
                  "value": "$6,506.70"
                },
                {
                  "label": "CINASTER",
                  "value": "$1,171.71"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,739.88"
                },
                {
                  "label": "GEEKUS",
                  "value": "$6,440.66"
                },
                {
                  "label": "FARMEX",
                  "value": "$6,825.68"
                },
                {
                  "label": "PIVITOL",
                  "value": "$3,173.87"
                },
                {
                  "label": "SATIANCE",
                  "value": "$2,910.81"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$4,454.33"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$4,582.86"
                },
                {
                  "label": "CYTREX",
                  "value": "$3,140.60"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$1,933.20"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$3,394.54"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$1,574.76"
                },
                {
                  "label": "CODACT",
                  "value": "$1,571.76"
                },
                {
                  "label": "KEENGEN",
                  "value": "$2,113.17"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$7,794.54"
                },
                {
                  "label": "THREDZ",
                  "value": "$4,695.53"
                },
                {
                  "label": "UXMOX",
                  "value": "$7,783.56"
                },
                {
                  "label": "APPLICA",
                  "value": "$4,138.42"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$4,045.11"
                },
                {
                  "label": "ZENTURY",
                  "value": "$1,963.37"
                },
                {
                  "label": "ZENCO",
                  "value": "$7,645.87"
                },
                {
                  "label": "COMTRACT",
                  "value": "$3,633.39"
                },
                {
                  "label": "EARGO",
                  "value": "$6,635.59"
                },
                {
                  "label": "ZYPLE",
                  "value": "$1,766.11"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$7,083.89"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,580.40"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,802.14"
                },
                {
                  "label": "VERBUS",
                  "value": "$6,525.85"
                },
                {
                  "label": "BULLZONE",
                  "value": "$4,804.87"
                },
                {
                  "label": "ISBOL",
                  "value": "$1,852.41"
                },
                {
                  "label": "DADABASE",
                  "value": "$6,894.07"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$2,651.46"
                },
                {
                  "label": "REALYSIS",
                  "value": "$2,022.92"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,770.35"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$7,356.19"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$3,999.74"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,811.64"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$5,365.27"
                }
              ]
            },
            {
              "id": "5d74c34ff7e9ce3101eb2aa9",
              "label": "ECOSYS",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$4,859.04"
                },
                {
                  "label": "NETPLAX",
                  "value": "$3,947.49"
                },
                {
                  "label": "CINASTER",
                  "value": "$3,172.88"
                },
                {
                  "label": "ADORNICA",
                  "value": "$4,406.85"
                },
                {
                  "label": "GEEKUS",
                  "value": "$4,714.91"
                },
                {
                  "label": "FARMEX",
                  "value": "$4,088.00"
                },
                {
                  "label": "PIVITOL",
                  "value": "$6,302.08"
                },
                {
                  "label": "SATIANCE",
                  "value": "$6,111.76"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$3,864.61"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$3,481.02"
                },
                {
                  "label": "CYTREX",
                  "value": "$1,610.97"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$5,365.80"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$6,094.44"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$7,362.19"
                },
                {
                  "label": "CODACT",
                  "value": "$5,873.98"
                },
                {
                  "label": "KEENGEN",
                  "value": "$5,581.41"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$1,146.14"
                },
                {
                  "label": "THREDZ",
                  "value": "$4,706.87"
                },
                {
                  "label": "UXMOX",
                  "value": "$5,119.63"
                },
                {
                  "label": "APPLICA",
                  "value": "$4,474.35"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$2,820.55"
                },
                {
                  "label": "ZENTURY",
                  "value": "$5,101.49"
                },
                {
                  "label": "ZENCO",
                  "value": "$2,678.40"
                },
                {
                  "label": "COMTRACT",
                  "value": "$7,544.56"
                },
                {
                  "label": "EARGO",
                  "value": "$3,323.84"
                },
                {
                  "label": "ZYPLE",
                  "value": "$7,599.06"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$3,685.66"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$5,154.96"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$5,738.35"
                },
                {
                  "label": "VERBUS",
                  "value": "$2,673.06"
                },
                {
                  "label": "BULLZONE",
                  "value": "$5,517.03"
                },
                {
                  "label": "ISBOL",
                  "value": "$3,225.19"
                },
                {
                  "label": "DADABASE",
                  "value": "$6,466.89"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$2,006.09"
                },
                {
                  "label": "REALYSIS",
                  "value": "$5,159.97"
                },
                {
                  "label": "QIMONK",
                  "value": "$7,871.77"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$1,245.85"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$3,983.18"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,054.17"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$3,390.04"
                }
              ]
            },
            {
              "id": "5d74c34f692d3b85e313f1ac",
              "label": "GEEKUS",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$2,868.57"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,056.67"
                },
                {
                  "label": "CINASTER",
                  "value": "$7,153.30"
                },
                {
                  "label": "ADORNICA",
                  "value": "$6,619.89"
                },
                {
                  "label": "GEEKUS",
                  "value": "$5,662.48"
                },
                {
                  "label": "FARMEX",
                  "value": "$3,939.08"
                },
                {
                  "label": "PIVITOL",
                  "value": "$5,802.92"
                },
                {
                  "label": "SATIANCE",
                  "value": "$6,127.56"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$1,686.29"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$2,466.08"
                },
                {
                  "label": "CYTREX",
                  "value": "$3,962.86"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,719.20"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$6,356.67"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$4,626.36"
                },
                {
                  "label": "CODACT",
                  "value": "$3,062.78"
                },
                {
                  "label": "KEENGEN",
                  "value": "$5,189.98"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$1,676.71"
                },
                {
                  "label": "THREDZ",
                  "value": "$3,936.66"
                },
                {
                  "label": "UXMOX",
                  "value": "$2,141.20"
                },
                {
                  "label": "APPLICA",
                  "value": "$7,361.57"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$7,868.78"
                },
                {
                  "label": "ZENTURY",
                  "value": "$2,360.28"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,324.30"
                },
                {
                  "label": "COMTRACT",
                  "value": "$1,675.12"
                },
                {
                  "label": "EARGO",
                  "value": "$6,980.34"
                },
                {
                  "label": "ZYPLE",
                  "value": "$4,952.74"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$6,932.67"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$2,156.86"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$1,769.01"
                },
                {
                  "label": "VERBUS",
                  "value": "$5,968.70"
                },
                {
                  "label": "BULLZONE",
                  "value": "$6,449.07"
                },
                {
                  "label": "ISBOL",
                  "value": "$3,361.35"
                },
                {
                  "label": "DADABASE",
                  "value": "$3,843.32"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$2,234.13"
                },
                {
                  "label": "REALYSIS",
                  "value": "$6,328.65"
                },
                {
                  "label": "QIMONK",
                  "value": "$4,694.22"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$4,515.33"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$1,289.68"
                },
                {
                  "label": "KOZGENE",
                  "value": "$4,896.89"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$3,973.98"
                }
              ]
            }
          ]
        },
        {
          "id": "5d74c34f2bf37ef4db37b1d6",
          "label": "XYLAR",
          "subsidiaries": [
            {
              "id": "5d74c34fef0b1a3693b8cc59",
              "label": "MUSANPOLY",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$4,661.63"
                },
                {
                  "label": "NETPLAX",
                  "value": "$7,294.76"
                },
                {
                  "label": "CINASTER",
                  "value": "$3,032.61"
                },
                {
                  "label": "ADORNICA",
                  "value": "$3,675.34"
                },
                {
                  "label": "GEEKUS",
                  "value": "$2,276.82"
                },
                {
                  "label": "FARMEX",
                  "value": "$7,207.87"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,774.18"
                },
                {
                  "label": "SATIANCE",
                  "value": "$7,303.94"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$7,539.09"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$4,376.40"
                },
                {
                  "label": "CYTREX",
                  "value": "$5,803.54"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$3,844.66"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$3,016.46"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$4,927.92"
                },
                {
                  "label": "CODACT",
                  "value": "$6,056.75"
                },
                {
                  "label": "KEENGEN",
                  "value": "$5,220.68"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$1,217.50"
                },
                {
                  "label": "THREDZ",
                  "value": "$6,352.76"
                },
                {
                  "label": "UXMOX",
                  "value": "$2,352.43"
                },
                {
                  "label": "APPLICA",
                  "value": "$7,227.39"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$1,391.24"
                },
                {
                  "label": "ZENTURY",
                  "value": "$4,975.98"
                },
                {
                  "label": "ZENCO",
                  "value": "$5,976.35"
                },
                {
                  "label": "COMTRACT",
                  "value": "$1,752.27"
                },
                {
                  "label": "EARGO",
                  "value": "$3,156.40"
                },
                {
                  "label": "ZYPLE",
                  "value": "$5,284.06"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$1,793.37"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$5,796.37"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$3,178.16"
                },
                {
                  "label": "VERBUS",
                  "value": "$6,388.59"
                },
                {
                  "label": "BULLZONE",
                  "value": "$1,993.79"
                },
                {
                  "label": "ISBOL",
                  "value": "$5,087.19"
                },
                {
                  "label": "DADABASE",
                  "value": "$5,164.71"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$5,222.73"
                },
                {
                  "label": "REALYSIS",
                  "value": "$1,081.36"
                },
                {
                  "label": "QIMONK",
                  "value": "$5,869.37"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$7,752.06"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$4,533.09"
                },
                {
                  "label": "KOZGENE",
                  "value": "$4,839.76"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,130.50"
                }
              ]
            },
            {
              "id": "5d74c34f33aad411c14e3633",
              "label": "OPTICON",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$3,125.06"
                },
                {
                  "label": "NETPLAX",
                  "value": "$7,491.13"
                },
                {
                  "label": "CINASTER",
                  "value": "$3,942.86"
                },
                {
                  "label": "ADORNICA",
                  "value": "$7,443.72"
                },
                {
                  "label": "GEEKUS",
                  "value": "$5,879.33"
                },
                {
                  "label": "FARMEX",
                  "value": "$4,171.43"
                },
                {
                  "label": "PIVITOL",
                  "value": "$6,458.59"
                },
                {
                  "label": "SATIANCE",
                  "value": "$5,258.06"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$2,992.65"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$6,921.68"
                },
                {
                  "label": "CYTREX",
                  "value": "$1,661.44"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$3,976.79"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$7,916.80"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$4,607.79"
                },
                {
                  "label": "CODACT",
                  "value": "$4,487.65"
                },
                {
                  "label": "KEENGEN",
                  "value": "$1,366.25"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$6,115.86"
                },
                {
                  "label": "THREDZ",
                  "value": "$6,468.46"
                },
                {
                  "label": "UXMOX",
                  "value": "$3,530.42"
                },
                {
                  "label": "APPLICA",
                  "value": "$7,332.65"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$6,343.38"
                },
                {
                  "label": "ZENTURY",
                  "value": "$2,320.76"
                },
                {
                  "label": "ZENCO",
                  "value": "$2,242.37"
                },
                {
                  "label": "COMTRACT",
                  "value": "$4,427.88"
                },
                {
                  "label": "EARGO",
                  "value": "$5,930.05"
                },
                {
                  "label": "ZYPLE",
                  "value": "$1,803.03"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$5,784.88"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$1,543.71"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$7,763.25"
                },
                {
                  "label": "VERBUS",
                  "value": "$3,536.79"
                },
                {
                  "label": "BULLZONE",
                  "value": "$6,706.42"
                },
                {
                  "label": "ISBOL",
                  "value": "$4,678.23"
                },
                {
                  "label": "DADABASE",
                  "value": "$1,278.56"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$6,203.24"
                },
                {
                  "label": "REALYSIS",
                  "value": "$3,452.86"
                },
                {
                  "label": "QIMONK",
                  "value": "$3,234.30"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$1,480.58"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$7,915.65"
                },
                {
                  "label": "KOZGENE",
                  "value": "$7,546.38"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,073.48"
                }
              ]
            },
            {
              "id": "5d74c34fb697bc2f819947bf",
              "label": "EXOSPACE",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$4,295.87"
                },
                {
                  "label": "NETPLAX",
                  "value": "$2,844.64"
                },
                {
                  "label": "CINASTER",
                  "value": "$5,982.40"
                },
                {
                  "label": "ADORNICA",
                  "value": "$6,865.79"
                },
                {
                  "label": "GEEKUS",
                  "value": "$5,183.97"
                },
                {
                  "label": "FARMEX",
                  "value": "$3,914.45"
                },
                {
                  "label": "PIVITOL",
                  "value": "$7,066.22"
                },
                {
                  "label": "SATIANCE",
                  "value": "$1,823.04"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$2,798.47"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$3,505.98"
                },
                {
                  "label": "CYTREX",
                  "value": "$7,481.17"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$3,779.36"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,010.47"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$4,086.32"
                },
                {
                  "label": "CODACT",
                  "value": "$2,115.50"
                },
                {
                  "label": "KEENGEN",
                  "value": "$6,279.02"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$4,237.89"
                },
                {
                  "label": "THREDZ",
                  "value": "$5,204.21"
                },
                {
                  "label": "UXMOX",
                  "value": "$2,756.19"
                },
                {
                  "label": "APPLICA",
                  "value": "$7,290.85"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$6,503.51"
                },
                {
                  "label": "ZENTURY",
                  "value": "$6,534.37"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,260.87"
                },
                {
                  "label": "COMTRACT",
                  "value": "$1,358.99"
                },
                {
                  "label": "EARGO",
                  "value": "$2,912.23"
                },
                {
                  "label": "ZYPLE",
                  "value": "$7,821.24"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$6,764.54"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$4,379.36"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$4,777.83"
                },
                {
                  "label": "VERBUS",
                  "value": "$7,121.67"
                },
                {
                  "label": "BULLZONE",
                  "value": "$1,810.52"
                },
                {
                  "label": "ISBOL",
                  "value": "$7,173.29"
                },
                {
                  "label": "DADABASE",
                  "value": "$5,355.60"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$7,454.39"
                },
                {
                  "label": "REALYSIS",
                  "value": "$3,005.08"
                },
                {
                  "label": "QIMONK",
                  "value": "$1,462.88"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$2,660.76"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$3,529.20"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,532.64"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$3,466.98"
                }
              ]
            },
            {
              "id": "5d74c34f30470ed379fdedc5",
              "label": "BIOLIVE",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$1,868.76"
                },
                {
                  "label": "NETPLAX",
                  "value": "$7,704.92"
                },
                {
                  "label": "CINASTER",
                  "value": "$2,568.21"
                },
                {
                  "label": "ADORNICA",
                  "value": "$3,176.70"
                },
                {
                  "label": "GEEKUS",
                  "value": "$6,145.17"
                },
                {
                  "label": "FARMEX",
                  "value": "$4,825.84"
                },
                {
                  "label": "PIVITOL",
                  "value": "$3,241.44"
                },
                {
                  "label": "SATIANCE",
                  "value": "$3,141.76"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$2,408.95"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$5,280.94"
                },
                {
                  "label": "CYTREX",
                  "value": "$5,315.35"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,438.50"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$6,800.05"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,044.12"
                },
                {
                  "label": "CODACT",
                  "value": "$6,631.30"
                },
                {
                  "label": "KEENGEN",
                  "value": "$1,279.76"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$1,265.28"
                },
                {
                  "label": "THREDZ",
                  "value": "$3,627.36"
                },
                {
                  "label": "UXMOX",
                  "value": "$1,596.68"
                },
                {
                  "label": "APPLICA",
                  "value": "$2,166.31"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$2,110.16"
                },
                {
                  "label": "ZENTURY",
                  "value": "$7,722.13"
                },
                {
                  "label": "ZENCO",
                  "value": "$1,961.41"
                },
                {
                  "label": "COMTRACT",
                  "value": "$7,731.71"
                },
                {
                  "label": "EARGO",
                  "value": "$6,098.95"
                },
                {
                  "label": "ZYPLE",
                  "value": "$2,517.67"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$7,716.92"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$4,640.64"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$7,028.39"
                },
                {
                  "label": "VERBUS",
                  "value": "$3,450.65"
                },
                {
                  "label": "BULLZONE",
                  "value": "$7,715.06"
                },
                {
                  "label": "ISBOL",
                  "value": "$2,647.04"
                },
                {
                  "label": "DADABASE",
                  "value": "$4,261.87"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$3,951.31"
                },
                {
                  "label": "REALYSIS",
                  "value": "$5,063.02"
                },
                {
                  "label": "QIMONK",
                  "value": "$7,517.68"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$7,420.70"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$4,521.12"
                },
                {
                  "label": "KOZGENE",
                  "value": "$3,643.82"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$7,616.26"
                }
              ]
            }
          ]
        },
        {
          "id": "5d74c34fb5bbd568f77e681d",
          "label": "BLUEGRAIN",
          "subsidiaries": [
            {
              "id": "5d74c34f52b7709109d00c28",
              "label": "EVENTAGE",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$4,652.74"
                },
                {
                  "label": "NETPLAX",
                  "value": "$7,939.49"
                },
                {
                  "label": "CINASTER",
                  "value": "$4,043.42"
                },
                {
                  "label": "ADORNICA",
                  "value": "$5,156.39"
                },
                {
                  "label": "GEEKUS",
                  "value": "$7,405.91"
                },
                {
                  "label": "FARMEX",
                  "value": "$6,843.98"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,649.77"
                },
                {
                  "label": "SATIANCE",
                  "value": "$5,881.12"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$2,413.71"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$4,986.78"
                },
                {
                  "label": "CYTREX",
                  "value": "$4,296.41"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$3,687.03"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$6,853.30"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$6,839.86"
                },
                {
                  "label": "CODACT",
                  "value": "$5,270.93"
                },
                {
                  "label": "KEENGEN",
                  "value": "$3,531.61"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$5,861.95"
                },
                {
                  "label": "THREDZ",
                  "value": "$6,394.11"
                },
                {
                  "label": "UXMOX",
                  "value": "$4,058.43"
                },
                {
                  "label": "APPLICA",
                  "value": "$6,297.64"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$7,489.94"
                },
                {
                  "label": "ZENTURY",
                  "value": "$2,352.98"
                },
                {
                  "label": "ZENCO",
                  "value": "$3,280.28"
                },
                {
                  "label": "COMTRACT",
                  "value": "$5,102.67"
                },
                {
                  "label": "EARGO",
                  "value": "$4,164.28"
                },
                {
                  "label": "ZYPLE",
                  "value": "$6,219.97"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$3,818.67"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$1,634.13"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$6,540.16"
                },
                {
                  "label": "VERBUS",
                  "value": "$5,699.63"
                },
                {
                  "label": "BULLZONE",
                  "value": "$1,841.28"
                },
                {
                  "label": "ISBOL",
                  "value": "$7,898.22"
                },
                {
                  "label": "DADABASE",
                  "value": "$3,433.60"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$4,522.89"
                },
                {
                  "label": "REALYSIS",
                  "value": "$5,596.39"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,187.51"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$1,049.89"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$7,455.41"
                },
                {
                  "label": "KOZGENE",
                  "value": "$3,549.49"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,485.58"
                }
              ]
            },
            {
              "id": "5d74c34f9db1aee280fe5355",
              "label": "ENTALITY",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$2,000.74"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,736.78"
                },
                {
                  "label": "CINASTER",
                  "value": "$7,519.64"
                },
                {
                  "label": "ADORNICA",
                  "value": "$2,434.00"
                },
                {
                  "label": "GEEKUS",
                  "value": "$2,766.58"
                },
                {
                  "label": "FARMEX",
                  "value": "$6,003.85"
                },
                {
                  "label": "PIVITOL",
                  "value": "$5,221.29"
                },
                {
                  "label": "SATIANCE",
                  "value": "$3,400.72"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$6,645.92"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$3,572.78"
                },
                {
                  "label": "CYTREX",
                  "value": "$7,666.61"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$4,129.44"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$1,645.07"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$7,993.01"
                },
                {
                  "label": "CODACT",
                  "value": "$7,833.76"
                },
                {
                  "label": "KEENGEN",
                  "value": "$4,444.57"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$4,552.91"
                },
                {
                  "label": "THREDZ",
                  "value": "$7,580.60"
                },
                {
                  "label": "UXMOX",
                  "value": "$2,776.06"
                },
                {
                  "label": "APPLICA",
                  "value": "$5,025.98"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$5,320.39"
                },
                {
                  "label": "ZENTURY",
                  "value": "$7,073.78"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,318.40"
                },
                {
                  "label": "COMTRACT",
                  "value": "$6,935.44"
                },
                {
                  "label": "EARGO",
                  "value": "$2,275.68"
                },
                {
                  "label": "ZYPLE",
                  "value": "$4,123.67"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$1,200.05"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$3,872.60"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$3,782.78"
                },
                {
                  "label": "VERBUS",
                  "value": "$6,480.53"
                },
                {
                  "label": "BULLZONE",
                  "value": "$5,745.39"
                },
                {
                  "label": "ISBOL",
                  "value": "$7,467.48"
                },
                {
                  "label": "DADABASE",
                  "value": "$5,914.07"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$3,792.37"
                },
                {
                  "label": "REALYSIS",
                  "value": "$4,101.34"
                },
                {
                  "label": "QIMONK",
                  "value": "$1,664.65"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$6,645.84"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$1,250.22"
                },
                {
                  "label": "KOZGENE",
                  "value": "$7,137.42"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$6,952.14"
                }
              ]
            },
            {
              "id": "5d74c34fb12cddd1914cb23d",
              "label": "EVEREST",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$1,366.71"
                },
                {
                  "label": "NETPLAX",
                  "value": "$6,177.51"
                },
                {
                  "label": "CINASTER",
                  "value": "$6,966.58"
                },
                {
                  "label": "ADORNICA",
                  "value": "$5,592.88"
                },
                {
                  "label": "GEEKUS",
                  "value": "$1,459.83"
                },
                {
                  "label": "FARMEX",
                  "value": "$2,575.52"
                },
                {
                  "label": "PIVITOL",
                  "value": "$3,474.49"
                },
                {
                  "label": "SATIANCE",
                  "value": "$7,848.78"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$6,391.65"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$1,007.53"
                },
                {
                  "label": "CYTREX",
                  "value": "$7,938.26"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$5,578.36"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$6,209.40"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$2,970.26"
                },
                {
                  "label": "CODACT",
                  "value": "$1,475.64"
                },
                {
                  "label": "KEENGEN",
                  "value": "$6,493.09"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$1,621.59"
                },
                {
                  "label": "THREDZ",
                  "value": "$6,415.27"
                },
                {
                  "label": "UXMOX",
                  "value": "$6,615.01"
                },
                {
                  "label": "APPLICA",
                  "value": "$5,634.29"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$7,653.38"
                },
                {
                  "label": "ZENTURY",
                  "value": "$4,865.14"
                },
                {
                  "label": "ZENCO",
                  "value": "$2,584.26"
                },
                {
                  "label": "COMTRACT",
                  "value": "$1,200.27"
                },
                {
                  "label": "EARGO",
                  "value": "$1,881.78"
                },
                {
                  "label": "ZYPLE",
                  "value": "$1,122.12"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$2,690.98"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$3,073.41"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,132.60"
                },
                {
                  "label": "VERBUS",
                  "value": "$5,230.02"
                },
                {
                  "label": "BULLZONE",
                  "value": "$6,773.18"
                },
                {
                  "label": "ISBOL",
                  "value": "$3,209.48"
                },
                {
                  "label": "DADABASE",
                  "value": "$2,765.82"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$1,323.60"
                },
                {
                  "label": "REALYSIS",
                  "value": "$7,453.59"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,694.04"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$4,293.64"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$3,751.76"
                },
                {
                  "label": "KOZGENE",
                  "value": "$3,510.99"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$6,219.69"
                }
              ]
            },
            {
              "id": "5d74c34f563e322777b68897",
              "label": "MACRONAUT",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$6,763.02"
                },
                {
                  "label": "NETPLAX",
                  "value": "$6,281.28"
                },
                {
                  "label": "CINASTER",
                  "value": "$1,198.60"
                },
                {
                  "label": "ADORNICA",
                  "value": "$6,415.69"
                },
                {
                  "label": "GEEKUS",
                  "value": "$7,863.65"
                },
                {
                  "label": "FARMEX",
                  "value": "$6,599.03"
                },
                {
                  "label": "PIVITOL",
                  "value": "$4,146.67"
                },
                {
                  "label": "SATIANCE",
                  "value": "$2,990.82"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$4,725.03"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$1,191.60"
                },
                {
                  "label": "CYTREX",
                  "value": "$2,460.28"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,204.40"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$7,389.42"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$7,143.01"
                },
                {
                  "label": "CODACT",
                  "value": "$6,958.76"
                },
                {
                  "label": "KEENGEN",
                  "value": "$2,689.63"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$6,943.08"
                },
                {
                  "label": "THREDZ",
                  "value": "$7,529.81"
                },
                {
                  "label": "UXMOX",
                  "value": "$2,636.07"
                },
                {
                  "label": "APPLICA",
                  "value": "$7,356.52"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$3,875.11"
                },
                {
                  "label": "ZENTURY",
                  "value": "$6,978.62"
                },
                {
                  "label": "ZENCO",
                  "value": "$1,553.52"
                },
                {
                  "label": "COMTRACT",
                  "value": "$1,570.83"
                },
                {
                  "label": "EARGO",
                  "value": "$2,645.40"
                },
                {
                  "label": "ZYPLE",
                  "value": "$2,086.28"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$6,006.01"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$2,858.62"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$3,004.27"
                },
                {
                  "label": "VERBUS",
                  "value": "$1,736.57"
                },
                {
                  "label": "BULLZONE",
                  "value": "$3,638.32"
                },
                {
                  "label": "ISBOL",
                  "value": "$6,609.14"
                },
                {
                  "label": "DADABASE",
                  "value": "$6,290.23"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$3,083.25"
                },
                {
                  "label": "REALYSIS",
                  "value": "$1,903.91"
                },
                {
                  "label": "QIMONK",
                  "value": "$4,637.72"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$6,018.94"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$1,842.67"
                },
                {
                  "label": "KOZGENE",
                  "value": "$4,485.95"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,839.82"
                }
              ]
            },
            {
              "id": "5d74c34f43244e65b8635645",
              "label": "ZILLACOM",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$5,423.57"
                },
                {
                  "label": "NETPLAX",
                  "value": "$1,886.31"
                },
                {
                  "label": "CINASTER",
                  "value": "$6,918.92"
                },
                {
                  "label": "ADORNICA",
                  "value": "$4,680.50"
                },
                {
                  "label": "GEEKUS",
                  "value": "$5,106.32"
                },
                {
                  "label": "FARMEX",
                  "value": "$3,365.73"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,925.72"
                },
                {
                  "label": "SATIANCE",
                  "value": "$1,150.36"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$7,753.27"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$4,176.59"
                },
                {
                  "label": "CYTREX",
                  "value": "$4,751.99"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$6,012.23"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,105.78"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,717.12"
                },
                {
                  "label": "CODACT",
                  "value": "$3,836.08"
                },
                {
                  "label": "KEENGEN",
                  "value": "$7,912.49"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$6,360.63"
                },
                {
                  "label": "THREDZ",
                  "value": "$4,191.73"
                },
                {
                  "label": "UXMOX",
                  "value": "$1,457.75"
                },
                {
                  "label": "APPLICA",
                  "value": "$7,058.45"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$4,832.63"
                },
                {
                  "label": "ZENTURY",
                  "value": "$3,928.72"
                },
                {
                  "label": "ZENCO",
                  "value": "$5,707.59"
                },
                {
                  "label": "COMTRACT",
                  "value": "$7,354.46"
                },
                {
                  "label": "EARGO",
                  "value": "$7,769.89"
                },
                {
                  "label": "ZYPLE",
                  "value": "$5,604.86"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$2,845.18"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$7,195.60"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$3,700.56"
                },
                {
                  "label": "VERBUS",
                  "value": "$6,833.69"
                },
                {
                  "label": "BULLZONE",
                  "value": "$4,383.86"
                },
                {
                  "label": "ISBOL",
                  "value": "$6,497.12"
                },
                {
                  "label": "DADABASE",
                  "value": "$7,221.15"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$3,581.22"
                },
                {
                  "label": "REALYSIS",
                  "value": "$6,867.85"
                },
                {
                  "label": "QIMONK",
                  "value": "$7,509.70"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$4,901.93"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$2,346.87"
                },
                {
                  "label": "KOZGENE",
                  "value": "$6,199.59"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$5,847.41"
                }
              ]
            },
            {
              "id": "5d74c34fb02c5164ad97786a",
              "label": "RODEOLOGY",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$1,819.84"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,297.90"
                },
                {
                  "label": "CINASTER",
                  "value": "$3,005.17"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,495.53"
                },
                {
                  "label": "GEEKUS",
                  "value": "$4,425.85"
                },
                {
                  "label": "FARMEX",
                  "value": "$6,295.61"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,447.35"
                },
                {
                  "label": "SATIANCE",
                  "value": "$5,011.88"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$6,482.77"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$6,738.53"
                },
                {
                  "label": "CYTREX",
                  "value": "$5,328.90"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$3,879.79"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$2,006.65"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$6,124.07"
                },
                {
                  "label": "CODACT",
                  "value": "$3,263.22"
                },
                {
                  "label": "KEENGEN",
                  "value": "$2,132.28"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$3,860.37"
                },
                {
                  "label": "THREDZ",
                  "value": "$7,220.52"
                },
                {
                  "label": "UXMOX",
                  "value": "$2,525.62"
                },
                {
                  "label": "APPLICA",
                  "value": "$5,346.65"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$2,980.81"
                },
                {
                  "label": "ZENTURY",
                  "value": "$7,065.76"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,053.22"
                },
                {
                  "label": "COMTRACT",
                  "value": "$4,022.29"
                },
                {
                  "label": "EARGO",
                  "value": "$4,793.75"
                },
                {
                  "label": "ZYPLE",
                  "value": "$2,242.57"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$4,055.77"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$7,817.57"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$4,588.49"
                },
                {
                  "label": "VERBUS",
                  "value": "$6,405.06"
                },
                {
                  "label": "BULLZONE",
                  "value": "$6,451.73"
                },
                {
                  "label": "ISBOL",
                  "value": "$2,212.92"
                },
                {
                  "label": "DADABASE",
                  "value": "$6,582.98"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$2,653.10"
                },
                {
                  "label": "REALYSIS",
                  "value": "$4,732.16"
                },
                {
                  "label": "QIMONK",
                  "value": "$3,343.86"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$6,663.65"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$2,290.78"
                },
                {
                  "label": "KOZGENE",
                  "value": "$6,813.10"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$1,699.01"
                }
              ]
            },
            {
              "id": "5d74c34f3db75fa88ae7ac48",
              "label": "HOTCAKES",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$2,796.43"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,734.88"
                },
                {
                  "label": "CINASTER",
                  "value": "$4,364.37"
                },
                {
                  "label": "ADORNICA",
                  "value": "$4,445.26"
                },
                {
                  "label": "GEEKUS",
                  "value": "$3,721.47"
                },
                {
                  "label": "FARMEX",
                  "value": "$2,010.17"
                },
                {
                  "label": "PIVITOL",
                  "value": "$7,969.20"
                },
                {
                  "label": "SATIANCE",
                  "value": "$2,709.04"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$3,585.82"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$6,755.58"
                },
                {
                  "label": "CYTREX",
                  "value": "$6,053.50"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,200.47"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,174.64"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$7,960.84"
                },
                {
                  "label": "CODACT",
                  "value": "$7,008.78"
                },
                {
                  "label": "KEENGEN",
                  "value": "$6,039.25"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$4,252.00"
                },
                {
                  "label": "THREDZ",
                  "value": "$2,361.25"
                },
                {
                  "label": "UXMOX",
                  "value": "$4,233.17"
                },
                {
                  "label": "APPLICA",
                  "value": "$1,361.93"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$5,388.43"
                },
                {
                  "label": "ZENTURY",
                  "value": "$2,251.63"
                },
                {
                  "label": "ZENCO",
                  "value": "$5,969.15"
                },
                {
                  "label": "COMTRACT",
                  "value": "$7,614.14"
                },
                {
                  "label": "EARGO",
                  "value": "$3,330.68"
                },
                {
                  "label": "ZYPLE",
                  "value": "$4,489.67"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$6,334.35"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$5,270.58"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$5,243.73"
                },
                {
                  "label": "VERBUS",
                  "value": "$7,566.73"
                },
                {
                  "label": "BULLZONE",
                  "value": "$3,078.79"
                },
                {
                  "label": "ISBOL",
                  "value": "$7,706.45"
                },
                {
                  "label": "DADABASE",
                  "value": "$4,054.00"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$6,321.65"
                },
                {
                  "label": "REALYSIS",
                  "value": "$7,335.41"
                },
                {
                  "label": "QIMONK",
                  "value": "$6,099.94"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$6,936.40"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$6,997.98"
                },
                {
                  "label": "KOZGENE",
                  "value": "$6,956.26"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$2,855.52"
                }
              ]
            },
            {
              "id": "5d74c34fa8650f2c37b9a515",
              "label": "GEEKFARM",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$1,618.91"
                },
                {
                  "label": "NETPLAX",
                  "value": "$2,408.11"
                },
                {
                  "label": "CINASTER",
                  "value": "$7,980.66"
                },
                {
                  "label": "ADORNICA",
                  "value": "$4,695.64"
                },
                {
                  "label": "GEEKUS",
                  "value": "$6,772.55"
                },
                {
                  "label": "FARMEX",
                  "value": "$1,318.63"
                },
                {
                  "label": "PIVITOL",
                  "value": "$4,695.38"
                },
                {
                  "label": "SATIANCE",
                  "value": "$1,166.01"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$7,754.90"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$1,306.66"
                },
                {
                  "label": "CYTREX",
                  "value": "$2,275.87"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$1,899.75"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$6,299.59"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$4,733.72"
                },
                {
                  "label": "CODACT",
                  "value": "$6,756.00"
                },
                {
                  "label": "KEENGEN",
                  "value": "$2,483.78"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$6,498.79"
                },
                {
                  "label": "THREDZ",
                  "value": "$2,539.35"
                },
                {
                  "label": "UXMOX",
                  "value": "$5,611.08"
                },
                {
                  "label": "APPLICA",
                  "value": "$6,250.04"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$2,691.93"
                },
                {
                  "label": "ZENTURY",
                  "value": "$3,023.44"
                },
                {
                  "label": "ZENCO",
                  "value": "$1,476.10"
                },
                {
                  "label": "COMTRACT",
                  "value": "$4,457.58"
                },
                {
                  "label": "EARGO",
                  "value": "$5,096.26"
                },
                {
                  "label": "ZYPLE",
                  "value": "$4,746.49"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$7,462.17"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$7,589.94"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$6,994.29"
                },
                {
                  "label": "VERBUS",
                  "value": "$5,660.02"
                },
                {
                  "label": "BULLZONE",
                  "value": "$2,368.52"
                },
                {
                  "label": "ISBOL",
                  "value": "$2,491.88"
                },
                {
                  "label": "DADABASE",
                  "value": "$4,809.95"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$4,672.66"
                },
                {
                  "label": "REALYSIS",
                  "value": "$7,338.92"
                },
                {
                  "label": "QIMONK",
                  "value": "$5,659.92"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$5,662.78"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$1,864.70"
                },
                {
                  "label": "KOZGENE",
                  "value": "$7,010.14"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$6,926.23"
                }
              ]
            }
          ]
        },
        {
          "id": "5d74c34f3b8c2f3d63f55c57",
          "label": "SLAMBDA",
          "subsidiaries": [
            {
              "id": "5d74c34f26b6ef0e4ae26caa",
              "label": "SLOGANAUT",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$5,128.89"
                },
                {
                  "label": "NETPLAX",
                  "value": "$6,423.01"
                },
                {
                  "label": "CINASTER",
                  "value": "$4,306.75"
                },
                {
                  "label": "ADORNICA",
                  "value": "$4,212.59"
                },
                {
                  "label": "GEEKUS",
                  "value": "$3,832.34"
                },
                {
                  "label": "FARMEX",
                  "value": "$7,008.16"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,597.58"
                },
                {
                  "label": "SATIANCE",
                  "value": "$2,986.07"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$5,145.79"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$3,897.35"
                },
                {
                  "label": "CYTREX",
                  "value": "$5,606.16"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,158.83"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$1,494.52"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$4,897.73"
                },
                {
                  "label": "CODACT",
                  "value": "$2,900.07"
                },
                {
                  "label": "KEENGEN",
                  "value": "$6,756.52"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$4,650.94"
                },
                {
                  "label": "THREDZ",
                  "value": "$4,026.94"
                },
                {
                  "label": "UXMOX",
                  "value": "$2,355.61"
                },
                {
                  "label": "APPLICA",
                  "value": "$5,209.60"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$6,372.04"
                },
                {
                  "label": "ZENTURY",
                  "value": "$7,942.25"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,148.91"
                },
                {
                  "label": "COMTRACT",
                  "value": "$2,174.52"
                },
                {
                  "label": "EARGO",
                  "value": "$5,109.71"
                },
                {
                  "label": "ZYPLE",
                  "value": "$2,920.44"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$7,942.01"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$5,096.99"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$6,802.01"
                },
                {
                  "label": "VERBUS",
                  "value": "$1,163.91"
                },
                {
                  "label": "BULLZONE",
                  "value": "$1,102.78"
                },
                {
                  "label": "ISBOL",
                  "value": "$7,941.05"
                },
                {
                  "label": "DADABASE",
                  "value": "$7,927.60"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$5,958.34"
                },
                {
                  "label": "REALYSIS",
                  "value": "$5,541.38"
                },
                {
                  "label": "QIMONK",
                  "value": "$4,549.52"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$2,887.83"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$6,702.84"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,583.56"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,486.22"
                }
              ]
            },
            {
              "id": "5d74c34f0ae1d2f6f94805fb",
              "label": "EARBANG",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$6,970.32"
                },
                {
                  "label": "NETPLAX",
                  "value": "$7,412.77"
                },
                {
                  "label": "CINASTER",
                  "value": "$4,534.35"
                },
                {
                  "label": "ADORNICA",
                  "value": "$3,758.92"
                },
                {
                  "label": "GEEKUS",
                  "value": "$6,327.58"
                },
                {
                  "label": "FARMEX",
                  "value": "$2,021.31"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,111.88"
                },
                {
                  "label": "SATIANCE",
                  "value": "$2,130.52"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$1,822.65"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$6,855.58"
                },
                {
                  "label": "CYTREX",
                  "value": "$2,103.95"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$3,247.81"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,734.12"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$3,629.02"
                },
                {
                  "label": "CODACT",
                  "value": "$7,890.34"
                },
                {
                  "label": "KEENGEN",
                  "value": "$4,369.47"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$5,141.01"
                },
                {
                  "label": "THREDZ",
                  "value": "$1,905.55"
                },
                {
                  "label": "UXMOX",
                  "value": "$1,304.57"
                },
                {
                  "label": "APPLICA",
                  "value": "$3,828.02"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$6,756.30"
                },
                {
                  "label": "ZENTURY",
                  "value": "$3,751.51"
                },
                {
                  "label": "ZENCO",
                  "value": "$4,732.47"
                },
                {
                  "label": "COMTRACT",
                  "value": "$7,338.23"
                },
                {
                  "label": "EARGO",
                  "value": "$3,630.80"
                },
                {
                  "label": "ZYPLE",
                  "value": "$7,422.38"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$5,710.03"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,571.88"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$7,159.53"
                },
                {
                  "label": "VERBUS",
                  "value": "$6,535.82"
                },
                {
                  "label": "BULLZONE",
                  "value": "$6,818.70"
                },
                {
                  "label": "ISBOL",
                  "value": "$5,791.48"
                },
                {
                  "label": "DADABASE",
                  "value": "$4,932.34"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$4,710.34"
                },
                {
                  "label": "REALYSIS",
                  "value": "$4,256.63"
                },
                {
                  "label": "QIMONK",
                  "value": "$5,013.16"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$1,924.86"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$4,235.52"
                },
                {
                  "label": "KOZGENE",
                  "value": "$3,177.39"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$3,010.17"
                }
              ]
            },
            {
              "id": "5d74c34fb2ea014164f06665",
              "label": "EMTRAC",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$6,399.84"
                },
                {
                  "label": "NETPLAX",
                  "value": "$5,683.57"
                },
                {
                  "label": "CINASTER",
                  "value": "$3,895.16"
                },
                {
                  "label": "ADORNICA",
                  "value": "$6,127.84"
                },
                {
                  "label": "GEEKUS",
                  "value": "$5,394.33"
                },
                {
                  "label": "FARMEX",
                  "value": "$4,908.83"
                },
                {
                  "label": "PIVITOL",
                  "value": "$5,494.25"
                },
                {
                  "label": "SATIANCE",
                  "value": "$7,861.84"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$5,318.01"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$1,018.42"
                },
                {
                  "label": "CYTREX",
                  "value": "$2,431.16"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$3,005.97"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,254.03"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$3,846.76"
                },
                {
                  "label": "CODACT",
                  "value": "$5,722.61"
                },
                {
                  "label": "KEENGEN",
                  "value": "$6,488.94"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$1,375.51"
                },
                {
                  "label": "THREDZ",
                  "value": "$5,335.88"
                },
                {
                  "label": "UXMOX",
                  "value": "$7,803.80"
                },
                {
                  "label": "APPLICA",
                  "value": "$5,340.97"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$2,469.44"
                },
                {
                  "label": "ZENTURY",
                  "value": "$1,877.71"
                },
                {
                  "label": "ZENCO",
                  "value": "$4,029.75"
                },
                {
                  "label": "COMTRACT",
                  "value": "$5,664.76"
                },
                {
                  "label": "EARGO",
                  "value": "$1,198.09"
                },
                {
                  "label": "ZYPLE",
                  "value": "$7,877.71"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$4,678.66"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$2,832.85"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$5,681.97"
                },
                {
                  "label": "VERBUS",
                  "value": "$3,737.15"
                },
                {
                  "label": "BULLZONE",
                  "value": "$7,090.16"
                },
                {
                  "label": "ISBOL",
                  "value": "$1,504.48"
                },
                {
                  "label": "DADABASE",
                  "value": "$2,341.47"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$7,569.94"
                },
                {
                  "label": "REALYSIS",
                  "value": "$5,499.50"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,147.28"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$5,960.63"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$2,816.75"
                },
                {
                  "label": "KOZGENE",
                  "value": "$7,896.12"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$6,279.77"
                }
              ]
            },
            {
              "id": "5d74c34f5cd307b4cfb301d7",
              "label": "MEDMEX",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$6,953.29"
                },
                {
                  "label": "NETPLAX",
                  "value": "$2,422.03"
                },
                {
                  "label": "CINASTER",
                  "value": "$6,536.76"
                },
                {
                  "label": "ADORNICA",
                  "value": "$6,208.05"
                },
                {
                  "label": "GEEKUS",
                  "value": "$5,551.51"
                },
                {
                  "label": "FARMEX",
                  "value": "$2,109.06"
                },
                {
                  "label": "PIVITOL",
                  "value": "$2,924.45"
                },
                {
                  "label": "SATIANCE",
                  "value": "$5,802.98"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$7,566.36"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$1,069.31"
                },
                {
                  "label": "CYTREX",
                  "value": "$5,305.11"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$6,072.12"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$2,105.26"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$6,967.06"
                },
                {
                  "label": "CODACT",
                  "value": "$7,508.46"
                },
                {
                  "label": "KEENGEN",
                  "value": "$7,057.73"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$3,981.64"
                },
                {
                  "label": "THREDZ",
                  "value": "$6,743.38"
                },
                {
                  "label": "UXMOX",
                  "value": "$1,591.48"
                },
                {
                  "label": "APPLICA",
                  "value": "$4,059.70"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$5,940.70"
                },
                {
                  "label": "ZENTURY",
                  "value": "$1,334.90"
                },
                {
                  "label": "ZENCO",
                  "value": "$3,685.66"
                },
                {
                  "label": "COMTRACT",
                  "value": "$2,888.40"
                },
                {
                  "label": "EARGO",
                  "value": "$1,859.17"
                },
                {
                  "label": "ZYPLE",
                  "value": "$4,320.27"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$7,264.40"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,190.81"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$5,479.86"
                },
                {
                  "label": "VERBUS",
                  "value": "$5,516.84"
                },
                {
                  "label": "BULLZONE",
                  "value": "$5,904.58"
                },
                {
                  "label": "ISBOL",
                  "value": "$3,887.91"
                },
                {
                  "label": "DADABASE",
                  "value": "$5,604.01"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$3,397.13"
                },
                {
                  "label": "REALYSIS",
                  "value": "$3,868.20"
                },
                {
                  "label": "QIMONK",
                  "value": "$3,332.64"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$6,428.98"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$1,653.56"
                },
                {
                  "label": "KOZGENE",
                  "value": "$3,670.76"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$5,132.45"
                }
              ]
            },
            {
              "id": "5d74c34fd078c3551141dcfc",
              "label": "EWEVILLE",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$6,501.78"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,425.69"
                },
                {
                  "label": "CINASTER",
                  "value": "$2,465.01"
                },
                {
                  "label": "ADORNICA",
                  "value": "$7,721.95"
                },
                {
                  "label": "GEEKUS",
                  "value": "$7,201.45"
                },
                {
                  "label": "FARMEX",
                  "value": "$3,260.25"
                },
                {
                  "label": "PIVITOL",
                  "value": "$2,126.28"
                },
                {
                  "label": "SATIANCE",
                  "value": "$5,813.83"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$3,890.30"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$2,926.30"
                },
                {
                  "label": "CYTREX",
                  "value": "$2,845.54"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,953.39"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$6,464.90"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,211.31"
                },
                {
                  "label": "CODACT",
                  "value": "$3,022.34"
                },
                {
                  "label": "KEENGEN",
                  "value": "$7,389.23"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$6,249.37"
                },
                {
                  "label": "THREDZ",
                  "value": "$4,234.57"
                },
                {
                  "label": "UXMOX",
                  "value": "$7,794.82"
                },
                {
                  "label": "APPLICA",
                  "value": "$4,145.00"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$2,329.94"
                },
                {
                  "label": "ZENTURY",
                  "value": "$4,822.26"
                },
                {
                  "label": "ZENCO",
                  "value": "$1,405.66"
                },
                {
                  "label": "COMTRACT",
                  "value": "$6,628.83"
                },
                {
                  "label": "EARGO",
                  "value": "$7,610.36"
                },
                {
                  "label": "ZYPLE",
                  "value": "$1,669.19"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$5,195.79"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,791.69"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$4,502.76"
                },
                {
                  "label": "VERBUS",
                  "value": "$7,462.76"
                },
                {
                  "label": "BULLZONE",
                  "value": "$3,949.54"
                },
                {
                  "label": "ISBOL",
                  "value": "$6,858.94"
                },
                {
                  "label": "DADABASE",
                  "value": "$6,700.40"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$3,208.01"
                },
                {
                  "label": "REALYSIS",
                  "value": "$3,726.40"
                },
                {
                  "label": "QIMONK",
                  "value": "$1,807.65"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$6,744.87"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$6,490.87"
                },
                {
                  "label": "KOZGENE",
                  "value": "$2,419.04"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$2,227.25"
                }
              ]
            }
          ]
        },
        {
          "id": "5d74c34f704f2e188c044002",
          "label": "NETPLODE",
          "subsidiaries": [
            {
              "id": "5d74c34fcced654b58bcdd74",
              "label": "GEEKULAR",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$3,656.38"
                },
                {
                  "label": "NETPLAX",
                  "value": "$7,124.79"
                },
                {
                  "label": "CINASTER",
                  "value": "$2,282.51"
                },
                {
                  "label": "ADORNICA",
                  "value": "$7,655.12"
                },
                {
                  "label": "GEEKUS",
                  "value": "$1,323.56"
                },
                {
                  "label": "FARMEX",
                  "value": "$1,498.15"
                },
                {
                  "label": "PIVITOL",
                  "value": "$2,041.82"
                },
                {
                  "label": "SATIANCE",
                  "value": "$4,879.95"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$2,050.07"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$3,101.96"
                },
                {
                  "label": "CYTREX",
                  "value": "$2,745.48"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$1,678.66"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$7,963.26"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,213.19"
                },
                {
                  "label": "CODACT",
                  "value": "$4,224.40"
                },
                {
                  "label": "KEENGEN",
                  "value": "$4,358.72"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$7,966.60"
                },
                {
                  "label": "THREDZ",
                  "value": "$5,361.32"
                },
                {
                  "label": "UXMOX",
                  "value": "$6,768.81"
                },
                {
                  "label": "APPLICA",
                  "value": "$6,980.91"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$1,930.58"
                },
                {
                  "label": "ZENTURY",
                  "value": "$1,319.34"
                },
                {
                  "label": "ZENCO",
                  "value": "$5,127.47"
                },
                {
                  "label": "COMTRACT",
                  "value": "$7,107.28"
                },
                {
                  "label": "EARGO",
                  "value": "$1,355.07"
                },
                {
                  "label": "ZYPLE",
                  "value": "$7,315.76"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$2,593.83"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,243.98"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$3,984.12"
                },
                {
                  "label": "VERBUS",
                  "value": "$4,086.55"
                },
                {
                  "label": "BULLZONE",
                  "value": "$3,264.33"
                },
                {
                  "label": "ISBOL",
                  "value": "$2,402.89"
                },
                {
                  "label": "DADABASE",
                  "value": "$3,186.73"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$2,588.60"
                },
                {
                  "label": "REALYSIS",
                  "value": "$5,497.88"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,510.56"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$6,641.49"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$1,281.27"
                },
                {
                  "label": "KOZGENE",
                  "value": "$6,235.65"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$2,255.35"
                }
              ]
            },
            {
              "id": "5d74c34f7239aa138297b261",
              "label": "BLANET",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$5,478.25"
                },
                {
                  "label": "NETPLAX",
                  "value": "$2,532.52"
                },
                {
                  "label": "CINASTER",
                  "value": "$3,020.38"
                },
                {
                  "label": "ADORNICA",
                  "value": "$4,003.71"
                },
                {
                  "label": "GEEKUS",
                  "value": "$5,417.89"
                },
                {
                  "label": "FARMEX",
                  "value": "$2,516.94"
                },
                {
                  "label": "PIVITOL",
                  "value": "$2,926.47"
                },
                {
                  "label": "SATIANCE",
                  "value": "$2,905.41"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$2,517.00"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$5,458.13"
                },
                {
                  "label": "CYTREX",
                  "value": "$5,554.62"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$5,740.17"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$2,345.27"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$3,881.76"
                },
                {
                  "label": "CODACT",
                  "value": "$3,909.44"
                },
                {
                  "label": "KEENGEN",
                  "value": "$1,105.01"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$5,323.74"
                },
                {
                  "label": "THREDZ",
                  "value": "$1,432.37"
                },
                {
                  "label": "UXMOX",
                  "value": "$2,357.74"
                },
                {
                  "label": "APPLICA",
                  "value": "$2,071.26"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$2,503.13"
                },
                {
                  "label": "ZENTURY",
                  "value": "$7,576.92"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,253.79"
                },
                {
                  "label": "COMTRACT",
                  "value": "$4,095.41"
                },
                {
                  "label": "EARGO",
                  "value": "$2,303.81"
                },
                {
                  "label": "ZYPLE",
                  "value": "$2,993.73"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$1,366.95"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,201.29"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$7,686.72"
                },
                {
                  "label": "VERBUS",
                  "value": "$5,826.62"
                },
                {
                  "label": "BULLZONE",
                  "value": "$1,096.60"
                },
                {
                  "label": "ISBOL",
                  "value": "$1,416.37"
                },
                {
                  "label": "DADABASE",
                  "value": "$1,448.69"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$7,691.36"
                },
                {
                  "label": "REALYSIS",
                  "value": "$5,985.82"
                },
                {
                  "label": "QIMONK",
                  "value": "$3,000.96"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$3,964.57"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$5,711.08"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,821.26"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$1,764.68"
                }
              ]
            },
            {
              "id": "5d74c34fa3fa54b39eb61301",
              "label": "SENTIA",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$6,757.88"
                },
                {
                  "label": "NETPLAX",
                  "value": "$1,942.28"
                },
                {
                  "label": "CINASTER",
                  "value": "$1,755.39"
                },
                {
                  "label": "ADORNICA",
                  "value": "$5,978.66"
                },
                {
                  "label": "GEEKUS",
                  "value": "$4,060.39"
                },
                {
                  "label": "FARMEX",
                  "value": "$4,401.53"
                },
                {
                  "label": "PIVITOL",
                  "value": "$5,253.82"
                },
                {
                  "label": "SATIANCE",
                  "value": "$5,406.55"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$2,637.38"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$2,245.75"
                },
                {
                  "label": "CYTREX",
                  "value": "$2,619.76"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$4,685.85"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$6,899.48"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,299.88"
                },
                {
                  "label": "CODACT",
                  "value": "$1,209.68"
                },
                {
                  "label": "KEENGEN",
                  "value": "$7,318.67"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$4,304.28"
                },
                {
                  "label": "THREDZ",
                  "value": "$2,964.85"
                },
                {
                  "label": "UXMOX",
                  "value": "$3,314.43"
                },
                {
                  "label": "APPLICA",
                  "value": "$4,857.79"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$1,825.91"
                },
                {
                  "label": "ZENTURY",
                  "value": "$6,132.23"
                },
                {
                  "label": "ZENCO",
                  "value": "$1,878.87"
                },
                {
                  "label": "COMTRACT",
                  "value": "$7,855.53"
                },
                {
                  "label": "EARGO",
                  "value": "$1,717.53"
                },
                {
                  "label": "ZYPLE",
                  "value": "$5,999.88"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$3,719.88"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$7,995.68"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,621.41"
                },
                {
                  "label": "VERBUS",
                  "value": "$6,723.68"
                },
                {
                  "label": "BULLZONE",
                  "value": "$2,915.71"
                },
                {
                  "label": "ISBOL",
                  "value": "$7,156.22"
                },
                {
                  "label": "DADABASE",
                  "value": "$2,375.61"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$1,398.22"
                },
                {
                  "label": "REALYSIS",
                  "value": "$2,609.92"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,884.32"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$2,573.79"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$4,556.93"
                },
                {
                  "label": "KOZGENE",
                  "value": "$7,237.26"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,776.08"
                }
              ]
            },
            {
              "id": "5d74c34fcefc7189af721ff7",
              "label": "SUPPORTAL",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$5,227.98"
                },
                {
                  "label": "NETPLAX",
                  "value": "$3,382.95"
                },
                {
                  "label": "CINASTER",
                  "value": "$4,191.11"
                },
                {
                  "label": "ADORNICA",
                  "value": "$5,110.84"
                },
                {
                  "label": "GEEKUS",
                  "value": "$5,364.54"
                },
                {
                  "label": "FARMEX",
                  "value": "$2,497.65"
                },
                {
                  "label": "PIVITOL",
                  "value": "$5,616.51"
                },
                {
                  "label": "SATIANCE",
                  "value": "$5,831.76"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$6,802.73"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$6,244.34"
                },
                {
                  "label": "CYTREX",
                  "value": "$2,551.86"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$1,450.37"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$7,618.82"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$3,688.38"
                },
                {
                  "label": "CODACT",
                  "value": "$3,881.92"
                },
                {
                  "label": "KEENGEN",
                  "value": "$3,320.49"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$2,705.89"
                },
                {
                  "label": "THREDZ",
                  "value": "$6,369.04"
                },
                {
                  "label": "UXMOX",
                  "value": "$4,129.46"
                },
                {
                  "label": "APPLICA",
                  "value": "$2,550.07"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$1,322.64"
                },
                {
                  "label": "ZENTURY",
                  "value": "$2,859.56"
                },
                {
                  "label": "ZENCO",
                  "value": "$1,555.98"
                },
                {
                  "label": "COMTRACT",
                  "value": "$2,967.77"
                },
                {
                  "label": "EARGO",
                  "value": "$1,420.11"
                },
                {
                  "label": "ZYPLE",
                  "value": "$7,415.07"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$2,741.83"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$2,540.95"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,512.23"
                },
                {
                  "label": "VERBUS",
                  "value": "$7,366.85"
                },
                {
                  "label": "BULLZONE",
                  "value": "$6,495.60"
                },
                {
                  "label": "ISBOL",
                  "value": "$5,251.54"
                },
                {
                  "label": "DADABASE",
                  "value": "$7,830.40"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$7,657.45"
                },
                {
                  "label": "REALYSIS",
                  "value": "$1,092.92"
                },
                {
                  "label": "QIMONK",
                  "value": "$5,616.47"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$1,004.98"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$7,275.57"
                },
                {
                  "label": "KOZGENE",
                  "value": "$1,830.96"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$1,662.32"
                }
              ]
            },
            {
              "id": "5d74c34f6f8ee5dc4fa06496",
              "label": "ZOXY",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$7,973.24"
                },
                {
                  "label": "NETPLAX",
                  "value": "$5,989.81"
                },
                {
                  "label": "CINASTER",
                  "value": "$2,765.57"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,651.79"
                },
                {
                  "label": "GEEKUS",
                  "value": "$1,689.80"
                },
                {
                  "label": "FARMEX",
                  "value": "$2,774.46"
                },
                {
                  "label": "PIVITOL",
                  "value": "$5,882.92"
                },
                {
                  "label": "SATIANCE",
                  "value": "$5,482.80"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$2,605.10"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$2,374.23"
                },
                {
                  "label": "CYTREX",
                  "value": "$6,792.43"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$1,710.58"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$1,788.58"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,049.59"
                },
                {
                  "label": "CODACT",
                  "value": "$5,190.54"
                },
                {
                  "label": "KEENGEN",
                  "value": "$5,640.03"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$5,354.21"
                },
                {
                  "label": "THREDZ",
                  "value": "$7,888.68"
                },
                {
                  "label": "UXMOX",
                  "value": "$4,020.73"
                },
                {
                  "label": "APPLICA",
                  "value": "$3,450.43"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$6,565.86"
                },
                {
                  "label": "ZENTURY",
                  "value": "$2,855.02"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,331.12"
                },
                {
                  "label": "COMTRACT",
                  "value": "$7,487.03"
                },
                {
                  "label": "EARGO",
                  "value": "$6,727.73"
                },
                {
                  "label": "ZYPLE",
                  "value": "$1,558.78"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$3,050.06"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,564.74"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$4,107.93"
                },
                {
                  "label": "VERBUS",
                  "value": "$7,568.11"
                },
                {
                  "label": "BULLZONE",
                  "value": "$5,642.73"
                },
                {
                  "label": "ISBOL",
                  "value": "$1,995.85"
                },
                {
                  "label": "DADABASE",
                  "value": "$3,954.17"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$4,274.25"
                },
                {
                  "label": "REALYSIS",
                  "value": "$1,580.99"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,601.07"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$6,955.59"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$4,740.95"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,777.55"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$3,193.18"
                }
              ]
            }
          ]
        },
        {
          "id": "5d74c34fe814a7cf1457d737",
          "label": "QUALITEX",
          "subsidiaries": [
            {
              "id": "5d74c34fc2ef383461ccc285",
              "label": "GOKO",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$3,082.51"
                },
                {
                  "label": "NETPLAX",
                  "value": "$2,358.17"
                },
                {
                  "label": "CINASTER",
                  "value": "$3,683.15"
                },
                {
                  "label": "ADORNICA",
                  "value": "$4,000.41"
                },
                {
                  "label": "GEEKUS",
                  "value": "$6,530.77"
                },
                {
                  "label": "FARMEX",
                  "value": "$3,952.97"
                },
                {
                  "label": "PIVITOL",
                  "value": "$2,764.93"
                },
                {
                  "label": "SATIANCE",
                  "value": "$5,638.20"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$4,308.59"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$2,812.19"
                },
                {
                  "label": "CYTREX",
                  "value": "$2,883.10"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,327.56"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$6,641.06"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$6,588.25"
                },
                {
                  "label": "CODACT",
                  "value": "$7,839.23"
                },
                {
                  "label": "KEENGEN",
                  "value": "$7,205.68"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$6,848.82"
                },
                {
                  "label": "THREDZ",
                  "value": "$3,148.72"
                },
                {
                  "label": "UXMOX",
                  "value": "$5,954.01"
                },
                {
                  "label": "APPLICA",
                  "value": "$3,441.20"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$4,289.16"
                },
                {
                  "label": "ZENTURY",
                  "value": "$5,741.67"
                },
                {
                  "label": "ZENCO",
                  "value": "$1,431.71"
                },
                {
                  "label": "COMTRACT",
                  "value": "$6,454.97"
                },
                {
                  "label": "EARGO",
                  "value": "$1,249.76"
                },
                {
                  "label": "ZYPLE",
                  "value": "$4,566.22"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$7,916.30"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,473.70"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$3,727.09"
                },
                {
                  "label": "VERBUS",
                  "value": "$1,461.20"
                },
                {
                  "label": "BULLZONE",
                  "value": "$7,716.08"
                },
                {
                  "label": "ISBOL",
                  "value": "$4,524.11"
                },
                {
                  "label": "DADABASE",
                  "value": "$5,548.10"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$3,457.21"
                },
                {
                  "label": "REALYSIS",
                  "value": "$5,262.75"
                },
                {
                  "label": "QIMONK",
                  "value": "$7,174.73"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$7,375.50"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$5,980.37"
                },
                {
                  "label": "KOZGENE",
                  "value": "$6,764.65"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$6,844.38"
                }
              ]
            },
            {
              "id": "5d74c34f119c1d58469792b5",
              "label": "LUNCHPOD",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$1,273.20"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,237.27"
                },
                {
                  "label": "CINASTER",
                  "value": "$3,904.37"
                },
                {
                  "label": "ADORNICA",
                  "value": "$7,352.30"
                },
                {
                  "label": "GEEKUS",
                  "value": "$4,242.09"
                },
                {
                  "label": "FARMEX",
                  "value": "$7,877.31"
                },
                {
                  "label": "PIVITOL",
                  "value": "$4,889.50"
                },
                {
                  "label": "SATIANCE",
                  "value": "$4,681.44"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$4,788.26"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$7,355.71"
                },
                {
                  "label": "CYTREX",
                  "value": "$4,949.95"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,535.60"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$5,183.18"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$3,074.56"
                },
                {
                  "label": "CODACT",
                  "value": "$2,821.71"
                },
                {
                  "label": "KEENGEN",
                  "value": "$3,024.12"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$1,257.32"
                },
                {
                  "label": "THREDZ",
                  "value": "$6,867.03"
                },
                {
                  "label": "UXMOX",
                  "value": "$5,471.52"
                },
                {
                  "label": "APPLICA",
                  "value": "$1,278.10"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$1,916.84"
                },
                {
                  "label": "ZENTURY",
                  "value": "$3,928.29"
                },
                {
                  "label": "ZENCO",
                  "value": "$5,788.13"
                },
                {
                  "label": "COMTRACT",
                  "value": "$3,166.50"
                },
                {
                  "label": "EARGO",
                  "value": "$6,944.97"
                },
                {
                  "label": "ZYPLE",
                  "value": "$1,071.27"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$7,298.87"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$1,924.22"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$4,419.08"
                },
                {
                  "label": "VERBUS",
                  "value": "$3,096.92"
                },
                {
                  "label": "BULLZONE",
                  "value": "$4,180.67"
                },
                {
                  "label": "ISBOL",
                  "value": "$3,864.34"
                },
                {
                  "label": "DADABASE",
                  "value": "$2,302.83"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$2,217.04"
                },
                {
                  "label": "REALYSIS",
                  "value": "$2,222.83"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,413.63"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$5,229.39"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$5,555.93"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,110.33"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$7,159.50"
                }
              ]
            },
            {
              "id": "5d74c34fd5d37009f94bc1b2",
              "label": "HARMONEY",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$1,752.27"
                },
                {
                  "label": "NETPLAX",
                  "value": "$1,616.52"
                },
                {
                  "label": "CINASTER",
                  "value": "$5,684.57"
                },
                {
                  "label": "ADORNICA",
                  "value": "$6,579.62"
                },
                {
                  "label": "GEEKUS",
                  "value": "$6,144.54"
                },
                {
                  "label": "FARMEX",
                  "value": "$5,931.70"
                },
                {
                  "label": "PIVITOL",
                  "value": "$4,541.56"
                },
                {
                  "label": "SATIANCE",
                  "value": "$2,762.53"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$2,348.67"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$7,743.32"
                },
                {
                  "label": "CYTREX",
                  "value": "$7,067.25"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$3,178.73"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,592.48"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$6,869.87"
                },
                {
                  "label": "CODACT",
                  "value": "$4,677.45"
                },
                {
                  "label": "KEENGEN",
                  "value": "$5,733.25"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$6,850.57"
                },
                {
                  "label": "THREDZ",
                  "value": "$2,581.84"
                },
                {
                  "label": "UXMOX",
                  "value": "$1,753.47"
                },
                {
                  "label": "APPLICA",
                  "value": "$1,823.37"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$2,359.05"
                },
                {
                  "label": "ZENTURY",
                  "value": "$6,556.56"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,999.35"
                },
                {
                  "label": "COMTRACT",
                  "value": "$1,294.41"
                },
                {
                  "label": "EARGO",
                  "value": "$7,441.58"
                },
                {
                  "label": "ZYPLE",
                  "value": "$3,541.84"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$1,215.70"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$5,423.77"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,567.65"
                },
                {
                  "label": "VERBUS",
                  "value": "$4,188.74"
                },
                {
                  "label": "BULLZONE",
                  "value": "$3,353.77"
                },
                {
                  "label": "ISBOL",
                  "value": "$4,950.80"
                },
                {
                  "label": "DADABASE",
                  "value": "$6,553.08"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$3,186.09"
                },
                {
                  "label": "REALYSIS",
                  "value": "$7,645.02"
                },
                {
                  "label": "QIMONK",
                  "value": "$6,305.06"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$6,381.41"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$2,742.19"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,763.85"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$6,399.32"
                }
              ]
            },
            {
              "id": "5d74c34fdd2e8a6e0f2b1c50",
              "label": "DAISU",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$5,553.94"
                },
                {
                  "label": "NETPLAX",
                  "value": "$6,061.95"
                },
                {
                  "label": "CINASTER",
                  "value": "$7,203.58"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,219.97"
                },
                {
                  "label": "GEEKUS",
                  "value": "$1,952.67"
                },
                {
                  "label": "FARMEX",
                  "value": "$3,380.05"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,945.88"
                },
                {
                  "label": "SATIANCE",
                  "value": "$2,701.62"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$3,504.60"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$4,963.60"
                },
                {
                  "label": "CYTREX",
                  "value": "$7,662.29"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$1,153.69"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,891.91"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$1,542.52"
                },
                {
                  "label": "CODACT",
                  "value": "$7,295.80"
                },
                {
                  "label": "KEENGEN",
                  "value": "$4,450.23"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$4,492.89"
                },
                {
                  "label": "THREDZ",
                  "value": "$6,052.02"
                },
                {
                  "label": "UXMOX",
                  "value": "$4,439.17"
                },
                {
                  "label": "APPLICA",
                  "value": "$7,270.52"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$5,135.79"
                },
                {
                  "label": "ZENTURY",
                  "value": "$3,355.69"
                },
                {
                  "label": "ZENCO",
                  "value": "$7,886.09"
                },
                {
                  "label": "COMTRACT",
                  "value": "$4,498.46"
                },
                {
                  "label": "EARGO",
                  "value": "$6,376.78"
                },
                {
                  "label": "ZYPLE",
                  "value": "$4,371.67"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$7,927.04"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$7,034.54"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$4,328.27"
                },
                {
                  "label": "VERBUS",
                  "value": "$2,845.80"
                },
                {
                  "label": "BULLZONE",
                  "value": "$5,131.76"
                },
                {
                  "label": "ISBOL",
                  "value": "$5,900.56"
                },
                {
                  "label": "DADABASE",
                  "value": "$3,744.68"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$2,369.47"
                },
                {
                  "label": "REALYSIS",
                  "value": "$4,303.85"
                },
                {
                  "label": "QIMONK",
                  "value": "$3,651.00"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$7,049.46"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$2,837.79"
                },
                {
                  "label": "KOZGENE",
                  "value": "$4,427.52"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$3,891.48"
                }
              ]
            },
            {
              "id": "5d74c34f4595265c772e1e77",
              "label": "STELAECOR",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$7,961.48"
                },
                {
                  "label": "NETPLAX",
                  "value": "$3,647.04"
                },
                {
                  "label": "CINASTER",
                  "value": "$1,534.30"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,368.80"
                },
                {
                  "label": "GEEKUS",
                  "value": "$3,977.97"
                },
                {
                  "label": "FARMEX",
                  "value": "$5,944.13"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,242.07"
                },
                {
                  "label": "SATIANCE",
                  "value": "$2,519.63"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$1,621.45"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$2,667.91"
                },
                {
                  "label": "CYTREX",
                  "value": "$1,191.24"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$3,923.73"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$2,493.64"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$6,830.87"
                },
                {
                  "label": "CODACT",
                  "value": "$3,665.77"
                },
                {
                  "label": "KEENGEN",
                  "value": "$7,927.61"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$1,524.55"
                },
                {
                  "label": "THREDZ",
                  "value": "$6,354.18"
                },
                {
                  "label": "UXMOX",
                  "value": "$5,389.13"
                },
                {
                  "label": "APPLICA",
                  "value": "$4,953.42"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$4,479.65"
                },
                {
                  "label": "ZENTURY",
                  "value": "$2,184.19"
                },
                {
                  "label": "ZENCO",
                  "value": "$5,599.62"
                },
                {
                  "label": "COMTRACT",
                  "value": "$3,263.25"
                },
                {
                  "label": "EARGO",
                  "value": "$1,129.79"
                },
                {
                  "label": "ZYPLE",
                  "value": "$4,629.12"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$1,244.05"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$5,312.68"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$6,125.92"
                },
                {
                  "label": "VERBUS",
                  "value": "$2,607.62"
                },
                {
                  "label": "BULLZONE",
                  "value": "$4,267.26"
                },
                {
                  "label": "ISBOL",
                  "value": "$5,029.85"
                },
                {
                  "label": "DADABASE",
                  "value": "$3,471.22"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$6,733.35"
                },
                {
                  "label": "REALYSIS",
                  "value": "$7,894.08"
                },
                {
                  "label": "QIMONK",
                  "value": "$4,399.40"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$5,645.59"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$6,307.01"
                },
                {
                  "label": "KOZGENE",
                  "value": "$1,415.56"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$7,178.07"
                }
              ]
            },
            {
              "id": "5d74c34fe8de1d5100c07aae",
              "label": "FUTURIS",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$3,506.49"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,510.62"
                },
                {
                  "label": "CINASTER",
                  "value": "$3,878.09"
                },
                {
                  "label": "ADORNICA",
                  "value": "$4,221.56"
                },
                {
                  "label": "GEEKUS",
                  "value": "$7,563.84"
                },
                {
                  "label": "FARMEX",
                  "value": "$4,449.28"
                },
                {
                  "label": "PIVITOL",
                  "value": "$3,613.88"
                },
                {
                  "label": "SATIANCE",
                  "value": "$6,897.18"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$1,948.65"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$5,451.37"
                },
                {
                  "label": "CYTREX",
                  "value": "$3,596.10"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$1,590.40"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$7,115.81"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$3,854.97"
                },
                {
                  "label": "CODACT",
                  "value": "$7,675.60"
                },
                {
                  "label": "KEENGEN",
                  "value": "$1,431.58"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$4,065.22"
                },
                {
                  "label": "THREDZ",
                  "value": "$7,907.13"
                },
                {
                  "label": "UXMOX",
                  "value": "$5,048.77"
                },
                {
                  "label": "APPLICA",
                  "value": "$4,051.15"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$6,797.92"
                },
                {
                  "label": "ZENTURY",
                  "value": "$4,443.04"
                },
                {
                  "label": "ZENCO",
                  "value": "$5,462.10"
                },
                {
                  "label": "COMTRACT",
                  "value": "$6,171.44"
                },
                {
                  "label": "EARGO",
                  "value": "$5,479.37"
                },
                {
                  "label": "ZYPLE",
                  "value": "$2,313.19"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$5,963.82"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$4,842.53"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$1,063.27"
                },
                {
                  "label": "VERBUS",
                  "value": "$1,633.58"
                },
                {
                  "label": "BULLZONE",
                  "value": "$2,188.73"
                },
                {
                  "label": "ISBOL",
                  "value": "$4,448.38"
                },
                {
                  "label": "DADABASE",
                  "value": "$7,858.22"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$1,234.48"
                },
                {
                  "label": "REALYSIS",
                  "value": "$3,107.57"
                },
                {
                  "label": "QIMONK",
                  "value": "$6,920.75"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$7,937.25"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$6,806.04"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,907.27"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$6,451.16"
                }
              ]
            },
            {
              "id": "5d74c34f35757b94e77f0436",
              "label": "CENTREXIN",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$3,080.74"
                },
                {
                  "label": "NETPLAX",
                  "value": "$5,151.38"
                },
                {
                  "label": "CINASTER",
                  "value": "$4,036.28"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,106.06"
                },
                {
                  "label": "GEEKUS",
                  "value": "$5,840.83"
                },
                {
                  "label": "FARMEX",
                  "value": "$1,153.38"
                },
                {
                  "label": "PIVITOL",
                  "value": "$5,540.11"
                },
                {
                  "label": "SATIANCE",
                  "value": "$6,435.53"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$3,881.20"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$4,252.05"
                },
                {
                  "label": "CYTREX",
                  "value": "$3,211.67"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$4,957.66"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$1,323.12"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$3,383.57"
                },
                {
                  "label": "CODACT",
                  "value": "$3,056.74"
                },
                {
                  "label": "KEENGEN",
                  "value": "$4,299.80"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$2,203.23"
                },
                {
                  "label": "THREDZ",
                  "value": "$7,452.81"
                },
                {
                  "label": "UXMOX",
                  "value": "$7,383.35"
                },
                {
                  "label": "APPLICA",
                  "value": "$3,009.57"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$5,110.30"
                },
                {
                  "label": "ZENTURY",
                  "value": "$7,177.92"
                },
                {
                  "label": "ZENCO",
                  "value": "$7,351.30"
                },
                {
                  "label": "COMTRACT",
                  "value": "$3,716.24"
                },
                {
                  "label": "EARGO",
                  "value": "$2,464.87"
                },
                {
                  "label": "ZYPLE",
                  "value": "$4,709.46"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$6,773.11"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,145.47"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$5,370.73"
                },
                {
                  "label": "VERBUS",
                  "value": "$4,958.83"
                },
                {
                  "label": "BULLZONE",
                  "value": "$2,808.03"
                },
                {
                  "label": "ISBOL",
                  "value": "$4,938.25"
                },
                {
                  "label": "DADABASE",
                  "value": "$4,831.27"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$2,151.67"
                },
                {
                  "label": "REALYSIS",
                  "value": "$6,793.21"
                },
                {
                  "label": "QIMONK",
                  "value": "$1,275.04"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$4,020.23"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$7,271.10"
                },
                {
                  "label": "KOZGENE",
                  "value": "$6,244.12"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$5,582.11"
                }
              ]
            },
            {
              "id": "5d74c34f712d98d367a3afc5",
              "label": "SPRINGBEE",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$4,084.38"
                },
                {
                  "label": "NETPLAX",
                  "value": "$5,221.20"
                },
                {
                  "label": "CINASTER",
                  "value": "$5,484.23"
                },
                {
                  "label": "ADORNICA",
                  "value": "$7,031.11"
                },
                {
                  "label": "GEEKUS",
                  "value": "$4,161.62"
                },
                {
                  "label": "FARMEX",
                  "value": "$1,441.58"
                },
                {
                  "label": "PIVITOL",
                  "value": "$2,549.65"
                },
                {
                  "label": "SATIANCE",
                  "value": "$3,210.02"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$4,121.46"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$7,323.81"
                },
                {
                  "label": "CYTREX",
                  "value": "$4,531.39"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$7,887.28"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$1,788.46"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$6,515.11"
                },
                {
                  "label": "CODACT",
                  "value": "$6,650.75"
                },
                {
                  "label": "KEENGEN",
                  "value": "$5,386.97"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$6,613.47"
                },
                {
                  "label": "THREDZ",
                  "value": "$7,221.62"
                },
                {
                  "label": "UXMOX",
                  "value": "$1,377.39"
                },
                {
                  "label": "APPLICA",
                  "value": "$3,256.06"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$4,597.70"
                },
                {
                  "label": "ZENTURY",
                  "value": "$5,704.42"
                },
                {
                  "label": "ZENCO",
                  "value": "$2,620.17"
                },
                {
                  "label": "COMTRACT",
                  "value": "$1,908.19"
                },
                {
                  "label": "EARGO",
                  "value": "$4,490.19"
                },
                {
                  "label": "ZYPLE",
                  "value": "$1,128.39"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$7,527.68"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$7,684.46"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,458.65"
                },
                {
                  "label": "VERBUS",
                  "value": "$3,229.09"
                },
                {
                  "label": "BULLZONE",
                  "value": "$2,847.54"
                },
                {
                  "label": "ISBOL",
                  "value": "$2,901.83"
                },
                {
                  "label": "DADABASE",
                  "value": "$5,630.07"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$6,200.28"
                },
                {
                  "label": "REALYSIS",
                  "value": "$3,007.34"
                },
                {
                  "label": "QIMONK",
                  "value": "$5,707.40"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$2,554.99"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$1,997.39"
                },
                {
                  "label": "KOZGENE",
                  "value": "$5,525.52"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,833.04"
                }
              ]
            }
          ]
        },
        {
          "id": "5d74c34f0f7bfb901fc2b491",
          "label": "DIGIQUE",
          "subsidiaries": [
            {
              "id": "5d74c34f6257826eb47f6ca1",
              "label": "ARCHITAX",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$1,032.92"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,682.87"
                },
                {
                  "label": "CINASTER",
                  "value": "$2,954.35"
                },
                {
                  "label": "ADORNICA",
                  "value": "$5,586.35"
                },
                {
                  "label": "GEEKUS",
                  "value": "$6,802.05"
                },
                {
                  "label": "FARMEX",
                  "value": "$4,880.71"
                },
                {
                  "label": "PIVITOL",
                  "value": "$3,681.26"
                },
                {
                  "label": "SATIANCE",
                  "value": "$7,513.99"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$3,677.63"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$4,834.80"
                },
                {
                  "label": "CYTREX",
                  "value": "$3,235.88"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,748.27"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$7,608.62"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$1,068.79"
                },
                {
                  "label": "CODACT",
                  "value": "$6,935.80"
                },
                {
                  "label": "KEENGEN",
                  "value": "$2,329.23"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$7,101.02"
                },
                {
                  "label": "THREDZ",
                  "value": "$6,538.09"
                },
                {
                  "label": "UXMOX",
                  "value": "$2,533.84"
                },
                {
                  "label": "APPLICA",
                  "value": "$4,875.85"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$5,801.67"
                },
                {
                  "label": "ZENTURY",
                  "value": "$4,528.91"
                },
                {
                  "label": "ZENCO",
                  "value": "$5,025.44"
                },
                {
                  "label": "COMTRACT",
                  "value": "$4,734.60"
                },
                {
                  "label": "EARGO",
                  "value": "$2,983.11"
                },
                {
                  "label": "ZYPLE",
                  "value": "$4,329.79"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$6,694.90"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$5,344.45"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,813.16"
                },
                {
                  "label": "VERBUS",
                  "value": "$6,604.88"
                },
                {
                  "label": "BULLZONE",
                  "value": "$2,392.45"
                },
                {
                  "label": "ISBOL",
                  "value": "$5,549.19"
                },
                {
                  "label": "DADABASE",
                  "value": "$3,399.37"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$5,139.39"
                },
                {
                  "label": "REALYSIS",
                  "value": "$4,327.48"
                },
                {
                  "label": "QIMONK",
                  "value": "$3,301.86"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$4,937.87"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$5,431.63"
                },
                {
                  "label": "KOZGENE",
                  "value": "$2,397.94"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,001.81"
                }
              ]
            },
            {
              "id": "5d74c34f41f7a813c7dbf5c4",
              "label": "DIGIRANG",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$6,364.53"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,078.97"
                },
                {
                  "label": "CINASTER",
                  "value": "$6,894.01"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,056.71"
                },
                {
                  "label": "GEEKUS",
                  "value": "$1,752.89"
                },
                {
                  "label": "FARMEX",
                  "value": "$5,252.19"
                },
                {
                  "label": "PIVITOL",
                  "value": "$5,219.55"
                },
                {
                  "label": "SATIANCE",
                  "value": "$7,058.96"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$4,873.43"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$1,701.63"
                },
                {
                  "label": "CYTREX",
                  "value": "$2,823.89"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$3,880.35"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,812.01"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$4,454.11"
                },
                {
                  "label": "CODACT",
                  "value": "$3,701.04"
                },
                {
                  "label": "KEENGEN",
                  "value": "$1,852.47"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$5,357.98"
                },
                {
                  "label": "THREDZ",
                  "value": "$4,372.02"
                },
                {
                  "label": "UXMOX",
                  "value": "$2,636.24"
                },
                {
                  "label": "APPLICA",
                  "value": "$1,628.50"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$2,257.03"
                },
                {
                  "label": "ZENTURY",
                  "value": "$2,526.48"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,436.96"
                },
                {
                  "label": "COMTRACT",
                  "value": "$7,417.83"
                },
                {
                  "label": "EARGO",
                  "value": "$6,102.78"
                },
                {
                  "label": "ZYPLE",
                  "value": "$5,035.99"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$1,152.24"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,735.11"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,982.04"
                },
                {
                  "label": "VERBUS",
                  "value": "$2,063.18"
                },
                {
                  "label": "BULLZONE",
                  "value": "$7,577.11"
                },
                {
                  "label": "ISBOL",
                  "value": "$7,838.13"
                },
                {
                  "label": "DADABASE",
                  "value": "$7,674.75"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$3,394.01"
                },
                {
                  "label": "REALYSIS",
                  "value": "$3,640.62"
                },
                {
                  "label": "QIMONK",
                  "value": "$4,157.87"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$7,792.18"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$6,990.77"
                },
                {
                  "label": "KOZGENE",
                  "value": "$2,912.16"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,968.80"
                }
              ]
            },
            {
              "id": "5d74c34f8c25d25792b8c8fe",
              "label": "ELECTONIC",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$3,901.99"
                },
                {
                  "label": "NETPLAX",
                  "value": "$5,909.42"
                },
                {
                  "label": "CINASTER",
                  "value": "$1,304.66"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,485.48"
                },
                {
                  "label": "GEEKUS",
                  "value": "$7,127.83"
                },
                {
                  "label": "FARMEX",
                  "value": "$1,667.72"
                },
                {
                  "label": "PIVITOL",
                  "value": "$1,995.25"
                },
                {
                  "label": "SATIANCE",
                  "value": "$7,712.88"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$6,960.66"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$3,910.63"
                },
                {
                  "label": "CYTREX",
                  "value": "$6,384.94"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$1,567.66"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,985.08"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$3,108.60"
                },
                {
                  "label": "CODACT",
                  "value": "$2,936.76"
                },
                {
                  "label": "KEENGEN",
                  "value": "$7,641.63"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$6,035.75"
                },
                {
                  "label": "THREDZ",
                  "value": "$1,644.64"
                },
                {
                  "label": "UXMOX",
                  "value": "$7,769.24"
                },
                {
                  "label": "APPLICA",
                  "value": "$5,300.73"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$2,171.01"
                },
                {
                  "label": "ZENTURY",
                  "value": "$7,002.51"
                },
                {
                  "label": "ZENCO",
                  "value": "$5,093.01"
                },
                {
                  "label": "COMTRACT",
                  "value": "$4,404.77"
                },
                {
                  "label": "EARGO",
                  "value": "$6,902.23"
                },
                {
                  "label": "ZYPLE",
                  "value": "$7,465.27"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$7,944.54"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,132.10"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$3,857.30"
                },
                {
                  "label": "VERBUS",
                  "value": "$1,648.80"
                },
                {
                  "label": "BULLZONE",
                  "value": "$4,636.39"
                },
                {
                  "label": "ISBOL",
                  "value": "$4,151.57"
                },
                {
                  "label": "DADABASE",
                  "value": "$6,673.59"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$5,496.30"
                },
                {
                  "label": "REALYSIS",
                  "value": "$6,636.74"
                },
                {
                  "label": "QIMONK",
                  "value": "$6,730.43"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$6,040.14"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$2,023.70"
                },
                {
                  "label": "KOZGENE",
                  "value": "$2,786.52"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$3,809.15"
                }
              ]
            },
            {
              "id": "5d74c34f1c5b63dad7cf977c",
              "label": "CABLAM",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$6,752.17"
                },
                {
                  "label": "NETPLAX",
                  "value": "$3,359.58"
                },
                {
                  "label": "CINASTER",
                  "value": "$2,763.52"
                },
                {
                  "label": "ADORNICA",
                  "value": "$4,829.44"
                },
                {
                  "label": "GEEKUS",
                  "value": "$5,016.01"
                },
                {
                  "label": "FARMEX",
                  "value": "$5,281.38"
                },
                {
                  "label": "PIVITOL",
                  "value": "$5,420.84"
                },
                {
                  "label": "SATIANCE",
                  "value": "$7,488.10"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$3,242.13"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$6,566.93"
                },
                {
                  "label": "CYTREX",
                  "value": "$3,472.40"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$3,805.54"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$2,888.67"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$3,918.42"
                },
                {
                  "label": "CODACT",
                  "value": "$6,015.69"
                },
                {
                  "label": "KEENGEN",
                  "value": "$5,699.67"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$3,551.69"
                },
                {
                  "label": "THREDZ",
                  "value": "$1,128.98"
                },
                {
                  "label": "UXMOX",
                  "value": "$6,371.30"
                },
                {
                  "label": "APPLICA",
                  "value": "$7,194.02"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$5,931.21"
                },
                {
                  "label": "ZENTURY",
                  "value": "$7,634.79"
                },
                {
                  "label": "ZENCO",
                  "value": "$4,513.19"
                },
                {
                  "label": "COMTRACT",
                  "value": "$5,606.71"
                },
                {
                  "label": "EARGO",
                  "value": "$4,403.74"
                },
                {
                  "label": "ZYPLE",
                  "value": "$1,619.96"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$6,292.53"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$7,236.92"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,025.29"
                },
                {
                  "label": "VERBUS",
                  "value": "$5,908.04"
                },
                {
                  "label": "BULLZONE",
                  "value": "$6,024.71"
                },
                {
                  "label": "ISBOL",
                  "value": "$3,208.45"
                },
                {
                  "label": "DADABASE",
                  "value": "$2,101.55"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$5,705.26"
                },
                {
                  "label": "REALYSIS",
                  "value": "$4,533.64"
                },
                {
                  "label": "QIMONK",
                  "value": "$6,842.64"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$3,448.14"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$5,746.01"
                },
                {
                  "label": "KOZGENE",
                  "value": "$3,999.53"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$5,704.81"
                }
              ]
            },
            {
              "id": "5d74c34f609258db552111c0",
              "label": "RAMEON",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$7,626.78"
                },
                {
                  "label": "NETPLAX",
                  "value": "$2,015.16"
                },
                {
                  "label": "CINASTER",
                  "value": "$1,857.88"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,611.94"
                },
                {
                  "label": "GEEKUS",
                  "value": "$3,704.25"
                },
                {
                  "label": "FARMEX",
                  "value": "$7,195.31"
                },
                {
                  "label": "PIVITOL",
                  "value": "$3,193.11"
                },
                {
                  "label": "SATIANCE",
                  "value": "$5,590.72"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$7,269.60"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$2,603.74"
                },
                {
                  "label": "CYTREX",
                  "value": "$1,254.44"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$4,069.79"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$6,464.94"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$4,722.42"
                },
                {
                  "label": "CODACT",
                  "value": "$7,457.51"
                },
                {
                  "label": "KEENGEN",
                  "value": "$5,793.01"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$2,783.12"
                },
                {
                  "label": "THREDZ",
                  "value": "$1,953.81"
                },
                {
                  "label": "UXMOX",
                  "value": "$1,251.47"
                },
                {
                  "label": "APPLICA",
                  "value": "$6,238.33"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$7,346.40"
                },
                {
                  "label": "ZENTURY",
                  "value": "$3,939.41"
                },
                {
                  "label": "ZENCO",
                  "value": "$5,327.29"
                },
                {
                  "label": "COMTRACT",
                  "value": "$6,432.98"
                },
                {
                  "label": "EARGO",
                  "value": "$4,720.08"
                },
                {
                  "label": "ZYPLE",
                  "value": "$7,679.46"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$1,677.22"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$5,736.44"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$5,084.62"
                },
                {
                  "label": "VERBUS",
                  "value": "$4,571.06"
                },
                {
                  "label": "BULLZONE",
                  "value": "$1,926.44"
                },
                {
                  "label": "ISBOL",
                  "value": "$4,371.99"
                },
                {
                  "label": "DADABASE",
                  "value": "$2,489.14"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$7,879.83"
                },
                {
                  "label": "REALYSIS",
                  "value": "$2,699.83"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,521.94"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$6,336.46"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$4,221.70"
                },
                {
                  "label": "KOZGENE",
                  "value": "$6,965.31"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,934.32"
                }
              ]
            },
            {
              "id": "5d74c34f6345b7262ff7d341",
              "label": "CENTURIA",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$4,963.75"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,183.64"
                },
                {
                  "label": "CINASTER",
                  "value": "$7,074.63"
                },
                {
                  "label": "ADORNICA",
                  "value": "$3,969.90"
                },
                {
                  "label": "GEEKUS",
                  "value": "$3,208.47"
                },
                {
                  "label": "FARMEX",
                  "value": "$1,841.90"
                },
                {
                  "label": "PIVITOL",
                  "value": "$5,535.25"
                },
                {
                  "label": "SATIANCE",
                  "value": "$5,013.58"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$7,393.45"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$1,293.02"
                },
                {
                  "label": "CYTREX",
                  "value": "$3,678.93"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$7,290.84"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$7,391.06"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$5,209.16"
                },
                {
                  "label": "CODACT",
                  "value": "$3,941.48"
                },
                {
                  "label": "KEENGEN",
                  "value": "$2,973.65"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$3,759.24"
                },
                {
                  "label": "THREDZ",
                  "value": "$3,480.41"
                },
                {
                  "label": "UXMOX",
                  "value": "$3,278.27"
                },
                {
                  "label": "APPLICA",
                  "value": "$2,800.03"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$3,214.73"
                },
                {
                  "label": "ZENTURY",
                  "value": "$7,269.24"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,089.34"
                },
                {
                  "label": "COMTRACT",
                  "value": "$6,498.31"
                },
                {
                  "label": "EARGO",
                  "value": "$1,942.11"
                },
                {
                  "label": "ZYPLE",
                  "value": "$6,745.38"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$3,660.48"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$4,878.58"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$4,592.60"
                },
                {
                  "label": "VERBUS",
                  "value": "$4,292.12"
                },
                {
                  "label": "BULLZONE",
                  "value": "$7,637.68"
                },
                {
                  "label": "ISBOL",
                  "value": "$3,265.44"
                },
                {
                  "label": "DADABASE",
                  "value": "$1,530.81"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$7,686.51"
                },
                {
                  "label": "REALYSIS",
                  "value": "$6,484.29"
                },
                {
                  "label": "QIMONK",
                  "value": "$3,997.44"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$4,731.31"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$2,398.65"
                },
                {
                  "label": "KOZGENE",
                  "value": "$3,303.67"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$3,252.16"
                }
              ]
            },
            {
              "id": "5d74c34f59373a553a282978",
              "label": "ECRATIC",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$1,573.85"
                },
                {
                  "label": "NETPLAX",
                  "value": "$5,691.36"
                },
                {
                  "label": "CINASTER",
                  "value": "$6,964.98"
                },
                {
                  "label": "ADORNICA",
                  "value": "$5,352.61"
                },
                {
                  "label": "GEEKUS",
                  "value": "$5,449.73"
                },
                {
                  "label": "FARMEX",
                  "value": "$7,234.96"
                },
                {
                  "label": "PIVITOL",
                  "value": "$2,181.41"
                },
                {
                  "label": "SATIANCE",
                  "value": "$6,162.36"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$6,412.65"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$5,430.53"
                },
                {
                  "label": "CYTREX",
                  "value": "$2,710.47"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,029.46"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$5,396.54"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$6,182.69"
                },
                {
                  "label": "CODACT",
                  "value": "$2,447.40"
                },
                {
                  "label": "KEENGEN",
                  "value": "$5,560.88"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$7,153.91"
                },
                {
                  "label": "THREDZ",
                  "value": "$2,405.40"
                },
                {
                  "label": "UXMOX",
                  "value": "$2,857.54"
                },
                {
                  "label": "APPLICA",
                  "value": "$6,435.40"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$1,960.76"
                },
                {
                  "label": "ZENTURY",
                  "value": "$4,832.46"
                },
                {
                  "label": "ZENCO",
                  "value": "$4,375.97"
                },
                {
                  "label": "COMTRACT",
                  "value": "$1,491.69"
                },
                {
                  "label": "EARGO",
                  "value": "$6,632.74"
                },
                {
                  "label": "ZYPLE",
                  "value": "$1,963.85"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$7,524.19"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$4,146.35"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$7,819.49"
                },
                {
                  "label": "VERBUS",
                  "value": "$5,226.31"
                },
                {
                  "label": "BULLZONE",
                  "value": "$3,084.77"
                },
                {
                  "label": "ISBOL",
                  "value": "$7,200.78"
                },
                {
                  "label": "DADABASE",
                  "value": "$1,930.94"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$4,447.60"
                },
                {
                  "label": "REALYSIS",
                  "value": "$6,283.88"
                },
                {
                  "label": "QIMONK",
                  "value": "$5,280.13"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$4,609.81"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$6,049.74"
                },
                {
                  "label": "KOZGENE",
                  "value": "$2,300.75"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$2,700.84"
                }
              ]
            },
            {
              "id": "5d74c34ff033b76bf771fff4",
              "label": "TEMORAK",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$2,908.24"
                },
                {
                  "label": "NETPLAX",
                  "value": "$5,213.48"
                },
                {
                  "label": "CINASTER",
                  "value": "$5,408.14"
                },
                {
                  "label": "ADORNICA",
                  "value": "$4,260.45"
                },
                {
                  "label": "GEEKUS",
                  "value": "$6,905.52"
                },
                {
                  "label": "FARMEX",
                  "value": "$3,711.45"
                },
                {
                  "label": "PIVITOL",
                  "value": "$4,073.65"
                },
                {
                  "label": "SATIANCE",
                  "value": "$4,053.39"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$4,864.64"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$1,919.78"
                },
                {
                  "label": "CYTREX",
                  "value": "$7,869.62"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$7,850.81"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$2,512.83"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$6,950.55"
                },
                {
                  "label": "CODACT",
                  "value": "$3,391.96"
                },
                {
                  "label": "KEENGEN",
                  "value": "$3,924.24"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$6,070.78"
                },
                {
                  "label": "THREDZ",
                  "value": "$4,268.47"
                },
                {
                  "label": "UXMOX",
                  "value": "$3,973.40"
                },
                {
                  "label": "APPLICA",
                  "value": "$6,420.73"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$2,774.19"
                },
                {
                  "label": "ZENTURY",
                  "value": "$3,222.64"
                },
                {
                  "label": "ZENCO",
                  "value": "$6,565.82"
                },
                {
                  "label": "COMTRACT",
                  "value": "$3,313.36"
                },
                {
                  "label": "EARGO",
                  "value": "$6,415.20"
                },
                {
                  "label": "ZYPLE",
                  "value": "$6,696.99"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$4,961.42"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$3,467.12"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$6,356.41"
                },
                {
                  "label": "VERBUS",
                  "value": "$2,954.01"
                },
                {
                  "label": "BULLZONE",
                  "value": "$6,879.13"
                },
                {
                  "label": "ISBOL",
                  "value": "$7,383.37"
                },
                {
                  "label": "DADABASE",
                  "value": "$4,538.37"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$2,902.41"
                },
                {
                  "label": "REALYSIS",
                  "value": "$6,359.92"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,390.80"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$1,567.98"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$3,519.56"
                },
                {
                  "label": "KOZGENE",
                  "value": "$1,661.72"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$4,068.23"
                }
              ]
            },
            {
              "id": "5d74c34f7d195455d6654a55",
              "label": "FRENEX",
              "stocks": [
                {
                  "label": "SENMAO",
                  "value": "$3,559.91"
                },
                {
                  "label": "NETPLAX",
                  "value": "$4,104.10"
                },
                {
                  "label": "CINASTER",
                  "value": "$1,624.21"
                },
                {
                  "label": "ADORNICA",
                  "value": "$1,716.85"
                },
                {
                  "label": "GEEKUS",
                  "value": "$1,983.54"
                },
                {
                  "label": "FARMEX",
                  "value": "$6,710.27"
                },
                {
                  "label": "PIVITOL",
                  "value": "$6,733.26"
                },
                {
                  "label": "SATIANCE",
                  "value": "$3,183.05"
                },
                {
                  "label": "ASSISTIX",
                  "value": "$1,280.23"
                },
                {
                  "label": "ISOTRONIC",
                  "value": "$4,896.12"
                },
                {
                  "label": "CYTREX",
                  "value": "$5,927.95"
                },
                {
                  "label": "LUNCHPOD",
                  "value": "$2,608.20"
                },
                {
                  "label": "UNDERTAP",
                  "value": "$4,126.31"
                },
                {
                  "label": "GEEKOSIS",
                  "value": "$4,547.61"
                },
                {
                  "label": "CODACT",
                  "value": "$6,154.86"
                },
                {
                  "label": "KEENGEN",
                  "value": "$7,812.25"
                },
                {
                  "label": "ISOLOGIX",
                  "value": "$1,285.60"
                },
                {
                  "label": "THREDZ",
                  "value": "$7,761.96"
                },
                {
                  "label": "UXMOX",
                  "value": "$6,479.66"
                },
                {
                  "label": "APPLICA",
                  "value": "$2,135.37"
                },
                {
                  "label": "DIGINETIC",
                  "value": "$3,015.27"
                },
                {
                  "label": "ZENTURY",
                  "value": "$7,972.79"
                },
                {
                  "label": "ZENCO",
                  "value": "$3,517.47"
                },
                {
                  "label": "COMTRACT",
                  "value": "$7,358.11"
                },
                {
                  "label": "EARGO",
                  "value": "$1,193.52"
                },
                {
                  "label": "ZYPLE",
                  "value": "$6,194.11"
                },
                {
                  "label": "VORTEXACO",
                  "value": "$6,211.91"
                },
                {
                  "label": "GALLAXIA",
                  "value": "$6,696.17"
                },
                {
                  "label": "GUSHKOOL",
                  "value": "$2,745.93"
                },
                {
                  "label": "VERBUS",
                  "value": "$2,627.92"
                },
                {
                  "label": "BULLZONE",
                  "value": "$3,693.95"
                },
                {
                  "label": "ISBOL",
                  "value": "$6,261.53"
                },
                {
                  "label": "DADABASE",
                  "value": "$1,554.57"
                },
                {
                  "label": "QUANTASIS",
                  "value": "$5,442.91"
                },
                {
                  "label": "REALYSIS",
                  "value": "$5,658.77"
                },
                {
                  "label": "QIMONK",
                  "value": "$2,881.57"
                },
                {
                  "label": "BLURRYBUS",
                  "value": "$7,628.28"
                },
                {
                  "label": "EVENTAGE",
                  "value": "$7,854.83"
                },
                {
                  "label": "KOZGENE",
                  "value": "$1,335.41"
                },
                {
                  "label": "PROVIDCO",
                  "value": "$1,816.17"
                }
              ]
            }
          ]
        }
    ];

    documents: Array<IDocument> = [
        {id: 55211, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 43224, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 78297, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 33233, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 42223, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 97287, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 78278, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 77288, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 74265, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 12243, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 54234, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 87232, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 32222, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 62666, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 98278, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 12111, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 15269, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 73281, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 87120, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 80200, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 52554, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 32455, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 21222, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
    ];
    
    
    jaw: IJaw = {
        selectedTeeth: [11, 12, 13, 14, 15, 16,17, 18],
        selectedSmears: [212, 876]
    }
    
    constructor(){
        console.log(this.companies);
    }

    handleChange(jaw: IJaw): void {
        console.log(jaw);
    }

    showAlert(jawAlert: string): void {
        console.log(jawAlert);
    }

}
