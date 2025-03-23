import React, { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Instagram, PinIcon, Camera, Palette, Code as CodeIcon, Home, ShoppingBag, Brush, PenTool, ShoppingCart, Star, Sparkles, Brain, Rocket, Heart, X, Plane, Coffee } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentFact, setCurrentFact] = useState('Click the button to reveal a fun fact!');
  const [currentSection, setCurrentSection] = useState('home');
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    product: '',
    quantity: 1
  });
  const [sortType, setSortType] = useState('default');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showPhotoDetails, setShowPhotoDetails] = useState<number | null>(null);
  const [currentGallerySection, setCurrentGallerySection] = useState<string | null>(null);

  const photos = [
    {
      url: "/images/marinedrive.jpg",
      title: "Sunset at Marine Drive",
      date: "December 2024",
      description: "Capturing the golden hour at Mumbai's iconic Marine Drive"
    },
    {
      url: "/images/flowers.jpg",
      title: "Sunflowers",
      date: "January 2025",
      description: "Flowers nature's colorful, fragrant masterpieces, symbolizing beauty, love, and new beginnings "
    },
    {
      url: "/images/streetphotography.jpg",
      title: "Street Photography",
      date: "February 2025",
      description: "Capturing the essence of Mumbai's bustling streets"
    },
    {
      url: "/images/sealink.jpg",
      title: "Sea Link",
      date: "March 2025",
      description: "Close-up photography of Sea Link from my College"
    },
    {
      url: "/images/dog.jpg",
      title: "Puppy",
      date: "February 2025",
      description: "Cute puppy playing on the floor"
    },
    {
      url: "/images/archi.jpg",
      title: "Architecture",
      date: "January 2025",
      description: "Gothic architecture study in South Mumbai"
    }
  ];

  const calligraphyGallery = [
    {
      image: "/images/c1.jpg",
      title: "Modern Calligraphy",
      description: "Exploring contemporary lettering styles with oblique tip pens"
    },
    {
      image: "/images/c2.jpg",
      title: "Copperplate Calligraphy",
      description: "Elegant, flowing script with thin upstrokes and thick downstrokes, created using a pointed nib"
    },
    {
      image: "/images/c6.jpg",
      title: "Spencerian Calligraphy",
      description: "Graceful, cursive script with delicate strokes and elegant loops"
    },
    {
      image: "/images/c4.jpg",
      title: "Glass Pen Calligraphy",
      description: "Smooth, fluid writing using a glass dip pen with fine grooves for ink flow"
    },
    {
      image: "/images/c5.jpg",
      title: "Brush Pen Calligraphy",
      description: "Flexible brush tips to create thick downstrokes and thin upstrokes"
    },
    {
      image: "/images/c3.jpg",
      title: "Faux Calligraphy",
      description: "Mimics calligraphy by drawing and filling in thick downstrokes with a regular pen"
    }
  ];

  const embroiderycollection = [
    {
      image: "fem.jpg",
      title: "Flower Vase",
      description: "Colourful Vase made with Button Hole, Herring Bone, French Knot & Laisy Daisy"
    },
    {
      image: "lem.jpg",
      title: "Lavender Field with buzzing Bees",
      description: "Lavender scenery made of Long and Short, Star, Sheaf & Ermine stitches"
    },
    {
      image: "pem.jpg",
      title: "The Three Planters",
      description: "Planters with plants with stiches of Fly, Feather, Fern and Fish Bone"
    },
    {
      image: "kem.jpg",
      title: "Kasuti of Karnataka",
      description: "Traditional Indian state embroidery inspired from Karnataka"
    },
    {
      image: "phem.jpg",
      title: "Phulkari of Punjab",
      description: "Traditional Indian state embroidery inspired from Punjab"
    },
    {
      image: "oem.jpg",
      title: "Abstract Emotions",
      description: "One line lady with abstracts of Norwich, Pearl Knot and Jacobean Embroidery Stitches"
    }
  ];

  const travelRecommendations = {
    mumbaiCafes: [
      {
        name: "Veronica's",
        location: "Bandra",
        description: "Offers a variety of fast food and beverages in a vibrant setting",
        image: "v2.jpg"
      },
      {
        name: "K Rustom & co Ice Cream Parlour",
        location: "Churchgate",
        description: "Renowned Mumbai parlour known for its iconic wafer ice cream sandwiches",
        image: "krustom.jpg"
      },
      {
        name: "Magnolia Bakery",
        location: "Bandra",
        description: "American bakery offering classic desserts made from scratch with the finest ingredients",
        image: "magnoliab.jpg"
      }
    ],
    internationalDestinations: [
      {
        country: "Italy",
        highlights: "History, art, food, fashion, scenic landscapes, vineyards, beaches",
        bestTime: "Apr–Jun",
        image: "italy.jpg"
      },
      {
        country: "Greece",
        highlights: "Ancient ruins, Mediterranean beaches, and island hopping",
        bestTime: "June-September",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077"
      },
      {
        country: "Singapore",
        highlights: "Modern skyline, diverse culture, street food, shopping, gardens, and vibrant nightlife",
        bestTime: "December–June",
        image: "singapore.jpg"
      }
    ]
  };

  const facts = [
    "I have an eye for aesthetics and can spend hours on Pinterest!",
    "I can turn any space into a beautifully designed masterpiece!",
    "I love coffee and late-night coding sessions!",
    "My travel bucket list is endless!",
    "My favorite color palette is soft pastels!"
  ];

  const artProducts = [
    {
      id: 1,
      name: "Spring Paradise - Acrylic",
      artist: "Sanika",
      price: 1200,
      image: "shap.jpg",
      category: "acrylic-painting",
      description: "A vibrant acrylic painting capturing the essence of the world from above. Size: 24x36 inches, professionally framed."
    },
    {
      id: 2,
      name: "Modern Calligraphy and Watercolor Kitchen Set",
      artist: "Sanika and Sharal",
      price: 1800,
      image: "shcwp.jpg",
      category: "calligraphy",
      description: "Custom calligraphy set including personalized quotes and designs. Perfect for home decor or gifting."
    },
    {
      id: 3,
      name: "Crochet Tulip (set of 5)",
      artist: "Sanvia",
      price: 700,
      image: "shct.jpg",
      category: "crochet",
      description: "Everlasting, delicate, and beautifully crafted! "
    },
    {
      id: 4,
      name: "Winter Dreams - Watercolor",
      artist: "Sharal",
      price: 2000,
      image: "shws.jpg",
      category: "watercolor-painting",
      description: "Delicate watercolor painting of winter and life covered with snow. Size: 16x20 inches, includes certificate of authenticity."
    },
    {
      id: 5,
      name: "Crochet Toy",
      artist: "Sanvia",
      price: 2200,
      image: "shcd.jpg",
      category: "crochet",
      description: "Cute little Blue and Crochet Dodo Bird Toy"
    },
    {
      id: 6,
      name: "Abstract Emotions - Watercolour",
      artist: "Sharal",
      price: 1500,
      image: "shww.jpg",
      category: "watercolor-painting",
      description: "Bold and expressive abstract painting of a Women. Size: 30x40 inches, gallery wrapped canvas."
    },
    {
      id: 7,
      name: "Floral Embroidery",
      artist: "Sanika",
      price: 1600,
      image: "shef.jpg",
      category: "embroidery",
      description: "Detailed Embroidery design and pattern with floral theme."
    },
    {
      id: 8,
      name: "Crochet Keychain",
      artist: "Sanvia",
      price: 300,
      image: "shck.jpg",
      category: "crochet",
      description: "cute, fun and perfect for space lovers!"
    }
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    alert('Successfully added to cart!');
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Order placed successfully! We'll contact you at ${orderForm.email} with further details.`);
    setCart([]);
    setShowCart(false);
    setShowOrderForm(false);
    setOrderForm({
      name: '',
      email: '',
      phone: '',
      address: '',
      product: '',
      quantity: 1
    });
  };

  const showFunFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setCurrentFact(randomFact);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getSortedProducts = () => {
    let filteredProducts = filterCategory === 'all' 
      ? artProducts 
      : artProducts.filter(p => p.category === filterCategory);

    switch(sortType) {
      case 'price-asc':
        return [...filteredProducts].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...filteredProducts].sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  };

  const renderGallerySection = () => {
    switch(currentGallerySection) {
      case 'calligraphy':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Calligraphy Gallery</h2>
              <button 
                onClick={() => setCurrentGallerySection(null)}
                className="text-rose-500 hover:text-rose-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {calligraphyGallery.map((item, index) => (
                <div key={index} className="bg-white/50 dark:bg-gray-800/50 rounded-xl overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'embroidery':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Embroidery Collection</h2>
              <button 
                onClick={() => setCurrentGallerySection(null)}
                className="text-rose-500 hover:text-rose-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {embroiderycollection.map((item, index) => (
                <div key={index} className="bg-white/50 dark:bg-gray-800/50 rounded-xl overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const renderSection = () => {
    switch(currentSection) {
      case 'photography':
        return (
          <div className="space-y-6">
            <h2 className="section-title">Photography Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => setShowPhotoDetails(index)}
                >
                  <img 
                    src={`${photo.url}?auto=format&fit=crop&w=600&q=80`} 
                    alt={photo.title}
                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  {showPhotoDetails === index && (
                    <div className="absolute inset-0 bg-black/75 p-6 flex flex-col justify-end text-white">
                      <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                      <p className="text-sm mb-2">{photo.date}</p>
                      <p className="text-sm">{photo.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'art':
        return currentGallerySection ? renderGallerySection() : (
          <div className="space-y-12">
            <h2 className="section-title">Artistic Creations</h2>
            
            <div 
              className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setCurrentGallerySection('calligraphy')}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <PenTool className="w-6 h-6 text-rose-500" />
                Calligraphy Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {calligraphyGallery.slice(0, 3).map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Click to explore more of my calligraphy works →
              </p>
            </div>

            <div 
              className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setCurrentGallerySection('embroidery')}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Brush className="w-6 h-6 text-rose-500" />
                Embroidery Collection
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {embroiderycollection.slice(0, 3).map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Click to explore more of my embroidery collection →
              </p>
            </div>
          </div>
        );

      case 'shop':
        return (
          <div className="space-y-8">
            <h2 className="section-title">Art Marketplace</h2>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <select 
                  className="px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80"
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                >
                  <option value="default">Default Sorting</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                
                <select 
                  className="px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="acrylic-painting">Acrylic Painting</option>
                  <option value="watercolor-painting">Watercolor Painting</option>
                  <option value="embroidery">Embroidery</option>
                  <option value="calligraphy">Calligraphy</option>
                  <option value="crochet">Crochet</option>
                </select>
              </div>

              <button
                onClick={() => setShowCart(true)}
                className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="text-white">Cart ({cart.length})</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getSortedProducts().map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white/50 dark:bg-gray-800/50 rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">By {product.artist}</p>
                    <p className="text-2xl font-bold text-rose-500 mb-4">{formatPrice(product.price)}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-semibold transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {selectedProduct && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
                    <button onClick={() => setSelectedProduct(null)} className="text-gray-500">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProduct.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-rose-500">{formatPrice(selectedProduct.price)}</p>
                    <button
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showCart && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">Shopping Cart</h3>
                    <button onClick={() => setShowCart(false)} className="text-gray-500">
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6">
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                            <div className="flex-1">
                              <h4 className="font-semibold">{item.name}</h4>
                              <p className="text-rose-500">{formatPrice(item.price)}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center mb-6">
                        <p className="text-xl font-semibold">
                          Total: {formatPrice(cart.reduce((sum, item) => sum + item.price, 0))}
                        </p>
                        <button
                          onClick={() => {
                            setShowOrderForm(true);
                            setShowCart(false);
                          }}
                          className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-semibold"
                        >
                          Buy Now
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {showOrderForm && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl w-full">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">Complete Your Order</h3>
                    <button onClick={() => setShowOrderForm(false)} className="text-gray-500">
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <form onSubmit={handleOrderSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900"
                      required
                      value={orderForm.name}
                      onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900"
                      required
                      value={orderForm.email}
                      onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900"
                      required
                      value={orderForm.phone}
                      onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                    />
                    <textarea
                      placeholder="Shipping Address"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900"
                      required
                      value={orderForm.address}
                      onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-semibold"
                    >
                      Place Order ({formatPrice(cart.reduce((sum, item) => sum + item.price, 0))})
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-8 text-white">
            <h2 className="section-title">Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-white/30 dark:bg-gray-700/30 rounded-full">
                    <CodeIcon className="w-8 h-8 text-rose-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Technical</h3>
                </div>
                <ul className="space-y-4 text-gray-800 dark:text-white">
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>C++ Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>Web Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>HTML & CSS Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>Python Programming</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-white/30 dark:bg-gray-700/30 rounded-full">
                    <Palette className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Creative</h3>
                </div>
                <ul className="space-y-4 text-gray-800 dark:text-white">
                  <li className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    <span>UI/UX Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    <span>Digital Art</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    <span>Photography</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    <span>Calligraphy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-white/30 dark:bg-gray-700/30 rounded-full">
                    <Brain className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Professional</h3>
                </div>
                <ul className="space-y-4 text-gray-800 dark:text-white">
                  <li className="flex items-center gap-3">
                    <Rocket className="w-5 h-5 text-teal-500" />
                    <span>Project Management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Rocket className="w-5 h-5 text-teal-500" />
                    <span>Team Leadership</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Rocket className="w-5 h-5 text-teal-500" />
                    <span>Problem Solving</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Rocket className="w-5 h-5 text-teal-500" />
                    <span>Critical Thinking</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800 dark:text-white">
                <Heart className="w-6 h-6 text-rose-500" />
                Passion Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Interior Design</h4>
                  <p className="text-sm text-gray-800 dark:text-white">Creating beautiful, functional spaces that inspire</p>
                </div>
                <div className="p-6 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Web Development</h4>
                  <p className="text-sm text-gray-800 dark:text-white">Building interactive and responsive websites</p>
                </div>
                <div className="p-6 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Digital Art</h4>
                  <p className="text-sm text-gray-800 dark:text-white">Expressing creativity through digital medium</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-12">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-3/5 space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold font-serif">
                  Welcome to my Website!
                </h1>
                <p> Hey, I'm Sanika Lobo, an engineering student at Fr. Conceicao Rodrigues College of Engineering with a passion for blending technology and design. Whether it's coding interactive websites, capturing breathtaking moments through my lens, or curating visually aesthetic spaces, I see the world through a creative lens. </p>

                <p>I believe every line of code, every photograph, and every design tells a story. With skills in C++, HTML, CSS, and Python, I turn ideas into digital experiences. My love for aesthetics goes beyond the screen. I've also earned an Advanced Diploma in Interior Designing, making creativity a part of everything I do.</p>

                <p>From late-night coding sessions fueled by coffee to exploring new destinations and collecting inspiration, my journey is all about innovation, artistry, and storytelling.</p>
                
                <p className="text-lg leading-relaxed">Keep scrolling, and let's dive deeper into my world! </p>

                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Fun Facts about Me:</h3>
                  <p className="text-lg" id="fun-fact-text">{currentFact}</p>
                  <button
                    onClick={showFunFact}
                    className="px-6 py-3 bg-rose-400 hover:bg-rose-500 text-white rounded-lg transition-colors"
                  >
                    Get Fun Fact
                  </button>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/sanika-lobo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-rose-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com/sanika.lobo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-rose-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://pinterest.com/lobosanika16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-rose-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <PinIcon className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/lobosanika16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-rose-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="lg:w-2/5 h-[600px] overflow-hidden relative rounded-xl">
                <div className="absolute inset-0 animate-scroll">
                  <img
                    src="san1.jpg"
                    alt="Sanika Image 1"
                    className="w-full h-[300px] object-cover rounded-xl mb-4"
                  />
                  <img
                    src="san2.jpg"
                    alt="Sanika Image 2"
                    className="w-full h-[300px] object-cover rounded-xl mb-4"
                  />
                  <img
                    src="san5.jpg"
                    alt="Sanika Image 3"
                    className="w-full h-[300px] object-cover rounded-xl mb-4"
                  />
                  <img
                    src="san3.jpg"
                    alt="Sanika Image 4"
                    className="w-full h-[300px] object-cover rounded-xl mb-4"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <button
                onClick={() => setCurrentSection('photography')}
                className="nav-button"
              >
                <Camera className="w-8 h-8" />
                Photography Portfolio
              </button>
              <button
                onClick={() => setCurrentSection('art')}
                className="nav-button"
              >
                <Palette className="w-8 h-8" />
                Artistic Work
              </button>
              <button
                onClick={() => setCurrentSection('shop')}
                className="nav-button"
              >
                <ShoppingBag className="w-8 h-8" />
                Art Shop
              </button>
              <button
                onClick={() => setCurrentSection('skills')}
                className="nav-button"
              >
                <CodeIcon className="w-8 h-8" />
                Skills & Expertise
              </button>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Travel Recommendations</h2>
              
              <div className="space-y-8">
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Coffee className="w-6 h-6 text-rose-500" />
                    Must-Visit Mumbai Cafés
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {travelRecommendations.mumbaiCafes.map((cafe, index) => (
                      <div key={index} className="bg-white/30 dark:bg-gray-700/30 rounded-lg overflow-hidden">
                        <img 
                          src={cafe.image} 
                          alt={cafe.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-lg mb-1">{cafe.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{cafe.location}</p>
                          <p className="text-sm">{cafe.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Plane className="w-6 h-6 text-blue-500" />
                    Dream International Destinations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {travelRecommendations.internationalDestinations.map((destination, index) => (
                      <div key={index} className="bg-white/30 dark:bg-gray-700/30 rounded-lg overflow-hidden">
                        <img 
                          src={destination.image} 
                          alt={destination.country}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-lg mb-1">{destination.country}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Best Time: {destination.bestTime}</p>
                          <p className="text-sm">{destination.highlights}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-pink-200 via-rose-100 to-pink-100'}`}>
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setCurrentSection('home')}
              className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2 hover:text-rose-500 transition-colors"
            >
              <Home className="w-5 h-5" />
              Sanika Lobo
            </button>
            <div className="flex items-center gap-4">
              {currentSection === 'shop' && (
                <button
                  onClick={() => setShowCart(true)}
                  className="flex items-center gap-2 text-white"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="bg-rose-500 text-white rounded-full px-2 py-1 text-xs">
                    {cart.length}
                  </span>
                </button>
              )}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
        {renderSection()}
      </div>

      <a
        href="https://wa.me/7760292318"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
      </a>
    </div>
  );
}

export default App;