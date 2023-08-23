// Import stylesheets
import './style.css';

// Write Javascript code!
var giaTriMuaOptions = {
  title: {
    text: 'TOP GIÁ TRỊ MUA RÒNG (Tỷ Vnd)',
    align: 'center',
    offsetY: 5,
    floating: true,
    style: { fontWeight: 'bold' },
  },
  series: [
    {
      data: [
        '28.24',
        '7.44',
        '6.08',
        '6.06',
        '4.43',
        '2.7',
        '2.39',
        '2.14',
        '1.6',
        '1.3',
      ],
    },
  ],
  colors: ['#00A37D'],
  chart: { type: 'bar', height: 350 },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: 'bottom',
        textAnchor: 'start',
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: 10,
    style: {
      colors: ['#373D3F'],
    },
  },
  xaxis: {
    categories: [
      'MWG',
      'VNM',
      'KBC',
      'VHM',
      'PNJ',
      'HDB',
      'BID',
      'VRE',
      'CTG',
      'DIG',
    ],
    labels: { show: false },
  },
  grid: { show: false },
  yaxis: { reversed: false, axisTicks: { show: true } },
};
var giaTriBanOptions = {
  title: {
    text: 'TOP GIÁ TRỊ BÁN RÒNG (Tỷ Vnd)',
    align: 'center',
    offsetY: 5,
    floating: true,
    style: { fontWeight: 'bold' },
  },
  series: [
    {
      data: [
        '28.97',
        '5.54',
        '5.51',
        '5.4',
        '4.22',
        '2.58',
        '2.57',
        '2.22',
        '1.87',
        '1.83',
      ],
    },
  ],
  colors: ['#FF0000'],
  chart: { type: 'bar', height: 350 },
  plotOptions: {
    bar: { horizontal: true, dataLabels: { position: 'top' } },
  },
  dataLabels: {
    enabled: true,
    offsetX: -10,
    style: {
      colors: ['#000'],
    },
  },
  xaxis: {
    categories: [
      'VIC',
      'VIX',
      'VHC',
      'SSI',
      'SAB',
      'MSN',
      'VND',
      'DGC',
      'KDC',
      'DGW',
    ],
    labels: { show: false },
  },
  grid: { show: false },
  yaxis: { reversed: true, axisTicks: { show: true } },
};
var luongMuaOptions = {
  title: {
    text: 'TOP LƯỢNG MUA RÒNG (Triệu Cp)',
    align: 'center',
    offsetY: 5,
    floating: true,
    style: { fontWeight: 'bold' },
  },
  series: [
    {
      data: [
        '0.53',
        '0.19',
        '0.16',
        '0.1',
        '0.1',
        '0.07',
        '0.06',
        '0.06',
        '0.05',
        '0.05',
      ],
    },
  ],
  colors: ['#00A37D'],
  chart: { type: 'bar', height: 350 },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: { position: 'bottom', textAnchor: 'start' },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: 10,
    style: {
      colors: ['#373D3F'],
    },
  },
  xaxis: {
    categories: [
      'MWG',
      'KBC',
      'HDB',
      'VHM',
      'VNM',
      'VRE',
      'HHS',
      'PNJ',
      'BID',
      'CTG',
    ],
    labels: { show: false },
  },
  grid: { show: false },
  yaxis: { reversed: false, axisTicks: { show: true } },
};
var luongBanOptions = {
  title: {
    text: 'TOP LƯỢNG BÁN RÒNG (Triệu Cp)',
    align: 'center',
    offsetY: 5,
    floating: true,
    style: { fontWeight: 'bold' },
  },
  series: [
    {
      data: [
        '0.42',
        '0.31',
        '0.18',
        '0.12',
        '0.09',
        '0.08',
        '0.08',
        '0.06',
        '0.06',
        '0.05',
      ],
    },
  ],
  colors: ['#FF0000'],
  chart: { type: 'bar', height: 350 },
  plotOptions: {
    bar: { horizontal: true, dataLabels: { position: 'top' } },
  },
  dataLabels: {
    enabled: true,
    offsetX: -10,
    style: {
      colors: ['#000'],
    },
  },
  xaxis: {
    categories: [
      'VIC',
      'VIX',
      'SSI',
      'VND',
      'SBT',
      'SHS',
      'VHC',
      'HPG',
      'TCD',
      'VPB',
    ],
    labels: { show: false },
  },
  grid: { show: false },
  yaxis: { reversed: true, axisTicks: { show: true } },
};
var luongBanDetailOptions = {
  series: [{ name: 'Khối Lượng Bán', data: [-5.49, -0.16, 0] }],
  chart: { type: 'bar', height: 250 },
  colors: ['#FA0011'],
  plotOptions: { bar: { dataLabels: { position: 'top' } } },
  dataLabels: {
    enabled: false,
    offsetY: -20,
    style: { colors: ['#000'] },
  },
  legend: { show: false },
  grid: { show: true, borderColor: '#90A4AE' },
  xaxis: {
    categories: [['HSX'], ['HNX'], ['UpCom']],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { show: true, style: { fontWeight: 'bold' } },
  },
  yaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { show: true },
  },
  fill: { opacity: 1 },
};
var giaTriBanDetailOptions = {
  series: [{ name: 'Giá Trị Bán', data: [-212.72, -2.92, -0.16] }],
  chart: { type: 'bar', height: 250 },
  colors: ['#FA0011'],
  plotOptions: { bar: { dataLabels: { position: 'top' } } },
  dataLabels: {
    enabled: false,
    offsetY: -20,
    style: { colors: ['#000'] },
  },
  legend: { show: false },
  grid: { show: true, borderColor: '#90A4AE' },
  xaxis: {
    categories: [['HSX'], ['HNX'], ['UpCom']],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { show: true, style: { fontWeight: 'bold' } },
  },
  yaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { show: true },
  },
  fill: { opacity: 1 },
};
var luongMuaDetailOptions = {
  series: [{ name: 'Khối Lượng Mua', data: ['4.78', '0.05', '0.07'] }],
  chart: { type: 'bar', height: 250 },
  colors: ['#00A37D'],
  plotOptions: { bar: { dataLabels: { position: 'top' } } },
  dataLabels: {
    enabled: false,
    offsetY: -20,
    style: { colors: ['#000'] },
  },
  legend: { show: false },
  grid: { show: true, borderColor: '#90A4AE' },
  xaxis: {
    categories: [['HSX'], ['HNX'], ['UpCom']],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { show: true, style: { fontWeight: 'bold' } },
  },
  yaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { show: true },
  },
  fill: { opacity: 1 },
};
var giaTriMuaDetailOptions = {
  series: [{ name: 'Giá Trị Mua', data: ['196.85', '0.92', '1.4'] }],
  chart: { type: 'bar', height: 250 },
  colors: ['#00A37D'],
  plotOptions: { bar: { dataLabels: { position: 'top' } } },
  dataLabels: {
    enabled: false,
    offsetY: -20,
    style: { colors: ['#000'] },
  },
  legend: { show: false },
  grid: { show: true, borderColor: '#90A4AE' },
  xaxis: {
    categories: [['HSX'], ['HNX'], ['UpCom']],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { show: true, style: { fontWeight: 'bold' } },
  },
  yaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { show: true },
  },
  fill: { opacity: 1 },
};

var chartGiaTriMua = new ApexCharts(
  document.querySelector('#chartGiaTriMua'),
  giaTriMuaOptions
);
var chartGiaTriBan = new ApexCharts(
  document.querySelector('#chartGiaTriBan'),
  giaTriBanOptions
);
var chartLuongMua = new ApexCharts(
  document.querySelector('#chartLuongMua'),
  luongMuaOptions
);
var chartLuongBan = new ApexCharts(
  document.querySelector('#chartLuongBan'),
  luongBanOptions
);
var luongBanDetail = new ApexCharts(
  document.querySelector('#luongBanDetail'),
  luongBanDetailOptions
);
var giaTriBanDetail = new ApexCharts(
  document.querySelector('#giaTriBanDetail'),
  giaTriBanDetailOptions
);
var luongMuaDetail = new ApexCharts(
  document.querySelector('#luongMuaDetail'),
  luongMuaDetailOptions
);
var giaTriMuaDetail = new ApexCharts(
  document.querySelector('#giaTriMuaDetail'),
  giaTriMuaDetailOptions
);

chartGiaTriBan.render();
chartGiaTriMua.render();
chartLuongBan.render();
chartLuongMua.render();
luongBanDetail.render();
giaTriBanDetail.render();
luongMuaDetail.render();
giaTriMuaDetail.render();
