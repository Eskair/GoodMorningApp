const users = [
  {
    _id: "0001",
    handle: "mugiwara",
    email: "pirateking@grandline.com",
    password: "Password123",
    displayName: "Monkey D. Luffy",
    avatarSrc:
      "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645775/onePiece/luffy-avatar_ulpfwt.png",
    bannerSrc:
      "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645774/onePiece/luffy-banner_w0yxyc.jpg",
    location: "Grandline",
    joined: "2016-02-02T12:00",
    bio: "Power isn't determined by your size, but the size of your heart and dreams.",
    followingIds: ["zoro"],
    followerIds: ["zoro"],
    likeIds: ["1212689921057665024"],
  },
  {
    _id: "0002",
    handle: "zoro",
    displayName: "Roronoa Zoro",
    email: "threeswordsstyle@grandline.com",
    password: "Password123",
    avatarSrc:
      "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645775/onePiece/zoro-avatar_yclmfy.png",
    bannerSrc:
      "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645774/onePiece/zoro-banner_hcpm2i.jpg",
    location: "Grandline",
    joined: "2016-10-12T12:00",
    bio: "You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face.",
    followingIds: ["mugiwara", "blackleg"],
    followerIds: ["mugiwara", "blackleg"],
    likeIds: ["1209791721099411456"],
  },
  {
    _id: "0003",
    handle: "blackleg",
    displayName: "Vinsmoke Sanji",
    email: "loverboy@grandline.com",
    password: "Password123",
    avatarSrc:
      "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645775/onePiece/sanji-avatar_ndpfnw.png",
    bannerSrc:
      "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645775/onePiece/sanji-banner_zdtvgq.jpg",
    location: undefined,
    joined: "2019-09-01T18:00",
    bio: "Men who can't wipe away the tears from a women's eyes, aren't real men.",
    followingIds: ["mugiwara"],
    followerIds: ["mugiwara"],
    likeIds: [],
  },
];

const posts = [
  // Zoro
  {
    _id: "1209791721099411456r1",
    authorHandle: "zoro",
    timestamp: "2020-01-19T09:14:00+00:00",
    sortedTimestamp: "2020-01-19T09:14:00+00:00",
    retweetOf: "1209791721099411456",
    likedBy: [],
    retweetedBy: [],
  },
  {
    _id: "1212689921057665024",
    authorHandle: "zoro",
    timestamp: "2020-01-12T09:14:00+00:00",
    sortedTimestamp: "2020-01-12T09:14:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status:
      "You'll never understand...your swords will never be as heavy as mine!",
    media: [
      {
        type: "img",
        url: "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645774/onePiece/no-swords-will-heavy_dk9v5f.jpg",
      },
    ],
  },

  // Mugiwara
  {
    _id: "1209791721099411456",
    authorHandle: "zoro",
    timestamp: "2019-12-26T14:38:00+00:00",
    sortedTimestamp: "2019-12-26T14:38:00+00:00",
    likedBy: [],
    retweetedBy: ["mugiwara"],
    status:
      "I Don’t Wanna Conquer Anything. It's Just That The Person With The Most Freedom On The Sea Is The Pirate King.",
    media: [],
  },
  {
    _id: "1215324598067245056r2",
    authorHandle: "mugiwara",
    timestamp: "2020-01-19T09:14:00+00:00",
    sortedTimestamp: "2020-01-19T09:14:00+00:00",
    retweetOf: "1215324598067245056",
    likedBy: [],
    retweetedBy: [],
  },
  {
    _id: "1214624813723136002",
    authorHandle: "mugiwara",
    timestamp: "2020-01-12T04:31:00+00:00",
    sortedTimestamp: "2020-01-12T04:31:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `I Love Heroes, But I Don’t Want To Be One. Do You Even Know What A Hero Is!? For Example, You Have Some Meat. Pirates Will Feast On The Meat, But The Hero Will Distribute It Among The People! I Want To Eat Meat!`,
    media: [
      {
        type: "img",
        url: "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645773/onePiece/meat-luffy_rxq8km.jpg",
      },
    ],
  },
  {
    _id: "1209788222324256768",
    authorHandle: "mugiwara",
    timestamp: "2019-12-25T21:53:00+00:00",
    sortedTimestamp: "2019-12-25T21:53:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `Are We Friends? Or Are We Foes? That Kind Of Thing You Decide Yourselves!`,
    media: [
      {
        type: "img",
        url: "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645775/onePiece/Straw-Hat-Pirates_o7dgpr.jpg",
      },
    ],
  },
  {
    _id: "1212021009320161280",
    authorHandle: "mugiwara",
    timestamp: "2019-12-30T19:23:00+00:00",
    sortedTimestamp: "2019-12-30T19:23:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `If That Old Man Tells Me Anything...I Will Quit Being A Pirate. If It’s A Boring Adventure, I Don’t Want To Do It.`,
    media: [
      {
        type: "img",
        url: "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645774/onePiece/Luffy-feature_fdc9cw.jpg",
      },
    ],
  },
  // blackleg
  {
    _id: "1215337574526525440",
    authorHandle: "blackleg",
    timestamp: "2020-01-09T13:20:00+00:00",
    sortedTimestamp: "2020-01-09T13:20:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `Messing With A Cook Of The Sea Is A Good Way To Get Yourself Killed.....Remember That Well`,
    media: [
      {
        type: "img",
        url: "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645775/onePiece/Sanji-and-Fullbody_h4k6su.jpg",
      },
    ],
  },
  {
    _id: "1215324598067245056",
    authorHandle: "blackleg",
    timestamp: "2020-01-06T09:20:00+00:00",
    sortedTimestamp: "2020-01-06T09:20:00+00:00",
    likedBy: [],
    retweetedBy: ["zoro"],
    status: `I Understand Starving People More Than Anyone`,
    media: [
      {
        type: "img",
        url: "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645774/onePiece/Sanji-starving_xi4m7d.jpg",
      },
    ],
  },
  {
    _id: "1215288136026284032",
    authorHandle: "blackleg",
    timestamp: "2019-12-24T14:02:00+00:00",
    sortedTimestamp: "2019-12-24T14:02:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `It Doesn’t Matter If You Spend 10 Thousand Berries Or One Million Berries, You Should Never Waste Food.`,
    media: [
      {
        type: "img",
        url: "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645775/onePiece/Sanji-waste-food_aygzql.jpg",
      },
    ],
  },
  {
    _id: "1215286068716736512",
    authorHandle: "blackleg",
    timestamp: "2019-12-29T22:19:00+00:00",
    sortedTimestamp: "2019-12-29T22:19:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `Me.....I’m Mr.Prince.`,
    media: [
      {
        type: "img",
        url: "https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638645774/onePiece/Mr.Prince-Sanji_xy6rgm.jpg",
      },
    ],
  },
];

module.exports = {
  users,
  posts,
};