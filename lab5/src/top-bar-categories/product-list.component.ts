import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {Product} from "../products";

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() likeCount: number = 0;
  products: Product[] = [
    {
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/poco-c65-8-gb-256-gb-chernyi-115049893/?c=750000000&text={text}',
      link: 'https://kaspi.kz/shop/p/poco-c65-8-gb-256-gb-chernyi-115049893/?c=750000000',
      id: 1,
      name: 'Смартфон Poco C65 8 ГБ/256 ГБ черный',
      price: 'Цена: 59 990 ₸',
      description: 'технология NFC: Да, цвет: черный,тип экрана: IPS, сенсорный, Corning Gorilla Glass,диагональ: 6.74 дюйм, размер оперативной памяти: 8 ГБ, процессор: 8-ядерный MediaTek Helio G85, объем встроенной памяти: 256.0 ГБ емкость аккумулятора: 5000.0 мАч',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h99/84633072730142.png?format=gallery-large',
      rating: '5 звезд',
      categories: 'Smartphones',
      likes: 0
    },
    {
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/realme-note-50-4-gb-128-gb-chernyi-116138550/?c=750000000&text={text}',
      link: 'https://kaspi.kz/shop/p/realme-note-50-4-gb-128-gb-chernyi-116138550/?c=750000000',
      id: 2,
      name: 'Смартфон Realme Note 50 4 ГБ/128 ГБ черный',
      price: 'Цена: 49 939 ₸',
      description: 'технология NFC: Нет, цвет: черный, тип экрана: IPS, сенсорныйдиагональ: 6.74 дюйм, размер оперативной памяти: 4 ГБ, процессор: 8-ядерный Unisoc Tiger T612, объем встроенной памяти: 128.0 ГБ, емкость аккумулятора: 5000.0 мАч',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/hcf/84991826722846.png?format=gallery-large',
      rating: '5 звезд',
      categories: 'Smartphones',
      likes: 0
    },
    {
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/samsung-galaxy-a34-5g-6-gb-128-gb-serebristyi-109880741/?c=750000000&text={text}',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a34-5g-6-gb-128-gb-serebristyi-109880741/?c=750000000',
      id: 3,
      name: 'Смартфон Samsung Galaxy A34 5G 6 ГБ/128 ГБ серебристый',
      price: 'Цена: 119 499 ₸',
      description: 'технология NFC: Да, цвет: серебристый, тип экрана: Super AMOLED, сенсорный, диагональ: 6.6 дюйм, размер оперативной памяти: 6 ГБ, процессор: 8-ядерный MediaTek Dimensity 1080, объем встроенной памяти: 128.0 ГБ, емкость аккумулятора: 5000.0 мАч',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h04/h6b/80075316527134.jpg?format=gallery-large',
      rating: '5 звезд',
      categories: 'Smartphones',
      likes: 0
    },
    {
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/poco-x6-pro-12-gb-512-gb-seryi-115961088/?c=750000000&text={text}',
      link: 'https://kaspi.kz/shop/p/poco-x6-pro-12-gb-512-gb-seryi-115961088/?c=750000000',
      id: 4,
      name: 'Смартфон Poco X6 Pro 12 ГБ/512 ГБ серый',
      price: 'Цена: 176 278 ₸',
      description: 'технология NFC: Да, цвет: серыйтип экрана: AMOLED, сенсорный, Corning Gorilla Glass 5, диагональ: 6.67 дюйм, размер оперативной памяти: 12 ГБ процессор: 8-ядерный Dimensity 8300-Ultra, объем встроенной памяти: 512.0 ГБ, емкость аккумулятора: 5000.0 мАч',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/h4f/85019946319902.jpg?format=gallery-large',
      rating: '5 звезд',
      categories: 'Smartphones',
      likes: 0
    },
    {
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000&text={text}',
      link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000',
      id: 5,
      name: 'Смарт-часы Apple Watch SE 40 мм черный',
      price: 'Цена: 130 778 ₸',
      description: 'поддержка платформ: iOS, материал корпуса: алюминий, цвет корпуса: черный, форма корпуса: прямоугольная  интерфейсы: Bluetooth, ,Wi-Fi, ,NFC  технология экрана: OLED, объем встроенной памяти: 32 Гб, время работы: до 18 часов',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-large',
      rating: '5 звезд',
      categories: 'Smart Watches',
      likes: 0
    },
    {
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000&text={text}',
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000',
      id: 6,
      name: 'Смарт-часы Apple Watch Series 9 GPS M/L 45 мм синий-черный',
      price: 'Цена: 205 321 ₸',
      description: 'поддержка платформ: iOS, материал корпуса: алюминий, цвет корпуса: синий форма корпуса: прямоугольная интерфейсы: Bluetooth,Wi-Fi, технология экрана: OLED, время работы: в обычном режиме: 36 часов, в режиме энергосбережения: 60 часов',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-large',
      rating: '5 звезд',
      categories: 'Smart Watches',
      likes: 0
    },
    {
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/pocket-book-pb970-m-cis-seryi-103076602/?c=750000000&text={text}',
      link: 'https://kaspi.kz/shop/p/pocket-book-pb970-m-cis-seryi-103076602/?c=750000000',
      id: 7,
      name: 'Электронная книга POCKET BOOK PB970-M-CIS серый',
      price: 'Цена: 156 191 ₸',
      description: ' встроенная подсветка: Да,  Цвет- серый, Размеры (ШxДxT) 17.3 х 23.6 х 7.9 см, Вес - 360.0 г, ЗарядкаUSB, от сети, Беспроводная связь - Wi-Fi, Емкость аккумулятора - 2200.0 мАч, Тип - сенсорный, емкостной, монохромный, 16 градаций серого цвета, Carta',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h14/64111133818910.jpg?format=gallery-large',
      rating: '5 звезд',
      categories: 'Ebooks',
      likes: 0
    },
    {
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000&text={text}',
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000',
      id: 8,
      price: 'Цена: 16 258 ₸',
      name: 'Фитнес-браслет Xiaomi Mi Band 7 черный',
      description: 'поддержка платформ: Android,iOS, материал корпуса: пластик, цвет корпуса: черный, интерфейсы: Bluetooth, технология экрана: AMOLED, время работы: длительность использования 14 дней',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hfd/h66/65114258571294.jpg?format=gallery-large',
      rating: '5 звезд',
      categories: 'Wearables',
      likes: 0
    },
    {
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/sony-xperia-1-iii-12-gb-256-gb-chernyi-103873281/?c=750000000&text={text}',
      link: 'https://kaspi.kz/shop/p/sony-xperia-1-iii-12-gb-256-gb-chernyi-103873281/?c=750000000',
      id: 9,
      price: 'Цена: 399 990 ₸',
      name: 'Смартфон Sony Xperia 1 III 12 ГБ/256 ГБ черный',
      description: 'технология NFC: Да, цвет: черный тип экрана: OLED, Corning Gorilla Glass 6 диагональ: 6.5 дюйм, размер оперативной памяти: 12 ГБ, процессор: 8-ядерный Snapdragon 888, объем встроенной памяти: 256.0 ГБ, емкость аккумулятора: 4500.0 мАч',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/h68/64269960445982.jpg?format=gallery-large',
      rating: '5 звезд',
      categories: 'Smartphones',
      likes: 0
    },
    {
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000&text={text}',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000',
      id: 10,
      price: 'Цена: 448 589 ₸',
      name: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
      description: 'технология NFC: Да, цвет: черный тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+ диагональ: 6.8 дюйм, размер оперативной памяти: 12 ГБ, процессор: Qualcomm Snapdragon 8 Gen2, объем встроенной памяти: 256.0 ГБ, емкость аккумулятора: 5000.0 мАч',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-large',
      rating: '5 звезд',
      categories: 'Smartphones',
      likes: 0
    },
    {
      name: 'Фитнес-браслет Xiaomi Smart Band 8 Global Version черный',
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/xiaomi-smart-band-8-global-version-chernyi-113260965/?c=750000000',
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-8-global-version-chernyi-113260965/?c=750000000',
      id: 11,
      price: 'Цена: 16 898 ₸',
      description: 'поддержка платформ: Android,iOS, материал корпуса: металл, цвет корпуса: черный, форма корпуса: овальная, интерфейсы: Bluetooth, Технология экрана: AMOLED, объем оперативной памяти: 128 Мб, время работы: 16 дней',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h05/h87/83701583446046.jpg?format=gallery-medium',
      rating: '5 zvezd',
      categories: 'Wearables',
      likes: 0
    },
    {
      name: 'Фитнес-браслет Xiaomi Smart Band 7 Pro черный',
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/xiaomi-smart-band-7-pro-chernyi-110937150/?c=750000000',
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-7-pro-chernyi-110937150/?c=750000000',
      id: 12,
      price: 'Цена: 25 898 ₸',
      description: 'поддержка платформ: Android,iOS, материал корпуса: нерж. сталь, цвет корпуса: черный, интерфейсы: Bluetooth, технология экрана: AMOLED,время работы: до 12 дней',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h9d/81348509630494.png?format=gallery-medium',
      rating: '5 zvezd',
      categories: 'Wearables',
      likes: 0
    },
    {
      name: 'Фитнес-браслет Xiaomi M2302B1 розовый',
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/xiaomi-m2302b1-rozovyi-114218970/?c=750000000',
      link: 'https://kaspi.kz/shop/p/xiaomi-m2302b1-rozovyi-114218970/?c=750000000',
      id: 13,
      price: 'Цена: 11 374 ₸',
      description: 'поддержка платформ: Android,iOS, материал корпуса: пластик, цвет корпуса: розовый, форма корпуса: прямоугольная, интерфейсы: Bluetooth, технология экрана: TFT, время работы: 14 дней',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h4d/h8f/84411074150430.jpg?format=gallery-medium',
      rating: '5',
      categories: 'Wearables',
      likes: 0
    },
    {
      name: 'Фитнес-браслет Huawei Band 7 LEA-B19 черный',
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/huawei-band-7-lea-b19-chernyi-105583000/?c=750000000',
      link: 'https://kaspi.kz/shop/p/huawei-band-7-lea-b19-chernyi-105583000/?c=750000000',
      id: 14,
      price: 'Цена 54 000 ₸',
      description: 'поддержка платформ: Android,iOS, материал корпуса: полимер, цвет корпуса: черный, интерфейсы: Bluetooth, технология экрана: AMOLED, время работы: до 14 дней',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h8d/64534403252254.jpg?format=gallery-medium',
      rating: '5',
      categories: 'Wearables',
      likes: 0
    },
    {
      name: 'Электронная книга POCKET BOOK PB618-P-CIS черный',
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/pocket-book-pb618-p-cis-chernyi-114176366/?c=750000000',
      link: 'https://kaspi.kz/shop/p/pocket-book-pb618-p-cis-chernyi-114176366/?c=750000000',
      id: 15,
      price: 'Цена: 61 302 ₸',
      description: 'Цвет: белый,Размеры (ШxДxT): 194x136.5x6.3 мм, Вес 230.0г, встроенная подсветка: Да',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2e/he8/84390535331870.jpg?format=gallery-medium',
      rating: '5',
      categories: 'Ebooks',
      likes: 0
    },
    {
      name: 'Электронная книга Amazon Kindle 11 черный',
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/amazon-kindle-11-chernyi-107572855/?c=750000000',
      link: 'https://kaspi.kz/shop/p/amazon-kindle-11-chernyi-107572855/?c=750000000',
      id: 16,
      price: 'Цена: 74 900 ₸',
      description: 'Цвет: черный,Размеры (ШxДxT): 157.8x108.6x8 мм, Вес 158.0г, встроенная подсветка: Да',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h83/65742545485854.jpg?format=gallery-medium',
      rating: '5',
      categories: 'Ebooks',
      likes: 0
    },
    {
      name: 'Электронная книга PocketBook 628 красный',
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/pocketbook-628-krasnyi-100862217/?c=750000000',
      link: 'https://kaspi.kz/shop/p/pocketbook-628-krasnyi-100862217/?c=750000000',
      id: 17,
      price: 'Цена: 81 990 ₸',
      description: 'Цвет: красный,Размеры (ШxДxT): 108x161x8 мм, Вес 155.0г, встроенная подсветка: Да',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h40/h1e/63950230683678.jpg?format=gallery-medium',
      rating: '5',
      categories: 'Ebooks',
      likes: 0
    },
    {
      name: 'Электронная книга ONYX EDISON белый',
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/onyx-edison-belyi-107846569/?c=750000000',
      link: 'https://kaspi.kz/shop/p/onyx-edison-belyi-107846569/?c=750000000',
      id: 18,
      price: 'Цена: 158 255 ₸',
      description: 'Цвет: белый,Размеры (ШxДxT): 194x136.5x6.3 мм, Вес 230.0г, встроенная подсветка: Да',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/hac/66423827431454.jpg?format=gallery-medium',
      rating: '5',
      categories: 'Ebooks',
      likes: 0
    },
    {
      name: 'Смарт-часы Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46 мм черный-черный',
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000',
      id: 19,
      price: 'Цена: 44 690 ₸',
      description: 'поддержка платформ: Android, материал корпуса: алюминий, цвет корпуса: черный, форма корпуса: круглая, интерфейсы: Bluetooth,NFC',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h47/64342261268510.jpg?format=gallery-medium',
      rating: '5',
      categories: 'Smart Watches',
      likes: 0
    },
    {
      name: 'Смарт-часы Apple Watch SE 2 Gen (2022) 40 мм starlight-бежевый',
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/apple-watch-se-2-gen-2022-40-mm-starlight-bezhevyi-106362759/?c=750000000',
      link: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-2022-40-mm-starlight-bezhevyi-106362759/?c=750000000',
      id: 20,
      price: 'Цена: 132 253 ₸',
      description: 'поддержка платформ: iOS, материал корпуса: алюминий, цвет корпуса: starlight, форма корпуса: прямоугольная, интерфейсы: Bluetooth,Wi-Fi,NFC, технология экрана: OLED, объем встроенной памяти: 32 Гб',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/hf8/64534203301918.jpg?format=gallery-medium',
      rating: '5',
      categories: 'Smart Watches',
      likes: 0
    },
    {
      name: 'Смарт-часы Huawei Watch GT 4 46 мм серебристый-черный',
      sharelink: 'https://t.me/share/url?url=https://kaspi.kz/shop/p/huawei-watch-gt-4-46-mm-serebristyi-chernyi-113401540/?c=750000000',
      link: 'https://kaspi.kz/shop/p/huawei-watch-gt-4-46-mm-serebristyi-chernyi-113401540/?c=750000000',
      id: 21,
      price: 'Цена: 67 666 ₸',
      description: 'поддержка платформ: Android,iOS, материал корпуса: нерж. сталь, цвет корпуса: серебристый-черный, форма корпуса: круглая, интерфейсы: Bluetooth, технология экрана: AMOLED',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h20/83882559864862.jpg?format=gallery-medium',
      rating: '5',
      categories: 'Smart Watches',
      likes: 0
    }

  ];
  categories = [
    {
      categoryName: 'Wearables'
    },
    {
      categoryName: 'Smartphones'
    },
    {
      categoryName: 'Smart Watches'
    },
    {
      categoryName: 'Ebooks'
    }
  ];
  filteredItems: any[] = [];
  allItems = this.products;

  constructor() {
    this.filteredItems = this.allItems;
  }

  filterItems(categories: string) {
    console.log('filtering ', categories);
    this.filteredItems = this.allItems.filter((item) => item.categories === categories);
  }

  showAllItems() {
    this.filteredItems = this.allItems;
  }

  like(products: Product) {
    products.likes++;
  }

  // removeItem(num: number) {
  //   this.filteredItems = this.products.filter(product=>product.id!==num);
  // }
}
