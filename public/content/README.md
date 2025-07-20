# 📄 JSON-file structures
---

## aboutme.json
```json
{
  "name": "string",
  "role": "string",
  "email": "string",
  "description": "string"
}
```

| Field        | Type   | Description                                |
|--------------|--------|--------------------------------------------|
| `name`       | string | Full name of the person                    |
| `role`       | string | Job title or professional role             |
| `description`| string | Short personal or professional biography   |

---

## contact.json

```json
{
  "email": "string",
  "phone": "string",
  "linkedin": "string",
  "instagram": "string",
  "facebook": "string"
}
```

| Field       | Type   | Description                                |
|-------------|--------|--------------------------------------------|
| `email`     | string | Contact email                              |
| `phone`     | string | Phone number (optional)                    |
| `linkedin`  | string | URL to LinkedIn profile                    |
| `instagram` | string | URL to Instagram profile (optional)        |
| `facebook`  | string | URL to Facebook profile (optional)         |

---

## experiencs.json

```json
[
  {
    "workplace": "string",
    "fromTime": "string",
    "toTime": "string",
    "workTitle": "string",
    "description": "string"
  }
]
```

| Field         | Type   | Description                                |
|---------------|--------|--------------------------------------------|
| `workplace`   | string | Name of the company or organization        |
| `fromTime`    | string | Start date                                 |
| `toTime`      | string | End date or "Present"                      |
| `workTitle`   | string | Job title or role                          |
| `description` | string | Description of responsibilities            |

---

## educations.json

```json
[
  {
    "name": "string",
    "fromTime": "string",
    "toTime": "string",
    "education": "string",
    "description": "string"
  }
]
```

| Field        | Type   | Description                                |
|--------------|--------|--------------------------------------------|
| `name`       | string | Name of the institution                    |
| `fromTime`   | string | Start year or date                         |
| `toTime`     | string | End year or date                           |
| `education`  | string | Degree or field of study                   |
| `description`| string | Additional details or achievements         |

---

## languages.json

```json
[
  {
    "language": "string",
    "level": number
  }
]
```

| Field      | Type    | Description                                     |
|------------|---------|-------------------------------------------------|
| `language` | string  | Language name                                   |
| `level`    | number  | Proficiency level (1–10 scale)                  | 
