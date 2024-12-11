export const shops = [
  {
    id: 'shop1',
    name: 'FarmTech Solutions',
    address: '123 Agriculture Road, North Region',
    phone: '(555) 123-4567',
    rating: 4.8
   
  },
  {
    id: 'shop2',
    name: 'Green Thumb Supply',
    address: '456 Harvest Street, South Region',
    phone: '(555) 234-5678',
    rating: 4.6
  },
  {
    id: 'shop3',
    name: 'AgriPro Equipment',
    address: '789 Farming Avenue, East Region',
    phone: '(555) 345-6789',
    rating: 4.9
  },
  {
    id: 'shop4',
    name: 'Rural Essentials',
    address: '321 Countryside Lane, West Region',
    phone: '(555) 456-7890',
    rating: 4.7
  },
  {
    id: 'shop5',
    name: 'Harvest Hub',
    address: '654 Field Road, North Region',
    phone: '(555) 567-8901',
    rating: 4.5
  }
];

export const products = [
  {
    id: 'p1',
    name: 'Professional Tractor',
    description: 'High-performance tractor with advanced features for efficient farming',
    price: 45000,
    category: 'Machinery',
    brand: 'AgriPro',
    inStock: true,
    image: 'https://plus.unsplash.com/premium_photo-1678344155179-17f90678aca5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shopId: 'shop1',
     location:'North Region'
  },
  {
    id: 'p2',
    name: 'Organic Fertilizer',
    description: 'Premium organic fertilizer for healthy crop growth',
    price: 49.99,
    category: 'Fertilizers',
    brand: 'GreenGrow',
    inStock: true,
    image:"https://plus.unsplash.com/premium_photo-1663089572474-6e2dc35d0ede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JnYW5pYyUyMEZlcnRpbGl6ZXJ8ZW58MHx8MHx8fDA%3D",
    shopId: 'shop2',
    location:'North Region'
  },
  {
    id: 'p3',
    name: 'Irrigation Sprinkler System',
    description: 'Advanced irrigation system for efficient water distribution',
    price: 299.99,
    category: 'Irrigation',
    brand: 'WaterPro',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1541955193702-9ca03b1bb11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SXJyaWdhdGlvbiUyMFNwcmlua2xlciUyMFN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D',
    shopId: 'shop3',
    location:'North Region'
  },
  {
    id: 'p4',
    name: 'Garden Tiller',
    description: 'Powerful tiller for soil preparation',
    price: 599.99,
    category: 'Tools',
    brand: 'TillMaster',
    inStock: true,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnW8mbHon_yVvhzf2p3aj9cE3wfqtEjaBW8hdisEEmfAZKFqYv-Bf7U8LLrfRPbEUzCC5Y-udGAGQuPFn1SZ0QWQGArQzyHutKLivkU-RrNytKYuKb5O87tyXaRcQF4VpDbzro90mStsw&usqp=CAc',
    shopId: 'shop4',
    location:'North Region'
  },
  {
    id: 'p5',
    name: 'Premium Seeds Pack',
    description: 'High-yield vegetable seeds variety pack',
    price: 24.99,
    category: 'Seeds',
    brand: 'SeedPro',
    inStock: true,
    image: 'https://plus.unsplash.com/premium_photo-1664007711018-d7cb92e664b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJlbWl1bSUyMFNlZWRzJTIwUGFja3xlbnwwfHwwfHx8MA%3D%3D',
    shopId: 'shop5',
    location:'North Region'
  },
  {
    id: 'p6',
    name: 'Harvesting Machine',
    description: 'Efficient harvesting machine for various crops',
    price: 12000,
    category: 'Machinery',
    brand: 'HarvestTech',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1481555716071-8830d3e254ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGFydmVzdGluZyUyME1hY2hpbmV8ZW58MHx8MHx8fDA%3D',
    shopId: 'shop1',
    location:'South Region'
  },
  {
    id: 'p7',
    name: 'NPK Fertilizer',
    description: 'Balanced NPK fertilizer for optimal plant growth',
    price: 39.99,
    category: 'Fertilizers',
    brand: 'NutriGrow',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/71KdSj45HqL._SL1500_.jpg',
    shopId: 'shop2',
    location:'South Region'
  },
  {
    id: 'p8',
    name: 'Drip Irrigation Kit',
    description: 'Complete drip irrigation system for precise watering',
    price: 159.99,
    category: 'Irrigation',
    brand: 'DripMaster',
    inStock: true,
    image: 'https://media.istockphoto.com/id/180775585/photo/farm-irrigation-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=3H83trb9dJ6tdaVH99Io_s7x71xtiSFtT_aC6UIFqi8=',
    shopId: 'shop3',
    location:'South Region'
  },
  {
    id: 'p9',
    name: 'Professional Pruning Shears',
    description: 'High-quality pruning shears for precise cuts',
    price: 49.99,
    category: 'Tools',
    brand: 'PruneMax',
    inStock: true,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScSeKmSES-Ju6BgNaVRsrNDgYTlE_OEXiTsOn-WdNap1IXbq9fgajXgSEQySGWNh_dsGH0nRQVyDyMpPSgNmFFG5Bk8M3hMSdRva7AfBFg',
    shopId: 'shop4',
    location:'South Region'
  },
{
    id: 'p10',
    name: 'Fruit Tree Seeds',
    description: 'Premium fruit tree seeds variety pack',
    price: 34.99,
    category: 'Seeds',
    brand: 'FruitGrow',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    shopId: 'shop5',
    location: 'South Region'
},
  {
    id: 'p11',
    name: 'Mini Cultivator',
    description: 'Compact cultivator for small farms',
    price: 799.99,
    category: 'Machinery',
    brand: 'CompactPro',
    inStock: true,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcScxpyRxD1apm4iQ_9esTGFJ3N7eT6DkeinD_C5-PpLkS9Za7FlpQB0CGiUECO2gAw-hFPXCfojxwW_jQ3tOWVyetHsz8d5l1fknlpGHpfuieN4D5dsa-vx',
    shopId: 'shop1',
    location:'South Region'
  },
  {
    id: 'p12',
    name: 'Liquid Fertilizer',
    description: 'Fast-acting liquid fertilizer for quick results',
    price: 29.99,
    category: 'Fertilizers',
    brand: 'QuickGrow',
    inStock: true,
    image: 'https://plus.unsplash.com/premium_photo-1661942064041-a15c0c93d2a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGlxdWlkJTIwRmVydGlsaXplcnxlbnwwfHwwfHx8MA%3D%3D',
    shopId: 'shop2',
    location:'East Region'
  },
  {
    id: 'p13',
    name: 'Sprinkler Heads Set',
    description: 'Professional-grade sprinkler heads set',
    price: 79.99,
    category: 'Irrigation',
    brand: 'SprayPro',
    inStock: true,
    image: 'data:image/jpeg;base64,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',
    shopId: 'shop3'
    ,
    location:'East Region'
  },
  {
    id: 'p14',
    name: 'Garden Tool Set',
    description: 'Complete set of essential garden tools',
    price: 149.99,
    category: 'Tools',
    brand: 'ToolMaster',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/71-4IGXtwGL.jpg',
    shopId: 'shop4',
    location:'East Region'
  },
  {
    id: 'p15',
    name: 'Herb Seeds Collection',
    description: 'Comprehensive herb seeds collection',
    price: 19.99,
    category: 'Seeds',
    brand: 'HerbLife',
    inStock: true,
    image: 'https://plus.unsplash.com/premium_photo-1725878607601-db35b20463e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVyYiUyMFNlZWRzJTIwQ29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    shopId: 'shop5',
    location:'East Region'
  },
  {
    id: 'p16',
    name: 'Plowing Machine',
    description: 'Heavy-duty plowing machine for large farms',
    price: 8999.99,
    category: 'Machinery',
    brand: 'PlowMaster',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1707235163396-fb91d3353a87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGxvd2luZyUyME1hY2hpbmV8ZW58MHx8MHx8fDA%3D',
    shopId: 'shop1',
    location:'East Region'
  },
  {
    id: 'p17',
    name: 'Compost Accelerator',
    description: 'Natural compost accelerator for faster decomposition',
    price: 19.99,
    category: 'Fertilizers',
    brand: 'CompostPro',
    inStock: true,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStqPVyPedDlhGTDOIvnnelHGXFsErF6pd5CVQvGz_9pM1o__3T7laXD5HJqpVLszEw75MxA2-25fVLxqmIOJCw61Rz5sBZ28f8MjfRdJ4&usqp=CAc',
    shopId: 'shop2',
    location:'East Region'
  },
  {
    id: 'p18',
    name: 'Water Timer',
    description: 'Programmable water timer for automated irrigation',
    price: 44.99,
    category: 'Irrigation',
    brand: 'TimePro',
    inStock: true,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZqX3MPGUF99-w7aIPB-li3vArf3SW__2-pcaCkLp5VuDOHs8Kr1OTsfgDCJDpst3aWSwJLrkgtgqaCEjiaewfSAFZAT1nwGqAlEAFs4QH-gg9qf-okDYFdg',
    shopId: 'shop3',
    location:'East Region'
  },
  {
    id: 'p19',
    name: 'Pruning Saw',
    description: 'Professional pruning saw for thick branches',
    price: 39.99,
    category: 'Tools',
    brand: 'SawPro',
    inStock: true,
    image: 'https://plus.unsplash.com/premium_photo-1679444931012-f8505c899afc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UHJ1bmluZyUyMFNhd3xlbnwwfHwwfHx8MA%3D%3D',
    shopId: 'shop4',
    location:'East Region'
  },
  {
    id: 'p20',
    name: 'Flower Seeds Mix',
    description: 'Colorful flower seeds mixture',
    price: 14.99,
    category: 'Seeds',
    brand: 'FlowerJoy',
    inStock: true,
    image: 'https://richjeen.com/cdn/shop/files/neq1_30e001ee-3f8f-4b6b-b3fb-884933ba5422.webp?v=1709803333&width=1445',
    shopId: 'shop5',
    location:'East Region'
  },
  {
    id: 'p21',
    name: 'Seed Planter',
    description: 'Automated seed planting machine',
    price: 2499.99,
    category: 'Machinery',
    brand: 'PlantTech',
    inStock: true,
    image:'data:image/jpeg;base64,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',
    shopId: 'shop1',
    location:'East Region'
  },
  {
    id: 'p22',
    name: 'Soil Enhancer',
    description: 'Professional soil enhancement solution',
    price: 59.99,
    category: 'Fertilizers',
    brand: 'SoilPro',
    inStock: true,
    image: 'https://www.pioneeragroindustry.com/shop/wp-content/uploads/2018/07/Rich-Soil-Enhancer-scaled.jpg',
    shopId: 'shop2',
    location:'East Region'
  },
  {
    id: 'p23',
    name: 'Irrigation Controller',
    description: 'Smart irrigation control system',
    price: 199.99,
    category: 'Irrigation',
    brand: 'SmartWater',
    inStock: true,
    image:'https://m.media-amazon.com/images/I/51uEX9kvs2L.jpg',
    shopId: 'shop3',
    location:'East Region'
  },
  {
    id: 'p24',
    name: 'Leaf Blower',
    description: 'Powerful leaf blower for farm cleanup',
    price: 129.99,
    category: 'Tools',
    brand: 'BlowMaster',
    inStock: true,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQMGBwIBAAj/xABEEAACAQIEAwYDBgQDCAAHAAABAgMEEQAFEiETMUEGIlFhcYEUMpEHI0KhscEz0eHwUoLxFRYkQ1NicpIlNERzg7LC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQIAAwQFBv/EACoRAAICAQQCAAYBBQAAAAAAAAABAhEDBBIhMUFRBRMUIiNhMnGBobHw/9oADAMBAAIRAxEAPwCiTQu7xwIIWJ7mpWvy5fliJKaJgkbPYmSxZ+QO/P3xO08i6KlAJxGd+9ysLbeXtgSOZ5X1spPFJZjbpe/9+2KKEHkeXTs6Q6oWlqTrvFHfhIOTEjkCG6+GNHp+y9cs1JBVpQ1kJpWjmqIY/vAyupVA3TY/Nz2OKv2akpaKr4yV6RvwQmjhEiYG506ufPoRa+NAdnzGipcwFLaSK5Wmp6lopI+61yNIu3Ne6dsWxSRBTU9mcoy+t0U1VT8aON1p6eWmBVGI1JqYg3OsL+mHWWZXRZxGtbwzSVkKrGWiVbRONyQLW1A3HlfHmdZRl1WsWeVRroJYNAvCl3I/wkWv/YxYoNU8UM8BXQy6gpUx3Pnb8xbD0FHTUaNRfBSgzxsmiQyG5YdScVLtnlFDB2QraDLaBo2gC1EBQD5tRJOom+299+Rti4ylOARKrKp2IUn9sCmCipapeHGYpJ+6Qg7rgXO/S/nz6YFBMXy3tVUf7ryZNKzFuNEKVUUWkQkllY+w88aN2eyOigy2eqr5+LmGYwlKiUm+gNyUem30GM27T5YvZ3tbLAt9HEE8Bv8AhO4vYjluMNe0/aBakw5Z2bllhV111TRMUW9he9um1yb9cALFGdZIlNmJoMrmkzSsQAs8Q1KgPO5HX+WPB2ZjmngiFYzVcjEmKFdtCkXZSbXt7csal2d7Ppl/ZmGnySdKWpdg09ZEgcyFTvz58remAsxyGmpa2lbOZ6aZBSrDE8q2sV3JIv3hz3PLb1wuwAnouzU1FXypXZkZKalhBnpobRlmJ7puoFuhHhgXtHlOQiSlOWJUh2AUlW1m6ry35/Mtz4EYdNRlaCduFWVc8+j+KlkKBt2DWvY6i2k3+mKmuXtSzSZWkZllpZdbVAcSRqtmOmx5b3O2CKz2tpBBQKwhlp8zX7p4QQzRiNRYmx5tdSD/ANpwZl2WBjS1k7iWqmQlEmBaMyAEKDa1iDb0JGCZ81yZgZYpZ5avQ0FZNIveMbAd5QNgUIHhtfxx9S9nZh/xFXmBWKMqIUFg4ZrBeXLmD7YrkuQmZ9pZ6iqzqcVhZpYgIWLc7Dff3JwpuQO9grMnZ80rXZiSamQklrn5jzPX1xASrm2nbGhdEPralDLzGDMnp/i8xpac90SSAHbkP7GAx92fI4d9jYHqO0EEkajhwAyMTyHh+ZxTqcny8Upeky3DHdNL9mo0FBFAxKBeJYd9v0Hhg6ILSSmoVr32ZES9xgalfiDQH7w5EjY4KWdqeGx0hr2u+4PvjwsXb3M9HJcbUR1KZe7mpiEtJMpBLaSAPUeGOcymppIVjaxWchW1k6WPOwPOxwDmmcTUzSmqljFMLFtabaSOWOO0BAyFKlI9dgdcyyaNIO1xY+HL1x0tJjc80X4MWoahjZFW1kNParkqnEOnuRk602JGm/hddsKc1radKhVq4vvQguRMFDA3IIAIwDQSxpS1dPHUxvA5sWmjuSLDlbkPLB08+WZcUhmERfQCTJ3SenI9Nsei82ce+CkQ0wTjtBVF5IO8yRjex6W6nwwzz+kioa6WOhvHJBw46mMJccRkDMynqCW2FgRY4cZdkMUGWUMtHHHFnEWYOswqHNgkagkOBysQRtfyx39pVC9JXxzVVTDJLXQArwY9LOygAF99zyFx4W8L30IFUGWZdN2hmEawtl9PQCqiWewD9yzIzWIVg9ybjrjUaKhpaiJa3L0NDVywhWYL3lGm1iG5AWB2tfSMZFkdTLQ5jBlsMWnLK2TTVQNOHRlYKN3G4O3MHe2Lj2WzKvgz6mpo2efKp5ZIyBBY0rLcBNV+8vI3267c8MiFuyqLN6eFYquRan7xgZJWAYJfa4AN9vO5w4GPOXvj3BGPuYPp448tcAMAbeOPcfYhDL/tky0K2WZhGCLl4X258mX9G+uIfsxo6NJZKpmBnZWjs0X8NRY3Dct7jY4sH2pULS9nRPxG0w1aOwO/zXQW8N2H0ws+zKKs4dTDBIiwpUIZTqs1tB2Asb3sBzH8wHwXyCCWkpIllm4scCHVqQamsb37u3LoBiKtnhqYY5I1hlfcosoFwSL6SLXBI5+mGY54gWjp0lMqwosjMGZgouT44IoLmFJLVzJGs8sUPDa5jYpp/Y+h5DGfZtkBkztxldDW0c1UpM0UEwVZAo5IwGmx0733u2NOngiqNpkDi97HpjpY0RQI1AAuQPA/2cQlGd9s8jggyGnqoXSnkp+FHVoiahIANtTcxYE79bjyxUqzLPgxTV8FTqp6iSwS5BjktdduZQm1ji55xFAKyrTMJqpMvcniQwLfd17isADckhrAHbbffCFsskp6HMszlJFFTwosCMjC7lgDsxNrAXI23tirIuGRLkyuq71RKbjvOTt64iUWxLIp1nUoJ5nEbCzDpi9dBZ8dxvyxoXYKlaDJhUBISlRIzu0m57p0gAe1/fFFpKWatqBTUsZeRzsBy9SfLGq5TQvleU0tI1NJKYgNbxC6X6ke+ON8ZzVi+XF8v/Rv+H47nufSHK0tPW06lmdB00PYfTxx5S060LlZJxNSvs8ci2O52scBmlzGW7UtSi3H8PRo/X+uFfaOeqosonqqkssmkKFLba9QA/n7Y4GPFKTUF2zpzkkm2A9vqqjSlp6SnkEgD3a97qo8fE74IyqenzjII6eoPE+EJWxuutbbMDba1vPlijqEzCZ5MxkkMzG/EILBgeu2H+SSCnhVqWqWKCPYPPETr2seV7bE2x6rFpI4cMYvtc/3OHlzucn6G+Vx01NUVcRiSOKUhyQ1iy2uR5i5vta9+WCDSpraR62CQzHia5gHY39th5YRyUk9VUwsvEkpqWCweEKzXJLb77new8gMWD/a+WyqgigijCLpKuUVgeZvzubnniykyiyrx59WxmKomn45afjSq8JUBzvc9GsAPriLtb/xlTlJihf4daGOKmiRO8b98AjxuxH+XzwwyrOsni7M1FBNHFNV1F5FMouI2Jtt523vgns3Fl78LMc0rkjfLVQpCZbcVV2Wx6nun8sWc9AGnY7JJMtr3o69Y1qYZadJ4HQsrIWuGBPUd0eWrzxpK5RHBUUElC3wsVK0uuKNe7KHG4PuAb+WFSdpskj4sxqYY9bBnZ13c22PibWt7YMh7Q5c6qUr6Vlbl3/riwah3Yc8fYDhr4poxJDJHKh5MjXGJhUb2K/Q4NBonGPsCxV8Es00MbXkiI1qOlxcYm4yi2q4v44gKK79o0mjsnUra+uSNfTvg/scJfsucfFZogPzLGQPS/8ATDf7RozUdmZjCdRgmjZ1G5I1W3+t/bCP7OnSnrc3law4cIbc9Of7YXyN4NGGPcRU0omp4pSNJkRW035XHLHbyJEheVgijmWNgMEU9tjy4PUbYWpm3xw/+DxfEi9uO11iv5N+L2x8KwwM3xFUamYbNHAoCL6+HucGmK2kTUWWU9HLJNAkmuQkuWYte5v1/LFT+1OrpaPsnU0YISaqYWjXmRfvG3hhxV57Uo4Hw8cYJ2udRxm32k5zUVzJDUsoSCQAKFt0uT+n0wMkXFK12xsbUrrwZ5MfvHPLfliFu8b3x3IULHTuvj44jb5rDceI6YYBbewTNFLWTJLSK2lUKzne3PbF8ipYq6JZEZ9R+cCpYWPkMZPkUFJLndDHWvCkQfU5mIA/PzxpEmVSRkVGUzFFP/TbUh6+ntjznxTG1mu+/wBHY0U18uj2poik/cqRVIvzIJAZI/fAfaDLyMolgqUR2W8mprkrsx28DZbe+GDyPKsRr6I8ctoSZCPz/lgztFHHIhR11B4rLbo1mA/XGTRyrNFv2XZ1+N0ZHFLKIWQSsFADBQQeh2w3yWonp5JlFTLFTyQuzqtj3QdjY/thdREOnBZe/ZlB8Rfb98GEJBHTy61Eui0lMwOthz32226Y9XkfBwWNaapGSipMDx1TSaQ0yqxuQB3R/hYAgHwIxDDUw1KmY0hcsbkksN+vLnhY/wAFFmAniWSSMx2be1j69cOKHM8qhpkWqafWdxw6a4tihioqdFKkNXCX0uAfxICCbYlmqjLPxlAVVHcS9wB4WwNTqjqvGWVwVLKEXkfe/niWkonniMkViACdyARbc40cC0fPVmRlEgtYWBXu4JinZNBDHULMCDsMDRyIkoZVuCTsy6reGJzEyOgnQ8PicN7DcEAE29jiBoZQ5lVQXMVTIpdCCUexseYviSPPa1bP8VPrQd1g9yu1uvlhdLEojax06FLIzP8AxV1ACw6G3TFm7N5dllDDHmGZxQ1M8pC09LUX4WsnbVvv7i2/XBSshBl+cZ3Oogy2SoKOf+ShJ5D5tI8vzxacqn7cAcOKmq23GkzAAW89W5GG1Fnec1Kxx5eaZIOGtoqKj3jbkV73dFsWzJYq9qdWzF6ji6jfiSruOgsgA5WwdtBKWnZLtFWLVCqMECVRV3U1Tt373LECwbyBuBhlQdhpYqiSWpqKeQFCIwAwKOQAG/XFyklipo+JLKqLexZ22+pwIM4yzVpWtg5/4sChk6RxSUGYwUwSTMuK4QIWaIaVsLbD+ZwNW5VTLG1Zm5nzMxDUIil128EHPDmKSOVdcTq6+Ia4x3tax5YgKRWKDtlk9bAElJWU3U0wgZyB0FgN9umOcyqJKhYHyrLp1isdQan0WHSwPLrixSUdJLLxZKWB5R+NowW+uJxYLpGw8Bhk6fAJRUlTKBLBmssvEkop78h3cVX7TYamPJ6OSeneMCdlGtLA3Xbf2xtN8Vb7SsoOddkqyFAzTQWqI1AuSV6e4Jw0srlwwRgkfnhIDJKUUqF56jy/1xeMu7IZY2Vzy1BmqDGh+8VtI1gXsB188IaqJInXRqAklW3scPaDMq6lp5UiVpqUqzuqA6lW12t05YzZ96h9hfh2uX3CI5Z/tSsaPKqdIzDH32LW6Da/X0wfAppJFjFDVxMkaK1RRlrSE2IOtSL8iPfyGIjXZYtGlVlskcEoLsaWx1O5GlbnqAP1vgJazP8AOCaGjlIThCGRYlCrpve5NtuflewxjyZZ5Fuql+zVCEYuvLLdkfxUuYM0sta0Edgi1cpchr7keHTD7PYq16AnL6OoqJiSqrCwuDzFz0FxjjJclnWFFay7C/5fXF1jVaelHEkEaAbkkDHFx/kzvK+kbsrUMW1dmKUfZ2upZOFmlC8LiTUh53ueVxjuvjgymGshq6QCqFtbS7yA+Orna2NPq3rJ3nXL5ODC8ZCySRi6ki218ZFnaJQ11OaOV3EShmkkOqRpA1zqY/NcnrtzGO5g1P1CaaracrUYPl07F61EK0oERJm4h+7A7tgBvv6n6Y7E81OAKchkcB7tEG3IxFCvxNU9TIivLJIzMCoA5+H15YOXtGIVEa0VOdO1yvtjSjMKdc0UgN3UlbjVp525D649DssYQDUpNzdQdt77emCGyXMSGLxEWsdG++PGy6r0RXpGKre5APew+6PsO1hVS1Ocwkp8ri0U7RiPXIRd7bkkjxN/ribL6CCV3WeZYY+GH0M7E8wpG/JtwRsdsLFoKn/pFV236jE7005cSgSGVTuT12xNy9k2sMjymSqq44nZVmefhDS5YBdNyxNuQ8PLGl0WQdissmRswrKepMYURpUSXAt+IjqSfHYbYztMxzCXNKaoromdUVkRYgAflKgeY3wxlyJpuzq53RBtUZCVNMQSY2GxIPh6+OLYbWBpm1ZVmeW5hEy5VPC6R91hGNhiDtNncOR5TLWyqGPJEJ+Zug9MZb2R7QTZDldXVwQpKzSIrJIehv4HA/a/tNP2mpaaGop1gCzAARud78yQetgfrg7eSJgdZmmcdpKhqurrTT0xPdaxuw/7R0H9745TJVZNaVOZgHlJbY+m2LF2cyyGsSWonlEMcCaIGMYYK55ErfcC3IDBNNJm1Dl+Z0Xxz1E0iOtLU2HzOUFwOlrMbHlbAsZor2X51nPZaojmapNTQM1uIBuPJh/PGxZNm0WaZfFUxEd75lBvY+uM4nyqcZNTtmyR66lTHMIFOgHoQTsT5jriLsNnMuTZayMpmfitDYtZbqTa2J2BmtFzfnj4OfHFfp+0cMkCSTwyRSFRqW17HEg7RUY+YuB/9s4NAse6/PHqm+2EY7R0HWRx6xNjtO0mW3AaY77C8TD9sTaSzOqKhoJp6upqqanlY1shQyoGC942tfDyWjR6GWkgVIVkiZBYAKtwRfbCahWlPxB1Bi9VI5H+Y6f1xaqGemlGlF1TW3QjvH9seQ1k55NXJJvhnewRjHBHjwZhS9g83hrhE6R8A86iI6lIHh1v5HGiZF2fp8vhSOOK19wnVj/iY4dJHwhxZyqeQO3vbn+mBamtJRvhvltYueoHh/TFmp1EsqTyvj0JixqLah58hL1CUtooQss5G5OwH8hgOrrYIVM9ZLxSvjyXyA6frhXJV6b6TYHmevqTiISO6k2UKPxNyxz5atvhLg1LTpKyWqrqmt5N8PFyDEXY+i9PfGb1QMtTWVkkfckq5RDc7gazY28PDGgUNdRPVsj8ViouJAhKk+g3xT+2MUsVbTxCDRG7mSFrkFBfYN4Hl6eeO18KWRuUpKkzn69RSSTK0/xBjjQI66mLMbWFyT18NseUlX8OjIEo/m/5kCufqcTySTR0qxy1LtrVWIU3QDcgH3J288cRwhhZY2FtjdOuO1RzODTnmnB7+UuT48L+mO6er0paXKpfIBPL0xfBBEeccf8A6EY9+Hi/6Udv8ww2xDWZ8KpeNdsvdY7cjFyx01TQmxehseh4X9cX400J5wrbyc4kp1Sn/hxrp6gvf9cD5cfQbMtqcwoozZqJWNtrCxwBW541LFKKMvTmQ97hvq1eo5Y1aryqiqpTI8OknnofbCqr7IZZUX1CoHmrjBjBR6A+TH67tHPOAtQ0ksYa+nSFufpgaTOaWR6TTHIrJMCxaxGncfvjU5/s2yqW9p6tfZDgKX7KMvkPdrqlb7fwlIw9i0BdnFpa0x0FZUrCyTcSNwt9QswKj1DHDeH4aTtLNkUME9N9zeF1VlXWo3AbkSVbn/2nEMH2cT0yIlPm7kJ8nEg7y+4ODx2c7RLGIlzxCg5AxN+t/bADRXc1abKqX4SuzV62ZpuM8hY2iQchY8j0OKxBmuWJl2mSaZmeqaYKid5QfHp1xbsw+zzNaxSsmZ0pRt2vG929TfCtvsprh8tTRN7OMREAV7SZNGqqY65jbncfzx3/ALw5M/J6yP1H9cSt9lma37r0R/8AyuP/AOcQH7Ls9MlrUbKNyFqDf8xg8gpHL55lh+Wrqh7H+ePUzWikVitbUlRa5CubfS+AKjsh8LUmBKqGrqVGowxPtYHffrv+hw1ossy3L4VqK1+KyHSFC2MLemCraBwWHstmlI7n4jLmgpmOlJWGoSN6+J88W6arhjBaljj5X1CwAHrjM62rlqsrnrJKmGjpFJWx24rL5dP52w07O54MxyiOqlazKSHJ57HmR42x5z4lFYm54ueaf9Tr6W8n2z44/wADOuz9ZpWhp7zym9rqRHe21vH8O523xAk0tPI9RXzaTIBaEm7D6bDw22wvra05dJNTZTQzVNW68ZxEhkchjbVtfwt/l8sI5J62riMdfTTwWe9p4ShJ8dxv/rhMGhyahLwn5fY2TUwwt+WO8wz+molvwwpIuotrYjxAwnr84mzGjgaKZ0MlRGp37wQ3J/IHBZy9q/Lfg3iPxdOpaBv+onVb+OBexrJT5zHDVqgVI9aLKCLOARv7McdrTfCcGFOdWzmZtflyurobzS6amKH48x6owNEbWW4G9zyHucV/Pp5ZarhxU/xTRpwjKzEht73B8MaQ0gnAMCURa34bWP1GIjSVZJPwVFJcfhI/li97vCFpeTJY8tq1sDG5Ujded/fDKgocwaN+8dnt33AI2G3e3xfJ6KsINsmgb/xYA4TVOW500pMeTyaelmX+eAtyA0maek8bJrEq6f8Ayx2sqlVYOLEA/NyxncNeIUK6E4ahhZe9sDtffwx1S1DxFzq0gnYi5v4bdN8Zfrf0NtRoqPraysOdueOiG3628xigU2dzUrKjTaSwuN+Z5Eg4Npu0tfELMTKFvu63JPO23liyOsi+0TYXPS3+H8xj46h+C+KtS9pqqaPjKsckY5kHTuTbliZe04j71Wix6drltrnD/V4gbWWPS3Vfzx7ZgPkOEMfadZN+EpU8ir7HE3+8MYbvQGyj/F1w31WL2TYxxZhclDtjq5/wnCH/AHpgEmiSnm2NiQvdv64IHaKlOk8KUBjYG21/DB+oxV2TaxqWY/gP1xz3iL8M29cKpu0lHTxSSzsY0iUszMLAYq1T24r8zqdGRUhSkX56iT5mH/bcED6HD48kZq4ivgtucZ1QZNDxK6XSx+WMEamxT67tDXZvCzShqCi1ErGSO+Lc22/L64TVuZwQlnkkM0xbUQTddXQte+puW59rYq+bZ9JM3ffXYbJ0+mLeF2KPqzO4aUMKNQHY96Zty2KfmWcO9RIQ9xOCHv1I/nywzyHs5mfaOZHY/C0Jb/5iQHf0HM41HIOzfZLIGiMccM9bH/8AUVHfcE9QOS+wxVLLHqwqLMgioq+qokoK6IRDiLURGbZrEdB0va+CGnmo6UU1CUeJDeRLXJJ63xa+3deZO0c/wsqrH8OouFBud+eKfUyGWoQtpiqR+NBYN/fhh46bHOP3KxXnnGXDNC+yuqTMMxzGqrH11iRrEq6dOmO+wA8Ab/XB/wBqUamPLZ1YWDSRkA9DYj/9T9cAfZ1UxxU9W9XTwSsyKutbbtzI35eO2IftFrIq6OhqKQSxGnd4mWRyQQ4B29Cg+uDLZCSxx4Am3FtienqqmKnQ08UspDXUqCQpxZOz0bV3aHKcx4JSojdkmXbYaG39MZ7TyDWQ8s8aC5YROSfXTtfFp7Gw0xzXL6nLqoGop5wsoR2+9ibY6kY3Fr4vg/taZS19yNlsvIj9MfEAjcC3/iMRK8DAES2uL/PjhpEvYTqP8+M1x9mvkmKKeaKf8gxyYo+saf8AoMRFip/jr/7Xvj0SnpJG3rgbo+yUzK4pPi5BHSNDIGchmYBQb+YO5Pn488FzSinCzzpELobi10FugsLHx38cVnivRShIZVp1dtVzc3tbqAQBg+NhTajXVALqpCJ3rN4/KPcXtz5Y5rxo0qhxTU8DSJFIouAZUVhsAfK2399NsdDSlPxOJArc2bX3VB2IJ53FxhYc0nahimE8ccwPD1rq7wPQgr3SPpviDi11XSz0yUYdEsZZbMQ1rklWI58vLbAUEDsaNTR07JpdCARqcy93yI6WxI8VPVBQZFeOUWVZGFyQNwP2wAY5qOOBqcJxVBCK7BkRNtyBc7EjHstaZqcLLM7RzjuuiBbEkX5fL+e18R40GkE00UMiI8cbBFOoJyCg77+uJYpoOO8ehmFgzMWJ25c8B1VLDToTUVMAmeJeFSxqdRjHgQbcrel/HbEK5nRU1IktVVSRnTZYuASX520i97bHfxOFeBvpAaSHPxEmtDEHWMC41272/Tx5fngSs7URwTSQ0cDT1j7GFG1D1YnZfbCZnrsxXVITl1Bc2DfxXX1HL2wNNmdHlULRZeirtu9rsffGvFo0uZlEp+g2ohlqnFV2iqVexutHH3UX1HXC3M+0QWPg02mKJdgENrYrmY5zLPLpRizn3vhhlfZOqqr1GdM1NAF16D87D9hjTLJDFH9CJNgEL5jnFbwKGJpS3Uch5k8hi3ZD2OgpClTmgWqqbkqjfwkt4j8R5c9t8NqSGlyyl4dHAVgViuwO58yRufrgpMwC3DEOVazxggEb23GOZl1U5ulwWbEhhFKUgtsmprrovfzB8ueI1BlazKpd/wAYFzfAxqg57q/eG7AAiwtjmmrJjIzzwiEp3g6XNlNxc+HXxxmtvwNTKp20h4ebqSAqtAoAU+BN/XFfkdG0gLqa/UfLhx2vlLZosZ2RIVCc7m+554Tu2hhTxCzyG7m/yjHpNNfyY36MGT+TLx2KlU09Qs6LJYBgTa97kX5YB7bvBJQQGBCmqfXcvcHusNvyxJ2U1H4koNSNZFt103Nv3xx2wpnfKaWoiR01TAlXFrXU2/vy88YcjvXL/vBbFfiKpBLG40z6u7/zF2Ixdex7M8oknYsqXKy6FV2sOpHPmMUWEOzlViDMu5Qb6h5YvXZyNoMv4kRj0OhK2ve5I2N/JcdHK1DFJ+kylcyRaHmVbxlmsCdv1tyxA6yqNdIqrvpOu7W9tsRUsbhwZTockbmx26ny2xCakgqpWQC5DXH4r22x5jfNq2br4GELFwsTFkYc2DFQx8h4dcQvmLwuySVaRtf5S38scmRERSNRLEkdbbgYW1fxTVD6FiZb2u1iT6+BxE2yNiOth+EkU6I0nKiWIuGYSi/yjbmDsQbcsMCMwroofi6VYuFcK0YCK4vc2A5dBb8sK5o8wfSeMsihQYxLCbqD133GPVlrZpoKClmMzlbuyN/Etsevrt6Y6HBe1QyhSkhkmSuqJIkLB2VFBZbXtub3Gw8Le+CMtrnzFpKcTcOngkJJ2LEW7pPS3Lnyv74r8lHVUrKa2GWKKWTTHrVirnwufC1t/HDOjaKnUxlnYT7sdOgm3je1wCRY+F/EYFATOppz91MHkRxYTJJIto13vYj2NwfTlgqOenjp5ZBAiIbuGd7gEfiuNrWt1HLCWoppP9oBKRWqpWUX0kMx3B8f9LY67SZbOKKKUQB46aZTNDq7svje2wPUWxIq3TJJ8HRqpc0pEoMsiDwxSFvi5BoVBtYDx5D1x87UWXuZ6iU1tcecsvT08BhbmHaC8ASnCxU4W6IgtcYrMtZUVs3CgVnc7hRzON6UYIyttjnNs/aVmBfbwvthZRUlfnMp4I0xfikb5V/n7flhxl/ZmKNNeaM0lUCCkINo1v4nqfy54sGlOEFWIXQW+7NlB2AF7ePTGfJqPQ8cflkGUZTQ5YY/h4DNIY9T1jgkqb2+W1lHLDzL5lFTJFxULSC+iVbrceG1+mFSlpYn1rcQkPLvuASdvr+uPKOmNPMs1rSHk0jXUeW/lfGByt2y1VQ5kqad3HE4YAF1S9gSfH0GOONAyg60Lm7kA6m8DcdDfpgWmkp1lEuaBXpiSulWIJYCw8ziGGOjnd5jUAVBjuEmjNmNyNN/K3M+YwlcWBoeDNI6imKyypoi5RhAji243/r05YjmrXly4yUggkjLhWlCgkbeNvUDzwlcUlWmmSZEkDAcLUAd99YuRe242v1x5RZRmkivJRNVVEKNdxHqdHty2G3+uIraIpccijtLr/2mzH7x2UaVJ5eBJwsoKUl5DKQXYE+uHWaUNZDWSrWQAOW7rKLSD/IbbYiaBY4HlBUrbcptz/Q+WPS4YpY1fg5s29zHORVdPl0UUSG0zsZFFjupt15chf3GI+19er5bTrC91kkub8wF6Hz+X6471JEFjKaUhOltXMkqBcHw2wnzh0quFFGVDLALIu9/P8scjCvm6xyNE3tx0K5uFHJFKY5oWY3SUMNJONAy5H+HSIsra4wS4AOKxldJHWUEMU6q2lwNJNtvG/lh7VExStBGyuqp94t78gevt+WN3xJuOnf7ooxfyGi1CLIFjJa4uVB2HvyxxL8NJLIj3O97qbkXPlhLRSy/HTguNIUFdRAt5A4LgYSq8oLNe1ze/QX/AG+uPOuLRtsa8SallLQ6AgUrpKX52Nj5/wA8BPDHORK7AFhfdiP0wI9ZGlVJydUBOnTzHIscTo8/CQrDLZhewsLXPLB3Mm4EVazMqI1QqECEKqo257p5/rywLBDLS0rRySMsqsSSEJD78/Hr+3K2J6Ls3ItI8tO7Syka1iciPn1Nutr/AF3xJSU9RPOiMnfRDaAnmQNu8eZ2t0HpjdKPo0KXsHo/+JEkGZJGmsARyn5WB8yOlrD1thhQZXBTVIiqJRMIwQSUJDg3Ox6+2ODxJpo4ldYZUtqWZiTHYmw3/wA37csMaiooS/8AxKNFKDcnURqN/wB8RcEbTO5Ghp2ZIEKCQd8aQLr/AF5emIMzmo48vWfglmLG5e2l7jf+ztiCsqYYaYOEkdbFhGpF+e2o+F78vLAayCSsEsjtI6qylANhtyA5b8sM5CLkq+Ydn3rszlqp6iGCiuDoQlig5EX8vHDigpYsvUx5dRxPGTqVnZWLna3e5kb+2PKeJwzA1QkBYqYWbYjex8MfR0xkb4dpmWQm33e9vp6YEptrlippeCeRpm1VlSGM2pU+YkKLcx9CPbElbWI6gEpxLd4FfmXaxJ67X9vfEcOWyCoijWYoWvpW1iBYjr54ImymsnlGh4jIjB7M4JPLvW8vpirba4I+Rfw/iHAEkkblCgMTaSQelxvganhpzAisk4dG1FncFiPH+uDmpqmgnT4tSNLjckEKRvfb2xF8USpFhEt+arsPLCU0hbPaSFqgiOmsYSejbdbH9PzwRXZVXUUKO8x0SEqRGwOhgSSvjvz+uAI5dULRMCmoaWNzd78yTe3PwHhiKMrAjFVJVbvouQHbYAsvU8/64KSfYIyi3Q1p8unrF/4amaqQ95mXf8+Q/XbF27PZauVUplzBY+O/ytfW6p0W5+UeQ8cLMl7ZzGMQskge+lTGwQH1B2/THFf2xDLJLEztWKDs8YtqA3HKw9cacSxx5bJKIb2hqGzRkypniUSd545BqcKLC4tyO43/AFxT5MsFLI9XBIlXS0qNJ/2lhta/IW35csJFlaSJNdOZAWLu8kt9tzv54dUeZrLrpTSx6GjCcyyoNrgDlbboMaPqONqElBJkPHpJZ3mnVpT+GOJxaIb226i1r++OYOz1XntS3w8PGSGNS5FtSHlcXN+gt6Ygnp+E3FRRHpuAdRDD06WsfDF9+zlqqSnpYaglYXMs0SFRbYjflv18ByOKtM3HJa9EnHcuSu5Nl1Xk1YkNfSU08LE6HmukiH/NzG3rgWpJqZaitcLDE41AK1g3lvjSe1EMLUU7OoEscZEL25vbYnxt059cZctJxzKJJJZmI+8LXuniF6bfoMPr8kppLwVQgos9kCScY2EYmIXvkjl19tvzwXQ0c0a6hGzoLfKQSwty9+eI3jc1BEqoyW3VhcKp3sPXDOoqBPRwLQRnjbrNJJspAJ7oHtYnHN232XRR1TPKxaFURyAdTLGBdQBtfn1P0xw1ZTKxMuYJEzb6FBAHT35Y8+5BZXijBAKMQLC5Avyt/ZxBFFTsg40UfEGzX0tb3I/kPLA2p8EQdAssVIZGl4d2S+nuhm8id9z02GPEplrMx41GJTNNEVu7kBeQvqwpTNKmhjSmzOnp6hl0taLVcN5kmwb9jiRs1rKmaSdF4KooAeMlL+At16nbGhd22bJSW2kMK6pnpzFsxYHh8a3P/wAtuV/0xHmbyUVDTyZjZqmc6gwW5Ci+xA2H9McZY9dVTNTxzapZQd2j1Cx3Fx19up8hgCoqJIWqKSp4jcKQgL05b9eRufDfFnZTbo4pJzVhWlWO2sLeRiAVvy25c/yxJQyU6zSQ6BJGdSE3IUi3PbcMDyIx7RTw0k0Dz0oZVUgLGpvc8hy8RgXMc5NNXxycJuKmokGIaSRcdCCL2/PCNOx4tNcjL/Zfw8zd0Fj3hEVLrtewD6rn38MJqp0/2s4pV4ancblgeVtibHkd8MpM8DVEc0I+4nBEoYG23lbp44EzKronklmoEtBcrGZF7yg8wvl1HkRiIqlXg7mr6xaqG0IMRZrMRsLra9/K97YIgplq5JJVqpY6hgYyvyqy8yAef4dz6YESqhj4cUTu0bEiQcr7i1r8trYiaenGtIb2MmoahsbeHXqd9+m2CgbiWrp2py61c8rTAfdrHsL35ux+bfwAwrSUrEHnddbHezX8gfLBi6ZIWeRnMgsqjcmw7xPn0HvgOPgtwuJHcAA6evqB5HlgULKUX0F/wToY3ITZvEA8/XHlLMsU7RTJxI2PO3IeC7jl546DmSKViTbT92Qt+V7ev9MCU0a1Tr0F7LZrXuf6HASRWqsPgoq2p1mmo5ZBGDZQOW+xO/ljqLL66nEc9VSPHCbajGouvQEj6c/HHcFRKsckcEsq630kgm43te3v+Y8cFw1tRTQSQPVCQ6byBxbSLW3HqRtcePTc0y5RhVivM5JKmMxIAu+6gWO/p5nyx5RI8KyFJURgisNR3YG11H1xDIZJHkLllbWBe3nzxNVqWe4gWQxgqFuRoNzc7fy6YZIqbtntajlyjo2mWx3vv0uD6C3qDi40XbWnp1ghgpGjaMIECDiX3KtvtYafz98U8STStFEJA1IrhkVjum5Det7Xv1J5bYgZTxOJHcaTYEjnubAW5XthouUSbkaJm/aWkqUYay8a6mUFjquByO2/4h4bjFVesNLEYItQV43Vyq/MpuDv6E4XQw1DxyyyICHi0gC+1jsT68v5Xw47N/DSfEHMLSJJE474vp0qWHobgjlgZJOSpkStgb1UrDS3DUvto06reG/XY/6YJppbxSEixVSFsbbgfmN8R11HMNWiOTSGPD1HQQQbE6txtiKBuLR2H8RAQCVNyp8bciMZ1BhaaO4EM80yxi9R0g1ACwJ39/78AZV08lHN8PIUVo1A21G+1+nrgNkdBC6EXdA4YG6gEc9r7HnbxOBcy+KrZxOxFSxUXeSRwR4Du+At54jimRNVycSKVR43Lt3gyFLNa/O3jgcB5akVEmsIFCBALXPLl0Fxh/2foaRpqmpW0pWO8OpdS8zfvfXbCSvkRquoVUHBSU6Lkc7kfQHb2xdLouviw81Na8//AATyUstwESO1/l358+dtuowygyOurpWkmlVC4Gt5mKlmt0FvPnhPLDEscDROvFUaXDE6r87252329MRvm1fIsSmtZo0IuVk0sSDtfz3xL9AToIemfjks+oQ3udQVdja+/Pnf2wDNKtQzSOkj6AAsiqTsB1HljlzNPE8TU8jPY3CnceVuvrjqV44gi0e7qv3ja9jcbADpiP0BNds8hnWJjrmmqShtHTiOx572A5778+RGI6yRJJEEUJi1Mdl3CrtuPrjuWlk4qz1CW4ihojawIIBHLythlRZTJWBpCmuTSC8jghRbnfz5Yj7okmK3gAijkguRvqKne9/D68r9MfNOIp4HlRJADduIeZPT9MG1ESxSNqYOjEIqKd7Lvq8t7/XHNVBDLIZxYqlgpb8O3e+v7YAlU7Dc/wAup6WKnr8suIZVL2PQ3BP15YQyQB9Ug7oS51f6c7/vhjCZJeElRU8YRE8Nb7EnwA64meiqqhGlSkvBw+8wYArY+F+WI+CTVu0LkLaTIY3iud7ixv8Ate+BiQQrAWDMNlB2PP6239/LDWpSARCUIyhRYqDcKT5e/wCePVjXh2Ok2GtLC+leZ6898NErI4ZfiFdr2Y2I4d9x426WNv7tjyYd2R47tdwGJ3t6/riLizCUskalybBV6jbcEev54lkEkKxRpqRpGtpbvFuhBHO1zgkvwQqhMhkVraluDz73S+CaKMOyRSAksukexufyxAYZ01kgIikaiT3b3FwCNifIHHEcrpdrG0XeATctba2CgPgn0CSdp9LgsdS7EWPv5nbHtTM1MynQqyRyXshHMbEHnytz88cR1F3jSrU6EOqwIswBJ2+mIpCs+idYxfSykX87gn/2t7WwOQthsE6vUIkTWlYCwB2Cizb+Ysf1scR1ccskcZRbCZgEsRb+/wBccRNwDChLFjIrKRuL2tv4jckeYx7NmDQQuhABILK6jcNuLA+f74ZgsOTN5po+FIztCjsq2G9r3uL+lsfSzPTm8fDeWNQOHHe7eRHK/l5YWTTMhjlLuWACgXuCNv64Ny9mqVd1mTTxiHDMFPvfkP64FWRSbOIpTHCpYIgf/E1he3K49cRJLNIPuomVVJFrEdfDBElNUtIC9grG8ek3sFFjcdN7HANdAaipdwpVQbKDY7eV8K8aYT//2Q==',
    shopId: 'shop4',
    location:'East Region'
  },
 
];