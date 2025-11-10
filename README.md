# **User Preferences – MongoDB Schema**

A concise **Mongoose schema** for managing customizable **user preferences** in a web application.  
It demonstrates **nested objects**, **enums**, **defaults**, and **validations** — following clean and scalable backend design principles.

---

## **Overview**

This schema enables storing and managing user settings such as **theme**, **language**, and **notification preferences**.  
It ensures **data integrity** with validations, **unique usernames**, and **sensible default values**.

---

## **Example Document**

```json
{
  "username": "john_doe",
  "preferences": {
    "theme": "dark",
    "language": "en",
    "notifications": {
      "email": true,
      "sms": false
    }
  }
}
```

---

## **Key Features**

- **Unique** and **required** `username` field  
- **Nested** `preferences` object for structured organization  
- **Enum validation** for `theme` (`light` / `dark`)  
- **Default values** for all preference fields  
- Built using **Mongoose** with **real-world schema design** practices  

---

## **Summary**

> Designed a **Mongoose schema** for user preferences featuring **nested fields**, **enums**, and **validation** to efficiently manage personalized settings in web applications.

---

**GitHub:** [https://github.com/<your-username>/user-preferences-schema](https://github.com/<your-username>/user-preferences-schema)  
**Video:** [Google Drive Link]  

---

### **Recommended GitHub Tagline**

> **MongoDB schema for managing customizable user preferences using Mongoose.**
