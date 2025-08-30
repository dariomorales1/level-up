const productos = [
  {
    "Código": "JM001",
    "Categoría": "Juegos de Mesa",
    "Nombre": "Catan",
    "Precio": "29.990 CLP"
  },
  {
    "Código": "JM002",
    "Categoría": "Juegos de Mesa",
    "Nombre": "Carcassonne",
    "Precio": "24.990 CLP"
  },
  {
    "Código": "JM003",
    "Categoría": "Juegos de Mesa",
    "Nombre": "Dixit",
    "Precio": "22.990 CLP"
  },
  {
    "Código": "JM004",
    "Categoría": "Juegos de Mesa",
    "Nombre": "Ticket to Ride",
    "Precio": "34.990 CLP"
  },
  {
    "Código": "JM005",
    "Categoría": "Juegos de Mesa",
    "Nombre": "Risk",
    "Precio": "27.990 CLP"
  },
  {
    "Código": "JM006",
    "Categoría": "Juegos de Mesa",
    "Nombre": "Monopoly Gamer Edition",
    "Precio": "31.990 CLP"
  },
  {
    "Código": "AC001",
    "Categoría": "Accesorios",
    "Nombre": "Controlador Inalámbrico Xbox Series X",
    "Precio": "59.990 CLP"
  },
  {
    "Código": "AC002",
    "Categoría": "Accesorios",
    "Nombre": "Auriculares Gamer HyperX Cloud II",
    "Precio": "79.990 CLP"
  },
  {
    "Código": "AC003",
    "Categoría": "Accesorios",
    "Nombre": "Teclado Mecánico Razer BlackWidow V3",
    "Precio": "119.990 CLP"
  },
  {
    "Código": "AC004",
    "Categoría": "Accesorios",
    "Nombre": "Volante Logitech G29 Driving Force",
    "Precio": "299.990 CLP"
  },
  {
    "Código": "AC005",
    "Categoría": "Accesorios",
    "Nombre": "Webcam Logitech StreamCam",
    "Precio": "149.990 CLP"
  },
  {
    "Código": "AC006",
    "Categoría": "Accesorios",
    "Nombre": "Base de Carga DualSense PS5",
    "Precio": "39.990 CLP"
  },
  {
    "Código": "CO001",
    "Categoría": "Consolas",
    "Nombre": "PlayStation 5",
    "Precio": "549.990 CLP"
  },
  {
    "Código": "CO002",
    "Categoría": "Consolas",
    "Nombre": "Xbox Series X",
    "Precio": "529.990 CLP"
  },
  {
    "Código": "CO003",
    "Categoría": "Consolas",
    "Nombre": "Nintendo Switch OLED",
    "Precio": "399.990 CLP"
  },
  {
    "Código": "CO004",
    "Categoría": "Consolas",
    "Nombre": "PlayStation 4 Slim 1TB",
    "Precio": "329.990 CLP"
  },
  {
    "Código": "CO005",
    "Categoría": "Consolas",
    "Nombre": "Xbox Series S",
    "Precio": "299.990 CLP"
  },
  {
    "Código": "CO006",
    "Categoría": "Consolas",
    "Nombre": "Nintendo Switch Lite",
    "Precio": "229.990 CLP"
  },
  {
    "Código": "CG001",
    "Categoría": "Computadores Gamers",
    "Nombre": "PC Gamer ASUS ROG Strix",
    "Precio": "1.299.990 CLP"
  },
  {
    "Código": "CG002",
    "Categoría": "Computadores Gamers",
    "Nombre": "PC Gamer MSI Infinite X",
    "Precio": "1.499.990 CLP"
  },
  {
    "Código": "CG003",
    "Categoría": "Computadores Gamers",
    "Nombre": "Notebook Gamer Acer Predator Helios 300",
    "Precio": "1.199.990 CLP"
  },
  {
    "Código": "CG004",
    "Categoría": "Computadores Gamers",
    "Nombre": "Notebook Gamer Lenovo Legion 5",
    "Precio": "1.099.990 CLP"
  },
  {
    "Código": "CG005",
    "Categoría": "Computadores Gamers",
    "Nombre": "PC Gamer HP Omen 30L",
    "Precio": "1.399.990 CLP"
  },
  {
    "Código": "CG006",
    "Categoría": "Computadores Gamers",
    "Nombre": "Notebook Gamer Dell Alienware M15",
    "Precio": "1.799.990 CLP"
  },
  {
    "Código": "SG001",
    "Categoría": "Sillas Gamers",
    "Nombre": "Silla Gamer Secretlab Titan",
    "Precio": "349.990 CLP"
  },
  {
    "Código": "SG002",
    "Categoría": "Sillas Gamers",
    "Nombre": "Silla Gamer Cougar Armor One",
    "Precio": "199.990 CLP"
  },
  {
    "Código": "SG003",
    "Categoría": "Sillas Gamers",
    "Nombre": "Silla Gamer DXRacer Formula Series",
    "Precio": "299.990 CLP"
  },
  {
    "Código": "SG004",
    "Categoría": "Sillas Gamers",
    "Nombre": "Silla Gamer Corsair T3 Rush",
    "Precio": "249.990 CLP"
  },
  {
    "Código": "SG005",
    "Categoría": "Sillas Gamers",
    "Nombre": "Silla Gamer Razer Iskur",
    "Precio": "399.990 CLP"
  },
  {
    "Código": "SG006",
    "Categoría": "Sillas Gamers",
    "Nombre": "Silla Gamer AKRacing Core EX",
    "Precio": "279.990 CLP"
  },
  {
    "Código": "MS001",
    "Categoría": "Mouse",
    "Nombre": "Mouse Gamer Logitech G502 HERO",
    "Precio": "49.990 CLP"
  },
  {
    "Código": "MS002",
    "Categoría": "Mouse",
    "Nombre": "Mouse Gamer Razer DeathAdder V2",
    "Precio": "59.990 CLP"
  },
  {
    "Código": "MS003",
    "Categoría": "Mouse",
    "Nombre": "Mouse Gamer SteelSeries Rival 600",
    "Precio": "69.990 CLP"
  },
  {
    "Código": "MS004",
    "Categoría": "Mouse",
    "Nombre": "Mouse Gamer Corsair Dark Core RGB Pro",
    "Precio": "79.990 CLP"
  },
  {
    "Código": "MS005",
    "Categoría": "Mouse",
    "Nombre": "Mouse Gamer Glorious Model O",
    "Precio": "89.990 CLP"
  },
  {
    "Código": "MS006",
    "Categoría": "Mouse",
    "Nombre": "Mouse Gamer ASUS ROG Gladius III",
    "Precio": "99.990 CLP"
  },
  {
    "Código": "MP001",
    "Categoría": "Mousepad",
    "Nombre": "Mousepad Razer Goliathus Extended Chroma",
    "Precio": "29.990 CLP"
  },
  {
    "Código": "MP002",
    "Categoría": "Mousepad",
    "Nombre": "Mousepad Logitech G840 XL",
    "Precio": "34.990 CLP"
  },
  {
    "Código": "MP003",
    "Categoría": "Mousepad",
    "Nombre": "Mousepad SteelSeries QcK Prism RGB XL",
    "Precio": "39.990 CLP"
  },
  {
    "Código": "MP004",
    "Categoría": "Mousepad",
    "Nombre": "Mousepad Corsair MM700 RGB Extended",
    "Precio": "44.990 CLP"
  },
  {
    "Código": "MP005",
    "Categoría": "Mousepad",
    "Nombre": "Mousepad HyperX Fury S XL Pro",
    "Precio": "24.990 CLP"
  },
  {
    "Código": "MP006",
    "Categoría": "Mousepad",
    "Nombre": "Mousepad ASUS ROG Scabbard II",
    "Precio": "49.990 CLP"
  },
  {
    "Código": "PP001",
    "Categoría": "Poleras Personalizadas",
    "Nombre": "Polera Gamer Personalizada 'Level-Up'",
    "Precio": "14.990 CLP"
  },
  {
    "Código": "PP002",
    "Categoría": "Poleras Personalizadas",
    "Nombre": "Polera Gamer Personalizada 'Respawn'",
    "Precio": "15.990 CLP"
  },
  {
    "Código": "PP003",
    "Categoría": "Poleras Personalizadas",
    "Nombre": "Polera Gamer Personalizada 'Game Over'",
    "Precio": "16.990 CLP"
  },
  {
    "Código": "PP004",
    "Categoría": "Poleras Personalizadas",
    "Nombre": "Polera Gamer Personalizada 'GG Easy'",
    "Precio": "14.990 CLP"
  },
  {
    "Código": "PP005",
    "Categoría": "Poleras Personalizadas",
    "Nombre": "Polera Gamer Personalizada 'Pixel Heart'",
    "Precio": "15.990 CLP"
  },
  {
    "Código": "PP006",
    "Categoría": "Poleras Personalizadas",
    "Nombre": "Polera Gamer Personalizada 'Retro Arcade'",
    "Precio": "17.990 CLP"
  },
  {
    "Código": "PG001",
    "Categoría": "Polerones Gamers Personalizados",
    "Nombre": "Polerón Gamer Personalizado 'Level-Up'",
    "Precio": "24.990 CLP"
  },
  {
    "Código": "PG002",
    "Categoría": "Polerones Gamers Personalizados",
    "Nombre": "Polerón Gamer Personalizado 'Respawn'",
    "Precio": "25.990 CLP"
  },
  {
    "Código": "PG003",
    "Categoría": "Polerones Gamers Personalizados",
    "Nombre": "Polerón Gamer Personalizado 'Game Over'",
    "Precio": "26.990 CLP"
  },
  {
    "Código": "PG004",
    "Categoría": "Polerones Gamers Personalizados",
    "Nombre": "Polerón Gamer Personalizado 'GG Easy'",
    "Precio": "27.990 CLP"
  },
  {
    "Código": "PG005",
    "Categoría": "Polerones Gamers Personalizados",
    "Nombre": "Polerón Gamer Personalizado 'Pixel Heart'",
    "Precio": "28.990 CLP"
  },
  {
    "Código": "PG006",
    "Categoría": "Polerones Gamers Personalizados",
    "Nombre": "Polerón Gamer Personalizado 'Arcade Retro'",
    "Precio": "29.990 CLP",
    "imageLink": "assets/img/products/polerones/arcade-2.jpg"
  }
]
