import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {
      id: '1',
      name: 'Surprise Gift Basket',
      price: 999,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/gift-basket.jpg',
      description: 'Unbox joy and excitement with our carefully curated Surprise Gift Basket, filled with delightful surprises.'
    },
    {
      id: '2',
      name: 'Luxury Chocolate Box',
      price: 500,
      status: true,
      rating: 4.7,
      cover: 'assets/gifts/chocolate-box.jpg',
      description: 'Indulge in the rich and decadent flavors of our Luxury Chocolate Box, a perfect treat for any occasion.'
    },
    {
      id: '3',
      name: 'OTT Subscription',
      price: 1500,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/gift-card.jpg',
      description: 'Immerse yourself in a world of entertainment with our exclusive OTT Subscription gift.'
    },
    {
      id: '4',
      name: 'Designer Handbag',
      price: 10000,
      status: true,
      rating: 4.8,
      cover: 'assets/gifts/handbag.jpg',
      description: 'Elevate your style with our chic and fashionable Designer Handbag, a statement piece for any ensemble.'
    },
    {
      id: '5',
      name: 'Personalized Mug',
      price: 350,
      status: true,
      rating: 4.5,
      cover: 'assets/gifts/mug.jpg',
      description: 'Start your day with a touch of personalization using our delightful Personalized Mug.'
    },
    {
      id: '6',
      name: 'Perfume Set',
      price: 2000,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/perfume-set.jpg',
      description: 'Discover the essence of luxury with our Perfume Set, a captivating blend of enchanting fragrances.'
    },
    {
      id: '7',
      name: 'Jewelry Box',
      price: 4000,
      status: true,
      rating: 4.6,
      cover: 'assets/gifts/jewelry-box.jpg',
      description: 'Store your precious jewels in style with our exquisitely designed Jewelry Box, a symbol of elegance.'
    },
    {
      id: '8',
      name: 'Romantic Dinner Set',
      price: 10000,
      status: true,
      rating: 4.9,
      cover: 'assets/gifts/dinner-set.jpg',
      description: 'Create magical moments with our Romantic Dinner Set, perfect for a candlelit evening with your loved one.'
    },
    {
      id: '9',
      name: 'Leather Wallet',
      price: 2500,
      status: true,
      rating: 4.6,
      cover: 'assets/gifts/wallet.jpg',
      description: 'Upgrade your accessory collection with our stylish and durable Leather Wallet, a blend of functionality and fashion.'
    },
    {
      id: '10',
      name: 'Phone Case',
      price: 999,
      status: true,
      rating: 4.7,
      cover: 'assets/gifts/phone-case.jpg',
      description: 'Protect your device in style with our trendy Phone Case, personalized for the modern individual.'
    },
    {
      id: '11',
      name: 'Diamond Jewelry',
      price: 20000,
      status: true,
      rating: 4.6,
      cover: 'assets/gifts/diamond.jpg',
      description: 'Adorn yourself with elegance and grace with our exquisite Diamond Jewelry collection.'
    },
    {
      id: '12',
      name: 'Leather Travel Set',
      price: 5000,
      status: true,
      rating: 4.5,
      cover: 'assets/gifts/travel-bag.jpg',
      description: 'Embark on journeys in style with our Leather Travel Set, crafted for the modern-day explorer.'
    },
    {
      id: '13',
      name: 'Modern Wall Clock',
      price: 2500,
      status: true,
      rating: 4.7,
      cover: 'assets/gifts/wall-clock.jpg',
      description: 'Enhance your living space with our Modern Wall Clock, a blend of functionality and contemporary design.'
    },
    {
      id: '14',
      name: 'Eco-friendly Planters',
      price: 850,
      status: true,
      rating: 4.5,
      cover: 'assets/gifts/planters.jpg',
      description: 'Bring nature indoors with our Eco-friendly Planters, designed for the eco-conscious and nature enthusiasts.'
    },
  ];

  coupons: any[] = [
    {
      id: "1",
      code: "SAVE10",
      discount: 10,
      isPercentage: true,
      description: "Get 10% off on your order",
      isActive: true,
      expiryDate: "2024-06-30",
      minimumOrderAmount: 50,
    },
    {
      id: "2",
      code: "FREESHIP",
      discount: 50,
      isPercentage: false,
      description: "Flat 50 bucks off on all orders",
      isActive: true,
      expiryDate: "2024-12-31",
    },
    {
      id: "3",
      code: "BUNDLEDEAL",
      discount: 20,
      isPercentage: true,
      description: "Buy one get one 50% off",
      isActive: false,
      expiryDate: "2024-09-15",
    },
    {
      id: "4",
      code: "GIFTSHOP",
      discount: 30,
      isPercentage: true,
      description: "Get 30% off on orders above 5000",
      isActive: true,
      expiryDate: "2024-12-31",
      minimumOrderAmount: 5000,
    },
  ];

  constructor() { }

  getCoupons() {
    return this.coupons.filter(coupon => coupon.isActive);
  }
}
