User Preferences – MongoDB Schema

A concise Mongoose schema for managing customizable user preferences in a web application.
It demonstrates nested objects, enums, defaults, and validations following clean backend design standards.

Overview

This schema allows users to store and update their personalized settings, including theme, language, and notification preferences.
It ensures proper validation, unique usernames, and sensible default values.

Project Purpose

This project demonstrates:

Effective schema design using nested structures for grouped user settings.

Applying Mongoose validations (required, enum, unique, default) in real-world use cases.

Organizing data for maintainability and scalability in modern web applications.

Example Document
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

Key Features

Unique and required username

Nested preferences object for better organization

Enum validation for theme (light / dark)

Default values for all fields

Follows scalable, real-world schema design

Summary

Created a Mongoose schema for user preferences with nested fields, enums, and validation to manage personalized user settings effectively.
