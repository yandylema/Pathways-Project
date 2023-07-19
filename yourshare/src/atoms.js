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
        "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0",
        "user", //borrowed by
        0
      ],
      [
        "Car",
        "Marcos",
        "https://th.bing.com/th/id/R.93ffae8c571f89903bd67f5db2c2faa8?rik=dlyFWP7Vdv6MiQ&pid=ImgRaw&r=0",
        null,
        1
      ]
    ]
});
  

export const community = atom({
  key: 'community', // unique ID (with respect to other atoms/selectors)
  default: [
    [
      "Marcos",
      false,
      "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      0
    ],
    [
      "Haley",
      true,
      "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      1
    ],
    [
      "Stacey",
      false,
      "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      2
    ],
  ]
});