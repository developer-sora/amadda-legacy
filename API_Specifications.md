# API Specification

## ๐ User 
|Description|Method|Endpoint|
|:-|:-|:-|
|[Sign Up](#sign-up)|POST|`/api/user/sign-up`|
|[Sign In](#sign-in)|POST|`/api/user/sign-in`|
|[Get User Info](#get-user-info)|GET|`/api/user`|
|[Silent Refresh](#silent-refresh)|POST|`/api/user/silent-refresh`|

## ๐ Diary
|Description|Method|Endpoint|
|:-|:-|:-|
|[Add Diary](#add-diary)|POST|`/api/diary`|
|[Get a Diary](#get-a-diary)|GET|`/api/diary/{diaryId}`|
|[Get All Diaries](#get-all-diaries)|GET|`/api/diary`|
|[Update Diary](#update-diary)|UPDATE|`/api/diary/{diaryId}`|
|[Delete Diary](#delete-diary)|DELETE|`/api/diary/{diaryId}`|


# ๐ User
## Sign Up
```
POST /api/user/sign-up
```

### Parameters
|Name|Type|In|Description|
|-|-|-|-|
|email|string|body|email|
|password|string|body|password|

### Response
```
Status: 201 Created
```
```
{
  "id": 1,
  "email": "sora@gmail.com",
  "nickname": "sora",
  "profie_image": "https://asdf.asdf.asdf",
  "access_token": "mVtYWlsIjoic29yY"
}
```

```
Status: 409 Conflict
```
```
{
  "errors": [
    {
      "type": "ID_ALREADY_EXISTS",
      "message": "์์ด๋๊ฐ ์ด๋ฏธ ์กด์ฌํฉ๋๋ค."
    }
  ]
}
```

## Sign In
```
POST /api/user/sign-in
```

### Parameters
|Name|Type|In|Description|
|-|-|-|-|
|email|string|body|email|
|password|string|body|password|

### Response
```
Status: 200 Ok
```
```
{
  "id": 1,
  "email": "sora@gmail.com",
  "nickname": "sora",
  "profie_image": "https://asdf.asdf.asdf",
  "access_token": "mVtYWlsIjoic29yY"
}
```
```
Status: 403 Forbidden
```
```
{
  "errors": [
    {
      "type": "ALREADY_SIGNED_IN",
      "message": "์ด๋ฏธ ๋ก๊ทธ์ธ๋์ด ์์ต๋๋ค."
    }
  ]
}
```

## Get User Info
```
GET /api/user
```

### Response
```
Status: 200 Ok
```
```
{
  "id": 1,
  "email": "sora@gmail.com",
  "nickname": "sora",
  "profie_image": "https://asdf.asdf.asdf",
  "access_token": "mVtYWlsIjoic29yY"
}
```

```
Status: 401 Unauthorized
```
```
{
  "errors": [
    {
      "type": "UNAUTHORIZED",
      "message": "๋ก๊ทธ์ธ์ ํด์ฃผ์ธ์."
    }
  ]
}

```

## Silent Refresh
```
POST /api/user/slient-refresh
```

### Parameters
|Name|Type|In|Description|
|-|-|-|-|
|refreshToken|string|header(cookie)|refresh token|

### Response
```
Status: 200 Ok
```
```
{
    "access_token": "eyJadsfR5cCI6IkpXVCJ9"
}
```

# ๐ Diary
## Add Diary
```
POST /api/diary
```

### Parameters
|Name|Type|In|Description|
|-|-|-|-|
|title|string|body|diary title|
|content|string|body|diary content|
|date|string|body|diary date|
|weather|string|body|weather|
|is_private|boolean|body|private diary or not|

### Response
```
Status: 201 Created
```
```
{
  "id": 2,
  "title": "์ผ๊ธฐ ์?๋ชฉ",
  "content": "์ผ๊ธฐ ๋ด์ฉ",
  "date": "2021-02-03T00:00:00.000Z",
  "weather": "sunny",
  "is_private": false,
  "created_at": "2021-09-07T15:21:52.000Z",
  "updated_at": "2021-09-07T15:21:52.000Z",
  "user_email": "sora6@gmail.com",
  "user_nickname": "sora6",
  "user_profile_image": "random_image"
}
```

```
Status: 401 Unauthorized
```
```
{
  "errors": [
    {
      "type": "UNAUTHORIZED",
      "message": "๋ก๊ทธ์ธ์ ํด์ฃผ์ธ์."
    }
  ]
}
```

## Get A Diary
```
GET /api/diary/{diaryId}
```

### Parameters
|Name|Type|In|Description|
|-|-|-|-|
|diaryId|number|path|diary id|


### Response
```
Status: 200 OK
```
```
{
  "id": 2,
  "title": "์ผ๊ธฐ ์?๋ชฉ",
  "content": "์ผ๊ธฐ ๋ด์ฉ",
  "date": "2021-02-03T00:00:00.000Z",
  "weather": "sunny",
  "is_private": false,
  "created_at": "2021-09-07T15:21:52.000Z",
  "updated_at": "2021-09-07T15:21:52.000Z",
  "user_email": "sora6@gmail.com",
  "user_nickname": "sora6",
  "user_profile_image": "random_image"
}
```

## Get All Diaries
```
GET /api/diary
```

### Parameters
|Name|Type|In|Description|
|-|-|-|-|
|-|-|-|-|


### Response
```
Status: 200 OK
```
```
[
  {
    "id": 2,
    "title": "์ผ๊ธฐ ์?๋ชฉ",
    "content": "์ผ๊ธฐ ๋ด์ฉ",
    "date": "2021-02-03T00:00:00.000Z",
    "weather": "sunny",
    "is_private": false,
    "created_at": "2021-09-07T15:21:52.000Z",
    "updated_at": "2021-09-07T15:21:52.000Z",
    "user_email": "sora6@gmail.com",
    "user_nickname": "sora6",
    "user_profile_image": "random_image"
  },
  {
    "id": 3,
    "title": "์ผ๊ธฐ ์?๋ชฉ",
    "content": "์ผ๊ธฐ ๋ด์ฉ",
    "date": "2021-02-03T00:00:00.000Z",
    "weather": "sunny",
    "is_private": false,
    "created_at": "2021-09-07T15:21:52.000Z",
    "updated_at": "2021-09-07T15:21:52.000Z",
    "user_email": "sora6@gmail.com",
    "user_nickname": "sora6",
    "user_profile_image": "random_image"
  }, ...
]
```

## Update Diary
```
PATCH /api/diary/{diaryId}
```

### Parameters
|Name|Type|In|Description|
|-|-|-|-|
|diaryId|number|path|diary id|


### Response
```
Status: 200 OK
```
```
{
  "id": 2,
  "title": "์ผ๊ธฐ ์?๋ชฉ",
  "content": "์ผ๊ธฐ ๋ด์ฉ",
  "date": "2021-02-03T00:00:00.000Z",
  "weather": "sunny",
  "is_private": false,
  "created_at": "2021-09-07T15:21:52.000Z",
  "updated_at": "2021-09-07T15:21:52.000Z",
  "user_email": "sora6@gmail.com",
  "user_nickname": "sora6",
  "user_profile_image": "random_image"
}
```

```
Status: 401 Unauthorized
```
```
{
  "errors": [
    {
      "type": "UNAUTHORIZED",
      "message": "๋ก๊ทธ์ธ์ ํด์ฃผ์ธ์."
    }
  ]
}
```

## Delete Diary
```
DELETE /api/diary/{diaryId}
```

### Parameters
|Name|Type|In|Description|
|-|-|-|-|
|diaryId|number|path|diary id|


### Response
```
Status: 200 OK
```
```
{
  "id": 2,
  "title": "์ผ๊ธฐ ์?๋ชฉ",
  "content": "์ผ๊ธฐ ๋ด์ฉ",
  "date": "2021-02-03T00:00:00.000Z",
  "weather": "sunny",
  "is_private": false,
  "created_at": "2021-09-07T15:21:52.000Z",
  "updated_at": "2021-09-07T15:21:52.000Z",
  "user_email": "sora6@gmail.com",
  "user_nickname": "sora6",
  "user_profile_image": "random_image"
}
```

```
Status: 401 Unauthorized
```
```
{
  "errors": [
    {
      "type": "UNAUTHORIZED",
      "message": "๋ก๊ทธ์ธ์ ํด์ฃผ์ธ์."
    }
  ]
}
