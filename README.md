# GoRental – Premium Car Rental Website Frontend

A modern, commercial-grade car rental web application built with **React**, **Vite**, **Tailwind CSS**, and **React Router DOM**, meticulously crafted to replicate the visual design language of the **GoRental** design reference.

---

## 🎨 Visual Design & Color Tokens

- **Brand Orange**: `#ff3600` (hover: `#e53100`)
- **Fleet Listing & Hero Background**: `#111111` (Very dark background)
- **Vehicle Card Background**: `#18191c` (Dark charcoal)
- **Card Image Container**: `#232528` (Inset neutral grey frame)
- **Vehicle Details Page Background**: `#ffffff` (Crisp light aesthetic matching Screenshot 2)
- **Details Header**: Light theme with dark navigation typography
- **Circular Arrow Button**: Rounded orange circle (`w-11 h-11`) with white `ArrowUpRight` icon positioned at the bottom right of each vehicle card.

---

## 🚗 Client Vehicle Inventory (Exact 5 Models)

All 5 vehicles requested by the client are configured in `src/data/cars.js` with natural, professional descriptions and verified categories. Per project requirements, unconfirmed vehicle specifications are clearly marked with editable placeholders (`Contact for Price`, `Not specified`, `Confirm availability`):

1. **Toyota Camry** – *Sedan* (`/cars/toyota-camry`)
2. **Toyota Fortuner** – *SUV* (`/cars/toyota-fortuner`)
3. **Toyota Innova** – *MPV* (`/cars/toyota-innova`)
4. **Toyota Sequoia** – *Full-size SUV* (`/cars/toyota-sequoia`)
5. **GMC Yukon XL** – *Full-size SUV* (`/cars/gmc-yukon-xl`)

---

## 📄 Pages & Routes

- `/` – **Home Page**: Hero section with custom booking filter, "Browse By Car Type" categories, "Our Amazing Car" featured grid, "Redefining Car Rental" story with "1000+ Car Rent Already" badge, and Call-to-Action.
- `/cars` – **Cars / Fleet Page**: 3-column desktop grid with category filter pills, large vehicle images, specs row with orange icons, and circular arrow link.
- `/cars/:slug` – **Car Details Page**: Reusable dynamic page with large vehicle image on the left, interactive vertical thumbnail gallery, right-side price card ("Call For Final Price"), and "Car Overview" card. Includes WhatsApp and direct phone enquiry triggers.
- `/about` – **About Us Page**: Redefining car rental narrative, 24/7 support & competitive pricing highlights, quality commitment, FAQ accordion, and fleet exploration CTA.
- `/contact` – **Contact Us Page**: "Get In Touch" form with frontend validation and demo submission message, Toronto dispatch depot map embed, contact badges, and direct WhatsApp CTA.

---

## 🛠️ Project Structure

```
src/
├── assets/
│   └── images/
│       └── cars/             # High-resolution automotive photography for all 5 models
├── components/
│   ├── Header.jsx            # Dynamic dark/light header with contact info bar & mobile menu
│   ├── Footer.jsx            # Orange callout banner ("If you have any questions Please Call.") & white footer
│   ├── CarCard.jsx           # Dark charcoal vehicle card with orange circular arrow button
│   ├── CarGallery.jsx        # Left-side main vehicle display with vertical thumbnail selector
│   ├── CarOverview.jsx       # Overview table with orange icons for vehicle attributes
│   └── ContactForm.jsx       # Contact form with frontend validation and demo response
├── data/
│   └── cars.js               # Central vehicle inventory, categories, and contact info
├── pages/
│   ├── Home.jsx              # Landing page
│   ├── Fleet.jsx             # Dedicated dark-themed fleet listing
│   ├── CarDetails.jsx        # Light-themed individual car showcase
│   ├── About.jsx             # About story & FAQ accordion
│   └── Contact.jsx           # Contact form & location map
├── App.jsx                   # React Router DOM layout & routes
├── index.css                 # Tailwind CSS & custom design rules
└── main.jsx                  # React DOM root
```

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```
Generates optimized production assets in the `dist/` directory.

