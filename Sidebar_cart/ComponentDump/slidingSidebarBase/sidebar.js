const faceData = [
  {
    name: "Nykaa All Day Matte Long Wear Liquid Foundation With Pump",
    price: "₹419",
    Keywords: "FEATURED",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/5/35f92daNYKAC00000174_1.jpg",
    discount_price: "₹599",
    discount_percentage: "30% Off",
    reviews: "( 3305 )",
    shades: "15 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Maybelline New York Super Stay Full Coverage Foundation",
    price: "₹639",
    Keywords: "FEATURED\nBESTSELLER",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/7/875be506902395685715.jpg",
    discount_price: "₹799",
    discount_percentage: "20% Off",
    reviews: "( 29761 )",
    shades: "9 Shades",
  },
  {
    name: "Kay Beauty Hydrating Foundation",
    price: "₹900",
    Keywords: "FEATURED",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/b/2bc84e88904330902640_1.jpg",
    discount_price: "₹1200",
    discount_percentage: "25% Off",
    reviews: "( 5884 )",
    shades: "20 Shades",
  },
  {
    name: "Nykaa Cosmetics Prep Me Up! Face Primer",
    price: "₹129",
    Keywords: "BESTSELLER\nNEW",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/n/y/nykac00000142_1.jpg",
    reviews: "( 6030 )",
    shades: "2 Sizes",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Maybelline New York Fit Me Matte+Poreless Liquid Foundation ...",
    price: "₹503",
    Keywords: "BESTSELLER",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/3/536b16c6902395718338.jpg",
    discount_price: "₹629",
    discount_percentage: "20% Off",
    reviews: "( 78481 )",
    shades: "21 Shades",
  },
  {
    name: "Maybelline New York Fit Me Matte+Poreless Liquid Foundation ...",
    price: "₹244",
    Keywords: "BESTSELLER",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/d/8d9e16c6902395722434.jpg",
    discount_price: "₹325",
    discount_percentage: "25% Off",
    reviews: "( 60273 )",
    shades: "6 Shades",
  },
  {
    name: "M.A.C Studio Fix Powder Plus Foundation",
    price: "₹2950",
    Keywords: "BESTSELLER",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/3/c3bd29a773602010509_rv__1.jpg",
    reviews: "( 10848 )",
    shades: "38 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Maybelline New York Instant Age Rewind Eraser Dark Circles T...",
    price: "₹594",
    Keywords: "BESTSELLER",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/4/04a1e506902395487432.jpg",
    discount_price: "₹699",
    discount_percentage: "15% Off",
    reviews: "( 38461 )",
    shades: "14 Shades",
  },
  {
    name: "M.A.C Studio Fix Fluid SPF 15 Mini",
    price: "₹1900",
    Keywords: "BESTSELLER",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/8/88315f1773602590667_01.jpg",
    reviews: "( 6194 )",
    shades: "10 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Maybelline New York Fit Me Concealer",
    price: "₹399",
    Keywords: "BESTSELLER",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/7/27007d641554247725_1.jpg",
    discount_price: "₹499",
    discount_percentage: "20% Off",
    reviews: "( 52038 )",
    shades: "9 Shades",
  },
  {
    name: "Maybelline New York Fit Me 12hr Oil Control Compact",
    price: "₹209",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/1/71bb2388901526584109_1.jpg",
    discount_price: "₹249",
    discount_percentage: "16% Off",
    reviews: "( 43291 )",
    shades: "6 Shades",
  },
  {
    name: "M.A.C Studio Fix Fluid SPF 15",
    price: "₹2900",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/d/6d5529a773602150489_rv__1.jpg",
    reviews: "( 11174 )",
    shades: "52 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "M.A.C Prep + Prime Fix+",
    price: "₹2150",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/3/7394cb3773602345830.jpg",
    reviews: "( 13018 )",
    shades: "8 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Kay Beauty Illuminating Primer Drops",
    price: "₹999",
    Keywords: "NEW",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/1/71c2ba2KAYBE00000196_1.jpg",
    reviews: "( 184 )",
    shades: "4 Shades",
  },
  {
    name: "L.A. Girl Pro Conceal HD",
    price: "₹487",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/1/81555979621.jpg",
    discount_price: "₹695",
    discount_percentage: "30% Off",
    reviews: "( 30770 )",
    shades: "39 Shades",
  },
  {
    name: "Garnier Micellar Cleansing Water Pink, For Sensitive Skin",
    price: "₹334",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/8/b8b52d36928820029589_1.jpg",
    discount_price: "₹375",
    discount_percentage: "11% Off",
    reviews: "( 50292 )",
    shades: "2 Sizes",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Lakme Lumi Skin Cream",
    price: "₹299",
    Keywords: "NEW",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/9/2990f39LAKME00000281_0.jpg",
    reviews: "( 12664 )",
    shades: "2 Sizes",
  },
  {
    name: "Swiss Beauty Long Lasting Makeup Fixer Natural Aloe Vera Wit...",
    price: "₹204",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/9/3900695NYSWISSB00122_1.jpg",
    discount_price: "₹249",
    discount_percentage: "18% Off",
    reviews: "( 41081 )",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Swiss Beauty Liquid Concealer",
    price: "₹183",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/4/b4bf0098904325002904_1.jpg",
    discount_price: "₹229",
    discount_percentage: "20% Off",
    reviews: "( 34767 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Lakme Complexion Care Face CC Cream",
    price: "₹360",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/9/994f7f68901030583612_1.jpg",
    reviews: "( 36975 )",
    shades: "6 Shades",
  },
  {
    name: "Kay Beauty Creme Blush",
    price: "₹719",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/b/9b694e8KAYBE00000057_2.jpg",
    discount_price: "₹799",
    discount_percentage: "10% Off",
    reviews: "( 3387 )",
    shades: "5 Shades",
  },
  {
    name: "Nykaa Prep Me Up! Mini Primer",
    price: "₹129",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/n/y/nykac00000142_1.jpg",
    reviews: "( 6030 )",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Embryolisse Lait-Creme Concentré",
    price: "₹1325",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/3/3350900000394_2.jpg",
    reviews: "( 3940 )",
    shades: "2 Sizes",
  },
  {
    name: "Daily Life Forever52 Ultra Definition Liquid Foundation",
    price: "₹807",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/9/290b54d3592496005142_1.jpg",
    discount_price: "₹949",
    discount_percentage: "15% Off",
    reviews: "( 7910 )",
    shades: "12 Shades",
  },
  {
    name: "M.A.C Strobe Cream",
    price: "₹3400",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/6/763e29a773602422050_rv__1.jpg",
    reviews: "( 4009 )",
    shades: "4 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "M.A.C Fix+ Original",
    price: "₹1200",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/a/ca6f446773602368778_0.jpg",
    reviews: "( 2889 )",
    shades: "2 Sizes",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Lakme Absolute Skin Natural Mousse Mattreal Foundation",
    price: "₹850",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/2/22769_h-8901030366086m.jpg",
    reviews: "( 30866 )",
    shades: "9 Shades",
  },
  {
    name: "PAC HD Liquid Foundation",
    price: "₹895",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/0/c0352c6NYPAC00000447_1.jpg",
    reviews: "( 11050 )",
    shades: "26 Shades",
  },
  {
    name: "Lakme 9 to 5 Primer + Matte Powder Foundation Compact",
    price: "₹600",
    reviews: "( 18080 )",
    shades: "6 Shades",
  },
  {
    name: "Love Earth Multipot Lip and Cheek Tint",
    price: "₹299",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/e/0e340c5LE71.jpg",
    discount_price: "₹599",
    discount_percentage: "50% Off",
    reviews: "( 8620 )",
    shades: "9 Shades",
  },
  {
    name: "Huda Beauty Fauxfilter Luminous Matte Full Coverage Liquid F...",
    price: "₹3300",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/d/5d613cdhudab00000154_new_1.jpg",
    reviews: "( 2426 )",
    shades: "30 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Insight Cosmetics Pro Concealer Palette - Corrector",
    price: "₹179",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/9/293672e8904207503161_1.jpg",
    discount_price: "₹199",
    discount_percentage: "10% Off",
    reviews: "( 12685 )",
  },
  {
    name: "Insight Cosmetics 3 In 1 Long Lasting Primer",
    price: "₹234",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/7/971a3858904207502386_1.jpg",
    discount_price: "₹260",
    discount_percentage: "10% Off",
    reviews: "( 25136 )",
  },
  {
    name: "Earth Rhythm Lip & Cheek Tint",
    price: "₹374",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/6/76fb0d6NYKEYM0000043_1.png",
    discount_price: "₹499",
    discount_percentage: "25% Off",
    reviews: "( 5090 )",
    shades: "3 Shades",
  },
  {
    name: "Maybelline New York Fit Me Primer",
    price: "₹539",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/4/04217d6MAYBE00000025_1.jpg",
    discount_price: "₹599",
    discount_percentage: "10% Off",
    reviews: "( 9321 )",
    shades: "2 Shades",
  },
  {
    name: "Maybelline New York Fit Me Matte + Poreless Powder",
    price: "₹412",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/6/c636e5041554433753.jpg",
    discount_price: "₹549",
    discount_percentage: "25% Off",
    reviews: "( 20038 )",
    shades: "9 Shades",
  },
  {
    name: "Mamaearth Glow Serum Foundation With Vitamin C & Turmeric Fo...",
    price: "₹527",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/6/66ab2138906087778288.jpg",
    discount_price: "₹599",
    discount_percentage: "12% Off",
    reviews: "( 3008 )",
    shades: "7 Shades",
    bonus: "Extra 10% Off",
  },
  {
    name: "Maybelline New York Fit me Loose Finishing Powder",
    price: "₹679",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/2/7244e5041554502022.jpg",
    discount_price: "₹799",
    discount_percentage: "15% Off",
    reviews: "( 19640 )",
    shades: "4 Shades",
  },
  {
    name: "Ponds BB+ Cream Instant Spot Coverage + Light Make-up Glow I...",
    price: "₹275",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/3/c31fa32ponds00000026_1.jpg",
    reviews: "( 11947 )",
    shades: "3 Sizes",
  },
  {
    name: "Lakme 9 To 5 Primer + Matte Perfect Cover Foundation",
    price: "₹500",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/4/24452_h-8901030742446.jpg",
    reviews: "( 21520 )",
    shades: "16 Shades",
  },
  {
    name: "Too Faced Born This Way Super Coverage Multi Use Sculpting C...",
    price: "₹2350",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/b/abeb16c651986702480.jpg",
    reviews: "( 2546 )",
    shades: "35 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Maybelline New York Face Studio Master Chrome Metallic Highl...",
    price: "₹479",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/m/a/maybelline-new-york-face-studio-master-chrome-metallic-highlighter---molten-gold.jpg",
    discount_price: "₹599",
    discount_percentage: "20% Off",
    reviews: "( 31134 )",
    shades: "2 Shades",
  },
  {
    name: "Nykaa All Day Matte 12Hr Oil Control Face Compact Powder Wit...",
    price: "₹187",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/d/2d2d4f68904245711795_1.jpg",
    discount_price: "₹249",
    discount_percentage: "25% Off",
    reviews: "( 16832 )",
    shades: "8 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Faces Canada Makeup Fixer Setting Spray",
    price: "₹262",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/3/63ef6a7FACES00000251_1.jpg",
    discount_price: "₹349",
    discount_percentage: "25% Off",
    reviews: "( 15103 )",
    shades: "2 Sizes",
  },
  {
    name: "Tulips Cotton Pad",
    price: "₹84",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/e/ee2fcdf8904117400765_new1.jpg",
    discount_price: "₹90",
    discount_percentage: "7% Off",
    reviews: "( 19780 )",
  },
  {
    name: "Swiss Beauty Baked Blusher & Highlighter",
    price: "₹262",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/5/05f40098904325000610_1.jpg",
    discount_price: "₹349",
    discount_percentage: "25% Off",
    reviews: "( 12515 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "SUGAR Contour De Force Face Palette",
    price: "₹679",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/2/a2d99ec8906090492249_1.jpg",
    discount_price: "₹799",
    discount_percentage: "15% Off",
    reviews: "( 11144 )",
    shades: "3 Shades",
  },
  {
    name: "Colorbar Flawless Finish Primer",
    price: "₹399",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/8/98e21ac8904052433385_1.jpg",
    discount_price: "₹499",
    discount_percentage: "20% Off",
    reviews: "( 9097 )",
  },
  {
    name: "Bioderma Sensibio H2O Micellar Water",
    price: "₹356",
    discount_price: "₹395",
    discount_percentage: "10% Off",
    reviews: "( 6040 )",
    shades: "3 Sizes",
  },
  {
    name: "Faces Canada Weightless Stay Matte Compact SPF-20 Vitamin E ...",
    price: "₹169",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/c/bc0b0178903380005370_1.jpg",
    discount_price: "₹225",
    discount_percentage: "25% Off",
    reviews: "( 26103 )",
    shades: "4 Shades",
  },
  {
    name: "Daily Life Forever52 Pro Artist Ultra Definition Liquid Foun...",
    price: "₹1402",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/1/31bb54dDAIAA00000258_10.jpg",
    discount_price: "₹1649",
    discount_percentage: "15% Off",
    reviews: "( 1275 )",
    shades: "12 Shades",
  },
  {
    name: "Lakme Absolute Blur Perfect Makeup Primer",
    price: "₹800",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/6/a62ccef8901030561924_1.jpg",
    reviews: "( 18160 )",
  },
  {
    name: "Swiss Beauty Real Make-Up Base Highlighting Primer - 01 Natu...",
    price: "₹319",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/9/298e6568904325006285_1.jpg",
    discount_price: "₹399",
    discount_percentage: "20% Off",
    reviews: "( 6101 )",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "SUGAR Ace Of Face Foundation Stick",
    price: "₹849",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/a/8ad51908906090492904_1.jpg",
    discount_price: "₹999",
    discount_percentage: "15% Off",
    reviews: "( 5942 )",
    shades: "22 Shades",
  },
  {
    name: "Nykaa Mini SKINgenius Sculpting & Hydrating Dewy Foundation",
    price: "₹149",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/7/67e7132NYKAC00000217_1.jpg",
    reviews: "( 5653 )",
    shades: "2 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Lakme Absolute Blur Perfect Makeup Primer - Mini",
    price: "₹299",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/4/24815_h-8901030790065.jpg",
    reviews: "( 16054 )",
  },
  {
    name: "Insight Cosmetics Highlighter",
    price: "₹95",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/8/d89a3858904207504427_1.jpg",
    discount_price: "₹105",
    discount_percentage: "10% Off",
    reviews: "( 8106 )",
    shades: "6 Shades",
  },
  {
    name: "Garnier Skin Naturals Micellar Oil-Infused Cleansing Water",
    price: "₹224",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/0/801e7d66902395501992_1.jpg",
    discount_price: "₹249",
    discount_percentage: "10% Off",
    reviews: "( 18406 )",
    shades: "2 Sizes",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Nykaa Strobe & Glow Liquid Highlighter",
    price: "₹594",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/8/a8faa228904245709853ap_0.jpg",
    discount_price: "₹699",
    discount_percentage: "15% Off",
    reviews: "( 9633 )",
    shades: "3 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Lakme Absolute White Intense Wet & Dry Compact",
    price: "₹875",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/8/58abd0dlak_8901030366727_h.jpg",
    reviews: "( 8200 )",
    shades: "6 Shades",
  },
  {
    name: "Charlotte Tilbury Airbrush Flawless Foundation",
    price: "₹4000",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/0/5060542725408_3.jpg",
    reviews: "( 765 )",
    shades: "24 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "SUGAR Contour De Force Mini Blush",
    price: "₹297",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/a/ca7dfc78906090492294_1.jpg",
    discount_price: "₹349",
    discount_percentage: "15% Off",
    reviews: "( 11532 )",
    shades: "5 Shades",
  },
  {
    name: "SUGAR All Set To Go Translucent Powder",
    price: "₹509",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/3/737c3108906090495004_2.png",
    discount_price: "₹599",
    discount_percentage: "15% Off",
    reviews: "( 6361 )",
  },
  {
    name: "L'Oreal Paris Infallible Full Wear Concealer",
    price: "₹594",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/2/a2867ab6902395735908.jpg",
    discount_price: "₹849",
    discount_percentage: "30% Off",
    reviews: "( 3005 )",
    shades: "3 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Bobbi Brown Vitamin Enriched Face Base",
    price: "₹6250",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/c/bc5b718716170027456_1.jpg",
    reviews: "( 2480 )",
    shades: "3 Sizes",
  },
  {
    name: "Lakme Sun Expert Ultra Matte SPF 40 Pa+++ Compact",
    price: "₹275",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/2/12956_h-8901030669828.jpg",
    reviews: "( 25210 )",
  },
  {
    name: "Colorbar Perfect Match Primer",
    price: "₹700",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/c/2ce9017N_8904052428978_1.jpg",
    discount_price: "₹875",
    discount_percentage: "20% Off",
    reviews: "( 13612 )",
  },
  {
    name: "Swiss Beauty Lip & Cheek Cream",
    price: "₹159",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/5/45f2695SWIAC00001058_1.jpg",
    discount_price: "₹199",
    discount_percentage: "20% Off",
    reviews: "( 880 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Insight Cosmetics Pro Concealer Palette - Concealer",
    price: "₹179",
    discount_price: "₹199",
    discount_percentage: "10% Off",
    reviews: "( 7918 )",
  },
  {
    name: "Insight Cosmetics Banana Loose Powder",
    price: "₹176",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/3/b32bc8fINSIG00000354_1.jpg",
    discount_price: "₹195",
    discount_percentage: "10% Off",
    reviews: "( 3991 )",
  },
  {
    name: "Estee Lauder Double Wear Stay-In-Place Makeup Mini SPF 10 (F...",
    price: "₹1850",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/a/0a0d12a887167507135_1.jpg",
    reviews: "( 2655 )",
    shades: "8 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "L'Oreal Paris Infallible 24H Fresh Wear Foundation in a Powd...",
    price: "₹879",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/d/6d007ab3600523951598.jpg",
    discount_price: "₹1099",
    discount_percentage: "20% Off",
    reviews: "( 314 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Too Faced Born This Way Foundation",
    price: "₹3300",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/8/f882526651986701360_1.jpg",
    reviews: "( 1718 )",
    shades: "27 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Kay Beauty Hd Liquid Concealer",
    price: "₹619",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/c/ac914e8KAYBE00000016_1.jpg",
    discount_price: "₹825",
    discount_percentage: "25% Off",
    reviews: "( 1874 )",
    shades: "13 Shades",
  },
  {
    name: "Smashbox The Original Photo Finish Foundation Primer - Smoot...",
    price: "₹1550",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/c/4c2b5d0SMASH00000124_2.jpg",
    reviews: "( 1458 )",
    shades: "3 Sizes",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Kay Beauty Matte HD Setting Loose Powder",
    price: "₹639",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/a/9aa7b778904330900899_1.jpg",
    discount_price: "₹799",
    discount_percentage: "20% Off",
    reviews: "( 5847 )",
    shades: "8 Shades",
  },
  {
    name: "Lakme Rose Face Powder With Sunscreen",
    price: "₹185",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/6/86c4d0dlak_8901030174766_h.jpg",
    reviews: "( 20270 )",
    shades: "2 Shades",
  },
  {
    name: "Kay Beauty Matte Blush",
    price: "₹619",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/6/66c616c8904330900745.jpg",
    discount_price: "₹825",
    discount_percentage: "25% Off",
    reviews: "( 5440 )",
    shades: "8 Shades",
  },
  {
    name: "Swiss Beauty Drop and Glow Liquid Highlighter",
    price: "₹299",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/5/d522a07nyswissb00235_1.jpg",
    discount_price: "₹399",
    discount_percentage: "25% Off",
    reviews: "( 7358 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Nykaa Prep Me Up! Face Primer",
    price: "₹549",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/a/face-primer.jpg",
    reviews: "( 6030 )",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Bioderma Sensibio H2O Micellar Water",
    price: "₹356",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/0/c0ad43eN_3401395376706-01.jpg",
    discount_price: "₹395",
    discount_percentage: "10% Off",
    reviews: "( 6040 )",
    shades: "3 Sizes",
  },
  {
    name: "Insight Cosmetics Pro Concealer Palette - Concealer",
    price: "₹179",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/3/538a72e8904207501020_1.jpg",
    discount_price: "₹199",
    discount_percentage: "10% Off",
    reviews: "( 7918 )",
  },
  {
    name: "Garnier Skin Naturals Micellar Oil-Infused Cleansing Water",
    price: "₹224",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/0/801e7d66902395501992_1.jpg",
    discount_price: "₹249",
    discount_percentage: "10% Off",
    reviews: "( 18406 )",
    shades: "2 Sizes",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Nykaa Strobe & Glow Liquid Highlighter",
    price: "₹594",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/8/a8faa228904245709853ap_0.jpg",
    discount_price: "₹699",
    discount_percentage: "15% Off",
    reviews: "( 9633 )",
    shades: "3 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Lakme Absolute White Intense Wet & Dry Compact",
    price: "₹875",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/8/58abd0dlak_8901030366727_h.jpg",
    reviews: "( 8200 )",
    shades: "6 Shades",
  },
  {
    name: "Charlotte Tilbury Airbrush Flawless Foundation",
    price: "₹4000",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/0/5060542725408_3.jpg",
    reviews: "( 765 )",
    shades: "24 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "SUGAR Contour De Force Mini Blush",
    price: "₹297",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/a/ca7dfc78906090492294_1.jpg",
    discount_price: "₹349",
    discount_percentage: "15% Off",
    reviews: "( 11532 )",
    shades: "5 Shades",
  },
  {
    name: "SUGAR All Set To Go Translucent Powder",
    price: "₹509",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/3/737c3108906090495004_2.png",
    discount_price: "₹599",
    discount_percentage: "15% Off",
    reviews: "( 6361 )",
  },
  {
    name: "L'Oreal Paris Infallible Full Wear Concealer",
    price: "₹594",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/2/a2867ab6902395735908.jpg",
    discount_price: "₹849",
    discount_percentage: "30% Off",
    reviews: "( 3005 )",
    shades: "3 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Bobbi Brown Vitamin Enriched Face Base",
    price: "₹6250",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/c/bc5b718716170027456_1.jpg",
    reviews: "( 2480 )",
    shades: "3 Sizes",
  },
  {
    name: "Lakme Sun Expert Ultra Matte SPF 40 Pa+++ Compact",
    price: "₹275",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/2/12956_h-8901030669828.jpg",
    reviews: "( 25210 )",
  },
  {
    name: "Colorbar Perfect Match Primer",
    price: "₹700",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/c/2ce9017N_8904052428978_1.jpg",
    discount_price: "₹875",
    discount_percentage: "20% Off",
    reviews: "( 13612 )",
  },
  {
    name: "Swiss Beauty Lip & Cheek Cream",
    price: "₹159",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/5/45f2695SWIAC00001058_1.jpg",
    discount_price: "₹199",
    discount_percentage: "20% Off",
    reviews: "( 880 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Insight Cosmetics Pro Concealer Palette - Concealer",
    price: "₹179",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/3/538a72e8904207501020_1.jpg",
    discount_price: "₹199",
    discount_percentage: "10% Off",
    reviews: "( 7918 )",
  },
  {
    name: "Insight Cosmetics Banana Loose Powder",
    price: "₹176",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/3/b32bc8fINSIG00000354_1.jpg",
    discount_price: "₹195",
    discount_percentage: "10% Off",
    reviews: "( 3991 )",
  },
  {
    name: "Estee Lauder Double Wear Stay-In-Place Makeup Mini SPF 10 (F...",
    price: "₹1850",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/a/0a0d12a887167507135_1.jpg",
    reviews: "( 2655 )",
    shades: "8 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "L'Oreal Paris Infallible 24H Fresh Wear Foundation in a Powd...",
    price: "₹879",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/d/6d007ab3600523951598.jpg",
    discount_price: "₹1099",
    discount_percentage: "20% Off",
    reviews: "( 314 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Too Faced Born This Way Foundation",
    price: "₹3300",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/8/f882526651986701360_1.jpg",
    reviews: "( 1718 )",
    shades: "27 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Kay Beauty Hd Liquid Concealer",
    price: "₹619",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/c/ac914e8KAYBE00000016_1.jpg",
    discount_price: "₹825",
    discount_percentage: "25% Off",
    reviews: "( 1874 )",
    shades: "13 Shades",
  },
  {
    name: "Smashbox The Original Photo Finish Foundation Primer - Smoot...",
    price: "₹1550",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/c/4c2b5d0SMASH00000124_2.jpg",
    reviews: "( 1458 )",
    shades: "3 Sizes",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Kay Beauty Matte HD Setting Loose Powder",
    price: "₹639",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/a/9aa7b778904330900899_1.jpg",
    discount_price: "₹799",
    discount_percentage: "20% Off",
    reviews: "( 5847 )",
    shades: "8 Shades",
  },
  {
    name: "Lakme Rose Face Powder With Sunscreen",
    price: "₹185",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/6/86c4d0dlak_8901030174766_h.jpg",
    reviews: "( 20270 )",
    shades: "2 Shades",
  },
  {
    name: "Maybelline New York Fit me Loose Finishing Powder",
    price: "₹679",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/2/7244e5041554502022.jpg",
    discount_price: "₹799",
    discount_percentage: "15% Off",
    reviews: "( 19640 )",
    shades: "4 Shades",
  },
  {
    name: "Ponds BB+ Cream Instant Spot Coverage + Light Make-up Glow I...",
    price: "₹275",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/3/c31fa32ponds00000026_1.jpg",
    reviews: "( 11947 )",
    shades: "3 Sizes",
  },
  {
    name: "Lakme 9 To 5 Primer + Matte Perfect Cover Foundation",
    price: "₹500",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/4/24452_h-8901030742446.jpg",
    reviews: "( 21520 )",
    shades: "16 Shades",
  },
  {
    name: "Too Faced Born This Way Super Coverage Multi Use Sculpting C...",
    price: "₹2350",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/b/abeb16c651986702480.jpg",
    reviews: "( 2546 )",
    shades: "35 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Maybelline New York Face Studio Master Chrome Metallic Highl...",
    price: "₹479",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/m/a/maybelline-new-york-face-studio-master-chrome-metallic-highlighter---molten-gold.jpg",
    discount_price: "₹599",
    discount_percentage: "20% Off",
    reviews: "( 31134 )",
    shades: "2 Shades",
  },
  {
    name: "Nykaa All Day Matte 12Hr Oil Control Face Compact Powder Wit...",
    price: "₹187",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/d/2d2d4f68904245711795_1.jpg",
    discount_price: "₹249",
    discount_percentage: "25% Off",
    reviews: "( 16832 )",
    shades: "8 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Faces Canada Makeup Fixer Setting Spray",
    price: "₹262",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/3/63ef6a7FACES00000251_1.jpg",
    discount_price: "₹349",
    discount_percentage: "25% Off",
    reviews: "( 15103 )",
    shades: "2 Sizes",
  },
  {
    name: "Tulips Cotton Pad",
    price: "₹84",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/e/ee2fcdf8904117400765_new1.jpg",
    discount_price: "₹90",
    discount_percentage: "7% Off",
    reviews: "( 19780 )",
  },
  {
    name: "Swiss Beauty Baked Blusher & Highlighter",
    price: "₹262",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/5/05f40098904325000610_1.jpg",
    discount_price: "₹349",
    discount_percentage: "25% Off",
    reviews: "( 12515 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "SUGAR Contour De Force Face Palette",
    price: "₹679",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/2/a2d99ec8906090492249_1.jpg",
    discount_price: "₹799",
    discount_percentage: "15% Off",
    reviews: "( 11144 )",
    shades: "3 Shades",
  },
  {
    name: "Colorbar Flawless Finish Primer",
    price: "₹399",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/8/98e21ac8904052433385_1.jpg",
    discount_price: "₹499",
    discount_percentage: "20% Off",
    reviews: "( 9097 )",
  },
  {
    name: "Bioderma Sensibio H2O Micellar Water",
    price: "₹356",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/0/c0ad43eN_3401395376706-01.jpg",
    discount_price: "₹395",
    discount_percentage: "10% Off",
    reviews: "( 6040 )",
    shades: "3 Sizes",
  },
  {
    name: "Faces Canada Weightless Stay Matte Compact SPF-20 Vitamin E ...",
    price: "₹169",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/c/bc0b0178903380005370_1.jpg",
    discount_price: "₹225",
    discount_percentage: "25% Off",
    reviews: "( 26103 )",
    shades: "4 Shades",
  },
  {
    name: "Daily Life Forever52 Pro Artist Ultra Definition Liquid Foun...",
    price: "₹1402",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/1/31bb54dDAIAA00000258_10.jpg",
    discount_price: "₹1649",
    discount_percentage: "15% Off",
    reviews: "( 1275 )",
    shades: "12 Shades",
  },
  {
    name: "Lakme Absolute Blur Perfect Makeup Primer",
    price: "₹800",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/6/a62ccef8901030561924_1.jpg",
    reviews: "( 18160 )",
  },
  {
    name: "Swiss Beauty Real Make-Up Base Highlighting Primer - 01 Natu...",
    price: "₹319",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/9/298e6568904325006285_1.jpg",
    discount_price: "₹399",
    discount_percentage: "20% Off",
    reviews: "( 6101 )",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "SUGAR Ace Of Face Foundation Stick",
    price: "₹849",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/a/8ad51908906090492904_1.jpg",
    discount_price: "₹999",
    discount_percentage: "15% Off",
    reviews: "( 5942 )",
    shades: "22 Shades",
  },
  {
    name: "Nykaa Mini SKINgenius Sculpting & Hydrating Dewy Foundation",
    price: "₹149",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/7/67e7132NYKAC00000217_1.jpg",
    reviews: "( 5653 )",
    shades: "2 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Lakme Absolute Blur Perfect Makeup Primer - Mini",
    price: "₹299",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/4/24815_h-8901030790065.jpg",
    reviews: "( 16054 )",
  },
  {
    name: "Insight Cosmetics Highlighter",
    price: "₹95",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/8/d89a3858904207504427_1.jpg",
    discount_price: "₹105",
    discount_percentage: "10% Off",
    reviews: "( 8106 )",
    shades: "6 Shades",
  },
  {
    name: "Garnier Skin Naturals Micellar Oil-Infused Cleansing Water",
    price: "₹224",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/0/e07c7d66902395502005_1.jpg",
    discount_price: "₹249",
    discount_percentage: "10% Off",
    reviews: "( 18415 )",
    shades: "2 Sizes",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Nykaa Strobe & Glow Liquid Highlighter",
    price: "₹594",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/9/e9e0a80NYK_SGLHL_1.jpg",
    discount_price: "₹699",
    discount_percentage: "15% Off",
    reviews: "( 9640 )",
    shades: "3 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Charlotte Tilbury Airbrush Flawless Foundation",
    price: "₹4000",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/0/5060542725545_2.jpg",
    reviews: "( 765 )",
    shades: "16 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Lakme Absolute White Intense Wet & Dry Compact",
    price: "₹875",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/2/22680_s1-8901030366734m.jpg",
    reviews: "( 8207 )",
    shades: "6 Shades",
  },
  {
    name: "SUGAR Contour De Force Mini Blush",
    price: "₹297",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/0/10edfc78906090492287_1.jpg",
    discount_price: "₹349",
    discount_percentage: "15% Off",
    reviews: "( 11541 )",
    shades: "5 Shades",
  },
  {
    name: "SUGAR All Set To Go Translucent Powder",
    price: "₹509",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/3/737c3108906090495004_2.png",
    discount_price: "₹599",
    discount_percentage: "15% Off",
    reviews: "( 6369 )",
  },
  {
    name: "L'Oreal Paris Infallible Full Wear Concealer",
    price: "₹594",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/0/00397ab6902395735908.jpg",
    discount_price: "₹849",
    discount_percentage: "30% Off",
    reviews: "( 3013 )",
    shades: "3 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Swiss Beauty Lip & Cheek Cream",
    price: "₹159",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/8/28e5b888904325028799_1.jpg",
    discount_price: "₹199",
    discount_percentage: "20% Off",
    reviews: "( 899 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Colorbar Perfect Match Primer",
    price: "₹700",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/c/2ce9017N_8904052428978_1.jpg",
    discount_price: "₹875",
    discount_percentage: "20% Off",
    reviews: "( 13623 )",
  },
  {
    name: "Insight Cosmetics Pro Concealer Palette - Concealer",
    price: "₹179",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/3/538a72e8904207501020_1.jpg",
    discount_price: "₹199",
    discount_percentage: "10% Off",
    reviews: "( 7933 )",
  },
  {
    name: "Insight Cosmetics Banana Loose Powder",
    price: "₹176",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/3/b32bc8fINSIG00000354_1.jpg",
    discount_price: "₹195",
    discount_percentage: "10% Off",
    reviews: "( 4005 )",
  },
  {
    name: "L'Oreal Paris Infallible 24H Fresh Wear Foundation in a Powd...",
    price: "₹879",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/f/af287ab3600523951291.jpg",
    discount_price: "₹1099",
    discount_percentage: "20% Off",
    reviews: "( 318 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Lakme Sun Expert Ultra Matte SPF 40 Pa+++ Compact",
    price: "₹275",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/2/12956_h-8901030669828.jpg",
    reviews: "( 25228 )",
  },
  {
    name: "Bobbi Brown Vitamin Enriched Face Base",
    price: "₹6250",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/o/bobbi_vefb_1_.png",
    reviews: "( 2480 )",
    shades: "3 Sizes",
  },
  {
    name: "Kay Beauty Hd Liquid Concealer",
    price: "₹619",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/1/815c863KAYBE00000005_1.jpg",
    discount_price: "₹825",
    discount_percentage: "25% Off",
    reviews: "( 1879 )",
    shades: "13 Shades",
  },
  {
    name: "Estee Lauder Double Wear Stay-In-Place Makeup Mini SPF 10 (F...",
    price: "₹1850",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/8/588a975ELD_DWSTMKMIN_1.jpg",
    reviews: "( 2658 )",
    shades: "8 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Too Faced Born This Way Foundation",
    price: "₹3300",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/4/345ea8fTOFCD_BRNEFND_2.jpg",
    reviews: "( 1720 )",
    shades: "25 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Smashbox The Original Photo Finish Foundation Primer - Smoot...",
    price: "₹1550",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/6/96db1d2SMASH00000158_1.jpg",
    reviews: "( 1462 )",
    shades: "3 Sizes",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Kay Beauty Matte HD Setting Loose Powder",
    price: "₹639",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/7/57a3e35KAY_HDSLP_2.jpg",
    discount_price: "₹799",
    discount_percentage: "20% Off",
    reviews: "( 5855 )",
    shades: "8 Shades",
  },
  {
    name: "Nykaa Prep Me Up! Face Primer",
    price: "₹549",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/a/face-primer.jpg",
    reviews: "( 6116 )",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Maybelline New York Fit me Loose Finishing Powder",
    price: "₹679",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/d/cd09e5041554503036.jpg",
    discount_price: "₹799",
    discount_percentage: "15% Off",
    reviews: "( 19652 )",
    shades: "4 Shades",
  },
  {
    name: "Ponds BB+ Cream Instant Spot Coverage + Light Make-up Glow I...",
    price: "₹275",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/b/bbd674ePONDS00000030_1.jpg",
    reviews: "( 11980 )",
    shades: "3 Sizes",
  },
  {
    name: "Too Faced Born This Way Super Coverage Multi Use Sculpting C...",
    price: "₹2350",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/b/abeb16c651986702480.jpg",
    reviews: "( 2551 )",
    shades: "32 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Maybelline New York Face Studio Master Chrome Metallic Highl...",
    price: "₹479",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/1/41554538281.1_1.jpg",
    discount_price: "₹599",
    discount_percentage: "20% Off",
    reviews: "( 31147 )",
    shades: "2 Shades",
  },
  {
    name: "Nykaa All Day Matte 12Hr Oil Control Face Compact Powder Wit...",
    price: "₹187",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/1/e1aca80NYKAC00000213_1.jpg",
    discount_price: "₹249",
    discount_percentage: "25% Off",
    reviews: "( 16872 )",
    shades: "8 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Lakme 9 To 5 Primer + Matte Perfect Cover Foundation",
    price: "₹500",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/2/e29b615lkm_mperfou_1.jpg",
    reviews: "( 21532 )",
    shades: "16 Shades",
  },
  {
    name: "Faces Canada Makeup Fixer Setting Spray",
    price: "₹262",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/3/53db71eFACES00000295_1.jpg",
    discount_price: "₹349",
    discount_percentage: "25% Off",
    reviews: "( 15123 )",
    shades: "2 Sizes",
  },
  {
    name: "Tulips Cotton Pad",
    price: "₹84",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/e/ee2fcdf8904117400765_new1.jpg",
    discount_price: "₹90",
    discount_percentage: "7% Off",
    reviews: "( 19808 )",
  },
  {
    name: "Swiss Beauty Baked Blusher & Highlighter",
    price: "₹262",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/9/09310098904325000641_1.jpg",
    discount_price: "₹349",
    discount_percentage: "25% Off",
    reviews: "( 12538 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Faces Canada Weightless Stay Matte Compact SPF-20 Vitamin E ...",
    price: "₹169",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/d/2d8b8cbFCS_WSMC_1.jpg",
    discount_price: "₹225",
    discount_percentage: "25% Off",
    reviews: "( 26134 )",
    shades: "4 Shades",
  },
  {
    name: "SUGAR Contour De Force Face Palette",
    price: "₹679",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/b/4be282bSGR_CDFFP_1.jpg",
    discount_price: "₹799",
    discount_percentage: "15% Off",
    reviews: "( 11162 )",
    shades: "3 Shades",
  },
  {
    name: "Colorbar Flawless Finish Primer",
    price: "₹399",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/8/98e21ac8904052433385_1.jpg",
    discount_price: "₹499",
    discount_percentage: "20% Off",
    reviews: "( 9123 )",
  },
  {
    name: "Bioderma Sensibio H2O Micellar Water",
    price: "₹356",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/i/bioderma014_0001-zoomprod_1.png",
    discount_price: "₹395",
    discount_percentage: "10% Off",
    reviews: "( 6043 )",
    shades: "3 Sizes",
  },
  {
    name: "Lakme Absolute Blur Perfect Makeup Primer",
    price: "₹800",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/6/a62ccef8901030561924_1.jpg",
    reviews: "( 18167 )",
  },
  {
    name: "Daily Life Forever52 Pro Artist Ultra Definition Liquid Foun...",
    price: "₹1402",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/0/005fd9fDAIAA00000255_1.jpg",
    discount_price: "₹1649",
    discount_percentage: "15% Off",
    reviews: "( 1284 )",
    shades: "12 Shades",
  },
  {
    name: "Swiss Beauty Real Make-Up Base Highlighting Primer - 01 Natu...",
    price: "₹319",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/9/298e6568904325006285_1.jpg",
    discount_price: "₹399",
    discount_percentage: "20% Off",
    reviews: "( 5186 )",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Nykaa Mini SKINgenius Sculpting & Hydrating Dewy Foundation",
    price: "₹149",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/7/17cf053NYKAC00000217_1.jpg",
    reviews: "( 5667 )",
    shades: "2 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "SUGAR Ace Of Face Foundation Stick",
    price: "₹849",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/4/a4a9fc78904320701406_1.jpg",
    discount_price: "₹999",
    discount_percentage: "15% Off",
    reviews: "( 5946 )",
    shades: "13 Shades",
  },
  {
    name: "Lakme Absolute Blur Perfect Makeup Primer - Mini",
    price: "₹299",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/4/24815_h-8901030790065.jpg",
    reviews: "( 16067 )",
  },
  {
    name: "Insight Cosmetics Highlighter",
    price: "₹95",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/e/6e723858904207505288_1.jpg",
    discount_price: "₹105",
    discount_percentage: "10% Off",
    reviews: "( 8126 )",
    shades: "6 Shades",
  },
  {
    name: "SUGAR Contour De Force Mini Blush",
    price: "₹297",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/a/ca7dfc78906090492294_1.jpg",
    discount_price: "₹349",
    discount_percentage: "15% Off",
    reviews: "( 11541 )",
    shades: "5 Shades",
  },
  {
    name: "Swiss Beauty Lip & Cheek Cream",
    price: "₹159",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/5/45f2695SWIAC00001058_1.jpg",
    discount_price: "₹199",
    discount_percentage: "20% Off",
    reviews: "( 899 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Too Faced Born This Way Foundation",
    price: "₹3300",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/8/f882526651986701360_1.jpg",
    reviews: "( 1720 )",
    shades: "25 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Nykaa All Day Matte 12Hr Oil Control Face Compact Powder Wit...",
    price: "₹187",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/d/2d2d4f68904245711795_1.jpg",
    discount_price: "₹249",
    discount_percentage: "25% Off",
    reviews: "( 16872 )",
    shades: "8 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Faces Canada Makeup Fixer Setting Spray",
    price: "₹262",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/3/63ef6a7FACES00000251_1.jpg",
    discount_price: "₹349",
    discount_percentage: "25% Off",
    reviews: "( 15123 )",
    shades: "2 Sizes",
  },
  {
    name: "Swiss Beauty Baked Blusher & Highlighter",
    price: "₹262",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/5/05f40098904325000610_1.jpg",
    discount_price: "₹349",
    discount_percentage: "25% Off",
    reviews: "( 12538 )",
    shades: "6 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "SUGAR Contour De Force Face Palette",
    price: "₹679",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/2/a2d99ec8906090492249_1.jpg",
    discount_price: "₹799",
    discount_percentage: "15% Off",
    reviews: "( 11162 )",
    shades: "3 Shades",
  },
  {
    name: "Bioderma Sensibio H2O Micellar Water",
    price: "₹356",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/0/c0ad43eN_3401395376706-01.jpg",
    discount_price: "₹395",
    discount_percentage: "10% Off",
    reviews: "( 6043 )",
    shades: "3 Sizes",
  },
  {
    name: "Nykaa Mini SKINgenius Sculpting & Hydrating Dewy Foundation",
    price: "₹149",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/7/67e7132NYKAC00000217_1.jpg",
    reviews: "( 5667 )",
    shades: "2 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Maybelline New York Fit me Loose Finishing Powder",
    price: "₹799",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/2/7244e5041554502022.jpg",
    reviews: "( 19652 )",
    shades: "4 Shades",
  },
  {
    name: "Ponds BB+ Cream Instant Spot Coverage + Light Make-up Glow I...",
    price: "₹275",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/3/c31fa32ponds00000026_1.jpg",
    reviews: "( 11980 )",
    shades: "3 Sizes",
  },
  {
    name: "Maybelline New York Face Studio Master Chrome Metallic Highl...",
    price: "₹599",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/m/a/maybelline-new-york-face-studio-master-chrome-metallic-highlighter---molten-gold.jpg",
    reviews: "( 31147 )",
    shades: "2 Shades",
  },
  {
    name: "Lakme 9 To 5 Primer + Matte Perfect Cover Foundation",
    price: "₹500",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/4/24452_h-8901030742446.jpg",
    reviews: "( 21532 )",
    shades: "16 Shades",
  },
  {
    name: "Tulips Cotton Pad",
    price: "₹81",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/e/ee2fcdf8904117400765_new1.jpg",
    discount_price: "₹90",
    discount_percentage: "10% Off",
    reviews: "( 19808 )",
  },
  {
    name: "Swiss Beauty Baked Blusher & Highlighter",
    price: "₹262",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/5/05f40098904325000610_1.jpg",
    discount_price: "₹349",
    discount_percentage: "25% Off",
    reviews: "( 12538 )",
    shades: "6 Shades",
  },
  {
    name: "Faces Canada Weightless Stay Matte Compact SPF-20 Vitamin E ...",
    price: "₹169",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/c/bc0b0178903380005370_1.jpg",
    discount_price: "₹225",
    discount_percentage: "25% Off",
    reviews: "( 26134 )",
    shades: "4 Shades",
  },
  {
    name: "SUGAR Contour De Force Face Palette",
    price: "₹719",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/2/a2d99ec8906090492249_1.jpg",
    discount_price: "₹799",
    discount_percentage: "10% Off",
    reviews: "( 11162 )",
    shades: "3 Shades",
    bonus: "Extra 10% Off",
  },
  {
    name: "Colorbar Flawless Finish Primer",
    price: "₹424",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/8/98e21ac8904052433385_1.jpg",
    discount_price: "₹499",
    discount_percentage: "15% Off",
    reviews: "( 9123 )",
    bonus: "Extra 10% Off",
  },
  {
    name: "Daily Life Forever52 Pro Artist Ultra Definition Liquid Foun...",
    price: "₹1484",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/1/31bb54dDAIAA00000258_10.jpg",
    discount_price: "₹1649",
    discount_percentage: "10% Off",
    reviews: "( 1284 )",
    shades: "12 Shades",
  },
  {
    name: "Swiss Beauty Real Make-Up Base Highlighting Primer - 01 Natu...",
    price: "₹319",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/9/298e6568904325006285_1.jpg",
    discount_price: "₹399",
    discount_percentage: "20% Off",
    reviews: "( 5186 )",
  },
  {
    name: "SUGAR Ace Of Face Foundation Stick",
    price: "₹899",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/a/8ad51908906090492904_1.jpg",
    discount_price: "₹999",
    discount_percentage: "10% Off",
    reviews: "( 5946 )",
    shades: "13 Shades",
    bonus: "Extra 10% Off",
  },
  {
    name: "Insight Cosmetics Highlighter",
    price: "₹95",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/8/d89a3858904207504427_1.jpg",
    discount_price: "₹105",
    discount_percentage: "10% Off",
    reviews: "( 8126 )",
    shades: "6 Shades",
  },
  {
    name: "Garnier Skin Naturals Micellar Oil-Infused Cleansing Water",
    price: "₹249",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/0/801e7d66902395501992_1.jpg",
    reviews: "( 18415 )",
    shades: "2 Sizes",
  },
  {
    name: "Nykaa Strobe & Glow Liquid Highlighter",
    price: "₹594",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/8/a8faa228904245709853ap_0.jpg",
    discount_price: "₹699",
    discount_percentage: "15% Off",
    reviews: "( 9640 )",
    shades: "3 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Charlotte Tilbury Airbrush Flawless Foundation",
    price: "₹4000",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/0/5060542725408_3.jpg",
    reviews: "( 765 )",
    shades: "16 Shades",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Lakme Absolute White Intense Wet & Dry Compact",
    price: "₹875",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/8/58abd0dlak_8901030366727_h.jpg",
    reviews: "( 8207 )",
    shades: "6 Shades",
  },
  {
    name: "SUGAR Contour De Force Mini Blush",
    price: "₹314",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/a/ca7dfc78906090492294_1.jpg",
    discount_price: "₹349",
    discount_percentage: "10% Off",
    reviews: "( 11541 )",
    shades: "5 Shades",
    bonus: "Extra 10% Off",
  },
  {
    name: "SUGAR All Set To Go Translucent Powder",
    price: "₹509",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/3/737c3108906090495004_2.png",
    discount_price: "₹599",
    discount_percentage: "15% Off",
    reviews: "( 6369 )",
    bonus: "Extra 10% Off",
  },
  {
    name: "L'Oreal Paris Infallible Full Wear Concealer",
    price: "₹849",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/2/a2867ab6902395735908.jpg",
    reviews: "( 3013 )",
    shades: "3 Shades",
  },
  {
    name: "Swiss Beauty Lip & Cheek Cream",
    price: "₹159",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/5/45f2695SWIAC00001058_1.jpg",
    discount_price: "₹199",
    discount_percentage: "20% Off",
    reviews: "( 899 )",
    shades: "6 Shades",
  },
  {
    name: "Colorbar Perfect Match Primer",
    price: "₹630",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/c/2ce9017N_8904052428978_1.jpg",
    discount_price: "₹875",
    discount_percentage: "28% Off",
    reviews: "( 13623 )",
    bonus: "Extra 10% Off",
  },
  {
    name: "L'Oreal Paris Infallible 24H Fresh Wear Foundation in a Powd...",
    price: "₹1099",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/d/6d007ab3600523951598.jpg",
    reviews: "( 318 )",
    shades: "6 Shades",
  },
  {
    name: "Bobbi Brown Vitamin Enriched Face Base",
    price: "₹6250",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/c/bc5b718716170027456_1.jpg",
    reviews: "( 2480 )",
    shades: "3 Sizes",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Kay Beauty Hd Liquid Concealer",
    price: "₹619",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/c/ac914e8KAYBE00000016_1.jpg",
    discount_price: "₹825",
    discount_percentage: "25% Off",
    reviews: "( 1879 )",
    shades: "13 Shades",
  },
  {
    name: "Estee Lauder Double Wear Stay-In-Place Makeup Mini SPF 10 (F...",
    price: "₹1850",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/a/0a0d12a887167507135_1.jpg",
    reviews: "( 2658 )",
    shades: "8 Shades",
  },
  {
    name: "Smashbox The Original Photo Finish Foundation Primer - Smoot...",
    price: "₹1550",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/c/4c2b5d0SMASH00000124_2.jpg",
    reviews: "( 1462 )",
    shades: "3 Sizes",
    bonus: "Enjoy Free Gift",
  },
  {
    name: "Kay Beauty Matte HD Setting Loose Powder",
    price: "₹639",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/a/9aa7b778904330900899_1.jpg",
    discount_price: "₹799",
    discount_percentage: "20% Off",
    reviews: "( 5855 )",
    shades: "8 Shades",
  },
];
document.querySelector(".cart-btn").addEventListener("click", openNav);
document
  .querySelector(".sidebar-dim-overlay")
  .addEventListener("click", closeNav);

function openNav(event) {
  console.log("open");
  let sidebar = document.querySelector(".cart-sidebar");
  let dimOverlay = document.querySelector(".sidebar-dim-overlay");
  sidebar.classList.add("show-sidebar");
  dimOverlay.classList.add("sidebar-dim-overlay-enable");
}
function closeNav(event) {
  console.log("close");
  let sidebar = document.querySelector(".cart-sidebar");
  let dimOverlay = document.querySelector(".sidebar-dim-overlay");
  sidebar.classList.remove("show-sidebar");
  dimOverlay.classList.remove("sidebar-dim-overlay-enable");
}
