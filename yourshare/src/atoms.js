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
        "https://th.bing.com/th/id/OIP.47vt0DRKtlaPf1h6oRCnMgHaFZ?pid=ImgDet&rs=1",
        "You", //borrowed by
        0
      ],
      [
        "Vacuum",
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
      "You",
      false,
      "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM=",
      0
    ],
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