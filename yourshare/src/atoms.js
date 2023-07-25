import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

export const items = atom({
    key: 'items', // unique ID (with respect to other atoms/selectors)
    default: [[
        "Rake", //name
        "Marcos", //owned by
        "https://th.bing.com/th/id/R.aa8922f1e827ad68e519bda324b3e0dd?rik=LNpD9hnLvPNjoQ&pid=ImgRaw&r=0",
        "You", //borrowed by
        0
      ],
      [
        "Vacuum",
        "Haley",
        "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0",
        null,
        1
      ],
      [
        "Lawnmower",
        "You",
        "https://th.bing.com/th/id/R.cfed5fa429ad8a67f8354d062004c543?rik=Kh8YZkxKGq4HfQ&riu=http%3a%2f%2fwww.tlclawncare.com.au%2fSite%2fimages%2fhonda_mower.png&ehk=3g%2fIKtiIrTqPySB6TQFUy3S%2bjN%2fyEVUy389B%2f4wzKoE%3d&risl=&pid=ImgRaw&r=0",
        null,
        2
      ],
      [
        "Pan",
        "Stacey",
        "https://th.bing.com/th/id/R.50d83c0db2b7cd40dbd53722fdc95b04?rik=zcGjXySaKcR6KA&pid=ImgRaw&r=0",
        null,
        3
      ],
      [
        "Basketball",
        "Marcos",
        "https://upload.wikimedia.org/wikipedia/commons/b/be/Isolated_basketball.png",
        null,
        4
      ],
      [
        "Table",
        "You",
        "https://th.bing.com/th/id/R.001f18a42a6cc499eb5a64e49b73b350?rik=NchaWhtaE3j7qw&pid=ImgRaw&r=0",
        null,
        5
      ],
      [
        "Grill",
        "Haley",
        "https://th.bing.com/th/id/R.04658383ebe4258a9e650cb500b21315?rik=6Xu5Osgr7JUSEg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f8%2fGrill-PNG-Transparent-Image.png&ehk=7zQXttnl1JIX6NTD39OQY54vSrYB7JFoUIuubHu1ISA%3d&risl=&pid=ImgRaw&r=0",
        null,
        6
      ]
    ]
});
  

export const community = atom({
  key: 'community', // unique ID (with respect to other atoms/selectors)
  default: [
      [
      "You",
      false,
      "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM=",
      0
    ],
    [
      "Marcos",
      false,
      "https://th.bing.com/th/id/R.8c012738dc65a6c1abf2817ac8f1c8f5?rik=SPT%2fyv%2f9JLPTDA&pid=ImgRaw&r=0",
      1
    ],
    [
      "Haley",
      true,
      "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      2
    ],
    [
      "Stacey",
      false,
      "https://th.bing.com/th/id/OIP.Mt5TUM4xKp-Toe15JJoPrAAAAA?pid=ImgDet&rs=1",
      3
    ],
  ]
});