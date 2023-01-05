let allImages = [
  "https://adn-static2.nykaa.com/media/wysiwyg/2019/Maybelline1211.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/lakme_mega_menu_header.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/nykaa-cosmetics.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/mac.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/2019/lorealparis.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Huda.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/2018/Biotique_new.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/natural-logo.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/FacesCanadaa.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/HeaderIcons/The-Face-Shop.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/2018/colorbar-logoforui.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/nyx_New.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/LOTUS-HERBALS.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/2019/niveaa.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/clinique.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/2018/neutrogena.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Estee-Lauder.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/2020/Olay_logos.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/kay-beauty.png",
  "https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Herbal-Essences.png",
  "https://www.nykaa.com/media/wysiwyg/2022/megamenu_winterwear.jpeg",
  "https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg",
  "https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png",
  "https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg",
  "https://images-static.nykaa.com/uploads/bec43a83-f2cd-4e2d-8136-5393d1f28b6b.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/e3e452fd-5b64-47a2-a6cf-d19a7132cb15.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/7960dfa3-bd54-44cb-92fb-63f360334b40.png?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a3e8131c-ffe1-4af0-803c-5d7c8acc8446.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/1b668ccd-33c2-4821-81ab-4b1ef04951e8.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/2b3099ea-f2fb-49c8-b28a-b7369ed3ee6f.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/14af2ad3-289b-474d-8cda-415974630eb2.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/aeff738e-fa9a-49f0-8b32-3ff81221e904.png?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/1631adbb-8a5c-49f9-99ef-dea8405020b6.jpg?tr=w-1200,cm-pad_resize",
  "------------             ___________________               ------------------",
  "https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/14dab399-cf31-4731-992e-1845321187d6.jpg?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/82eed1ab-64b2-4cb9-818b-9b39cd9284ec.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/144c95cd-e1d3-4b0d-8d5a-a9ecda42e737.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/b2df2716-c39d-40a7-b2a5-76c728a2590b.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/bf0ec2a2-952d-45f5-9e30-7b872906c42d.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/4162f650-31a3-4d41-a420-ac02caccce89.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a75736c9-793c-4e69-9dce-558bcd011968.jpg?tr=w-240,cm-pad_resize",
  "---------------------------------------------------_____________________________------------------",
  "https://images-static.nykaa.com/uploads/c59db0d6-872e-4fd1-bc64-8331897b3965.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/8f8b55d5-0bfc-4545-ba05-df0177672474.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/aff3b609-5b3e-4d8c-8ccb-ad9157824b2d.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/e3424d3e-3c6f-4dd2-9cd3-d9ce46570133.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/4bec33e3-9145-442b-9171-308834402eb3.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/d4eba2cb-bbf9-4f6c-ac47-281819f52385.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/278adfbe-b973-4eff-a964-d1e933e8daea.jpg?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/442497de-0e94-49f0-a055-296caf4a4506.jpg?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/2cddf31b-3553-450e-b552-9953d3ceaa04.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/61fb6fec-6694-487f-8a13-005e4ee50fdf.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/b638c1ad-4c7b-425d-b435-983bd3cc12a0.png?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a242046a-ca1b-4394-9e67-40e1e30abd60.jpeg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/8041211a-7f36-438b-abc3-25c2c517daa2.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/bc5ac3c4-f1d5-48fd-a3c0-f002d1e1b1b2.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/7fbe51fb-f11e-44bb-8188-5f624c1285e0.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/fbf9e414-4cfe-4305-88cf-5282db32df8e.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/23951d99-e2f3-48e2-ac05-49d88e4d52f1.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/9543baff-6b4e-4d1d-ab9c-e7bded753c9c.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/bc0600c5-ddaf-41d7-8596-285e88067b63.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/6e7e4281-e7ac-4f2d-a67e-636847ffd929.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/27d2c518-32f0-4d8a-a956-6baf9a27d00a.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/039f970d-6b63-44e5-8ca8-81cb58901791.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/d47623b5-c3bc-43dc-a99d-fb0c35a67fe9.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/e0beebe9-eecc-4444-b53b-e5264b95d844.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/292a2c1b-ed8c-47a2-a654-79b9d6e9eb96.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/114c1761-45a9-4d86-82ba-c7acc91d4dd6.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/f0ea4956-76d4-4b7c-95b5-ea1a1b8768b3.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/4e9cc366-fb38-4f44-8e81-08a44d2a8aa8.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/3d11cde9-4383-47cd-9dab-8db6cb61be37.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/78d421db-e0b5-402f-862a-bf1fb2924e03.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/fc5d9749-ae5a-4b5f-acc5-2683ddade305.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/1208f0cc-cb69-4c28-8aa7-fe8da2dc1ad4.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/b9984d64-309c-4ee2-829f-48376374ebaa.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/50521780-8e4d-4a97-b361-0d7908850ebf.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/7d8bb59e-bc55-4c40-84a3-5de6669c41a3.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/51910950-e8c3-4576-817e-62c7cc60a610.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/f9b87034-38a8-4d9a-aaa4-507de599ee0d.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/8b98c847-92eb-490c-b8db-ef7726ac73e1.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a94ce07a-a504-45e3-9e97-d3bdb19bd24b.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/953cb9a3-4f45-49a1-98b1-1afe5a4a03ed.jpg?tr=w-300,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/31dd444f-229a-4aa6-b978-4d5fee60e618.jpg?tr=w-300,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/84954473-cd91-41d7-aefe-aac2a49c1e2f.jpg?tr=w-300,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/ce929d73-4070-434e-beaf-78caa3120377.jpg?tr=w-300,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/895b00eb-22cd-4dcc-b9e7-0301ee93325f.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/9d94fa15-f514-4e73-a224-832c3d485b4c.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/e4e15937-f726-40d3-9589-eb7c605d9b50.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/11ab58b8-8aa1-4164-9601-c827bae5e4d8.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/f4c3f4d7-a236-4e7a-92f8-e5ba0417c05e.png?tr=w-1200,cm-pad_resize",
  "_______________________________________________________________________________________________________",

  "https://images-static.nykaa.com/uploads/4ebe90ae-8b35-43a9-b307-fd16313f4f15.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/d4a3fc4d-3fb7-4303-b1e4-95fee8e06b50.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/722cbc0f-ca72-47a8-baa3-ecec4522eaf0.jpg?tr=w-400,cm-pad_resize",
  " ------------------------------------------ _______________________---------------",
  "https://images-static.nykaa.com/uploads/fb7ade3e-737f-4f2c-94f2-7c3726df87c4.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/720b7002-2278-4c47-a25a-3497f7c8a29f.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/f918e299-3184-4170-9952-64ebd85ae2ed.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/8484e0a6-fd1b-43cf-8f31-c38d684af4d4.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/92806b9a-69b4-48bb-8a9a-4a8c480a7c84.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/3e446743-2508-43c3-9f57-ad804e627e6c.jpg?tr=w-200,cm-pad_resize",
  "--------------------------------------------------- ----------------------------",
  "https://images-static.nykaa.com/uploads/49e43a50-37b5-405a-be2d-ab90055115ec.jpg?tr=w-1200,cm-pad_resize",
  "https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg",
  "https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg",
  "https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg",
  "https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg",
  "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg",
  "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg",
  "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg",
  "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg",
  "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg",
  "https://www.facebook.com/tr?id=1591183734470216&ev=PageView&noscript=1",
];
let homeTopBrandsData = [
  {
    image:
      "https://images-static.nykaa.com/uploads/479e3e2c-bd09-48c1-9b60-f5bc417aa1b4.jpg?tr=w-400,cm-pad_resize",
    title: "Up to 30% off +",
    subtitle: "Free Perfume on ₹799+",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/fa57f1cc-ca32-4ad1-b57e-a6bded495f9f.jpg?tr=w-400,cm-pad_resize",
    title: "Meet The Glampions!",
    subtitle: "Shop the winners of Nykaa Femina Beauty Awards 2022",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/2071790b-1bb0-4cf0-b728-f3a6fe465ace.png?tr=w-400,cm-pad_resize",
    title: "Up To 50% Off + Free Kajal on ₹899",
    subtitle: "Best of Makeup",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/2e11b945-d58c-42a8-84cf-372893d0cb7d.jpg?tr=w-400,cm-pad_resize",
    title: "Up To 40% Off",
    subtitle: "Beauty Favourites Of The Year!",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/b7002630-a2a8-46a4-a4fa-3b1d363af358.jpg?tr=w-400,cm-pad_resize",
    title: "NEW Launch 8% Glycolic Acid Toner For Glowing Skin",
    subtitle: "Up To 10% off",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/caa437f5-5cc8-42c8-a40c-bf6ea065bc36.jpg?tr=w-400,cm-pad_resize",
    title: "No.1 Haircare in Salons",
    subtitle: "Up To 10% Off On Haircare Regimes",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/9e79420e-9597-4fc8-8c15-2553ab7c375f.jpg?tr=w-400,cm-pad_resize",
    title: "Up To 50% Off",
    subtitle: "On Makeup Must-Haves!",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/fdc68040-6c65-4112-bf7f-14f089730ef2.jpg?tr=w-400,cm-pad_resize",
    title: "Get 2 Gifts on ₹2000",
    subtitle: "Gift the best of Huda Beauty!",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/eabcf53d-d1cf-4979-b82e-db0662c9cd8f.jpg?tr=w-400,cm-pad_resize",
    title: "Bestsellers Starting at ₹1050",
    subtitle: "+ Exciting Gifts on Purchase!",
  },
];
let onlyAtNykaaData = [
  {
    image:
      "https://images-static.nykaa.com/creatives/fed04774-538e-4c90-a4a1-88597fbeda26/default.png?tr=w-400,cm-pad_resize",
    title: "Upto 30% Off",
    subtitle: "Bestselling Picks For You!",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/7062c2e4-40fe-4afe-8040-f4065cafb3ad/default.jpg?tr=w-400,cm-pad_resize",
    title: "Upto 30% Off +Face Wash on 699",
    subtitle: "Best of Skincare",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/a8c13793-908c-4b97-8562-508a45e2d0fb/default.png?tr=w-400,cm-pad_resize",
    title: "Exciting Gifts On Your Orders",
    subtitle: "Luxe Faves: Wedding Edition!",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/2e713e97-aac8-445c-83ab-ce43561e3fab/default.jpg?tr=w-400,cm-pad_resize",
    title: "Upto 30% Off+Face Scrub on 799",
    subtitle: "Best of Bath & Body",
  },
];
let featuredBrandsData = [
  {
    image:
      "https://images-static.nykaa.com/creatives/1a4e3cce-03bf-4cde-91cd-c94539eb318e/default.png?tr=w-240,cm-pad_resize",
    title: "25% Off Combos",
    subtitle: "Face Wash on 699",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/5d40477d-9541-4fcd-96f6-f8f8be02346b/default.jpg?tr=w-240,cm-pad_resize",
    title: "Upto 40% Off",
    subtitle: "Facewash on ₹399+",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/82a0a371-0372-472a-9fba-172bab04ebc9/default.jpg?tr=w-240,cm-pad_resize",
    title: "Upto 30% Off",
    subtitle: "Super Serum Days",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/79029b00-8961-42f5-a04f-41f2b7550d21/default.jpg?tr=w-240,cm-pad_resize",
    title: "Upto 30% off",
    subtitle: "On Entire Range",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/8e724121-0c7d-44a2-a642-c405fa3412d2/default.jpg?tr=w-240,cm-pad_resize",
    title: "Flat 15% Off",
    subtitle: "On Any 2 Products!",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/d72c35b8-5c16-479c-b1b5-80bd5cda84cd/default.jpg?tr=w-240,cm-pad_resize",
    title: "Flat 15% Off",
    subtitle: "Extra 5% Off on ₹599",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/31c9a995-d947-44b8-9fd2-eeab170917fa/default.png?tr=w-240,cm-pad_resize",
    title: "Upto 35% Off",
    subtitle: "On Entire Range",
  },
  {
    image:
      "https://images-static.nykaa.com/creatives/7afb7533-a149-4866-abf9-031a07d43497/default.jpg?tr=w-240,cm-pad_resize",
    title: "Min 20% Off",
    subtitle: "Serum of 799 on 799",
  },
];
let belowFeaturedBrandsData = [
  {
    image:
      "https://images-static.nykaa.com/uploads/53b660f9-ebf3-4577-8485-12937ba8e5dc.jpg?tr=w-400,cm-pad_resize",
    title: "3 Exciting Gifts On All Orders",
    subtitle: "Glow Routine Of Your Dreams!",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/53de8d3e-c0c8-49c1-9f12-ea580ca704d3.jpg?tr=w-400,cm-pad_resize",
    title: "The Original Bond Builder",
    subtitle: "Reverses Hair Damage",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/9753279c-b131-42b5-a102-61978a904d6e.jpg?tr=w-400,cm-pad_resize",
    title: "On ₹6000: 2 Gifts",
    subtitle: "Award-Winning Beauty Icons",
  },
];

let editorChoiceData = [
  {
    image:
      "https://images-static.nykaa.com/uploads/3c28f575-696a-480d-b00e-b4ac7bcba71a.jpg?tr=w-240,cm-pad_resize",
    title: "Bridal Beauty Trends",
    subtitle: "",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/85859daf-1768-4e7f-90b4-8857e3d10a82.jpg?tr=w-240,cm-pad_resize",
    title: "Appliances & Beauty Tools",
    subtitle: "",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/fb8ff88f-fc64-4e9d-b3fa-965214f35cf0.jpg?tr=w-240,cm-pad_resize",
    title: "Super Serums Squad",
    subtitle: "",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/a0dc18c9-4445-482a-a617-2d82597759a7.jpg?tr=w-240,cm-pad_resize",
    title: "Winter Must-Haves",
    subtitle: "",
  },
];
let popUpData = [
  {
    image:
      "https://images-static.nykaa.com/uploads/8c96131e-ae80-46a2-9da4-51d01afa6af5.jpg?tr=w-600,cm-pad_resize",
    title: "Up To 70% Off: Products Beyond Beauty",
    subtitle: "Lingerie | Gadgets | Bags | Jewellery & More",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/e9c5c6f8-f11e-4456-80ba-6da374172bfe.jpg?tr=w-600,cm-pad_resize",
    title: "Up to 60% off",
    subtitle: "Fashionable pairs to step out in style",
  },
];
let beautyAdviceData = [
  {
    image:
      "https://images-static.nykaa.com/uploads/71c7558d-637c-40ee-b09b-7dfda35cf125.jpg?tr=w-600,cm-pad_resize",
    title: "Catch Up On Top Trends, Expert Advice, Fresh Launches & More",
    subtitle: "Watch Now",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/a3720b61-fd58-40ff-90cd-72eb5b5ee3d4.jpg?tr=w-600,cm-pad_resize",
    title: "Catch Up On Top Trends, Expert Advice, Fresh Launches & More",
    subtitle: "Read More",
  },
];
let arrayPlaceholder = [
  {
    image: "",
    title: "",
    subtitle: "",
  },
];

setCarouselRegular(homeTopBrandsData, ".home-section-top-brands-items");
setCarouselRegular(onlyAtNykaaData, ".home-section-only-at-nykaa-items");
setCarouselRegular(featuredBrandsData, ".home-section-featured-brands-items");
setCarouselRegular(
  belowFeaturedBrandsData,
  ".home-section-below-featured-brands-items"
);
setCarouselRegular(editorChoiceData, ".home-section-editor-choice-items");
setCarouselRegular(popUpData, ".home-section-pop-up-items");
setCarouselRegular(beautyAdviceData, ".home-section-beauty-advice-items");

function setCarouselRegular(allData, parentDiv) {
  let parent = document.querySelector(parentDiv);
  allData.forEach((data) => {
    let item = `          
    <div class="home-carousel-item-regular home-carousel-item">
        <div><img src="${data.image}" alt=""></div>
        <div>
          <p class="font-home-item-title">${data.title}</p>
          <p class="font-home-item-description">${data.subtitle}</p>
        </div>`;
    let empty = `          
    <div class="home-carousel-item-regular">
        <div><img src="${data.image}" alt=""></div>
        <div>
          <p class="font-home-item-title">${data.title}</p>
          <p class="font-home-item-description">${data.subtitle}</p>
        </div>`;
    parent.innerHTML += data.title == "" ? empty : item;
  });
}


//1stc carosal js 
 
//start

const carouselSlide = document.querySelector('.carousel-slide'); 
const carouselImages = document.querySelectorAll('.carousel-slide img'); 
//Buttons 
const prevBtn = document.querySelector('#prevBtn'); 
const nextBtn = document.querySelector('#nextBtn'); 
//Counter 
let counter = 1; 
const size = carouselImages[0].clientWidth; 
carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px)'; 

//Button Listeners 
nextBtn.addEventListener('click', () => { 
    if (counter >= carouselImages.length - 1) return; 
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
    counter++; 
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}); 

prevBtn.addEventListener('click', () => { 
    if (counter <= 0) return; 
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
    counter--; 
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
}); 

carouselSlide.addEventListener('transitionend', () => { 
    if (carouselImages [counter].id === 'lastClone') { 
        carouselSlide.style.transition = "none"; 
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    } 
    if (carouselImages [counter].id === 'firstClone') { 
        carouselSlide.style.transition = "none"; 
        counter = carouselImages.length - counter; 
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    } 
});

//end







let span = document.getElementsByTagName('i');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/5);
	let l = 0;
	let movePer = 20.34;
	let maxMove = 175;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}
//3rd slider 
//start
function slider3btn(){
let span = document.getElementsByTagName('i');
	let product = document.getElementsByClassName('home-section-brand-miss-carousel')
	let product_page = Math.ceil(product.length/5);
	let l = 0;
	let movePer = 20.34;
	let maxMove = 175;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}
}

//end


let cardslider1Data =[
  {
    image:
      "https://images-static.nykaa.com/uploads/144c95cd-e1d3-4b0d-8d5a-a9ecda42e737.jpg?tr=w-480,cm-pad_resize",
    title: "Body Lotions",
    
  },

  {
    image:
      "https://images-static.nykaa.com/uploads/b2df2716-c39d-40a7-b2a5-76c728a2590b.jpg?tr=w-480,cm-pad_resize",
    title: "Feminine Hygiene",
    
  },


  {
    image:
      "https://images-static.nykaa.com/uploads/0d1737ff-11ae-42e4-95df-937ef71a752b.jpg?tr=w-480,cm-pad_resize",
    title: "Face Serums",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/b21dc0cc-ff53-44e6-988c-624c0cc95c18.jpg?tr=w-480,cm-pad_resize",
    title: "Moisturisers",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-480,cm-pad_resize",
    title: "Foundations",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/abfde2f7-4d53-4e07-b9f7-4f088b801595.jpg?tr=w-240,cm-pad_resize",
    title: "Fragrances",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/b306a794-feaa-4a0c-a1b3-5e0b47b24be5.jpg?tr=w-240,cm-pad_resize",
    title: "Skin Nominees",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/4162f650-31a3-4d41-a420-ac02caccce89.jpg?tr=w-240,cm-pad_resize",
    title: "Highlighter",
    
  },
  

  
]


let cardslider2Data =[
  {
    image:
      "https://images-static.nykaa.com/uploads/c59db0d6-872e-4fd1-bc64-8331897b3965.jpg?tr=w-240,cm-pad_resize",
    title: "Moisturisers",
    
  },

  {
    image:
      "https://images-static.nykaa.com/uploads/8f8b55d5-0bfc-4545-ba05-df0177672474.jpg?tr=w-240,cm-pad_resize",
    title: "Bath & Body",
    
  },


  {
    image:
      "https://images-static.nykaa.com/uploads/aff3b609-5b3e-4d8c-8ccb-ad9157824b2d.jpg?tr=w-240,cm-pad_resize",
    title: "Face Washes",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/e3424d3e-3c6f-4dd2-9cd3-d9ce46570133.jpg?tr=w-240,cm-pad_resize",
    title: "Budget Makeup",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/4bec33e3-9145-442b-9171-308834402eb3.jpg?tr=w-240,cm-pad_resize",
    title: "Value Combos",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/d4eba2cb-bbf9-4f6c-ac47-281819f52385.jpg?tr=w-240,cm-pad_resize",
    title: "Shampoos & Conditioners",
    
  },
  

  
]

let cardslider3Data =[
  {
    image:
      "https://images-static.nykaa.com/uploads/818a802d-4e6a-45f6-affe-ed4b378e6997.png?tr=w-240,cm-pad_resize",
    title: "Legendary Makeup",
    subtitle: "By Pat McGrath",
    
  },

  {
    image:
      "https://images-static.nykaa.com/uploads/cc29c90d-627d-4afe-86b3-0ca1a455d6ad.jpg?tr=w-240,cm-pad_resize",
    title: "Exclusive Gifts",
    subtitle: "On Entire Range",
    
  },


  {
    image:
      "https://images-static.nykaa.com/uploads/8041211a-7f36-438b-abc3-25c2c517daa2.jpg?tr=w-240,cm-pad_resize",
    title: "Signature Scents",
    subtitle: "By Huda & Mona Kattan",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/02f7845d-7108-4b17-96f3-665f1a16bb91.jpg?tr=w-240,cm-pad_resize",
    title: "Exciting Gifts",
    subtitle: "On Order of ₹1500",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/61fb6fec-6694-487f-8a13-005e4ee50fdf.jpg?tr=w-240,cm-pad_resize",
    title: "On ₹2300",
    subtitle: "Get Mascara Sample",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/7fbe51fb-f11e-44bb-8188-5f624c1285e0.jpg?tr=w-240,cm-pad_resize",
    title: "View All",
    subtitle: "Luxe",
    
  },
  

  
]

let cardslider4Data =[
  {
    image:
      "https://images-static.nykaa.com/uploads/23951d99-e2f3-48e2-ac05-49d88e4d52f1.jpg?tr=w-240,cm-pad_resize",
    title: "Up To 20% Off",
    subtitle: "On Entire Range",
    
  },

  

  {
      image:
          "https://images-static.nykaa.com/uploads/bc0600c5-ddaf-41d7-8596-285e88067b63.jpg?tr=w-240,cm-pad_resize",
      title: "Up To 50% Off",
      subtitle: "On Entire Range",
    
  },

  {
      image:
        "https://images-static.nykaa.com/uploads/9543baff-6b4e-4d1d-ab9c-e7bded753c9c.jpg?tr=w-240,cm-pad_resize",
      title: "Up To 40% Off",
      subtitle: "On Entire Range",
      
    },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/23951d99-e2f3-48e2-ac05-49d88e4d52f1.jpg?tr=w-240,cm-pad_resize",
    title: "Up To 30% Off",
    subtitle: "On Entire Range",
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/fbf9e414-4cfe-4305-88cf-5282db32df8e.jpg?tr=w-240,cm-pad_resize",
    title: "Up To 40% Off",
    subtitle: "On Entire Range",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/27d2c518-32f0-4d8a-a956-6baf9a27d00a.jpg?tr=w-240,cm-pad_resize",
    title: "View All",
    subtitle: "Makeup",
    
  },
  

  
]

let cardslider5Data =[
  {
    image:
      "https://images-static.nykaa.com/uploads/114c1761-45a9-4d86-82ba-c7acc91d4dd6.jpg?tr=w-240,cm-pad_resize",
    title: "For Brighter",
    subtitle: "More Radiant Skin",
    
  },

  {
    image:
      "https://images-static.nykaa.com/uploads/a8fca56c-3afc-4638-bbc9-870105f165ca.jpg?tr=w-240,cm-pad_resize",
    title: "Award-Winnig",
    subtitle: "Glow-Enhancing Tonner",
  },


  {
    image:
      "https://images-static.nykaa.com/uploads/292a2c1b-ed8c-47a2-a654-79b9d6e9eb96.jpg?tr=w-240,cm-pad_resize",
    title: "Glow Oils",
    subtitle: "For Face and Body",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/e0beebe9-eecc-4444-b53b-e5264b95d844.jpg?tr=w-240,cm-pad_resize",
    title: "Anti-Acne",
    subtitle: "Dream Duo",
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/039f970d-6b63-44e5-8ca8-81cb58901791.jpg?tr=w-240,cm-pad_resize",
    title: "Sheet Masks",
    subtitle: "For A Radiant Glow",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/f0ea4956-76d4-4b7c-95b5-ea1a1b8768b3.jpg?tr=w-240,cm-pad_resize",
    title: "View All",
    subtitle: "Skincare",
    
  },
  

  
]

let cardslider6Data =[
  {
    image:
      "https://images-static.nykaa.com/uploads/1208f0cc-cb69-4c28-8aa7-fe8da2dc1ad4.jpg?tr=w-240,cm-pad_resize",
    title: "Up TO 20% Off",
    subtitle: "On Entire Range",
    
  },

  {
    image:
      "https://images-static.nykaa.com/uploads/4e9cc366-fb38-4f44-8e81-08a44d2a8aa8.jpg?tr=w-240,cm-pad_resize",
    title: "Buy 2 Get 1 Free",
    subtitle: "On Bestsellers",
  },


  {
    image:
      "https://images-static.nykaa.com/uploads/3d11cde9-4383-47cd-9dab-8db6cb61be37.jpg?tr=w-240,cm-pad_resize",
    title: "Up TO 20% Off",
    subtitle: "On Best of Period Care",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/fc5d9749-ae5a-4b5f-acc5-2683ddade305.jpg?tr=w-240,cm-pad_resize",
    title: "Up TO 20% Off",
    subtitle: "On Entrire Range",
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/ed2194cf-b2bc-4dcb-8b44-254ae6f26d3d.jpg?tr=w-240,cm-pad_resize",
      title: "Up TO 25% Off",
      subtitle: "On Bestsellers",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/b9984d64-309c-4ee2-829f-48376374ebaa.jpg?tr=w-240,cm-pad_resize",
    title: "View All",
    subtitle: "More Beauty",
    
  },
  

  
]

let cardslider7Data =[
  {
    image:
      "https://images-static.nykaa.com/uploads/50521780-8e4d-4a97-b361-0d7908850ebf.jpg?tr=w-240,cm-pad_resize",
    title: "Need.New.Now",
    subtitle: "New Launches For You",
    
  },

  {
    image:
      "https://images-static.nykaa.com/uploads/3c9b9fb9-7d22-4176-8d76-2e7347a7cabb.jpg?tr=w-240,cm-pad_resize",
    title: "Flat 10% Off",
    subtitle: "Free Gift on ₹2500",
  },


  {
    image:
      "https://images-static.nykaa.com/uploads/f48bd80c-002a-4327-89f9-ee783dde4aeb.jpg?tr=w-240,cm-pad_resize",
    title: "Flat 30% Off",
    subtitle: "On Entire Range",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/11f92cd4-df7e-4af7-a15a-dafb6329b329.jpg?tr=w-240,cm-pad_resize",
    title: "3 Piece Kit",
    subtitle: "On All Orders!",
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/21355441-c299-46fa-a482-69b9ad141e48.jpg?tr=w-240,cm-pad_resize",
    title: "On All Orders",
    subtitle: "2 Bestsellers Samples",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/a94ce07a-a504-45e3-9e97-d3bdb19bd24b.jpg?tr=w-240,cm-pad_resize",
    title: "View ALL",
    subtitle: "Global Faves",
    
  },
  

  
]

let cardslider8Data =[
  {
    image:
      "https://images-static.nykaa.com/uploads/953cb9a3-4f45-49a1-98b1-1afe5a4a03ed.jpg?tr=w-300,cm-pad_resize",
    title: "Ritika's",
    subtitle: "Winter Essentials",
    
  },

  {
    image:
      "https://images-static.nykaa.com/uploads/31dd444f-229a-4aa6-b978-4d5fee60e618.jpg?tr=w-300,cm-pad_resize",
    title: "Natasha Luthra's",
    subtitle: "Wedding Season Picks",
  },


  {
    image:
      "https://images-static.nykaa.com/uploads/84954473-cd91-41d7-aefe-aac2a49c1e2f.jpg?tr=w-300,cm-pad_resize",
    title: "Cister Co's",
    subtitle: "Luxe Faves",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/ce929d73-4070-434e-beaf-78caa3120377.jpg?tr=w-300,cm-pad_resize",
    title: "Shraddha Gurung's",
    subtitle: "Everyday Essentials",
  },
  
  
  
]

let cardslider9Data =[
  {
    image:
      "https://images-static.nykaa.com/uploads/895b00eb-22cd-4dcc-b9e7-0301ee93325f.jpg?tr=w-400,cm-pad_resize",
    title: "Gifts For The Holidays Season",
    
  },

  {
    image:
      "https://images-static.nykaa.com/uploads/9d94fa15-f514-4e73-a224-832c3d485b4c.jpg?tr=w-400,cm-pad_resize",
    title: "The Hair Hydration Guide",
    
  },


  {
    image:
      "https://images-static.nykaa.com/uploads/e4e15937-f726-40d3-9589-eb7c605d9b50.jpg?tr=w-400,cm-pad_resize",
    title: "It's Self Care Time",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/11ab58b8-8aa1-4164-9601-c827bae5e4d8.jpg?tr=w-400,cm-pad_resize",
    title: "The Eyeshadow Guide",
    
  },
  
 
]

let cardslider10Data =[
  {
    image:
      "https://images-static.nykaa.com/uploads/3c28f575-696a-480d-b00e-b4ac7bcba71a.jpg?tr=w-240,cm-pad_resize",
    title: "Bridal Beauty Trends",
    
  },

  {
    image:
      "https://images-static.nykaa.com/uploads/85859daf-1768-4e7f-90b4-8857e3d10a82.jpg?tr=w-240,cm-pad_resize",
    title: "Appliances & Beauty Tools",
    
  },


  {
    image:
      "https://images-static.nykaa.com/uploads/fb8ff88f-fc64-4e9d-b3fa-965214f35cf0.jpg?tr=w-240,cm-pad_resize",
    title: "Super Serums Squad",
    
  },
  

  

  {
    image:
      "https://images-static.nykaa.com/uploads/a0dc18c9-4445-482a-a617-2d82597759a7.jpg?tr=w-240,cm-pad_resize",
    title: "Winter Must-Haves",
    
  },
  
  

  
]

let cardslider11Data =[
  {
    image:
      "https://images-static.nykaa.com/uploads/4ebe90ae-8b35-43a9-b307-fd16313f4f15.jpg?tr=w-400,cm-pad_resize",
    title: "Conveted Niche Brands For You",
    
  },

  {
    image:
      "https://images-static.nykaa.com/uploads/722cbc0f-ca72-47a8-baa3-ecec4522eaf0.jpg?tr=w-400,cm-pad_resize",
    title: "Celebrating Indian Homegrown Brands",
    
  },


  {
    image:
      "https://images-static.nykaa.com/uploads/d4a3fc4d-3fb7-4303-b1e4-95fee8e06b50.jpg?tr=w-400,cm-pad_resize",
    title: "Excitings Brands and Latest Launches",
    
  },
  
  

  
]

let cardslider12Data =[
  {
    image:
      "https://images-static.nykaa.com/uploads/d8aec36d-d06d-4786-9989-f8ab1a56b503.jpg?tr=w-200,cm-pad_resize",
    title: "NYKD",
    subtitle: "Upto 50% off",
    
  },

  {
    image:
      "https://images-static.nykaa.com/uploads/feb1dbd8-e87c-47d2-a6d5-9f8f4f1a4cd2.jpg?tr=w-200,cm-pad_resize",
    title: "Pipa Bella",
    subtitle: "Upto 85% off",
    
  },


  {
    image:
      "https://images-static.nykaa.com/uploads/dab790d2-f4b5-4479-bbb9-e457e38328bf.jpg?tr=w-200,cm-pad_resize",
    title: "Twenty Dress",
    subtitle: "Upto 70% off",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/c9a0bd8b-82e3-4cd5-84fc-6d70c3a07c14.jpg?tr=w-200,cm-pad_resize",
    title: "Likha",
    subtitle: "Upto 70% off",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/ebb00f7f-52a5-4466-aa11-8e27453487eb.jpg?tr=w-200,cm-pad_resize",
    title: "Azai",
    subtitle: "Upto 75% off",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/7b7c53a5-401a-43f1-acff-9bdb0d946dfa.jpg?tr=w-200,cm-pad_resize",
    title: "IYKYK",
    subtitle: "Upto 60% off",
    
  },

  
  {
    image:
      "https://images-static.nykaa.com/uploads/b37c91fc-a20f-4f81-8536-b57dfd92beb7.jpg?tr=w-200,cm-pad_resize",
    title: "Sneakers",
    subtitle: "Upto 70% off",
    
  },

  {
    image:
      "https://images-static.nykaa.com/uploads/59ce3466-895f-4f54-9c74-21c0ec24fb67.jpg?tr=w-200,cm-pad_resize",
    title: "Rose Gold watches",
    subtitle: "Upto 60% off",
    
  },


  {
    image:
      "https://images-static.nykaa.com/uploads/15686c07-daba-49cb-bc65-11ea90c113d6.jpg?tr=w-200,cm-pad_resize",
    title: "Dresses",
    subtitle: "Upto 70% off",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/86e0d7d2-923b-4958-b9c9-aed41eabc392.jpg?tr=w-200,cm-pad_resize",
    title: "Guess",
    subtitle: "Starting at Rs 3999",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/b662781c-8064-4900-88f1-a93c73f4393d.jpg?tr=w-200,cm-pad_resize",
    title: "Zivame",
    subtitle: "Upto 60% off",
    
  },
  

  {
    image:
      "https://images-static.nykaa.com/uploads/cbe2e4e6-e270-46ec-b2c1-525144d03d26.jpg?tr=w-200,cm-pad_resize",
    title: "Yellow Chimes",
    subtitle: "Upto 70% off",
    
  },

  
  

  
]

setCarouselRegular(cardslider3Data, ".home-section-brand-miss-carousel");
setCarouselRegular(cardslider4Data, ".home-section-brand-miss-carousel4");
setCarouselRegular(cardslider5Data, ".home-section-brand-miss-carousel5");
setCarouselRegular(cardslider6Data, ".home-section-brand-miss-carousel6");
setCarouselRegular(cardslider7Data, ".home-section-brand-miss-carousel7");




function slider4btn(){
  let span = document.getElementsByTagName('i');
    let product = document.getElementsByClassName('home-section-brand-miss-carousel4')
    let product_page = Math.ceil(product.length/5);
    let l = 0;
    let movePer = 20.34;
    let maxMove = 175;
    // mobile_view	
    let mob_view = window.matchMedia("(max-width: 768px)");
    if (mob_view.matches)
     {
       movePer = 50.36;
       maxMove = 504;
     }
  
    let right_mover = ()=>{
      l = l + movePer;
      if (product == 1){l = 0; }
      for(const i of product)
      {
        if (l > maxMove){l = l - movePer;}
        i.style.left = '-' + l + '%';
      }
  
    }
    let left_mover = ()=>{
      l = l - movePer;
      if (l<=0){l = 0;}
      for(const i of product){
        if (product_page>1){
          i.style.left = '-' + l + '%';
        }
      }
    }
    span[1].onclick = ()=>{right_mover();}
    span[0].onclick = ()=>{left_mover();}
  }
  