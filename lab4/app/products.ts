export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl?: String;
  link: String;
  rating: String;
}

export const products = [
  {
    link: 'https://kaspi.kz/shop/p/poco-c65-8-gb-256-gb-chernyi-115049893/?c=750000000',
    id: 1,
    name: 'Смартфон Poco C65 8 ГБ/256 ГБ черный',
    price: 'Цена: 59 990 ₸',
    description: 'технология NFC: Да, цвет: черный,тип экрана: IPS, сенсорный, Corning Gorilla Glass,диагональ: 6.74 дюйм, размер оперативной памяти: 8 ГБ, процессор: 8-ядерный MediaTek Helio G85, объем встроенной памяти: 256.0 ГБ емкость аккумулятора: 5000.0 мАч',
    imageUrl:'https://resources.cdn-kaspi.kz/img/m/p/h83/h99/84633072730142.png?format=gallery-large',
    rating: '5 звезд'
  },
  {
    link: 'https://kaspi.kz/shop/p/realme-note-50-4-gb-128-gb-chernyi-116138550/?c=750000000',
    id: 2,
    name: 'Смартфон Realme Note 50 4 ГБ/128 ГБ черный',
    price: 'Цена: 49 939 ₸',
    description: 'технология NFC: Нет, цвет: черный, тип экрана: IPS, сенсорныйдиагональ: 6.74 дюйм, размер оперативной памяти: 4 ГБ, процессор: 8-ядерный Unisoc Tiger T612, объем встроенной памяти: 128.0 ГБ, емкость аккумулятора: 5000.0 мАч',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/hcf/84991826722846.png?format=gallery-large',
    rating: '5 звезд'
  },
  {
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a34-5g-6-gb-128-gb-serebristyi-109880741/?c=750000000',
    id: 3,
    name: 'Смартфон Samsung Galaxy A34 5G 6 ГБ/128 ГБ серебристый',
    price: 'Цена: 119 499 ₸',
    description: 'технология NFC: Да, цвет: серебристый, тип экрана: Super AMOLED, сенсорный, диагональ: 6.6 дюйм, размер оперативной памяти: 6 ГБ, процессор: 8-ядерный MediaTek Dimensity 1080, объем встроенной памяти: 128.0 ГБ, емкость аккумулятора: 5000.0 мАч',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h04/h6b/80075316527134.jpg?format=gallery-large',
    rating: '5 звезд'
  },
  {
    link: 'https://kaspi.kz/shop/p/poco-x6-pro-12-gb-512-gb-seryi-115961088/?c=750000000',
    id: 4,
    name: 'Смартфон Poco X6 Pro 12 ГБ/512 ГБ серый',
    price: 'Цена: 176 278 ₸',
    description: 'технология NFC: Да, цвет: серыйтип экрана: AMOLED, сенсорный, Corning Gorilla Glass 5, диагональ: 6.67 дюйм, размер оперативной памяти: 12 ГБ процессор: 8-ядерный Dimensity 8300-Ultra, объем встроенной памяти: 512.0 ГБ, емкость аккумулятора: 5000.0 мАч',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/h4f/85019946319902.jpg?format=gallery-large',
    rating: '5 звезд'


  },
  {
    link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000',
    id: 5,
    name: 'Смарт-часы Apple Watch SE 40 мм черный',
    price: 'Цена: 130 778 ₸',
    description: 'поддержка платформ: iOS, материал корпуса: алюминий, цвет корпуса: черный, форма корпуса: прямоугольная  интерфейсы: Bluetooth, ,Wi-Fi, ,NFC  технология экрана: OLED, объем встроенной памяти: 32 Гб, время работы: до 18 часов',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-large',
    rating: '5 звезд'
  },
  {
    link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000',
    id: 6,
    name: 'Смарт-часы Apple Watch Series 9 GPS M/L 45 мм синий-черный',
    price: 'Цена: 205 321 ₸',
    description: 'поддержка платформ: iOS, материал корпуса: алюминий, цвет корпуса: синий форма корпуса: прямоугольная интерфейсы: Bluetooth,Wi-Fi, технология экрана: OLED, время работы: в обычном режиме: 36 часов, в режиме энергосбережения: 60 часов',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-large',
    rating: '5 звезд'
  },
  {
    link:'https://kaspi.kz/shop/p/pocket-book-pb970-m-cis-seryi-103076602/?c=750000000',
    id:7,
    name: 'Электронная книга POCKET BOOK PB970-M-CIS серый',
    price: 'Цена: 156 191 ₸',
    description: ' встроенная подсветка: Да,  Цвет- серый, Размеры (ШxДxT) 17.3 х 23.6 х 7.9 см, Вес - 360.0 г, ЗарядкаUSB, от сети, Беспроводная связь - Wi-Fi, Емкость аккумулятора - 2200.0 мАч, Тип - сенсорный, емкостной, монохромный, 16 градаций серого цвета, Carta',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h14/64111133818910.jpg?format=gallery-large',
    rating: '5 звезд'
  },
  {
    link:'https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000',
    id: 8,
    price: 'Цена: 16 258 ₸',
    name: 'Фитнес-браслет Xiaomi Mi Band 7 черный',
    description: 'поддержка платформ: Android,iOS, материал корпуса: пластик, цвет корпуса: черный, интерфейсы: Bluetooth, технология экрана: AMOLED, время работы: длительность использования 14 дней',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hfd/h66/65114258571294.jpg?format=gallery-large' ,
    rating: '5 звезд'
  },
  {
    link:'https://kaspi.kz/shop/p/sony-xperia-1-iii-12-gb-256-gb-chernyi-103873281/?c=750000000',
    id: 9,
    price: 'Цена: 399 990 ₸',
    name: 'Смартфон Sony Xperia 1 III 12 ГБ/256 ГБ черный',
    description: 'технология NFC: Да, цвет: черный тип экрана: OLED, Corning Gorilla Glass 6 диагональ: 6.5 дюйм, размер оперативной памяти: 12 ГБ, процессор: 8-ядерный Snapdragon 888, объем встроенной памяти: 256.0 ГБ, емкость аккумулятора: 4500.0 мАч',
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/h68/64269960445982.jpg?format=gallery-large',
    rating: '5 звезд'
  },
  {
    link:'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000',
    id:10,
    price: 'Цена: 448 589 ₸',
    name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
    description: 'технология NFC: Да, цвет: черный тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+ диагональ: 6.8 дюйм, размер оперативной памяти: 12 ГБ, процессор: Qualcomm Snapdragon 8 Gen2, объем встроенной памяти: 256.0 ГБ, емкость аккумулятора: 5000.0 мАч',
    imageUrl:'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-large',
    rating: '5 звезд'
  }
  

];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
