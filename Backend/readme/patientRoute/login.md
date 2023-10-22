# Login Patient

**URL** : `/patient/login`

**Method** : `POST`

**Auth required** : No

**Data constraints**

```json
{
  "patientEmail": "Email",
  "password": "PASSWORD"
}
```

**Data example**

```json
{
  "patientEmail": "zeduard89@gmail.com",
  "password": "123456"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "id": 21,
  "name": "Guillermo",
  "lastName": "Paez",
  "phone": "0111111",
  "email": "zeduard89@gmail.com",
  "password": "$2a$10$hojf5rvjvBnkENRmWle.NuyHDfW3IKfBwiSzLuDWxos8UqglZP8.u",
  "session": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsInJvbGUiOiJwYXRpZW50IiwiaWF0IjoxNjk3NzYwNzU4LCJleHAiOjE2OTc3Njc5NTh9.f5-k0dIw79vDFrW5zhcYlsjmiUVm8tfZ-TWiyrXiqlE",
  "role": "patient"
}
```

## Success Response

**Code** : `400 NO`
**Condition** : If 'email' don't exist.

**Content example**

```json
{
  "message": "false"
}
```

## Success Response

**Code** : `400 NO`

## Error Response

**Condition** : Wrong Password.

```json
{
  "message": "worng Password"
}
```

- [Back](../../README.md) : `MainPage`
