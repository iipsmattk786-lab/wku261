const appData = {
  "categories": [
    {
      "id": "second_hand",
      "name": {
        "ko": "중고거래",
        "en": "Second-hand",
        "zh": "二手交易"
      }
    },
    {
      "id": "shopping",
      "name": {
        "ko": "쇼핑",
        "en": "Shopping",
        "zh": "购物"
      }
    },
    {
      "id": "delivery",
      "name": {
        "ko": "배달",
        "en": "Delivery",
        "zh": "外卖"
      }
    },
    {
      "id": "transportation",
      "name": {
        "ko": "교통",
        "en": "Transportation",
        "zh": "交通"
      }
    }
  ],
  "apps": [
    {
      "id": "karrot",
      "category_id": "second_hand",
      "name": "당근마켓 (Karrot)",
      "icon_url": "https://play-lh.googleusercontent.com/xjnQofnaDvew8Ets41lC92D3kQ_d57D3E5qJ_1D8gW_lKxWc-_pC9-tU0w_OaV-n0f0=w240-h480-rw",
      "download_links": {
        "android": "https://play.google.com/store/apps/details?id=com.towneers.www",
        "ios": "https://apps.apple.com/kr/app/karrot/id1018769995"
      },
      "tutorials": [
        {
          "tutorial_id": "karrot_buy",
          "title": {
            "ko": "물건 검색하기",
            "en": "Searching for an item",
            "zh": "搜索物品"
          },
          "steps": [
            {
              "step_number": 1,
              "image_url": "assets/karrot.png",
              "highlight_area": {"x": 5, "y": 5, "width": 90, "height": 8},
              "description": {
                "ko": "메인 화면 상단의 돋보기 버튼이나 검색창을 눌러 원하는 물건을 검색할 수 있습니다.",
                "en": "Tap the search bar or magnifying glass at the top of the main screen to search for an item.",
                "zh": "点击主屏幕顶部的搜索栏或放大镜图标即可搜索所需物品。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "coupang",
      "category_id": "shopping",
      "name": "쿠팡 (Coupang)",
      "icon_url": "https://play-lh.googleusercontent.com/3Vb1dJv_LzUe7S2uM-4w1W39r3bK1E1lR6q4C7G9Z3z0lG4sK8w9U1f_T3E5_S6w7Q=w240-h480-rw",
      "download_links": {
        "android": "https://play.google.com/store/apps/details?id=com.coupang.mobile",
        "ios": "https://apps.apple.com/kr/app/coupang/id454434967"
      },
      "tutorials": [
        {
          "tutorial_id": "coupang_rocket_delivery",
          "title": {
            "ko": "쿠팡 메인화면 살펴보기",
            "en": "Exploring Coupang Home",
            "zh": "探索 Coupang 主页"
          },
          "steps": [
            {
              "step_number": 1,
              "image_url": "assets/coupang.png",
              "highlight_area": {"x": 5, "y": 5, "width": 90, "height": 8},
              "description": {
                "ko": "상단 검색창에 구매하고 싶은 상품명을 입력하세요. 하단에서는 로켓배송 추천 상품을 볼 수 있습니다.",
                "en": "Enter the product you want to buy in the top search bar. Below, you can see Rocket Delivery recommendations.",
                "zh": "在顶部搜索栏中输入您想购买的商品名称。在下方，您可以看到火箭配送推荐商品。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "baemin",
      "category_id": "delivery",
      "name": "배달의민족 (Baemin)",
      "icon_url": "https://play-lh.googleusercontent.com/9C3H9k5Y7hZ4H1U3k7w4S3J4w0r0r4S0W9A2z4W2c7w3x5Y7P7Z3z4b1W8W3A4C7X7Q=w240-h480-rw",
      "download_links": {
        "android": "https://play.google.com/store/apps/details?id=com.sampleapp",
        "ios": "https://apps.apple.com/kr/app/id378084485"
      },
      "tutorials": [
        {
          "tutorial_id": "baemin_order",
          "title": {
            "ko": "음식 카테고리 선택하기",
            "en": "Selecting a food category",
            "zh": "选择食品类别"
          },
          "steps": [
            {
              "step_number": 1,
              "image_url": "assets/baemin.png",
              "highlight_area": {"x": 5, "y": 25, "width": 90, "height": 50},
              "description": {
                "ko": "메인 화면에서 치킨, 피자 등 원하는 음식 카테고리 아이콘을 누르면 주변 식당 목록이 나타납니다.",
                "en": "Tap the desired food category icon (e.g. Chicken, Pizza) on the main screen to see nearby restaurants.",
                "zh": "在主屏幕上点击所需的食品类别图标（如炸鸡、披萨），即可看到附近的餐厅列表。"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "kakaot",
      "category_id": "transportation",
      "name": "카카오T (Kakao T)",
      "icon_url": "https://play-lh.googleusercontent.com/yT_-C7H9pT4M8D_uT3O_B_Ww_4D4k5wX7wQ2vW8J_tP3_R8_K_W4U5Q9N9Z3S_L_4B4=w240-h480-rw",
      "download_links": {
        "android": "https://play.google.com/store/apps/details?id=com.kakao.taxi",
        "ios": "https://apps.apple.com/kr/app/id981110422"
      },
      "tutorials": [
        {
          "tutorial_id": "kakaot_taxi",
          "title": {
            "ko": "택시 등 이동수단 선택",
            "en": "Selecting a transport method",
            "zh": "选择交通工具"
          },
          "steps": [
            {
              "step_number": 1,
              "image_url": "assets/kakaot.png",
              "highlight_area": {"x": 5, "y": 60, "width": 90, "height": 35},
              "description": {
                "ko": "지도 하단의 둥근 버튼들 중 '택시(Taxi)', '바이크(Bike)' 등 원하는 이동 수단을 선택하세요.",
                "en": "Select your desired transport method like 'Taxi' or 'Bike' from the round buttons below the map.",
                "zh": "从地图下方的圆形按钮中选择您想要的交通工具，如“出租车”或“自行车”。"
              }
            }
          ]
        }
      ]
    }
  ],
  "glossary": [
    {
      "category": "common",
      "ko": "검색",
      "en": "Search",
      "zh": "搜索"
    },
    {
      "category": "common",
      "ko": "결제하기",
      "en": "Pay",
      "zh": "付款"
    },
    {
      "category": "common",
      "ko": "장바구니",
      "en": "Shopping Cart",
      "zh": "购物车"
    },
    {
      "category": "common",
      "ko": "취소",
      "en": "Cancel",
      "zh": "取消"
    },
    {
      "category": "common",
      "ko": "확인",
      "en": "Confirm / OK",
      "zh": "确认"
    },
    {
      "category": "shopping",
      "ko": "품절",
      "en": "Sold Out",
      "zh": "售罄"
    },
    {
      "category": "shopping",
      "ko": "무료배송",
      "en": "Free Shipping",
      "zh": "免运费"
    },
    {
      "category": "delivery",
      "ko": "배달팁",
      "en": "Delivery Fee",
      "zh": "配送费"
    },
    {
      "category": "delivery",
      "ko": "요청사항",
      "en": "Requests / Notes",
      "zh": "要求 / 备注"
    },
    {
      "category": "second_hand",
      "ko": "예약중",
      "en": "Reserved",
      "zh": "预约中"
    },
    {
      "category": "second_hand",
      "ko": "거래완료",
      "en": "Sold",
      "zh": "交易完成"
    }
  ]
};
