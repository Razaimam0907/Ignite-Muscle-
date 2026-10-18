/* ============ IGNITE MUSCLE DATA ============ */
/* Image sets per product: first image = card photo, the rest scroll in the product gallery.
 */
const gal = (k, n) => Array.from({ length: n }, (_, i) => `img/${k}-${i + 1}.jpg`);
const IMG = {
  whey: gal("whey", 3), isolate: gal("isolate", 2), mass: gal("mass", 2), pre: gal("pre", 2), bcaa: gal("bcaa", 2),
  multi: gal("multi", 2), omega: gal("omega", 2), oats: gal("oats", 2), pb: gal("pb", 2),
  tank: gal("tank", 3), stringer: gal("stringer", 3), creaMono: gal("creaMono", 2), creaMicro: gal("creaMicro", 2),
  tankYellow: gal("tankYellow", 3), tankGrey: gal("tankGrey", 3), tankBlue: gal("tankBlue", 3), tankOlive: gal("tankOlive", 3), tankRed: gal("tankRed", 3)
};

const PANTS = ["Black", "Grey", "Navy", "Olive Green", "Beige", "Charcoal / Red", "White", "Burgundy"];
const TEES = ["Black", "White", "Grey", "Navy", "Olive Green", "Red", "Yellow", "Maroon"];
const SHOES = ["White", "Black", "Grey", "Navy", "Olive Green", "Red", "Orange", "Yellow", "Beige", "Purple", "Teal", "Pink", "Camo", "All Black", "Blue / White"];
/* per-colour image sets: CV[key][colourIndex] = [images...] */
const CV = {
  pants: PANTS.map((_, i) => [`img/pants-${i}-1.jpg`, `img/pants-${i}-2.jpg`, `img/pants-${i}-3.jpg`, "img/pants-d1.jpg", "img/pants-d2.jpg"]),
  tees: TEES.map((_, i) => [1, 2, 3].map(n => `img/tee-${i}-${n}.jpg`)),
  shoes: SHOES.map((_, i) => i ? [`img/shoe-${i}-1.jpg`, "img/shoe-det.jpg"] : ["img/shoe-0-1.jpg", "img/shoe-hero.jpg", "img/shoe-det.jpg"])
};
const WSZ = [["S", 1], ["M", 1], ["L", 1], ["XL", 1], ["XXL", 1]];

/* Products: p = selling price, o = MRP (for the default size) */
const P = [
  { n: "Premium Whey Protein", c: "Protein", ck: "Whey", p: 3499, o: 4999, col: "#5a3a22", t: "WHEY", im: "whey" },
  { n: "Isolate Zero Carb", c: "Protein", ck: "Isolate", p: 2999, o: 3999, col: "#e8e8e8", t: "ISO", im: "isolate" },
  { n: "Mass Gainer", c: "Protein", ck: "Mass", p: 2799, o: 3599, col: "#8b5a2b", t: "MASS", im: "mass", sz: [["1 kg", .4], ["3 kg", 1], ["5 kg", 1.55]] },
  { n: "Creatine Monohydrate", c: "Creatine", ck: "CreaM", im: "creaMono", fl: ["Unflavoured"], p: 879, o: 999, col: "#2563eb", t: "CREA" },
  { n: "Creatine Micronized", c: "Creatine", im: "creaMicro", fl: ["Unflavoured"], p: 1499, o: 1899, col: "#1e3a8a", t: "CREA+" },
  { n: "Pre-Workout Xtreme", c: "Pre-Workout", ck: "Pre", p: 1299, o: 1699, col: "#dc2626", t: "PRE", im: "pre" },
  { n: "BCAA Power", c: "Pre-Workout", ck: "BCAA", p: 999, o: 1399, col: "#16a34a", t: "BCAA", im: "bcaa" },
  { n: "Multivitamin", c: "Vitamins", p: 549, o: 799, col: "#f59e0b", t: "MULTI", im: "multi", sz: [["30 tabs", .55], ["60 tabs", 1], ["120 tabs", 1.8]] },
  { n: "Omega-3 Fish Oil", c: "Vitamins", p: 699, o: 899, col: "#0891b2", t: "OMEGA", im: "omega", ck: "Omega", sz: [["30 softgels", .55], ["60 softgels", 1], ["120 softgels", 1.8]] },
  { n: "High Protein Oats", c: "Foods", p: 449, o: 599, col: "#8b6b3a", t: "OATS", im: "oats", ck: "Oats", fl: ["Chocolate", "Banana Nut", "Unflavoured"], sz: [["500 g", .55], ["1 kg", 1], ["2 kg", 1.8]] },
  { n: "High Protein Peanut Butter", c: "Foods", p: 549, o: 699, col: "#a0662b", t: "PB", im: "pb", ck: "PB", fl: ["Chocolate Crunchy", "Classic Crunchy", "Classic Creamy"], sz: [["400 g", .5], ["1 kg", 1], ["2 kg", 1.8]] },
  { n: "Performance Tank Top – White", c: "Gym Wear", ck: "Wear", p: 799, o: 1199, col: "#eeeeee", t: "TANK", im: "tank", fl: ["White"] },
  { n: "Racerback Stringer – Black", c: "Gym Wear", ck: "Wear", p: 699, o: 999, col: "#111111", t: "STRING", im: "stringer", fl: ["Black"] },
  { n: "Performance Tank Top – Yellow", c: "Gym Wear", ck: "Wear", p: 799, o: 1199, col: "#f5d90a", t: "TANK", im: "tankYellow", fl: ["Yellow"] },
  { n: "Performance Tank Top – Grey", c: "Gym Wear", ck: "Wear", p: 799, o: 1199, col: "#8a8a8a", t: "TANK", im: "tankGrey", fl: ["Grey"] },
  { n: "Performance Tank Top – Royal Blue", c: "Gym Wear", ck: "Wear", p: 799, o: 1199, col: "#1e3a8a", t: "TANK", im: "tankBlue", fl: ["Royal Blue"] },
  { n: "Performance Tank Top – Olive Green", c: "Gym Wear", ck: "Wear", p: 799, o: 1199, col: "#4b5320", t: "TANK", im: "tankOlive", fl: ["Olive Green"] },
  { n: "Performance Tank Top – Red", c: "Gym Wear", ck: "Wear", p: 799, o: 1199, col: "#c1121f", t: "TANK", im: "tankRed", fl: ["Red"] }
];

/* one card per colour for Lowers, Compression Tees and Shoes */
const SHZ = [["UK 6", 1], ["UK 7", 1], ["UK 8", 1], ["UK 9", 1], ["UK 10", 1], ["UK 11", 1]];
PANTS.forEach((c, i) => { IMG["pants" + i] = CV.pants[i]; P.push({ n: "Athletic Track Pants – " + c, c: "Lowers", ck: "Pants", p: 1299, o: 1899, col: "#222", t: "PANTS", im: "pants" + i, fl: [c], sz: WSZ }); });
TEES.forEach((c, i) => { IMG["tee" + i] = CV.tees[i]; P.push({ n: "Compression T-Shirt – " + c, c: "Compression Tees", ck: "Tee", p: 899, o: 1399, col: "#222", t: "TEE", im: "tee" + i, fl: [c], sz: WSZ }); });
SHOES.forEach((c, i) => { IMG["shoe" + i] = CV.shoes[i]; P.push({ n: "Performance Sneakers – " + c, c: "Shoes", ck: "Shoe", p: 2499, o: 3999, col: "#eee", t: "SHOE", im: "shoe" + i, fl: [c], sz: SHZ }); });

/* [label, price multiplier]  – index 1 is the default size */
const SZ = {
  "Protein": [["1 kg", .55], ["2 kg", 1], ["4 kg", 1.85]],
  "Creatine": [["150 g", .55], ["300 g", 1], ["600 g", 1.8]],
  "Pre-Workout": [["15 servings", .55], ["30 servings", 1], ["60 servings", 1.8]],
  "Vitamins": [["60 tabs", .7], ["90 tabs", 1], ["180 tabs", 1.8]],
  "Foods": [["500 g", .55], ["1 kg", 1], ["2 kg", 1.8]],
  "Gym Wear": [["S", 1], ["M", 1], ["L", 1], ["XL", 1], ["XXL", 1]]
};
const FL = {
  "Protein": ["Rich Chocolate", "Vanilla Cream", "Cookies & Cream", "Unflavoured"],
  "Creatine": ["Unflavoured", "Watermelon", "Fruit Punch"],
  "Pre-Workout": ["Fruit Punch", "Blue Raspberry", "Green Apple"],
  "Vitamins": ["Unflavoured"],
  "Foods": ["Unflavoured"],
  "Gym Wear": ["Black"]
};
const szOf = x => x.sz || SZ[x.c];
P.forEach((x, i) => {
  x.id = i; x.wr = ["Gym Wear", "Lowers", "Compression Tees", "Shoes"].includes(x.c);
  x.rating = (4.3 + ((i * 7) % 6) / 10).toFixed(1);
  x.reviews = (1.2 + i * 0.9).toFixed(1) + "K";
  x.size = szOf(x)[1][0];
  x.flavs = x.fl || FL[x.c];
});

/* Product page content */
const NUT = {
  "Whey": [["Serving size", "1 scoop (33 g)"], ["Energy", "128 kcal"], ["Protein", "24 g"], ["Carbohydrates", "3 g"], ["Fat", "2 g"], ["BCAA", "5.5 g"], ["Sugar", "Low"]],
  "Isolate": [["Serving size", "1 scoop (33 g)"], ["Protein", "30 g"], ["Carbohydrates", "0 g"], ["Fat", "Low"], ["Added sugar", "0 g"]],
  "Mass": [["Serving size", "1 serving"], ["Energy", "1250 kcal"], ["Protein", "50 g"], ["Carbohydrates", "250 g"], ["Added sugar", "0 g"]],
  "Pre": [["Serving size", "1 scoop (10 g)"], ["Caffeine", "200 mg"], ["Beta-Alanine", "3.2 g"], ["Citrulline Malate", "6 g"]],
  "BCAA": [["Serving size", "1 scoop"], ["BCAAs", "7 g"], ["Glutamine", "5 g"], ["Sugar", "0 g"]],
  "Pants": [["Fabric", "Breathable, quick-dry"], ["Stretch", "4-way stretch"], ["Waist", "Elastic with drawstring"], ["Pockets", "Deep side pockets"], ["Hem", "Adjustable bottom hem"]],
  "Tee": [["Fit", "Compression, athletic"], ["Fabric", "Breathable and stretchable"], ["Sleeve", "Raglan design"], ["Neck", "Tagless comfort"], ["Branding", "Chest logo, vertical back print"]],
  "Shoe": [["Upper", "Breathable mesh"], ["Sole", "Cushioned, high-grip outsole"], ["Fit", "True to size"], ["Care", "Wipe clean with a damp cloth"]],
  "CreaM": [["Serving size", "1 scoop (5 g)"], ["Creatine monohydrate", "5000 mg"], ["Energy", "0 kcal"], ["Sugar", "0 g"]],
  "Wear": [["Fit", "Athletic, true to size"], ["Fabric", "Breathable, quick-dry"], ["Branding", "Chest logo + back print"], ["Care", "Machine wash cold, no bleach"]],
  "Creatine": [["Serving size", "1 scoop (3 g)"], ["Creatine monohydrate", "3 g"], ["Energy", "0 kcal"], ["Sugar", "0 g"]],
  "Oats": [["Serving size", "50 g"], ["Energy", "190 kcal"], ["Protein", "22 g"], ["Carbohydrates", "20 g"], ["Dietary fibre", "6 g"], ["Added sugar", "0 g"]],
  "PB": [["Serving size", "2 tbsp (32 g)"], ["Energy", "190 kcal"], ["Protein", "9 g"], ["Fat", "15 g"], ["Carbohydrates", "6 g"], ["Added sugar", "0 g"]],
  "Omega": [["Serving size", "1 softgel"], ["Fish oil", "1000 mg"], ["EPA", "300 mg"], ["DHA", "200 mg"], ["Energy", "10 kcal"]],
  "Vitamins": [["Serving size", "1 tablet"], ["Vitamin C", "80 mg"], ["Vitamin D3", "400 IU"], ["Zinc", "10 mg"], ["Magnesium", "100 mg"], ["B-Complex", "100% RDA"]]
};
const CONTENT = {
  "Protein": {
    details: [["Fast absorption", "High-quality whey with a complete amino acid profile that supports quick post-workout recovery."], ["Muscle support", "High protein per scoop to help you build and maintain lean muscle."], ["Trusted quality", "Every batch is third-party tested for purity, heavy metals and label accuracy."]],
    desc: "Engineered for lifters who want clean, effective protein without fillers. Mixes smoothly, tastes great and fits easily into any cutting, bulking or maintenance diet.",
    benefits: ["High protein per serving", "Supports muscle growth and recovery", "Low sugar, no added sugar", "Mixes instantly, no lumps", "No amino spiking, no banned substances"],
    how: ["Mix 1 scoop (33 g) in 200-250 ml of cold water or milk.", "Take after your workout or between meals to hit your daily protein target.", "Do not exceed 2-3 scoops per day."],
    faq: [["Is it suitable for vegetarians?", "Yes. Whey is a dairy protein and the product is 100% vegetarian."], ["When should I take it?", "Ideally within an hour after training, or any time you need to top up your protein."], ["Is it safe for beginners?", "Yes, when taken as directed along with a balanced diet and training."]]
  },
  "Creatine": {
    details: [["Strength and power", "Creatine monohydrate is one of the most researched supplements for strength and performance."], ["Pure formula", "Single-ingredient formula with no fillers or added sugar."], ["Trusted quality", "Third-party tested for purity."]],
    desc: "Micronised creatine monohydrate that dissolves easily and helps you push out extra reps and recover faster between sets.",
    benefits: ["Improves strength and power output", "Supports lean muscle gain", "Zero sugar, zero calories", "Easy mixing micronised powder"],
    how: ["Take 3-5 g (1 scoop) daily with water or juice.", "Take at any time of day. Consistency matters more than timing.", "Stay well hydrated."],
    faq: [["Do I need a loading phase?", "No. 3-5 g daily saturates your muscles in a few weeks."], ["Can I take it on rest days?", "Yes, take it daily."], ["Who should avoid it?", "People with kidney conditions should consult a doctor first."]]
  },
  "Pre-Workout": {
    details: [["Energy and focus", "A balanced stimulant and amino blend to power through tough sessions."], ["Endurance", "Beta-alanine and citrulline support stamina and pumps."], ["Clean label", "No banned substances, tested for purity."]],
    desc: "A clean pre-workout formula for lifters who want energy, focus and endurance without the crash.",
    benefits: ["Sustained energy and focus", "Better pumps and endurance", "Great taste, mixes easily", "No sugar crash"],
    how: ["Mix 1 scoop in 250 ml water 20-30 minutes before training.", "Start with half a scoop to assess tolerance.", "Avoid within 6 hours of bedtime."],
    faq: [["How much caffeine is in it?", "About 200 mg per scoop, similar to 2 cups of coffee."], ["Is the tingling normal?", "Yes, it is a harmless effect of beta-alanine."], ["Can I take it daily?", "Cycle usage and keep total caffeine under 400 mg per day."]]
  },
  "BCAA": {
    details: [["Faster recovery", "7 g of BCAAs per serving to support recovery between sessions."], ["Less fatigue", "Added glutamine helps you keep training hard."], ["Zero sugar", "Fruit punch flavour with no sugar."]],
    desc: "An intra-workout formula built for faster recovery, less fatigue and better performance.",
    benefits: ["7 g BCAAs per serving", "5 g glutamine per serving", "Zero sugar", "Improves endurance"],
    how: ["Mix 1 scoop in 300 ml water.", "Sip during your workout.", "Use on training days."],
    faq: [["Do I need BCAAs if I take whey?", "If your daily protein is already high, BCAAs add little. They help most when training fasted."], ["Is it vegetarian?", "Yes."]]
  },
  "Oats": {
    details: [["Protein-rich breakfast", "Whole grain oats with added protein: about 22 g per serving."], ["High fibre", "Keeps you full for longer and supports digestion."], ["Clean label", "100% whole grain oats with no added sugar."]],
    desc: "A fast, filling breakfast for lifters. Cook it, soak it overnight or blend it into a shake. Clean energy, better nutrition, built for your goals.",
    benefits: ["22 g protein per serving", "100% whole grain oats", "High fibre for longer satiety", "No added sugar", "Ready in 3 minutes"],
    how: ["Add 50 g (about 1/2 cup) to 200 ml hot water or milk.", "Microwave for 2-3 minutes or soak overnight.", "Top with banana, nuts or berries."],
    faq: [["Is it vegetarian?", "Yes, the oats are 100% vegetarian."], ["Does it contain added sugar?", "No added sugar."], ["Can I eat it daily?", "Yes, as part of a balanced diet."]]
  },
  "PB": {
    details: [["High protein", "A protein-rich spread for toast, shakes and oats."], ["Good fats", "Natural peanut fats for sustained energy."], ["No added sugar", "Rich chocolate taste without added sugar."]],
    desc: "Crunchy chocolate peanut butter with real peanuts and rich cocoa. Rich chocolate taste, real nutrition.",
    benefits: ["High protein", "Good fats", "No added sugar", "Real peanut crunch", "Rich chocolate taste"],
    how: ["Spread on toast, rotis or banana.", "Blend 1-2 tbsp into your shake or oats.", "Store in a cool, dry place and close the lid tightly."],
    faq: [["Is it suitable for vegetarians?", "Yes."], ["Does it contain nuts?", "Yes. It contains peanuts, so avoid it if you have a nut allergy."]]
  },
  "Omega": {
    details: [["Heart health", "EPA and DHA omega-3 fatty acids support a healthy heart."], ["Brain and focus", "DHA supports brain function and mental clarity."], ["Joint support", "Helps keep joints comfortable for heavy training."]],
    desc: "High-strength 1000 mg fish oil softgels, purified for a clean taste and easy daily use.",
    benefits: ["Supports heart, brain and joint health", "1000 mg fish oil per softgel", "Purified, no fishy aftertaste", "Easy-to-swallow softgels"],
    how: ["Take 1-2 softgels daily with a meal.", "Store in a cool, dry place."],
    faq: [["Is it vegetarian?", "No. It is derived from fish."], ["When should I take it?", "With any main meal for best absorption."]]
  },
  "Vitamins": {
    details: [["Daily essentials", "Covers key vitamins and minerals often missed by active people."], ["Recovery support", "Zinc and magnesium help muscle function and sleep quality."], ["Trusted quality", "GMP-certified manufacturing."]],
    desc: "A complete daily formula designed for people who train hard and need extra micronutrient support.",
    benefits: ["Supports immunity and energy", "Supports bone and muscle health", "One tablet a day", "Vegetarian friendly"],
    how: ["Take 1 tablet daily after a meal with water.", "Do not exceed the recommended dose."],
    faq: [["Can I take it with protein?", "Yes, there is no interaction."], ["Is it suitable for vegetarians?", "Yes, the formula is vegetarian."]]
  },
  "Pants": {
    details: [["Breathable fabric", "Light, quick-dry fabric that keeps you cool through long sessions."], ["Made to move", "4-way stretch and an elastic drawstring waist for a secure, comfortable fit."], ["Built to last", "Deep side pockets, an adjustable bottom hem and premium print and embroidery."]],
    desc: "Loose, lightweight track pants for the gym and everyday wear. Move better, train harder.",
    benefits: ["Breathable, quick-dry fabric", "4-way stretch", "Elastic waistband with drawstring", "Deep side pockets", "Adjustable bottom hem"],
    how: ["Machine wash cold with similar colours.", "Do not bleach. Dry in shade.", "Wash inside out to protect the print."],
    faq: [["How does the sizing run?", "Relaxed fit. Size down if you prefer a closer cut."], ["Can I return it?", "Yes, unworn items can be returned within 7 days."]]
  },
  "Tee": {
    details: [["Compression fit", "An athletic, close fit that shows off your training."], ["Raglan sleeves", "Raglan sleeve design for full freedom of movement."], ["Premium branding", "Chest logo with vertical Ignite Muscle print on the back."]],
    desc: "A breathable, stretchable compression tee with tagless comfort, built to perform from warm-up to last rep.",
    benefits: ["Tagless comfort", "Raglan sleeve design", "Breathable and stretchable fabric", "Premium print logo"],
    how: ["Machine wash cold, inside out.", "Do not bleach or tumble dry on high heat.", "Do not iron directly on the print."],
    faq: [["How does the sizing run?", "Compression fit. Size up if you want it looser."], ["Can I return it?", "Yes, unworn items can be returned within 7 days."]]
  },
  "Shoe": {
    details: [["Lightweight comfort", "A light build that stays comfortable from the gym floor to the street."], ["Breathable mesh", "Mesh upper keeps your feet cool."], ["Superior grip", "Durable outsole with grip for lifting and cardio."]],
    desc: "Performance sneakers built for comfort, stability and durability. More than shoes, it is a lifestyle.",
    benefits: ["Lightweight comfort", "Durable build", "Breathable mesh", "Superior grip"],
    how: ["Wipe clean with a damp cloth.", "Air dry away from direct heat.", "Do not machine wash."],
    faq: [["How does the sizing run?", "True to size. Choose the next size up for thick socks."], ["Can I return them?", "Yes, unworn pairs can be returned within 7 days."]]
  },
  "Wear": {
    details: [["Built for training", "A light, breathable cut that moves with you through heavy sessions."], ["Ignite Muscle branding", "Bolt logo on the chest and the brand name down the back."], ["Everyday comfort", "Soft against the skin and quick to dry after a hard workout."]],
    desc: "Gym wear that matches your supplement shelf. Clean, minimal branding and an athletic fit made for lifting.",
    benefits: ["Athletic, true-to-size fit", "Breathable, quick-dry fabric", "Chest logo and back print", "Available in S to XXL"],
    how: ["Machine wash cold with similar colours.", "Do not bleach or tumble dry on high heat.", "Wash inside out to protect the print."],
    faq: [["How does the sizing run?", "True to size with an athletic cut. Size up if you prefer a looser fit."], ["Can I return it?", "Yes, unworn items can be returned within 7 days."]]
  }
};

/* ============ FOOD DATABASE ============
   name | serving | kcal | protein g | carbs g | fat g | vegetarian (1) / non-veg (0) */
const FOODS = `Egg, whole|1 large (50 g)|72|6.3|0.4|4.8|0
Boiled egg|1 large (50 g)|78|6.3|0.6|5.3|0
Egg white|1 large (33 g)|17|3.6|0.2|0.1|0
Omelette (2 eggs)|1 serving|190|13|1|14|0
Egg curry|1 bowl (200 g)|280|16|7|20|0
Chicken breast (grilled)|100 g|165|31|0|3.6|0
Chicken curry|1 bowl (200 g)|290|26|8|17|0
Fish curry|1 bowl (200 g)|240|24|6|13|0
Grilled fish|100 g|140|24|0|4|0
Tuna (canned)|100 g|116|26|0|1|0
Prawns|100 g|99|24|0.2|0.3|0
Mutton curry|1 bowl (200 g)|380|28|6|27|0
Paneer|100 g|265|18|1.2|21|1
Paneer bhurji|1 bowl (150 g)|330|20|6|25|1
Tofu|100 g|76|8|1.9|4.8|1
Soya chunks (dry)|50 g|172|26|16|0.2|1
Milk (toned)|1 glass (250 ml)|150|8|12|8|1
Greek yogurt|1 cup (170 g)|100|17|6|0.7|1
Curd|1 bowl (100 g)|60|3.5|4.7|3.3|1
Cheese slice|1 slice (20 g)|70|4|0.5|5.5|1
Whey protein shake|1 scoop (33 g)|128|25|3|2|1
Protein bar|1 bar (60 g)|220|20|22|7|1
Oats (cooked)|1 bowl (240 g)|160|6|27|3|1
Oats (dry)|40 g|152|5|26|3|1
Poha|1 plate (150 g)|250|5|45|6|1
Upma|1 plate (150 g)|230|5|35|8|1
Idli|1 piece (40 g)|58|2|12|0.4|1
Dosa|1 plain (100 g)|168|4|29|4|1
Roti|1 medium (40 g)|120|3.6|20|3.7|1
Paratha|1 medium (80 g)|260|5|34|11|1
Whole wheat bread|1 slice (30 g)|80|3|14|1|1
White rice (cooked)|1 cup (160 g)|205|4.3|45|0.4|1
Brown rice (cooked)|1 cup (195 g)|215|5|45|1.8|1
Quinoa (cooked)|1 cup (185 g)|222|8|39|3.6|1
Khichdi|1 bowl (250 g)|290|10|50|6|1
Dal (cooked)|1 bowl (200 g)|210|12|30|4|1
Rajma|1 bowl (200 g)|250|14|40|3|1
Chole (chickpea curry)|1 bowl (200 g)|270|13|40|7|1
Sprouts|1 bowl (100 g)|100|8|15|0.8|1
Roasted chana|30 g|110|6|17|2|1
Peanut butter|1 tbsp (16 g)|94|4|3|8|1
Almonds|10 pieces (12 g)|70|2.5|2.6|6|1
Walnuts|4 halves (14 g)|92|2|2|9|1
Peanuts|30 g|170|7.7|4.7|14.7|1
Chia seeds|1 tbsp (12 g)|58|2|5|3.7|1
Banana|1 medium (120 g)|105|1.3|27|0.4|1
Apple|1 medium (180 g)|95|0.5|25|0.3|1
Mango|1 cup (165 g)|99|1.4|25|0.6|1
Orange|1 medium (130 g)|62|1.2|15|0.2|1
Papaya|1 cup (140 g)|55|0.9|14|0.2|1
Sweet potato|1 medium (130 g)|112|2|26|0.1|1
Potato (boiled)|1 medium (150 g)|130|3|30|0.2|1
Mixed salad|1 bowl (150 g)|35|2|7|0.3|1
Mixed veg curry|1 bowl (200 g)|160|5|20|7|1
Spinach (cooked)|1 cup (180 g)|41|5|7|0.5|1
Broccoli|1 cup (90 g)|31|2.6|6|0.3|1
Ghee|1 tsp (5 g)|45|0|0|5|1
Olive oil|1 tbsp (14 g)|119|0|0|13.5|1
Honey|1 tbsp (21 g)|64|0|17|0|1
Dark chocolate|20 g|110|1.5|9|8|1`
  .split("\n").map(l => { const a = l.split("|"); return { n: a[0], s: a[1], k: +a[2], p: +a[3], c: +a[4], f: +a[5], v: +a[6] }; });

/* words people type that map to our food names */
const ALIAS = { chapati: "roti", phulka: "roti", daal: "dal", yoghurt: "yogurt", chicken: "chicken", pb: "peanut", whey: "whey", shake: "shake" };

/* search keywords */
const KW = { "Protein": "whey protein powder muscle gain shake", "Creatine": "creatine monohydrate strength power", "Pre-Workout": "pre workout energy focus supplement", "Vitamins": "vitamins minerals health supplement", "Foods": "healthy food breakfast snack", "Gym Wear": "gym wear clothing apparel tank top stringer vest tee", "Lowers": "lower pants track pants joggers bottoms trousers gym wear", "Compression Tees": "compression t-shirt tee shirt top gym wear", "Shoes": "shoes sneakers footwear running trainers" };
const KWX = { "Isolate Zero Carb": "isolate lean cutting zero carb", "Mass Gainer": "weight gain bulking calories", "BCAA Power": "bcaa amino acids recovery intra workout", "Omega-3 Fish Oil": "omega fish oil heart joints softgels", "Multivitamin": "multivitamin immunity tablets", "High Protein Oats": "oats oatmeal breakfast fibre", "High Protein Peanut Butter": "peanut butter spread nut butter chocolate crunchy" };
P.forEach(x => { x.kw = (KW[x.c] || "") + " " + (KWX[x.n] || ""); });
