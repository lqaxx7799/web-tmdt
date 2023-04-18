const products = [
  {
    id: 1,
    title: 'Bình hoa chân cao Explorer nhập khẩu Ecuador',
    price: '8.000.000 ₫',
    image: 'assets/images/products/p1.jpg',
    description: `Bình hoa chân cao Explorer nhập khẩu Ecuador, thảo đường hoàng đế, Đào đông đỏ, ly lửa mix cùng hoa lá phụ nhập khẩu

    – Medium size: 8.000.000 VNĐ
    
    – Big size: 12.500.000 VNĐ
    
    – Super size: 16.000.000 VNĐ`,
    suggestions: [2, 3, 4, 5, 6],
  },
  {
    id: 2,
    title: 'Bình hoa Cúc mẫu đơn Hà Lan',
    price: '1.500.000 ₫',
    image: 'assets/images/products/p2.jpg',
    description: `Bình hoa Cúc mẫu đơn Hà Lan tone hồng ngọc trai, mix cùng hoa lá phụ nhập khẩu

    – Medium size: 1.500.000 VNĐ
    
    – Big size: 2.200.000 VNĐ
    
    – Super size: 3.700.000 VNĐ`,
    suggestions: [1, 3, 4, 5, 6],
  },
  {
    id: 3,
    title: 'Bình hoa Cúc mẫu đơn Hà Lan tone cam đỏ',
    price: '2.000.000 ₫',
    image: 'assets/images/products/p3.jpg',
    description: `Bình hoa Cúc mẫu đơn Hà Lan tone cam đỏ sử dụng Cúc mẫu đơn Hà Lan, Ánh trăng, Red Naomi, tulip Nam Phi mix cùng hoa lá phụ nhập khẩu

    – Medium size: 2.000.000 VNĐ
    
    – Big size: 2.600.000 VNĐ
    
    – Super size: 3.700.000 VNĐ`,
    suggestions: [1, 2, 4, 5, 6],
  },
  {
    id: 4,
    title: 'Bình hoa Cúc mẫu đơn Hà Lan tone xanh hồng',
    price: '1.700.000 ₫',
    image: 'assets/images/products/p4.jpg',
    description: `Bình hoa Cúc mẫu đơn Hà Lan tone xanh hồng, lạc thần mix cùng hoa lá phụ nhập khẩu

    – Medium size: 1.700.000 VNĐ
    
    – Big size: 2.300.000 VNĐ
    
    – Super size: 3.500.000 VNĐ`,
    suggestions: [1, 2, 3, 5, 6],
  },
  {
    id: 5,
    title: 'Lẵng hoa chúc mừng LH01',
    price: '500.000 ₫',
    image: 'assets/images/products/p5.jpg',
    description: `Giỏ hoa tone hồng kem mix cùng hoa lá phụ nhập khẩu

    – Medium size: 500.000 VNĐ
    
    – Big size: 850.000 VNĐ
    
    – Super size: 1.050.000 VNĐ`,
    suggestions: [1, 2, 3, 4, 6],
  },
  {
    id: 6,
    title: 'Lẵng hoa chúc mừng LH02',
    price: '700.000 ₫',
    image: 'assets/images/products/p6.jpg',
    description: `Giỏ hoa tone hồng kem mix cùng hoa lá phụ nhập khẩu

    – Medium size: 500.000 VNĐ
    
    – Big size: 850.000 VNĐ
    
    – Super size: 1.050.000 VNĐ`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 7,
    title: 'Lẵng hoa chúc mừng LH03',
    price: '500.000 ₫',
    image: 'assets/images/products/p7.jpg',
    description: `Giỏ hoa ohara hồng mix Cúc mẫu đơn , cùng hoa lá phụ nhập khẩu

    – Medium size: 500.000 VNĐ
    
    – Big size: 850.000 VNĐ
    
    – Super size: 1.050.000 VNĐ`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 8,
    title: 'Lẵng hoa chúc mừng LH04',
    price: '850.000 ₫',
    image: 'assets/images/products/p8.jpg',
    description: `Giỏ hoa ohara hồng mix Cúc mẫu đơn , cùng hoa lá phụ nhập khẩu

    – Medium size: 500.000 VNĐ
    
    – Big size: 850.000 VNĐ
    
    – Super size: 1.050.000 VNĐ`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 9,
    title: 'Bó hoa tươi BH01',
    price: '850.000 ₫',
    image: 'assets/images/products/p9.jpg',
    description: `Bó hoa được thiết kế từ hoa Hồng Ohara tone hồng mix tulip Hà Lan, Cúc mẫu đơn Hà Lan nhập khẩu, Lan tường, phi yến, tuyệt cúc cùng các loại hoa lá phụ nhập khẩu

    – Medium size: 750.000 VNĐ
    
    – Big size: 1.200.000 VNĐ
    
    – Super size: 1.500.000 VNĐ`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 10,
    title: 'Bó hoa tươi BH02',
    price: '500.000 ₫',
    image: 'assets/images/products/p10.jpg',
    description: `Bó hoa được thiết kế từ hoa Hồng Ohara tone hồng mix lan tường nhập khẩu, phi yến, tuyệt cúc cùng các loại hoa lá phụ nhập khẩu

    – Medium size: 550.000 VNĐ
    
    – Big size: 850.000 VNĐ
    
    – Super size: 1.200.000 VNĐ`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 11,
    title: 'Bó hoa tươi BH03',
    price: '500.000 ₫',
    image: 'assets/images/products/p11.jpg',
    description: `Bó hoa được thiết kế từ Cúc mẫu đơn Hà Lan nhập khẩu mix cùng ly kép trắng, Cẩm tú cầu Hà Lan, đồng tiền nhí cùng các loại hoa lá phụ nhập khẩu

    – Medium size: 550.000 VNĐ
    
    – Big size: 850.000 VNĐ
    
    – Super size: 1.200.000 VNĐ`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 12,
    title: 'Bó hoa tươi BH04',
    price: '500.000 ₫',
    image: 'assets/images/products/p12.jpg',
    description: `Bó hoa được thiết kế từ Cúc mẫu đơn Hà Lan nhập khẩu mix cùng ly kép trắng, Cẩm tú cầu Hà Lan, đồng tiền nhí cùng các loại hoa lá phụ nhập khẩu

    – Medium size: 550.000 VNĐ
    
    – Big size: 850.000 VNĐ
    
    – Super size: 1.200.000 VNĐ`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 13,
    title: 'Kệ hoa tươi chúc mừng KH 01',
    price: '1.600.000 ₫',
    image: 'assets/images/products/p13.jpg',
    description: `Kệ hoa tone xanh dương trắng sử dụng Cúc mẫu đơn mix cùng hoa lá phụ nhập khẩu

    – Medium size: 1.600.000 VNĐ
    
    – Big size: 2.300.000 VNĐ
    
    – Super size: 3.200.000 VNĐ`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 14,
    title: 'Kệ hoa tươi chúc mừng KH 03',
    price: '1.300.000 ₫',
    image: 'assets/images/products/p14.jpg',
    description: `Kệ hoa tone hồng nhạt sử dụng hồng ohara mix cùng hoa lá phụ nhập khẩu

    – Medium size: 1.300.000 VNĐ
    
    – Big size: 1.800.000 VNĐ
    
    – Super size: 2.500.000 VNĐ`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 15,
    title: 'Kệ hoa tươi chúc mừng KH 04',
    price: '1.300.000 ₫',
    image: 'assets/images/products/p15.jpg',
    description: `Kệ hoa tone cam kem sử dụng hồng Juliet, mix cùng hoa lá phụ nhập khẩu

    – Medium size: 1.300.000 VNĐ
    
    – Big size: 1.800.000 VNĐ
    
    – Super size: 2.500.000 VNĐ`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 16,
    title: 'Kệ hoa tươi chúc mừng KH 05',
    price: '1.500.000 ₫',
    image: 'assets/images/products/p16.jpg',
    description: `Stande tone hồng trắng sử dụng hồng Lạc thần nhập khẩu mix cùng hoa lá phụ nhập khẩu

    – Medium size: 1.500.000 VNĐ
    
    – Big size: 2.000.000 VNĐ`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 17,
    title: 'Chậu Lan Hồ Điệp L01',
    price: '240.000 ₫',
    image: 'assets/images/products/p17.jpg',
    description: `Chậu lan điệp hàng công ty xuất khẩu.

    – 240k/ 1 bầu ( 2 nhánh)
    
    – 230k/1 bầu ( 1 nhánh)
    
    – Bình, chậu: Tính theo thực tế`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 18,
    title: 'Chậu Lan Hồ Điệp L02',
    price: '240.000 ₫',
    image: 'assets/images/products/p18.jpg',
    description: `Chậu lan điệp hàng công ty xuất khẩu.

    – 240k/ 1 bầu ( 2 nhánh)
    
    – 230k/1 bầu ( 1 nhánh)
    
    – Bình, chậu: Tính theo thực tế`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 19,
    title: 'Chậu Lan Hồ Điệp L03',
    price: '1.300.000 ₫',
    image: 'assets/images/products/p19.jpg',
    description: `Chậu lan điệp hàng công ty xuất khẩu.

    – 240k/ 1 bầu ( 2 nhánh)
    
    – 230k/1 bầu ( 1 nhánh)
    
    – Bình, chậu: Tính theo thực tế`,
    suggestions: [1, 2, 3, 4, 5],
  },
  {
    id: 20,
    title: 'Chậu Lan Hồ Điệp L04',
    price: '240.000 ₫',
    image: 'assets/images/products/p20.jpg',
    description: `Chậu lan điệp hàng công ty xuất khẩu.

    – 240k/ 1 bầu ( 2 nhánh)
    
    – 230k/1 bầu ( 1 nhánh)
    
    – Bình, chậu: Tính theo thực tế`,
    suggestions: [1, 2, 3, 4, 5],
  },
];
